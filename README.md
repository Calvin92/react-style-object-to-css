# Summary
Convert React style with object to pure inline css (string).

# Example
```js
const reactToCSS = require('./index.js')
const styleObj = {
	backgroundColor: 'blue',
	fontSize: 14
}

// result === "background-color: blue;  font-size: 14px;"
const result = reactToCSS(styleObj)
```
