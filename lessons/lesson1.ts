/*
  変数を宣言してみよう
*/
let subject: string = "I"; // 変数の宣言方法1: 明示的に型を指定
let verb = "love"; // 変数の宣言方法2: 型を指定しない(型推論)

/*
  定数を宣言してみよう
*/
const firstName: string = "Michael"; // 定数の宣言方法1: 明示的に型を指定
const lastName = "Jordan"; // 定数の宣言方法2: 型を指定しない(型推論)

/*
  テンプレートリテラルを使ってみよう
*/
const message = `${subject} ${verb} ${firstName} ${lastName}.`; // テンプレートリテラルを使って文字列を結合

/*
  文字列を出力してみよう
*/
console.log(message); // I love Michael Jordan.

/*
  !Point!
  - 変数はletで宣言する
  - 定数はconstで宣言する
  - 基本的には宣言方法2(型推論)を使う
  - テンプレートリテラルを使うと、文字列の中に変数を埋め込むことができる
*/
