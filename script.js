// step1
console.log ("if the document html is linked to js")
// step2
const btnPlus= document.querySelectorAll(".btn-plus");
const qte= document.querySelectorAll(".quantity");
const btnMinus= document.querySelectorAll(".btn-moins");
const btnDelete= Array.from(document.getElementsByClassName("btn-delete"));
const prices= document.querySelectorAll(".prx");





// total
// function totale() {
//     const prices= document.querySelectorAll(".prx");
// const qte= document.querySelectorAll(".quantity");
// let somme=0
//     for(let i=0; i< prices.length; i++){
//         somme=somme+prices[i].innerHTML*qte[i].innerHTML)
//         document.getElementById("prix-total").innerHTML=somme;
//     prices[0].innerHTML*qte[i].innerHTML
// }


// event function
// increment
for(let i=0; i<= btnPlus.length-1; i++){
 btnPlus[i].addEventListener("click",function(){
    qte[i].innerHTML++;
    totale(); 
 });  
}
// decrement
for(let i=0; i<= btnMinus.length-1; i++){
 btnMinus[i].addEventListener("click",function(){
     if(qte[i].innerHTML >0){
    qte[i].innerHTML--;
    totale();
} 
 });  
}
//  delete
// for(let i=0; i< btnDelete.length; i++){
//  btnDelete[i].addEventListener("click",function(){
//  product[i].remove();
// totale();
//   });
//  } 


