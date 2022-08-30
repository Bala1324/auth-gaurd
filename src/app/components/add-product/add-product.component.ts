import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }
 userForm:FormGroup;
  ngOnInit(): void {
    
    this.userForm = new FormGroup({
      'name': new FormControl(''),
      'password': new FormControl('')
    })
  }

  name='bala'

}
