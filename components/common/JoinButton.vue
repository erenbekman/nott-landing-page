<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="btn btn-neon join-button"
    :class="{ 'btn-sm': small }"
    @click="onClick"
  >
    <span>{{ $t('global.join') }}</span>
    <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0f" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: "https://app.nott.app/"
    },
    download: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async onClick(e) {
      if (!this.download) return;
      e.preventDefault();
      const response = await this.$axios.$get(`/invite`);
      if (response.success && response.url) {
        window.open(response.url, '_blank');
      } else {
        window.open(this.href, '_blank');
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.join-button svg {
  width: 18px;
  height: 18px;
}
</style>
