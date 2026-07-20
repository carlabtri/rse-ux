import os, re

BASE = "https://toyotaresearchinstitute.atlassian.net/jira/people/"

JIRA = {
    "Carla Bellido":             "712020:d99b0a71-c9b3-48ae-8be6-e07f9f7895a6",
    "David Berkowitz":           "5c9454eed30a312d4a176eed",
    "Ashish Mangukiya":          "712020:71c91a24-56bd-4e8e-a9d9-471c5fdfc2e3",
    "Ayush Nema":                "712020:a16ef30f-a116-4969-86b5-3ca04c51396f",
    "Mike Puzon":                "60cba7dcdeecef006a954b2f",
    "Megan Peurach":             "712020:44127336-33c4-493b-8f10-464f3016b6a2",
    "Megan Applegate-Kenton":    "712020:e46271a8-a3e0-478b-acad-0d79bc71befc",
    "Thomas Balch":              "60cba9a9b215610069ab4a7c",
    "Kayli Battel":              "712020:533acc14-e5a5-4774-8122-36d68b40d9c4",
    "Evelyn Dixon":              "6109d0e0eb7aef0069f09be2",
    "John Gideon":               "557058:e2d5955a-7782-4216-a63b-f1a499a644e2",
    "Hieu Nguyen":               "5e7019e0d6e3cc0c3dd9c272",
    "Guy Rosman":                "60cba30d8f2cc100694d6a06",
    "Todd Rowell":               "70121:062d8b5a-3336-43b9-a6f7-6c99fc8a5ddd",
    "Kechun Liu":                "712020:12efa1b5-de08-48c7-9158-5ea479d76cb0",
    "Russell Freeman":           "712020:f1ada0d4-2472-48a2-b1a1-3c9775873c13",
    "Satya Kotari":              "70121:fb25f8be-8283-47f8-a282-d73a21ea6543",
    "Todd Osborne":              "712020:1fb553d6-ead2-438a-ae0b-9075b75e43e7",
    "Yiting Liu":                "60cba64b758a5d006a0c12fa",
}

ROOT = "/sessions/youthful-blissful-keller/mnt/Portfolio"
files = [
    "ops-chatbot.html",
    "whyzen.html",
    "llm2cad.html",
    "color-perception.html",
    "unstuck.html",
    "swarm.html",
    "simplay.html",
    "tri-website.html",
]

for fname in files:
    path = os.path.join(ROOT, fname)
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()
    original = html
    count = 0
    for name, uid in JIRA.items():
        old = '<span class="team-name">' + name + '</span>'
        new = '<a class="team-name" href="' + BASE + uid + '" target="_blank">' + name + '</a>'
        if old in html:
            html = html.replace(old, new)
            count += 1
    if html != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"  {fname}: {count} name(s) linked")
    else:
        print(f"  {fname}: no changes needed")

print("\nDone. Names still without Jira links:")
for fname in files:
    path = os.path.join(ROOT, fname)
    with open(path, encoding="utf-8") as f:
        html = f.read()
    unlinked = re.findall(r'<span class="team-name">(.+?)</span>', html)
    for n in unlinked:
        if 'style' not in n:
            print(f"  {fname}: {n}")
