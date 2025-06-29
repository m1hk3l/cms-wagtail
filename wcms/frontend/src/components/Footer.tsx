import React from 'react';
interface SocialLinks {
  github?: string;
  linkedin?: string;
  mastodon?: string;
}

export const Footer = () => {
  const [links, setLinks] = React.useState<SocialLinks>({});

  React.useEffect(() => {
    const el = document.getElementById('footer');
    if (el) {
      const data = el.getAttribute('data-social');
      if (data) {
        try {
          setLinks(JSON.parse(data));
        } catch (e) {
          console.error('Invalid JSON in footer data-social', e);
        }
      }
    }
  }, []);

  return (
    <div className="bg-black text-white mt-auto py-6 text-sm text-center">
      <p>Built with Wagtail</p>
      {(links.github || links.linkedin || links.mastodon) && (
        <p className="mt-2 space-x-2">
          Follow me on:
          {links.github && (
            <a href={links.github} className="underline hover:text-gray-300">GitHub</a>
          )}
          {links.linkedin && (
            <a href={links.linkedin} className="underline hover:text-gray-300">LinkedIn</a>
          )}
          {links.mastodon && (
            <a href={links.mastodon} className="underline hover:text-gray-300">Mastodon</a>
          )}
        </p>
      )}
    </div>
  );
};
