const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");
btn.addEventListener("click", sort);

const name = document.getElementById("name");
const hasBeenGood = document.getElementById("hasBeenGood");
const itemForm = document.getElementById("item-form");

const btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", toggleDisplay);

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

function sort() {
  const niceItems = sorteesArr
    .filter((item) => item.hasBeenGood)
    .map((item) => {
      return `<li class="list-item">${item.name.slice(0, 1)}${item.name
        .slice(1)
        .toLowerCase()}</li>`;
    })
    .join("");

  const naughtyItems = sorteesArr
    .filter((item) => !item.hasBeenGood)
    .map((item) => {
      return `<li class="list-item">${item.name.slice(0, 1)}${item.name
        .slice(1)
        .toLowerCase()}</li>`;
    })
    .join("");

  niceList.innerHTML = niceItems;
  naughtyList.innerHTML = naughtyItems;
}

itemForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newEntry = {
    name: name.value,
    hasBeenGood: hasBeenGood.checked,
  };

  sorteesArr.push(newEntry);

  alert("New Item added to the list");

  hasBeenGood.checked = false;
  name.value = "";
});

function toggleDisplay() {
  itemForm.style.display = "flex";
  btnAdd.style.display = "none";
}
