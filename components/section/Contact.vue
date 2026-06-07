<template>
  <footer class="foot">
    <div class="cta-wrap" v-reveal>
      <div class="cta-card glass">
        <div class="glow"></div>
        <div class="eyebrow cta-eyebrow">{{ $t('sections.contact.cta_eyebrow') }}</div>
        <h2 class="display cta-title">{{ $t('sections.contact.title') }}</h2>
        <p class="cta-sub">{{ $t('sections.contact.subtitle') }}</p>
        <div class="store-row">
          <a class="store-btn" href="https://apps.apple.com/app/nott-academy/id6449980598" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9s-2-.9-3.4-.9C5.9 6.7 4 8 3 10.1c-1.8 3.1-.5 7.8 1.3 10.4.9 1.3 1.9 2.6 3.3 2.6 1.3 0 1.8-.8 3.4-.8s2 .8 3.4.8 2.2-1.2 3.1-2.5c1-1.4 1.4-2.8 1.4-2.9-.1 0-2.6-1-2.6-3.9zM13.9 4.2c.7-.9 1.2-2.1 1.1-3.3-1.1 0-2.4.7-3.2 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.5-.6 3.2-1.5z" /></svg>
            <div class="st"><span class="a">{{ $t('sections.contact.download_appstore') }}</span><span class="b">{{ $t('sections.contact.appstore') }}</span></div>
          </a>
          <a class="store-btn" href="https://play.google.com/store/apps/details?id=academy.nott" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1L13 12.1v-.2L3.7 2.3zM16.3 15.2l-3.1-3.1v-.2l3.1-3.1 3.8 2.2c1 .6 1 1.6 0 2.2zM15.9 15.6l-3.2-3.2L3.6 21.6c.4.4 1 .4 1.7.1zM15.9 8.4L5.3 2.3C4.6 2 4 2 3.6 2.4l9.1 9.1z" /></svg>
            <div class="st"><span class="a">{{ $t('sections.contact.get_googleplay') }}</span><span class="b">{{ $t('sections.contact.googleplay') }}</span></div>
          </a>
          <a class="store-btn" href="https://app.nott.app/" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="#f5f7ef" stroke-width="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3z" /></svg>
            <div class="st"><span class="a">{{ $t('sections.contact.open_browser') }}</span><span class="b">{{ $t('sections.contact.browser') }}</span></div>
          </a>
        </div>
      </div>
    </div>

    <div class="wrap foot-inner">
      <div class="foot-grid">
        <div class="foot-brand">
          <a class="logo" href="#top">
            <svg class="spark" viewBox="0 0 269 271" aria-hidden="true"><polygon points="268.96,97.58 268.96,173.39 200.05,173.39 234.51,233.07 168.85,270.97 134.4,211.3 99.94,270.97 34.29,233.07 68.74,173.39 -0.16,173.39 -0.16,97.58 68.74,97.58 34.29,37.9 99.94,0 134.4,59.68 168.85,0 234.51,37.9 200.05,97.58 268.96,97.58" /></svg>
            <span class="word">nott</span>
          </a>
          <p class="foot-tag">{{ $t('sections.contact.brand_tagline') }}</p>
          <div class="socials">
            <a class="social" href="https://www.instagram.com/nott.app/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 3.7A6.1 6.1 0 1 0 18.1 12 6.1 6.1 0 0 0 12 5.9zm0 10A3.9 3.9 0 1 1 15.9 12 3.9 3.9 0 0 1 12 15.9zm6.4-10.1a1.4 1.4 0 1 1-1.4-1.4 1.4 1.4 0 0 1 1.4 1.4z" /></svg>
            </a>
            <a class="social" href="https://linkedin.com/company/nottco/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.5 2.5 0 0 1 4.98 3.5zM3 8.5h4V21H3zM9.5 8.5h3.8v1.7h.1a4.2 4.2 0 0 1 3.8-2.1c4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4z" /></svg>
            </a>
            <a class="social" href="mailto:hello@nott.app" aria-label="Email">
              <svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm.4 2L12 13l8.6-6z" /></svg>
            </a>
          </div>
        </div>

        <div class="foot-col">
          <div class="foot-h">{{ $t('sections.contact.company') }}</div>
          <div class="foot-links">
            <nuxt-link :to="localePath({ name: 'about' })">{{ $t('sections.contact.about') }}</nuxt-link>
            <a href="mailto:hello@nott.app">{{ $t('sections.contact.contact_title') }}</a>
          </div>
        </div>

        <div class="foot-col">
          <div class="foot-h">{{ $t('sections.contact.legal') }}</div>
          <div class="foot-links">
            <nuxt-link :to="localePath({ name: 'privacy_policy' })">{{ $t('sections.contact.privacy_policy') }}</nuxt-link>
            <nuxt-link :to="localePath({ name: 'distance_sales_contract' })">{{ $t('sections.contact.distance_sales_contract') }}</nuxt-link>
            <nuxt-link :to="localePath({ name: 'return_policy' })">{{ $t('sections.contact.return_policy') }}</nuxt-link>
          </div>
        </div>

        <div class="foot-col">
          <div class="foot-h">{{ $t('sections.contact.contact_title') }}</div>
          <div class="foot-links">
            <a href="mailto:hello@nott.app">hello@nott.app</a>
          </div>
        </div>
      </div>

      <div class="foot-bottom">
        <span class="cr">© {{ currentYear }} {{ $t('sections.contact.copyright') }}</span>
        <span class="eco-badge">
          <svg viewBox="0 0 24 24"><path d="M5 21c0-7 4-13 14-14-1 9-6 13-12 13M5 21c0-3 1-5 3-7" stroke-linecap="round" stroke-linejoin="round" /></svg>
          {{ $t('sections.contact.eco_badge') }}
        </span>
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
.foot {
  padding: 100px 0 36px;
  position: relative;
  z-index: 2;
}

