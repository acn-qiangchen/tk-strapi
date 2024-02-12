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
                //process.env.AWS_BUCKET+'.s3.'+process.env.AWS_REGION +'.amazonaws.com',
                '*.amazonaws.com',
                '*.strapi.io',
              ],
              'media-src': [
                "'self'",
                'data:',
                'blob:',
                'dl.airtable.com',
                '*.amazonaws.com',
                '*.strapi.io',
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
