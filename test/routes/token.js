/*jshint esversion: 6 */
describe('Routes: Token', () => {
  const Users = app.db.models.Users;
  describe('POST /token', () => {
    beforeEach(done => {
        Users
          .destroy({where: {}})
          .then(() => Users.create({
            name: 'example',
            email: 'example@example.com',
            password: 'abc123!'
          }))
          .then(() => done());
    });
    describe('status 200', () => {
      it('should return authenticated user token', done => {
          request.post('/token')
            .send({
              email: 'example@example.com',
              password: 'abc123!'
            })
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.include.keys('token');
              done(err);
            });
      });
    });
    describe('status 401', () => {
      it('should throw error when password is incorrect', done => {
        request.post('/token')
          .send({
            email: 'example@example.com',
            password: 'wrong_password'
          })
          .expect(401)
          .end((err, res) => {
            done(err);
          });
      });
      it('should throw error when email not exist', done => {
        request.post('/token')
          .send({
            email: 'wrong@email.com',
            password: 'abc123!'
          })
          .expect(401)
          .end((err, res) => {
            done(err);
          });
      });
      it('should throw error when email and password are blank', done => {
        request.post('/token')
          .expect(401)
          .end((err, res) => {
            done(err);
          });
      });
    });
  });
});
