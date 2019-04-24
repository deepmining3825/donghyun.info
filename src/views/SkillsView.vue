<template>
    <section class="skills" id="skills">
        <h2 class="skills-title"> My Skills 
            <span class="skills-title__bar"></span>
        </h2>
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
</style>
