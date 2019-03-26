<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="600px">
      <v-btn small flat color="primary" slot="activator">
        <v-icon small>help</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Mediação<!--ADICIONAR TÍTULO OPCIONAL--></span>
        </v-card-title>
        <v-card-text> ADICIONAR TEXTO AQUI <!-- COLOCAR O TEXTO AQUI --></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>

</script>

<style scoped>

</style>
