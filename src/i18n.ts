import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import id from './locales/id/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      id: { translation: id },
    },
    fallbackLng: 'id',
    partialBundledLanguages: true,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

async function loadLanguage(lng: string) {
  const lang = lng.split('-')[0]
  if (lang === 'id' || i18n.hasResourceBundle(lang, 'translation')) return
  const resource = await import(`./locales/${lang}/translation.json`)
  i18n.addResourceBundle(lang, 'translation', resource.default, true, true)
}

loadLanguage(i18n.language)

i18n.on('languageChanged', (lng) => {
  loadLanguage(lng)
  document.documentElement.lang = lng
})

document.documentElement.lang = i18n.language

export default i18n
