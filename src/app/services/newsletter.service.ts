import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsletterResponse } from '../interfaces/newsletter.interface';


@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpointUrl = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';
  private mockResponse: NewsletterResponse = { message: 'Dados enviados com sucesso!' }

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string): Observable<NewsletterResponse>{
    const useMock = true;

    if(useMock){
      console.log(this.mockResponse)
      return of(this.mockResponse)
    }else {
      const data= {name, email};

      return this.http.post<NewsletterResponse>(this.endpointUrl, data);
    }
  }
}
