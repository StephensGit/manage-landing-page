let checkboxOne = document.querySelector('#checkbox-one');
let checkboxTwo = document.querySelector('#checkbox-two');
let checkboxThree = document.querySelector('#checkbox-three');
let checkboxFour = document.querySelector('#checkbox-four');

const form = document.querySelector('form');
const errorMessageWrapper = document.querySelector('.error-msg-wrapper');

let testimonial = document.querySelector('.testimonial-item');
let testimonialItem = document.querySelector('#testimonials div');

// click button
checkboxOne.addEventListener('click', () => {
  testimonialItem.classList.toggle('.testimonial-item-clicked');

  changeTestimonial(testimonialOne());
});

checkboxTwo.addEventListener('click', () => {
  testimonialItem.classList.toggle('.testimonial-item-clicked');
  changeTestimonial(testimonialTwo());
});

checkboxThree.addEventListener('click', () => {
  testimonialItem.classList.toggle('.testimonial-item-clicked');
  changeTestimonial(testimonialThree());
});

checkboxFour.addEventListener('click', () => {
  testimonialItem.classList.toggle('.testimonial-item-clicked');
  changeTestimonial(testimonialFour());
});

// Swap existing content with div related to checkbox
const testimonialOne = () => {
  testimonial.innerHTML = ``;
  let testimonialHTML = testimonial.innerHTML;
  testimonialHTML = `
  <img class="avatar-img" src="./images/avatar-ali.png" alt="avatar" />
  <p>Ali Bravo</p>
  <p>
    “We have been able to cancel so many other subscriptions since using
    Manage. There is no more cross-channel confusion and everyone is much
    more focused.”
  </p>`;
  return testimonialHTML;
};

const testimonialTwo = () => {
  testimonial.innerHTML = ``;
  let testimonialHTML = testimonial.innerHTML;
  testimonialHTML = `
    <img class="avatar-img" src="./images/avatar-anisha.png" alt="avatar" />
    <p>Anisha Li</p>
    <p>
      “Manage has supercharged our team’s workflow. The ability to maintain
      visibility on larger milestones at all times keeps everyone
      motivated.”
    </p>
  `;
  return testimonialHTML;
};

const testimonialThree = () => {
  testimonial.innerHTML = ``;
  let testimonialHTML = testimonial.innerHTML;
  testimonialHTML = `
  <img class="avatar-img" src="./images/avatar-shanai.png" alt="avatar" />
  <p>Shanai Gough</p>
  <p>
    “Their software allows us to track, manage and collaborate on our
    projects from anywhere. It keeps the whole team in-sync without being
    intrusive.”
  </p>
  `;
  return testimonialHTML;
};

const testimonialFour = () => {
  testimonial.innerHTML = ``;
  let testimonialHTML = testimonial.innerHTML;
  testimonialHTML = `
  <img class="avatar-img" src="./images/avatar-richard.png" alt="avatar" />
  <p>Richard Watts</p>
  <p>
  “Manage allows us to provide structure and process. It keeps us organized and focused. 
  I can’t stop recommending them to everyone I talk to!”
  </p>
  `;
  return testimonialHTML;
};

const changeTestimonial = (testimonialItem) => {
  testimonial.innerHTML = ``;
  testimonial.innerHTML = testimonialItem;
};

// Update UI with error message if email length is 0
const displayError = (email) => {
  if (email.length === 0) {
    errorMessageWrapper.innerHTML = `
    <span class="error-msg">Please insert a valid email</span>`;
  } else {
    errorMessageWrapper.innerHTML = ``;
  }
};

form.addEventListener('submit', (e) => {
  // prevent default action
  e.preventDefault();

  // get email value from form
  const email = form.email.value.trim();

  // update the ui with error message if no email
  displayError(email);

  // reset form
  form.reset();
});

window.addEventListener('load', () => {
  testimonial.innerHTML = ``;
  testimonial.innerHTML = `
    <img class="avatar-img" src="./images/avatar-ali.png" alt="avatar" />
    <p>Ali Bravo</p>
    <p>
      “We have been able to cancel so many other subscriptions since using
      Manage. There is no more cross-channel confusion and everyone is much
      more focused.”
    </p>
  `;
});
