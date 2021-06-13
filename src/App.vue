<template>
  <div v-bind:class="{'site-background': this.$route.path == '/'}">
    <div class="topnav" v-bind:class="{'responsive': responsive }">
      <router-link class="logo" to="/">Chloe Martini</router-link>
      <div class="links">
        <router-link to="/bio">Bio</router-link>
        <router-link to="/commercials">Commercials</router-link>
        <router-link to="/music">Music</router-link>
        <router-link to="/contact">Contact</router-link>
        <a href="https://www.instagram.com/chloemartiniofficial/" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a href="https://facebook.com/chloexmartini" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        <a href="https://soundcloud.com/chloexmartini" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'soundcloud']" /></a>
      </div>
      <a href="javascript:void(0);" class="icon" v-on:click="responsive = !responsive">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </a>
    </div>
    <div class="main" v-show="this.$route.path == '/'">
      <h1>CHLOE MARTINI</h1>
      <p>music producer / composer</p>
      <a class="button" href="https://open.spotify.com/artist/6vhgsnZ2dLDaLDog3pqP2d?si=1D7qwVosTtWHickXiAkGSQ">Listen now</a>
    </div>
  </div>
  <router-view/>
  <div class="footer">
    <a href="https://www.instagram.com/chloemartiniofficial/" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
    <a href="https://facebook.com/chloexmartini" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
    <a href="https://soundcloud.com/chloexmartini" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'soundcloud']" /></a>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
#app {
  font-family: 'DM Serif Display', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-size: calc((1.2 - 1) * 1.2vw + 1rem);
  line-height: .7em;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.8;
  overflow: hidden;
}

.site-background {
  background-image: url("assets/Chloe.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 65vw;
  color: #c79288;
  position: relative;
}

.logo {
  font-size: calc((2 - 1) * 1.2vw + 1rem);
  font-style: italic;
  letter-spacing: 0em;
  text-transform: uppercase;
}

.topnav {
  font-style: italic;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  display: block;
}

.topnav .links {
  /* display: none; */
  float: right;
}

.topnav a {
  float: left;
  padding: 14px 16px;
  text-decoration: none;
  color: white;
  display: block;
}

.topnav a.icon {
  display: none;
  /* background: black;
  display: block;
  position: absolute;
  right: 0;
  top: 0; */
}

.site-background .topnav a {
  color: #c79288;
}

.menu-right a.router-link-exact-active {
  text-decoration: none;
  color: white;
}

.site-background .menu-right a.router-link-exact-active {
  color: #c79288;
}

.menu-right {
  float: right;
}

.main {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.main h1 {
  font-weight: normal;
  margin-bottom: 0px;
  font-style: italic;
  font-size: calc((4 - 1) * 1.2vw + 1rem);
}

.main p {
  margin-top: 0;
  font-size: calc((2.5 - 1) * 1.2vw + 1rem);
}

a.button {
  font-style: italic;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: white;
  color: #c79288;
}

.site-background .button {
  color: white;
  background-color: #c79288;
}

.footer {
  margin: 50px 0;
}

.footer a {
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
  color: white;
}

.column {
  float: left;
  width: 50%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.cell {
  padding: 14px 16px;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 750px) {
  .column {
    width: 100%;
  }

  .topnav .links a {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }

  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
    background-color: black;
  }
  .topnav.responsive .links a {
    float: none;
    display: block;
    text-align: left;
    background-color: #c79288;
    color: white;
  }
} 
</style>

<script>
export default {
  data() {
    return {
      responsive: false
    }
  }
}
</script>