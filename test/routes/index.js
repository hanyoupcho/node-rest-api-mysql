/*jshint esversion: 6 */
describe('Routes: Index', () => {
  describe('GET /', () => {
    it('should return the API status', done => {
      request.get('/')
        .expect(200)
        .end((err, res) => {
          const expected = {
            status: 'NaughtyRestAPI'
          };
          expect(res.body).to.eql(expected);
          done(err);
        });
    });
  });
});
