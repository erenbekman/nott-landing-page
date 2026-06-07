import Vue from 'vue';

// Reveal-on-scroll directive: adds `.in` when the element enters the viewport.
// Usage: <div class="reveal" v-reveal>
const observed = new WeakMap();

function makeObserver() {
  if (!('IntersectionObserver' in window)) return null;
  return new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
}

let io = null;

Vue.directive('reveal', {
  inserted(el) {
    el.classList.add('reveal');
    if (io === null) io = makeObserver();
    if (io) {
      io.observe(el);
      observed.set(el, true);
    } else {
      el.classList.add('in');
    }
  },
  unbind(el) {
    if (io && observed.has(el)) io.unobserve(el);
  },
});
