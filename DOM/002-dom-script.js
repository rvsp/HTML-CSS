var row = document.createElement("div");
row.setAttribute("class", "row justify-content-center");

var col1 = document.createElement("div");
col1.setAttribute("class", "col");

var col2 = document.createElement("div");
col2.setAttribute("class", "col");

// start child column
var childRow = document.createElement("div");
childRow.setAttribute("class", "row");

var childCol1 = document.createElement("div");
childCol1.setAttribute("class", "col");
childCol1.innerText = "Child column1";

var childCol2 = document.createElement("div");
childCol2.setAttribute("class", "col");
childCol2.innerText = "Child column2";

var childCol3 = document.createElement("div");
childCol3.setAttribute("class", "col");
childCol3.innerText = "Child column3";

childRow.appendChild(childCol1);
childRow.appendChild(childCol2);
childRow.appendChild(childCol3);

// end child column

var col3 = document.createElement("div");
col3.setAttribute("class", "col");

col2.appendChild(childRow);

row.appendChild(col1);
row.appendChild(col2);
row.appendChild(col3);

document.getElementById("container").appendChild(row);

// query selector starts here
var pTag1 = document.createElement("p");
pTag1.innerText = "Sample Text 1";
var pTag2 = document.createElement("p");
pTag2.innerText = "Sample Text 2";
var pTag3 = document.createElement("p");
pTag3.innerText = "Sample Text 3";
var pTag4 = document.createElement("p");
pTag4.innerText = "Sample Text 4";

document.getElementById("p").append(pTag1, pTag2, pTag3, pTag4);
var pTags = document.querySelectorAll("p");

pTags.forEach((val) => {
  val.setAttribute("class", "p-tag");
});
console.log(pTags);

// query selector ends here

var container = document.getElementById("container");
container.appendChild(row);

//append to body
document.body.append(container);

// get by query selector
var container = document.querySelectorAll(".div");
console.log(container[0]);

var firstName = document.createElement("input");
firstName.setAttribute("type", "text");
firstName.setAttribute("class", "form-control");
firstName.setAttribute("placeholder", "First Name");
firstName.setAttribute("value", "Apple");

var lastName = document.createElement("input");
lastName.setAttribute("type", "text");
lastName.setAttribute("class", "form-control");
lastName.setAttribute("placeholder", "Last Name");
lastName.setAttribute("value", "r");
row.appendChild(firstName);
row.appendChild(lastName);
