// Removing Search Tags
function deleteitem(id) {
  let number = id.slice(-1);
  let itemId = "list_" + number;
  document.getElementById(itemId).outerHTML = "";
}
