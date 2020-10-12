//変数
let aisatsu = 'Hello World!!';

aisatsu = 'うっす'

//定数 
const yoroshiku = 'Hello UVERworld!';

// yoroshiku = 'dekinaihazu'

//配列
let stayon = ['3','2','1','GO!','what is up!!'];

//ループ文
// let index = 0;
// while(index < stayon.length){
//   console.log(stayon[index]);
//   index++;
// }

//if/else
// if(stayon.length > 5){
//   console.log('好きなようにやれ!そして俺に指図するな！')
// }else{
//   console.log('好きなように...')
// }

//関数
const test = (arg) => {
  if(stayon.length > arg){
    console.log('好きなようにやれ!そして俺に指図するな！');
  }else{
    console.log('好きなように...');
  }
};

// test(6);

//オブジェクト
const aisatsu2 = {
  color: 'pink',
  size: 'large',
  purfume:'mint',
  weAreGo: () => {
    console.log('ジェネシス！');
  }
};

// console.log(aisatsu2.weAreGo());
// window.alert('Hello');
// console.log(document);
// console.log(document.getElementsByTagName('button')[0]);

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  window.alert('UVERworld')
})