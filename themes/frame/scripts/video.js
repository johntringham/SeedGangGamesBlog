hexo.extend.tag.register('video', function(args){
    return `<video width="100%" autoplay controls> <source src="${args[0]}" type="video/mp4"> </video>`;
  }, {async: true});

hexo.extend.tag.register('html', function(args){
  return args.join(" ");
}, {async: true});

hexo.extend.tag.register('centerstart', function(args){
   return "<div style='text-align: center;'>";
}, {async: true});

hexo.extend.tag.register('centerend', function(args){
  return "</div>";
}, {async: true});

// note: only works with raw html... if you want centered markdown use the above
hexo.extend.tag.register('center', function(args){
  return "<div style='text-align: center;'>" + args.join(" ") + "</div>";
}, {async: true});


 // {% video somefile.mp4 %}  https://github.com/hexojs/hexo-renderer-marked/issues/71