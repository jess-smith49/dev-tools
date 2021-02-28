// linking json web token middleware
const jwt = require('jsonwebtoken');

// secret verifaction phrase
const secret = 'mysecret';
// time limitation for session. 
const expiration = '2h';

// exporting verifaction 
module.exports = {
    authMiddleware: function({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
    
        // verifying token. 
        if (req.headers.authorization) {
          token = token
            .split(' ')
            .pop()
            .trim();
        }
          // verifying token existance. 
        if (!token) {
          return req;
        }
          // testing token 
        try {
          const { data } = jwt.verify(token, secret, { maxAge: expiration });
          req.user = data;
        } catch {
          console.log('Invalid token');
        }
    
        return req;
      },
      // returning token with attached to user session. 
      signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };
    
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
      }
}