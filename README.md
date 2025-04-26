# 📖 プロジェクト名  
メモコレクションアプリ  

# 📝 プロジェクト概要  
このアプリは、簡単なメモの作成・編集・削除ができるWebアプリケーションです。  
クライアント側からHTTPリクエストを送り、Node.js + Expressサーバーを通じてMongoDBにデータを保存・取得します。  
フロントエンドはejsテンプレートエンジン、Bootstrap、jQueryを使用してシンプルに構成されています。  

# 🔗 プロジェクト詳細資料  
（※ここにBacklogやNotionなど、プロジェクト詳細を管理しているURLを記載してください）

# 🛠️ 開発環境・使用技術  
- フロントエンド: ejs, Bootstrap, jQuery  
- サーバーサイド: Node.js, Express  
- データベース: MongoDB（Mongooseを使用）  
- ローカル開発補助: nodemon  

# 📦 必要な環境変数  
| 変数名 | 役割 | デフォルト値 | 補足 |
|:---|:---|:---|:---|
| MONGO_URI | MongoDB接続用URI | `mongodb://localhost:27017/memoapp` | 本番環境では環境に応じて変更 |
| PORT | サーバー起動ポート番号 | `3000` | |

# 🖥️ コマンド一覧  

| コマンド | 実行する処理 |
|:---|:---|
| `npm install` | 必要なパッケージのインストール |
| `npm run dev` | nodemonを使って開発サーバー起動 |
| `npm start` | 本番用にサーバー起動 |

# 🐛 トラブルシューティング  
- **MongoDBが接続できない場合**  
  - `MONGO_URI`の設定を再確認  
  - MongoDBサーバーがローカルで起動しているか確認  

- **ポート競合エラーが出た場合**  
  - 別プロセスで`3000`番ポートを使っていないか確認、または`PORT`番号を変更する  

# 📂 ディレクトリ構成（概要）  


# 💾 データベース構造
MongoDBに保存されるノートデータ構成は以下の通りです。
```json
{
  "_id": ObjectId,
  "title": "メモタイトル",
  "mainContent": "ここにメインの内容",
  "questionContent": "内容に付随する質問文",
  "summaryContent": "ここにまとめ",
  "createdAt": "2025-04-25T..."
}

