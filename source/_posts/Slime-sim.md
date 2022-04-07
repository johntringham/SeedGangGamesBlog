---
title: Simulating slime to do the most expensive dithering possible
categories:
  - - gallery
featured_image: /Slime-sim/slime.png
date: 2022-02-28 19:29:26
tags: [devlog, prototype]
---

Trudging through old projects and found my [slime-mold](https://en.wikipedia.org/wiki/Slime_mold) simulation and polished it up a bit:

{% html 
<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">using my slime mold sim to do a form of dithering<a href="https://twitter.com/hashtag/madewithunity?src=hash&amp;ref_src=twsrc%5Etfw">#madewithunity</a> <a href="https://t.co/q9zdRm51AW">pic.twitter.com/q9zdRm51AW</a></p>&mdash; john tringham (@zappablamma) <a href="https://twitter.com/zappablamma/status/1498376821380947971?ref_src=twsrc%5Etfw">February 28, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> %}

Here's an earlier vid - same simulation but with a different set of parameters and less frills:

{% html 
<blockquote class="twitter-tweet" data-lang="en" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">looking at trees<a href="https://twitter.com/hashtag/madewithunity?src=hash&amp;ref_src=twsrc%5Etfw">#madewithunity</a> <a href="https://twitter.com/hashtag/screenshotsaturday?src=hash&amp;ref_src=twsrc%5Etfw">#screenshotsaturday</a> <a href="https://t.co/fZKReM5EwD">pic.twitter.com/fZKReM5EwD</a></p>&mdash; john tringham (@zappablamma) <a href="https://twitter.com/zappablamma/status/1378760560565743616?ref_src=twsrc%5Etfw">April 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
%}

The basic way a slime mold sim works is by creating millions of cells, who have a position and angle (to specify which way they're facing). Each frame, cells create a small scent behind them, and this scent spreads out and disolves over time. Cells look at positions in front of them and turn slightly in order to face the strongest scent it can find, and then move in that direction.

The way I've implemented it in Unity is to use compute shaders to run the actual sim, using a bitmap to store the scent values.

The extra layer here in the above videos is that I'm also using a render texture to add extra data to the sim to create 'fake' scent values. This leads to creating a sort of "dithering" effect, where the slime mold sim accidentally recreates a ghost of the image from the render texture out of simulated slime.

Because of the amount of variables (such as the speed of the cells, or how fast they can turn, or how quickly the scent dissolves, etc), slime molds have a huge parameter space. In order to play around with it easier, I hooked up these variables to my midi controller to it via [MINIs](https://github.com/keijiro/Minis) so you could fiddle about by turning physical knobs rather than using Unity sliders.