const btn = document.querySelector("#adviceBtn");
const adviceId = document.querySelector("#adviceId");
const adviceText = document.querySelector("#adviceText");

const getAdvice = async () => {
  const data = await fetch(
    `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 100)}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  adviceId.innerText = "";
  adviceText.innerText = "";
  adviceId.innerText = `Advice #${data.slip.id}`;
  adviceText.innerText = `"${data.slip.advice}"`;
};
btn.addEventListener("click", getAdvice);
