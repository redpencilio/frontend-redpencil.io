/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {
      environment: 'production'
    },
    'ssh-index': { // copy and deploy index.html
      username: 'root',
      host: 'rpio-dev.s.redpencil.io',
      port: 22,
      remoteDir: '/data/app-redpencil.io-dev/redpencil.io-app',
      allowOverwrite: true,
      agent: process.env.SSH_AUTH_SOCK
    },
    'rsync': { // copy assets
      host: 'root@rpio-dev.s.redpencil.io',
      port: 22,
      dest: '/data/app-redpencil.io-dev/redpencil.io-app',
      delete: false,
      arg:['--verbose']
    }
  };

  if (deployTarget === 'production') {
    //TODO:
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
