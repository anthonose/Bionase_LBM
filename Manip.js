var chpi_vd=document.getElementsByTagName("input");
var chps_vd=document.getElementsByTagName("select");
var blk_pt=document.getElementsByTagName("div");
var lgn_pt=document.getElementsByTagName("label");

var btn_evt= document.getElementById("tir_fct");
btn_evt.addEventListener('click',vd_pgweb);

function vd_pgweb(){

for (var i=0; i<10 ; i++) 
{

//lgn_pt[i].style.color="red";
if (chpi_vd[i].value===""){blk_pt[1].removeChild(lgn_pt[i]);}
}
}
/*var att_n = document.getElementById("nom");
var att_pr = document.getElementById("prenom");
var att_pr_rb = document.getElementById("Label2");
var parent_att_pr=document.getElementsByTagName("div");
;

function vd_pgweb (){
if (att_pr.value===""){parent_att_pr[1].removeChild(att_pr_rb);}
}*/