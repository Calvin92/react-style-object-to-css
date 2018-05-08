'use strict';

var isUnitlessNumber = require('./lib/CSSProperty').isUnitlessNumber;
var hyphenateStyleName = require('./lib/hyphenateStyleName');
var isArray = Array.isArray;
var keys = Object.keys;

var counter = 1;
// Follows syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/content,
// including multiple space separated values.
var unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

function buildRule(key, value) {
  if (!isUnitlessNumber[key] && typeof value === 'number') {
    value = '' + value + 'px';
  }
  else if (key === 'content' && !unquotedContentValueRegex.test(value)) {
    value = "'" + value.replace(/'/g, "\\'") + "'";
  }

  return hyphenateStyleName(key) + ': ' + value + ';  ';
}

function styleToCssString(rules) {
  var result = ''
  if (!rules || keys(rules).length === 0) {
    return result;
  }
  var styleKeys = keys(rules);
  for (var j = 0, l = styleKeys.length; j < l; j++) {
    var styleKey = styleKeys[j];
    var value = rules[styleKey];

    if (isArray(value)) {
      for (var i = 0, len = value.length; i < len; i++) {
        result += buildRule(styleKey, value[i]);
      }
    }
    else {
      result += buildRule(styleKey, value);
    }
  }
  return result;
}

module.exports = styleToCssString;
