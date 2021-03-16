import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// $('.navTrigger').click(function () {
//   $(this).toggleClass('active');
//   console.log("Clicked menu");
//   $("#mainListDiv").toggleClass("show_list");
//   $("#mainListDiv").fadeIn();

// });
