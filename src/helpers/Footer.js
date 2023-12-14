export const FooterTechnologiesList = () => {
  const technologies = [
    "ReactJS",
    "Gatsby",
    "NextJS",
    "NodeJS",
    "GraphQL",
    "Laravel",
  ];
  return (
    <ul>
      {technologies.map((tech, index) => (
        <li key={index} className='text-accent-color-2 my-2'>
          {tech}
        </li>
      ))}
    </ul>
  );
};

export const FooterServicesList = () => {
  const services = [
    "Social Media Marketing",
    "Web & Mobile App Development",
    "Data & Analytics",
    "Google Marketing Solutions",
    "Search Engine Optimization",
  ];
  return (
    <ul>
      {services.map((service, index) => (
        <li key={index} className='text-accent-color-2 my-2'>
          {service}
        </li>
      ))}
    </ul>
  );
};
