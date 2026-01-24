<template>
  <div id="why-section" class="why-section section-padding">
    <div class="section-header">
      <h2 class="section-title">
        {{ $t('sections.why.section_title') }} <span class="gradient-text">Nott</span>?
      </h2>
      <p class="section-subtitle">
        {{ $t('sections.why.section_subtitle') }}
      </p>
    </div>

    <div class="bento-grid">
      <div class="bento-item bento-large" @mouseenter="activeCard = 1" @mouseleave="activeCard = null">
        <div class="bento-card">
          <div class="card-icon">
            <v-icon size="48" color="#c1ff02">mdi-lightbulb-outline</v-icon>
          </div>
          <div class="card-content">
            <div class="card-label">{{ $t('sections.why.what.title') }}</div>
            <h3 class="card-title">{{ $t('sections.why.what.subtitle') }}</h3>
            <p class="card-description">
              {{ $t('sections.why.what.description') }}
            </p>
          </div>
          <div class="card-decoration">
            <div class="decoration-circle"></div>
          </div>
        </div>
      </div>

      <div class="bento-item bento-large" @mouseenter="activeCard = 2" @mouseleave="activeCard = null">
        <div class="bento-card">
          <div class="card-icon">
            <v-icon size="48" color="#c1ff02">mdi-leaf</v-icon>
          </div>
          <div class="card-content">
            <div class="card-label">{{ $t('sections.why.why.title') }}</div>
            <h3 class="card-title">{{ $t('sections.why.why.subtitle') }}</h3>
            <p class="card-description">
              {{ $t('sections.why.why.description') }}
            </p>
          </div>
          <div class="card-stat">
            <span class="stat-value">180K</span>
            <span class="stat-label">{{ $t('sections.why.why.trees_saved') }}</span>
          </div>
        </div>
      </div>

      <div class="bento-item bento-full" @mouseenter="activeCard = 3" @mouseleave="activeCard = null">
        <div class="bento-card bento-card-horizontal">
          <div class="card-left">
            <div class="card-icon">
              <v-icon size="48" color="#c1ff02">mdi-account-group</v-icon>
            </div>
            <div class="card-content">
              <div class="card-label">{{ $t('sections.why.who.title') }}</div>
              <h3 class="card-title">{{ $t('sections.why.who.subtitle') }}</h3>
              <p class="card-description">
                {{ $t('sections.why.who.description') }}
              </p>
            </div>
          </div>
          <div class="card-right">
            <div class="user-avatars">
              <div class="avatar-stack">
                <div class="avatar" v-for="i in 3" :key="i">
                  <v-icon color="rgba(255,255,255,0.8)" size="20">mdi-account</v-icon>
                </div>
              </div>
              <span class="avatar-text">{{ $t('sections.why.who.join_students') }}</span>
            </div>
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
      activeCard: null
    }
  },
  mounted() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 150);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.bento-item').forEach(item => {
      observer.observe(item);
    });
  }
}
</script>

<style lang="scss" scoped>
.why-section {
  max-width: 1200px;
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

// Bento Grid Layout
.bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.bento-item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  &.bento-large {
    min-height: 320px;
  }

  &.bento-full {
    grid-column: span 2;
    min-height: 200px;

    @media only screen and (max-width: 768px) {
      grid-column: span 1;
    }
  }
}

.bento-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2rem;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(193, 255, 2, 0.08), transparent 50%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(193, 255, 2, 0.3);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);

    &::before {
      opacity: 1;
    }

    .card-icon {
      transform: scale(1.1);
    }

    .decoration-circle {
      transform: scale(1.2);
      opacity: 0.15;
    }
  }
}

.bento-card-horizontal {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.card-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.card-right {
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    margin-top: 1.5rem;
    width: 100%;
    justify-content: flex-start;
  }
}

.card-icon {
  width: 80px;
  height: 80px;
  background: rgba(193, 255, 2, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #c1ff02;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.card-description {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 400px;
}

// Stat element
.card-stat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  .stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #c1ff02;
    line-height: 1;
  }

  .stat-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 0.25rem;
  }
}

// Decoration
.card-decoration {
  position: absolute;
  top: -50px;
  right: -50px;
  pointer-events: none;
}

.decoration-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #c1ff02;
  opacity: 0.08;
  transition: all 0.4s ease;
}

// Avatar stack
.user-avatars {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.avatar-stack {
  display: flex;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(193, 255, 2, 0.2);
  border: 2px solid rgba(10, 10, 15, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -12px;

  &:first-child {
    margin-left: 0 !important;
  }
}

.avatar-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

// Mobile
@media only screen and (max-width: 768px) {
  .why-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .bento-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .bento-item.bento-large {
    min-height: auto;
  }

  .bento-item.bento-full {
    grid-column: span 1;
  }

  .bento-card {
    padding: 1.5rem;
  }

  .bento-card-horizontal {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-right {
    margin-top: 1.5rem;
    width: 100%;
    justify-content: flex-start;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 0.75rem;

    .v-icon {
      font-size: 36px !important;
    }
  }

  .card-title {
    font-size: 1.35rem;
  }

  .card-description {
    font-size: 0.9rem;
  }

  .card-stat {
    padding-top: 1rem;

    .stat-value {
      font-size: 2rem;
    }
  }

  .user-avatars {
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
}
</style>
