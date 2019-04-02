function hasNumber(myString) {
  	return /\d/.test(myString);
}
function hasLetter(myString){
	return /[a-z]/i.test(str);
}
function hasSymbol(myString) {
  	let arr = ["_"];
  	return (new RegExp(arr.join("|"))).test(myString);
}
function hasCases(myString){
	 return (/[a-z]/.test(myString))&&(/[A-Z]/.test(myString));
}
function resetPassword(){
	document.getElementById("hidden").style.display = "block";
	var name = document.getElementsByName("email")[0].value;
	//TODO: send to verification to emial
}
function login(){
	var name = document.getElementsByName("email")[0].value;
	var password = document.getElementsByName("psw")[0].value;
	//TODO: send email and entrypted password to backend
	if(name.length==0){
		document.getElementById("ph").innerHTML = "email can't be blank";
	}
	
}
function register(){
	var name = document.getElementsByName("email")[0].value;
	var password = document.getElementsByName("psw")[0].value;
	var password_ = document.getElementsByName("psw")[1].value;
	if(!testInput(name,password,password_))return;
	//TODO: send email and entrypted password to backend
	
	window.location.href="./success.html";
}
function reset(){
	var name = document.getElementById("email").innerHTML;
	var password = document.getElementsByName("psw")[0].value;
	var password_ = document.getElementsByName("psw")[1].value;
	if(!testInput(name,password,password_))return;
	//TODO: send email and entrypted password to backend
	
	window.location.href="./success.html";
}
function testInput(name, password, password_){
	var output = document.getElementById("ph");
	if(name.length==0){
		output.innerHTML = "email can't be blank";
		return false;
	}
	else if(password!=password_){
		output.innerHTML = "you must enter the same password";
		return false;
	}
	else if(password.length <8){
		output.innerHTML = "password must have at least 8 characters";
		return false;
	}
	else if(!hasNumber(password)){
		output.innerHTML = "password must have at least least 1 number";
		return false;
	}
	else if(!hasNumber(password)){
		output.innerHTML = "password must have at least least 1 upper case and 1 lower case";
		return false;
	}
	else if(!hasCases(password)){
		output.innerHTML = "password must have at least least 1 upper case and 1 lower case";
		return false;
	}
	else if(!hasSymbol(password)){
		output.innerHTML = "password must have at least least 1 symbol (_)";
		return false;
	}
	else{
		output.innerHTML = "";
		return false;
	}
	return true;
}