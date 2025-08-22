"use client"

interface ViewMoreCardClientWrapperProps {
  children: React.ReactNode
  onClick: () => void
}

export function ViewMoreCardClientWrapper({ 
  children, 
  onClick 
}: ViewMoreCardClientWrapperProps) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  )
}
