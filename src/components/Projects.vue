<template>
  <div class="projects">
       <h1> Recent Projects: Samples of some of my work from the past clients. </h1>
       <h3> Latest Projects </h3>
       <div class="ema">
          <img src="../assets/Log_in_Email.png">
          <img src="../assets/EMA_fuel_lines.png">
          <img src="../assets/Fuel_Line_1.png">
       </div>
      
       <h4> INTERACTION DESIGN / FRONT END DEVELOPMENT </h4>
       <h3> EMA-Ember Mobile Application </h3>

       <div class="onpoint-dev">
          <img src="../assets/map-view.png">
          <img src="../assets/assets.png">
          <img src="../assets/asset-icon.png">
          <img src="../assets/utilities.png">
       </div>
      
       <h4> FRONT END DEVELOPMENT </h4>
       <h3> Onpoint By Koch Engineering solutions. </h3>
  </div>
</template>

<script>
export default {
  name: 'projects',
  
}
</script>

<style scoped lang="scss">
.projects {
  width: 75%;
  margin: auto;
  .ema {
    display: flex;
    
    img{
      height: 500px;
      padding-right: 10px;
    }
  }
  .onpoint-dev {
    img{
      height: 320px;
      padding-right: 20px;
      padding-bottom: 15px;
    }
  }
}
</style>
