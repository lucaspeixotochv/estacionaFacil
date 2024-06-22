import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../@types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseUrl = environment.urlApi + '/reservation';

  constructor(private http: HttpClient) {}

  async createReservation(body: any): Promise<ResponseApi> {
    const response = await lastValueFrom(
      this.http.post<ResponseApi>(`${this.baseUrl}`, body)
    );

    return response;
  }

  async getReservations(): Promise<ResponseApi> {
    const response = await lastValueFrom(
      this.http.get<ResponseApi>(`${this.baseUrl}`)
    );

    return response;
  }
}
