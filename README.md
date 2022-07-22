# theRock

node version 16.14.0

**Server setup**
1. Go to Server directory
2. `npm install`
3. Create your own MySQL database and get its credentials
4. create `server/config` directory 
5. add file `config.json` in _server/config_
7. config.json should contain:
```
{
  "development": {
    "username": "<your username>",
    "password": "<your db password>",
    "database": "<db name>",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  ```
  
8. go back to server directory
9. run `npx sequelize db:migrate`
10. run `npx sequelize db:seed:all`
11. go to directory `server/m_api` and create sub-directory named connection
12. in server/m_api/connection` add file `connectionData.js`
13. connectionData.js should contain:
```
module.exports  = {
    host: "localhost",
    port: "<db port>",
    user: "<db user>",
    password: "<db password>",
    database: "<db name>",
    multipleStatements: true
};
```
14. run application by typing `npx nodemon index.js` or `npm run start`


**Client setup**
1. go to `client` directory
2. run `npm install`
3. run `npm run start`

**App functionality information**
1. Add thread - click on "Create Post" (located on top row in main page), the type your thread text into the field
2. View comments - click on "Comments" text or its icon
3. All comments of this thread are below add-comment-field
4. Add comment - type yuor comment into the field
5. Change userName - click on avatar icon on navBar (this functionality is not finished yet)

**Additional data**
- UI - React
- Back-End - JS + Node.js
- Server - Koa
- Database - MySQL
- Responsive UI - true 
