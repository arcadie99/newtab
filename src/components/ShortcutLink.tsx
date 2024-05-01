// components/ShortcutLink.tsx
import React from 'react';
import Link from 'next/link';

interface ShortcutLinkProps {
  href: string;
  name: string;
}


const ShortcutLink: React.FC<ShortcutLinkProps> = ({ href, name }) => {
  return (
    <Link href={href} className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-4">
        {name}
    </Link>
  );
};

export default ShortcutLink;
