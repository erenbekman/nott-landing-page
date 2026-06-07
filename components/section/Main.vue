<template>
  <header class="hero">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="wrap">
      <div class="hero-grid">
        <div class="hero-copy" v-reveal>
          <div class="hero-badge">
            <span class="dot"></span>
            <span>{{ $t('sections.main.badge') }}</span>
          </div>
          <h1 class="display hero-title">
            Think <span class="neon-text">green</span>,<br />
            Study <span class="stroke">smart</span>.
          </h1>
          <p class="hero-sub">{{ $t('sections.main.subtitle') }}</p>
          <div class="hero-cta">
            <a class="btn btn-neon" href="https://app.nott.app/" target="_blank" rel="noopener">
              <span>{{ $t('sections.main.get_started') }}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0f" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a class="btn btn-glass" href="#why">{{ $t('sections.main.learn_more') }}</a>
          </div>
          <div class="hero-stats">
            <div class="stat-chip"><span class="v">10K+</span><span class="l">{{ $t('sections.main.students') }}</span></div>
            <div class="stat-chip"><span class="v">4.8★</span><span class="l">{{ $t('sections.main.app_rating') }}</span></div>
            <div class="stat-chip"><span class="v">50+</span><span class="l">{{ $t('sections.main.universities') }}</span></div>
          </div>
        </div>

        <div class="hero-visual" v-reveal>
          <div class="phone-glow"></div>
          <div class="phone">
            <div class="phone-screen">
              <div class="app">
                <div class="app-top">
                  <div>
                    <div class="k">Tue · Week 11</div>
                    <div class="h">Feed.</div>
                  </div>
                  <div class="ava">E</div>
                </div>
                <div class="app-feat">
                  <div class="cover">
                    <div class="big">A</div>
                    <div class="t">Anatomy —<br />Upper Limb</div>
                  </div>
                  <div class="meta"><span class="s">@elif.k · MED 201</span><span class="p">₺45</span></div>
                </div>
                <div class="app-list">
                  <div class="app-row"><span class="n">01</span><span class="nm">Organic Chemistry II</span><span class="pr">₺29</span></div>
                  <div class="app-row"><span class="n">02</span><span class="nm">Microeconomics Final</span><span class="pr">₺60</span></div>
                  <div class="app-row"><span class="n">03</span><span class="nm">Differential Equations</span><span class="pr">₺35</span></div>
                </div>
                <div class="app-nav">
                  <span class="on"><svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7M5 10v9h14v-9" stroke-linecap="round" stroke-linejoin="round" /></svg></span>
                  <span><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3-3" stroke-linecap="round" /></svg></span>
                  <span class="plus"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke-linecap="round" /></svg></span>
                  <span><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-4 3z" stroke-linecap="round" stroke-linejoin="round" /></svg></span>
                  <span><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.2" /><path d="M5.5 20c.6-3.5 3.2-5.2 6.5-5.2s5.9 1.7 6.5 5.2" stroke-linecap="round" /></svg></span>
                </div>
              </div>
            </div>
          </div>
          <div class="float-card glass fc-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="#c1ff02" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c0-7 4-13 14-14-1 9-6 13-12 13M5 21c0-3 1-5 3-7" /></svg>
            {{ $t('sections.main.eco_friendly') }}
          </div>
          <div class="float-card glass fc-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#c1ff02" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7zM7 3H5v18h2M14 3v4h4" /></svg>
            <span><span class="num">10K+</span> {{ $t('sections.main.notes') }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding: 150px 0 90px;
  overflow: clip;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  z-index: 0;
}
.blob-1 {
  width: 560px;
  height: 560px;
  background: rgba(193, 255, 2, 0.22);
  top: -200px;
  right: -160px;
  animation: drift 22s ease-in-out infinite;
}
.blob-2 {
  width: 420px;
  height: 420px;
  background: rgba(193, 255, 2, 0.14);
  bottom: -160px;
  left: -140px;
  animation: drift 28s ease-in-out infinite reverse;
}

.hero-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 40px;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  height: 34px;
  padding: 0 16px;
  white-space: nowrap;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: var(--surface);
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--mut);
  margin-bottom: 26px;

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--neon);
    box-shadow: 0 0 10px var(--neon);
  }
}

.hero-title {
  font-size: clamp(3.2rem, 7vw, 6rem);

  .stroke {
    -webkit-text-stroke: 1.5px rgba(245, 247, 239, 0.55);
    color: transparent;
  }
}

