// console.log(a);
// //hoisting
// var a=10;
// //global or funciton scope
// console.log(a);

// //ES6
// //let and const
// //console.log(b);
// //reference error
// //temporal dead zone
// let b=20;
// b=140;
// //Block scope
// console.log(b);

// //{
// //  let b=30;
// //  console.log(b);
// //}
// console.log(c);
// const c=40;
// c=70;
// console.log(c);

// //1.named function
// namedfun();
// function namedfun() {
//     console.log("named fun called");
    
// }
// namedfun();

// //2.function expression
// // funexp();
// var funexp=function(){
//     console.log("function exp  called");
    
// }

// funexp();

// //3.arrow function
// // arrow();
// let arrow=()=>{
//     console.log("arrow fun called");
    
// }
// arrow();

// //4.callback function and 5.IIFE immediately invoked function expression
// (()=>{
//     console.log("callback fun and iife is called");
    
// })();

// const addTwoNum = (p1,p2)=>{//p1,p2 are parameters

//     let n1=p1 || 10;
//     let n2=p2 || 10;
//     let sum=n1+n2;
//     // console.log(p1,p2);

//     //template literals
//     console.log(`Sum of ${p1} and ${p2} is ${sum}`);
    
//     // console.log(sum);
    
// }
// addTwoNum(40,50);//value passed are arguments
// addTwoNum(70,70);
// addTwoNum();
//op be NaN not a number because p1 and p2 have undefined value, to avoid NaN we can use ||

//To know type
// let a;
// console.log(typeof a);

// let c=[1,2,'a'];
// let d=[1,2,'a'];
// // console.log(c==d); //false
// // console.log(c===d);//false
// console.log(c[0]==d[0]);



// //ARRAY
// let arr=[1,2,3,4,5];
// console.log(arr);

// //using for loop
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]+i;
// }
// console.log(arr);

// let arr2=[1,2,3,4,5];
// //for each
// arr2.forEach((element,index) => {
//     console.log(element,index);
    
// });

// let arr3=[1,2,3,4,5];
// //map 
// // let aa=arr3.map((el,ind)=>{
// //     return el+ind;
// // })
// let aa=arr3.map((el,ind)=>el+ind);
// console.log(arr3);
// console.log(aa);
// // map always create new arr because to return

//filter:Truthly values

// let a=[1,2,3,4,5,6,7,8,9,10];
// //filter work on truthly values
// let b=a.filter((el,ind)=>{
//     return ind>4;
// });
// console.log(b);

// //reduce: return single value
// let c=a.reduce((acc,el,ind)=>{
//     console.log(acc,el);
//     // return acc*el;
//     return acc+el;
// },200);
// console.log(c);

let arr=[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
];
// let b = arr.map((n)=>{
//     return n.username;
// })
// console.log(b);

// let c = arr.filter((el)=>{
//     // console.log(el);
//     return el.id%2 === 0;
// })
// console.log(c);

// let d=arr.map((el)=>el.name)
// .join(" ");

// console.log(y);

let b=arr.map((name) =>{
    return name.username;
});

console.log(b);

let c=arr.filter((el)=>{
//console.log(c);
return el.id%2===0;
})
.map((el)=>el.name)
.join("");
console.log(c);