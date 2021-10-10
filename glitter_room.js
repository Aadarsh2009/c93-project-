    firebaseConfig = {
    apiKey: "AIzaSyAltRb6ihL7MNqDCA9W78P-PWspbziWdKc",
    authDomain: "glittertestapp.firebaseapp.com",
    databaseURL: "https://glittertestapp-default-rtdb.firebaseio.com",
    projectId: "glittertestapp",
    storageBucket: "glittertestapp.appspot.com",
    messagingSenderId: "144265349526",
    appId: "1:144265349526:web:9eb5a82e2d01eb74b0b5b7"
  };
  
  firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
