<template>
  <section class="section sec-pad amb" id="ambassador">
    <div class="wrap">
      <div class="amb-grid">
        <div class="amb-left" v-reveal>
          <div class="amb-badge">
            <svg viewBox="0 0 24 24"><path d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5L12 21l-5 .1 1-5.5-4-3.9 5.5-.8z" stroke-linejoin="round" /></svg>
            {{ $t('sections.envoy.badge') }}
          </div>
          <h2 class="display amb-h">
            {{ $t('sections.envoy.section_title') }} <span class="neon-text">{{ $t('sections.envoy.section_title_highlight') }}</span> {{ $t('sections.envoy.section_title_end') }}
          </h2>
          <p class="amb-p">{{ $t('sections.envoy.intro') }}</p>
          <div class="amb-benefits">
            <div class="amb-benefit">
              <div class="bx"><svg viewBox="0 0 24 24"><path d="M12 2v20M17 6.5c0-2-2.2-3-5-3s-5 1-5 3 2.2 2.5 5 3 5 1.3 5 3.3-2.2 3.2-5 3.2-5-1.2-5-3.2" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
              <div><div class="bt">{{ $t('sections.envoy.benefits.commission') }}</div><div class="bs">{{ $t('sections.envoy.benefit_desc.commission') }}</div></div>
            </div>
            <div class="amb-benefit">
              <div class="bx"><svg viewBox="0 0 24 24"><path d="M20 12v9H4v-9M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 2.5-2.5C10 6 12 7 12 7zM12 7h4.5A2.5 2.5 0 1 0 14 4.5C14 6 12 7 12 7z" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
              <div><div class="bt">{{ $t('sections.envoy.benefits.rewards') }}</div><div class="bs">{{ $t('sections.envoy.benefit_desc.rewards') }}</div></div>
            </div>
            <div class="amb-benefit">
              <div class="bx"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c.6-3.5 3-5.2 6.5-5.2 1 0 1.9.1 2.7.4M16 10.5a2.8 2.8 0 1 0-2.4-4.2M15.5 20c.3-2.4 1.6-3.9 3.6-4.4" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
              <div><div class="bt">{{ $t('sections.envoy.benefits.community') }}</div><div class="bs">{{ $t('sections.envoy.benefit_desc.community') }}</div></div>
            </div>
          </div>
        </div>

        <div class="form-card glass" v-reveal>
          <div class="glow"></div>
          <div class="form-pills">
            <div class="form-pill"><svg viewBox="0 0 24 24"><path d="M12 2v20M17 6.5c0-2-2.2-3-5-3s-5 1-5 3 2.2 2.5 5 3 5 1.3 5 3.3-2.2 3.2-5 3.2-5-1.2-5-3.2" stroke-linecap="round" stroke-linejoin="round" /></svg> {{ $t('sections.envoy.pill.commission') }}</div>
            <div class="form-pill"><svg viewBox="0 0 24 24"><path d="M20 12v9H4v-9M2 7h20v5H2zM12 22V7" stroke-linecap="round" stroke-linejoin="round" /></svg> {{ $t('sections.envoy.pill.rewards') }}</div>
            <div class="form-pill"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><path d="M2.5 20c.6-3.5 3-5.2 6.5-5.2" stroke-linecap="round" stroke-linejoin="round" /></svg> {{ $t('sections.envoy.pill.community') }}</div>
          </div>

          <form @submit.prevent="apply">
            <div class="field">
              <label>{{ $t('sections.envoy.label.name') }}</label>
              <input v-model="data.full_name" type="text" placeholder="Jane Doe" />
            </div>
            <div class="field">
              <label>{{ $t('sections.envoy.label.email') }}</label>
              <input v-model="data.email" type="email" placeholder="jane@university.edu" />
            </div>
            <div class="field">
              <label>{{ $t('sections.envoy.label.university') }}</label>
              <v-select
                v-model="data.selectedUniversity"
                :items="filteredUniversities"
                :placeholder="$t('sections.envoy.label.university')"
                :loading="isLoadingUniversity"
                class="nott-select"
                item-value="id"
                item-text="name"
                hide-details
                dense
                outlined
                clearable
                color="#c1ff02"
              >
                <template v-slot:prepend-item>
                  <v-text-field
                    v-model="search.university"
                    placeholder="Search university..."
                    class="pa-2"
                    hide-details
                    dense
                    outlined
                  />
                </template>
              </v-select>
            </div>
            <div class="field">
              <label>{{ $t('sections.envoy.label.video') }}</label>
              <v-file-input
                v-model="data.file"
                :placeholder="$t('sections.envoy.label.video')"
                :show-size="1000"
                class="nott-select nott-file"
                prepend-icon=""
                prepend-inner-icon="mdi-video-box"
                accept="video/*"
                color="#c1ff02"
                hide-details
                dense
                outlined
              >
                <template v-slot:selection="{ text }">
                  <span class="file-chip">{{ text.length > 22 ? text.substring(0, 12) + "…" + text.slice(-8) : text }}</span>
                </template>
              </v-file-input>
            </div>

            <button class="btn btn-neon form-submit" type="submit" :disabled="isEmptyForm || loading">
              <span>{{ loading ? '…' : $t('sections.envoy.form.apply_now') }}</span>
            </button>
          </form>

          <a
            class="watch-video"
            href="https://nott.ams3.cdn.digitaloceanspaces.com/nott-video.MP4"
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#c1ff02" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M10 9l5 3-5 3z" /></svg>
            {{ $t('sections.envoy.form.watch_video') }}
          </a>
        </div>
      </div>
    </div>
    <img class="amb-person" :src="ambPerson" alt="" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: {
        full_name: '',
        email: '',
        file: null,
        selectedUniversity: null,
      },
      search: {
        university: "",
      },
      loading: false,
      isLoadingUniversity: false,
      universities: [],
      ambPerson: require('~/assets/images/people/business-3d-three-young-women-with-phones.png'),
      rules: {
        email: (value) => {
          const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          return pattern.test(value);
        },
      }
    }
  },
  computed: {
    filteredUniversities() {
      const searchTerm = String(this.search.university).toLowerCase();
      return this.universities.filter((university) => university.name.toLowerCase().startsWith(searchTerm));
    },
    isEmptyForm() {
      return !this.data.full_name || !this.data.email || !this.data.selectedUniversity || !this.data.file || !this.rules.email(this.data.email);
    }
  },
  methods: {
    async getUniversity() {
      this.isLoadingUniversity = true;
      try {
        const res = await this.$axios.$get(`/public/university`);
        this.universities = res.data;
      } catch (err) {
        console.log('Failed to load universities:', err);
      } finally {
        this.isLoadingUniversity = false;
      }
    },
    async apply() {
      if (this.isEmptyForm) return;
      this.loading = true;
      const formData = new FormData();
      for (let key in this.data) {
        formData.append(key, this.data[key]);
      }
      formData.append('university', this.universities.find((university) => university.id === this.data.selectedUniversity).name);
      formData.append('university_id', this.data.selectedUniversity);

      await this.$axios.$post(`/public/envoy/apply`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(() => {
          this.loading = false;
          this.$notify({
            type: "success",
            text: this.$t('sections.envoy.form.success'),
          });
          this.data = {
            full_name: '',
            email: '',
            file: null,
            selectedUniversity: null,
          };
          this.search.university = "";
        }).catch((err) => {
          console.log('err :>> ', err);
          this.loading = false;
          this.$notify({
            type: "error",
            text: this.$t('sections.envoy.form.error'),
          });
        });
    }
  },
  async mounted() {
    await this.getUniversity();
  },
}
</script>

