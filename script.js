const formRef = document.querySelector(".form")
const numberInputRef1 = document.querySelector(".number1");
const numberInputRef2 = document.querySelector(".number2");
const operation = document.getElementById('select')


const countNumbers = function () {
    const number1 = Number(numberInputRef1.value)
    const number2 = Number(numberInputRef2.value)

    if (operation.value === '+') {
        res = number1 + number2;
        alert(res);
    } else if (operation.value === '-') {
        res = number1 - number2;
        alert(res);
    } else if (operation.value === '*') {
        res = number1 * number2;
        alert(res);
    } else if (operation.value === '/') {
        res = number1 / number2;
        alert(Math.round(res));
    } else if (!!operation.value) {
        alert('ВЫБЕРИТЕ МАТЕМАТИЧЕСКУЮ ОПЕРАЦИЮ')
    }
}

formRef.addEventListener('submit', function (event) {
    event.preventDefault()
    countNumbers()
})




