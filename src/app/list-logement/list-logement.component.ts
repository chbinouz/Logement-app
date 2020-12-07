import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Logement } from '../models/Logement';

@Component({
  selector: 'app-list-logement',
  templateUrl: './list-logement.component.html',
  styleUrls: ['./list-logement.component.css']
})
export class ListLogementComponent implements OnInit {
  @Input() logement:Logement;
  @Output() requested=new EventEmitter<Logement>();
  constructor() { }

  ngOnInit(): void {
  }
  supprimer(ref:Logement){
    this.requested.emit(ref);
  }

}
