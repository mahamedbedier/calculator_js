let output = document.querySelector('.output');
let btn = document.querySelectorAll('.btn');
let equal = document.querySelector('.btn-green');
let clear = document.querySelector('.btn-red');
let yellow = document.querySelectorAll('.btn-yellow');


btn.forEach(btn => {

    btn.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        output.value += value;
    })

});
equal.addEventListener('click',function () {
    if (output.value == '') {
        output.value = 'please inter numbers'
        setTimeout(() => {
            output.value = ''
        }, 1000);

    } else {
        let answer = output.value;
        output.value = eval(answer);
    }
    

})
clear.addEventListener('click',function () {
        output.value = ''
})
























