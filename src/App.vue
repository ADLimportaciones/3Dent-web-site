<script setup>
import HeaderView from './component/HeaderView.vue';
import ContactView from './component/ContactView.vue';
</script>

<template class="body">
  <HeaderView />
  <div v-if="ContactView" id="page-content">
      <router-view />
    </div>
  <ContactView />
</template>

<style scoped></style>
