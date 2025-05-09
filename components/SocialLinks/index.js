import links from './links';

const SocialLinks = () => (
  <div className="social-links">
    {links.map(({ icon: Icon, url, name }) => (
      <a
        key={name}
        data-name={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="hover:text-blue-500 transition-colors"
      >
        <Icon className="w-6 h-6" />
      </a>
    ))}
  </div>
);

export default SocialLinks;
