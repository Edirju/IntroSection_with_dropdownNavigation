
const menuHamburguesa = document.querySelector("#menu-hamburguesa");
const navbar = document.getElementById('navbar');
const closeBtn = document.querySelector('#close-btn');
const featuresBtn = document.querySelector('#features-btn');
const featuresUl = document.querySelector('#features-ul');
const companyBtn = document.querySelector('#company-btn');
const companyUl = document.querySelector('#company-ul');

const featuresBtnArrow = document.querySelector("#features-btn-arrow");
const companyBtnArrow = document.querySelector("#company-btn-arrow");


menuHamburguesa.addEventListener('click', () => {
  navbar.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
  const screenSize = window.innerWidth

  if (screenSize >= 768) {
    navbar.style.display = "block";  
  }else{
    navbar.style.display = "none";
  }

})

featuresBtn.addEventListener('click', () =>{
  // if(featuresUl.style.display === 'block'){
  //   featuresUl.style.display = 'none'
  // }else{
  //   featuresUl.style.display = "block";
  // }
  featuresUl.style.display = (featuresUl.style.display === 'block')
  ? 'none'
  : 'block';
  // modificar estilo de la flecha
  featuresBtnArrow.style.transition = "transform 0.3s ease";
  featuresBtnArrow.style.transform =
    featuresBtnArrow.style.transform === "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
  
})

companyBtn.addEventListener('click', () => {
  companyUl.style.display = (companyUl.style.display === "block")
    ? "none"
    : "block";
  
  companyBtnArrow.style.transition = "transform 0.3s ease";
  companyBtnArrow.style.transform =
    companyBtnArrow.style.transform === "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
})







