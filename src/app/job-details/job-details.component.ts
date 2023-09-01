
      // import { Component, OnDestroy, OnInit } from '@angular/core';
      // import { ActivatedRoute } from '@angular/router';
      // import { JobService } from '../services/job.service';
      // import { EMPTY, Subscription } from 'rxjs';
      // import { catchError } from 'rxjs/operators';


      // @Component({
      //   selector: 'cc-job-details',
      //   templateUrl: './job-details.component.html',
      //   styleUrls: ['./job-details.component.css']
      // })
      // export class JobDetailsComponent implements OnInit, OnDestroy {
      //   jobDetails = null;
      //   error = null;
      //   errorMessage = 'An error occurred while fetching job details.';
        
      //   private subscription: Subscription | undefined;

      //   constructor(private jobService: JobService, private activatedRoute: ActivatedRoute) {}

      //   ngOnInit() {
      //     const id = this.activatedRoute.snapshot.params['id'];
      //     this.subscription = this.jobService.getJob(id)
      //       .pipe(
      //         catchError((error) => {
      //           this.handleError(error);
      //           return EMPTY;
      //         })
      //       )
      //       .subscribe((data) => {
      //         this.handleServerResponse(data);
      //       });
      //   }        

      //   ngOnDestroy() {
      //     if (this.subscription) {
      //       this.subscription.unsubscribe();
      //     }
      //   }
                                        

      //   handleServerResponse(response: { success: any; job: null; message: string; }) {
      //     if (response && response.success) {
      //       this.jobDetails = response.job;
      //     } else {
      //         this.errorMessage = response && response.message ? response.message : 'An error occurred while fetching job details.';
      //     }
      //   }
        
      //   handleError(error: { message: any; } | null) {
      //     console.log('handleError', error?.message);
      //     this.error = error;
      //   }
      // }        





    






      import { Component, OnInit } from '@angular/core';
      import { switchMap, catchError } from 'rxjs/operators';
      import { ActivatedRoute } from '@angular/router';
      import { JobService } from '../services/job.service';
      

      @Component({
        selector: 'cc-job-details',
        templateUrl: './job-details.component.html',
        styleUrls: ['./job-details.component.css']
      })
      export class JobDetailsComponent implements OnInit {

        jobDetails = null;
        error = null;
        errorMessage = '';

        constructor(private jobService: JobService, private activatedRoute:ActivatedRoute) { }

        ngOnInit() {
          this.activatedRoute.params.pipe(
            switchMap(params => {
              const id = params['id'];
              console.log('ID récupéré:', id); // Affiche l'ID récupéré dans la console
              return this.jobService.getJob(id);
            }),
           catchError(error => {
              this.handleError(error);
              return []; // Vous pouvez retourner une valeur par défaut ou un tableau vide selon votre besoin.
            })
          ).subscribe(
            data => {
              this.handleServerResponse(data);
            }
          );
        }

        handleServerResponse(response) {
          if (response.success) {
            this.jobDetails = response.job;
          } else {
            this.errorMessage = response.message;
          }
        }

        handleError(error) {
          console.log('handleError ', error.statusText);
          this.error = error;
        }
      }