.cta-wrap {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 28px;
}

.cta-card {
  position: relative;
  border-radius: 32px;
  padding: 72px 48px;
  text-align: center;
  overflow: hidden;

  .glow {
    position: absolute;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
    width: 460px;
    height: 320px;
    background: radial-gradient(circle, rgba(193, 255, 2, 0.2), transparent 66%);
    filter: blur(40px);
    pointer-events: none;
  }
}

.cta-eyebrow {
  margin-bottom: 16px;
}

.cta-title {
  font-size: clamp(2.6rem, 5.5vw, 4.4rem);
  color: var(--neon);
  position: relative;
}

.cta-sub {
  font-size: 1.2rem;
  color: var(--mut);
  margin: 14px 0 38px;
  position: relative;
}

.store-row {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  position: relative;
}

.store-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 22px;
  border-radius: 14px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  transition: transform 0.3s, border-color 0.3s, background 0.3s;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(193, 255, 2, 0.35);
    background: rgba(255, 255, 255, 0.09);
  }

  svg {
    width: 26px;
    height: 26px;
    fill: var(--text);
  }

  .st {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.2;

    .a {
      font-size: 11px;
      color: var(--mut);
      white-space: nowrap;
    }
    .b {
      font-family: var(--font);
      font-size: 16px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
}

.foot-inner {
  margin-top: 90px;
}

.foot-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  gap: 44px;
  padding-bottom: 44px;
  border-bottom: 1px solid var(--border);
}

.foot-brand {
  .logo {
    margin-bottom: 18px;
  }
}

.foot-tag {
  font-size: 14.5px;
  color: var(--mut);
  line-height: 1.6;
  max-width: 300px;
  margin-bottom: 22px;
}

.socials {
  display: flex;
  gap: 11px;
}

.social {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface);
  border: 1px solid var(--border);
  transition: background 0.3s, border-color 0.3s;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--mut);
    transition: fill 0.3s;
  }

  &:hover {
    background: var(--neon-dim);
    border-color: rgba(193, 255, 2, 0.3);

    svg {
      fill: var(--neon);
    }
  }
}

.foot-h {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text);
  margin-bottom: 20px;
}

.foot-links {
  display: flex;
  flex-direction: column;
  gap: 13px;

  a {
    font-size: 14.5px;
    color: var(--mut);
    transition: color 0.2s;
    width: fit-content;

    &:hover {
      color: var(--neon);
    }
  }
}

.foot-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  flex-wrap: wrap;
  gap: 14px;

  .cr {
    font-size: 13.5px;
    color: var(--mut-2);
  }
}

.eco-badge {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: var(--mut);

  svg {
    width: 16px;
    height: 16px;
    stroke: var(--neon);
    fill: none;
    stroke-width: 1.8;
  }
}

@media (max-width: 960px) {
  .foot-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 680px) {
  .cta-card {
    padding: 48px 24px;
  }
  .foot-grid {
    grid-template-columns: 1fr;
    gap: 36px;
    text-align: center;
  }
  .foot-brand .logo,
  .socials {
    justify-content: center;
  }
  .foot-tag {
    max-width: 100%;
  }
  .foot-links a {
    margin: 0 auto;
  }
  .foot-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
