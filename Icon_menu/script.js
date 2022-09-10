const link_one = document.getElementById('link_1');
const link_two = document.getElementById('link_2');
const link_three = document.getElementById('link_3');
const link_four = document.getElementById('link_4');
const link_five = document.getElementById('link_5');

link_one.addEventListener('click', function () {
   link_one.classList.toggle('active');
});

link_two.addEventListener('click', function () {
   link_two.classList.toggle('active');
});

link_three.addEventListener('click', function () {
   link_three.classList.toggle('active');
});

link_four.addEventListener('click', function () {
   link_four.classList.toggle('active');
});

link_five.addEventListener('click', function () {
   link_five.classList.toggle('active');
});