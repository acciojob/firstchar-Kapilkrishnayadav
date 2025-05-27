function firstChar(text) {
  // your code here
	let s=text.trim()
	if(s.length>0)
	return s[0];
	return "";
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
