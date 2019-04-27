<template>
    <section class="projects" id="project">
        <h2 class="projects-title"> E-Commerce Chatbot Project
            <span class="projects-title__bar"></span>
        </h2>

        <div class="projects-basic-info">
            <ul class="techs">
                <li class="techs-item">Java</li>
                <li class="techs-item">Vue.js</li>
                <li class="techs-item">ES6</li>
                <li class="techs-item">REST-api</li>
                <li class="techs-item">Layout</li>
                <li class="techs-item">Component</li>
            </ul>
        </div>

        <!-- <div class="projects-image-commerce" @mouseup="showButton" @mouseleave="hideButton">
            <img class="projects-image" src="..\assets\commerce.png" alt="">
            <div class="image-cover-commerce" style="opacity: 0;" ref="image">
                <span class="image-cover-commerce__btn">View details</span>
            </div>
        </div> -->
    </section>
</template>

<script>
export default {
    methods: {
        // showButton() {
        //     this.$refs.image.style.opacity = 1;
        // },
        // hideButton() {
        //     this.$refs.image.style.opacity = 0;
        // },
    }
}
</script>

<style scoped>
.projects {
    padding: 60px 0;
}
.projects-title {
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
.projects-title__bar {
    display: inline-block;
    width: 45px;
    background-color: #cb697b;
    height: 2px;
    margin-top: 30px;
}
.projects-basic-info .techs-item:before {
    content: "#";
    padding-right: 5px;
    color: #ccc;
}
.projects-basic-info .techs-item {
    border: 1px solid #eee;
    cursor: pointer;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 1rem;
    box-shadow: 3px 1px 10px 0 rgba(0,0,0,.1);
    background-color: #fff;
    transition: .3s;
}
.projects-basic-info .techs {
    font-weight: 700;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
}
li {
    list-style: none;
}
.projects-basic-info .techs-item:hover {
    background-color: #cadeeb;
}
.projects-image-commerce {
    position: relative;
    width: 100%;
    height: fit-content;
}
.projects-image {
    box-shadow: 3px 1px 10px 0 rgba(0,0,0,.1);
    max-width: 100%;
    height: auto;
}
.projects .image-cover-commerce {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0,0%,100%,.5);
    opacity: 0;
    z-index: 99;
    cursor: pointer;
    transition: all .3s;
    display: flex;
    justify-content: center;
    align-items: center;
}
.projects .image-cover-commerce__btn {
    background-color: #fff;
    padding: 10px 20px;
    color: #e74c3c;
    font-weight: 700;
    animation-duration: 1s;
    animation-name: more-moving;
    animation-iteration-count: infinite;
    transition: .3s;
    text-transform: uppercase;
}

</style>
