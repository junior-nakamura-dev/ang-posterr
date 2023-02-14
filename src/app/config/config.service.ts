import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {
  }

  getCall(URL: string) {
    return this.http.get(URL)
  }

  postCall(URL: string, body: any) {
    console.log('URL', URL)
    console.log('body', JSON.stringify(body))
    return this.http.post<any>(URL, JSON.stringify(body), {
      headers: {
        "content-type": "application/json"
      }
    });
  }

}
