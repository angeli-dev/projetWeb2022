<template>
  <div id="aboutBox">
    <Header></Header>
    <p id="aboutText">
      Ce site utilise l'<a href="https://api.pims.io/">API publique de Pims</a>
      (Pointages Intelligents pour le Monde du Spectacle). <br /><br />Cette API
      est conçue pour les logiciels tiers, les éditeurs et les partenaires.
      <br /><br />Son objectif principal est de donner accès aux données de base
      d'un client Pims (c'est-à-dire les événements, les ventes et les
      opérations marketing...).
    </p>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  components: { Header, Footer },
  name: "AboutBox",
};
</script>

<style>
#aboutBox {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#aboutText {
  margin-top: 50vh;
  width: 60vw;
  margin: auto;
  text-align: center;
}

#aboutText a {
  color: white;
  text-decoration: none;
}
</style>
