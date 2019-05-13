module.exports = function (req, res, next) {
    sleep(2000).then(() => {
      if (req.method === 'POST') {
        req.method = 'GET'
        req.query = req.body
      }
      next()
     });
  }


  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }