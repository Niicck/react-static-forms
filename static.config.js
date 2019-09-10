import axios from 'axios';

const forms = [
  {
    name: 'pet-adoption-form',
    id: 0,
    pages: [
      {
        heading: 'first-page',
        fields: [],
      },
      {
        heading: 'second-page',
        fields: [],
      },
      {
        heading: 'third-page',
        fields: [],
      },
    ],
  },
  {
    name: 'file-a-complaint-form',
    id: 1,
    pages: [
      {
        heading: 'first-page',
        fields: [],
      },
      {
        heading: 'second-page',
        fields: [],
      },
      {
        heading: 'third-page',
        fields: [],
      },
    ],
  },
];

export default {
  siteRoot: 'https://mysite.com',
  getRoutes: async () => {
    const routes = [
      {
        path: '/',
        template: 'src/components/Pages/Home',
      },
      {
        path: '404',
        template: 'src/components/Pages/NotFound',
      },
      {
        path: 'forms',
        template: 'src/components/Form/FormHome',
        getData: () => ({ forms }),
        children: forms.map((form) => ({
          path: form.name,
          template: 'src/components/Form/FormContainer',
          getData: async () => {
            form.pathPrefix = `/forms/${form.name}`;
            return form;
          }
        })),
      },
    ];

    return routes;
  },
  plugins: [
    require.resolve('react-static-plugin-react-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  webpack: (config, { stage }) => {
    // Include babel poyfill for IE 11 and below
    if (stage === 'prod') {
      config.entry = ['babel-polyfill', config.entry];
    } else if (stage === 'dev') {
      config.entry = ['babel-polyfill', ...config.entry];
    }
    return config;
  },
};
