import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../@types/response.interface';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.urlApi + '/auth';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) {}

  async register(user: any): Promise<any> {
    return lastValueFrom(this.http.post<any>(`${this.baseUrl}/signup`, user));
  }

  async login(body: { email: string; password: string }): Promise<ResponseApi> {
    const response = await lastValueFrom(
      this.http.post<ResponseApi>(`${this.baseUrl}/signin`, body)
    );

    if (response.success) {
      this.setToken(response.data.access_token);
    }
    return response;
  }

  async getUser(): Promise<ResponseApi> {
    return lastValueFrom(this.http.get<ResponseApi>(`${this.baseUrl}/user`));
  }

  async updateUser(body: any): Promise<ResponseApi> {
    return lastValueFrom(
      this.http.put<ResponseApi>(`${this.baseUrl}/user`, body)
    );
  }

  logout(): void {
    this.clearToken();

    this.router.navigate(['/login']);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getDecodedToken(): any {
    const token = this.getToken();
    return token ? jwtDecode(token) : null;
  }

  getUserId(): string {
    const decodedToken = this.getDecodedToken();
    return decodedToken.sub;
  }

  getUserRole(): string {
    const decodedToken = this.getDecodedToken();
    return decodedToken.role;
  }
}
