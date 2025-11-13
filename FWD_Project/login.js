 function togglePassword() {
      const pass = document.getElementById('password');
      pass.type = pass.type === 'password' ? 'text' : 'password';
    }
    function login() {
      const email = document.getElementById('email').value;
      const pass = document.getElementById('password').value;

      if(email === "" || pass === "") {
        alert("Please fill all fields!");
      } else {
        alert("Welcome, " + email + " 🎉");
      }
    }
