import json


def migrate(filename):
    filename = '../public/languages/' + filename

    with open(filename, encoding="utf-8") as file:
        data = json.load(file)

    for p in data:
        p["uses"] = p["lects"]

    with open(filename, 'w', encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=4)


filenames = ['Dargin/phonology.json',
             'Circassian/phonology.json',
             'Ossetian/phonology.json']

[migrate(f) for f in filenames]
