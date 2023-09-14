<p align="center">
  <a href="" rel="noopener">
 <img width=100px height=100px src="https://i.ibb.co/wdKn3G2/logo.png" alt="Esana"></a>
</p>

# **Instagram downloader**

A Node.js package for downloading Instagram videos, posts, stories, and more. This package provides an unofficial scraping functionality to retrieve content from Instagram, similar to [saveig.app](https://saveig.app).

_Coded by: [Sasmitha Ashinsana](https://github.com/Sasmeee)_

## Installation

```bash
npm i @sasmeee/igdl

#or

yarn add @sasmeee/igdl
```

## Usage

```js
const instagramDl = require("@sasmeee/igdl");
```

Code :

```js
const url = "https://www.instagram.com/reel/Co3tkGLL8nl/";

const dataList = await instagramDl(url);
console.log(dataList);
```

Output :

```json
{
  "thumbnail_link": "https://igcdn.xyz/?token=6226c59df70636ccf03a4d2321b78b6300cc33d1ca36cba7988771014c37deba&time=1694700746&file=https%3a%2f%2fscontent.cdninstagram.com%2fv%2ft51.2885-15%2f331591872_138561172439484_5369881234926580154_n.jpg%3fstp%3ddst-jpg_e15_fr_s1080x1080%26_nc_ht%3dscontent.cdninstagram.com%26_nc_cat%3d100%26_nc_ohc%3dzqtUhPwsAhMAX8n7ljB%26edm%3dAPs17CUBAAAA%26ccb%3d7-5%26oh%3d00_AfAavuejyZJjpzRDioX6JZ3J2BYwxSoR9-PoaLyqSMFMwQ%26oe%3d6504A849%26_nc_sid%3d10d13b",
  "download_link": "https://download.ig-13-data.xyz/ig/1694698946/7d4ca892a9425a6d66dbbd3dd5c30efac1309cc485daaf4019c0e8d1c8296cf8?file=aHR0cHM6Ly9zY29udGVudC5jZG5pbnN0YWdyYW0uY29tL3YvdDUwLjI4ODYtMTYvMzMwNzQ5NzAxXzY4OTQwNzY5Mjg3NDI5MV80MDI3MTgzNzE1MzQ4MTQyMjA5X24ubXA0P2VmZz1leUoyWlc1amIyUmxYM1JoWnlJNkluWjBjMTkyYjJSZmRYSnNaMlZ1TGpjeU1DNW1aV1ZrTG1KaGMyVnNhVzVsTG1NeUlpd2ljV1ZmWjNKdmRYQnpJam9pVzF3aWFXZGZkMlZpWDJSbGJHbDJaWEo1WDNaMGMxOXZkR1pjSWwwaWZRJl9uY19odD1zY29udGVudC5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTA3Jl9uY19vaGM9WmNjT2F3V2pnSEFBWC1Td0hEVCZlZG09QVBzMTdDVUJBQUFBJnZzPTEyMjU5NDQ5OTEzMzk4NzBfMjI3MjA1Mzg2MyZfbmNfdnM9SEJrc0ZRQVlKRWRCV0ZoMGFFMTZiM0ZOT0VFelRVTkJTVVpaYTBrMVFXSjFUVE5pYTFsTVFVRkJSaFVBQXNnQkFCVUFHQ1JIUWxoTGVWSk9aR3MxUTFoWVVqaERRVXBHTkZNNVRqaENNVzlTWW10WlRFRkJRVVlWQWdMSUFRQW9BQmdBR3dBVkFBQW1qcGE4N0piTTZrQVZBaWdDUXpNc0YwQXhDSEt3SU1TY0dCSmtZWE5vWDJKaGMyVnNhVzVsWHpGZmRqRVJBSFhxQndBJTNEJl9uY19yaWQ9NGVmZWI5NzkwNyZjY2I9Ny01Jm9oPTAwX0FmQkhLZ2JPR0dQZURWVnFpcUFOM0lmLS14REcxYUFQTFV3M3k1Sk1yQWp2Rmcmb2U9NjUwNDVCMzAmX25jX3NpZD0xMGQxM2ImbmFtZT1TYXZlSUcuQXBwXzMwNDIxMDA0NjU5MzYzNTM3NjUubXA0"
}
```

## Support

If you find this package useful, please consider putting a star on the [GitHub repository]("https://github.com/sasmeee/igdl") to show your support.

## License

This project is protected by the `MIT License.`

## Disclaimer

If any complains please contact via sl.travamaker@gmail.com
