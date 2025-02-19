import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('current_service');
    localStorage.removeItem('current_project');
    localStorage.removeItem('current_partner');
    localStorage.removeItem('current_news');
    localStorage.removeItem('current_member');
    this.router.navigate(['/auth/login'], { replaceUrl: true }).then(() => {
      window.location.reload();
    });
  }
  ngOnInit(): void {
  }

}
