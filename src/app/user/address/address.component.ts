import { Component, OnInit } from '@angular/core';
import { Address } from '../user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit{
  address!:Address
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    
    this.route.data.subscribe((data)=>{
      this.address=data['address'].address?data['address'].address:data['address']
    })
  }
}
