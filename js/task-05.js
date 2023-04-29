
const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    if(refs.inputEl.value === ""){refs.spanEl.textContent = "Anonymous"
}
    else{
    event.currentTarget;
        refs.spanEl.textContent = event.currentTarget.value}
        
}

