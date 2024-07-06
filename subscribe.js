// // let subscribeBtn=document.getElementById('subscribeBtn');
// // let subscribe=false

// // subscribeBtn.addEventListener('click', () =>{
  
// //     if(subscribe)
// //     {
// //         subscribeBtn.innerHTML="Thank you! Your submission has been received!";
// //         subscribe=false
// //     }
// //     else
// //     {
// //         subscribeBtn.innerHTML="Please Subscribe";
// //         subscribe=true
// //     }
 
// // } );


// // let subscribeBtn = document.getElementById('subscribeBtn');
// // let subscribed = false;  // Rename 'subscribe' to 'subscribed' for clarity
// // let input = document.querySelector(".input");


// // subscribeBtn.addEventListener('click', () => {
// //     if (subscribed) {
// //         subscribeBtn.innerHTML = "Please Subscribe";
// //         subscribed = false;
// //     } else {
// //         input.innerHTML = "Thank you! Your submission has been received!";
// //         subscribed = true;
// //     }
// // });


// // input.addEventListener('click', () => {
// //     if (subscribed) {
// //         input.innerHTML = "";
// //         subscribed = false;
// //     } else {
// //         input.innerHTML = "Your submission has been received!";
// //         subscribed = true;
// //     }
// // });


// let subscribeBtn = document.getElementById('subscribeBtn');
// let subscribed = false;
// let input = document.querySelector(".input");

// subscribeBtn.addEventListener('click', () => {
//     if (subscribed) {
//         subscribeBtn.innerHTML = "Please Subscribe";
//         input.value = ""; // Clear input field content
//         subscribed = false;
//     } else {
//         subscribeBtn.innerHTML = "Your submission has been received!";
//         input.value = "Thank you! Your submission has been received!"; // Update input field content
//         subscribed = true;
//     }
// });

// input.addEventListener('focus', () => {
//     if (subscribed) {
//         input.value = ""; // Clear input field content
//         subscribed = false;
//     }else {
//          input.value = "Your submission has been received";
//          subscribed = true;
//     }
// });




// function subscribe() {
//     var email = document.getElementById('email').value;
//     if (validateEmail(email)) {
//         // Here you can add the logic to send the email to your server
//         console.log('Subscribed with email:', email);
//         alert('Thank you for subscribing!');
//     }
// else 
//{
//         alert('Please enter a valid email address.');
//     }
// }

// function validateEmail(email) {
//     var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
// }

function subscribe(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        // Here we can add the logic to send the email to your server
        console.log('Subscribed with email:', email);
        alert('Thank you for subscribing!');
        document.getElementById('subscribe-form').reset(); // Optional: Reset the form
    } else {
        alert('Please enter a valid email address.');
    }
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}