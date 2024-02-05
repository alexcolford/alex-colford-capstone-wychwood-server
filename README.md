# Project Title

Wychwood Naturals

## Overview

Wychwood Naturals is a small family business that focuses on the benefits of natural and locally-sourced ingredients. All products are hand-crafted with the intent of providing alterative options for individuals who appreciate products made from homegrown herbs and hand-picked botanicals.

### Front End

- React
- react-router
- SASS
- Javascript
- Axios

### Back End

- MySQL2
- Express
- JWT (jsonwebtoken)
- BCrypt
- Knex
- Node

### Install

1. Install dependencies

```
npm i
```

2. Create MySQL database

```
my sql -u username -p password
```

```
CREATE DATABASE wychwood_db
```

3. Configure .env.sample based on placeholders (also rename to .env). To generate a JWT_KEY run `node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"` in the terminal.

```
PORT=<PORT>
JWT_KEY=<JWT_KEY>
DB_HOST=<DB_HOST>
DB_NAME=<DB_NAME>
DB_USER=<DB_USER>
DB_PASSWORD=<DB_PASSWORD>
```

4. Migrate tables

```
npm run migrate
```

5. Seed tables

```
npm run seed
```

6. Build and run server

```
npm start
```
