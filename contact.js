function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Simple validation checks
    if (name === '' || email === '' || password === '') {
      errorMessage.textContent = 'All fields are required';
      return;
    }
  
    if (!isValidEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email address';
      return;
    }
  
    // If all validations pass, you can proceed with form submission
    // For demonstration, we'll log the form data to console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Reset error message
    errorMessage.textContent = '';
  }
  
  function isValidEmail(email) {
    // Simple email validation regex (not perfect but covers basic cases)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  