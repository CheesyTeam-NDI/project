import {Component, OnInit} from '@angular/core';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor() {
  }

  connected = false;
  ngOnInit() {
  }

}
