import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  sidenavWidth = 4;
  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.sidenavWidth = 15;
    document.getElementById("sideNavPadding").style.paddingTop = "20%";
    console.log("increase sidenav width");
  }
  decrease() {
    this.sidenavWidth = 4;
    document.getElementById("sideNavPadding").style.paddingTop = "75%";
    console.log("decrease sidenav width");
  }

}
