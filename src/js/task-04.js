let counterValue = 0;
 const decrementEl = document.querySelector('[data-action="decrement"]')
 const incrementEl = document.querySelector('[data-action="increment"]')
 const valueCounter =  document.querySelector('#value')


incrementEl.addEventListener("click", () => {
counterValue++;
    valueCounter.textContent = counterValue;
}

 )


decrementEl.addEventListener("click", () => {
    counterValue--;
    valueCounter.textContent = counterValue;
    } )

const CounterPlugin = function({inValue = 0, step = 1} = {}){
    this.value = inValue;
    this.step = step;
}

const counter = new CounterPlugin({step: 1});