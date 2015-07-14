'use strict';
import assert from 'assert';
import muGateway from '../lib';
import http from 'http';
import request from 'supertest';

describe('mu-gateway',  () => {
  it('should have createServer function', () => {
    assert.notStrictEqual(muGateway.createServer, undefined);
    assert.strictEqual(muGateway.createServer.length, 1);
  });
  context('createServer', () => {
    let proxy;
    let testServer;
    before(() => {
      testServer = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('success');
      });
      testServer.listen(9000, '127.0.0.1');
    });
    after(() => {
      if (proxy && !proxy.closed) {
        proxy.close();
      }
      if (!testServer.closed) {
        testServer.close();
      }
    });
    it('should create proxy with option target', (done) => {
      proxy = muGateway.createServer({target: 'http://127.0.0.1:9000'});
      request(proxy)
        .get('/')
        .expect(200)
        .expect((res) => {
          assert.equal(res.text, 'success');
        })
        .end(done);
    });
  });
});
