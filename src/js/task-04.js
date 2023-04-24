let counterValue = 0;
 const decrementEl = document.querySelector('[data-action="decrement"]')
 const incrementEl = document.querySelector('[data-action="increment"]')
 const valueCounter =  document.querySelector('#value')

const counter = {
value: 0,
increment() {
console.log('increment -> this', this);
this.value += 1;
},
decrement() {
console.log('decrement -> this', this);
this.value -= 1;

} }

decrementEl.addEventListener('click', function (){
counter.decrement();
valueCounter.textContent = counter.value;
} )



incrementEl.addEventListener('click', function (){
counter.increment();
valueCounter.textContent = counter.value
})
console.log(counter.value);

