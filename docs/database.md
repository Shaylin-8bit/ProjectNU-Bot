Files in the `./database` directory will be assigned to methods under `client.database`. 
Each method will have the same name as the file it was pulled from.
Each file should export one asyncronous execute function, that accepts the `client` object, a `database` object, and any other arguments required.
Connection to and disconnecting will be handled by the getDatabase module and should not be performed.
The database module module wraps each file in a higher function that will handle connection and pass both `client` and `database` to them. This means when calling a method under `client.database` there is no need to pass `client` or `database` to it.
