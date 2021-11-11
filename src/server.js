//APIの実装ファイル
const express = require("express");
const app = express();

const config = require("./config");

// データベース接続初期化
// const knex = require("knex")(config.db);

const setupServer = () => {
  app.use(express.json());

  app.get("/api/golf/", (req, res) => {
    res.status(200).end();
  });

  return app;
};

module.exports = { setupServer };
