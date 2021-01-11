import { HttpClient, json } from "aurelia-fetch-client";
import { inject } from "aurelia-framework";
import { EventAggregator } from 'aurelia-event-aggregator';
import { ContactUpdated, ContactViewed } from 'message';
import { Router } from 'aurelia-router';
//import { I18N } from 'aurelia-i18n';
//import XHR from 'i18next-xhr-backend';
//import { ValidationControllerFactory, ValidationRules } from 'aurelia-validation';



interface IApplicant {
  id: number;
  name: string;
  familyName: string;
  address: string;
  countryOfOrigin: string;
  emailAddress: string;
  age: number;
  hired: boolean;
}

let httpClient = new HttpClient();
let applicants = [
  {
    id: getId(),
    name: 'John',
    familyName: 'wright',
    address: 'Berlin',
    countryOfOrigin: 'Germany',
    emailAddress: 'johsn@adp.com',
    age: '35',
    hired: true
  },
  {
    id: getId(),
    name: 'Clive',
    familyName: 'Lewis',
    address: 'Frankfurt',
    countryOfOrigin: 'Germany',
    emailAddress: 'lewsi@adp.com',
    age: '37',
    hired: false
  },
  {
    id: getId(),
    name: 'Owin',
    familyName: 'Bield',
    address: 'Hamburg',
    countryOfOrigin: 'Germany',
    emailAddress: 'Owin@inklings.com',
    age: '40',
    hired: true
  }
]
let id = 0;

function getId() {
  return ++id;
}

@inject(EventAggregator, Router)

export class AppicantList {
  static inject() { return [HttpClient] };
  controller;
  
  constructor(private http: HttpClient, ea: EventAggregator, private router: Router) {

  //  constructor(private http: HttpClient, ea: EventAggregator, private router: Router, private controllerFactory: ValidationControllerFactory) {

    //this.controller = controllerFactory.createForCurrentScope();  
    //ValidationRules
    //  .ensure('name').minLength(5).maxLength(50).required()
    //  .ensure('familyName').minLength(5).maxLength(50).required()
    //  .ensure('address').minLength(10).maxLength(100).required()
    //  .ensure('countryOfOrigin').required()
    //  .ensure('emailAddress').required().email()
    //  .ensure('age').min(20).max(60).required()
    //  .on(this);
  }

  applicants: IApplicant[];
  applicant: IApplicant;
  txtNameHasFocus: boolean;
  txtIdHasFocus: boolean;
  selectedId = 0;
  

  async activate() {
   // alert('In activate call');
    this.applicants = await httpClient.fetch("http://localhost:5000/Applicant/GetAll")
      .then(result => result.json() as Promise<IApplicant[]>)
    // this.clear();
    this.txtIdHasFocus = true;
  }

  created() {
    this.fetchApplicants();
  }

  
  clear() {
    this.applicant = null;
    this.applicant.age = 0;
    this.applicant.hired = false;
  }

  fetchApplicants() {
    httpClient.fetch('http://localhost:5000/Applicant/GetAll')
      .then(response => response.json() as Promise<IApplicant[]>)
      .then(data => {
        this.applicants = data;
      })
      .catch(error => console.log(error));
    
  }

  insertApplicant(applicant) {
    var data = JSON.stringify(applicant);
    httpClient.fetch('http://localhost:5000/Applicant/Add/?data=' + data, {
      method: "post"
    })
    .then(response => response.json() as Promise<IApplicant[]>)
    .then(data => {
        this.applicants = data;
     })
      .catch(error => console.log(error));
    this.clear();
    this.txtNameHasFocus = true;
    return true;
  }

  select(applicant) {
    this.selectedId = applicant.id;
    this.applicant.id = applicant.id;
    this.applicant.name = applicant.name;
    this.applicant.familyName = applicant.familyName;
    this.applicant.address = applicant.address;
    this.applicant.countryOfOrigin = applicant.countryOfOrigin;
    this.applicant.age = applicant.age;
    this.applicant.hired = applicant.hired;
    this.txtIdHasFocus = true;
    return true;
  }

  updateApplicant(applicant) {
    
    var data = JSON.stringify(applicant);
    //alert('In update' + data);
    httpClient.fetch('http://localhost:5000/Applicant/Update/?data=' + data, {
      method: "put"
    })
      .then(response => response.json() as Promise<IApplicant[]>)
      .then(data => {
        this.applicants = data;
       
      }).catch(error => console.log(error));

    //alert('After update');
    this.clear();
    this.txtIdHasFocus = true;
    return true;
  }

  deleteApplicant(applicant) {
    //alert('before Delete');
    httpClient.fetch('http://localhost:5000/Applicant/Delete/?id=' + applicant.id , {
      method: "delete"
    })
      .then(response => response.json() as Promise<IApplicant[]>)
      .then(data => {
        this.applicants = data;
      }).catch(error => console.log(error));
    //alert('After Delete');
    this.clear();
    this.txtIdHasFocus = true;
    return true;
  }
}

