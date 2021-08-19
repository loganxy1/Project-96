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


  

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("roomname");

function back(){
    window.location = "kwitter_room.html";
}

function send(){
    var message = document.getElementById("chatter").value;
    firebase.database().ref(room_name).push({
        message: message,
        username: user_name,
        likes: 0
    });
    document.getElementById("chatter").value = "";
}