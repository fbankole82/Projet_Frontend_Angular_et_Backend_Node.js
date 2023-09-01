  const express = require("express");
  const app = express();
  const bodyParser = require('body-parser');
  let data = require('./jobs');
   //console.log('jobs :', data.jobs)
   let initialJobs = data.jobs;
   let addedJobs = [];
    
   const getAllJobs = () => {
    return [...addedJobs, ...initialJobs];
   };

   

   app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type'); 
        next();

    });

    const api = express.Router();

    api.get('/jobs',(req, res) => {
      // res.json(data.jobs)
    //  console.log(getAllJobs());
      res.json(getAllJobs());
    });

    api.post('/jobs', (req, res) => {
      console.log('*******************');
      const job = req.body; // Récupérer les données du corps de la requête POST
    //  console.log(job);
     addedJobs = [job, ...addedJobs];
     console.log('total nb of jobs: ', getAllJobs().length);
      res.json(job);
    });


     api.get('/jobs/:id', (req, res) => {
         const id = parseInt(req.params.id, 10); // 1
         const job = getAllJobs().filter(j => j.id === id );
         if(job.length === 1) {
          res.json({success: true, job: job[0]});
         }  else {
            res.json({success: false, message: `pas de job ayant pour id ${id}`});
           }
     });

     app.use('/api', api);  // localhost: 4201/api/jobs

      const port = 4201;
      
      app.listen(port, () => {
        console.log(` listening on port ${port}`);

      });