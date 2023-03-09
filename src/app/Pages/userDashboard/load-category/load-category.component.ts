import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-category',
  templateUrl: './load-category.component.html',
  styleUrls: ['./load-category.component.css']
})
export class LoadCategoryComponent implements OnInit{

  //cid:any;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    // this.cid = this.route.snapshot.params['cid'];
    
    // if(this.cid == 0){
    //   this.
    // }

  }
}
