/*
1. add event listener to the add Money button (form submit)
 make sure to preventDefault so that page doesn't reload
 
 2.get the money user want to add 
 also, get the pin number provided

 3.verify the pin number. for, wrong pin number => failed to add
 for right pin number, allow to add the pin number to the account balance

 4.get the current balance


 6.display/update the balance in the DOM/UI 

*/ 

document.getElementById('btn-add-money')
    .addEventListener('click',function(event){
        event.preventDefault();
        console.log('added the event handler')


        // get money and the pin number
        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('input-pin-number').value;
        
        console.log(addMoney, pinNumber);

        if(pinNumber === '1234'){
            // add money to the account
            const balance = document.getElementById('account-balance').innerText;
           const balanceNumber = parseFloat(balance);

            // new balance
            const newBalance = balanceNumber + addMoneyNumber;

            // update the balance with updated balance
            document.getElementById('account-balance').innerText = newBalance;
            

            // clear the input field with 
            document.getElementById('input-add-money').value = '';
            document.getElementById('input-pin-number').value = '';
            

        }
        else{
            alert('failed to add money . Please try again later')
        }
});