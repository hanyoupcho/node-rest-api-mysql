/*jshint esversion: 6 */
const jwt = require('jwt-simple');

describe('Routes: Users', () => {
  const Users = app.db.models.Users;
  const jwtSecret = app.libs.config.jwtSecret;
  let token;
  beforeEach(Done => {
    Users
      .destroy({where: {}})
      .then(() => Users.create({
        name: 'example',
        email: 'example@example.com',
        password: '123abc!'
      }))
      .then(user => {
        token = jwt.encode({id: user.id}, jwtSecret);
        done();
      });
  });
  describe('GET /user', () => {
    describe('status 200', () => {
      it('should return an authenticated user', done => {
        request.get('/user')
          .set('Authorization', `JWT ${token}`)
          .expect(200)
          .end((err, res) => {
            expect(res.body.name).to.eql('example');
            expect(res.body.email).to.eql('example@example.com');
            done(err);
          }).catch((error) => done(err));
      });
    });
  });
  describe('DELETE /user', () => {
    describe('status 204', () => {
      it('should delete an authenticated user', done => {
        request.delete('/user')
          .set('Authorization', `JWT ${token}`)
          .expect(204)
          .end((err, res) => done(err))
          .catch((error) => done(err));
      });
    });
  });
  describe('POST /user', () => {
    describe('status 204', () => {
      it('should create a new user', done => {
        request.post('/user')
          .send({
            name: 'example2',
            email: 'example@example.com',
            password: '123abc!'
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body.name).to.eql('example2');
            expect(res.body.email).to.eql('example2@example.com');
            done(err);
          }).catch((error) => done(err));
      });
    });
  });
});
