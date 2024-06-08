export class ResponseDto {
  data: any;
  message: string;
  success: boolean;

  constructor(message: string, success: boolean, data?: any) {
    this.data = data;
    this.message = message;
    this.success = success;
  }
}
