# Discord Mass Ban

A way to unban all members from a Discord Server.

# Requirements

- [Node.js v16 or higher](https://nodejs.org/en/)
- [Discord.JS v13](https://discord.js.org/#/)
- [dotenv](https://github.com/motdotla/dotenv)

# How to Install 

```
$ git clone https://github.com/ignshifts/Mass-Unban.git
$ npm install 
```
**This will install all needed packages for the repo to work.**

**Note**: You can do this from the ready event, the bot will start unbanning all users once it connects to the gateway rather than you having to invoke a command. Also, you can get ratelimited from doing this. I believe the older your bot is the less likely it is to get ratelimited but ratelimits are dynamic so it varies.
