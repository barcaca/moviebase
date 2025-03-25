'use client'
import Search from '@/components/search'
import logo from '@/public/logo.svg'
import { HeartIcon } from '@heroicons/react/16/solid'
import { FilmIcon, HomeIcon, TvIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type React from 'react'

const items = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Movies', href: '/movies', icon: FilmIcon },
  { name: 'Series', href: '/series', icon: TvIcon },
  { name: 'Favorites', href: '/favorites', icon: HeartIcon },
]
export const Sidebar = () => {
  return (
    <aside aria-label="Menu principal">
      <nav
        className="flex h-full min-h-0 flex-col"
        aria-label="Navegação principal"
      >
        <div className="flex flex-col gap-2 border-b p-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Página inicial"
          >
            <Image
              src={logo}
              alt="Logo do Moviebase - Voltar para página inicial"
              width={34}
              height={24}
              priority
            />
            <h1 className="truncate font-medium font-sans text-lg">
              Moviebase
            </h1>
          </Link>
          <div className="max-lg:hidden">
            <Search />
          </div>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto py-4">
          <ul className="flex flex-col gap-2" role="menubar">
            {items.map(item => (
              <SidebarItems key={item.name} item={item} />
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  )
}

const SidebarItems = ({
  item,
}: { item: { name: string; href: string; icon: React.ElementType } }) => {
  const pathname = usePathname()
  const isActive = item.href === pathname
  return (
    <li key={item.name} className="relative font-sans">
      {isActive && (
        <span
          className="absolute inset-y-0 w-0.5 rounded-full bg-primary"
          aria-hidden="true"
        />
      )}
      <Link
        href={item.href}
        className="flex w-full items-center gap-3 px-3 py-2.5 text-left font-medium text-base/6 text-muted-foreground hover:bg-primary/5 hover:text-primary aria-[current]:text-primary sm:py-2 sm:text-sm/5"
        aria-label={item.name}
        aria-current={isActive ? 'page' : undefined}
      >
        <item.icon className="size-5" aria-hidden="true" />
        {item.name}
      </Link>
    </li>
  )
}

export default Sidebar
