---
title: MuuRadio
categories:
  - - gallery
featured_image: /muuradio/muudude.png
date: 2024-06-05 18:55:05
tags: [web, devlog]
---

I've been trying to do more writeups of past projects recently - here's one that I made a few years back, but never really publicised.

[MuuRadio](https://muuradio.com) is a chat room website, where participants can upload their MP3's, and everyone listens to them at the same time. It's all peer-to-peer, including the messages themselves, and so no messages or MP3 data is sent to a central server - just between the users in that particular room only.

Here's a demo of it working on both desktop and mobile, showing a couple of friends* enjoying some public-domain music:

{%centerstart%}

<iframe width="100%" height="515" src="https://www.youtube-nocookie.com/embed/jPab2SDdgg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{%centerend%}

MuuRadio started as "Musync", back in 2019. I've worked on it in short bursts since then as a side project I knew wouldn't make any money, and eventually, due to [Heroku killing off their free plan](https://help.heroku.com/RSBRUH58/removal-of-heroku-free-product-plans-faq) and being generally useless, and me not having enough time to fix it, it went into disrepair. I wanted to include MuuRadio in [my portfolio site](https://john.seedganggames.com), so I've finally gotten around to giving it a bit of love and care.

MuuRadio was the first big project I made using TypeScript - and I honestly loved it straight away. I *originally* started MuuRadio in vanilla javascript, and having been used to the type safety of C# for so long, it quickly drove me mad. Converting to typescript early on was the best decision I ever made. I still made some mistakes however - the website depends on calling the tsc compiler directly, rather than using something like webpack - an oversight that caused some annoyances down the road that I'm just putting up with for now.

MuuRadio uses WebRTC to communicate in a peer-to-peer system, using [peer.js](https://peerjs.com/) - which is a great and straightforward library. 

The general system works like this:

- A *host* sets up a new room
- Other users can connect to a room by providing the hosts name
- All users (including the host) are allocated a random name - a combination of adjective and animal (eg. "lazy stout" or "energetic flamingo", etc)
<!-- more -->
- Each user connects directly to the host (and only the host), via peer.js
- Messages are sent to the host, who then relays this information to everyone else in the room
- Music files are sent as on-the-fly [torrent magnets](https://en.wikipedia.org/wiki/Magnet_URI_scheme), using [webtorrent](https://webtorrent.io/docs). Only the magnet string (only about 500 ascii characters in length) is sent to the host
- When users, including the host, receive a magnet link, they start downloading the MP3 files from the rest of the users, using webtorrent
- Because this is done using on-the-fly torrents, other users seed the MP3 file to each other - every user in the chat is simultaneously downloading *and* uploading the file to everyone else in the room - making downloads fast, robust, and not dependant on a central server. The more users there are, the faster the downloads are for everyone.
- Once the MP3 files are downloaded:
  - The headers are checked to see if it's *actually* an MP3 file
  - The ID3 tags are read to identify the song name, the album title, the artist, etc
  - The album art is found using a [Last.fm API](https://www.last.fm/api) call
- Tracks are arranged into a first-come-first-served queue
- The host instance of the webapp dictates what is playing and when. Tracks are synchronised with everyone, so the host needs to indicate what MP3 is currently playing, and what time exactly it started - this way other people joining will be listening at the same time, even if they join halfway through a track.

That's the big-picture gist of it.

There's a lot of extra stuff going on under-the-hood to get things working correctly. I set up a basic UTC timestamp webservice, so that timezones or incorrectly-set device times don't interfere with the syncing logic, and another basic webservice to broker the last.fm cover-art API call, so not to expose my API key. I originally was hosting a dedicated peer.js server instance using Heroku, but they kept borking the SSL setup and then turned off the free-plan entirely, so I just went back to the public peer.js server instead, which hasn't caused me any real issues.

There's a lot of weird edge case logic that get a little hairy (what if track one ends, but some people haven't downloaded track 2 yet? what if a user sends through a magnet link, but leaves before any other user has been able to download the whole file?), but most of them are sorted (the ones I'm aware of, anyway).

Originally it was hosted using [surge.sh](), which is great for static-sites - which worked great, but couldn't do any of the webservices I wanted. So I moved over to Heroku, which worked, but overall I had a pretty shitty time, due to having problems getting their SSL system to work correctly. Then recently I moved everything over to [Cloudflare Pages](https://pages.cloudflare.com/)/[Workers](https://workers.cloudflare.com/), which (so far) is a lot nicer. CF's CLI/toolset [Wrangler](https://developers.cloudflare.com/workers/wrangler/) is slightly different from node.js, but it was easy enough to sort out - the overall move from heroku to CF took a few hours, including research time. They are offering it for a reasonable price (free), and it seems to fit exactly what I need, so no complaints from me.

As always, there's more work that can be done, and bugs that can be fixed - but for now it's in pretty good shape.

\* By *"friends"* I mean *"just me with multiple tabs talking to myself"*