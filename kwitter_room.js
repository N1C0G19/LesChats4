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

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      widnow.location = "kwitter_page.html";
    }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

   } });  }); }
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}