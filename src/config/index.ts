const config = {
  port: process.env.PORT,
  app_url: process.env.APP_RUL,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  otp: {
    secret: process.env.OTP_SECRET ?? "secret_otp",
    expiresIn: process.env.OTP_EXPIRES_IN,
  },
};

export default config;
