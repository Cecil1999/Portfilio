# Portfolio

This repo was mean't to be forked, copied, etc...

Unless you are pushing a fix for FE stuff or adding onto the repo **DO NOT TRY AND MERGE YOUR OWN INFORMATION**

## Introduction.

We all start somewhere, and rather than using some for of website builder for a portfolio. I opted to try and create my own.

Fair warning, I am a Back-End developer, and do _NOT_ have much experience with Tailwind. This project was a stepping stone for me. If you have tips, tricks or general fixes (nothing that includes your own information) and create a PR I will merge it.

The main page, and any other page _should_ use a simplistic structure that can be extrated easily by AI bots companies use to grab and summerize information.

> What's Included?

- Main 'Resume' Page.
- Contact Page.
- Project's Page.
- Dark/Light Mode toggle.

## Deployement

> There are a couple of ways you can 'setup' a deployment. I currently have my own setup through docker but of course, there might be other ways to get this deployed. Which I will update.

##### Recommend.
The entire point of this repo is to give you a starting point for your portfolio, that of course assumes that you are wanting to use RoR with Tailwind.

My recommendation is to fork, than private or use your own version control repo. (Gitea, Gitlab, Codeberg).
**DO NOT JUST TRY AND MERGE PR'S INTO THE EXISTING REPO. CREATE YOUR OWN.**

_Not entirely sure if this is necessary_ But create a new master.key by running `rails credentials:edit`.
**DO NOT UPLOAD THIS TO THE REPO OR ANY OTHER REPO, NOT EVEN PRIVATE ONES!!!**

If you are experienced and prefer using docker CLI you will know what to do based off of the configuration I've provided below.

But my recommendation is _use compose_.

```
# WIP: Don't take this as final instructions...yet.
services:
    app:
        build:
            context: .
            dockerfile: Dockerfile
        ports:
            - "3000:3000" // Or whatever open.
        volumns:
            # You need 2/3 volumns to my knowledge.
            - .:/app
            - gem_cache:/usr/local/bundle/gems
            - node_modules:/app/node_modules # Likely don't need untill you get node_modules.
        env_file: .env # May not need this...
```

## Dependencies

- Created using Ruby 3.4.5. (Will test older Ruby Versions)
- Rails-8.0.2.1
- TailwindCSS ^4.0.0
- See Gemfile for complete list of Ruby dependencies.