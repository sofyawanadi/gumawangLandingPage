import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import LanguageSwitcher from './LanguageSwitcher'

const linkKeys = [
  { href: '#home', key: 'navbar.home', id: 'home' },
  { href: '#coffee', key: 'navbar.coffee', id: 'coffee' },
  { href: '#about', key: 'navbar.about', id: 'about' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    linkKeys.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream-100/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className={cn(
            'font-heading text-2xl font-bold transition-colors cursor-pointer',
            scrolled ? 'text-coffee-700' : 'text-white'
          )}
        >
          {t('navbar.brand')}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {linkKeys.map((link) => {
            const active = activeSection === link.id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    'relative text-sm transition-colors cursor-pointer',
                    scrolled
                      ? active
                        ? 'font-semibold text-coffee-700'
                        : 'font-medium text-dark-500 hover:text-coffee-700'
                      : active
                        ? 'font-semibold text-white'
                        : 'font-medium text-cream-300 hover:text-white'
                  )}
                >
                  {t(link.key)}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher scrolled={scrolled} />
          <button
            className="flex items-center justify-center rounded-md p-2 text-coffee-700 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t('common.toggleMenu')}
            aria-expanded={mobileOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-cream-200 bg-cream-100 md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {linkKeys.map((link) => {
              const active = activeSection === link.id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      'block cursor-pointer rounded-md px-3 py-3 text-sm transition-colors',
                      active
                        ? 'font-semibold text-coffee-700 bg-coffee-50'
                        : 'font-medium text-dark-500 hover:text-coffee-700 hover:bg-coffee-50'
                    )}
                  >
                    {t(link.key)}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
