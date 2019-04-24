<template>
    <div>
        <div id="about">
            <div id="about_wrap">
                <!-- <article id="profile">profile</article> -->
                <article id="intro">
                    <h1 id="intro_title">
                        Dong-Hyun
                        <span id="intro_title_tag">@deepmining3825</span>
                    </h1>
                    <div id="intro_content">
                        <p id="intro_content_text">
                            I like a development and would like to learn deeply.
                        </p>

                        <div id="contact_github">
                            <a id="contact_github" href="https://github.com/deepmining3825" target="_blank" rel="noopener noreferrer">
                                <img src="..\assets\github.png" alt=""><span id="contact_address">github.com/deepmining3825</span>
                            </a>
                        </div>
                        <div id="contact_email">
                            <a id="contact_email" href="mailto:ekzm3825@gmail.com">
                                <img src="..\assets\email.png" alt=""><span id="contact_address">ekzm3825@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div id="wrap">
            <skills-view></skills-view>
            <project-view></project-view>
            <activity-view></activity-view>
        </div>
    
    </div>
    
</template>

<script>
import SkillsView from './SkillsView.vue';
import ProjectView from './ProjectView.vue';
import ActivityView from './ActivityView.vue';

export default {
    components: {
        SkillsView,
        ProjectView,
        ActivityView,
    }
}
</script>

<style scoped>
div#wrap {
    max-width: 1080px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
div#about {
    padding-bottom: 60px;
    background-color: #f8f8f8;
}
div#about_wrap {
    display: flex;
    max-width: 1080px;
    margin: 0 auto;
}
div#intro {
    width: 75%;
    min-height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
span#intro_title_tag {
    font-size: 1rem;
    font-weight: 400;
    text-shadow: none;
    color: #80828a;
}
a {
    color: #cb697b;
    font-weight: 700;
    text-decoration: none;
    transition: .3s;
}
a#contact_github {
    position: relative;
    left: -10px;
    width: fit-content;
    padding: 3px 10px;
    font-size: 1rem;
}
a#contact_email {
    position: relative;
    left: -10px;
    width: fit-content;
    padding: 3px 10px;
    font-size: 1rem;
}
p#intro_content_text {
    line-height: 1.5rem;
}
span#contact_address {
    font-size: 1rem;
}
a:hover {
    color: #abcee2;
}
</style>
