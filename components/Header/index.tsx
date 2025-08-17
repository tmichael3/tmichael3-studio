"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Menu, Moon, Sun, ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait until mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { 
      label: 'Services',
      submenu: [
        { href: '/services/portrait', label: 'Portrait' },
        { href: '/services/wedding', label: 'Wedding' },
        { href: '/services/commercial', label: 'Commercial' },
      ]
    },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="border-b bg-background">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              tmichael3<span className='font-extralight'>.studio</span>
            </Link>

            {/* Desktop Navigation + Controls */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Navigation Links */}
              <nav className="flex items-center space-x-6">
                {navItems.map((item) => (
                  item.submenu ? (
                    <div key={item.label} className="relative group">
                      <div className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary cursor-pointer px-2 py-1">
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </div>
                      <div className="absolute top-full left-0 mt-1 w-48 bg-popover border rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                suppressHydrationWarning
              >
                {mounted && theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                suppressHydrationWarning
              >
                {mounted && theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b bg-background">
            <nav className="container mx-auto">
              <div className="divide-y divide-border">
                {navItems.map((item) => (
                  item.submenu ? (
                    <div key={item.label}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex w-full items-center justify-center px-4 py-4 text-sm font-medium hover:bg-accent transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronRight 
                          className={cn(
                            "ml-2 h-4 w-4 transition-transform",
                            isServicesOpen && "rotate-90"
                          )} 
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="bg-muted/50">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="flex items-center justify-center px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors border-t border-border/50"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-center px-4 py-4 text-sm font-medium hover:bg-accent transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}