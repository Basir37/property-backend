module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a67054d2832023c4227dfd16f42b3018'),
  },
});
