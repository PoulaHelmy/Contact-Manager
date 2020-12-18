import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.scss'],
})
export class MainContactComponent implements OnInit {
  user: User |any ;
  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (!id) id = 1;
      this.user = null;
      this.service.users.subscribe((users) => {
        if (users.length == 0) return;
        setTimeout(() => {
          this.user = this.service.userById(id);
        }, 500);
      });
    });
  }
}
