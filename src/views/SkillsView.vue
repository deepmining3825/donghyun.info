<template>
    <section class="skills" id="skills">
        <h2 class="skills-title"> My Skills 
            <span class="skills-title__bar"></span>
        </h2>
        <article class="skills-skill">
            <div class="skills-subtitle">
                <img src="..\assets\java.png" alt="skills-logo">
                <h3 class="skills-subtitle__text">Java</h3>
            </div>
            <ul class="skills-content">
                <li>Experienced Spring MVC</li>
                <li>Experienced RESTful API Development</li>
                <li>Considering Secure Coding</li>
            </ul>
        </article>
        <article class="skills-skill">
            <div class="skills-subtitle">
                <img src="..\assets\javascript.png" alt="skills-logo">
                <h3 class="skills-subtitle__text">JavaScript</h3>
            </div>
            <ul class="skills-content">
                <li>Using ES6</li>
                <li>Handling DOM api with pure JS</li>
                <li>Understanding Webpack</li>
            </ul>
        </article>
        <article class="skills-skill">
            <div class="skills-subtitle">
                <img src="..\assets\vuejs.png" alt="skills-logo">
                <h3 class="skills-subtitle__text">Vue.js</h3>
            </div>
            <ul class="skills-content">
                <li>Understanding Life Cycle</li>
                <li>Implementation EC Chatbot Client using Vue.js</li>
                <li>Handling Vuex/Router</li>
            </ul>
        </article>
        <article class="skills-skill">
            <div class="skills-subtitle">
                <img src="..\assets\linux.png" alt="skills-logo">
                <h3 class="skills-subtitle__text">Server</h3>
            </div>
            <ul class="skills-content">
                <li>Handling ubuntu/centOS</li>
                <li>Understanding Failover/LoadBalancing</li>
                <li>Using Tomcat/Weblogic</li>
            </ul>
        </article>
        <article class="skills-skill">
            <div class="skills-subtitle">
                <img src="..\assets\web.png" alt="skills-logo">
                <h3 class="skills-subtitle__text">Web</h3>
            </div>
            <ul class="skills-content">
                <li>Handling HTML5/CSS3</li>
                <li>Understanding Cross Browsing</li>
                <li>Understanding Browser Rendering</li>
            </ul>
        </article>
        <article class="skills-skill">
            <div class="skills-subtitle">
                <img src="..\assets\oracle.png" alt="skills-logo">
                <h3 class="skills-subtitle__text">RDBMS</h3>
            </div>
            <ul class="skills-content">
                <li>Handling Oracle/Mysql</li>
                <li>Experienced Lay out RDBMS</li>
                <li>Considering Common SQL Query</li>
            </ul>
        </article>
    </section>

</template>

<script>
export default {

}
</script>

<style scoped>
.skills {
    padding: 60px 0;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    line-height: 1.8rem;
    font-size: inherit;
}
.skills-title {
    grid-column: 1/-1;
    margin-bottom: 15px;
    text-align: center;
    font-size: 1.8rem;
    text-shadow: 2px 2px 2px rgba(0,0,0,.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 0;
}
.skills-title__bar {
    display: inline-block;
    width: 45px;
    background-color: #cb697b;
    height: 2px;
    margin-top: 30px;
}
.skills-skill {
    grid-column: span 1;
    margin: 0 15px;
    border-bottom: 1px solid #ddd;
}
.skills-subtitle {
    text-align: center;
    font-size: 1.3rem;
    padding: 5px;
}
.skills-content {
    padding: 30px 0;
    text-align: center;
}
li {
    list-style: none;
}
h3 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
