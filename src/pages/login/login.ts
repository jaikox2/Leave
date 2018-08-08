import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginService } from '../services/loginService';
import { AlertController } from 'ionic-angular';
import { LeavePage } from '../leave/leave';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage {

  username = "";
  password = "";
  item :any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public login: LoginService,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  dismiss(){
    this.navCtrl.setRoot(HomePage);
  }

  doLogin(event,username,password){
    console.log("username: "+username);
    console.log("password: "+password);

    this.login.doLogin(username,password).subscribe(
      data =>{
        this.item = data.message;
        console.log("item: "+data);
        if(data == "12345"){

            let alert = this.alertCtrl.create({
              title: 'login',
              subTitle: 'เข้าสู่ระบบสำเร็จ',
              buttons: [{
                text:'ตกลง',
                handler: data=>{
                  this.navCtrl.setRoot(LeavePage);
                }
              }]
            });
            alert.present();

        } else {
          let alert = this.alertCtrl.create({
            title: 'login',
            subTitle: 'ไม่สามารถเข้าระบบได้',
            buttons: [{
              text:'ตกลง',
              handler: data=>{
                this.navCtrl.setRoot(LeavePage);
              }
            }]
          });
          alert.present();
        }
      }
    );

  }

}
