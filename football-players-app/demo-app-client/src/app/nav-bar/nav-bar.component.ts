import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      const user: any = JSON.stringify(localStorage.getItem('user'));
      this.accountService.setCurrentUser(user);
    }
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.model = response;
    }, error => {
      this.toast.error('username or password is wrong');
    });
  }

  logout() {
    this.router.navigateByUrl('');
    this.accountService.logout();
  }
}
