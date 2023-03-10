const { MessageEmbed } = require("discord.js-self");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "pause",
    description: "To pause the current music in the server",
    usage: "[pause]",
    aliases: ["pause"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: The player has stopped and the queue has been cleared.: ${error}`, message.channel);
      }	    
      let xd = new MessageEmbed()
      .setTitle("⏸ **|** Paused the music for you!")
      .setColor("YELLOW")
      return message.channel.send(xd);
    }
    return sendError("There is nothing playing in this server.", message.channel);
  },
};
