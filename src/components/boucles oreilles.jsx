import React from 'react';
import '..\\public\\main.css';


function Boucles() {
  const arrayBoucleOreilles = [
    {
      nom:"boucle1",
      image:'images-boucles/boucle1.png',
      descriptif:"blablabla",
      prix:'---'  
    },
    {
      nom:"boucle2",
      image:'images-boucles/boucle2.png',
      descriptif:"blablabla",
      prix:'---'  
    },
    {
      nom:"boucle3",
      image:'images-boucles/boucle3.png',
      descriptif:"blablabla",
      prix:'---'  
    }
    ]
    
  return<>
  <ul>
 {
 arrayBoucleOreilles.map(item => (
 <li key={item.nom}>
 <span role="img" aria-label={item.name}
 id={item.name}>{item.image}</span>
 </li>
 ))
 }
 </ul>
  
  
  </>;
}

export default Boucles();
