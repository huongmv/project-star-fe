import { createI18n, LocaleMessages, VueMessageType  } from 'vue-i18n'
import { LANGUAGE, VN } from '@/const/language'
const lang = localStorage.getItem(LANGUAGE) || VN
const i18n = createI18n({
    locale: lang,
    allowComposition: true,
    fallbackLocale: lang,
    messages: getAllFileLang(),
  })

  function getAllFileLang () {
    const locales = require.context("./src/lang", true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages:any = {}
    locales.keys().forEach(key => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)
      if (matched && matched.length > 1) {
        const locale = matched[1]
        messages[locale] = locales(key)
      }
    })
    return messages
  }

export default i18n
