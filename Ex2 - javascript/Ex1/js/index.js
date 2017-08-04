initDates();

function initDates() {
    var currentDate = moment().format('DD/MMMM/YYYY HH:mm')
    $('#currentDate').text(currentDate);
    var futureDate = moment(currentDate).add(36.5, 'hours').format('DD/MMMM/YYYY HH:mm');
    $('#futureDate').text(futureDate);
}