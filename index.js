//document.getElementById("count_el").innerText=10
alert ('Welcome to my Counter app');
let saveEl=document.getElementById("favour")
let countEL=document.getElementById("count_el")
let count=0
console.log("saveEL")
function increment(){
    count+=1
    countEL.innerHTML=count
}
/*function save(){
    let countStr=count + " - "
    saveEl.innerHTML += countStr
    count=0
  confirm ('Saved');
  
}
*/
function save(){
    let final =confirm('save ?');
    if(final===true){
        let countStr=count + " - "
        saveEl.innerHTML += countStr
        count=0;
        countEL.innerText=0;
    }
    else{
        countStr=" ";
        count=0;
    };
}

