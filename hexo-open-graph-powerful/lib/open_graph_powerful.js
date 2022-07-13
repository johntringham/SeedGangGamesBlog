'use strict';

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WELL_KNOWN_PREFIX = {
  og: { attr: 'property' },
  fb: { attr: 'property' },
  twitter: { attr: 'name' }
};
var DEFAULT_ATTR_NAME = 'property';
//var PROMPT = require('/package.json').name + '> ';

function resolveAttrName(key, config) {
  var knownPrefix = Object.assign(WELL_KNOWN_PREFIX, config.open_graph ? config.open_graph.known_prefix || {} : {});
  var prefix = key.split(':')[0];
  var attrName = '';
  if (!knownPrefix[prefix]) {
    // console.warn('\n' + PROMPT + ' Unknown prefix "' + key + ':", Please write it in _config.yml.\n' + PROMPT + '                 ' + '^'.repeat(prefix.length) + '\nExample\n-------------------------\nopen_grpah:\n  known_prefix:\n    ' + prefix + ':\n      attr: property\n');
    console.warn('\n' + ' Unknown prefix "' + key + ':", Please write it in _config.yml.\n' + '                 ' + '^'.repeat(prefix.length) + '\nExample\n-------------------------\nopen_grpah:\n  known_prefix:\n    ' + prefix + ':\n      attr: property\n');
    attrName = DEFAULT_ATTR_NAME;
  } else {
    attrName = knownPrefix[prefix].attr || DEFAULT_ATTR_NAME;
  }

  return attrName;
}

/**
 * @todo unit test
 * @param hexo
 * @param options
 */
module.exports = function (hexo, options) {
  var params = Object.assign(hexo.config.open_graph || {}, hexo.page.open_graph || {}, options || {});

  var classicTags = hexo.open_graph ? hexo.open_graph(options) : '';
  var $ = _cheerio2.default.load(classicTags, {});

  Object.keys(params).forEach(function (key) {
    if (key.indexOf(':') < 0) return;
    var attrName = resolveAttrName(key, hexo.config);
    var value = params[key];
    var selector = 'meta[' + attrName + '="' + key + '"]';
    if (!$(selector).attr('content', value).length) {
      $('head').append(_cheerio2.default.load('<meta>')('meta').attr(attrName, key).attr('content', value) // @todo http://ogp.me/#data_types
      );
    }
  });

  return $.html().replace('<html><head>', '').replace('</head><body></body></html>', '');
};