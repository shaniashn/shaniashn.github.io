<template>
  <nav>
    <ul>
      <a href="">
        <img src="" alt="">
        shania.shn
      </a>
    </ul>
    <ul>
      <li>projects</li>
      <li>about</li>
      <li>resume</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
  nav ul a {
    text-decoration: none;
  }

  nav, nav ul {
    display: flex;
    justify-content: space-around;
  }

  nav ul:last-child {
    width: 20%;
  }

  nav ul li {
    list-style: none;
  }

</style>