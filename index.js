// アプリのグローバル設定
const config = require("./config");

// データベース接続初期化
const knex = require("knex")(config.db);

// Express サーバ設定
const express = require("express");
const app = express();

//  Body のデータを json として解析
app.use(express.json({ type: "application/json", limit: "50mb" }));

/**
 ****************** START SERVER ******************
 */

app.listen(config.express.port, () => {
  console.log(`Server up and listening on port ${config.express.port}`);
});
