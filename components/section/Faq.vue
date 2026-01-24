<template>
  <div class="faq-section section-padding">
    <div class="section-header">
      <h2 class="section-title">
        {{ $t('faq.title') }} <span class="gradient-text">{{ $t('faq.subtitle') }}</span>
      </h2>
      <p class="section-subtitle">
        {{ $t('faq.section_subtitle') }}
      </p>
    </div>

    <div class="faq-container">
      <div class="faq-list">
        <div
          v-for="(item, i) in displayedItems"
          :key="i"
          class="faq-item glass"
          :class="{ 'faq-active': openIndex === i }"
          @click="toggleFaq(i)"
        >
          <div class="faq-header">
            <span class="faq-question">{{ item.title }}</span>
            <div class="faq-icon">
              <v-icon :color="openIndex === i ? '#c1ff02' : 'rgba(255,255,255,0.5)'" size="24">
                {{ openIndex === i ? 'mdi-minus' : 'mdi-plus' }}
              </v-icon>
            </div>
          </div>
          <transition name="expand">
            <div v-show="openIndex === i" class="faq-answer">
              <p>{{ item.subtitle }}</p>
            </div>
          </transition>
        </div>
      </div>

      <div v-if="items.length > initialDisplayCount" class="show-more-container">
        <v-btn
          class="btn-secondary"
          @click="toggleShowAll"
        >
          {{ showAll ? $t('faq.show_less') : $t('faq.show_more') }}
          <v-icon right size="18">
            {{ showAll ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
          </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openIndex: null,
      showAll: false,
      initialDisplayCount: 6,
      items: [
        { id: 1, title: this.$t("faq.1.title"), subtitle: this.$t("faq.1.subtitle") },
        { id: 2, title: this.$t("faq.2.title"), subtitle: this.$t("faq.2.subtitle") },
        { id: 3, title: this.$t("faq.3.title"), subtitle: this.$t("faq.3.subtitle") },
        { id: 4, title: this.$t("faq.4.title"), subtitle: this.$t("faq.4.subtitle") },
        { id: 5, title: this.$t("faq.5.title"), subtitle: this.$t("faq.5.subtitle") },
        { id: 6, title: this.$t("faq.6.title"), subtitle: this.$t("faq.6.subtitle") },
        { id: 7, title: this.$t("faq.7.title"), subtitle: this.$t("faq.7.subtitle") },
        { id: 8, title: this.$t("faq.8.title"), subtitle: this.$t("faq.8.subtitle") },
        { id: 9, title: this.$t("faq.9.title"), subtitle: this.$t("faq.9.subtitle") },
        { id: 10, title: this.$t("faq.10.title"), subtitle: this.$t("faq.10.subtitle") },
        { id: 11, title: this.$t("faq.11.title"), subtitle: this.$t("faq.11.subtitle") },
      ],
    }
  },
  computed: {
    displayedItems() {
      return this.showAll ? this.items : this.items.slice(0, this.initialDisplayCount);
    }
  },
  methods: {
    toggleFaq(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
    toggleShowAll() {
      this.showAll = !this.showAll;
      if (!this.showAll) {
        this.openIndex = null;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.faq-section {
  max-width: 900px;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

.faq-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  cursor: pointer;
  padding: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(193, 255, 2, 0.3);
  }

  &.faq-active {
    border-color: rgba(193, 255, 2, 0.4);
    background: rgba(193, 255, 2, 0.05);
  }
}

.faq-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.75rem;
  gap: 1rem;
}

.faq-question {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  line-height: 1.4;
  text-align: left;
}

.faq-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  .faq-active & {
    background: rgba(193, 255, 2, 0.15);
    transform: rotate(180deg);
  }
}

.faq-answer {
  padding: 0 1.75rem 1.5rem;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
    margin: 0;
  }
}

// Expand transition
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  max-height: 300px;
  opacity: 1;
}

.expand-enter,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

// Show more button
.show-more-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

// Mobile
@media only screen and (max-width: 600px) {
  .faq-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .faq-header {
    padding: 1.25rem 1.25rem;
  }

  .faq-question {
    font-size: 1rem;
  }

  .faq-answer {
    padding: 0 1.25rem 1.25rem;

    p {
      font-size: 0.9rem;
    }
  }

  .faq-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
