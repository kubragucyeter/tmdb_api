<script setup lang="js">
const colorMode = useColorMode();
</script>

<template>
  <div class="mb-8 mt-2">
    <select v-model="$colorMode.preference">
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  </div>

</template>