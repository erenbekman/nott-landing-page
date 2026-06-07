<template>
  <section class="section sec-pad" id="faq">
    <div class="wrap">
      <div class="sec-head center" v-reveal>
        <div class="eyebrow">{{ $t('faq.eyebrow') }}</div>
        <h2 class="display sec-title">{{ $t('faq.title') }} <span class="neon-text">{{ $t('faq.subtitle') }}</span></h2>
        <div class="title-rule"></div>
      </div>

      <div class="faq-list">
        <div
          v-for="(item, i) in displayedItems"
          :key="item.id"
          class="faq-item glass"
          :class="{ open: openIndex === i }"
        >
          <div class="faq-q" @click="toggle(i)">
            <span class="qn">{{ pad(item.id) }}</span>
            <span class="qt">{{ item.title }}</span>
            <span class="qi">
              <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M12 5v14M5 12h14" /></svg>
            </span>
          </div>
          <transition
            @enter="onEnter"
            @after-enter="onAfterEnter"
            @leave="onLeave"
          >
            <div v-if="openIndex === i" class="faq-a">
              <div class="inner">{{ item.subtitle }}</div>
            </div>
          </transition>
        </div>
      </div>

      <div class="faq-more">
        <button class="btn btn-glass" type="button" @click="toggleShowAll">
          {{ showAll ? $t('faq.show_less') : $t('faq.show_more') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      openIndex: null,
      showAll: false,
      collapsedCount: 5,
    }
  },
  computed: {
    items() {
      const out = [];
      for (let i = 1; i <= 11; i++) {
        out.push({ id: i, title: this.$t(`faq.${i}.title`), subtitle: this.$t(`faq.${i}.subtitle`) });
      }
      return out;
    },
    displayedItems() {
      return this.showAll ? this.items : this.items.slice(0, this.collapsedCount);
    }
  },
  methods: {
    pad(n) {
      return String(n).padStart(2, '0');
    },
    toggle(i) {
      this.openIndex = this.openIndex === i ? null : i;
    },
    toggleShowAll() {
      this.showAll = !this.showAll;
      this.openIndex = null;
    },
    onEnter(el) {
      el.style.maxHeight = '0px';
      // force reflow then expand to content height
      el.offsetHeight;
      el.style.maxHeight = el.scrollHeight + 'px';
    },
    onAfterEnter(el) {
      el.style.maxHeight = 'none';
    },
    onLeave(el) {
      el.style.maxHeight = el.scrollHeight + 'px';
      el.offsetHeight;
      el.style.maxHeight = '0px';
    }
  }
}
</script>

<style lang="scss" scoped>
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 860px;
  margin: 0 auto;
}

.faq-item {
  border-radius: var(--r);
  overflow: hidden;
  transition: border-color 0.3s;

  &.open {
    border-color: rgba(193, 255, 2, 0.3);
  }
}

.faq-q {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 24px 26px;
  cursor: pointer;
  user-select: none;

  .qn {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--neon);
    flex-shrink: 0;
  }
  .qt {
    flex: 1;
    font-family: var(--font);
    font-weight: 600;
    font-size: 1.12rem;
  }
  .qi {
    width: 30px;
    height: 30px;
    border-radius: 9px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    transition: background 0.3s, transform 0.3s;

    svg {
      width: 16px;
      height: 16px;
      stroke: var(--neon);
      stroke-width: 2.2;
      transition: transform 0.3s;
    }
  }
}

.faq-item.open {
  .qi {
    background: var(--neon-dim);

    svg {
      transform: rotate(45deg);
    }
  }
}

.faq-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  .inner {
    padding: 0 26px 24px 64px;
    color: var(--mut);
    font-size: 1rem;
    line-height: 1.65;
  }
}

.faq-more {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

@media (max-width: 680px) {
  .faq-q {
    padding: 20px;
    gap: 14px;

    .qt {
      font-size: 1rem;
    }
  }
  .faq-a .inner {
    padding: 0 20px 20px 50px;
    font-size: 0.95rem;
  }
}
</style>
