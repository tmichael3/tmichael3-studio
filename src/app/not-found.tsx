"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Camera, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <Camera className="h-24 w-24 text-muted-foreground" />
              <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold">
                !
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">404</h1>
            <h2 className="text-xl font-semibold text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. The photo you&apos;re searching for might have been moved or doesn&apos;t exist.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Additional Links */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Explore our work:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                href="/portfolio" 
                className="text-primary hover:underline transition-colors"
              >
                Portfolio
              </Link>
              <Link 
                href="/services/portrait" 
                className="text-primary hover:underline transition-colors"
              >
                Portrait
              </Link>
              <Link 
                href="/services/wedding" 
                className="text-primary hover:underline transition-colors"
              >
                Wedding
              </Link>
              <Link 
                href="/about" 
                className="text-primary hover:underline transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}