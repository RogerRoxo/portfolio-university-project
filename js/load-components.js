
// Fetch -> do request to find file
fetch("components/header.html")
  .then(response => response.text()) // response ir returned. this line convert response value in text
  .then(data => { // data is HTML
    document.getElementById("header").innerHTML = data; // Load component "header"
  });