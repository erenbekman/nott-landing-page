<template>
  <section class="section sec-pad" id="why">
    <div class="wrap">
      <div class="sec-head center" v-reveal>
        <div class="eyebrow">{{ $t('sections.why.eyebrow') }}</div>
        <h2 class="display sec-title">{{ $t('sections.why.section_title') }} <span class="neon-text">Nott</span>?</h2>
        <div class="title-rule"></div>
        <p class="sec-sub">{{ $t('sections.why.section_subtitle') }}</p>
      </div>

      <div class="bento">
        <div class="bento-card glass" v-reveal>
          <span class="bento-ix">01</span>
          <div class="bento-deco"></div>
          <div class="bento-ic"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.7.7-1 1.2-1 2.5H9c0-1.3-.3-1.8-1-2.5A6 6 0 0 1 12 3z" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
          <div class="bento-label">{{ $t('sections.why.what.title') }}</div>
          <h3 class="bento-h">{{ $t('sections.why.what.subtitle') }}</h3>
          <p class="bento-p">{{ $t('sections.why.what.description') }}</p>
        </div>

        <div class="bento-card glass" v-reveal>
          <span class="bento-ix">02</span>
          <div class="bento-ic"><svg viewBox="0 0 24 24"><path d="M5 21c0-7 4-13 14-14-1 9-6 13-12 13M5 21c0-3 1-5 3-7" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
          <div class="bento-label">{{ $t('sections.why.why.title') }}</div>
          <h3 class="bento-h">{{ $t('sections.why.why.subtitle') }}</h3>
          <p class="bento-p">{{ $t('sections.why.why.description') }}</p>
          <div class="bento-stat"><span class="v">180K</span><span class="l">{{ $t('sections.why.why.trees_saved') }}</span></div>
        </div>

        <div class="bento-card bento-full glass" v-reveal>
          <div class="bento-full-copy">
            <span class="bento-ix">03</span>
            <div class="bento-ic"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c.6-3.5 3-5.2 6.5-5.2 1 0 1.9.1 2.7.4M16 10.5a2.8 2.8 0 1 0-2.4-4.2M15.5 20c.3-2.4 1.6-3.9 3.6-4.4" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
            <div class="bento-label">{{ $t('sections.why.who.title') }}</div>
            <h3 class="bento-h">{{ $t('sections.why.who.subtitle') }}</h3>
            <p class="bento-p">{{ $t('sections.why.who.description') }}</p>
          </div>
          <div class="who-right">
            <div class="ava-stack">
              <div class="a"><img :src="people.womanLaptop" alt="" /></div>
              <div class="a"><img :src="people.boyGirl" alt="" /></div>
              <div class="a"><img :src="people.womanSmiling" alt="" /></div>
              <div class="a more">10K+</div>
            </div>
            <div class="cap">{{ $t('sections.why.who.join_students') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      people: {
        womanLaptop: require('~/assets/images/people/3d-business-young-women-sitting-with-laptop-on-the-table.png'),
        boyGirl: require('~/assets/images/people/3d-business-boy-and-girl-standing-and-laughing.png'),
        womanSmiling: require('~/assets/images/people/3d-business-young-women-standing-and-smiling.png'),
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bento {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.bento-card {
  position: relative;
  border-radius: var(--r-lg);
  padding: 34px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s, box-shadow 0.4s;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    background: radial-gradient(circle at top right, rgba(193, 255, 2, 0.1), transparent 55%);
    transition: opacity 0.4s;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(193, 255, 2, 0.32);
    box-shadow: 0 26px 56px rgba(0, 0, 0, 0.46);

    &::after {
      opacity: 1;
    }
    .bento-ic {
      transform: scale(1.08) rotate(-4deg);
    }
    .bento-deco {
      transform: scale(1.18);
      opacity: 0.12;
    }
  }
}

.bento-full {
  grid-column: span 2;
  flex-direction: row;
  align-items: center;
  gap: 36px;
}

.bento-full-copy {
  flex: 1;
}

.bento-ix {
  position: absolute;
  top: 28px;
  right: 32px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--mut-2);
}

.bento-ic {
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: var(--neon-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  transition: transform 0.4s;

  svg {
    width: 36px;
    height: 36px;
    stroke: var(--neon);
    fill: none;
    stroke-width: 1.6;
  }
}

.bento-label {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--neon);
  margin-bottom: 10px;
}

.bento-h {
  font-family: var(--font);
  font-size: 1.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 14px;
}

.bento-p {
  font-size: 1rem;
  color: var(--mut);
  line-height: 1.65;
  max-width: 440px;
}

.bento-stat {
  margin-top: auto;
  padding-top: 22px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: baseline;
  gap: 12px;

  .v {
    font-family: var(--mono);
    font-size: 2.6rem;
    font-weight: 700;
    color: var(--neon);
    line-height: 1;
  }
  .l {
    font-size: 13px;
    color: var(--mut);
  }
}

.bento-deco {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: var(--neon);
  opacity: 0.07;
  transition: transform 0.5s, opacity 0.5s;
}

.who-right {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  .cap {
    font-size: 13.5px;
    color: var(--mut);
  }
}

.ava-stack {
  display: flex;

  .a {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -16px;
    overflow: hidden;
    background: linear-gradient(135deg, #243018, #11160c);

    &:first-child {
      margin-left: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    &.more {
      background: var(--neon);
      color: #0a0a0f;
      font-family: var(--mono);
      font-weight: 700;
      font-size: 14px;
    }
  }
}

@media (max-width: 768px) {
  .bento {
    grid-template-columns: 1fr;
  }
  .bento-full {
    grid-column: span 1;
    flex-direction: column;
    align-items: flex-start;
  }
  .who-right {
    flex-direction: row;
    align-self: stretch;
  }
}
</style>
