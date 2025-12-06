const random_no1 = document.getElementById("random_no1");


const random_btn = document.getElementById("random_btn");
let randomNumber1;

let max =100;
let min = 1;
random_btn.onclick = function()
{
    randomNumber1 =Math.floor(Math.random()*max)+min;
   

    random_no1.textContent = randomNumber1;
   

}