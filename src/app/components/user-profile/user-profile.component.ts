import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user: any = {
    image: "",
    name: "",
    email: "",
    bio: "",
    post: [],

  }

  constructor(
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe((data) => {
      if (data) {
        this.user.name = data?.displayName;
        this.user.image = data?.photoURL;
        this.user.email = data?.email;
      }
    });
  }

  logout() {
    this.afAuth.signOut();
  }
}
