import { Component, OnInit } from '@angular/core';
import { LeadService } from '../lead.service';
import { Lead }  from '../lead';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  lead : Lead ={
    name:'',
    company:'',
    email:'',
    phone:'',
    requirements:['',''],
    quoted:false,
    closed:false,
    user:'saurabh'
  }
  constructor(private service: LeadService) {}

  ngOnInit() {
  }
  postLead(){
    console.log(this.lead);
    this.service.postLead(this.lead).then(
      res => alert('Lead posted succesfully'),
      err => alert('Could not post lead')
    )
  }
  changeClosed(x){
    this.lead.closed= x;
  }
  changeQuoted(x){
    this.lead.quoted = x;
  }
}
