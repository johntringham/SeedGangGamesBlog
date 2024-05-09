---
title: flowgrammer
categories:
  - - gallery
featured_image: /flowgrammer/thumb.png
date: 2024-05-09 16:27:40
tags: [devlog, web]
---

Last month I started a little project called Flowgrammer. It's a prototype visual scripting language aimed at teaching children and adults programming concepts.

{% video /flowgrammer/count.mp4 %}
> Video demonstrating how blocks and value wires work

Drag and drop scripting "blocks" and connect them together to create small procedures and methods.

It's connected to a small 2D physics engine (using [matter.js](https://brm.io/matter-js/)), which users can control via the scripts they build.

I made Flowgrammer entirely over the course of 12 days in April 2024 using node, typescript, riot.js and webpack.

Here's a couple of other demos:

<!-- more -->

{% video /flowgrammer/bools.mp4 %}
> Showing boolean logic gates

{% video /flowgrammer/controls.mp4 %}
> Interacting with the physics sim using "world" blocks

{% video /flowgrammer/auto.mp4 %}
> Setting up an automated script that repeatedly slam dunks the ball

It's a really neat project, but this prototype is now put on the back burner, but I'll probably be picking it back up and adding to it when I have enough free time to do so.

[You can test the pre-alpha version of it here](https://flowgram.pages.dev/) - note that it only works for desktop browsers, not mobile.