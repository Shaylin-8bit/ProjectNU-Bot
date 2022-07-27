The modules of the bot are broken down like such:

```
app.js
  |
  ./modules
    - commandHandler.js
        |
        ./commands
    - utilityHandler.js
        |
        ./utilities
    - configHandler.js
        |
        .env
    - databaseHandler.js
        |
        ./database
```

When app starts, it pulls each module in and runs them on `client`. The configuration handler must be run first as other handlers need the config object to run. 

The configuration handler bundles all configuration information to the `client.config` object.
The command handler pulls each slash command from `./commands` and bundles them to the `client.commands` object.
The utility handler pulls each file from the `./utilities folder` and bundles it to the `client.utilities` object.
The database object builds the database from the the `./database` folder and moves it to the `client.database` object.
