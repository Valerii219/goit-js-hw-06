const inputEl = document.querySelector('#validation-input');

const result = inputEl.addEventListener('blur', () =>  {
    const inputLength = inputEl.dataset.length;
    let inputLengthNum = Number (inputLength);
    if(inputEl.value.length === inputLengthNum){
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
            }
                else{
                    inputEl.classList.add('invalid');
                    inputEl.classList.remove('valid');
        
                }
  
   } );
