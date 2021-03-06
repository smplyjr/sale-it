import { Component, OnInit } from '@angular/core'
import { environment } from '../../../../environments/environment'

declare var jQuery: any

@Component({
  selector: 'authorized-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AHeaderComponent implements OnInit {

  env: any = environment
  userDto: any = JSON.parse(localStorage.getItem('authDto')).userDto

  constructor() { }

  ngOnInit() {
    
  }

  logout() {
    localStorage.removeItem('authDto')
  }

}
