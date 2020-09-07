<template>

      <div class= "copy-right">
          <p> Copyright Srikanth Arrabolu {{ date }} </p> 
        </div>
    
</template>

<script>
export default {
  name: 'copy-right',
  data(){
      return {
          date: new Date().getFullYear()
      }
  }
  
}
</script>

<style scoped lang="scss">
.copy-right {
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 0;
 }

</style>
