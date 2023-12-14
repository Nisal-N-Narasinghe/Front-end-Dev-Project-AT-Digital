export const NavLinks = () => {
  const navigationLinks = [
    {
      name: "SERVICES",
      url: "#",
    },
    {
      name: "ABOUT US",
      url: "#",
    },
    {
      name: "CONTACT US",
      url: "#",
    },
    {
      name: "CAREERS",
      url: "#",
    },
  ];
  return (
    <nav className='flex space-x-4'>
      {navigationLinks.map((link, index) => (
        <a key={index} href={link.url} className='text-accent-color-2'>
          {link.name}
        </a>
      ))}
    </nav>
  );
};
