// chargement des differents module utiliser pour cette page dans nodejs.
const http= require("http"), fs= require("fs"), url= require("url"), txt_md= require("querystring"), {MongoClient, ObjectId}= require("mongodb");
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
var m_cns= cnx_bd.db("Bionase_LBM");
var fam= m_cns.collection("PATIENTS");

// recherche et recuperation des informations depuis la base donnee
var Rchr_nf= await fam.findOneAndReplace({_id:new ObjectId("683d7e3617a7b6315bdfe635")},{"nom":"kouadio","prenoms":"Yao Athanase","télephone":0708884454});
console.log(Rchr_nf);
var textn=
"nom:kouakou"+"<br>"+
"prenoms:gilles"+"<br>"+
"télephone:0708884454"

var html_Strc="<html><"+"head><"+"meta charset"+"=\"utf-8\">"+"</head"+"><h3>Informations modifiées avec succès de:</h3>"+ textn+ "</html>"
//insertion des donnees dans la page d'accueil
fs.writeFile("registre2.html",
html_Strc,
{encoding:"utf8", flag:"w"},
(err)=>{
if(err){console.log(err);}
else{console.log("Fichier Pre creé avec succès");}
});

})();

});
// fermeture du corps du serveur

//finalisation du serveur et du signal du OK
serveur.listen(3004,"localhost",
(async ()=> {await cnx_bd.connect();
console.log("Emission serveur activee");
console.log("Base de donnee connectee");
}));