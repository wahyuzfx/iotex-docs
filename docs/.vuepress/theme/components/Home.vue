<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <img
        class="logo"
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      />

      <h1 v-if="data.heroText !== null" id="main-title">
        {{ data.heroText || $title || "Hello" }}
      </h1>

      <p v-if="data.taglines !== null" class="description">
        <span v-for="(tagline, index) in data.taglines" :key="index">
          {{ tagline.text }}<br />
        </span>
      </p>

      <div v-if="data.titleCards && data.titleCards.length" class="titleCards">
        <div
          v-for="(titleCard, index) in data.titleCards"
          :key="index"
          class="titleCard"
        >
          <h4>{{ titleCard.title }}</h4>
          <ul>
            <div
              v-if="titleCard.links && titleCard.links.length"
              class="titleCardsLink"
            >
              <div
                v-for="(link, index) in titleCard.links"
                :key="index"
                class="titleCardLink"
              >
                <li>
                  <NavLink
                    v-if="link.url"
                    :item="{ link: link.url, text: link.text }"
                  />
                  <span v-else>{{ link.text }}</span>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <p v-if="data.actionText && data.actionLink" class="action">
        <NavLink class="action-button" :item="actionLink" />
      </p>
    </header>

    <div v-if="data.features && data.features.length" class="features">
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
        <NavLink
          class="action-button-mini"
          :item="{ link: feature.featureLink, text: feature.linkText }"
        />
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div v-if="data.footer" class="footer">
      <a :href="data.footerLink" target="_blank">{{ data.footer }}</a>
    </div>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

export default {
  name: "Home",

  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .action-button-mini
      display inline-block
      font-size .9em
      color #ffffff
      background-color $accentColor
      padding .3rem 1rem
      border-radius 2px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
    path, polygon
      color #ffffff
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 50rem
      font-weight 400
      font-size 1.6rem
      line-height 1.5
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 5%)
  .bc-layers
    display flex

  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .titleCards
    margin-top .5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content center
  .titleCard
    margin 1rem
    padding 1rem 3rem 1rem 1rem
    text-align left
    border 3px solid $accentColor
    border-radius 8px
    h4
      margin-left 1rem
      font-size 1rem
      font-weight 700
      color #5f5f5f
    ul
      font-size 0.85rem
      font-weight 500
      list-style: none;
    li::before
      padding-right .5rem
      content: "\203A";
      font-size 1.2rem
      line-height 2rem
      color $accentColor
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
