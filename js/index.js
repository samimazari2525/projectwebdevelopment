const dateInput = document.getElementById('checkin');

const today = new Date();
const oneYearFromToday = new Date();
oneYearFromToday.setFullYear(today.getFullYear() + 1);

dateInput.min = formatDate(today);
dateInput.max = formatDate(oneYearFromToday);

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
const checkout = document.getElementById('checkout');

const now = new Date();
const thisyear = new Date();
thisyear.setFullYear(now.getFullYear() + 1);

checkout.min = formtDate(now);
checkout.max = formtDate(thisyear);

function formtDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

let form = document.getElementById("form");
form.addEventListener('submit', function (e) {
  e.preventDefault();

  Swal.fire(
    'Your form is successfully submitted',
    'We will replay shortly'
  )
  const firstNameInput = document.getElementById('checkin');

  // Send value to server
  console.log(firstNameInput.value);

  // 👇️ clear input field
  firstNameInput.value = '';
  const firstNameInput1 = document.getElementById('checkout');

  // Send value to server
  console.log(firstNameInput1.value);

  // 👇️ clear input field
  firstNameInput1.value = '';
  const firstNameInput2 = document.getElementById('room');

  // Send value to server
  console.log(firstNameInput2.value);

  // 👇️ clear input field
  firstNameInput2.value = '';
  const firstNameInput3 = document.getElementById('guest');

  // Send value to server
  console.log(firstNameInput3.value);

  // 👇️ clear input field
  firstNameInput3.value = '';


});



$("#viewimg1").click(function () {
  $(".card-display").toggle();
  $(this).text(function (i, text) {
    return text === "View Less" ? "View More" : "View Less";
  })
});


// Gallery section

function myFunction() {
  let x = document.getElementById("part3");
  let z = document.getElementById("part2");
  if (x.style.display == "none" && z.style.display == "inline") {
    x.style.display = "inline";
    z.style.display = "none";
    document.getElementById("show").innerHTML = "Learn Less";
  } else {
    x.style.display = "none";
    z.style.display = "inline";
    document.getElementById("show").innerHTML = "Learn More";
  }
}
function myFunctionView() {
  let x = document.getElementById("pic-1");
  let p = document.getElementById("pic-2");

  if (x.style.display == "none" && p.style.display == "none") {
    x.style.display = "inline";
    p.style.display = "inline";

    document.getElementById("viewimg").innerHTML = "View Less";
  } else {
    x.style.display = "none";
    p.style.display = "none";
    document.getElementById("viewimg").innerHTML = "View More";
  }
}

//slider section




$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    // dots: true,
    nav: true,
    loop: true,
    items: 1,

  });
  $(".owl-prev").html('<i class="fa-solid fa-arrow-left fa-2xs"></i>');
  $(".owl-next").html('<i class="fa-solid fa-arrow-right fa-2xs"></i>');
})