# BBD Media Monitoring Tool for Campaigns
---
## Description
A tool to help Congressional and local campaigns keep track of their district's news. We overlay Google News, Twitter and Facebook search results with Google Maps' districts boundaries. 
---

## Installation
- run 'npm install' in the client and server directories 
- run 'npm start' in monitormymedia/client/my-app
- run 'npm run start:dev' in monitormymedia/server 

Install mongodb for MAC OS(using brew): 
- run 'brew tap mongodb/brew' in terminal 
- run 'brew install mongodb-community'
- run 'brew services start mongodb-community' to start MongoDB
- run 'brew services stop mongodb-community' to stop MongoDB

Install mongodb for Windows:
- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
- https://stackoverflow.com/questions/20796714/how-do-i-start-mongo-db-from-windows 
- You need to follow the stackover flow answer ^ and navigate to where your mongod is, run `mongod` 
- When you run `mongod` you might get an issue of not being able to find `C:\data\db`, you just have to create that: `mkdir C:\data\db`  -- it's a weird windows, mongo thing - unsure how to explain this (but happened to 2 team members with windows) 

## Viewing the data 
Install Robo3T:
- https://robomongo.org/
- Type: Direct Connection 
- Address: localhost: 27017
Note: no authentication required

Alternative (TODO for Aedan) 

## Frontend
* client/index.js: Wrapping our future components with React Router and passing a history prop 
* client/Main/index.js: where we put our paths matched to components we build 
* 
