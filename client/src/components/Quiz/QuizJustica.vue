<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
    <v-btn class="indigo ativador" primary dark slot="activator">Justiça: Locais e Informações</v-btn>
    <v-card>
      <v-toolbar dark class="indigo">
        <v-btn icon @click.native="dialog = false" dark>
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Perguntas sobre Justiça</v-toolbar-title>
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
        É possível mediar seus conflitos fora do Judiciário?
        <tip-media></tip-media>
      </v-subheader>
      <v-radio-group v-model="mediaFORA" column>
        <v-radio label="Sim" value="S"></v-radio>
        <v-radio label="Não" value="N"></v-radio>
        <v-radio label="Talvez" value="T"></v-radio>
      </v-radio-group>
      <v-divider></v-divider>

      <v-subheader class="subheader">
        Qual o seu motivo para buscar auxílio da Justiça?
        <tip-motivo></tip-motivo>
      </v-subheader>
      <v-radio-group v-model="motivoInicial" column>
        <v-radio label="Direito do Consumidor" value="motDIRCONSUMIDOR"></v-radio>
        <v-radio label="Furto/Roubo" value="motFURTOROUBO"></v-radio>
        <v-radio label="Sou Microempreendedor" value="motEMPREENDE"></v-radio>
        <v-radio label="Execução de Título Extra Judicial" value="motEXTITULOEXTRA"></v-radio>
        <v-radio label="Acidente de Trânsito" value="motACIDENTETRANSITO"></v-radio>
        <v-radio label="Causas Cíveis Gerais" value="motCIVELGERAL"></v-radio>
        <v-radio label="Sofreu algum tipo de Agressão" value="motAGRESSAOOUTROS"></v-radio>
        <v-radio label="Sofreu Agressão por Servidor Público" value="motAGRESSAOSERVPUBLICO"></v-radio>
      </v-radio-group>      
      
      <div v-if="motivoInicial == 'motFURTOROUBO'">
          <v-divider></v-divider>
          <v-subheader class="subheader">Selecione a categoria de bem furtado/roubado?</v-subheader>
          <v-radio-group v-model="motivoEspec" column>
            <v-radio label="Furto/Roubo de Automóveis" value="motFURTOROUBOAUTO"></v-radio>
            <v-radio label="Furto/Roubo de outros tipos de bens" value="motFURTOROUBOOUTROS"></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <div class="mt-4 pt-4">
            <v-btn class="indigo" dark :to="{ name: 'Justica', query: {
                age: age,
                mediaFORA: mediaFORA,
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
          <v-btn class="indigo" dark :to="{ name: 'Justica', query: {
              age: age,
              mediaFORA: mediaFORA,
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
import TipMedia from '@/components/Tips/TipJusticaMedia'
import TipMotivo from '@/components/Tips/TipJusticaMotivo'
export default {
  components: {
    TipMedia,
    TipMotivo
  },
  data () {
    return {
      dialog: false,
      age: '',
      mediaFORA: '',
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
