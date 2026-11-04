// Counter Animation

document.querySelectorAll(".counter")
.forEach(counter => {

const updateCount = () => {

const target =
+counter.getAttribute("data-target");

const value = +counter.innerText;

const increment = target / 100;

if(value < target){

counter.innerText =
Math.ceil(value + increment);

setTimeout(updateCount, 20);

}else{
counter.innerText = target;
}

};

updateCount();

});

// Character Counter

const textarea =
document.getElementById("special");

if(textarea){

textarea.addEventListener("input", () => {

document.getElementById("counter")
.innerText =
textarea.value.length + "/300";

});

}

// Booking Form

const form =
document.getElementById("bookingForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you! Your reservation request has been received."
);

});

}