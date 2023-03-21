const myQueue = require('./jobQueue');

myQueue.process('myQueue', async (job) => {
  
    console.log(job)
  
//   switch(job.data.type) {
//     case 'register':
//     console.log(job.data)
//       break;
//     case 'reset-password':
//         console.log(job.data)
     
//       break;
//     default:
//       console.log('nenhum tipo encontrado');
//   }
});
