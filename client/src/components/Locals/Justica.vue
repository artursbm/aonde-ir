<template>
  <panel title="Justiça">
    <div title="subheader">
      <h5>Estes são os locais para buscar auxílio da Justiça</h5>
    </div>
    <div v-for="local in locals" :key="local.idLOCAL">
      <v-layout>
        <v-flex xs10 offset-xs1 class="mt-2 mb-2">
          <div v-if="local.localImage != ''" class="imgJusticas">
            <img class="local-image" :src="local.localImage" />
          </div>
          <div class="nomeJusticas">
            <span id="nameStyle">{{ local.nome }}</span>
            <br> 
            <span id="nameStyle">Endereço: </span>{{ local.endereco }}
            <br> 
            <span id="nameStyle">Telefone: </span>{{ local.telefones }}
          </div>
          <div class="descJusticas">
            <textarea readonly v-model="local.descricao"></textarea>
          </div>
        </v-flex>
      </v-layout>
    </div>

  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import QuizService from '@/services/QuizService'
export default {
  // data é tudo que vai ser renderizado na página
  data () {
    return {
      locals: {}
    }
  },
  components: {
    Panel
  },
  // adiciono um watcher para cuidar do que está na URL, assim
  // eu posso pegar os valores escolhidos no questionário, e colocar em values
  // Esse values será eviado para o back-end, será parseado lá, e retornará:
  // todos os locais, caso o questionário fique vazio, ou retorna os especificos
  // das respostas!
  watch: {
    '$route.query': {
      immediate: true,
      async handler (values) {
        this.locals = (await QuizService.indexJustica(values)).data
      }
    }
  }
  // async mounted () {
  //   const age = this.$store.state.route.query.age
  //   const type = this.$store.state.route.query.type
  //   const reason = this.$store.state.route.query.reason
  //   this.locals = (await QuizService.indexAbrigo(age, type, reason)).data
  // }
}
</script>

<style scoped>

#nameStyle {
  font-weight: bold;  
}

.nomeJusticas {
  font-family: Arial, Helvetica, sans-serif;
}

textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  height: 150px;
  overflow: auto;
  padding: 10px;
  resize: none;
}

.local-image {
  width: 250px;
  height: 250px;
}
</style>
