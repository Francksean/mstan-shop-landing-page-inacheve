
console.log('ok')
var tl = gsap.timeline();
//sequenced one-after-the-other
tl.to("#main-right-image", {duration: 2, x: -20, y: 50}) //notice that there's no semicolon!
  .to("#second-right-image", { duration: 1, y: 500});
