<script src="Manip.js"></script><script type="module"> import {exa_Grp} from "./scode.js";
var lgn_chp=document.getElementsByTagName("label");
let CvED=exa_Grp.Examens_Demandes.split(",");
for (var i= 0; i < lgn_chp.length; i++)
{if(lgn_chp[i].firstElementChild.nodeName==="INPUT"){lgn_chp[i].firstElementChild.value= exa_Grp[lgn_chp[i].firstElementChild.name]}
else if(lgn_chp[i].firstElementChild.multiple){
for (var j= 0; j < lgn_chp[i].firstElementChild.children.length; j++)
{let cph=lgn_chp[i].firstElementChild.children[j].textContent;
for (var l= 0; l < lgn_chp[i].firstElementChild.children[j].children.length; l++){for (var m= 0; m < CvED.length; m++){
if(lgn_chp[i].firstElementChild.children[j].children[l].textContent===CvED[m]){let NvS=document.createElement("option");NvS.selected="selected";NvS.textContent=CvED[m];
lgn_chp[i].firstElementChild.children[j].children[l].replaceWith(NvS);}}}}}
else {lgn_chp[i].firstElementChild.firstElementChild.textContent= exa_Grp[lgn_chp[i].firstElementChild.name]}}
</script>
