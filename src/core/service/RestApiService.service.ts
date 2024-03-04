import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { Employee } from '../shared/employee';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RestApiService {
  // Define API
  //apiURL = "http://localhost:3000";
    apiURL = "https://test-app-367r.onrender.com";

  constructor(
    private http: HttpClient,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<any> {
    return this.http
      .get<any>(this.apiURL + "/employees")
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id: any): Observable<any> {
    return this.http
      .get<any>(this.apiURL + "/employees/" + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update employee
  updateUser(data: any, _loginUrl: string, id): Observable<any> {
    return this.http
      .post<any>(
        this.apiURL + "/v1/update/" + id ,
        data,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete employee
  deleteUser( _loginUrl: string, id: any) {
    return this.http
      .get<any>(this.apiURL + _loginUrl + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }


  // HttpClient API get() method => Fetch employee
  getUser(id: any): Observable<any> {
    return this.http
      .get<any>(this.apiURL + "/employees/" + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  loggedIn(){
    return !! localStorage.getItem('token')
  }
  // HttpClient API get() method => Fetch users
  registerUser(data: any, _loginUrl: string): Observable<any> {
    return this.http
      .post<any>(
        this.apiURL + _loginUrl,
        data,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch users list
  //localhost:3000/v1/users

  getUsers(_loginUrl: string): Observable<any> {
    return this.http
      .get<any>(this.apiURL + _loginUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  login(data: any, _loginUrl: string): Observable<any> {
    return this.http
      .post<any>(this.apiURL + _loginUrl, data, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getToken() {
    return localStorage.getItem("token");
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error;
    }
    console.warn(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  logout() {
    localStorage.removeItem("token");
    this._router.navigate(["/"]);
  }
}
