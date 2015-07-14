'use strict';
import httpProxy from 'http-proxy';
import http from 'http';

export default {
  createServer(option) {
    let proxy = httpProxy.createProxyServer(option);
    return http.createServer(function (req, res) {
      proxy.web(req, res);
    });
  }
};
