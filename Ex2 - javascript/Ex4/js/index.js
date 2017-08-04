$('td').click(function () {
    if ($(this).css('background-color') === 'rgb(255, 255, 0)') {
        $(this).css('background-color', '');
        return;
    }

    $('td').css('background-color', '');
    $(this).css('background-color', 'yellow');
});