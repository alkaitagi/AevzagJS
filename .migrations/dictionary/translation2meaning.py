import os
import json

root = os.path.dirname(os.path.abspath(__file__))+'\\'
lects = ["Iron", "Kaitag", "Keren", "Kabardian", "Kiurin"]

for l in lects:
    path = f"{root}{l}\\dictionary.json"
    with open(path, encoding='utf-8') as f:
        data = json.loads(f.read())

    for d in data:
        u = {"meaning": d["translation"]}
        if "explanation" in d:
            u["notes"] = [d["explanation"]]
        if "tags" in d:
            u["tags"] = d["tags"].split()

        d["uses"] = [u]
        if len(d["forms"]) > 0:
            d["forms"] = [d["forms"][0]["text"]]
        del d["translation"]

    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
