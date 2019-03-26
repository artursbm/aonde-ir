<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
    <v-btn class="indigo ativador" primary dark slot="activator">Abrigo: Locais e Informações</v-btn>
    <v-card>
      <v-toolbar dark class="indigo">
        <v-btn icon @click.native="dialog = false" dark>
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Perguntas sobre Abrigos</v-toolbar-title>
      </v-toolbar>
      <v-subheader class="subheader">Selecione sua idade:*</v-subheader>
      <v-radio-group v-model="age" column>
        <v-radio label="Criança (0 - 17 anos)" value="criança"></v-radio>
        <v-radio label="Jovem (18-24 anos)" value="jovem"></v-radio>
        <v-radio label="Adulto (25 - 59 anos)" value="adulto"></v-radio>
        <v-radio label="Idoso (60+ anos)" value="idoso"></v-radio>
      </v-radio-group>
      <v-divider></v-divider>

      <v-subheader class="subheader">
        Qual tipo de Abrigo você necessita? (Período de permanência)* 
        <tip-periodo></tip-periodo>
      </v-subheader>
      <v-radio-group v-model="type" column>
        <v-radio label="Temporário" value="periodoTEMPORARIO"></v-radio>
        <v-radio label="Permanente" value="periodoPERMANENTE"></v-radio>
      </v-radio-group>
      <v-divider></v-divider>

      <v-subheader class="subheader">Por que você precisa de Abrigo?*
        <tip-motivo></tip-motivo>
      </v-subheader>
      <v-radio-group v-model="reason" column>
        <v-radio label="Risco de Violência" value="motivoVIOLENCIA"></v-radio>
        <v-radio label="Situação de Rua" value="motivoRUA"></v-radio>
        <v-radio label="Situação de Risco Geológico" value="motivoRISGEO"></v-radio>
      </v-radio-group>
      <v-divider></v-divider>

      <div class="mt-4 pt-4">
        <v-btn class="indigo" dark :to="{ name: 'Abrigo', query: {
            age: age,
            type: type,
            reason: reason
          }
        }">
            Procurar
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import TipPeriodo from '@/components/Tips/TipAbrigoPeriodo'
import TipMotivo from '@/components/Tips/TipAbrigoMotivo'
export default {
  components: {
    TipPeriodo,
    TipMotivo
  },
  data () {
    return {
      dialog: false,
      age: '',
      type: '',
      reason: ''
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
