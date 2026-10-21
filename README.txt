Bainbot website (static HTML + CSS + one small script)

STRUCTURE
  index.html            home
  about/ blog/ careers/ changelog/ contact/ guides/ pricing/ product/ signin/ solutions/
                        each folder holds an index.html, so the URLs have no .html:
                        /about/, /pricing/, /contact/ and so on
  styles.css            all styles
  partials/header.html  the global header (edit once, updates every page)
  partials/footer.html  the global footer (edit once, updates every page)
  js/global.js          loads the header and footer into each page
  assets/               dashboard screenshot and agent avatars

PREVIEW LOCALLY
  The site uses root-relative links and loads the header and footer with a script, so open it
  through a local server, not by double-clicking the files:
    cd bainbot-website
    python3 -m http.server 8000
  then visit http://localhost:8000

DEPLOY
  Upload the folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3 or
  your own server). The clean URLs work with no extra configuration.

NOTES
  Fonts (Poppins) load from Google Fonts.
  Text in [square brackets] is placeholder content to replace.
  The forms, search bar and newsletter boxes are designs only and are not connected to a backend.
  Privacy, Terms and Cookies links point to # until those pages exist.
  The sign in page has no header or footer on purpose.
