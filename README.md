# 概要

過去に訪れたゴルフ場を管理する API。
ゴルフ場ごとのベストスコアと前回スコアを管理して、スコアアップの目標を立てよう。

## 最初に

- 本 API は自分のスコア管理に用いることを想定しています（ユーザ管理はしません）。
- ぜひ Fork して、機能を追加していってください。
- 開発時にはローカル環境の postgres にて DB を立てて実施しています。ご使用の際にはローカル環境に DB をご準備ください。

## セットアップ

- `package.json` を参照し、`npm i`を実行して依存パッケージのインストールを行ってください。
- 自分の DB に合わせ、`src/config.js`を作成してください。形式は下記です。

```js
module.exports = {
  db: {
    client: "pg",
    connection: process.env.DB_URL || {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "golf",
      user: process.env.DB_USER || "DBユーザを記載",
      password: process.env.DB_PASSWORD || "パスワードを記載"
    }
  },

  express: {
    port: process.env.PORT || 3000
  }
};
```

## サーバの起動

```js
npm start
```

**前提**
次のコマンドを実行して、このプロジェクトのデータベースを作成しましょう：

```bash
  echo "CREATE DATABASE golf;" | psql
```

マイグレーションを実行し、データベースをセットアップするには：

```bash
  npm run migrate
```

マイグレーションをロールバックするには：

```bash
  npm run rollback
```

テスト用のデータをテーブルに投入するには：

```bash
  npm run seed
```

テストを実行するには：

```bash
  npm run test
```

アプリを実行するには：

```bash
  npm run start
```

開発時にアプリを実行するには：

```bash
  npm run dev
```

## API 一覧

ゴルフ場オブジェクトは下記の形式です。

```js
{
    　　"id": *自動採番*
        "name": "Daystar Golf Club",
        "place": "Chiba",
        "best_score": 93,
        "last_score": 93,
        "memo": "Close soon. Good bye Daystar."
      }
```

**提供 API 一覧**

- `GET /api/golf`
  - 登録されている全ゴルフ場を配列で返却します。
- `GET /api/golf/:name`
  - 指定した名前のゴルフ場の登録データを返却します。
- `GET /api/golf/placeList/:place`
  - 指定した都道府県(place)の、登録されているゴルフ場一覧を返却します。
- `POST /api/golf`
  - 新たにゴルフ場のデータを登録します。
  - 初めてのゴルフ場に訪れた場合にはこれ。
- `PATCH /api/golf/:name`
  - 指定した名前のゴルフ場のデータを更新します。
  - ラウンドが終わったらそのゴルフ場の直近スコア（last_score）を更新しましょう
  - 目指せベストスコア（best_score）更新！
- `DELETE /api/golf/:name`
  - 指定した名前のゴルフ場のデータを削除します。
  - 誤って新規登録した場合はこちら。
