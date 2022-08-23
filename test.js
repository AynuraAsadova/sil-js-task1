//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR

// full name numunesi
let fullName = "Aynurə Əsədova Ehtiram";

// //1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin

// let array = fullName.split("");                    //1-ci usul

// // let array = [];                                    //2-ci usul
// // for (let i = 0; i < fullName.length; i++) {
// //   array.push(fullName[i]);
// // }

// console.log(array);

// //2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin

// let soyad = array.splice(7, 8);
// let newArray = soyad.concat(array);

// console.log(soyad);
// console.log(newArray);

// //3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin

// let string = newArray.join("");
// console.log(string);

let arr = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....
// //4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

// let count = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] == 5) {
// //     count++;
// //   }
// // }

// arr.forEach((a) => {
//   if (a == 5) {
//     count++;
//   }
// });
// console.log(count);

// //5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// sum = 0;
// arr.forEach((item) => {
//   sum += item;
// });
// console.log(sum);

// // 6) arrayda tekrar olunan reqemleri artan sira ile duzun
// let tekrarOlunanReqemler = arr.filter((element, index) => {
//   return arr.indexOf(element) == index;
// });

// let sort = tekrarOlunanReqemler.sort((a, b) => a - b);
// console.log(sort);

// //7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin
// let sortArray = arr.sort((a, b) => a - b);
// let largestNumber = sortArray[sortArray.length - 1];

// let count = 0;
// sortArray.forEach((item) => {
//   if (item == largestNumber) {
//     count++;
//   }
// });
// console.log(count);

// //8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
// let min = 1;
// let max = 9;
// let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
// let check = arr.includes(randomNumber);
// console.log(arr);
// console.log(randomNumber);
// console.log(check);

// //9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var
// let myName = "Aynura";
// let length = myName.length;
// let check = arr.includes(length);
// console.log(check);

// //10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
// let findValue = arr.find((ele) => {
//   return ele % 3 == 2;
// });
// let index = arr.indexOf(findValue);
// console.log(findValue);
// console.log(index);

// //11) arraydaki en boyuk reqemin ilk indexini tapin
// // let largest = Math.max(...arr);

// let largest = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (largest < arr[i]) {
//     largest = arr[i];
//   }
// }

// let index = arr.indexOf(largest);
// console.log(arr);
// console.log(largest);
// console.log(index);

// //12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// let index = "";
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 4) {
//     index += i + " ";
//   }
// }
// console.log(arr);
// console.log(index);

// //13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
// let index = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 5) {
//     index.push(i);
//   }
// }
// let min = Math.min(...index); // index[0]
// let max = Math.max(...index); // index[index.length - 1]

// console.log(min);
// console.log(max);

// //14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// let newArr = [];
// arr.forEach((el) => {
//   if (el > 2) {
//     newArr.push(el);
//   }
// });
// let lengthArr = arr.length;
// let lengthNewArr = newArr.length;
// let ferq = lengthArr - lengthNewArr;
// console.log(lengthArr);
// console.log(lengthNewArr);
// console.log(ferq);

// //15) 7 reqeminin indexleri cemini tapin.
// let index = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 7) {
//     index.push(i);
//   }
// }

// let sum = 0;
// index.forEach((el) => {
//   sum += el;
// });

// console.log(index);
// console.log(sum);

/////////////////////////////////////////////////////
let arr2 = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

//QEYD Bu tasklarda arr2 istifade edilecekdir
// // 16) arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// let newArr = [];
// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i].name[0] == "t") {
//     newArr.push(arr2[i]);
//   }
// }

// console.log(newArr);

// // 17) arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// let countObject = 0;
// arr2.forEach((item) => {
//   if (item.name[0] == "t" && item.name[item.name.length - 1] == "t") {
//     countObject++;
//   }
// });
// console.log(countObject);

// // 18) arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// let sumKeys = 0;
// arr2.forEach((item) => {
//   if (item.name[0] == "t" && item.name[item.name.length - 1] == "t") {
//     sumKeys += item.key;
//   }
// });

// console.log(sumKeys);

// // 19) arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// arr2.forEach((item) => {
//   if (item.name[item.name.length - 1] == "e") {
//     item.name = "SuperDev";
//   }
// });

// console.log(arr2);

// // 20) arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// let length = 0;
// let obj = "";
// arr2.forEach((item) => {
//   if (item.name.length > length) {
//     length = item.name.length;
//     obj = item;
//   }
// });

// console.log(obj);
// console.log(obj.key);

// // 25) arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// let length = arr2[0].name.length;
// let obj = "";
// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i].name.length > length) {
//     length = arr2[i].name.length;
//     obj = arr2[i];
//   }
// }

// let index = arr2.indexOf(obj);
// console.log(Math.pow(index, 2));

// // 26) arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// let newArr = [];
// for (let x of arr2) {
//   if (x.name.length == 4) {
//     newArr.push(x);
//   }
// }
// console.log(newArr);

// // 27) arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// let key = 0;
// let obj = "";
// for (let item of arr2) {
//   if (item.key > key) {
//     key = item.key;
//     obj = item;
//   }
// }
// console.log(obj.name);

// // 28) arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// for (let i=0; i<arr2.length; i++) {
//   let split = arr2[i].name.split("");
//   let obj = split.filter((el, index) => {
//     return split.indexOf(el) !== index;
//   });

//   if(obj.includes("l")){
//     console.log(i)
//   }
// }

// // 29) arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
// for (let i = 0; i < arr2.length; i++) {
//   let split = arr2[i].name.split("");
//   let obj = split.filter((el, index) => {
//     return split.indexOf(el) !== index;
//   });

//   if (obj.includes("t")) {
//     console.log(arr2[i].key);
//   }
// }

// 30) Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.
// // arr2 de her bir obyekte indexini elave edin
// let newArr = arr2.map((el, i) => {
//   return {
//     ...el,
//     index: i,
//   };
// });
// console.log(newArr);

// arr2.forEach((x) => {
//   x.index = arr2.indexOf(x)
// })
// console.log(arr2);

// // arr2 de "name"-i bashladigi herfle biten obyekleri yeni arraya yigin
// let newArr = [];
// for (let arr of arr2) {
//   if ((arr.name[0] == arr.name.slice(-1))) {
//     newArr.push(arr);
//   }
// }
// console.log(newArr);
