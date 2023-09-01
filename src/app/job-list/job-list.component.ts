
  import { Component, OnInit } from '@angular/core';
  import {  HttpClientModule } from '@angular/common/http';
  import { HttpClient } from '@angular/common/http';
  import { map, tap } from 'rxjs/operators';
 import { JobService } from '../services/job.service';



 
  @Component({
    selector: 'cc-job-list',
    templateUrl: './job-list.component.html',
    styleUrls: ['./job-list.component.css']
  })
  export class JobListComponent implements OnInit {

   jobs = [];
   error ='';
    router: any;

        // constructor( private JobService: JobService) {}

      //   ngOnInit() {
      //     this.JobService.getJobs()
      //       .pipe(
      //         tap(
      //         data => this.jobs = data,
      //         error => {
      //           console.error(error)
      //         })
      //       )
      //       .subscribe();
      //   }
      // }
 
      constructor( private JobService: JobService) {}
       ngOnInit() {

         this.JobService.getJobs()
               .subscribe((data) =>
                 {this.jobs = data,
                error => {
                  console.error(error);
                  this.error = error;
                }
              
              });
    this.JobService.jobsSuject.subscribe(data=> {
      console.log(data);
       this.jobs = [data, ...this.jobs];
    })
         
       }
       onJobClicked(jobId: number) {
        // Rediriger vers le formulaire avec l'ID du travail en tant que paramètre d'URL
        this.router.navigate(['/job-form', jobId]);
      }
      }