<style lang="scss" scoped>
.amb {
  position: relative;
}

.amb-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: center;
}

.amb-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  white-space: nowrap;
  border: 1px solid rgba(193, 255, 2, 0.3);
  background: var(--neon-dim);
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--neon);
  margin-bottom: 24px;

  svg {
    width: 16px;
    height: 16px;
    stroke: var(--neon);
    fill: none;
    stroke-width: 1.8;
  }
}

.amb-h {
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  margin-bottom: 18px;
}

.amb-p {
  font-size: 1.08rem;
  color: var(--mut);
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 420px;
}

.amb-benefits {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.amb-benefit {
  display: flex;
  align-items: center;
  gap: 14px;

  .bx {
    width: 46px;
    height: 46px;
    border-radius: 13px;
    background: var(--surface);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg {
      width: 22px;
      height: 22px;
      stroke: var(--neon);
      fill: none;
      stroke-width: 1.7;
    }
  }
  .bt {
    font-family: var(--font);
    font-weight: 700;
    font-size: 1.05rem;
  }
  .bs {
    font-size: 13.5px;
    color: var(--mut);
  }
}

.amb-person {
  position: absolute;
  right: -10px;
  bottom: -100px;
  width: 230px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.92;
  filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.5));
}

/* form card */
.form-card {
  position: relative;
  z-index: 2;
  border-radius: var(--r-lg);
  padding: 38px;
  overflow: hidden;

  .glow {
    position: absolute;
    top: -120px;
    right: -120px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(193, 255, 2, 0.14);
    filter: blur(60px);
    pointer-events: none;
  }
}

