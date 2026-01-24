<template>
  <div class="envoy-section section-padding">
    <div class="section-header">
      <div class="header-badge glass">
        <v-icon color="#c1ff02" size="20">mdi-star-circle</v-icon>
        <span>{{ $t('sections.envoy.badge') }}</span>
      </div>
      <h2 class="section-title">
        {{ $t('sections.envoy.section_title') }} <span class="gradient-text">{{ $t('sections.envoy.section_title_highlight') }}</span> {{ $t('sections.envoy.section_title_end') }}
      </h2>
      <p class="section-subtitle">
        {{ $t('sections.envoy.form.join_text') }}
      </p>
    </div>

    <div class="form-container">
      <div class="form-card glass-card">
        <div class="benefits-row">
          <div class="benefit-pill">
            <v-icon color="#c1ff02" size="18">mdi-cash-multiple</v-icon>
            <span>{{ $t('sections.envoy.benefits.commission') }}</span>
          </div>
          <div class="benefit-pill">
            <v-icon color="#c1ff02" size="18">mdi-gift</v-icon>
            <span>{{ $t('sections.envoy.benefits.rewards') }}</span>
          </div>
          <div class="benefit-pill">
            <v-icon color="#c1ff02" size="18">mdi-account-group</v-icon>
            <span>{{ $t('sections.envoy.benefits.community') }}</span>
          </div>
        </div>

        <div class="form-fields">
          <div class="input-group">
            <label class="input-label">{{ $t('sections.envoy.label.name') }}</label>
            <v-text-field
              v-model="data.full_name"
              :placeholder="$t('sections.envoy.label.name')"
              class="modern-input"
              color="#c1ff02"
              hide-details
              dense
              outlined
              :rules="[rules.required]"
            />
          </div>

          <div class="input-group">
            <label class="input-label">{{ $t('sections.envoy.label.email') }}</label>
            <v-text-field
              v-model="data.email"
              :placeholder="$t('sections.envoy.label.email')"
              class="modern-input"
              color="#c1ff02"
              hide-details
              dense
              outlined
              :rules="[rules.email]"
            />
          </div>

          <div class="input-group">
            <label class="input-label">{{ $t('sections.envoy.label.university') }}</label>
            <v-select
              v-model="data.selectedUniversity"
              :items="filteredUniversities"
              :placeholder="$t('sections.envoy.label.university')"
              :loading="isLoadingUniversity"
              :rules="[rules.required]"
              class="modern-input"
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

          <div class="input-group">
            <label class="input-label">{{ $t('sections.envoy.label.video') }}</label>
            <v-file-input
              v-model="data.file"
              :placeholder="$t('sections.envoy.label.video')"
              :show-size="1000"
              :rules="[rules.required]"
              class="modern-input"
              prepend-icon=""
              prepend-inner-icon="mdi-video-box"
              accept="video/*"
              color="#c1ff02"
              hide-details
              dense
              outlined
            >
              <template v-slot:selection="{ text }">
                <v-chip small class="file-chip" label>
                  <v-icon left small>mdi-video</v-icon>
                  {{ text.length > 20 ? text.substring(0, 10) + "..." + text.substring(text.length - 10, text.length) : text }}
                </v-chip>
              </template>
            </v-file-input>
          </div>

          <v-btn
            block
            large
            class="submit-btn btn-primary"
            @click="apply"
            :loading="loading"
            :disabled="isEmptyForm"
          >
            <v-icon left>mdi-rocket-launch</v-icon>
            {{ $t('sections.envoy.form.apply_now') }}
          </v-btn>
        </div>

        <div class="video-link">
          <a
            href="https://nott.ams3.cdn.digitaloceanspaces.com/nott-video.MP4"
            target="_blank"
            class="watch-video-btn"
          >
            <v-icon color="#c1ff02" size="20">mdi-play-circle</v-icon>
            <span>{{ $t('sections.envoy.form.watch_video') }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
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
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          return pattern.test(value) || 'Invalid e-mail.';
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
      return !this.data.full_name || !this.data.email || !this.data.selectedUniversity || !this.data.file || this.rules.email(this.data.email) === 'Invalid e-mail.';
    }
  },
  methods: {
    async getUniversity() {
      this.isLoadingUniversity = true;
      await this.$axios.$get(`/public/university`)
        .then((res) => {
          this.universities = res.data;
          this.isLoadingUniversity = false;
        });
    },
    async apply() {
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
        .then((res) => {
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
.envoy-section {
  max-width: 700px;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 2.2rem;
  }
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

.form-container {
  display: flex;
  justify-content: center;
}

.form-card {
  width: 100%;
  max-width: 550px;
  padding: 2.5rem;

  @media only screen and (max-width: 600px) {
    padding: 1.5rem;
  }
}

.benefits-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.benefit-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: rgba(193, 255, 2, 0.1);
  border: 1px solid rgba(193, 255, 2, 0.2);
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

.modern-input {
  &::v-deep .v-input__slot {
    background: rgba(255, 255, 255, 0.03) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
    border-radius: 12px !important;
    min-height: 48px;

    &:hover {
      border-color: rgba(193, 255, 2, 0.3) !important;
    }
  }

  &::v-deep .v-input__slot fieldset {
    border-color: rgba(255, 255, 255, 0.1) !important;
  }

  &::v-deep .v-input--is-focused .v-input__slot fieldset {
    border-color: #c1ff02 !important;
  }

  &::v-deep input,
  &::v-deep .v-select__selection {
    font-family: 'Inter', sans-serif !important;
    font-size: 0.95rem !important;
    color: #fff !important;
  }

  &::v-deep input::placeholder {
    color: rgba(255, 255, 255, 0.4) !important;
  }
}

.file-chip {
  background: rgba(193, 255, 2, 0.15) !important;
  color: #c1ff02 !important;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
}

.submit-btn {
  margin-top: 0.5rem;
  height: 52px !important;
}

.video-link {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.watch-video-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #c1ff02;
  }
}

// Mobile
@media only screen and (max-width: 600px) {
  .envoy-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .benefits-row {
    flex-direction: column;
    align-items: center;
  }

  .benefit-pill {
    width: 100%;
    justify-content: center;
  }
}
</style>
