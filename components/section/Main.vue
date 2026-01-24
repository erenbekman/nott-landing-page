<template>
  <div class="hero-section">
    <div class="floating-blob blob-1"></div>
    <div class="floating-blob blob-2"></div>

    <v-row class="hero-content" align="center" justify="center">
      <v-col cols="12" md="6" class="hero-left">
        <div class="hero-text-container">
          <h1 class="hero-title">
            Think <span class="gradient-text">green</span>,
          </h1>
          <h1 class="hero-title">
            Study <span class="gradient-text">smart</span>.
          </h1>

          <p class="hero-subtitle">
            {{ $t('sections.main.subtitle') }}
          </p>

          <div class="hero-buttons">
            <a href="https://app.nott.app/" target="_blank" class="btn-link">
              <v-btn class="btn-primary" large>
                {{ $t('sections.main.get_started') }}
              </v-btn>
            </a>
            <a href="#why-section" class="btn-link">
              <v-btn class="btn-secondary" large>
                {{ $t('sections.main.learn_more') }}
              </v-btn>
            </a>
          </div>

          <div class="trust-badges">
            <div class="trust-badge">
              <v-icon class="badge-icon" small>mdi-account-group</v-icon>
              <span class="badge-value">10K+</span>
              <span>{{ $t('sections.main.users') }}</span>
            </div>
            <div class="trust-badge">
              <v-icon class="badge-icon" small>mdi-star</v-icon>
              <span class="badge-value">4.8</span>
              <span>{{ $t('sections.main.rating') }}</span>
            </div>
            <div class="trust-badge">
              <v-icon class="badge-icon" small>mdi-school</v-icon>
              <span class="badge-value">50+</span>
              <span>{{ $t('sections.main.universities') }}</span>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="hero-right">
        <div class="phone-wrapper">
          <div class="phone-glow"></div>

          <div class="phone-mockup animate-float">
            <div class="phone-screen">
              <v-img
                :src="require('~/assets/images/logo/icon_white.svg')"
                contain
                width="80"
                height="80"
                class="phone-logo"
              />
              <div class="phone-text">
                <span class="phone-brand">NOTT</span>
                <span class="phone-tagline mb-3">{{ $t('sections.main.your_notes') }}</span>
              </div>
            </div>
          </div>

          <div class="floating-card card-1 glass">
            <v-icon color="#c1ff02" size="24">mdi-leaf</v-icon>
            <span>{{ $t('sections.main.eco_friendly') }}</span>
          </div>
          <div class="floating-card card-2 glass">
            <v-icon color="#c1ff02" size="24">mdi-file-document-multiple</v-icon>
            <span>{{ $t('sections.main.notes_count') }}</span>
          </div>
        </div>
      </v-col>
    </v-row>

    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span>{{ $t('sections.main.scroll_explore') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Simple fade-in animation on mount
    const elements = document.querySelectorAll('.hero-left, .hero-right');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + (index * 200));
    });
  }
}
</script>

<style lang="scss" scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 60px;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.hero-left {
  padding-right: 2rem;
}

.hero-text-container {
  max-width: 600px;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 1.5rem 0 2.5rem;
  max-width: 480px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;

  .btn-link {
    text-decoration: none;
  }
}

.trust-badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

// Phone mockup
.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(193, 255, 2, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
}

.phone-mockup {
  position: relative;
  width: 280px;
  height: 580px;
  background: linear-gradient(145deg, #1a1a2e, #16162a);
  border-radius: 45px;
  padding: 12px;
  box-shadow:
    0 50px 100px rgba(0, 0, 0, 0.5),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 25px;
    background: #0a0a0f;
    border-radius: 20px;
    z-index: 10;
  }

  .phone-screen {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #0a0a0f 0%, #121220 100%);
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    .phone-logo {
      opacity: 0.9;
    }

    .phone-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      .phone-brand {
        font-size: 2.5rem;
        font-weight: 700;
        color: #c1ff02;
        letter-spacing: 0.1em;
      }

      .phone-tagline {
        font-family: 'Inter', sans-serif;
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}

// Floating cards
.floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  z-index: 10;

  &.card-1 {
    top: 80px;
    right: -40px;
    animation: float 5s ease-in-out infinite;
  }

  &.card-2 {
    bottom: 120px;
    left: -30px;
    animation: float 6s ease-in-out infinite reverse;
  }
}

// Scroll indicator
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  span {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
  }
}

.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  position: relative;

  .scroll-wheel {
    width: 4px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll-animation 2s ease-in-out infinite;
  }
}

@keyframes scroll-animation {
  0%, 100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  50% {
    opacity: 0.3;
    transform: translateX(-50%) translateY(10px);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

// Floating blobs
.floating-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  pointer-events: none;

  &.blob-1 {
    width: 500px;
    height: 500px;
    background: rgba(193, 255, 2, 0.4);
    top: -150px;
    right: -150px;
    animation: blob-move 20s ease-in-out infinite;
  }

  &.blob-2 {
    width: 400px;
    height: 400px;
    background: rgba(193, 255, 2, 0.25);
    bottom: -100px;
    left: -100px;
    animation: blob-move 25s ease-in-out infinite reverse;
  }
}

@keyframes blob-move {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -40px) scale(1.1); }
  50% { transform: translate(-30px, 30px) scale(0.95); }
  75% { transform: translate(40px, 20px) scale(1.05); }
}

// Tablet
@media only screen and (max-width: 960px) {
  .hero-section {
    padding: 100px 0 40px;
  }

  .hero-content {
    flex-direction: column-reverse;
  }

  .hero-left {
    padding-right: 0;
    text-align: center;
  }

  .hero-text-container {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-subtitle {
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .trust-badges {
    justify-content: center;
  }

  .phone-mockup {
    width: 220px;
    height: 460px;
    border-radius: 38px;
    margin-bottom: 2rem;

    &::before {
      width: 60px;
      height: 20px;
      top: 15px;
    }

    .phone-screen {
      border-radius: 28px;

      .phone-text {
        .phone-brand {
          font-size: 2rem;
        }
      }
    }
  }

  .floating-card {
    display: none;
  }

  .scroll-indicator {
    display: none;
  }
}

// Mobile
@media only screen and (max-width: 600px) {
  .hero-section {
    padding: 80px 0 30px;
    min-height: auto;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin: 1rem 0 2rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;

    .btn-link {
      width: 100%;

      .v-btn {
        width: 100%;
      }
    }
  }

  .trust-badges {
    gap: 0.5rem;

    .trust-badge {
      padding: 8px 12px;
      font-size: 12px;
    }
  }

  .phone-mockup {
    width: 180px;
    height: 380px;
    border-radius: 32px;

    &::before {
      width: 50px;
      height: 16px;
      top: 12px;
    }

    .phone-screen {
      border-radius: 24px;

      .phone-logo {
        width: 50px !important;
        height: 50px !important;
      }

      .phone-text {
        .phone-brand {
          font-size: 1.5rem;
        }

        .phone-tagline {
          font-size: 0.7rem;
        }
      }
    }
  }

  .floating-blob {
    &.blob-1 {
      width: 300px;
      height: 300px;
      top: -100px;
      right: -100px;
    }

    &.blob-2 {
      width: 250px;
      height: 250px;
    }
  }
}
</style>
