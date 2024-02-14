import { Component, OnInit } from '@angular/core';
import { Company } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{
  company!:Company
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.route.data.subscribe((data)=>{
      this.company=data['company']
    })
  }
}
