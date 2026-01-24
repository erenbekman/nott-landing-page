<template>
    <v-app-bar
        fixed
        class="nav-bar"
        :class="{ 'nav-scrolled': isScrolled }"
        elevation="0"
    >
        <v-menu bottom offset-y transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" class="nav-bar-nav-icon">
                    <v-icon color="#c1ff02">mdi-menu</v-icon>
                </v-btn>
            </template>

            <v-card class="mobile-menu glass">
                <v-list nav dense class="pa-2">
                    <v-list-item class="mobile-menu-item" href="https://app.nott.app/" target="_blank">
                        <v-icon left color="#c1ff02" size="20">mdi-rocket-launch</v-icon>
                        <span>{{ $t('global.join') }}</span>
                    </v-list-item>
                    <v-list-item class="mobile-menu-item" href="https://apps.apple.com/app/nott-academy/id6449980598" target="_blank">
                        <v-icon left color="#c1ff02" size="20">mdi-apple</v-icon>
                        <span>App Store</span>
                    </v-list-item>
                    <v-list-item class="mobile-menu-item" href="https://play.google.com/store/apps/details?id=academy.nott" target="_blank">
                        <v-icon left color="#c1ff02" size="20">mdi-google-play</v-icon>
                        <span>Play Store</span>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>

        <nuxt-link :to="localePath({ name: 'index'})" class="logo-link">
            <v-img
                :src="require('~/assets/images/logo/icon_dark.svg')"
                contain
                width="42"
                height="42"
                class="logo-img"
            />
        </nuxt-link>

        <v-spacer />

        <v-btn
            icon
            small
            @click="changeLocale"
            class="lang-btn mr-2"
        >
            <v-avatar tile :size="22">
                <v-img
                    class="flag"
                    :src="require(`~/assets/images/flags/${currentLocale.code}.svg`)"
                />
            </v-avatar>
        </v-btn>

        <JoinButton class="join-btn" :download="true" />
    </v-app-bar>
</template>

<script>
    export default {
        components:{
            JoinButton: () => import("@/components/common/JoinButton")
        },
        data() {
            return {
                isScrolled: false
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
                this.isScrolled = window.scrollY > 50;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style lang="scss" scoped>
.nav-bar {
    background: transparent !important;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    padding: 1rem 2rem;
    min-height: 72px !important;
    height: 72px !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid transparent;

    &.nav-scrolled {
        background: rgba(10, 10, 15, 0.8) !important;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
}

.logo-link {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
}

.logo-img {
    margin-left: 1rem;
}

.nav-bar-nav-icon {
    display: none;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(193, 255, 2, 0.1) !important;
    }
}

.lang-btn {
    transition: all 0.3s ease;
    border-radius: 50%;

    &:hover {
        background: rgba(255, 255, 255, 0.1) !important;
        transform: scale(1.1);
    }

    .flag {
        border-radius: 4px;
    }
}

.mobile-menu {
    background: rgba(15, 15, 25, 0.95) !important;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px !important;
    overflow: hidden;
    min-width: 200px;
}

.mobile-menu-item {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-radius: 12px;
    margin: 4px 0;
    transition: all 0.2s ease;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);

    &:hover {
        background: rgba(193, 255, 2, 0.1);
        color: #c1ff02;
    }

    span {
        margin-left: 8px;
    }
}

.join-btn {
    margin-left: 0.5rem;
}

// Desktop styles
@media only screen and (min-width: 601px) {
    .nav-bar {
        padding: 1rem 4rem;
        min-height: 80px !important;
        height: 80px !important;
    }

    .logo-img {
        margin-left: 2rem;
    }
}

// Mobile styles
@media only screen and (max-width: 600px) {
    .nav-bar-nav-icon {
        display: flex;
    }

    .nav-bar {
        padding: 0.5rem 1rem;

        &.nav-scrolled {
            padding: 0.5rem 1rem;
        }
    }

    .logo-link {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .logo-img {
        margin-left: 0;
        width: 36px !important;
        height: 36px !important;
    }

    .join-btn {
        display: none;
    }

    .lang-btn {
        margin-right: 0 !important;
    }
}
</style>
