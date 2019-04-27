<template>
    <section class="activity" id="activity">
        <article class="activity-activity first">
            <img src="..\assets\mining.jpg" alt="lecturing" class="activity-image">
            <div class="activity-content">
                <div class="activity-subtitle">
                    <h3 class="activity-subtitle__text">Mining</h3>
                    <span class="activity-date">2017.12 ~ing</span>
                </div>
                <div class="activity-detail">
                    <p class="activity-detail__text">Mining coins as a hobby</p>
                    <p class="activity-detail__text">I've been mining coins since became interested in blockchain.</p>
                    <p class="activity-detail__text">Checking news and technology trends related to blockchain frequently.</p>
                    <p class="activity-detail__text">Remotely managed through a monitoring webapp.</p>
                    <ul class="activity-links">
                        <li>
                            <a id="activity-links-mining" href="http://dm.mining.so/" target="_blank">
                                <img src="..\assets\link.png" alt=""><span> Visit Monitering WebApp</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.activity {
    padding: 60px 0;
    line-height: 1.8rem;
}
.activity-title {
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
.activity-title__bar {
    display: inline-block;
    width: 45px;
    background-color: #cb697b;
    height: 2px;
    margin-top: 30px;
}
.activity-activity {
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    width: 100%;
}
.activity .first {
    margin-top: .5rem;
}
.activity-image {
    width: 35%;
    height: 100%;
    margin: .5rem 0;
    box-shadow: 3px 1px 10px 0 rgba(0,0,0,.1);
}
.activity-content {
    width: 65%;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.activity-subtitle__text {
    display: inline-block;
    font-size: 1.4rem;
}
.activity-date {
    display: inline-block;
    background-color: #85b8d5;
    padding: 2px 6px;
    margin-left: 10px;
    color: #fff;
    font-size: .8rem;
    font-weight: 400;
    border-radius: 3px;
    height: auto;
    line-height: normal;
    box-shadow: none;
    border: 0;
    cursor: auto;
    position: relative;
    top: -4px;
}
.activity-detail__text:first-child {
    font-weight: 700;
}
.activity-detail__text {
    margin: .2rem 0;
}
.activity-links {
    line-height: normal;
    padding: inherit;
    margin-top: -10px;
}
img {
    max-width: 100%;
    height: auto;
}
a {
    color: #cb697b;
    font-weight: 700;
    text-decoration: none;
    transition: .3s;
}
li {
    list-style: none;
}
a:hover {
    color: #abcee2;
}
@media (max-width: 768px) {
    .activity-activity {
        flex-direction: column;
    }
    .activity-image {
        width: 100%;
        content: url("../assets/mining2.jpg");
    }
}

</style>
