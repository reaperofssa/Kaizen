require('dotenv').config();

const ownerRaw = process.env.CONTACT || '2340000000000';
const ownerWithDomain = ownerRaw.includes('@s.whatsapp.net') 
  ? ownerRaw 
  : `${ownerRaw}@s.whatsapp.net`;

module.exports = {
  botName: process.env.BOT_NAME || 'Kaizen',
  ownerName: process.env.OWNER_NAME || 'Reiker',
  contact: process.env.CONTACT || '2340000000000',
  user: process.env.BOT_USER || 'Reiker',
  autoStatus: true, // Set to false to stop auto view status
  OWNER: ownerWithDomain,
  prefix: process.env.PREFIX || '!',
  thumbnail: process.env.THUMBNAIL || '/home/container/user_data/7365381557/Test/thumbnail.jpg',
};