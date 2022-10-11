import { Injectable } from '@angular/core';
import { IStudent } from '../shared classesand types/IStudent';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class studentapi {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get('https://api.mohamed-sadek.com/student/get');
  }
  delete(id: number) {
    return this.http.delete(
      'https://api.mohamed-sadek.com/student/Delete?id=' + id
    );
  }
}
