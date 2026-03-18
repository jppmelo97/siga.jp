import urllib.request

urls = [
    "https://img.youtube.com/vi/CevVfbugmMw/hqdefault.jpg",
    "https://img.youtube.com/vi/CevVfbugmMw/maxresdefault.jpg",
    "https://img.youtube.com/vi/CevVfbugmMw/0.jpg",
    "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=CevVfbugmMw&format=json"
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            print(f"{url} -> {response.status}")
    except Exception as e:
        print(f"{url} -> Error: {e}")
