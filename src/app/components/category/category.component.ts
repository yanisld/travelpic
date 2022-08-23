import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input()
  categoryImgUrl!: string;
  
  @Input()
  categoryTitle!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
