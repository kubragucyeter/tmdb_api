<script setup lang="js">
import ChangeTheme from './compenents/change-theme.vue'



onMounted(
  () => {

  

    useFetch('', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
);

</script>

<template>
  <NuxtPage />
  <ChangeTheme />
  <!-- 
  <div>
  <span icon="i-heroicons-sun"></span>
  <span icon="i-heroicons-moon"></span> 
  </div>-->

  <div class=" flex justify-center align-center ml-8 mt-6">
    <h1>Popüler Filmler</h1>
    <div>
      
      
    </div>
  </div>
</template>