.hero-sub {
  font-size: 1.18rem;
  color: var(--mut);
  line-height: 1.6;
  max-width: 460px;
  margin: 26px 0 34px;
}

.hero-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 42px;
}

.hero-stats {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.stat-chip {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 20px 14px 18px;
  border-radius: var(--r-sm);
  border-left: 2px solid var(--neon);
  background: var(--surface);

  .v {
    font-family: var(--mono);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text);
  }
  .l {
    font-size: 12.5px;
    color: var(--mut);
  }
}

/* hero visual */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 560px;
}

.phone-glow {
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(193, 255, 2, 0.32), transparent 68%);
  filter: blur(36px);
}

.phone {
  position: relative;
  width: 290px;
  height: 590px;
  border-radius: 46px;
  padding: 11px;
  background: linear-gradient(150deg, #181820, #101016);
  box-shadow: 0 50px 110px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.08);
  z-index: 2;
  animation: floaty 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);
    width: 90px;
    height: 26px;
    background: #0a0a0f;
    border-radius: 16px;
    z-index: 5;
  }
}

.phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 36px;
  overflow: hidden;
  background: linear-gradient(180deg, #0b0b10, #0e0e16);
  position: relative;
}

.app {
  padding: 52px 16px 0;
  height: 100%;
  font-family: var(--font);
}
.app-top {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);

  .k {
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.2em;
    color: var(--neon);
    text-transform: uppercase;
  }
  .h {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 0.9;
    margin-top: 3px;
  }
  .ava {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    background: var(--neon);
    color: #0a0a0f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
  }
}
.app-feat {
  margin-top: 13px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);

  .cover {
    height: 96px;
    background: linear-gradient(135deg, #1b2a16, #0d130a);
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 10px;

    .big {
      position: absolute;
      right: -8px;
      top: -22px;
      font-size: 110px;
      font-weight: 700;
      color: rgba(193, 255, 2, 0.08);
      line-height: 1;
    }
    .t {
      font-size: 15px;
      font-weight: 700;
      letter-spacing: -0.02em;
      z-index: 1;
      line-height: 1.05;
    }
  }
  .meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 11px;

    .s {
      font-family: var(--mono);
      font-size: 9.5px;
      color: var(--mut);
    }
    .p {
      background: var(--neon);
      color: #0a0a0f;
      font-family: var(--mono);
      font-weight: 700;
      font-size: 11px;
      padding: 4px 9px;
      border-radius: 6px;
    }
  }
}
.app-list {
  margin-top: 12px;
}
.app-row {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 9px 0;
  border-bottom: 1px solid var(--border);

  .n {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--neon);
    width: 16px;
  }
  .nm {
    flex: 1;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pr {
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 700;
  }
}
.app-nav {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 16px;
  height: 52px;
  border-radius: 18px;
  background: rgba(18, 18, 24, 0.8);
  border: 1px solid var(--border);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 20px;
    height: 20px;
    stroke: var(--mut-2);
    fill: none;
    stroke-width: 1.8;
  }
  .on svg {
    stroke: var(--neon);
  }
  .plus {
    width: 40px;
    height: 40px;
    border-radius: 13px;
    background: var(--neon);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 16px rgba(193, 255, 2, 0.5);
    margin-top: -8px;

    svg {
      stroke: #0a0a0f;
      stroke-width: 2.4;
    }
  }
}

.float-card {
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 14px;
  font-family: var(--font);
  font-weight: 600;
  font-size: 13.5px;

  svg {
    width: 22px;
    height: 22px;
  }

  &.fc-1 {
    top: 64px;
    right: 4px;
    animation: floaty 5s ease-in-out infinite;
  }
  &.fc-2 {
    bottom: 96px;
    left: 0;
    animation: floaty 6.5s ease-in-out infinite reverse;
  }
  .num {
    font-family: var(--mono);
    font-weight: 700;
    color: var(--neon);
  }
}

@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .hero-visual {
    min-height: 480px;
    order: -1;
  }
}

@media (max-width: 680px) {
  .hero {
    padding: 120px 0 70px;
  }
  .hero-cta {
    flex-direction: column;

    .btn {
      width: 100%;
      justify-content: center;
    }
  }
  .hero-visual {
    min-height: 440px;
  }
  .phone {
    width: 240px;
    height: 490px;
  }
  .float-card.fc-1 {
    right: -6px;
  }
}
</style>
