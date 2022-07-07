'use strict';

const listItemEls = document.querySelectorAll(".list__item")
const specialtiesEls = document.querySelectorAll(".specialties")
const conditionsEls = document.querySelectorAll(".conditions")
const proceduresEls = document.querySelectorAll(".procedures")

// Removing Search Tags
function deleteitem(id) {
  let number = id.slice(-1);
  let itemId = "list_" + number;
  document.getElementById(itemId).outerHTML = "";
}

const specialties = () => {
  for (const listItemEl of listItemEls) {
    listItemEl.style.display = "none";
    for (const item of specialtiesEls) {
      item.style.display = "block";
    }
  }
}
const conditions = () => {
  for (const listItemEl of listItemEls) {
    listItemEl.style.display = "none";
    for (const item of conditionsEls) {
      item.style.display = "block";
    }
  }
}
const procedures = () => {
  for (const listItemEl of listItemEls) {
    listItemEl.style.display = "none";
    for (const item of proceduresEls) {
      item.style.display = "block";
    }
  }
}