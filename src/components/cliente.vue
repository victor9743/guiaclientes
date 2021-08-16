<template>

    <div :class="{'cliente-premium' : isPremium}">
        <!-- Interpolação {{ }} -->
        <h2>Cliente {{ cliente.nome }}</h2>
        <hr>
        <p>Email: {{ cliente.email |processarEmail }}</p>
        <p>Idade : {{ cliente.idade }}</p>
        
        <button @click="mudarCor">Mudar Cor</button>
        <button @click="emitirEvento">Remover</button>
        <h4>Id Especial: {{ idEspecial }}</h4>

        <!--  <p v-show="showIdade === true">Idade : {{ cliente.idade_valor }}</p> -->
        <!--  <p v-else-if="showIdade === false">Idade : {{ cliente.idade_valor }}</p> -->
      

        <!--
        <input type="text" :value="nome"><br>
        <input type="number" :value="numero"><br>
        <input type="text" :value="email"><br>
        <input type="numbe" :value="idade">

        <h2>Cliente {{ nome }}</h2>

        <input type="text" v-model="nome"><br>
        <input type="number" v-model="numero"><br>-->

  

        
        
    </div>
    

</template>

<script>



export default {
    data(){
        return{
            isPremium: false
        }
    },
    props:{
        cliente: Object,
        //showIdade: Boolean,
        testeValor: Boolean

    },
    methods: {
        mudarCor: function(){
            this.isPremium = !this.isPremium;
        },
        emitirEvento: function(){
                this.$emit("remover",{componente : this.cliente.id});
        }
    },
    filters:{
        processarEmail: function(value){
            return value.toUpperCase();
        }
    },
    computed:{
        idEspecial: function(){
            return (this.cliente.email + this.cliente.nome + this.cliente.id).toUpperCase();
        }
    }
}
</script>

<style scoped>

    .cliente-premium{
        background-color: yellow;
        color:black;
    }

</style>