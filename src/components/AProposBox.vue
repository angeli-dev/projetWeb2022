<template>
  <div id="AProposBox">
    <Header></Header>
      <p>
        Nous utilisons l'API publique de Pims (Pointages Intelligents pour le Monde du Spectacle). Cette API est conçue pour les logiciels tiers, les éditeurs et les partenaires. Son objectif principal est de donner accès aux données de base d'un client Pims (c'est-à-dire les événements, les ventes et les opérations marketing...).
      </p>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  components: { Header, Footer },
  name: "AProposBox",
};
</script>

<style></style>
