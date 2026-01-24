<template>
  <footer class="footer-section">
    <div class="cta-container">
      <div class="cta-card glass-card">
        <div class="cta-content">
          <h2 class="cta-title">
            {{ $t('sections.contact.title') }}
          </h2>
          <p class="cta-subtitle">
            {{ $t('sections.contact.subtitle') }}
          </p>

          <div class="download-buttons">
            <a href="https://apps.apple.com/app/nott-academy/id6449980598" target="_blank" class="store-btn">
              <v-icon size="24">mdi-apple</v-icon>
              <div class="store-text">
                <span class="store-label">{{ $t('sections.contact.download_appstore') }}</span>
                <span class="store-name">{{ $t('sections.contact.appstore') }}</span>
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=academy.nott" target="_blank" class="store-btn">
              <v-icon size="24">mdi-google-play</v-icon>
              <div class="store-text">
                <span class="store-label">{{ $t('sections.contact.get_googleplay') }}</span>
                <span class="store-name">{{ $t('sections.contact.googleplay') }}</span>
              </div>
            </a>
            <a href="https://app.nott.app/" target="_blank" class="store-btn web-btn">
              <v-icon size="24">mdi-web</v-icon>
              <div class="store-text">
                <span class="store-label">{{ $t('sections.contact.open_browser') }}</span>
                <span class="store-name">{{ $t('sections.contact.browser') }}</span>
              </div>
            </a>
          </div>
        </div>

        <div class="cta-decoration">
          <div class="decoration-blob"></div>
        </div>
      </div>
    </div>

    <div class="footer-content">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand-logo">
            <v-img
              :src="require('~/assets/images/logo/icon_dark.svg')"
              contain
              width="40"
              height="40"
            />
            <span class="brand-name">Nott</span>
          </div>
          <p class="brand-tagline">
            {{ $t('sections.contact.brand_tagline') }}
          </p>

          <div class="social-links">
            <a href="https://www.instagram.com/nott.app/" target="_blank" class="social-btn">
              <v-icon size="20">mdi-instagram</v-icon>
            </a>
            <a href="https://linkedin.com/company/nottco/" target="_blank" class="social-btn">
              <v-icon size="20">mdi-linkedin</v-icon>
            </a>
            <a href="mailto:hello@nott.app" class="social-btn">
              <v-icon size="20">mdi-email-outline</v-icon>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <h4 class="footer-heading">{{ $t('sections.contact.company') }}</h4>
          <nav class="link-list">
            <nuxt-link :to="localePath({ name: 'about' })" class="footer-link">
              {{ $t('sections.contact.about') }}
            </nuxt-link>
            <a href="mailto:hello@nott.app" class="footer-link">{{ $t('sections.contact.contact_title') }}</a>
          </nav>
        </div>

        <div class="footer-links">
          <h4 class="footer-heading">{{ $t('sections.contact.legal') }}</h4>
          <nav class="link-list">
            <nuxt-link :to="localePath({ name: 'privacy_policy' })" class="footer-link">
              {{ $t('sections.contact.privacy_policy') }}
            </nuxt-link>
            <nuxt-link :to="localePath({ name: 'distance_sales_contract' })" class="footer-link">
              {{ $t('sections.contact.distance_sales_contract') }}
            </nuxt-link>
            <nuxt-link :to="localePath({ name: 'return_policy' })" class="footer-link">
              {{ $t('sections.contact.return_policy') }}
            </nuxt-link>
          </nav>
        </div>

        <div class="footer-links">
          <h4 class="footer-heading">{{ $t('sections.contact.contact_title') }}</h4>
          <div class="contact-info">
            <a href="mailto:hello@nott.app" class="contact-item">
              <v-icon size="18" color="rgba(255,255,255,0.5)">mdi-email-outline</v-icon>
              <span>hello@nott.app</span>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          <span>&copy; {{ currentYear }} {{ $t('sections.contact.copyright') }}</span>
        </div>
        <div class="footer-badges">
          <span class="eco-badge">
            <v-icon size="16" color="#c1ff02">mdi-leaf</v-icon>
            <span>{{ $t('sections.contact.eco_badge') }}</span>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-section {
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

// CTA Section
.cta-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-bottom: 80px;
}

.cta-card {
  position: relative;
  padding: 4rem;
  text-align: center;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    padding: 2.5rem 1.5rem;
  }
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-title {
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #c1ff02;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
}

.cta-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
}

.download-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.store-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(193, 255, 2, 0.3);
    transform: translateY(-2px);
  }

  .v-icon {
    color: #fff;
  }

  .store-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .store-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .store-name {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
  }

  &.web-btn {
    @media only screen and (max-width: 600px) {
      width: 100%;
      justify-content: center;
    }
  }
}

.cta-decoration {
  position: absolute;
  top: -100px;
  right: -100px;
  pointer-events: none;

  .decoration-blob {
    width: 300px;
    height: 300px;
    background: rgba(193, 255, 2, 0.15);
    border-radius: 50%;
    filter: blur(60px);
  }
}

// Footer Content
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
}

.footer-brand {
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;

  .brand-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
  }
}

.brand-tagline {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 300px;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
}

.social-links {
  display: flex;
  gap: 0.75rem;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
}

.social-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  transition: all 0.3s ease;

  .v-icon {
    color: rgba(255, 255, 255, 0.6);
    transition: color 0.3s ease;
  }

  &:hover {
    background: rgba(193, 255, 2, 0.1);
    border-color: rgba(193, 255, 2, 0.3);

    .v-icon {
      color: #c1ff02;
    }
  }
}

.footer-links {
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
}

.footer-heading {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
}

.link-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #c1ff02;
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media only screen and (max-width: 600px) {
    align-items: center;
  }
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #c1ff02;
  }
}

// Footer Bottom
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  flex-wrap: wrap;
  gap: 1rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
}

.copyright {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
}

.eco-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}
</style>
