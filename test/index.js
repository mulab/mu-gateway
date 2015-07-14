'use strict';
import assert from 'assert';
import muGateway from '../lib';

describe('mu-gateway',  () => {
  it('should have createServer function', () => {
    assert(muGateway.createServer !== undefined);
  });
});
