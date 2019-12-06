import { Component, OnInit } from '@angular/core';

function myMove() {
  var url = '';
  var elem = document.getElementById("myAnimation");
  var bt1 = document.getElementById("bt-contact");
  var bt2 = document.getElementById("bt-autre");
  var msg = document.getElementById("affichageUrl");
  var lienURL = document.getElementById("lien");


  bt1.style.display = "none";
  bt2.style.display = "none";
  msg.style.display = "none";
  lienURL.style.display = "none";



  var pos = -200;
  elem.style.bottom = '5px';
  var id = setInterval(frame, 10);
  function frame() {
    if (pos > 200) {
      // et qu'es tu fais la ? tu cherches ça ?
      bt1.style.display = "block";
      bt2.style.display = "block";
      msg.style.display = "block";
      lienURL.style.display = "block";
      clearInterval(id);
    } else {
      pos = pos + 3;
      elem.style.left = pos + 'px';
    }

  }

}

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  name = 'Angular';

  ngOnInit() {
    myMove()
  }
}


