<template>
  <v-toolbar fixed class="indigo" dark elevation-5>
    <v-toolbar-title class="mr-4 ml-0">
      <router-link :to="{name: 'Hello'}" tag="span">
        <div class="logo">
          <img alt="AondeIr" class="logoImg" src="../assets/LogoApp.png"/>
          <span class="logoText">Aonde Ir</span>
        </div>          
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <!-- CONDICIONAL PARA IMPEDIR USUÁRIO DE USAR O QUIZ SEM ESTAR LOGADO: DESATIVADO TEMPORARIAMENTE.
         v-if="$store.state.isUserLoggedIn" -->
      <v-btn flat dark :to="{name: 'Quiz'}">Iniciar Quiz</v-btn>
    </v-toolbar-items>
    <!-- v-spacer joga os itens abaixo dele para o canto direito da toolbar -->

<!-- TIRAR ESSE COMENTÁRIO PARA HABILITAR BOTÕES DE LOGIN E REGISTER (E LOGOUT)

    <v-spacer></v-spacer>
    <v-toolbar-items> -->
      <!-- router-link é um modo de o Vue olhar pro diretório router, e encontrar para onde o atributo to="register" vai -->
      <!-- vou usar o v-btn to="" pro estilo se manter -->
    
<!-- TIRAR ESSE COMENTÁRIO PARA HABILITAR BOTÕES DE LOGIN E REGISTER (E LOGOUT)

         <v-btn flat dark :to="{name: 'Login'}" v-if="!$store.state.isUserLoggedIn">Login</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn flat dark :to="{name: 'Register'}" v-if="!$store.state.isUserLoggedIn">Registrar</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn flat dark @click="logout" v-if="$store.state.isUserLoggedIn">Log Out</v-btn>
    </v-toolbar-items>
 
 -->

  </v-toolbar>
</template>

<script>
export default {
  // methods: {
  //   logout () {
  //     this.$store.dispatch('setToken', null)
  //     this.$store.dispatch('setUser', null)
  //     this.$router.push({
  //       name: 'Hello'
  //     })
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  cursor: pointer;
}

.logoImg {
  height: 64px;
  width: 64px;
  position: relative;
  margin-top: 0.55em;
}

.logoText {
  font-size: 1.5em;
  position: relative;
}

</style>
