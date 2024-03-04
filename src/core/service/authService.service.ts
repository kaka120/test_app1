// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Employee } from '../shared/employee';
// import { Observable, throwError } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: "root",
// })
// export class authService {

//     // Define API
//   apiURL = 'http://localhost:3000';

//   constructor(private http: HttpClient) {}

//   /*========================================
//     CRUD Methods for consuming RESTful API
//   =========================================*/

//   // Http Options
//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//     }),
//   };
//   // login
  
//     // login(data: any, _loginUrl: string) {
//     //     return this.http.post<any>(_loginUrl, data)
//     //         .pipe(
//     //             // the backend service sends an instance of the user
//     //             // user: any (because .post<any>)
//     //             map(user => {
//     //                 // login successful if the response has jwt token
//     //                 if (user && user.token) {
//     //                     // store user details and jwt token in the local storage to keep the user logged in between page refreshes
//     //                     //localStorage.setItem('currentUser', JSON.stringify(user));
//     //                     console.log(user)
//     //                 }
//     //                 return user;
//     //             })
//     //         );
//     // }
  
// //   login(data: any, _loginUrl: string) {
// //     return this.http.post<any>(_loginUrl, data).pipe(
// //       map((user) => {
// //         console.log(user);
// //         this.currentUserSubject.next(user);
// //         return user;
// //       })
// //     );
// //   }

//   //   loggedIn(){
//   //        return !! localStorage.getItem('token')
//   //    }

//   //   postData(data: any, _loginUrl:string):Observable<any[]>
//   //   {
//   //      return  this.http.post<any>(_loginUrl, data)
//   //   }
// //   login(data: any, _loginUrl: string): Observable<any> {
// //     let API_URL = _loginUrl;
// //     return this.http.post(API_URL, data).pipe(catchError(this.error));
// //   }

// //   logout() {
// //     localStorage.removeItem("token");
// //     this._router.navigate(["/"]);
// //   }

// //   getToken() {
// //     return localStorage.getItem("token");
// //   }

//   login(data: any, _loginUrl: string: Observable<any> {
//     return this.http
//       .put<any>(
//         this.apiURL + '/employees/' + id,
//         JSON.stringify(employee),
//         this.httpOptions
//       )
//       .pipe(retry(1), catchError(this.handleError));
//   }

//   handleError(error: any) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//       // Get client-side error
//       errorMessage = error.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     window.alert(errorMessage);
//     return throwError(() => {
//       return errorMessage;
//     });
//   }
// }
