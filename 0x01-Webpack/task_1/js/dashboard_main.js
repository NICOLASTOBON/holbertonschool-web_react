const $ = require( "jquery" );

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id=\'count\'></p>');
$('body').append('<p>Copyright - Holberton School</p>');

button.addEventListener("click", _.debounce(updateCounter));

function updateCounter() {
  const clicks = $('#count').html().split(" ", 1) + 1 || 1;
  $('#count').html(`${clicks} clicks on the button`);
}

// "500"