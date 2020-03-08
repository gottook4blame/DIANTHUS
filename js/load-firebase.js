
// Load this script file at the beginning of all HTML files, before body
// <script src="load-firebase.js"></script>

(function(){
    var config = {
        apiKey: "AIzaSyBBFX51zVi6N0a1F_Li-clF00Ta1q_AqJE",
        authDomain: "dianthus-dabf4.firebaseapp.com",
        databaseURL: "https://dianthus-dabf4.firebaseio.com",
        projectId: "dianthus-dabf4",
        storageBucket: "dianthus-dabf4.appspot.com",
        messagingSenderId: "269507538074",
        appId: "1:269507538074:web:c78f4dba0d4ad2d6680323"
      };
    firebase.initializeApp(config);
    app_firebase = firebase; 
  })();
  