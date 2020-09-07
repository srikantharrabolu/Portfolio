<template>
  <div class="footer-section">
    <div class="container">
      <h1>Interested in doing a project together?</h1>
      <button class="button-wrapper" id="Email Me" ><a href = "mailto: ar.srikanth29@gmail.com" target="_top">Email Me</a></button>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-section',
  
}
</script>

<style scoped lang="scss">
.footer-section {
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 6rem;
  border-top: 1px solid #312c2c;
  border-bottom: 1px solid #312c2c;
  padding: 20px 0px 20px 0px;
 .container {
    text-align: center;
    padding-bottom: 10px;
    .button-wrapper {
            background: #00c5ff;
            border: 1px solid #00c5ff;
            color: #1a1b22;
            font-weight: bold;
            font-size: 16px;
            height: 36px;
            border-radius: 6px;
            line-height: 24px;
             a{
              text-decoration: none;
              color: #1a1b22;
            }
        }
 }
}
</style>
