module.exports = {
  pathPrefix: '',
  siteUrl: 'https://pritudev.me',
  siteTitle: 'Pritu Dev',
  siteDescription: "Hey, i'm prit 16 years old self-taugh developer.",
  author: 'Pritu Dev',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://pritudev.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/pritudev',
    twitter: 'https://twitter.com/PrituDevYT',
    instagram: 'https://www.instagram.com/_pritu_004_/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || '',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    javascript: {
      name: 'javascript',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      color: '#90c53f',
    },
    typescript: {
      name: 'typescript',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      color: '#f9c646',
    },

  },
};
