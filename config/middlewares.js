module.exports = [
  'strapi::logger',
  'strapi::errors',
  //'strapi::security',
{
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': [
                "'self'",
                'data:',
                'blob:',
                'dl.airtable.com',
                'tink-strapi-20240126.s3.ap-northeast-1.amazonaws.com',
              ],
              'media-src': [
                "'self'",
                'data:',
                'blob:',
                'dl.airtable.com',
                'tink-strapi-20240126.s3.ap-northeast-1.amazonaws.com',
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
