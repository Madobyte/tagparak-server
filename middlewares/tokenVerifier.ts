module.exports = (res, req, next) => {
  const authorization = res.headers.get('authorization');

  next();
};
