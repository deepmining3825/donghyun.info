<template>
    <section class="activity" id="activity">
        <h2 class="activity-title"> Activity
            <span class="activity-title__bar"></span>
        </h2>
        <article class="activity-activity first">
            <img src="..\assets\lecturing.jpg" alt="lecturing" class="activity-image">
            <div class="activity-content">
                <div class="activity-subtitle">
                    <h3 class="activity-subtitle__text">Git Lecturing</h3>
                    <span class="activity-date">2018.05 ~ing</span>
                </div>
                <div class="activity-detail">
                    <p class="activity-detail__text">Lecturing at encoa academy</p>
                    <p class="activity-detail__text">Lecturing at encoa academy</p>
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
    margin: .7rem 0;
}
</style>
