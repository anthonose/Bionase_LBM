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

fs.readFile("malad.html,"utf8",(err, info)=>{
var c_info="";
c_info= (err)?console.log(err):rep.end(info);})


});
// fermeture du corps du serveur

//finalisation du serveur et du signal du OK
serveur.listen(3004,"localhost",()=> console.log("Emission serveur activee"));
