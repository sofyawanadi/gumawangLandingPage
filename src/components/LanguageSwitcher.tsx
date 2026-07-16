import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

export default function LanguageSwitcher({ scrolled }: { scrolled?: boolean }) {
  const { i18n } = useTranslation()
  const isID = i18n.language?.startsWith('id')

  const toggle = () => {
    const next = isID ? 'en' : 'id'
    i18n.changeLanguage(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className={cn(
        'flex items-center gap-1 rounded-full border text-xs font-bold transition-colors cursor-pointer',
        scrolled
          ? 'border-coffee-300 bg-cream-50 text-coffee-700 hover:border-gold-600'
          : 'border-cream-400/50 bg-white/5 text-cream-100 hover:border-gold-500'
      )}
    >
      <span
        className={cn(
          'flex h-7 items-center justify-center px-2.5 py-0.5 rounded-full transition-colors',
          isID
            ? 'bg-gold-700 text-white'
            : scrolled
              ? 'text-dark-400'
              : 'text-cream-400/70'
        )}
      >
        ID
      </span>
      <span
        className={cn(
          'flex h-7 items-center justify-center px-2.5 py-0.5 rounded-full transition-colors',
          !isID
            ? 'bg-gold-700 text-white'
            : scrolled
              ? 'text-dark-400'
              : 'text-cream-400/70'
        )}
      >
        EN
      </span>
    </button>
  )
}
