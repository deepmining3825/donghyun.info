<template>
    <div class=".projects-details">
        <div class="projects--header">
                <h1 class="projects-title"> Infochatter Webmanager Project </h1>
                <!-- <ul class="projects-links">
                    <li>
                        <a class="projects-links__link site" href="" target="_blank" rel="noopener noreferrer">site</a>
                    </li>
                    <li>
                        <a class="projects-links__link youtube" href="" target="_blank" rel="noopener noreferrer">youtube</a>
                    </li>
                </ul> -->
            </div>
            <p>
                This project is a project to develop management tool for solution to develop chatbots using natural language processing. <br>
                It was my first project since I joined the NHN diquest, and I participated in development for 19 months. <br>
                3 full-stack developers participated in this project. (1 senior, 2 intermediate)
            </p>
            <div class="projects-temp__wrap">
                <!-- <div class="projects-image-mobile__wrap">
                    <img src="" alt="detail mobile screenshot" class="projects-image-mobile">
                    <img src="" alt="detail mobile screenshot" class="projects-image-mobile">
                </div> -->
                <div class="projects-temp">
                    <h5 class="projects-subtitle detail-tech">Used Tech</h5>
                    <ul class="techs">
                        <li class="techs-item">Java</li> 
                        <li class="techs-item">Spring MVC</li> 
                        <li class="techs-item">Javascript</li> 
                        <li class="techs-item">JQuery</li>
                        <li class="techs-item">jsrender</li>
                        <li class="techs-item">HTML5</li>
                        <li class="techs-item">CSS3</li>
                        <li class="techs-item">MyBatis</li> 
                        <li class="techs-item">Oracle</li>
                        <li class="techs-item">Mysql</li>
                        <li class="techs-item">Tomcat</li>
                        <li class="techs-item">Docker</li>
                        <li class="techs-item">Git</li>
                        <li class="techs-item">Jenkins</li>
                    </ul>
                </div>
            </div>
            <h5 class="projects-subtitle detail-role">
                My role <span> (2016.10 ~ 2018.4)</span>
            </h5>
            <div class="detail-role__wrap">
                <p class="projects__text"> 
                    <span class=" projects__tag">together</span> server management, database management, release
                </p>
                <p class="projects__text"> 
                    <span class=" projects__tag">alone</span> funtion implementation of almost every page
                </p>
                <div class="projects-role"> 
                    <div class="projects__text-wrap"> 
                        <p class="projects__text odd bold"> 
                            <span class="projects__tag">alone</span> simulator / debugger 
                        </p> 
                        <p class="projects__text odd">  </p> 
                        <p class="projects__text odd">  </p> 
                        <p class="projects__text odd">  </p> 
                    </div> 
                    <a href="" target="_blank" rel="noopener noreferrer" class="projects-image-web__wrap"> 
                        <img src="" alt="detail page" class="projects-image-web"> 
                    </a> 
                </div>
                <div class="projects-role"> 
                    <a href="" target="_blank" rel="noopener noreferrer" class="projects-image-web__wrap"> 
                        <img src="" alt="detail page" class="projects-image-web"> 
                    </a> 
                    <div class="projects__text-wrap"> 
                        <p class="projects__text even bold"> <span class="projects__tag">alone</span> dialog model </p>
                        <p class="projects__text even"> <br>  </p> 
                        <p class="projects__text even">  </p> 
                    </div> 
                </div>
                <div class="projects-role"> 
                    <div class="projects__text-wrap"> 
                        <p class="projects__text odd bold"> <span class="projects__tag bold">alone</span> intent analysis </p> 
                        <p class="projects__text odd">  </p> 
                        <p class="projects__text odd">  </p> 
                        <p class="projects__text odd">  </p> 
                    </div> 
                    <a href="" target="_blank" rel="noopener noreferrer" class="projects-image-web__wrap"> 
                        <img src="" alt="detail page" class="projects-image-web"> 
                    </a> 
                </div>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.projects-details {
    position: relative;  
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    
    line-height: 1.9rem;
    overflow: auto;
}
.projects-header {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.projects-image-mobile__wrap {
    width: 50%;
    height: auto;
    display: flex;
    justify-content: space-between;
    order: 1;
}
img {
    max-width: 100%;
    height: auto;
}
.projects-temp {
    width: 50%;
}
.projects-subtitle {
    font-size: 1.4rem;
    margin: 3rem 0 1rem;
    text-transform: uppercase;
}
ol, ul {
    list-style: none;
}
li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
.projects__text {
    margin: 1rem 0;
}
.projects__tag {
    display: inline-block;
    background-color: #85b8d5;
    padding: 2px 6px;
    color: #fff;
    font-size: .8rem;
    font-weight: 400;
    border-radius: 3px;
    height: auto;
    line-height: normal;
    box-shadow: none;
    border: 0;
    cursor: auto;
    margin-left: 0;
    font-weight: 700;
    position: relative;
    top: -2px;
}
.projects__text-wrap {
    flex: 1.5;
}
.projects-image-web__wrap {
    flex: 1.5;
}
a {
    color: #cb697b;
    font-weight: 700;
    text-decoration: none;
    transition: .3s;
}
.projects-role {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.projects-role .bold {
    font-weight: 700;
}
.projects__text-wrap .even {
    margin-left: 1.5rem;
}
.projects-image-web {
    max-width: 100%;
    box-shadow: 3px 1px 10px 0 rgba(0,0,0,.1);
}
.techs-item:before {
    content: "#";
    padding-right: 5px;
    color: #ccc;
}
.techs-item {
    border: 1px solid #eee;
    cursor: pointer;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 1rem;
    box-shadow: 3px 1px 10px 0 rgba(0,0,0,.1);
    background-color: #fff;
    transition: .3s;
}
.techs {
    font-weight: 700;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.techs-item:hover {
    background-color: #cadeeb;
}
</style>
