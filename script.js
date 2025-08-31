const message = `Hi BRINET!!\n\nI wish you could see yourself through my eyes — you’d finally understand how amazing you truly are.✨ \n\nKeep shining, the world needs your light. \n\nLike I could ever forget… happy birthday, Gorgeous💕.\n\nHope today spoils you as much as you deserve. `;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
