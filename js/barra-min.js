function barraProgreso(){let e,r=document.querySelector("#pisosVendidos").value,o=r/13,t=45*r-25;o=Math.ceil(100*o),document.querySelector("#valorPorcentaje").innerHTML=o+"%",document.querySelector("#valorPorcentaje").style.left=t+"px";let l=document.getElementsByClassName("libre");if(r>0)for(e=0;e<r;e++)l[e].classList.add("vendido")}barraProgreso();