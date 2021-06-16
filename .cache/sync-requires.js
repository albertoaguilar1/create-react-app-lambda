const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/albertoaguilar/Documents/proyecto-yadi/puntoChic-reac/create-react-app-lambda/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/albertoaguilar/Documents/proyecto-yadi/puntoChic-reac/create-react-app-lambda/src/pages/404.tsx"))),
  "component---src-pages-gracias-tsx": hot(preferDefault(require("/Users/albertoaguilar/Documents/proyecto-yadi/puntoChic-reac/create-react-app-lambda/src/pages/gracias.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/albertoaguilar/Documents/proyecto-yadi/puntoChic-reac/create-react-app-lambda/src/pages/index.tsx"))),
  "component---src-pages-proyecto-tsx": hot(preferDefault(require("/Users/albertoaguilar/Documents/proyecto-yadi/puntoChic-reac/create-react-app-lambda/src/pages/proyecto.tsx")))
}

