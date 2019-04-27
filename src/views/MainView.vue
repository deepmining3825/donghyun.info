<template>
    <div>
        <section class="about">
            <div class="about_wrap">
                <article class="profile">Profile image</article>
                <article class="intro">
                    <h1 class="intro-title">
                        Donghyun Kim (DK)
                        <span class="intro-title__tag">@deepmining3825</span>
                    </h1>
                    <div class="intro-content">
                        <p class="intro-content__text">
                            I like a development and would like to learn deeply. <br>
                            Recently, I am interested in TypeScript, React, NoSQL.
                        </p>

                        <div class="contact_github">
                            <a class="contact_github" href="https://github.com/deepmining3825" target="_blank" rel="noopener noreferrer">
                                <img src="..\assets\github.png" alt=""><span class="contact_address">github.com/deepmining3825</span>
                            </a>
                        </div>
                        <div class="contact_email">
                            <a class="contact_email" href="mailto:ekzm3825@gmail.com">
                                <img src="..\assets\email.png" alt=""><span class="contact_address">ekzm3825@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        <div class="wrap">
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
.about .profile {
    width: 25%;
    min-height: 270px;
    box-shadow: 3px 1px 10px 0 rgba(0,0,0,.1);
    text-indent: 100%;
    overflow: hidden;
    white-space: nowrap;
    background: url(../assets/profile.png) no-repeat 50%;
    background-size: cover;
}
.about .intro-title {
    border-bottom: 1px solid #b5b6bb;
    padding: .5rem 0 .5rem 30px;
    font-weight: 700;
    text-shadow: 2px 2px 2px rgba(0,0,0,.2);
    font-size: 2rem;
    margin-bottom: 5px;
}
.about .intro-content {
    height: 50%;
    padding: 5px 0 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.wrap {
    max-width: 1080px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.about {
    padding: 60px 0;
    background-color: #f8f8f8;
}
.about_wrap {
    display: flex;
    max-width: 1080px;
    margin: 0 auto;
}
.about .intro {
    width: 75%;
    min-height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.about .intro-title__tag {
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
.contact_github {
    position: relative;
    left: -10px;
    width: fit-content;
    padding: 3px 10px;
    font-size: 1rem;
}
.contact_email {
    position: relative;
    left: -10px;
    width: fit-content;
    padding: 3px 10px;
    font-size: 1rem;
}
.about .intro-content__text {
    margin: 0;
    line-height: 1.5rem;
}
.contact_address {
    font-size: 1rem;
}
a:hover {
    color: #abcee2;
}
@media (max-width: 768px) {
    .about .profile {
        flex-direction: column;
    }
    .about .profile {
        width: 0;
        
    }
}
</style>
