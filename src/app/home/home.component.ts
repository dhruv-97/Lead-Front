import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeadService } from '../lead.service';
import { Lead }  from '../lead';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  leads : [Lead];
  constructor(private router: Router, private service: LeadService) { }

  ngOnInit() {
    this.service.getLeads().then(
      res=> this.leads = res,
      err=>alert('Could not retrieve leads')
    )
  }
  goToForm(){
    this.router.navigate(['/form']);
  }

}
