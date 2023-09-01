import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { JobService } from '../services/job.service';




@Component({
  selector: 'cc-job-add-form',
  templateUrl: './job-add-form.component.html',
  styleUrls: ['./job-add-form.component.css']
})


export class JobAddFormComponent implements OnInit {
  produitFormGroup: FormGroup | undefined;
  form: FormGroup | undefined;

   contractTypes = [
      {id: 1, name: 'stage', value: 'internship'},
      {id: 2, name: 'intérim', value: 'temp'},
      {id: 3, name: 'contrat à durée déterminée (CDD)', value: 'fixed-term'},
      {id: 4, name: 'contrat à durée indéterminée', value: 'permanent'},
      {id: 5, name: 'indépendant', value: 'freelance'},
   ];

     currencies = [
      {id: 1, name: 'euros', value: 'EU', symbole: '£'},
      {id: 2, name: 'livres sterling', value: 'POUNDS', symbole: '£'},
      {id: 3, name: 'franc CFA', value: 'CFA', symbole: 'CFA'},
      {id: 4, name: 'indépendant', value: 'frelance'},

     ];

     statuses = [
       {id: 1, name: 'cadre', value: 'excutive'},   
       {id: 2, name: 'employé', value: 'employee'},   
     ];
   
     experience = [

       {id: 1, name: 'junior', value: 'junior'},
       {id: 2, name: 'medior', value: 'medior'},
       {id: 3, name: 'senior', value: 'senior'},

     ];

     areas = [
      {id: 1, name: 'aucun déplacements', value: 'none'},
      {id: 2, name: 'déplacements régionaux', value: 'none'},
      {id: 3, name: 'déplacements nationaux', value: 'nation'},
      {id: 4, name: 'déplacements internationaux', value: 'international'},

     ];
  
  
  constructor( private formBuilder: FormBuilder, private jobService : JobService) {} // Injectez le FormBuilder ici
  ngOnInit() {
    this.form = this.formBuilder.group({
      id: -1,
      title: '',
      company: '',
      city: '',
      zipcode: 35,
      description: '',
      contract: '',
      salary: null,
      currency: '',
      startdate: new Date(),
      experience: '',
      status: '',
      area: '',
      field: '',
      publishdate: new Date(),
      lastupdate: new Date(),
    });
  }
  
 
  createJob(jobData: any) {
    console.log(this.form.value); // Utilisez form.value au lieu de JSON.stringify(form)
    this.jobService.addJob(this.form.value).subscribe(() => {
      // Gérer le résultat si nécessaire
      // Par exemple, afficher un message de réussite ou naviguer vers une autre page
    });
    this.form.reset();
  }
}  