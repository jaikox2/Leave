import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class LoginService{
    static get parameters(){
        return[   [Http]  ]

    }

    constructor(private http: Http){

    }

    doLogin(username,password){
        var url = "http://localhost/New/login.php";
        let body = new FormData();
        body.append('username',username);
        body.append('password',password);

        var response = this.http.post(url,body).map(res=>res.json());
        console.log(response);
        return response ;
    }
}
