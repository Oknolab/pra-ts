/*
  基本的な方の種類
*/
const name = "panda"; //string型
const age = 57; //number型
const retired = true; //boolean型
const spouse = null; //null型
const friends = ["koara", "penguin", "cat"]; //Array型(string[]型)

/*
  any型
*/
let a: any = 1; //numebr型でも
a = "hello"; //string型でも
a = ["dog", "cat"]; //Array型でも
a = false; //どんな型でも代入できる

/*
  undefined型
*/
let b; //型を指定せず、値も代入しない場合は、any型でundefinedが代入される
let c: number; //型を指定して、値を代入しない場合は、その型でundefinedが代入される
console.log(b); //undefined
console.log(c); //undefined

/*
  object型
*/
const panda = {
  name: "panda",
  age: 57,
  retired: true,
  spouse: null,
  friends: ["koara", "penguin", "cat"],
};
console.log(panda); //{ name: 'panda', age: 57, retired: true, spouse: null, friends: [ 'koara', 'penguin', 'cat' ] }
console.log(panda.name); //panda

/*
  !Point!
  - Typescriptに標準で用意されている型は、上記で全てです。多分。
*/
