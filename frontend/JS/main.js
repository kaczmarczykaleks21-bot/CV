console.log('js is working!');
const navbarBtns = document.querySelectorAll('.navBtns');

function goToSection(sectionID) {
  const data = ['', 'aboutme', 'skills', 'projects', 'contact'];
  window.location.href = `#${data[sectionID]}`;
  console.log('running goToSection');
}

navbarBtns.forEach((navbarBtn, ID) => {
  navbarBtn.addEventListener('click', () => {
    goToSection(ID);
    console.log(navbarBtn);
  });
});
