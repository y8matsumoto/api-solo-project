//APIの実装ファイル
const express = require("express");
const app = express();

const config = require("./config");

// データベース接続初期化
const knex = require("knex")(config.db);
// const models = require("../models")(knex);

const setupServer = () => {
  app.use(express.json());

  app.get("/api/golf", (req, res) => {
    res.status(200);
    knex
      .select()
      .from("courses")
      .then(result => {
        res.send(result);
      });
  });

  app.get("/api/golf/:name", (req, res) => {
    const { name } = req.params;
    knex
      .where({
        name: name
      })
      .select()
      .from("courses")
      .then(result => {
        res.send(result);
      });
  });

  app.get("/api/golf/placelist/:place", (req, res) => {
    const { place } = req.params;
    console.log(place);
    knex
      .where({
        place: place
      })
      .select()
      .from("courses")
      .then(result => {
        res.send(result);
      });
  });

  return app;
};

module.exports = { setupServer };
