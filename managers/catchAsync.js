const catchAsync = fn => (req, res) => {
  fn(req, res, next).catch((err) => {
    res.status(500).json({
        message:err.message
    })
  });
  return fn
};

export default catchAsync;
