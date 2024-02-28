<template>
  <div class="resume">
    <div class="resume-file">
        <button class="button-wrapper">
          <!-- <a href="https://docs.google.com/document/d/1Ea2fyOTOv8woEIq2yMzIs7pSGFvli9iJ/export?format=pdf" download>Download Resume</a> -->
          <a href="https://flowcv.com/resume/rvlu7ng8pp">Download Resume</a>
        </button>
    </div>
    <div class="resume-projects">
      
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'resume',
  
}
</script>

<style scoped lang="scss">
.resume {
  width: 75%;
  margin: auto;
  .resume-file {
    text-align: right;
  }
  .button-wrapper {
            background: #00c5ff;
            border: 1px solid #00c5ff;
            color: #1a1b22;
            font-weight: bold;
            font-size: 16px;
            height: 36px;
            border-radius: 6px;
            line-height: 24px;
            margin-left: auto;
            a{
              text-decoration: none;
              color: #1a1b22;
            }
        }
}
</style>
