const form = document.getElementById('contactForm');
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const subject = document.getElementById('subject');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const subjectError = document.getElementById('subjectError');
        const messageError = document.getElementById('messageError');

        function validateName() {
            if (name.value.trim() === '') {
                nameError.textContent = 'Name is required';
            } else {
                nameError.textContent = '';
            }
        }

        function validateEmail() {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(email.value)) {
                emailError.textContent = 'Invalid email format';
            } else {
                emailError.textContent = '';
            }
        }

        function validateMessage() {
            if (message.value.trim() === '') {
                messageError.textContent = 'Message is required';
            } else {
                messageError.textContent = '';
            }
        }
        function validateSubject() {
            if (subject.value.trim() === '') {
                subjectError.textContent = 'Subject is required';
            } else {
                subjectError.textContent = '';
            }
        }

        name.addEventListener('blur', validateName);
        email.addEventListener('blur', validateEmail);
        message.addEventListener('blur', validateSubject);
        message.addEventListener('blur', validateMessage);

        form.addEventListener('submit', function (event) {
            validateName();
            validateEmail();
            validateSubject();
            validateMessage();

            if (nameError.textContent || emailError.textContent || messageError.textContent) {
                event.preventDefault(); // Prevent form submission if there are errors
            }
        });