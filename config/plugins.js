    // ~/strapi-aws-s3/backend/config/plugins.js
    
    module.exports = ({ env }) => ({
          upload: {
            config: {
              provider: 'aws-s3',
              providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET'),
                region: env('AWS_REGION'),
                params: {
                  //ACL: env('AWS_ACL', 'public-read'),
                  ACL: env('AWS_ACL', 'private'),
                  signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 60 * 60 * 24),
                  Bucket: env('AWS_BUCKET'),
                },
              },
              actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
              },
            },
          },
    });