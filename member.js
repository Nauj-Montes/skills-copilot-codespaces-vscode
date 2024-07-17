function skillsMember() {
  var member = document.getElementById("member");
  var memberText = member.options[member.selectedIndex].value;
  if (memberText === "Select Member") {
    document.getElementById("skillsMember").style.display = "none";
  } else {
    document.getElementById("skillsMember").style.display = "block";
  }
}