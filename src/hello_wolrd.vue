<template>
        <div id="hello">
                <teste msg="Welcome to Your Vue.js App"/>
        </div>
      
</template>
<script>
 
import teste from './components/HelloWorld.vue'
export default {
        name: 'hello',
        components:{
                teste
        }
}
</script>