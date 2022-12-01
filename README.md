# nodejs_rps_sample

## What’s this?

Node.js でのジャンケンゲームの実装例です

## 環境設定

以下のソフトウェアがインストールされていることを想定しています。

- git
- Node.js

これらが入っていないと動作しないため、まずはこれらをインストールしてください。

---

## 遊び方

1. リポジトリをクローンします

```bash
git clone https://github.com/y-uchiida/nodejs_rps_sample ~/lesson/nodejs_rps_sample
```

2. リポジトリを取得したディレクトリに入ります

```
cd ~/lesson/nodejs_rps_sample
```

3. npm パッケージを取得します

```
npm install
```

4. プログラムを実行します

```
npm run play:js
```

---

## TypeScript 用教材としての利用(本命)

このプログラムは JavaScript で実装されていますが、TypeScript の実行環境の設定を同梱しています。  
`npm run play` で `index.ts` をコンパイル・実行するようになっています。
100 行程度の、あまり複雑ではないプログラムなので、TypeScript を実際に書く練習題材としてご利用いただけます。
詳細は`docs` に資料を入れていますので、そちらを確認してください。

---

# 参考

キーボードからの入力処理は以下のページの内容を参考にしています。  
Node.js の標準機能で超単純な対話的 CLI を作るサンプル:  
https://note.kiriukun.com/entry/20200313-interactive-cli-example-with-nodejs
