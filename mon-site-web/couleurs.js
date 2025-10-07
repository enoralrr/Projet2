function changerCouleur() {
      const couleurs = ["red", "blue", "green", "purple", "orange"];
      const alea = Math.floor(Math.random() * couleurs.length);
      document.body.style.backgroundColor = couleurs[alea];
    }