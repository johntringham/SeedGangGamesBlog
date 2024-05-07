hi tom 👋

------

basic rundown of how your blog works:

it uses hexo as a static site generator. it's a "static site" because the end result is just a bunch of html files, rather than a big fancy website that dynamically
changes. this is good because it means your website is really fast to load and very unlikely to break or go down. hexo is great - the only big downside that i'm aware
of is that it is most popular in china, so a lot of the resources online are written in chinese.

it uses surge.sh as a host. surge.sh runs via a command line program - you just tell it what folder to turn into a website, and then it uploads it. its great

high level way of what to do in general:
- make whatever changes you want to your website. 
- to add a new post, run ' hexo new post "post title" ' in command line (see below for details) 
- test it locally by running "hexo server" in command line (see below for details)
- once you're happy with it, run "deploy.bat" to deploy to the actual website (see below for details)

----

New Posts:

to add a new post, go into the command line in this folder and run:

hexo new post "some cool new post"

this will make a new markdown file in the folder source/_posts for the blogpost.
So for that it will make a file called some-cool-new-post.md

This is a markdown file - this is how you write blog posts. at the top of the .md file is some info about the post - the title, the 
date etc. 

to delete a post, just delete the file. to include images, just put the image file in the post's folder (eg. source/_posts/some-cool-new-post/image.png)

 markdown is just a fancy plaintext format - you edit it in VSCode or notepad++ or something, and write the posts. 
You can do formatting, links, images, lists,  headings, subheadings and stuff in markdown really easily - info on the syntax is here: https://www.markdownguide.org/basic-syntax/

Quick cheatsheet for the important bits of markdown syntax:

# Header
## Subheader
### Tiny header
Regular text, *bold text*, _italic text_. a link to [google](https://google.com).
you do images like this (when image file is in the right folder)
![](/some-cool-new-post/image.png)

A list:
- eggs
- butter
- milk

A quote:
> wow cool quote by some guy

----

Testing:

you can run a local version of your blog for testing by running this in command line

hexo server

This will run you blog on your own pc before you deploy it to the web. you can look at it by going to http://localhost:4000 in your browser. 

this will automatically pick up any changes you've made to posts!!! so if you are in the middle of editing a markdown file, if you save it and then refresh your browser while hexo server
is running, the page will show you an updated version of it. (if you make bigger changes, like changing the theme or contents of config files, you might need to restart hexo server to 
get it to pick those changes up).

----

Layout and themes:

hexo uses themes to specify how the webiste should actually look. the theme that's being used at the moment is called Frame https://github.com/zoeingwingkei/frame/
i like frame because it's simple and clean, it's what i've got for blog.seedganggames.com (i've modded mine quite a bit though).

Frame has got a config file that specifies what is happening on the main page. check out themes/frame/_config.yml and mess around with it.
the main thing here is the profile section (which specifies the content of the main page) and the menu section (which is for the links at the top menu). you can
add whatever links you want to those. (i'd recommend getting rid of Gallery)

if you want to configure frame more than the config file, you can mess around with the Frame folder - there's a bunch of .styl and .ejs files that specify how
everything is laid out. could get messy though so be careful round there (make backups or something)

themes are pretty easy to swap if you want something else - check out https://hexo.io/themes/. bare in mind that themes are all just made by random people and so
could be shit or a pain to get working properly. some look nice but are impossible to configure - i've found that frame is a nice happy medium.


---

Config

there's a config.yml file at the root of this directory that is used to specify some stuff. it's mainly just obscure config that you don't need to touch, but might come in handy. 
the main thing is setting the title and the site url.  (don't get this config.yml confused with themes/frame/_config.yml - two different files doing 2 different things)



--- 

Deploying

ok once you're all ready to go, run the deploy.bat file. this will do a couple of things:
- delete the old contents of /public/
- regenerate the website into the /public/ folder
- write the url of your website to a file called CNAME
- run the surge command on the /public/ folder

and your website should be live!!
to pick your actual address, edit the bat file and change the bit that says:
   thieflogictestblog.surge.sh > public/CNAME
and change the url to something else (like thieflogic.surge.sh). if you ever buy a domain name (like thieflogic.com), you would change this bit to your domain name.
You will need to change it before running it for the first time, as "thieflogictestblog.surge.sh" is currently under my surge account, so you won't be able to deploy to that url.

the first time you run it it will ask you to set up a surge account from the command line.




----

thats it!!

extra tips:

- i really really recommend using git and github to version this, so that you have backups of the website. bit of a pain to set up initially but good practice and will come in handy
if anything goes wrong. lemme know if you wanna do this and i'll help you out

- if you want to buy a domain i'd recommend namecheap.com - they're the best and cheapest one i've used
