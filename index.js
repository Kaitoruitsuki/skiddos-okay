const MenuDocsClient = require('./Structures/MenuDocsClient');
const config = require('./confiig.json');

const client = new MenuDocsClient(config);
client.start();
