'use strict';
import httpProxy from 'http-proxy';

export default {
  createServer(option) {
    return httpProxy.createProxyServer(option);
  }
};
