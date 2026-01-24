<template>
  <div class="supporter-section">
    <div class="stats-container">
      <div class="stat-item glass">
        <v-icon class="stat-icon" color="#c1ff02" size="32">mdi-leaf</v-icon>
        <div class="stat-content">
          <span class="stat-value">180K+</span>
          <span class="stat-label">{{ $t('sections.supporter.stats.trees_saved') }}</span>
        </div>
      </div>
      <div class="stat-item glass">
        <v-icon class="stat-icon" color="#c1ff02" size="32">mdi-file-document-multiple</v-icon>
        <div class="stat-content">
          <span class="stat-value">10K+</span>
          <span class="stat-label">{{ $t('sections.supporter.stats.notes_shared') }}</span>
        </div>
      </div>
      <div class="stat-item glass">
        <v-icon class="stat-icon" color="#c1ff02" size="32">mdi-school</v-icon>
        <div class="stat-content">
          <span class="stat-value">50+</span>
          <span class="stat-label">{{ $t('sections.supporter.stats.universities') }}</span>
        </div>
      </div>
    </div>

    <div class="supporters-header">
      <span class="supporters-label">{{ $t('sections.supporter.title') }}</span>
    </div>

    <div class="marquee-wrapper">
      <div class="marquee-track">
        <div class="marquee-content">
          <div
            v-for="supporter in [...supporters, ...supporters]"
            :key="supporter.id + '-' + Math.random()"
            class="supporter-logo"
            @click="goToSupporter(supporter.link)"
          >
            <v-img
              :src="supporter.img"
              contain
              height="50"
              width="140"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      supporters: [
        { id: 1, img: require('~/assets/images/supporters/eccording.svg'), link: 'https://ecording.org/en/' },
        { id: 2, img: require('~/assets/images/supporters/itu.svg'), link: 'https://itucekirdek.com/' },
        { id: 3, img: require('~/assets/images/supporters/aws.svg'), link: 'https://aws.amazon.com/' },
      ]
    }
  },
  methods: {
    goToSupporter(link) {
      window.open(link, '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
.supporter-section {
  padding: 80px 0;
  overflow: hidden;
}

// Stats Section
.stats-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  padding: 0 1rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 2rem;
  min-width: 200px;

  .stat-icon {
    flex-shrink: 0;
  }

  .stat-content {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 1.75rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
  }

  .stat-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
  }
}

// Supporters Header
.supporters-header {
  text-align: center;
  margin-bottom: 2rem;
}

.supporters-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

// Marquee
.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

.marquee-track {
  display: flex;
  width: max-content;
}

.marquee-content {
  display: flex;
  align-items: center;
  gap: 4rem;
  animation: marquee 25s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.supporter-logo {
  flex-shrink: 0;
  opacity: 0.6;
  filter: grayscale(100%) brightness(1.5);
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0 1rem;

  &:hover {
    opacity: 1;
    filter: grayscale(0%) brightness(1);
    transform: scale(1.1);
  }
}

// Mobile
@media only screen and (max-width: 768px) {
  .supporter-section {
    padding: 60px 0;
  }

  .stats-container {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .stat-item {
    width: 100%;
    max-width: 280px;
    justify-content: flex-start;
    padding: 1rem 1.5rem;

    .stat-value {
      font-size: 1.5rem;
    }
  }

  .marquee-content {
    gap: 3rem;
  }

  .supporter-logo {
    padding: 0 0.5rem;

    .v-image {
      width: 100px !important;
      height: 40px !important;
    }
  }
}
</style>
