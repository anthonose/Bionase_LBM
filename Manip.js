var chpi_vd=document.getElementsByTagName("input");
var chps_vd=document.getElementsByTagName("select");
var blk_pt=document.getElementsByTagName("div");
var lgn_pt=document.getElementsByTagName("label");

var btn_evt= document.getElementById("tir_fct");
btn_evt.addEventListener('click',vd_pgweb);

function vd_pgweb(){

for (var i= 0; i < 11; i++) 
{
if (lgn_pt[i].firstElementChild.value.trim() ===""||lgn_pt[i].firstElementChild.value.trim() ==="null"||lgn_pt[i].firstElementChild.value.trim() ==="indefined"){lgn_pt[i].remove();i--;}
}
}

/*alert(lgn_pt[0].firstElementChild.value);*/
