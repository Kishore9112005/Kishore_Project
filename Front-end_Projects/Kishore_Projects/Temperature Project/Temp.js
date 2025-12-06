const num_box = document.getElementById("num_box");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius")
const result = document.getElementById("result");
let temp;
function convert()
{
  if(fahrenheit.checked)
  {
    temp = Number(num_box.value);
    temp = temp*9/5+32;
    result.textContent = temp.toFixed(1)+"°F"; //shortcut for degree symbol alt+0176
}
  else if(celsius.checked)
  {
temp = Number(num_box.value);
temp = 5/9*(temp-32);
result.textContent = temp.toFixed(1)+"°C";
  }
  else{
    result.textContent = "Select the unit";
  }
}