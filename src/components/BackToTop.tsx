import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function BackToTop() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-200 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex size-12 items-center justify-center rounded-full bg-coffee-700 text-white shadow-lg transition-colors duration-200 hover:bg-coffee-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 cursor-pointer"
        aria-label={t('common.backToTop')}
      >
        <ArrowUp size={20} strokeWidth={2} />
      </button>
    </div>
  )
}
