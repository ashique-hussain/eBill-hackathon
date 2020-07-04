import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  uploadData: any

  constructor() {
  }

  setData(data) {
    this.uploadData = data;
  }

  getData() {
    return this.uploadData;
  }
}
