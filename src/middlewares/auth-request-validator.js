export const validateUserAuth = (req, res, next) => {
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Email and password are required",
      err: "Email and password are missing in the request",
    });
  }
  next();
};
