# ShiftAppensGame
##  Challenge Manager for Events
This is a deployment ready challenge manager web app for events. It was developed in 48h during an Hackathon with the idea of using it in a similar hackaton to gamify the event and make dynamization easier.

 The organization creates challenges, allocates points to each challenge and generates codes which they can give to people once challenges are completed. Users complete the challenges, obtain the codes and register them in the app to accumulate points. The leaderboards allow the organization to track the progress of users, and maybe reward them.

It was written in a Vue + Express + MongoDB stack and has been dockerized so you can easily preview it. If you have Docker and git installed you can easily run this website locally by cloning the repository and activating the docker-compose file. To do that open a terminal and run the following commands:
 - git clone https://github.com/FMiranda97/ShiftAppensGame.git
 - docker compose up -d

### I want to use this on my own event, what do I need to do?
If you have docker installed this is a very easy task, as I said, this app is deployment ready. You need to edit environment variables, specifically those found in /backend/.env, /frontend/.env.production and /docker-compose.yml to have into account the external IPs of the machine you're deploying your app on and edit the credentials for safety since those in this repository are public.

You may also want to delete the contents of /mongodb/init.js as it initializes the database with fake data for previsualization purposes.