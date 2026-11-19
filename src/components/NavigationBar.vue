<template>
  <header>
    <nav id="nav">
      <ul>
        <a href="/">
          shania.shn
        </a>
      </ul>

      <ul :class="{ 'hide': !showMenu }">
        <li>
          <a href="#portfolio" @click="showMenu = false">projects</a>
        </li>
        <li>
          <a href="#about" @click="showMenu = false">about</a>
        </li>
        <li>
          <a href="https://read.cv/shaniashn" target="_blank" @click="showMenu = false">resume</a>
        </li>
      </ul>
      <div class="button-menu">
        <font-awesome-icon :class="{ hide: !showMenu }" icon="fa-solid fa-xmark" size="2x" @click="toggleMenu" />
        <font-awesome-icon icon="fa-solid fa-bars" size="2x" :class="{ hide: showMenu }" @click="toggleMenu" />
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
      return this.showMenu = !this.showMenu
    },
  }
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
  left: 4%;
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
    height: 200px;
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
    padding: 10px;
  }
}
</style>