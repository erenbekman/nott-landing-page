<template>
  <div>
    <nav class="nav" :class="{ scrolled: isScrolled }">
      <div class="wrap">
        <a class="logo" href="#top" aria-label="Nott home">
          <svg class="spark" viewBox="0 0 269 271" aria-hidden="true">
            <polygon points="268.96,97.58 268.96,173.39 200.05,173.39 234.51,233.07 168.85,270.97 134.4,211.3 99.94,270.97 34.29,233.07 68.74,173.39 -0.16,173.39 -0.16,97.58 68.74,97.58 34.29,37.9 99.94,0 134.4,59.68 168.85,0 234.51,37.9 200.05,97.58 268.96,97.58" />
          </svg>
          <span class="word">nott</span>
        </a>

        <div class="nav-right">
          <div class="nav-links">
            <a href="#why">{{ $t('navbar.why_nott') }}</a>
            <a href="#ambassador">{{ $t('navbar.ambassador') }}</a>
            <a href="#faq">{{ $t('navbar.faq') }}</a>
          </div>

          <button class="lang-pill" type="button" @click="changeLocale">
            <span>{{ currentLocale.code.toUpperCase() }}</span>
          </button>

          <JoinButton class="join-desktop" :download="true" :small="true" />

          <button class="nav-burger" type="button" aria-label="Menu" @click="sheetOpen = true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <div class="m-sheet" :class="{ open: sheetOpen }" @click.self="sheetOpen = false">
      <div class="m-panel">
        <a class="m-row" href="https://app.nott.app/" target="_blank" rel="noopener" @click="sheetOpen = false">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c1ff02" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19l7-14 7 14M8 14h8" /></svg>
          {{ $t('global.join') }}
          <button class="m-close" aria-label="Close" @click.stop.prevent="sheetOpen = false">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5f7ef" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </a>
        <a class="m-row" href="#why" @click="sheetOpen = false">{{ $t('navbar.why_nott') }}</a>
        <a class="m-row" href="#ambassador" @click="sheetOpen = false">{{ $t('navbar.ambassador') }}</a>
        <a class="m-row" href="#faq" @click="sheetOpen = false">{{ $t('navbar.faq') }}</a>
        <a class="m-row" href="https://apps.apple.com/app/nott-academy/id6449980598" target="_blank" rel="noopener" @click="sheetOpen = false">
          <svg viewBox="0 0 24 24" fill="#c1ff02"><path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9s-2-.9-3.4-.9C5.9 6.7 4 8 3 10.1c-1.8 3.1-.5 7.8 1.3 10.4.9 1.3 1.9 2.6 3.3 2.6 1.3 0 1.8-.8 3.4-.8s2 .8 3.4.8 2.2-1.2 3.1-2.5c1-1.4 1.4-2.8 1.4-2.9-.1 0-2.6-1-2.6-3.9zM13.9 4.2c.7-.9 1.2-2.1 1.1-3.3-1.1 0-2.4.7-3.2 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.5-.6 3.2-1.5z" /></svg>
          App Store
        </a>
        <a class="m-row" href="https://play.google.com/store/apps/details?id=academy.nott" target="_blank" rel="noopener" @click="sheetOpen = false">
          <svg viewBox="0 0 24 24" fill="#c1ff02"><path d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1L13 12.1v-.2L3.7 2.3l-.1.1zM16.3 15.2l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1-.1-.1zM15.9 15.6l-3.2-3.2L3.6 21.6c.4.4 1 .4 1.7.1l10.6-6.1zM15.9 8.4L5.3 2.3C4.6 2 4 2 3.6 2.4l9.1 9.1 3.2-3.1z" /></svg>
          Play Store
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    JoinButton: () => import("@/components/common/JoinButton")
  },
  data() {
    return {
      isScrolled: false,
      sheetOpen: false
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.find((i) => i.code === this.$i18n.locale);
    },
  },
  methods: {
    changeLocale() {
      const code = this.currentLocale.code === "en" ? "tr" : "en";
      this.$router.push(this.switchLocalePath(code));
      localStorage.setItem("locale", code);
      this.$vuetify.lang.current = code;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 40;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 76px;
  display: flex;
  align-items: center;
  transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;

  &.scrolled {
    background: rgba(10, 10, 15, 0.72);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--border);
  }

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    font-family: var(--font);
    font-weight: 600;
    font-size: 15px;
    color: var(--mut);
    transition: color 0.2s;

    &:hover {
      color: var(--text);
    }
  }
}

.lang-pill {
  display: flex;
  align-items: center;
  gap: 7px;
  height: 38px;
  padding: 0 13px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--mut);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: var(--border-strong);
    color: var(--text);
  }
}

.nav-burger {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  background: var(--surface);
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
    stroke: var(--neon);
  }
}

/* mobile sheet */
.m-sheet {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: none;
  background: rgba(8, 8, 12, 0.6);
  backdrop-filter: blur(8px);

  &.open {
    display: block;
  }
}

.m-panel {
  position: absolute;
  top: 14px;
  right: 14px;
  left: 14px;
  border-radius: var(--r-lg);
  padding: 14px;
  background: rgba(16, 16, 22, 0.96);
  border: 1px solid var(--border-strong);

  .m-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border-radius: 14px;
    font-family: var(--font);
    font-weight: 600;
    font-size: 16px;
    color: var(--text);

    svg {
      width: 22px;
      height: 22px;
    }

    & + .m-row {
      margin-top: 4px;
    }
  }

  .m-close {
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;
  }
}

@media (max-width: 960px) {
  .nav-links {
    display: none;
  }
}

@media (max-width: 680px) {
  .nav-burger {
    display: flex;
  }
  .lang-pill,
  .join-desktop {
    display: none;
  }
}
</style>
