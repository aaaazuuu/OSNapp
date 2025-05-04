＜ゴール＞
・Node.jsのインストール（＋自動的にnpmもインストールされる）
・npmからexpressのインストール
・npmからnodemonのインストール（グローバルでインストール推奨）
・npmからejsのインストール


①ターミナル開く

② Node.jsがインストールされているのか確認する
　　node -v
   されていなければ、下リンク参照
  https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b

③ npmからインストールされているパッケージの確認する
　　npm ls
    npm ls -g

[上記を確認して、ejs, nodemon, ejsがインストールされていない場合、下記のコマンド入力]

④ npm install express
⑤ npm install -g nodemon
⑥ npm install ejs


