var chp_vd=document.getElementsByTagName("input");
var blk_pt=document.getElementsByTagName("div");
var lgn_pt=document.getElementsByTagName("label");



var att_n = document.getElementById("nom");
var att_pr = document.getElementById("prenom");
var att_pr_rb = document.getElementById("Label2");
var parent_att_pr=document.getElementsByTagName("div");
var btn_evt= document.getElementById("tir_fct");
btn_evt.addEventListener('click',vd_pgweb);
function vd_pgweb (){

//parent_att_pr.removeChild(att_pr)
if (att_pr.value===""){parent_att_pr[1].removeChild(att_pr_rb);}
}