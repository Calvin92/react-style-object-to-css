# Summary
Convert React style defined as an object to pure inline css (string).

# Installation
```js
	npm install react-style-object-to-css
```

# Example
```js
const reactToCSS = require('react-style-object-to-css')
const styleObj = {
	backgroundColor: 'blue',
	fontSize: 14
}

// result === "background-color: blue;  font-size: 14px;"
const result = reactToCSS(styleObj)
```
