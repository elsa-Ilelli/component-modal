"use strict";

/*//////////////////////////////*/
/*      COMPONENT MANAGER       */
/*//////////////////////////////*/

//CONVERSION DES ELEMENTS HTMLCOLLECTION DANS UN ARRAY
const modalArray = [...document.getElementsByClassName('modal')];
const spanArray = [...document.getElementsByClassName('close')];
const btnArray = [...document.getElementsByClassName('btn-modal')];


//ACTION D'OUVERTURE DE LA MODAL
btnArray.forEach((btn, i) => {
	btn.onclick = function(){
		modalArray[i].style.display = "block";
	}
});

//ACTION DE FERMETURE DE LA MODAL PAR SPAN
spanArray.forEach((span, i) => {
	span.onclick = function(){
		modalArray[i].style.display = "none";
	}
});

//ACTION DE FERMETURE DE LA MODAL EN DEHORS DE CELLE-CI
window.onclick = function (event) {
	if (event.target.classList.contains('modal')) {
		modalArray.forEach((modal, i) =>{
			modalArray[i].style.display = "none";
		})
	}
}


/*//////////////////////////////*/
/*          DARK MODE           */
/*//////////////////////////////*/
document.querySelector('[data-switch-dark]').addEventListener('click', function() {
    if(document.documentElement.hasAttribute("dark")){
      document.documentElement.removeAttribute("dark");
      document.getElementById("btn-icon").src="src/img/moon.png";
    } else {
      document.documentElement.setAttribute("dark", "true");
      document.getElementById("btn-icon").src="src/img/sun.png";
    }
  });
  
  