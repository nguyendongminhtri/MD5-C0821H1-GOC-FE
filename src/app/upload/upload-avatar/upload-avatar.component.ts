import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';


@Component({
  selector: 'app-upload-avatar',
  templateUrl: './upload-avatar.component.html',
  styleUrls: ['./upload-avatar.component.scss']
})
export class UploadAvatarComponent implements OnInit {
  selectedFile: File;
  ref: AngularFireStorageReference;
  downloadURL: string;
  checkUploadFile = false;
  @Output()
  giveURLtoCreate = new EventEmitter<string>()
  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }
  onFileChanged($event) {
    this.selectedFile = $event.target.files[0];
    this.onUpload();
  }
  onUpload(){
    this.checkUploadFile = true;
    const id = Math.random().toString(36).substring(2) //Tao ra 1 cai ten random tren firebase
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile).then(snapshot =>{ //Tra ve 1 cai chuoi sieu van ban
      return snapshot.ref.getDownloadURL();
    }).then(downloadURL =>{
      this.checkUploadFile = false;
      this.downloadURL = downloadURL;
      this.giveURLtoCreate.emit(this.downloadURL);
      return downloadURL;
    })
      .catch(error =>{
        console.log(`Failed to upload avatar ${error}`);
      })
  }
}
