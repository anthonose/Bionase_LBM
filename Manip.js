var Qnr =document.getElementsByTagName("form");
var lgn_pt=document.getElementsByTagName("label");

var btn_vdg= document.getElementById("vdg");
btn_vdg.addEventListener('click',vd_pgweb);

function vd_pgweb(){

for (var i= 0; i < lgn_pt.length; i++){
if (lgn_pt[i].firstElementChild.value.trim() ===""||lgn_pt[i].firstElementChild.value.trim() ==="null"||lgn_pt[i].firstElementChild.value.trim() ==="indefined"){lgn_pt[i].remove();i--;}

var btn_evt = document.createElement("input");
btn_evt.id="envt";
btn_evt.value="Envoyer";
btn_evt.type="submit";

btn_vdg.replaceWith(btn_evt) ;

}

}

