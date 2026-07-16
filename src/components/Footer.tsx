import { Mail, Phone, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const navLinks = [
  { labelKey: 'navbar.home', href: '#home' },
  { labelKey: 'navbar.coffee', href: '#coffee' },
  { labelKey: 'navbar.about', href: '#about' },
]

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer id="contact" className="bg-dark-700 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">
              {t('footer.brand')}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-300">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-white">
              {t('footer.navigation')}
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="cursor-pointer text-sm text-cream-300 transition-colors hover:text-gold-500"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-white">
              {t('footer.contact')}
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-cream-300">
                <Mail size={16} className="shrink-0" />
                hello@gumawangcoffee.com
              </li>
              <li className="flex items-center gap-2 text-sm text-cream-300">
                <Phone size={16} className="shrink-0" />
                +62 812 3456 7890
              </li>
              <li className="flex items-center gap-2 text-sm text-cream-300">
                <InstagramIcon size={16} />
                @gumawangcoffee
              </li>
              <li className="flex items-center gap-2 text-sm text-cream-300">
                <MessageCircle size={16} className="shrink-0" />
                {t('footer.whatsapp')}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-dark-600 pt-8 text-center text-sm text-cream-400">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
