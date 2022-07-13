'use strict';

hexo.extend.helper.register('open_graph_powerful', function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  require('./open_graph_powerful')(this, options);
});