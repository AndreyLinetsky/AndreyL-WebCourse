getUserInput();

function getUserInput() {
    var input = prompt("Please enter a string");
    var titlizedInput = titleizeString(input);
    $('#titleized-string').text(titlizedInput);
}

function titleizeString(input) {
    var strings = input.toLowerCase().split(' ');
    var titlizedStrings = strings.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })

    return titlizedStrings.join(' ');
}