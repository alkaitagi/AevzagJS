import localforage from "localforage";
import { ref } from "vue";
import StorageCache from "@/storage-cache";

export const lects = ref([] as string[]);
export const root =
  import.meta.env.VITE_STORE ??
  "https://raw.githubusercontent.com/raxysstudios/avzag_deprecated/store/";

export const storage = localforage.createInstance({ name: "user" });
export const cache = new StorageCache(storage, "cache", () =>
  storage
    .getItem<string[]>("lects")
    .then((ls) => (lects.value = ls ?? ["Kaitag"]))
    .then(() => checkOutdated(true))
);

export async function checkOutdated(alert = false) {
  const entries = Object.entries(cache.records.value).filter(
    ([p]) => !p.includes("/") || lects.value.some((l) => p.startsWith(l))
  );
  const outdated = [];
  for (const [path, edited] of entries) {
    const updated = await lastCommit(path);
    if (Date.now() - 300000 > updated && updated > edited) outdated.push(path);
  }
  if (outdated.length) {
    console.log("cleaning outdated cache", outdated);
    if (alert && Object.keys(cache.records.value).length)
      window.alert("New data is available, reloading...");
    outdated?.forEach((p) => cache.delete(p));
    location.reload();
  }
}
async function lastCommit(path: string) {
  let time = 0;
  if (path) {
    const url = "https://api.github.com/repos/raxysstudios/avzag_deprecated/commits";
    const params = new URLSearchParams({ path, sha: "store", per_page: "1" });
    const commits = await fetch(url + "?" + params).then((r) => r.json());
    const date = commits[0]?.commit.committer?.date;
    if (date) time = new Date(date).getTime();
  }
  return time;
}

export async function loadJSON<T>(path: string, defaultValue?: T) {
  if (!path.endsWith(".json")) path += ".json";
  if (!import.meta.env.DEV && !cache.add(path))
    return (await storage.getItem<T>(path)) as T;
  console.log("cached", path);
  const f = await fetch(root + path, { cache: "no-store" })
    .then((r) => r.json())
    .then((j) => j as T)
    .catch(() => defaultValue as T);
  await storage.setItem(path, f);
  return f;
}
export async function loadLectsJSON<T>(path: string) {
  const files = {} as Record<string, T>;
  for (const lect of lects.value) {
    const file = await loadJSON<T>(lect + "/" + path);
    if (file) files[lect] = file;
  }
  return files;
}
