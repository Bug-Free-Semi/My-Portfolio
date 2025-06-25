/*================Typing Animation ================*/
var typed = new Typed(".typing" ,{
    strings:["" , "Web Designer","Web Developer"  , "Software Engineer" , "Self Learner"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})



const navLinks = document.querySelectorAll('.aside .nav li a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Remove 'active' class from all links
    navLinks.forEach(nav => nav.classList.remove('active'));

    // Add 'active' class to clicked link
    this.classList.add('active');

    // Get target section id from href attribute
    const targetId = this.getAttribute('href').substring(1);

    // Show target section, hide others
    sections.forEach(section => {
      if (section.id === targetId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });
});

// Optionally, on page load, show only #home and hide others
// window.addEventListener('DOMContentLoaded', () => {
//   sections.forEach(section => {
//     if (section.id === 'home') {
//       section.style.display = 'block';
//     } else {
//       section.style.display = 'none';
//     }
//   });
// });
