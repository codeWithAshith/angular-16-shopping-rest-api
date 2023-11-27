import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { AppResponse } from '../model/appResponse';
import { urlEndpoint } from '../utils/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<AppResponse> {
    return this.http.get<AppResponse>(`${urlEndpoint.baseUrl}/admin/book/all`);
  }

  postBook(book: FormData): Observable<AppResponse> {
    return this.http.post<AppResponse>(
      `${urlEndpoint.baseUrl}/admin/book`,
      book
    );
  }

  putBook(book: Book): Observable<AppResponse> {
    return this.http.put<AppResponse>(
      `${urlEndpoint.baseUrl}/admin/book`,
      book
    );
  }

  deleteBook(id: number): Observable<AppResponse> {
    return this.http.delete<AppResponse>(
      `${urlEndpoint.baseUrl}/admin/book/${id}`
    );
  }
}
