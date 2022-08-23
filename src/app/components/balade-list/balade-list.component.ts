import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Balade } from 'src/app/models/balade.model';
import { BaladeService } from 'src/app/services/balade.service';

@Component({
  selector: 'app-balade-list',
  templateUrl: './balade-list.component.html',
  styleUrls: ['./balade-list.component.css']
})
export class BaladeListComponent implements OnInit {

  balades!: Balade[];
  id!: number;

  constructor(private baladeService: BaladeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCategory'];
    this.baladeService.getBaladeByCategory(this.id).subscribe(result => { this.balades = result });
  }

}
