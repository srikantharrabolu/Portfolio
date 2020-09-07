<template>
  <div class="resume">
    <div class="resume-file">
        <button class="button-wrapper">
          <a href="../assets/Latest_Resume.docx" download="Latest_Resume.docx">Download Resume</a>
        </button>
    </div>
    <div class="resume-projects">
      <!-- •	Designing the front-end applications, user interactive (UI) web pages using web technologies like HTML5, Bootstrap Vue and SASS, Vue JS. 
      •	Development of code using JSP code, HTML, CSS, TypeScript libraries such as Vue.js, , Prototype plus relevant coding standards
      •	Working multiple components for different course element players and quiz question players using Vue.js and Vuex 
      •	Developed front end UI using HTML5, CSS3, SCSS, TypeScript, Vue.js, AJAX and JSON.
      •	Working in Vue JS components, forms, events, keys Vue-router, and Vue-X concepts and modules and popup modals.
      •	Designing dynamic and browser compatible pages using HTML5, CSS3, TypeScript and Vue.js and .Net.
      •	Designing CSS-based page layouts that are cross-browser compatible and standards-compliant.
      •	Responsible for design and development of the web pages from mock- ups.
      •	Designing and developed creative intuitive user interfaces that address business and end-user needs, while considering the technical, physical, and temporal constraints of the users. Using Bootstrap Vue library to quickly build project UI.
      •	Extensively used SASS (Syntactically awesome style sheets) while styling with CSS3. 
      •	Working on responsive design and developed a single responsive website that could be served to desktop, Tablets and mobile users using Vue JS. 
      •	working with RESTful Web Services and implementing RESTful API's and SOAP protocols. 
      •	Working with JSON web tokens for authentication and authorization security configurations using Node.js 
      •	Working with high charts for Reports data to display labels for unit of measurement. 
      •	Working with unit testing of JavaScript applications using Jest framework. -->

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
