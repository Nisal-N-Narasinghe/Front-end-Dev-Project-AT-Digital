export const NavLinks = ({ links }) => {
  return (
    <nav className='flex space-x-4'>
      {links.map((link, index) => (
        <a key={index} href={link.url} className='text-accent-color-2'>
          {link.name}
        </a>
      ))}
    </nav>
  );
};
