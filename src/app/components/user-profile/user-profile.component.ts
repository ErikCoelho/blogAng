import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [DataService]
})
export class UserProfileComponent implements OnInit {
  public user: any = {
    image: "",
    name: "",
    email: "",
  }

  public posts: any;

  constructor(
    private afAuth: AngularFireAuth,
    private service: DataService
  ) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe((data) => {
      if (data) {
        this.user.name = data?.displayName;
        this.user.image = data?.photoURL;
        this.user.email = data?.email;
        this.getUserPost();
      }
    });
  }

  logout() {
    this.afAuth.signOut();

  }

  getUserPost() {
    this.afAuth.idToken.subscribe(token => {
      this.service.getPostByUser(token).subscribe((data: any) => {
        this.posts = data.data;
        console.log(data.data);
      });
    });
  }
}
