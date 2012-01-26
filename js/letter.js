
alert('This is an alert.');

var name;

while (!name) {
name = prompt('What is your name?');
}

console.log(name);

var writeNameMultipleTimes = function () {
for (var i = 0; i < 5; i++ ) {
document.write('<strong>i</strong><br>');
}
};

writeNameMultipleTimes();

