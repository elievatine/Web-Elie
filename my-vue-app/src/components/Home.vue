Elie<template>
  <div style="width:100%;height:100%;position:absolute;overflow:hidden;">
    <div style="background-color:#000000;position:relative;width:100%;height:100%;">
      <div id="particles-js" color="#20C20E">
      </div>
    </div>
    <div style="position:absolute;top:50%;left:50%;transform: translate(-50%, -25%);color:#eee;text-align:center;">
      <h1 style="font-size:4em;margin-bottom:0.2em;color:#FFFFF;">
        <span class="typing">Elie Vatine</span>
      </h1>
      <div style="font-family:'Roboto Slab', serif;font-size:1.2em;">
        <ul style="display:inline;list-style:none;margin:0;color:#FFFFF;">
          <li class="inline-li">"The best way to predict the future is to create it."</li>
        </ul>
      </div>
      <div class="icon-ul">
        <ul>
          <li>
            <router-link to="resume">
              <img alt="resume" class="icons" src="../assets/icons/address-card.svg">
            </router-link>
          </li>
	  <li>
            <a rel="noopener" target="_blank" href="https://github.com/elievatine">
              <img alt="github" class="icons" src="../assets/icons/github.svg">
            </a>
          </li>
	  <li>
            <a rel="noopener" target="_blank" href="https://github.com/elievatine">
              <img alt="github" class="icons" font-size:0.1em src="../assets/icons/newspaper.svg">
            </a>
          </li>
	  <li>
            <a rel="noopener" target="_blank" href="https://github.com/elievatine">
              <img alt="github" class="icons" src="../assets/icons/flask.svg">
            </a>
          </li>







        </ul>
        <div style="font-size:0.7em;">
          <span style="border-top:1px solid #eee;padding:0 1em 0 1em;text-align:center;">© 2018 Elie Vatine</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import particleConfig from '../assets/particles.json'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    year: function () {
      let date = new Date()
      return date.getFullYear()
    }
  },
  mounted () {
    require('particles.js')
    // console.log(particlesJS)
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },
  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js', particleConfig, function () {
        console.log('call back particles loaded')
      })
      /* eslint-enable */
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-device-width: 300px) and (max-device-width: 667px) {
  .typing {
    font-size: 12vw;
  }
  .inline-li {
    font-size: 4vw;
  }
  .icon-ul {
    margin-top: 10em !important;
    margin-bottom: 15em !important;
  }
  .icon-ul > ul > li {
    margin-left: 3vw !important;
    margin-right: 3vw !important;
  }
}
@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes caret {
  50% {
    border-right-color: currentColor;
  }
}
.typing {
  display: inline-block;
  width: 14ch;
  font-family: Consolas, Monaco, monospace;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  border-right: 1px solid transparent;
  animation: typing 1s steps(14), caret 0.5s steps(1) 5;
}
:root {
  --icon-fill-color: #228B22;
}
.icons {
  min-width: 2em;
  min-width: 2.2em;
  transition: all 0.3s;
}

.icons:hover {
  transform: translate(0, -0.4em);
  min-width: 1.5em;
}
#particles-js {
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
h1 {
  margin: 0;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0;
}

.icon-ul {
  margin-top: 13em;
  margin-bottom: 9em;
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-ul > ul {
  display: flex;
  min-height: 4em;
  justify-content: center;
  padding-left: 0px;
}
.icon-ul > ul > li {
  display: inline;
  margin-right: 1.6em;
  margin-left: 1.6em;
  font-size: 2em;
  width: 1em;
}

.inline-li {
  display: inline;
  white-space: nowrap;
}
</style>
