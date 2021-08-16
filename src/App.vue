<template>
  <div id="app">
  <div class="buttons">
    <button class="button is-primary">Primary</button>
    <button class="button is-link">Link</button>
  </div>
     
     <p>Nome</p>
     <small id="nomeErro" v-show="erro">O nome e´inválido, tente novamente</small><br>
     <input type="text" v-model="nomeField">

     <p>Email</p>
     <input type="text" v-model="emailField">

     <p>Idade</p>
     <input type="number" v-model="idadeField">
     
     <button @click="cadastrarUsuario">Cadastrar</button>
     
     
     
     
     
      <h1>Guia Clientes</h1>

<!--     <cliente :cliente="cliente_valor" :showIdade="false"/>-->



      <div v-for="(cliente, contador) in orderClientes" :key="cliente.id">

        <h2>{{contador +1 }}</h2>
        <cliente :cliente="cliente" @remover="deletarUsuario($event)"/>
        <hr>
      </div>
        
      
      <hr>

    
    

  </div>

  
</template>

<script>

// importação do template

import _ from 'lodash';
import cliente from './components/cliente.vue'
export default {
  name: 'App',

  data(){
    return{
      erro: "",
      nomeField: "",
      emailField: "",
      idadeField: null, 
      lista_clientes:[],
    }
  },

  components: {
    cliente
  
  },

  methods: {
    cadastrarUsuario: function(){

      if(this.nomeField == "" || this.nomeField == " " || this.nomeField < 3){
        this.erro = true;
      }else{

          this.lista_clientes.push(
            {nome :  this.nomeField , email: this.emailField, idade: this.idadeField, id: Date.now() }
          );
          this.nomeField = "",
          this.emailField = "",
          this.idadeField = "";

      }

   

      
    },
    deletarUsuario: function($event){
      console.log($event.componente);

      var id = $event.componente;

      var novoarray = this.lista_clientes.filter(cliente => cliente.id != id)

      this.lista_clientes = novoarray;

    }
  },
  computed: {
    orderClientes: function(){
      return _.orderBy(this.lista_clientes,['nome'],['asc'] )
    }
  }

}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

#nomeErro{
  color: red;

}
</style>

  