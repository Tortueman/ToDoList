var laListe = document.getElementsByTagName("LI");
var i;
for (i = 0; i < laListe.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("fermer");
  span.className = "fermer";
  span.appendChild(txt);s
  laListe[i].appendChild(span);
  localStorage.setItem(laListe[i]);
}

var close = document.getElementsByClassName("fermer");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function nouvelleAct() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("activ").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Aucune activité !");
  } else {
    document.getElementById("UL").appendChild(li);
  }
  document.getElementById("activ").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("fermer");
  span.className = "fermer";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 