<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>
      <panel title="Categorias">
        <div>
          <!-- colocar isso no div para obrigar a fazer login antes de responder quiz
           v-if="$store.state.isUserLoggedIn" -->

          <h5>Bem vindo. Selecione a categoria procurada:</h5>
          <v-layout column justify-center>
            <abrigo></abrigo>
            <justica></justica>
            <info-geral></info-geral>
          </v-layout>
        </div>
        <!-- redireciona para a tela de login - POSTERIORMENTE
          <div v-else-if="!$store.state.isUserLoggedIn">
            <h5>Por favor, faça login para começar.</h5>
            <v-btn dark class="indigo btn-login" :to="{name: 'Login'}">Clique aqui para fazer login</v-btn>
          </div> 
        -->

      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
// import QuizService from '@/services/QuizService'
import Panel from '@/components/Panel'
import Abrigo from '@/components/Quiz/QuizAbrigo'
import Justica from '@/components/Quiz/QuizJustica'
import InfoGeral from '@/components/Quiz/QuizInfoGeral'

export default {
  // data () {
  //   // aqui estará os vetores de respostas de cada opção selecionada para o dialog
  // },
  components: {
    Panel,
    Abrigo,
    Justica,
    InfoGeral
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component (Login.vue) only -->
<style scoped>
.btn-login {
  width: 100%;
  max-width: 300px;
  position: relative;
}
@media (max-width: 600px) {
  .btn-login {
    font-size: 0.7em;
  }
}
</style>