<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Post</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/posts" class="nav-link">Posts</router-link>
        </li>
      </ul>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
    /* .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    } */
    .fade-enter-active{
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .nav-item{
      transition:.2s
    }
    .nav-item:hover{
      transform:scale(1.2,1.2);
      transform:rotate(15deg);
    }
</style>

<script>

    export default{
    }
</script>
