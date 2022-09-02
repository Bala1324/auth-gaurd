import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private service:AuthService,private activatedRoute:ActivatedRoute ) { }

  data:any = []
  ngOnInit(): void {
  //  this.service.getPost().subscribe(sub=>{
  //   console.log(sub)
  //   this.data = sub;
  //  })

  this.data = this.activatedRoute.snapshot.data['post']
  }

}
