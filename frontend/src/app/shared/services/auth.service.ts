import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../@types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.urlApi + '/auth';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  // Método para registrar um novo usuário
  async register(user: any): Promise<any> {
    return lastValueFrom(this.http.post<any>(`${this.baseUrl}/register`, user));
  }

  async login(body: { email: string; password: string }): Promise<ResponseApi> {
    const response = await lastValueFrom(
      this.http.post<ResponseApi>(`${this.baseUrl}/signin`, body)
    );

    console.log(response);

    if (response.success) {
      this.setToken(response.data.access_token);
    }
    return response;
  }

  // Método para fazer logout
  logout(): void {
    this.clearToken();
  }

  // Método para armazenar o token
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Método para obter o token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Método para limpar o token
  private clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Método para verificar se o usuário está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
