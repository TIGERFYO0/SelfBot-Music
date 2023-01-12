const config = require("../config.json");

module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(config.status.text, {
    type: config.status.type
 //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
await client.user.setStatus(config.status.presence);
};
