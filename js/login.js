// console.log('absolute button clicking file added')

// document.getElementById('id').addEventListener('click',function)

// form submit reloading the page
// step- 1: set eventHandler
document.getElementById('button-login')
        .addEventListener('click',function(event){
            // step-2: prevent default behavior (reloading browser)
            event.preventDefault()
            console.log('login button clicked')

            // step-3: get the phone number
           const phoneNumber = document.getElementById('phone-number').value;
           console.log(phoneNumber)
        })