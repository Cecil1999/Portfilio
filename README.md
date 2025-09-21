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

## Docker Compose Example

```
/* This configuration assumes you're using Traefik, Nginx or some other request handler. */
portfolio-(dev|live):
  build:
    context: $DIR_PATH/.
    dockerfile: $DIR_PATH/Dockerfile-dev (or live, depending on which dockerfile you want to use)
  container_name: whatever-you-want
  command: bin/rails server -b 0.0.0.0 -p 3000
  networks:
    - nginx/traefik proxy network.
      # OR
    - local-network.
  ports:
    - "3000:3000"
  volumns:
    - $DIR_PATH/$PATH_TO_FILES:/app 
```

Make sure you build the contianer `docker compose -f (portfolio-file-name.yml|parent-docker-compose-file.yml) build`

## Tailwindcss Refresh

Tailwindcss in RoR requires a sort of refresh, usually when developing locally there is a process (Located in the `Prodfile`) that watches and rebuilds the CSS file. However, in my deployement I was never able to figure out how to get this to work. 

As such, when **_developing_** make sure you try and run `docker exec 'container_name' bin/rails tailwindcss:build`. On any FE changes.

This shouldn't be a problem with the live deployement it runs `RUN RAILS_ENV=production bundle exec rake assets:precompile`, which includes `tailwindcss:build`.

## Dependencies

- Created using Ruby 3.4.5. (Will test older Ruby Versions)
- Rails-8.0.2.1
- TailwindCSS ^4.0.0
- See Gemfile for complete list of Ruby dependencies.
