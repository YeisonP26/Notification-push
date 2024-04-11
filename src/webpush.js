const webpush = require('web-push')

webpush.setVapidDetails('mailto:pyeisonandrez@gmail.com', 
process.env.PUBLIC_VAPID_KEY, 
process.env.PRIVATE_VAPID-KEY
);

module.exports = webpush;