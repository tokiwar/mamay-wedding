module.exports = {
  apps: [
    {
      name: 'mamay-wedding',
      exec_mode: 'cluster',
      port: '39000',
      instances: 'max', // Or a number of instances
      script: './.output/server/index.mjs',
      args: 'start'
    }
  ]
}
