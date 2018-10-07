<template lang="pug">
div._
	article
		section.hero
			div.content-wrapper
				div.photo.icon
				div
					h2.header hello
					h4.header I'm Alexei Myshkouski
		section.about-me
			div.content-wrapper
				h5.header a few words about me
				p live in Minsk, Belarus
				p gratituded from #[a(href="http://bseu.by/" target="empty") Belarussian State Economic University], Finance & Banking
				p experienced in full-stack JavaScript development (#[em not] professional)
				p also you could ask me for detailed CV using
				div
					div.button-wrapper
						div.button.tg
							div.icon.tg
							span Telegram bot
					p or
					div.button-wrapper
						div.button.mail
							div.icon.mail
							span Contact by email
		section.about-my-page
			div.content-wrapper
				h5.header ...and about this page
				p this dead simple webpage was published for possible employees to make a first impression about my personal and professional background
				p if you are really interesting in my dev skill, you could #[nuxt-link(to="/about-my-page") see the description] of the tools I've used to build it
	footer
		div.content-wrapper
			div.contacts
				div
					div.tel.icon
					a(:href="links.tel") {{ contacts.tel }}
				div
					div.tg.icon
					a(:href="links.tg" target="empty") {{ contacts.tgNickname }}
				div
					div.mail.icon
					a(:href="links.mailto" target="empty") {{ contacts.email }}
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
        tgNickname: 'Myshkouski',
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
        cvByMail: '?body=Send me your CV.'
      }
    }
  }
}
</script>

<style scoped lang="sass" src="~/styles/index-page"></style>
