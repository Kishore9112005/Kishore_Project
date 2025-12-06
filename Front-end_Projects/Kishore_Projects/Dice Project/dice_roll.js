function Rolldice() {
  const no_dice = document.getElementById("no_dice").value;
  const dice_result = document.getElementById("dice_result");
  const dice_img = document.getElementById("dice_img");

  const values = [];
  const images = [];

  for (let i = 0; i < no_dice; i++) 
    {
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_img/${value}.png" height="100px">`);
    }
    dice_result.textContent =`dice: ${values.join(" ,")}`;
    dice_img.innerHTML =images.join(" ");
}
