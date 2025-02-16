<template>
  <header>
    <nav id="nav">
      <ul>
        <a href="/">
          shania.shn
        </a>
      </ul>

      <ul class="menus hide">

        <a href="#portfolio">
          <li>projects</li>
        </a>
        <a href="#about">
          <li>about</li>
        </a>
        <a href="https://read.cv/shaniashn" target="_blank">
          <li>resume</li>
        </a>
      </ul>
      <div class="button-menu">
        <font-awesome-icon class="hide" icon="fa-solid fa-xmark" size="2x" @click="toggleMenu" />
        <font-awesome-icon icon="fa-solid fa-bars" size="2x" class="" @click="toggleMenu" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      console.log('Showmenu', this.showMenu);

      return this.showMenu = !this.showMenu
    },
  },
  watch: {
    showMenu() {
      document.querySelector(".menus").classList.toggle('hide')
      document.querySelector(".button-menu").querySelector('svg:first-child').classList.toggle("hide");
      document.querySelector(".button-menu").querySelector('svg:last-child').classList.toggle("hide");
    }
  },
}
</script>

<style>
header {
  backdrop-filter: blur(5px);
  position: fixed;
  height: 70px;
  width: 100%;
  background-color: rgb(255, 248, 243, 0.5);
  top: 0;
}

nav {
  display: flex;
  justify-content: space-around;
  background-color: var(--lightgreen-shade-color);
  height: 50px;
  width: 100%;
  position: relative;
  top: 20px;
  backdrop-filter: blur(5px);
}

nav ul li {
  display: flex;
  align-items: center;
  position: relative;
  align-self: center;
  padding: 0 15px;
  height: 100%;
}

nav ul li:hover {
  background-color: var(--green-color);
  cursor: default;
}

nav ul {
  display: flex;
  justify-content: space-between;
  position: absolute;
  height: 100%;
}

nav ul a {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: 600;
}

nav ul li a {
  font-size: 1.1em;
  font-weight: 600;
  color: var(--secondary-color);
}

nav ul:first-child {
  left: 10%;
}

nav ul:last-of-type {
  width: 30%;
  right: 10%;
}

nav ul:last-of-type svg {
  display: none;
}

.button-menu {
  display: none;
}

.button-menu svg:first-child.hide {
  display: none;
}

.button-menu svg:last-child.hide {
  display: none;
}

@media screen and (max-width: 769px) {
  nav ul:last-of-type {
    width: 100%;
    right: 0%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--lightgreen-mobile-menu);
    height: max-content;
  }

  nav ul:last-of-type.hide {
    display: none;
  }

  nav ul:last-of-type a {
    padding: 3%;
    justify-content: center;
  }

  .button-menu {
    width: 100%;
    display: flex;
    justify-content: end;
    position: relative;
    padding: 3%;
  }
}
</style>