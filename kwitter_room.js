var firebaseConfig = {
  apiKey: "AIzaSyCRDp0g5KLMcQ4vmtTjTkBshb6FMpZJGxU",
  authDomain: "project-94-e487a.firebaseapp.com",
  databaseURL: "https://project-94-e487a-default-rtdb.firebaseio.com",
  projectId: "project-94-e487a",
  storageBucket: "project-94-e487a.appspot.com",
  messagingSenderId: "977296758392",
  appId: "1:977296758392:web:5137dad11885430cecff8d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
console.log(username+" hails hydra");
document.getElementById("greet").innerHTML = "Welcome, "+username+"!";

function addRoom(){
  var room_name = document.getElementById("input").value;
  console.log(room_name+"room name");
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("roomname", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log(Room_names+" is the new room");
//Start code
var room_name = "<div id="+Room_names+" onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += room_name;
//End code
});});}
getData();

function redirectToRoomname(name){
  console.log(name);
  localStorage.setItem("room", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  window.location = "index.html";
}