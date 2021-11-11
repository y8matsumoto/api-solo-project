// アプリのグローバル設定
const config = require("./config");

const { setupServer } = require("./server");

const server = setupServer();
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});

// const knex = require("knex")(config.db);
