// add money to the account


/*
S-1: add event handler 
prevent page reload after form submit
s-2: get money to be added to the account balance & also get the pin number
s-3: verify the pin Number

*/  

// step-1: add an event handler to the addmoney button inside the form
document.getElementById('btn-add-money')
        .addEventListener('click', function(event){
            // prevent page reload after form submit
            event.preventDefault();
          
            // step-2: get money to be added to the account
            const addMoneyInput = document.getElementById('input-add-money').value;
            console.log( typeof addMoneyInput);

            // get the pin number provided
            const inputPinNumber = document.getElementById('input-pin-number').value;
            console.log(typeof inputPinNumber);

            // step-3: verify pin number

            // wrong way to validate pin Number
            if(inputPinNumber === '1234'){
                console.log('adding money to your account');

                // step-4: get the current balance
            const balance = document.getElementById('account-balance').innerText;
            console.log(typeof balance);

            // step-5: add addMoneyInput with balance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);

            // step-6: update the balance in the UI / DOM
            document.getElementById('account-balance').innerText = newBalance;

            document.getElementById('input-add-money').value = '';
            document.getElementById('input-pin-number').value = '';

            
            }
            
            
          
            else{
                alert('failed to add money ! please try again')
            }
        })