'use strict';
import assert from 'assert';
import muGateway from '../lib';

describe('mu-gateway',  () => {
  it('should have createServer function', () => {
    assert.notStrictEqual(muGateway.createServer, undefined);
    assert.strictEqual(muGateway.createServer.length, 1);
  });
});
