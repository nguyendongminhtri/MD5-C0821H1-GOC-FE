import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    window.sessionStorage.clear();
    this.router.navigate(['login']).then(()=>{
      window.location.reload();
    })
  }
}
