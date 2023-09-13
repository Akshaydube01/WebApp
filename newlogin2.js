        const validUsers = [
            { username: 'Syed', password: 'Syed@123', redirectURL: 'redirect.html' },
            { username: 'Akshay', password: 'Akshay@123', redirectURL: 'redirect.html' },
            { username: 'Sachin', password: 'Sachin@123', redirectURL: 'redirect.html' },
            { username: 'Abhishek', password: 'Abhishek@123', redirectURL: 'redirect.html' },
            { username: 'Daevesh', password: 'Daevesh@123', redirectURL: 'redirect.html' },
        ];

        let isPasswordVisible = false;

        function togglePasswordVisibility() {

            const passwordInput = document.getElementById('password1');
            password=passwordInput.value
            if(password==''){
                return;
            }
            isPasswordVisible = !isPasswordVisible;
            passwordInput.type = isPasswordVisible ? 'text' : 'password';
            document.querySelector('.toggle-password').textContent = isPasswordVisible ? 'Hide' : 'Show';
        }
        let isPasswordVisible2 = false;

        function togglePasswordVisibilityN() {
            const passwordInput2 = document.getElementById('password2');
            password=passwordInput2.value
            if(password==''){
                return;
            }
            isPasswordVisible2 = !isPasswordVisible2;
            passwordInput2.type = isPasswordVisible2 ? 'text' : 'password';
            document.querySelector('.toggle-password').textContent = isPasswordVisible2 ? 'Hide' : 'Show';
        }

        
        // Validation
        function validateLogin() {
            const usernameInput = document.getElementById('user1');
            const passwordInput = document.getElementById('password1');
            const message = document.getElementById('message1');

            const username = usernameInput.value;
            const password = passwordInput.value;

            if (username === '' || password === '') {
                message.textContent = 'Both fields are required.';
                message.style.color = 'red'
                return;
            }

            const validUser = validUsers.find(user => user.username === username && user.password === password);

            if (validUser) {
                message.textContent = 'Login successful.';
                message.style.color = 'green';
                // Redirect to the specified page
                window.location.href = validUser.redirectURL;
                const inputFields = document.querySelectorAll('input:not(.button)');
                inputFields.forEach((input) => {
                    input.value = '';
                });
            } else {
                message.textContent = 'Invalid credentials. Please try again.';
                message.style.color = 'red';
            }
        }
        function validateLoginN() {
            const usernameInput = document.getElementById('user2');
            const passwordInput = document.getElementById('password2');
            const message = document.getElementById('message2');

            const username = usernameInput.value;
            const password = passwordInput.value;

            if (username === '' || password === '') {
                message.textContent = 'Both fields are required.';
                message.style.color = 'red'
                return;
            }

            const validUser = validUsers.find(user => user.username === username && user.password === password);

            if (validUser) {
                message.textContent = 'Login successful.';
                message.style.color = 'green';
                // Redirect to the specified page
                window.location.href = validUser.redirectURL;
                const inputFields = document.querySelectorAll('input:not(.button)');
                inputFields.forEach((input) => {
                    input.value = '';
                });
                
            } else {
                message.textContent = 'Invalid credentials. Please try again.';
                message.style.color = 'red';
            }
        }
        function clearInputFields() {
            const inputFields = document.querySelectorAll('input:not(.button)');
            inputFields.forEach((input) => {
                input.value = '';
            });
            const clearParagraph = document.getElementById('message1');
    if (clearParagraph) {
        clearParagraph.textContent = 'Welcome';
        clearParagraph.style.color = 'white';

    }
            const clearParagraph2 = document.getElementById('message2');
    if (clearParagraph2) {
        clearParagraph2.textContent = 'Welcome';
        clearParagraph2.style.color = 'white';
    }
        }
        
