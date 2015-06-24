var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello world', function(done) {
<<<<<<< HEAD
    request(app).get('/').expect('hello baby', done);
=======
    request(app).get('/').expect('hello Jenkins', done);
>>>>>>> e00a79375e77128fb31cd206eaac07e312133588
  });
});
