import {dossiermedicals} from "./class.js";
//afficher tous les dossier medicals
window.addEventListener("load", async()=>{ 

    let dossiermedical=new dossiermedicals();
    let dossier = await dossiermedical.afficheralldossiermedicals();
    let bodytable=document.getElementById("bodytable");
    
    dossier.data.forEach(element => {

        bodytable.innerHTML+=`
        <tr>
        <td>${element.cnie}</td>
        <td>${element.code}</td>
        <td>${element.quantite}</td>
        <td>${element.remboursement} DH</td>
        <td>${element.status}</td>
        </tr>
        ` 
    });

});