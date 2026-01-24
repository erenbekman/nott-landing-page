<template>
  <v-app dark>
    <v-main class="main-content">
      <Navbar />
      <div class="page-container">
        <Nuxt />
      </div>
      <notifications position="bottom center" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    Navbar: () => import("@/components/layout/Navbar"),
  }
}
</script>

<style lang="scss">
.main-content {
  background-color: #0a0a0f !important;
  min-height: 100vh;
}

.page-container {
  position: relative;
  max-width: 100%;
  overflow-x: hidden;
}

// Override Vuetify container for full-width sections
.v-application .container {
  max-width: 100% !important;
  padding: 0 !important;
}

// Smooth scrolling
html {
  scroll-behavior: smooth;
}

// Custom scrollbar
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0a0a0f;
}

::-webkit-scrollbar-thumb {
  background: rgba(193, 255, 2, 0.3);
  border-radius: 4px;

  &:hover {
    background: rgba(193, 255, 2, 0.5);
  }
}

// Selection color
::selection {
  background: rgba(193, 255, 2, 0.3);
  color: #fff;
}

::-moz-selection {
  background: rgba(193, 255, 2, 0.3);
  color: #fff;
}
</style>
