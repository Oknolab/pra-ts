/*
  基本的な型をLesson2で学んだ。
  Lesson3では、基本的な型を組み合わせて、複雑な型を作成する方法を学ぶ。
*/

/*
  Union
*/

let a: string | number;
a = "hello"; //aにはstring型または
a = 1; //number型の値を代入できる

//ただし、普通はstring | numberのような型は使わず、string | nullのような型を使うことが多い
let name: string | null;

////////////////////////////////////////////////////////////////////////////////

/*
  Enum
*/

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let direction: Direction;
direction = Direction.Up; //directionにはDirection型の値を代入できる
direction = Direction.Down;

console.log(Direction.Up); //0 ←0と出力されるので、人間的には分かりづらい

//Enumに文字列を割り当てることもできる
enum Status {
  Success = "success",
  Error = "error",
}
console.log(Status.Success); //success ←これだと人間的に分かりやすい！

////////////////////////////////////////////////////////////////////////////////

/*
  リテラル型
*/

let buttonType: "submit" | "reset";
buttonType = "submit"; //buttonTypeには'submit'または
buttonType = "reset"; //'reset'の文字列を代入できる
// buttonType = 'hoge'; //それ以外の文字列は代入できない

////////////////////////////////////////////////////////////////////////////////

/*
  typeエイリアス
*/

type ButtonType = "submit" | "reset"; //さっきの'submit' | 'reset'にButtonTypeという名前をつけた
let buttonType2: ButtonType;
buttonType2 = "submit";

// { name: string; age: number; }にUserという名前をつけた
type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "panda",
  age: 57,
};

////////////////////////////////////////////////////////////////////////////////

/*
  !Point!
  - Union型: 複数の型を持つことができる
  - Enum: 一連の定数をまとめることができる
  - リテラル型: 特定の値のみを持つことができる
  - typeエイリアス: 複雑な型に名前をつけることができる
*/
