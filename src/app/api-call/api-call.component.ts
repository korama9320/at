import { JsonPipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { studentapi } from '../services/student.service';
import { IStudent } from '../shared classesand types/IStudent';

@Component({
  selector: 'app-apicall',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css'],
})
export class ApiCallComponent implements OnInit {
  students!: IStudent[];
  constructor(private stuapi: studentapi) {}
  sub!: Subscription;
  ngOnInit(): void {
    this.get();
  }
  get() {
    this.sub = this.stuapi.get().subscribe({
      next: (res: any) => {
        this.students = res.Data;
      },
    });
  }

  delete(id: number) {
    this.stuapi.delete(id).subscribe({
      next: (res) => this.get(),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
