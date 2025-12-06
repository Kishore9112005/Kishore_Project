const max=100;
const min = 1;
let attempts = 0;
let guess;
const result = Math.floor(Math.random()*(max - min +1))+min;
running = true;

while(running)
{
      guess = window.prompt("Enter the random Number from 1 - 100");
      guess =Number(guess);

      if(isNaN(guess))
      {
        window.alert("Enter the valid number:");
      }
      else if( guess < min || guess > max)
      {
        window.alert("Enter the valid Number:");
      }
      else{
        attempts++;
        if(guess < result)
        {
          window.alert("Your value is too Low!");
        }
        else if(guess > result)
        {
          window.alert("Your value is too High!");
        }
        else{
          window.alert(`Your value ${result} is correct`);
          running = false;
        }
      }
}