A Hexo plugin, Possible to generate OpenGraph `<meta>` tags from `<YOUR ARTICLE>.md`.

## Installation
```
npm install hexo-open-graph-powerful --save
```

## Simply Usage
### 1. Edit your theme 

First, Replace `<%- open_graph() %>` with `<%- open_graph_powerful %>` in your template file for article.
If you use hexo-theme-landscape , add a tag [here](https://github.com/hexojs/hexo-theme-landscape/blob/6e133014b7d0b10c50ada408a06fbf59f4b45e11/layout/_partial/head.ejs#L25).

```
<%- open_graph_powerful() %>
```

Just for an added precaution, the arguments are compatible with [open_graph()](https://hexo.io/docs/helpers.html#open-graph).

```
<%- open_graph_powerful({twitter_id: "@whorunit2" /*, more args */}) %>
```

### 2. Add OpenGraph variables in your article

Your can add or overwrite `<meta>` tags by describing your markdown.

```
title: Hello world
+ open_graph:
+   "twitter:card" : player
+   "twitter:image" : https://yoursite.com/example.png
+   "twitter:player" : https://yoursite.com/player.html
```

## Advanced Usage

```

 ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌
▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌
▐░▌   ▄   ▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌
▐░▌  ▐░▌  ▐░▌     ▐░▌     ▐░░░░░░░░░░░▌
▐░▌ ▐░▌░▌ ▐░▌     ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ 
▐░▌▐░▌ ▐░▌▐░▌     ▐░▌     ▐░▌          
▐░▌░▌   ▐░▐░▌ ▄▄▄▄█░█▄▄▄▄ ▐░▌          
▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░▌          
 ▀▀       ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀           
                               
```

## TODO

```
git clone git@bitbucket.org:acalanatha/hexo-open-graph-powerful.git
cd hexo-open-graph-powerful && git grep '@todo' src/
```