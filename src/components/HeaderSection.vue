<template>
  <div class="header-section">
    <div class="container">
        <div class="left-section transition-link">
            <h3 class="shortName">SA</h3>
            <h3 class="fullName">SRIKANTH ARRABOLU</h3>
        </div>
        <div class="right-section">
            <router-link to='/'><h3>Home</h3></router-link>
            <router-link to='/about'><h3>About</h3></router-link>
            <router-link to='/projects'><h3>Projects</h3></router-link>
            <router-link to='/resume'><h3>Resume</h3></router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-section',
  
}
</script>

<style scoped lang="scss">
.header-section {
    width: 75%;
    margin: auto;
    margin-top: 2rem;
 .container {
     display: flex;
     .left-section {
         .shortName{
            width: 63px;
            border: 4px solid #00c5ff;
            height: 63px;
            justify-content: center;
            display: flex;
            align-items: center;    
         }
        .fullName{
            display: none;
        }
        transform:rotate(0deg);
        transition: transform .4s ease-in-out;
        flex-shrink: 0;
        position: relative; 
          &:hover {
            .fullName{
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 1.5rem;
                padding-left: 1rem;
                margin-left: -1rem;
            }
            .shortName {
                display: none;
            }
            
          }
     }
     .right-section {
         display: flex;
         margin-left: auto;
         line-height: 4;
         h3 {
             padding-right: 20px;
         }
         a {
             color: #dadada;
             text-decoration: none;
             &:hover {
                 color: #00c5ff;
             }
         }
         .router-link-exact-active {
             color: #00c5ff;
         }
     }
 }
    
}
</style>
