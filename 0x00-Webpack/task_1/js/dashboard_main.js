import $ from 'jquery';
import _ from 'lodash';


let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

const dbUpdatedCounter = _.debounce(updateCounter);


$(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append("<p id='count'></p>");
    $('body').append('<p>Copyright - Holberton School');

    // Bind the debounced click event to the button
    $('button').on('click', dbUpdatedCounter);
});
