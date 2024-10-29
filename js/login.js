// // console.log('clicking file added')


// // step - 1 : Set event handler
// document.getElementById('button-login').addEventListener('click', function(event){
//     // step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault();
//     console.log('login button clicked');
    
//     // step-3: get the phone number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     console.log(phoneNumber, pinNumber);
//     //  step-4: validate phone number & pin
//     // this is temporary way. You shouldn't like this
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in');
//     }
//     // step-5: allow user to user the website
//     else{
//       alert('wrong phone number or pin')
//     }

// })


document.getElementById('button-login').addEventListener('click',function(event){
        console.log('button clicked')
        event.preventDefault();
        
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber, pinNumber);

        // bad way to validate
        if(phoneNumber === '5' && pinNumber === '1234'){
            console.log('you are logged in')
            window.location.href = '/home.html'
            

        }
        else{
            alert('wrong phone number or pin')
        }
})