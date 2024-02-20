
// Attend que le DOM soit entièrement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function() {    
// Ajoute un écouteur d'événements au clic sur le bouton de soumission du formulaire
    document.getElementById('submitBtn').addEventListener('click',function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre

        let nom = document.getElementById('NOM').value;
        let prenom = document.getElementById('Prénom').value;
        let age = document.getElementById('age').value;
        let gender = document.querySelector('input[name="gender"]:checked');
        let email = document.getElementById('email').value;
        let adresse = document.getElementById('adresse_postale').value;
        let city = document.getElementById('city').value;
        let codePostal = document.getElementById('code_postal').value;
        let metier = document.querySelectorAll('input[name="metier"]:checked');
        let nationalite = document.getElementById('nationalite').value;
        let dateNaissance = document.getElementById('date_de_naissance').value;
        let paysNaissance = document.getElementById('pays_de_naissance').value;
        let numSecu = document.getElementById('numero_de_securite_sociale').value;
        let numPassport = document.getElementById('passeport').value;
        let dateDelivrance = document.getElementById('date_de_delivrance').value;
        let dateValidite = document.getElementById('date_de_validite_passeport').value;

        // Validation des champs ici...

        // validation pour le nom
        if (nom === '') {
            alert('Veuillez entrer votre nom.');
            return false;
        }

        // Validation du code postal
        if (!/^\d{5}$/.test(codePostal)) {
            alert('Le code postal doit contenir exactement 5 chiffres.');
            return false;
        }

        // Validation de l'adresse email
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Adresse email non valide.');
            return false;
        }

        // Validation du numéro de sécurité sociale
        if (!/^\d{15}$/.test(numSecu)) {
            alert('Le numéro de sécurité sociale doit contenir exactement 15 chiffres.');
            return false;
        }

        // Validation du numéro de passport
        if (!/^\d{7}[A-Za-z]{2}$/.test(numPassport)) {
            alert('Le numéro de passeport doit contenir 7 chiffres suivis de 2 lettres.');
            return false;
        }

        // Validation de l'âge
        if (!/^\d{2}$/.test(age)) {
            alert('L\'âge doit être composé de deux chiffres.');
            return false;
        }

        // Si toutes les validations sont passées, vous pouvez soumettre le formulaire
        alert('Formulaire soumis avec succès !');

        
    });
});
