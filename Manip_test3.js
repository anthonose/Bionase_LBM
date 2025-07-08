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

(async ()=> {
await cnx_bd.connect();
var Lbd= cnx_bd.db("Bionase_LBM");
var Lpt= Lbd.collection("PATIENTS");

// recherche et recuperation des informations depuis la base donnee
var rch_Mld= await Lpt.find({}).toArray();
var text= "";

for( let pers of  rch_Mld){
text += Object.values(pers)[1]+ "<br>";
}
    // Lire le fichier
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {console.error(err);return;}
      // Manipuler la donnée
      
      const insertion = data.replace('<h1>Bienvenue sur mon site statique!</h1>', '<h1>'+ text +'</h1>');

      fs.writeFile("index.html",
insertion,
{encoding:"utf8", flag:"w"},
(err)=>{
if(err){console.log(err);}
else{console.log("ajoute avec succes");}});

    
    });

fs.readFile("index.html","utf8",(err, info)=>{
var c_info="";
c_info= (err)?console.log(err):rep.end(info);})


}

)();


});
// fermeture du corps du serveur

//finalisation du serveur et du signal du OK
serveur.listen(3004,"localhost",
(async ()=> {await cnx_bd.connect();
console.log("Emission du serveur avec Base de donnees connectée ! ");

}));