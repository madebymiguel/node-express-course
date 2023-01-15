module.exports = function consoleLog(req, res, next) {
  console.log("From consoleLog MiddleWare!");
  next();
};
