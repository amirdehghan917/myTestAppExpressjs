export default () => (req, res, next) => {
  switch (true) {
    case req.body.c == null:
      next();
      break;
    case Number(req.body.c) % 2 == 0:
      res.json({
        "C is odd, go fuck your self bae!": null,
      });
      break;

    default:
      next();
      break;
  }
  // if (Number(req.query.c)%2 == 0){}
};
