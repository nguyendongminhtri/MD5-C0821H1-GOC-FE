import { Component, OnInit } from '@angular/core';
import {ChangeAvatar} from '../../model/ChangeAvatar';
import {AuthService} from '../../service/auth.service';
import {TokenService} from '../../service/token.service';

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.scss']
})
export class ChangeAvatarComponent implements OnInit {
  status = 'Please choose file';
  form: any = {};
  changeAvatar: ChangeAvatar;
  success: any = {
    message: "yes"
  }
  constructor(private authService: AuthService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  onChangeAvatar($event) {
    console.log('goi ham ');
  this.form.avatar = $event;
    console.log('event --> ', $event);
  }

  onSubmit() {
    this.changeAvatar = new ChangeAvatar(
      this.form.avatar
    )
    this.authService.changeAvatar(this.changeAvatar).subscribe(data =>{
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = 'Upload AVATAR success!';
        this.tokenService.setAvatarKey(this.form.avatar);
        window.location.reload();
      }
    })
  }
}
