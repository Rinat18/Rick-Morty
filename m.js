/* Задание №1.1. 
    Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
    Используйте fetch или ajax. Отобразите на странице имена персонажей из 
    Рика и Морти в list. 
    let block1 = $('.block1');
    let list = $('.list');
    (Вы можете стилизовать страницу по желанию.)
    */

const API = "https://rickandmortyapi.com/api/character";
const API2 = "http://localhost:8011/characters";
let block1 = document.querySelector(".block-1");
let list = document.querySelector(".list");
readApi();

async function readApi() {
  const res = await fetch(API);
  const data = await res.json();
  data.results.forEach((elem) => {
    list.innerHTML += `
    <img class="imgLi" id="${elem.id}" style=" width: 100px;
    height: 100px;"  src="${elem.image}"/>
          <li>${elem.name}</li>
        `;
  });
}

/* Задание №1.2. 
    Рядом с именами отобразите все изображения
    которые вы получили вместе с остальными данными из сервера.
    */

//? COMPLETE

/* Задание №1.3. 
    Создайте файл db.json и запустите локальный сервер.
    Данные которые вы получили во втором задании, сохраните 
    в локальном сервере db.json, в массиве под 
    названием "characters".
    Подсказка: как только ваши данные сохранились в db.json
    функцию, которая отправляет запрос на db.json стоит закомментировать.
    */

// toExportJson();
// async function toExportJson() {
//   const res = await fetch(API);
//   const data = await res.json();
//   console.log(data.results);
//     fetch(API2, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//       body: JSON.stringify(data.results),
//     });
//   }

// ? COMPLETE

/* Задание №1.4. 
    А теперь сделайте запрос на локальный сервер.
    Во второй блок с классом 'block-2', отобразите имена, которые 
    вы получили (стянули) с db.json. */

let block2 = document.querySelector(".list2");

readDb();
async function readDb() {
  let res = await fetch(API2);
  let data = await res.json();
  data[0].forEach((elem) => {
    block2.innerHTML += `
    <img class="imgLi" id="${elem.id}" style=" width: 100px;
    height: 100px;"  src="${elem.image}"/>
              <li>${elem.name}</li>
      `;
  });
}

/* Задание №1.5. 
    К именам добавьте картинки персонажей.
    В итоге у вас должна получиться точная копия первых двух тасков.
    Отличие которых лишь в базе данных.
    */

// ? COMPLETE

// ! INFO

let info = document.querySelector("#info");

document.addEventListener("click", (e) => {
  let id = [...e.target.id];
  let img = [...e.target.classList];
  console.log(img);
  console.log(id[0]);
  if (img == "imgLi") {
    fetch(`${API}/${id[0]}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        info.innerHTML = `
        <div class="card_info">
        <img class="cardImg" src="${data.image}" alt="" />
        <div class="card-body">
          <p>Name</p>
          <div class="name">${data.name}</div>
          <p>Status</p>
          <div class="status">${data.status}</div>
          <p>Species</p>
          <div class="species">${data.species}</div>
          <p>Gender</p>
          <div class="gender">${data.gender}</div>
        </div>
      </div>
    `;
      });
  } else {
    info.innerHTML = "";
  }
});

async function infoCard(ide) {
  let res = await fetch(API);
  let data = await res.json();
  let ids = ide;
  console.log(data.ids);
}
