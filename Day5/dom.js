// //tag selector
// let heading1=document.getElementsByTagName("h1");
// //htmlCollection array
// console.log(heading1[0]);

// //2.class selector
// let cs=document.getElementsByClassName("a");
// //htmlCollection array
// console.log(cs[0]);

// //3.id selector
// let idd=document.getElementById("b");
// //return single and the  first element
// console.log(idd);

// //4.query selector it will work on all three selector
// let qs=document.querySelector("p");//#b,.a,
// //return single and the  first element
// console.log(qs);

// //5.Query selector all
// let qsa=document.querySelectorAll("#b");//#b
// //nodeList array
// console.log(qsa);

// // read and write
// let head=document.querySelector("p");
// //read
// console.log(head.textContent);
// //write
// // head.textContent="this is para text";

// let div=document.querySelector("div");
// div.innerHTML="<p>hello from js div</p>";//insert tag
// // div.textContent="<p>hello from para</p>";//write as it is
// // console.log(div.textContent);
// console.log(div.innerHTML);


// //add/remove/toggle class
// let head1=document.querySelector("h1");
// console.log(head1);

// head1.classList.add("color");
// head1.classList.remove("border");
// head1.classList.toggle("background");

// //styling
// let p=document.querySelector("p");
// p.style.color="red";
// p.style.backgroundColor="green";


//creating a list using js
let ul = document.createElement("ul");
let li1 = document.createElement("li")
li1.textContent="item 1";
ul.appendChild(li1);
let li2 = document.createElement("li")
li2.textContent="item 2";
ul.appendChild(li2);
let arr =["item 3","item 4","item 5"];
arr.forEach(element => {
    let lo = document.createElement("li");
    lo.textContent=element;
    ul.appendChild(lo);
 })
document.body.appendChild(ul);





