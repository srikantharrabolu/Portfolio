<template>
  <div class="image-content-section">
      <img src="../assets/background2.jpg"/>
    <div class="content">
        <div class="content-section">
            <h1>Hello, my name is Srikanth. I am a Front End Developer living in Houston, Texas.</h1>           
            <div class="dropdown">
                <button class="button-wrapper" id="view-profile" @click="viewProfile">View Profile</button>               
                <div class="button-dropdown" v-if="viewDropDown">
                    <router-link to='/about'><p>ABOUT</p></router-link>
                    <router-link to='/resume'><p>RESUME</p></router-link>
                    <router-link to='/projects'><p>PROJECTS</p></router-link>
                </div>
            </div>
        </div>       
    </div>
  </div>
</template>

<script>
export default {
  name: 'image-content-section',
  components: {
  },
  data (){
      return {
          viewDropDown: false
      }
  },
  methods: {
      viewProfile: function() {
          this.viewDropDown= !this.viewDropDown
      }
  }
  
}
</script>

<style scoped lang="scss">
.image-content-section {
    img {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
    }
    .content{
        width: 60%;
        margin: auto;
        position: absolute;
        top: 30%;
        .button-wrapper {
            background: #00c5ff;
            border: 1px solid #00c5ff;
            color: #1a1b22;
            font-weight: bold;
            font-size: 16px;
            height: 36px;
            border-radius: 6px;
            line-height: 24px;
        }
        .button-dropdown {
            border: 1px solid #20222a;
            width: 110px;
            background: #20222a;
            border-radius: 4px;
            margin-top: 0.3rem;
            text-align: center;
            a {
                color: #dadada;
                text-decoration: none;
                cursor: pointer;
            }

        }
        .content-section {
            width: 70%;
            margin: auto;
        }
    }
    h4 { 
        font-family: Arial, Helvetica, sans-serif;

    }
}
</style>
