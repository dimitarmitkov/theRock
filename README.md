# theRock

##Server setup
1. Go to Server directory
2. `npm install`
3. Create your own MySQL database and get its credentials
4. create `server/config` directory 
5. add file `config.json` in server/config
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
