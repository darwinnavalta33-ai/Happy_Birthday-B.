const message = `Hi BRINET!!\n\nTo the one who makes my heart race a little faster. I hope your day is as amazing as you are✨.\n\nLike I could ever forget… happy birthday, Gorgeous💕.\n\nHope today spoils you as much as you deserve. `;

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
        setTimeout(typeWriter, 10);
      }
    }

    typeWriter();
  }, 600);
}
