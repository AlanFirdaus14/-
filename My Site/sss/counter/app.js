
//global variables
const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn')

// set initial value
let count = 0;


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let target = e.currentTarget.classList;
        if(target.contains('decrease-btn')){
            // decrease count
            count--;
        }else if(target.contains('increase-btn')){
            // increase count
            count++;
        }else{
            // reset count
            count = 0;
        }if(count < 0){
            // if count less than 0
            value.style.color = 'red';
        }else if(count > 0){
            // if count bigger than 0
            value.style.color = 'green';
        }else if(count == 0){
            // if count = 0
            value.style.color = '#333';
        }

        value.textContent = count;
    })
})

