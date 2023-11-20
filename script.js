// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Here, you can add further validation before sending the form data
  
      // Simulate sending form data (you can replace this with your own logic)
      sendDataToServer(name, email, message);
    });
  
    function sendDataToServer(name, email, message) {
      // Simulated API call or form submission
      // Replace this with your actual backend integration or other logic
      console.log('Sending data to the server...');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      // You can perform AJAX requests or other actions here to send data to the server
      // For demonstration purposes, this is a console log showing the form data
    }
  });
  