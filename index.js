        function validatelogin(){
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var error = document.getElementById('error');
            if(username === "########" && password ==="####****")
        {
            window.location.href = "dashboard.html";
        } else{
            error.innerText = "invalid username or password!";
            
        }

     
        }
        function showpopup(){
            document.getElementById('popup').style.display = 'flex';
            var ID = document.getElementById('userid');
            
        }
        function closePopup(){
            document.getElementById('popup').style.display = 'none';
        }
