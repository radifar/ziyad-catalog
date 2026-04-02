import { navItems } from '@/lib/constants'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo / Site Title */}
          <div className="flex-shrink-0">
            <h1 className="text-sidebar-primary text-3xl font-sans font-bold text-foreground">
              ziyad<span className="text-chart-3">books</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation