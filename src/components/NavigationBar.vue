<template>
  <header>
    <nav id="nav">
    <ul>
      <a href="/">
        shania.shn
      </a>
    </ul>
    <ul>
      <a href="#portfolio"><li>projects</li></a>
      <li>about</li>
      <li>resume</li>
    </ul>
  </nav>
  </header>
</template>

<script>
export default {
  name: 'NavigationBar',
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
  display: flex;
  align-items: center;
  text-decoration: none;
}

nav ul a,
nav ul li {
  font-size: 1.5em;
  font-weight: 600;
  color: var(--secondary-color);
}

nav ul:first-child {
  left: 10%;
}

nav ul:last-child {
  width: 30%;
  right: 10%;
}
</style>