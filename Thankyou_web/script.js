
///////



var i=0, text;
text = "UI/UX on the other."
var speed = 100;

function typing() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 70);
  }
}

typing ()


///////



console.log("hello world!")

//Make mobile navigation work//

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEL = document.querySelector ('.header');

btnNavEl.addEventListener('click',function(){

  headerEL.classList.toggle('nav-open');
});

///////////////////
// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs= new IntersectionObserver(function(entires) {
  const ent = entries[0];
  console.log(ent)
  if(ent.isIntersection === false)
  document.querySelector(".header").classList.add("sticky");
});


////////////////////////
//// Scroll animation


const observer = new IntersectionObserver((entries) => {
 
   entries.forEach((entry) => {
    if (entry. isIntersecting) {
      entry.target.classList.add('show');
    }
  

  });

});



const hiddenElements = document.querySelectorAll('.animation-hidden');
hiddenElements.forEach((el) => observer.observe(el));

///////
/////////////
 
document.querySelector('.btn-switch').addEventListener('change', function() {
  var categoryA = document.querySelectorAll('.categorya');
  var categoryB = document.querySelectorAll('.categoryb');

  categoryA.forEach(function(item) {
    item.classList.toggle('show');
  });

  categoryB.forEach(function(item) {
    item.classList.toggle('hide');
  });
});
/////////////////////




   