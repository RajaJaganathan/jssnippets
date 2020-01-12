var obj = { name: "" };

setName(obj);

function setName(obj) {
  obj.name = "kelvin";
  obj = new Object();
  obj.name = "Peter";
}

console.log(obj);
