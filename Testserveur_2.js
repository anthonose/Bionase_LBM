const http= require("http"), fs= require("fs"), url= require("url"), txt_md= require("querystring"), {MongoClient}= require("mongodb"), path = require('path');

const serveur = http.createServer((req, rep) => {
  // Déterminer le chemin du fichier demandé
  var pg_adr = '.' + req.url;
  if (pg_adr === './') { pg_adr = './index.html'; }// Par défaut, afficher index.html

  // Déterminer le type de contenu
  const xson= String(path.extname(pg_adr)).toLowerCase();
  const c_typ = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  };
  const Cnu = c_typ[xson] || 'application/octet-stream';

  // Lire le fichier
  fs.readFile(pg_adr, (err, info) => {
    if (err) { console.log(err);} 
    else {// Succès, envoyer le contenu
      rep.setHeader('Content-Type',Cnu);
      rep.end(info, 'utf-8');}
    
  });
});

serveur.listen(3004, "localhost",() => { console.log(`Emission serveur`);
});