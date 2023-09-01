

      import { Injectable } from '@angular/core';
      import { HttpClient } from '@angular/common/http';
      import { Subject, Observable, pipe } from 'rxjs';
      import { map } from 'rxjs/operators';
      
      @Injectable({
        providedIn: 'root'
      })
      export class JobService {
        initialJobs = [];
        jobs = []; 
        jobsSuject = new Subject(); // Specify the type for the Subject
      
        BASE_URL = 'http://localhost:4201/';
      
        constructor(private http: HttpClient) { }
      
        getJobs() { 
          return this.http.get(this.BASE_URL + 'api/jobs')
            .pipe(
              map((res: any) => res)
            );
        }

        addJob(jobData) { 
        
          jobData.id = Date.now();
      //this.jobs = [jobData, ...this.jobs];
      //return this.jobsSuject.next(jobData);

          return this.http.post(this.BASE_URL + 'api/jobs', jobData)
            .pipe(
              map(res => {
                console.log(res);
                this.jobsSuject.next(jobData);
                return res; // Return the response from the HTTP post request
              })
            );
        }


        // getJob(id) {
        //   return this.http.get(this.BASE_URL + `api/jobs/${id}`)
        //                   .pipe(
        //                  map((res: any) => res)
        //                     );  
             
        //  }
        getJob(id: any) {
          return this.http.get(this.BASE_URL + `api/jobs/${id}`)
                          .pipe(
                           map((res: any) => res)
                              ); 
            }
          }
      
  
    

    







      //    import { Injectable } from '@angular/core';
      // import { HttpClient } from '@angular/common/http';
      // import { map, tap, } from 'rxjs/operators';

      // @Injectable({
      //   providedIn: 'root'
      // })
      // export class JobService {
      //   initialJobs = [];
      //   jobs: any;

      //   BASE_URL = 'http://localhost:4201/';

      //   constructor(private http: HttpClient) { }
        
      //   getJobs() {

      //     return this.http.get(this.BASE_URL + 'api/jobs')
      //     .pipe(
      //     map((res: any) => res)
      //     );
      //   }
      //  }


      


    




  
