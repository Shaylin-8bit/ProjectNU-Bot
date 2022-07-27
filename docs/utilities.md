A utility file should have the same name as it will be assigned under `client.utilities`. It should export an `execute` function, that accepts the `client` object, followed by what ever other arguments are needed.

If used through `client.utilities`, `client` will automatically be passed to it through a wrapper function, and does not need to be passed in the call.

Current utilities:

utility    | args            | use
-----------|-----------------|--------------------------------------------------------------------------------------------------
getChannel | channelName     | get channel object for channelName
log        | msg channelName | send msg to channelName. If channelName does not exist will default to `client.config.logChannel`