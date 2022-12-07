setTimeout(() => {
  throw new Error('oops');
}, 300);
// this down
process.on('uncaughtException', () => {});

process.on('unhandledRejection', () => {});
