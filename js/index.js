const form = document.querySelector("form");
const username = document.querySelector(".name");
const surename = document.querySelector(".surename");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const password = document.querySelector(".password");
const image = document.querySelector(".image");
const button = document.querySelector("#btn");
const cardContainer = document.querySelector(".card-container");

button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const name = username.value;
    const surename1 = surename.value;
    const email1 = email.value;
    const phone1 = phone.value;
    const password1 = password.value;
    const image1 = image.value;

    form.reset();
    const card = document.createElement("div");
    card.innerHTML = `<div class="card">
          <img src="${image1}" alt="" />
          <div class="card-content">
            <h3>
              Ism: <span style="color: gray; font-size: 16px">${name}</span>
            </h3>
            <h3>
              Familya:
              <span style="color: gray; font-size: 16px">${surename1}</span>
            </h3>
            <h3>
              Telefon raqam:
              <span style="color: gray; font-size: 16px">${phone1}</span>
            </h3>
            <h3>
              Email:
              <span style="color: gray; font-size: 16px">${email1}</span>
            </h3>
            <h3>
              Parol:
              <span style="color: gray; font-size: 16px">${password1}</span>
            </h3>
          </div>
        </div>`;
    cardContainer.appendChild(card);
  });
