'use client';


import ShortcutLink from '@/components/ShortcutLink';
import SearchComponent from '@/components/SearchComponent';
import SystemProcesses from '@/components/SystemProcesses';


const services = [
  {
    name: 'JSON Formatter 0',
    href: 'href',
    icon: 'icon',
  },
  {
    name: 'JSON Formatter 1',
    href: 'href',
    icon: 'icon',
  },
  {
    name: 'JSON Formatter 2',
    href: 'href',
    icon: 'icon',
  },
  {
    name: 'JSON Formatter 3',
    href: 'href',
    icon: 'icon',
  },
  {
    name: 'JSON Formatter 4',
    href: 'href',
    icon: 'icon',
  },
]

const links = [
  {
    name: 'JSON Formatter 0',
    href: 'href',
    icon: 'icon',
  },
  {
    name: 'JSON Formatter 1',
    href: 'href',
    icon: 'icon',
  },
  {
    name: 'JSON Formatter 2',
    href: 'href',
    icon: 'icon',
  },
  {
    name: 'JSON Formatter 3',
    href: 'href',
    icon: 'icon',
  },
  {
    name: 'JSON Formatter 4',
    href: 'href',
    icon: 'icon',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center min-h-screen" style={{ backgroundImage: "url('/fantasy-tree-night-sky.jpg')" }}>

      <div className="items-center p-4 pt-8">
       <SearchComponent />
       
       <SystemProcesses />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
        {services.map((link, index) => (
          <ShortcutLink key={index} href={link.href} name={link.name} />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4 pb-8">
        {links.map((link, index) => (
          <ShortcutLink key={index} href={link.href} name={link.name} />
        ))}
      </div>

    </main>
  );
}
