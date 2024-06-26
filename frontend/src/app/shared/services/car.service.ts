import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../@types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private baseUrl = environment.urlApi + '/car';

  constructor(private http: HttpClient) {}

  async getCars(): Promise<ResponseApi> {
    const response = await lastValueFrom(
      this.http.get<ResponseApi>(`${this.baseUrl}`)
    );

    return response;
  }

  async deleleCar(id: string): Promise<ResponseApi> {
    const response = await lastValueFrom(
      this.http.delete<ResponseApi>(`${this.baseUrl}/${id}`)
    );

    return response;
  }

  async createCar(body: any): Promise<ResponseApi> {
    const response = await lastValueFrom(
      this.http.post<ResponseApi>(`${this.baseUrl}`, body)
    );

    return response;
  }

  async updateCar(id: string, body: any): Promise<ResponseApi> {
    const response = await lastValueFrom(
      this.http.put<ResponseApi>(`${this.baseUrl}/${id}`, body)
    );

    return response;
  }
}
