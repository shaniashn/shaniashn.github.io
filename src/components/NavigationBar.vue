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
      <a href="#about"><li>about</li></a> 
      <a href="#"><li>resume</li></a> 
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

nav ul:last-child {
  width: 30%;
  right: 10%;
}
</style>