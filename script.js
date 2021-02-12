var button = document.getElementById("enter");
var clearBtn = document.getElementById("clear");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteButton = document.getElementsByTagName("i");

function inputLength() {
	return input.value.length;
}

function deleteButtonLength(){
	return deleteButton.length;
}

function doneStrike(event){
	// console.log(event.srcElement);
	if(event.srcElement.nodeName === "LI"){
		event.srcElement.classList.toggle("done");
	}
}

function createDeleteButtonIcon(){
	for( var item=0; item < li.length; item++){
		var createDeleteButton = document.createElement("i");
		createDeleteButton.classList.add("fa","fa-trash");
		li[item].appendChild(createDeleteButton);
	}
}

function createListElement() {
	var divClassWrapper = document.createElement("div");
    divClassWrapper.classList.add("li-wrapper");

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	divClassWrapper.appendChild(li);
    ul.appendChild(divClassWrapper);
	input.value = "";

	var createDeleteButton = document.createElement("i");
	createDeleteButton.classList.add("fa","fa-trash");
	li.appendChild(createDeleteButton);
	deleteItemOnClick();

}

function moveToTrash(event) {
	var trash = document.querySelectorAll("i");
	for( var i=0; i< trash.length; i++)
	if(event.srcElement.nodeName === "I"){
		event.srcElement.parentNode.parentNode.remove();
	}
}

function addListAfterClick(event) {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteItemOnClick(){
	for( var index=0; index < deleteButtonLength(); index++){
		deleteButton[index].addEventListener("click", moveToTrash);
	}
}

function emptyList(){
	ul.innerHTML="";
}

clearBtn.addEventListener("click",emptyList);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", doneStrike);

createDeleteButtonIcon();

deleteItemOnClick();








