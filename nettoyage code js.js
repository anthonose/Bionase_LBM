"</span></div></div><p style=\"text-align:center\">\n"+
"<input value=\"Modifier Informations Patient \" onclick=\"window.open('PatientMd.html', '_parent')\" type=\"button\" id=\"tat\" style=\"width: 471px; height: 29px\"><br></p>\n"+
"<table style=\"width: 730px;height:25px\"><tr><td rowspan=\"2\" class=\"Ett\" >IMPRESSIONS </td>\n"+
"<td class=\"Ett\">QUELLE FICHE SOUHAITEZ-VOUS IMPRIMER?</td>\n"+
"</tr><tr><td class=\"Ctn\" id=\"liens\" >\n"+
"<a href=\"\">  |  BetaHcgPlasma</a><a href=\"\">  |  BetaHcgUrinaire</a><a href=\"\">  |  BiochimieComplet</a><a href=\"\">  |  BiochimieSimple</a><a href=\"\">  |  Coproculture</a><a href=\"\"><a href=\"\">  |  Ecbe+L</a><a href=\"\">  |  Ecbu</a><a href=\"\">  |  Ferritine</a><a href=\"\">  |  Ge+Crp+Swf</a><a href=\"\">  |  Ge+Swf</a><a href=\"\">  |  Hb1ac</a><a href=\"\">  |  Hormones</a><a href=\"\">  |  Immuno+Hematologie</a><a href=\"\">  |  InfectueuxGle</a><a href=\"\">  |  Kop</a><a href=\"\">  |  MarqueursHepathique</a><a href=\"\">  |  Nfs</a><a href=\"\">  |  Nfs+Ge</a><a href=\"\">  |  Proteinurie</a><a href=\"\">  |  Psa</a><a href=\"\">  |  Pu</a><a href=\"\">  |  Pv</a><a href=\"\">  |  PvColUterus</a><a href=\"\">  |  Serologie</a><a href=\"\">  |  Spermo+Cyto+Gramme</a><a href=\"\">  |  Spermoculture</a><a href=\"\">  |  TestCoombs</a><a href=\"\">  |  Vih</a><a href=\"\">  |  Vs</a>\n"+
"</td></tr></table><script>\n"+
"for (var i= 0; i<document.querySelectorAll(\"input[type=button]\").length ; i++){document.querySelectorAll(\"input[type=button]\")[i].style.fontFamily=\"bookman Old Style\";}\n"+
"for (var i= 0; i<document.querySelectorAll(\"input[type=button]\").length ; i++){document.querySelectorAll(\"input[type=button]\")[i].style.fontWeight=\"bold\";}\n"+
"for (var i= 0; i<document.querySelectorAll(\"input[type=button]\").length ; i++){document.querySelectorAll(\"input[type=button]\")[i].style.color= \"#275280\";}\n"+
"for (var i= 0; i<document.querySelectorAll(\"input[type=button]\").length ; i++){document.querySelectorAll(\"input[type=button]\")[i].style.fontSize=\"16px\"}\n"+
"for (var i= 0; i<document.querySelectorAll(\"input[type=button]\").length ; i++){document.querySelectorAll(\"input[type=button]\")[i].style.width=\"300px\"}\n"+
"for (var i= 0; i<document.getElementsByClassName(\"Ett\").length ; i++){document.getElementsByClassName(\"Ett\")[i].style.backgroundColor=\"aqua\"}\n"+
"for (var i= 0; i<document.getElementsByClassName(\"Ett\").length ; i++){document.getElementsByClassName(\"Ett\")[i].style.fontFamily=\"bookman Old Style\"}\n"+
"for (var i= 0; i<document.getElementsByClassName(\"Ett\").length ; i++){document.getElementsByClassName(\"Ett\")[i].style.textAlign=\"center\"}\n"+
"for (var i= 0; i<document.getElementsByClassName(\"Ctn\").length ; i++){document.getElementsByClassName(\"Ctn\")[i].style.backgroundColor=\"#D6E7EF\"}\n"+
"for (var i= 0; i<document.getElementsByClassName(\"Ctn\").length ; i++){document.getElementsByClassName(\"Ctn\")[i].style.fontFamily=\"courier New\"}\n"+
"for (var i= 0; i<document.getElementById(\"liens\").querySelectorAll(\"a\").length; i++){document.getElementById(\"liens\").querySelectorAll(\"a\")[i].style.textDecoration=\"none\";}\n"+
"for (var i= 0; i<document.getElementById(\"liens\").querySelectorAll(\"a\").length; i++){document.getElementById(\"liens\").querySelectorAll(\"a\")[i].style.color=\"black\";}\n"+
"for (var i= 0; i<document.getElementById(\"liens\").querySelectorAll(\"a\").length; i++){document.getElementById(\"liens\").querySelectorAll(\"a\")[i].addEventListener(\"click\", AtChp);}\n"+
"function AtChp(e){var LtrC = e.target.textContent;window.open(('FichierSaisie/'+LtrC.replace(/\s|[|]/g, '')+'.html'), '_blank','left=650,top=50,width=620px,height=842px')}\n"+
"/*Dans l'avenir on utilisera un tableau a la place d'un div ou span*/</script></body></html>";