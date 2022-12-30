let msgPage = document.getElementById("control-container");
setInterval(() => {
  d = new Date();

  sec = d.getSeconds();
  ms = d.getMilliseconds();

  sec_rotation = 6 * sec + 0.006 * ms;

  document.body.style.backgroundImage = `linear-gradient(${sec_rotation}deg, #f4959d8e 10%, #12485c8e 100%)`;
  msgPage.style.backgroundImage = `linear-gradient(${sec_rotation}deg, #f4959d8e 10%, #12485c8e 100%)`;
}, 10);

let userName = document.getElementById("yourName");
let startButton = document.getElementById("start-btn");
let disName = document.getElementById("displayName");

startButton.addEventListener("click", () => {
  if (userName.value.length > 0) {
    disName.innerHTML = `Hey! ${userName.value}`;
  }
});
