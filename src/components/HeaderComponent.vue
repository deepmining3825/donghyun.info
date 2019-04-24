<template>
    <header>
        <nav>
            <ul id="menu">
                <li><router-link to="/about" id="menu-item">about</router-link></li>
                <li><router-link to="/skills" id="menu-item">skills</router-link></li>
                <li><router-link to="/project" id="menu-item">project</router-link></li>
                <li><router-link to="/activity" id="menu-item">activity</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 999;
    background-color: #f8f8f8;
    transition: all .3s;
    overflow: hidden;
}
header nav {
    max-width: 1080px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
}
ul#menu {
    font-size: .9rem;
    color: #cb697b;
    display: flex;
    position: relative;
    right: -20px;
}
li {
    list-style: none;
    display: list-item;
    text-align: -webkit-match-parent;
}
a {
    color: #cb697b;
    font-weight: 700;
    text-decoration: none;
    transition: .3s;
}
a#menu-item {
    display: inline-block;
    height: 100%;
    line-height: 50px;
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: 400;
    text-shadow: 2px 2px 2px rgba(0,0,0,.1);
}
a:hover {
    color: #abcee2;
}
</style>
