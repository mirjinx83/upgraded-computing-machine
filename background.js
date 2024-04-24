   const { exec } = require('child_process');

   // دستور لینوکسی که می‌خواهید اجرا کنید
   const command = 'ls cpu';

   exec(command, (error, stdout, stderr) => {
       if (error) {
           console.error(exec error: ${error});
           return;
       }
       console.log(stdout: ${stdout});
       console.error(stderr: ${stderr});
   });
