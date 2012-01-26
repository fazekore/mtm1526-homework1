
alert('This is an alert.');

var name;

while (!name) {
name = prompt('Whats the first letter of the alphabet?');
}

console.log(name);

var writeNameMultipleTimes = function () {
for (var a = 0; a < 10; a++ ) {
document.write('<strong>a</strong><br>');
}
};

writeNameMultipleTimes();

