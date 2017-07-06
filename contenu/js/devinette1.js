/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme



var essai =6;

while ((essai!== 0) && (nombre !== solution))  {
	
	var nombre = Number(prompt("tentez de trouver le bon nombre entre 1 et 100, attention vous avez que "+ +essai + " possibilités"));
	   
	      if (nombre < solution) {
		  
		     alert(+nombre +" "+"le chiffre donné est trop petit, recommencez !");
			 console.log(+nombre +" "+"le chiffre donné est trop petit, recommencez !");
		  
	           } else if (nombre > solution) {
		  
		  	      alert(+nombre +" "+"le chiffre donné est trop grand, recommencez !");
				  console.log(+nombre +" "+"le chiffre donné est trop grand, recommencez !");
			 
	               }    
	essai--;
	
    }   
	
	if  (nombre === solution)  {
		  
		   alert(+nombre +" "+"Bravo vous avez gagné !, vous avez trouvé en " + (6-(+essai)) + " essais");
		   console.log(+nombre +" "+"Bravo vous avez gagné !, vous avez trouvé en " + (6-(+essai)) + " essais");
	
	        } else if ((essai=== 0) && (nombre !== solution)) {
					  
              alert(+nombre +" "+"dommage vous avez perdu!, la solution était : " +solution);
			  console.log(+nombre +" "+"dommage vous avez perdu!, la solution était : " +solution);
	
			  }
	  
   
	  
	  

	  
	  

	
	