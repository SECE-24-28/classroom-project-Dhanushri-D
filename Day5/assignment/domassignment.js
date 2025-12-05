let chtext=document.querySelector(".changetext");
let txt=document.querySelector("#text");
let chclr=document.querySelector(".changecolor");
let chbox=document.querySelector("#box");
let hide=document.querySelector(".hide");
let show=document.querySelector(".show");
let item=document.querySelector("#itemInput");

let Add=document.querySelector(".addItem");
let list=document.querySelector("#list");
chtext.addEventListener("click",()=>{
    txt.textContent="This text changed";
})

chclr.addEventListener("click",()=>{
    chbox.style.backgroundColor="blue";
})

hide.addEventListener("click",()=>{
    chbox.remove(hide);
})

show.addEventListener("click",()=>{
    chbox.add(show);
})

Add.addEventListener("click",()=>{
    let li=document.createElement("li");
    li.textContent=item.value;
    list.appendChild(li);
})
