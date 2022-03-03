# **Fullstack Challenge**
# Backend
## Documentation
Once you already installed the enviroment and started the server you can see de documentation in http://localhost:8000/api/docs/

## Requirements
- Docker
- Npm
- Node

##  Enviroment setup

1. Copy .env.example to .env and fill with database credentials.
2. Create database
````bash
`docker-compose --env-file [location of your .env] up -d`
````
3. Install dependencies
````bash
npm install
````
4. Run Migrations and Seeders
````bash
npm run migrations:run

npm run seeders:run
````
## Start local server
`npm run dev`

## Seeders contents

#### Users

id  | username | email        | password
----|----------|--------------|----------
1   | Joe      | joe@mail.com | joe123
2   | Jane     | jane@mail.com| jane123

------------

#### Categories

id  | name 
----|----------|
1   | Categoryless 
2   | Entertainment
3   | Health
4   | Holidays
5   | Restaurants & Pubs
6   | Services
7   | Shopping
8   | Supermarket
9   | Transport
10  | Wage

------------

#### Operations

id  | categoryId | concept   | date   |  type   | quantity | userId
----|------------|-----------|--------|---------|----------|-------
1   | 5          | Mc Donalds| (date) | Withdraw| 500      | 1
2   | 9          | Uber      | (date) | Withdraw| 700      | 1