module.exports = {
    apps: [{
      name: 'practice-server',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-135-63-0.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/l.pem',
        ref: 'origin/master',
        repo: 'git@github.com:reperez120/practice-server.git',
        path: '/home/ubuntu/practice-server',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }