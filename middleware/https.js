const https = (req, res, next) => {
  // 'x-forwarded-proto' Heroku.
  if (
    !req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV !== "dev"
  ) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
};

export default https;
