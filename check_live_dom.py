import urllib.request

url = "https://sigajp.vercel.app"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        content = response.read().decode('utf-8')
        print(f"Content length: {len(content)}")
        if "CevVfbugmMw" in content:
            print("FOUND CevVfbugmMw in raw HTML")
        else:
            print("NOT FOUND CevVfbugmMw in raw HTML")
        if "8FQhwZVDFmI" in content:
            print("FOUND 8FQhwZVDFmI (AlfaOmega) in raw HTML")
        else:
            print("NOT FOUND 8FQhwZVDFmI in raw HTML")
except Exception as e:
    print(f"Error fetching: {e}")