.form-pills {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  position: relative;
}

.form-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  font-size: 13px;
  font-weight: 600;
  font-family: var(--font);

  svg {
    width: 16px;
    height: 16px;
    stroke: var(--neon);
    fill: none;
    stroke-width: 1.8;
  }
}

.field {
  margin-bottom: 18px;
  position: relative;

  label {
    display: block;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--mut);
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 52px;
    border-radius: var(--r-sm);
    padding: 0 16px;
    font-family: var(--body);
    font-size: 15px;
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid var(--border);
    color: var(--text);
    transition: border-color 0.2s, box-shadow 0.2s;

    &::placeholder {
      color: var(--mut-2);
    }
    &:focus {
      outline: none;
      border-color: var(--neon);
      box-shadow: 0 0 0 3px rgba(193, 255, 2, 0.14);
    }
  }
}

.form-submit {
  width: 100%;
  justify-content: center;
  margin-top: 8px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
}

.watch-video {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
  font-family: var(--body);
  font-size: 14px;
  color: var(--mut);
  transition: color 0.2s;

  svg {
    width: 20px;
    height: 20px;
  }
  &:hover {
    color: var(--neon);
  }
}

/* Vuetify field overrides to match the design */
.nott-select {
  ::v-deep .v-input__slot {
    background: rgba(0, 0, 0, 0.25) !important;
    border-radius: var(--r-sm) !important;
    min-height: 52px;
    margin-bottom: 0;
  }
  ::v-deep fieldset {
    border-color: var(--border) !important;
  }
  ::v-deep .v-input--is-focused fieldset {
    border-color: var(--neon) !important;
  }
  ::v-deep .v-select__selection,
  ::v-deep input {
    font-family: var(--body) !important;
    font-size: 15px !important;
    color: var(--text) !important;
  }
  ::v-deep .v-input__icon .v-icon {
    color: var(--mut) !important;
  }
  ::v-deep .v-select__selection--comma {
    color: var(--text) !important;
  }
  ::v-deep .v-label {
    color: var(--mut-2) !important;
  }
}

.nott-file {
  ::v-deep .v-input__prepend-inner .v-icon {
    color: var(--neon) !important;
  }
}

.file-chip {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--neon);
}

@media (max-width: 960px) {
  .amb-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .amb-person {
    display: none;
  }
}

@media (max-width: 680px) {
  .form-card {
    padding: 26px;
  }
}
</style>
