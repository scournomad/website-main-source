# Web Page dev docs

## Run the page locally

* `npm run serve`

## Deploy

* `npm run deploy`
    * It builds everything using gh-pages to branch gh-pages
    * It pushes branch gh-pages
    * Netlify catches it and deploys it

## Vulnerabilities

* At the moment, node v18 deals with some serious ssl issues
* Hacky and wrong fixes include:
    * installing node v16
    * using `export NODE_OPTIONS=--openssl-legacy-provider` to go around using the fixed version
* Both are wrong, but to be fast I'm using the env one
* Read more here: https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported