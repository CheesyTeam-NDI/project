import { Component, OnInit } from '@angular/core';

function myMove() {
  var url='';
var elem = document.getElementById("myAnimation");   
var bt1 = document.getElementById("bt-contact");   
var bt2 = document.getElementById("bt-autre");  

var bulle= document.getElementById("bulle");


bt1.style.display="none";
bt2.style.display="none";
      bulle.style.display="none";




var pos = -200;
elem.style.bottom='5px';
var id = setInterval(frame, 10);
function frame() {
  if (pos > 40) {
    // et qu'es tu fais la ? tu cherches รงa ?
    bt1.style.display="block";
    bt2.style.display="block";
    bulle.style.display="block";

    clearInterval(id);
  } else {
    pos=pos+1.5; 
    elem.style.left = pos + '%'; 
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


