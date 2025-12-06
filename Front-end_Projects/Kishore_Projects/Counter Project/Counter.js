const  decrease = document.getElementById("decrease_btn");
const increase = document.getElementById("increase_btn");
const rest = document.getElementById("reset_btn");
const countvalue = document.getElementById("count_value");

let count = 0;
increase.onclick = function()
{
    count++;
    countvalue.textContent = count;
}

decrease.onclick = function()
{
    count--;
    countvalue.textContent = count;
}

rest.onclick = function()
{
    count=0;
    countvalue.textContent = count;
}