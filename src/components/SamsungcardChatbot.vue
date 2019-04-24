<template>
    <section class="projects" id="project">
        <h2 class="projects-title"> Samsungcard Chatbot Project
            <span class="projects-title__bar"></span>
        </h2>

        <div class="projects-basic-info">
            <ul class="techs">
                <li class="techs-item">Java</li>
                <li class="techs-item">Natural Language Processing</li>
                <li class="techs-item">Middleware</li>
                <li class="techs-item">Search Engine</li>
                <li class="techs-item">Multiflexing</li>
            </ul>
        </div>

        <div class="projects-video-samsungcard">
            <iframe class="samsungcard-youtube" src="https://www.youtube.com/embed/JMM3NzeJkZM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
</template>

<script>
export default {

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
.projects-video-samsungcard{
	position : relative;
	width : 100%;
	height : 0;
	padding-bottom : 56.25%;
}
.samsungcard-youtube{
	position : absolute;
	top : 0;
	left : 0;
	width : 100%;
	height : 100%;
}
</style>
