const config = require("../src/config");
const knex = require("knex")(config.db);

const ignoreError = () => {
  // do nothing
};

const clearTable = tableName =>
  knex(tableName)
    .del()
    .catch(ignoreError);

//TBL追加時にリストにTBL追加
const tables = ["users"];

Promise.all(tables.map(clearTable)).then(process.exit);
