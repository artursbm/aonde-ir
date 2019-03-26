<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
    <v-btn class="indigo ativador" primary dark slot="activator">Locais para Informações Gerais</v-btn>
    <v-card>
      <v-toolbar dark class="indigo">
        <v-btn icon @click.native="dialog = false" dark>
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Perguntas sobre Informações Gerais</v-toolbar-title>
      </v-toolbar>
      <v-subheader class="subheader">Selecione sua idade </v-subheader>
      <v-radio-group v-model="age" column>
        <v-radio label="Criança (0 - 17 anos)" value="criança"></v-radio>
        <v-radio label="Jovem (18-24 anos)" value="jovem"></v-radio>
        <v-radio label="Adulto (25 - 59 anos)" value="adulto"></v-radio>
        <v-radio label="Idoso (60+ anos)" value="idoso"></v-radio>
      </v-radio-group>
      <v-divider></v-divider>
      
      <v-subheader class="subheader">
        Sobre qual assunto você precisa de informações 
        <tip-assunto></tip-assunto>
      </v-subheader>
      <v-radio-group v-model="motivoInicial" column>
        <v-radio label="Formas de inserção social (busca de emprego)" value="motEMPREGO"></v-radio>
        <v-radio label="Apoio a pessoas com deficiência" value="motAPOIO"></v-radio>
        <v-radio label="Extravio de documentos" value="motEXTRAVIO"></v-radio>
        <v-radio label="Pessoas desaparecidas" value="motDESAP"></v-radio>
        <v-radio label="Casos de homicídio" value="motHOMICIDIO"></v-radio>
        <v-radio label="Saúde" value="motSAUDE"></v-radio>
        <v-radio label="Abuso de autoridade" value="motABUSOAUTORIDADE"></v-radio>
        <v-radio label="Agressão" value="motAGRESSAO"></v-radio>
      </v-radio-group>
      
      <div v-if="motivoInicial == 'motEMPREGO'">
        <v-divider></v-divider>
        <v-subheader class="subheader">Qual a categoria de emprego você procura? </v-subheader>
        <v-radio-group v-model="motivoEspec" column>
          <v-radio label="Vagas de emprego para ex-detentos" value="motEMPREGOexdetento"></v-radio>
          <v-radio label="Vagas de emprego para menores infratores" value="motEMPREGOmenorinfrator"></v-radio>
          <v-radio label="Vagas de emprego em geral" value="motEMPREGOoutros"></v-radio>
        </v-radio-group>
        <v-divider></v-divider>
        <div class="mt-4 pt-4">
          <v-btn class="indigo" dark :to="{ name: 'InfoGeral', query: {
              age: age,
              motivoInicial: motivoEspec
            }
          } ">
              Procurar
          </v-btn>
        </div>
      </div>

      <div v-else-if="motivoInicial == 'motEXTRAVIO'">
        <v-divider></v-divider>
        <v-subheader class="subheader">Qual tipo de documento foi extraviado? </v-subheader>
        <v-radio-group v-model="motivoEspec" column>
          <v-radio label="Documentos para inserção em programas sociais" value="motEXTRAVIOprog_social"></v-radio>
          <v-radio label="Documentos para busca de emprego" value="motEXTRAVIOemprego"></v-radio>
        </v-radio-group>
        <v-divider></v-divider>
        <div class="mt-4 pt-4">
          <v-btn class="indigo" dark :to="{ name: 'InfoGeral', query: {
              age: age,
              motivoInicial: motivoEspec
            }
          } ">
              Procurar
          </v-btn>
        </div>
      </div>

      <div v-else-if="motivoInicial == 'motAGRESSAO'">
        <v-divider></v-divider>
        <v-subheader class="subheader">Que tipo de agressão você sofreu?</v-subheader>
        <v-radio-group v-model="motivoEspec" column>
          <v-radio label="Agressão física" value="motAGRESSAOfisica"></v-radio>
          <v-radio label="Agressão sexual" value="motAGRESSAOsexual"></v-radio>
          <v-radio label="Agressão por meio cibernético" value="motAGRESSAOciber"></v-radio>
          <v-radio label="Agressão ao patrimônio" value="motAGRESSAOpatrimonial"></v-radio>
          <v-radio label="Agressão moral" value="motAGRESSAOmoral"></v-radio>
        </v-radio-group>
        <v-divider></v-divider>
        <div class="mt-4 pt-4">
          <v-btn class="indigo" dark :to="{ name: 'InfoGeral', query: {
              age: age,
              motivoInicial: motivoEspec
            }
          } ">
              Procurar
          </v-btn>
        </div>
      </div>

      <div v-else>
        <v-divider></v-divider>
        <div class="mt-4 pt-4">
          <v-btn class="indigo" dark :to="{ name: 'InfoGeral', query: {
              age: age,
              motivoInicial: motivoInicial
            }
          } ">
              Procurar
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import TipAssunto from '@/components/Tips/TipInfoAssunto'
export default {
  components: {
    TipAssunto
  },
  data () {
    return {
      dialog: false,
      age: '',
      motivoInicial: '',
      motivoEspec: ''
    }
  }
}
</script>

<style scoped>

.subheader {
  font-size: 1.25em;
}

.ativador {
  width: 100%;
  max-width: 300px;
  position: relative;
}

@media (max-width: 600px) {
  .ativador {
    font-size: 0.6em;
  }
}
</style>
