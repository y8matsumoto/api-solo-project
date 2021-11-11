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
        res.send(result[0]);
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

  app.post("/api/golf", (req, res) => {
    const { name, place, best_score, last_score, memo } = req.body;
    res.status(200);

    knex("courses")
      .insert({
        name: name,
        place: place,
        best_score: best_score,
        last_score: last_score,
        memo: memo
      })
      .then(() => {
        return knex("courses")
          .where({
            name: name
          })
          .select();
      })
      .then(course => res.send(course[0]));
  });

  app.patch("/api/golf/:name", (req, res) => {
    const { name } = req.params;
    const { name: updateName, place, best_score, last_score, memo } = req.body;
    console.log(updateName);
    res.status(200);
    knex("courses")
      .where({ name: name })
      .update({
        name: updateName,
        place: place,
        best_score: best_score,
        last_score: last_score,
        memo: memo
      })
      .then(() => {
        return knex("courses")
          .where({
            name: name
          })
          .select();
      })
      .then(course => res.send(course[0]));
  });

  app.delete("/api/golf/:name", (req, res) => {
    const { name } = req.params;
    knex("courses")
      .where({
        name: name
      })
      .del()
      .then(() => {
        return knex
          .select()
          .from("courses")
          .then(result => {
            res.send(result);
          });
      });
  });

  return app;
};

module.exports = { setupServer };
