// NAVIGATION
const sections = [...document.querySelectorAll("section")];
const getLinkById = (id) => document.querySelector(`a[href='#${id}']`);

const inView = (section) => {
  let top = section.offsetTop;
  let height = section.offsetHeight;

  while (section.offsetParent) {
    section = section.offsetParent;
    top += section.offsetTop;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    top + height > window.pageYOffset
  );
};

window.onscroll = () => {
  let next = false;

  sections.forEach((section) => {
    const a = getLinkById(section.id);

    if (inView(section) && !next) {
      a.classList.add("nav--current");
      next = true;
    } else {
      a.classList.remove("nav--current");
    }
  });
};





// SKILLS KNOWLEDGE BARS
$(function () {
  $('progress').each(function () {
    var max = $(this).val();
    $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
  });
});


// PROJECTS SECTION - DISPLAY PROJECT DETAILS UPON HOVER


$('.project-panel a').on('mouseover',function(event){
  event.preventDefault();
  $('.project-details').toggleClass('active');
});



// const el = document.getElementById('box');

// const hiddenEl = document.getElementById('hidden');

// // ✅ Show hidden DIV on hover
// el.addEventListener('mouseover', function handleMouseOver() {
//   hiddenEl.style.display = 'block';

//   // 👇️ if you used visibility property to hide div
//   // hiddenEl.style.visibility = 'visible';
// });

// // ✅ (optionally) Hide element on mouse out
// el.addEventListener('mouseout', function handleMouseOut() {
//   hiddenEl.style.display = 'none';

//   // 👇️ if you used visibility property to hide div
//   // hiddenEl.style.visibility = 'hidden';
// });

