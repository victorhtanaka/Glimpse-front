import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MsalUserService {

  token: string;
  profilePicture: any;
  hasProfilePicture: boolean = false;
  environment!: string;
  homeAccountId!: string;
  preferredUsername: string;
  name: string;

  constructor(
    private http: HttpClient
  ) { }

  getProfilePicturefromGraph(): Observable<any>{
    return this.http.get<any>(environment.graphEndPoint + "/beta/me/photo/$value",
      { headers: { 'Content-Type': 'image/jpg', 'Authorization': 'Bearer ' + this.token }, responseType: 'blob' as 'json' });
  }

  getProfilePicture(): Observable<any> {
    return of(this.profilePicture);
  }

  setProfilePicture(image: Blob){
    let reader = new FileReader();
    reader.addEventListener('load', () =>{
      this.profilePicture = reader.result;
    }, false
    );
    reader.readAsDataURL(image);
    this.hasProfilePicture = true;
  }

  getHasProfilePicture(): Observable<boolean> {
    return of(this.hasProfilePicture);
  }

  getName(): Observable<string> {
    return of(this.name);
  }

  setUserProfileData(response: any, accountInfo: any){
      this.token = response.accessToken;
      this.environment = accountInfo.environment;
      this.homeAccountId = accountInfo.homeAccountId;
      this.preferredUsername = accountInfo.username;
      this.name = accountInfo.name;
  }
}
