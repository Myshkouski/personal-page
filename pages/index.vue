<template lang="pug">
div._
  article
    section.hero
      h2.header hello
      h4.header I'm Alexei Myshkouski
    section.contacts
      h5.header if you would contact me
      div.table
        span tel
        div
          a(:href="links.tel") {{ contacts.tel }}
        span tg
        div
          a(:href="links.tg" target="empty") {{ tgNickname }}
        span mail
        div
          a(:href="links.mailto" target="empty") {{ contacts.email }}
    section.about-me
      h5.header few words about me
      p gratituded from #[a(href="http://bseu.by/" target="empty") Belarussian State Economic University], Finance & Banking
      p experienced in full-stack JavaScript development (#[em not] professional)
      p also you could ask me for detailed CV using #[a(href="") Telegram bot] or #[a(:href="links.mailto + queries.cvByMail") email]
    section.about-my-page
      h5.header ...and about this page
      p this deadly simple webpage was published for possible employees to make a first impression about my personal and professional background
      p if you are really interesting in my dev skill, #[nuxt-link(to="/about-my-page") see the description] of the tools I've used to build it
  footer
    div.lang-selector
      div
        nuxt-link(to="/en") English
      div
        nuxt-link(to="/ru") Русский
</template>

<script>
export default {
  data() {
    return {
      contacts: {
        email: 'alexeimyshkouski@gmail.com',
        tgNickname: '@Myshkouski',
        tel: '+375 (29) 391-18-54'
      }
    }
  },

  computed: {
    links() {
      return {
        mailto: 'mailto://' + this.contacts.email,
        tg: 'https://t.me/' + this.contacts.tgNickname,
        tgBot: '',
        tel: 'tel://' + this.contacts.tel.replace(/[^+\d]/g, '')
      }
    },

    queries() {
      return {
        cvByMail: '?body=Please, send me your CV.'
      }
    }
  }
}
</script>

<style scoped lang="sass">
  section, footer
    padding: .5rem

  section
    text-align: center

    &.hero
      display: flex
      flex-flow: column
      justify-content: center
      height: 100vh
      min-height: 20rem
      max-height: 40rem
      background-color: #9ea

    &.contacts
      .table
        display: grid
        grid-template-columns: 25% 75%
        background-color: #fff

    // &.about-me
      p:not(:last-child)
        border-bottom: 1px solid #aaa

    .header, p
      margin: .5rem 0

    p
      padding: .5rem

  a
    text-decoration: underline

  footer
    display: grid
    background-color: #333
    color: #fff
</style>
