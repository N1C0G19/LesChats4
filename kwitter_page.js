var firebaseConfig = {
      apiKey: "AIzaSyBb87IWNFaexRKTJ-ynRlee2gCf2-G1DZQ",
      authDomain: "practice-f1eb0.firebaseapp.com",
      databaseURL: "https://practice-f1eb0-default-rtdb.firebaseio.com",
      projectId: "practice-f1eb0",
      storageBucket: "practice-f1eb0.appspot.com",
      messagingSenderId: "772498660324",
      appId: "1:772498660324:web:71ed6d1f9d75c562fe05f1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
         document.getElementById("output").innerHTML += row;

      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}