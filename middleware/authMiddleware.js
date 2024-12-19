const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });
  const key="DHAMMABHUSHAN";
  console.log(key)
  try {
    const verified = jwt.verify(token,"DHAMMABHUSHAN");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token' });
  }
};
