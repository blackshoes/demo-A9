import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() public data: any;
  constructor() {
  }
  ngOnInit(): void {
  }
  public getOrg(): any {
    return this.data;
  }
}
