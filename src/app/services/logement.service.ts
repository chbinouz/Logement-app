import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logement } from '../models/Logement';

@Injectable({
  providedIn: 'root'
})
export class LogementService {
  url:string="http://localhost:3000/Logement";
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  ajouterLogement(log:Logement){
    return this.http.post<any>(this.url,log,this.httpOptions);
  }

  getAll(){
    return this.http.get<any>(this.url);
  }

  supprimerParRef(ref:Logement){
    console.log("hhhh");
    return this.http.delete(this.url+'/'+ref.id);
  }

  getLogementById(id:number){
    return this.http.get<any>(this.url+'/'+id);
  }
  modifierLogement(log:Logement,id:number){
    return this.http.put<any>(this.url+'/'+id,log,this.httpOptions);
  }
  rechercheMultiple(str:string){
    return this.http.get<any>(this.url+"?"+str);
  }
}
