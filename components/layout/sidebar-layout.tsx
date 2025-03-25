'use client'

import Search from '@/components/search'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Sidebar from '@/components/ui/sidebar'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const SidebarLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <Sheet open={showSidebar} onOpenChange={setShowSidebar}>
      {/* Sidebar Desktop */}
      <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">
        <Sidebar />
      </div>
      {/* Header Mobile */}
      <header className="flex items-center gap-2 px-4 lg:hidden">
        <div className="py-2.5">
          <SheetTrigger asChild>
            <Button
              onClick={() => setShowSidebar(true)}
              aria-label={showSidebar ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={showSidebar}
              aria-controls="mobile-sidebar"
              size={'icon'}
              variant={'ghost'}
              className="text-muted-foreground/80 hover:text-foreground"
            >
              <Bars3Icon className="size-5" />
              <span className="sr-only">
                {showSidebar ? 'Fechar menu' : 'Abrir menu'}
              </span>
            </Button>
          </SheetTrigger>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-1 items-center gap-4 py-2.5">
            <div className="-ml-4 flex-1" aria-hidden="true" />
            <Search />
          </div>
        </div>
      </header>
      {/* Mobile Sidebar */}
      <SheetContent
        id="mobile-sidebar"
        side="left"
        className="border-r-0 bg-transparent p-2"
        onCloseAutoFocus={e => e.preventDefault()}
      >
        <div className="flex h-full flex-col rounded-lg bg-card shadow-sm ring-1 ring-border dark:bg-zinc-900 dark:ring-white/10">
          <Sidebar />
        </div>
        <SheetHeader className="sr-only">
          <SheetTitle>Sidebar</SheetTitle>
          <SheetDescription>Displays the mobile sidebar.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarLayout
