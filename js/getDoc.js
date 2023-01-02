var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://edhrec.com/commanders/emiel-the-blessed","yes")
ourRequest.onload = function(){
  console.log(ourRequest);
  console.log(ourRequest.getElementsByClassName("Card_name__1MYwa"));

};
ourRequest.send();

function run(){
	console.log("You ran now what?");
}

