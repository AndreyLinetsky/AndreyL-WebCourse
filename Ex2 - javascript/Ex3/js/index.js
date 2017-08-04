function testInput() {
    var input = $('#input').val();
    var primeResult = testPrime(input);

    switch (isNaN(primeResult) || primeResult) {
        case true:
            alert('Input was not a number!');
            break;

        case 1:
            alert('Number ' + input + ' is a prime number');
            break;

        case 0:
            alert('Number ' + input + ' is NOT a prime number');
            break;

        default:
            break;
    }
}

function testPrime(input) {
    if (isNaN(input)) {
        return isNaN;
    }

    var convertedValue = parseInt(input);
    if (convertedValue === 1 || convertedValue === 2) {
        return 1;
    }

    for (var i = 2; i <= Math.floor(Math.sqrt(convertedValue)); i++) {
        if (convertedValue % i === 0) {
            return 0;
        }
    }

    return 1;
}