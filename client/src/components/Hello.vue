<template>
  <div class="hello" >
    <div>
      <h2>{{ msg }}</h2>
      <h4>{{ msg4 }}</h4>
    </div>
    <br><br>
    <h3><a href="https://www.observalei.net.br/">{{ msg6 }}</a>{{ msg7 }}</h3>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Bem vindo ao web app Aonde Ir!',
      msg4: 'Clique em INICIAR QUIZ para saber Aonde Ir',
      msg6: 'Clique aqui',
      msg7: ' para conhecer o Observatório para a Qualidade da Lei da UFMG'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  font-size: 1.5rem;
  font-weight: normal;
}

h3 {
  font-size: 1rem;
  font-weight: normal;
}

h2 {
  font-size: 2rem;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
