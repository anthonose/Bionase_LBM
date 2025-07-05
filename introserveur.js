// chargement des differents module utiliser pour cette page dans nodejs.
const http= require("http"), fs= require("fs"), url= require("url"), txt_md= require("querystring"), {MongoClient}= require("mongodb");
const cnx_bd= new MongoClient("mongodb+srv://athanasey376:Bionase12@cluster0.uiomylq.mongodb.net/"); 

// creation du serveur
const serveur= http.createServer((req,rep)=>{

// Entete du serveur
rep.setHeader('Content-Type','text/html');

// debut du corps du serveur.
// declaration des variables a l'interieur du serveur
var adr= url.parse(req.url, true), pg_adr="."+ req.url;
var pg_type="", pg_web="";

// declenchement automatique de la creation de page d'accueil(dynamique, sinon pas necessaire si statique) 
//utilisant des informations depuis la base de donnees
(async ()=> {
await cnx_bd.connect();
var m_cns= cnx_bd.db("sample_mflix");
var fam= m_cns.collection("athanaseCol");

// recherche et recuperation des informations depuis la base donnee
var Rchr_nf= await fam.find({}).toArray();
const tab_dbn=[];
const tab_dbp=[];
let textn= "";
let textp= "";
for( let mbrr of Rchr_nf){
textn += tab_dbn.push(Object.values(mbrr)[1]) + "<br>";
textp += tab_dbp.push(Object.values(mbrr)[2]) + "<br>";

let tab_un= new Set(tab_dbn);
let tab_up= new Set(tab_dbp);
tab_un= [...tab_un]; 
tab_up= [...tab_up];

let text_sdn= "";
for( let npers of tab_un){
text_sdn += "<option value=\"" + npers + "\">";}

let text_sdp= "";
for( let ppers of tab_up){
text_sdp += "<option value=\"" + ppers + "\">";}

var html_Strc="<html><"+"head><"+"meta charset"+"=\"utf-8\">"+"</head"+"><body>"+

"<h1 id=\"accueil\">accueil</h1><ul><li><a href=\"appropos.htm\">appros</a></li><li><a href=\"autres.htm\">autres evenements</a></li></ul><p id=\"annonce\">Bonjour, vous etes connecte a page HTML</p><p id=\"inom\">&nbsp;</p><p id=\"iprenom\">&nbsp; </p><p id=\"itel\">&nbsp;</p><form action=\"transit.html\" method=\"post\" name=\"form1\"> <p><label>Nom:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
"<input autocomplete=\"off\" list=\"nomf\" name=\"nom\"><datalist id=\"nomf\">"+ text_sdn +"</datalist></label></p><p><label>Prenoms:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
"<input autocomplete=\"off\" list=\"prenomf\" name=\"prenom\"><datalist id=\"prenomf\">"+ text_sdp +"</datalist></label></p><p><label>Telephone: &nbsp;&nbsp;"+
"<input name=\"tel\" type=\"number\" id=\"tel\"></label></p><p><label>Mot de pass:"+
"<input name=\"pass\" type=\"password\" id=\"pass\"></label></p>"+
"<input type=\"submit\" value=\"Envoyer\">"+
"<img alt=\"encart\" height=\"94\" src=\"imageTest2.jpg\" width=\"727\"></form><p>&nbsp;</p></body></html>";

//insertion des donnees dans la page d'accueil
fs.writeFile("registre.html",
html_Strc,
{encoding:"utf8", flag:"w"},
(err)=>{
if(err){console.log(err);}
else{console.log("Fichier Pre creé avec succès");}
});
}
}
)();
//Fin de creation de la page d'accueil dynamique par le serveur.

// pose des conditions pour l'affichage des differentes page web contenu dans  l'ordinateur du serveur vers le navigateur internet.

// debut Condition SiVrai
pg_type=(req.method==="POST")?
req.on("data",data=>{
console.log("la medthode est maintenant en POST");

const txt_e= encodeURI(data);
const txt_d= decodeURIComponent(txt_e);
const cv_txtd= txt_md.parse(txt_d);
console.log(cv_txtd.nom +' '+ cv_txtd.prenom +' '+cv_txtd.tel +' '+cv_txtd.pass);
(async ()=> {
await cnx_bd.connect();
var m_cnss= cnx_bd.db("Bionase_LBM");
var famm= m_cnss.collection("PATIENTS");
var pers_asp=
{nom:cv_txtd.nom,
prenoms:cv_txtd.prenom,
tel:cv_txtd.tel,
pass:cv_txtd.pass}
var mbr= await famm.insertOne(pers_asp);
var aff_mbr= await famm.findOne(pers_asp);
var aff_Gle= "<br><h2 style=\"color:blue;font-weight:bold;\">"+aff_mbr.nom +"</h2><br><span style=\"color:green;font-weight:bold;\">"+ aff_mbr.prenoms+"</span><br><span style=\"color:red;font-weight:bold;\">"+ aff_mbr.tel+ "</span><br><a href=\"registre.html\"> Retour a  l'accueil</a>";
var html_Strc="<html><"+"head><"+"meta charset"+"=\"utf-8\">"+"</head"+"><h1>Nouvelle personne enregistrée:</h1>"+ aff_Gle+ "</html>";
//var bja="<html><"+"head><"+"meta charset"+"=\"utf-8\">"+"</head"+"><h1>"+ bj+ "</h1></html>";

fs.writeFile("pg_succes.html",
html_Strc,
{encoding:"utf8", flag:"w"},
(err)=>{
if(err){console.log(err);}
else{console.log("ajoute avec succes");}
});

})();

fs.readFile(pg_adr,"utf8",(err, info)=>{
var c_info="";
c_info= (err)?console.log(err):rep.end(info);})
}
)
// fin de la Condition SiVrai

:

// debut de la Condition SiFaux
pg_web=(req.url==="/")?
fs.readFile("./registre.html","utf8",(err, info)=>{
console.log(adr.search|| req.url);							   
var c_info="";
c_info=(err)?console.log(err):rep.end(info);
})
:
fs.readFile(pg_adr,"utf8",(err, info)=>{
var c_info="";
c_info= (err)?console.log(err):rep.end(info);});

// fin de la Condition SiFaux

});
// fermeture du corps du serveur

//finalisation du serveur et du signal du OK
serveur.listen(3004,"localhost",
(async ()=> {await cnx_bd.connect();
console.log("Emission serveur activee");
console.log("Base de donnee connectee");
}));