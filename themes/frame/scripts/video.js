hexo.extend.tag.register('video', function(args){
    return `<video width="100%" autoplay controls> <source src="${args[0]}" type="video/mp4"> </video>`;
  }, {async: true});

 // {% video somefile.mp4 %}  https://github.com/hexojs/hexo-renderer-marked/issues/71