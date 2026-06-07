<template>
  <section class="section">
    <div class="wrap stats-band">
      <div class="stats-row">
        <div class="stat-tile glass" v-reveal>
          <div class="ic"><svg viewBox="0 0 24 24"><path d="M5 21c0-7 4-13 14-14-1 9-6 13-12 13M5 21c0-3 1-5 3-7" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
          <div><div class="v">180K+</div><div class="l">{{ $t('sections.supporter.stats.trees_saved') }}</div></div>
          <span class="ix">01</span>
        </div>
        <div class="stat-tile glass" v-reveal>
          <div class="ic"><svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7zM7 3H5v18h2M14 3v4h4" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
          <div><div class="v">10K+</div><div class="l">{{ $t('sections.supporter.stats.notes_shared') }}</div></div>
          <span class="ix">02</span>
        </div>
        <div class="stat-tile glass" v-reveal>
          <div class="ic"><svg viewBox="0 0 24 24"><path d="M12 4l10 5-10 5L2 9zM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
          <div><div class="v">50+</div><div class="l">{{ $t('sections.supporter.stats.universities') }}</div></div>
          <span class="ix">03</span>
        </div>
      </div>
    </div>

    <div class="wrap supporters" v-reveal>
      <div class="lbl">{{ $t('sections.supporter.title') }}</div>
      <div class="marquee">
        <div class="marquee-track">
          <a
            v-for="(s, i) in marqueeItems"
            :key="i"
            class="sup"
            :href="s.link"
            target="_blank"
            rel="noopener"
          >
            <img :src="s.img" :alt="s.name" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      supporters: [
        { name: 'ecording', img: require('~/assets/images/supporters/eccording.svg'), link: 'https://ecording.org/en/' },
        { name: 'İTÜ Çekirdek', img: require('~/assets/images/supporters/itu.svg'), link: 'https://itucekirdek.com/' },
        { name: 'AWS', img: require('~/assets/images/supporters/aws.svg'), link: 'https://aws.amazon.com/' },
      ]
    }
  },
  computed: {
    marqueeItems() {
      return [...this.supporters, ...this.supporters];
    }
  }
}
</script>

<style lang="scss" scoped>
.stats-band {
  padding: 30px 0 12px;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.stat-tile {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 26px;
  border-radius: var(--r);
  position: relative;
  overflow: hidden;

  .ic {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: var(--neon-dim);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg {
      width: 26px;
      height: 26px;
      stroke: var(--neon);
      fill: none;
      stroke-width: 1.8;
    }
  }
  .v {
    font-family: var(--mono);
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
  }
  .l {
    font-size: 13.5px;
    color: var(--mut);
    margin-top: 4px;
  }
  .ix {
    position: absolute;
    top: 12px;
    right: 16px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--mut-2);
  }
}

.supporters {
  padding: 56px 0 30px;
  text-align: center;

  .lbl {
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--mut-2);
  }
}

.marquee {
  margin-top: 28px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}

.marquee-track {
  display: flex;
  align-items: center;
  width: max-content;
  gap: 72px;
  animation: scroll 28s linear infinite;
}
.marquee:hover .marquee-track {
  animation-play-state: paused;
}

.sup {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  opacity: 0.5;
  filter: grayscale(100%) brightness(1.4);
  transition: opacity 0.3s, filter 0.3s;

  img {
    height: 42px;
    width: auto;
    object-fit: contain;
  }

  &:hover {
    opacity: 1;
    filter: grayscale(0%) brightness(1);
  }
}

@media (max-width: 768px) {
  .stats-row {
    grid-template-columns: 1fr;
  }
  .marquee-track {
    gap: 52px;
  }
  .sup img {
    height: 34px;
  }
}
</style>
