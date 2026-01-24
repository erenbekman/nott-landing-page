<template>
  <div class="landing-page">
    <MainSection />
    <SupporterSection />
    <WhySection />
    <EnvoySection />
    <FaqSection />
    <ContactSection />
  </div>
</template>

<script>
export default {
  components: {
    MainSection: () => import("@/components/section/Main"),
    ContactSection: () => import("@/components/section/Contact"),
    SupporterSection: () => import("@/components/section/Supporter"),
    WhySection: () => import("@/components/section/Why"),
    FaqSection: () => import("@/components/section/Faq"),
    EnvoySection: () => import("@/components/section/Envoy"),
  },
  head() {
    const title = `Nott - Think Green, Study Smart`;
    const description = `Buy and sell notes with Nott. Join thousands of students saving money and boosting grades with sustainable digital education.`;
    return {
      title,
      meta: [
        { hid: "description", name: "description", content: description },
        { hid: "og:title", property: "og:title", content: title },
        { hid: "og:description", property: "og:description", content: description },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
.landing-page {
  background-color: #0a0a0f;
}
</style>
