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
var Lbd= cnx_bd.db("Bionase_LBM");
var Lpt= Lbd.collection("PATIENTS");

// recherche et recuperation des informations depuis la base donnee
var rch_Mld= await Lpt.find({}).toArray();
let text= "";

for( let pers of  rch_Mld){text += Object.values(pers)[1] + "<br>";}

console.log(text);

/*var html_Strc="<html><"+"head><"+"meta charset"+"=\"utf-8\">"+"</head"+"><body>"+

"<h1 id=\"accueil\">accueil</h1><ul><li><a href=\"appropos.htm\">appros</a></li><li><a href=\"autres.htm\">autres evenements</a></li></ul><p id=\"annonce\">Bonjour, vous etes connecte a page HTML</p><p id=\"inom\">&nbsp;</p><p id=\"iprenom\">&nbsp; </p><p id=\"itel\">&nbsp;</p><form action=\"transit.html\" method=\"post\" name=\"form1\"> <p><label>Nom:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
"<input autocomplete=\"off\" list=\"nomf\" name=\"nom\"><datalist id=\"nomf\">"+ text_sdn +"</datalist></label></p><p><label>Prenoms:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
"<input autocomplete=\"off\" list=\"prenomf\" name=\"prenom\"><datalist id=\"prenomf\">"+ text_sdp +"</datalist></label></p><p><label>Telephone: &nbsp;&nbsp;"+
"<input name=\"tel\" type=\"number\" id=\"tel\"></label></p><p><label>Mot de pass:"+
"<input name=\"pass\" type=\"password\" id=\"pass\"></label></p>"+
"<input type=\"submit\" value=\"Envoyer\">"+
"</form><p>&nbsp;</p></body></html>";

//insertion des donnees dans la page d'accueil
fs.writeFile("registre.html",
html_Strc,
{encoding:"utf8", flag:"w"},
(err)=>{
if(err){console.log(err);}
else{console.log("Fichier Pre creé avec succès");}
});
*/}

)();

//Fin de creation de la page d'accueil dynamique par le serveur.

// pose des conditions pour l'affichage des differentes page web contenu dans  l'ordinateur du serveur vers le navigateur internet.

// debut Condition SiVrai
pg_type=(req.method==="POST")?
req.on("data",data=>{
console.log("Formulaire Recu !");

const txt_e= encodeURI(data);
const txt_d= decodeURIComponent(txt_e);
const info_p= txt_md.parse(txt_d);

(async ()=> {
await cnx_bd.connect();
var Lbd= cnx_bd.db("Bionase_LBM");
var Lpt= Lbd.collection("PATIENTS");
var pers= await Lpt.insertOne(info_p);
var pers_rtv= await Lpt.findOne(info_p);

console.log(pers_rtv);

fs.writeFile("pg_succes.html",
"Ecriture avec succes",
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
fs.readFile("./specimenMalad.html","utf8",(err, info)=>{
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
console.log("Emission du serveur avec Base de donnees connectée ! ");

}));