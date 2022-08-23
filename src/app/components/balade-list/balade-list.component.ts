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

  constructor(private baladeService: BaladeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.baladeService.getBaladeByCategory(this.route.snapshot.params['idCategory']).subscribe(result => { this.balades = result });
  }

}
