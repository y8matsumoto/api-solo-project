//APIの実装ファイル
const setupServer = () => {
  app.use(express.json());
};

module.exports = { setupServer };
