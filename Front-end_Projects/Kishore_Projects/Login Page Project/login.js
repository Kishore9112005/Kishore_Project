let username = document.getElementById("username");
let passwordBox = document.getElementById("password");
function ran(length=5)
{
  let password=" ";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxzy";
  let num = "1234567890";
  let symbol = "!@#$%^&*()<>?:';/.,";

  
  let all = upper + lower + num + symbol;

  for(let i=0; i<length;i++)
  {
    const randomIndex=Math.floor(Math.random()*all.length);
    password+=all[randomIndex];
  }
  passwordBox.value=password;

}


function Login() {
  
  if (username === " " || password === " ") {
    alert("Enter the vaild username and password");
  } else if (username.lenght < 5) {
    alert("The username atleast contains 4 characters");
  } else if (password.lenght < 5) {
    alert("The password have atleast contains 6 characters");
  } else {
    alert("Your username and password was created successfully");
  }
}
