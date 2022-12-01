const readline = require("readline");

let mode = "menu";

const history = [];

/**
 * ジャンケンプログラム
 */
const game = async () => {
  let yourHand;
  let opponentHand;

  const evaluate = (handDiff) => {
    if (handDiff === 0) {
      console.log("あいこ！");
      history.push(0);
    } else if (handDiff === 2 || handDiff === -1) {
      console.log("あなたの勝ち～！");
      history.push(1);
    } else {
      console.log("あなたの負け...");
      history.push(-1);
    }
    console.log(""); // 改行
  };

  const setOpponentHand = () => {
    return Math.floor(Math.random() * 3);
  };

  const selectContinue = async () => {
    for (;;) {
      console.log("もう1回？");
      const input = await getInput(
        "[0: やる / 1: メニューに戻る / 2: ゲーム終了] > "
      );
      if (input === "0") {
        return true;
      } else if (input === "1") {
        mode = "menu";
        return false;
      } else if (input === "2") {
        mode = "";
        return false;
      } else {
        console.log("入力が正しくありません");
      }
      console.log(""); // 改行
    }
  };

  for (;;) {
    console.log("じゃーんけー－ん...");
    console.log("[0: グー / 1: チョキ / 2: パー] > ");
    for (;;) {
      yourHand = await getInput("出す手を決める: ");
      yourHand = parseInt(yourHand);
      if (yourHand === 0 || yourHand === 1 || yourHand === 2) {
        break;
      } else {
        console.log("ズルしちゃダメ！");
      }
    }
    opponentHand = setOpponentHand();
    const handDiff = yourHand - opponentHand;
    evaluate(handDiff);
    if (handDiff === 0) {
      continue;
    }
    if (await selectContinue()) {
      continue;
    } else {
      break;
    }
  }
};

const showHistory = () => {
  const total = history.length;
  const win = history.filter((result) => result === 1).length;
  const lose = history.filter((result) => result === -1).length;
  const even = total - win - lose;
  console.log(`これまでの戦績: ${total} 戦 ${win} 勝 ${lose} 敗 ${even} 分`);
  mode = "menu";
};

/**
 * Yes/No 選択
 */
const confirm = async (msg) => {
  const answer = await getInput(`${msg}(y/n): `);
  return answer.trim().toLowerCase() === "y";
};

/**
 * 標準入力を取得する
 */
const getInput = (question) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);
      readlineInterface.close();
    });
  });
};

const menu = async () => {
  for (;;) {
    console.log("メニュー選択");
    console.log("1: ジャンケンする");
    console.log("2: 戦績表示");
    console.log("0: ゲーム終了");
    const input = await getInput("> ");
    if (input === "1") {
      mode = "game";
      break;
    } else if (input === "2") {
      mode = "history";
      break;
    } else if (input === "0") {
      console.log("ゲームを終了します");
      mode = "";
      break;
    }
    console.log("入力が正しくありません");
  }
};

const opening = () => {
  console.log(
    "       ＿人人人人人人人人人人人人人人人人人人人人＿\n",
    "      ＞　 ジャンケンしようぜ！ジャンケン！！　 ＜\n",
    "      ￣Ｙ^Ｙ^Ｙ^^Ｙ^Ｙ^Ｙ^Ｙ^Ｙ^Ｙ^Ｙ^Ｙ^Ｙ^Ｙ^￣\n"
  );
};

// main loop
(async () => {
  opening();
  for (;;) {
    if (mode === "game") {
      await game();
    } else if (mode === "menu") {
      await menu();
    } else if (mode === "history") {
      showHistory();
    } else {
      break;
    }
    console.log(""); // 改行
  }
})();
