import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {UploadService} from "../services/upload.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private router: Router, private uploadService: UploadService) {
  }

  uploadDate: any;
  vendor: any;
  file: any;
  myControl = new FormControl();
  options: string[] = [
    'Reliance Trends',
    'Easy Day',
    'Reliance Footwear',
    'Big Bazar',
    'V-mart'
  ];
  filteredOptions: Observable<string[]>;

  ngOnInit() {

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  upload() {
    let fileParts;
    alert('file uploaded successfully');
    if (this.file) {
      fileParts = this.file.split('\\');
    }
    this.uploadService.setData({
      date: this.uploadDate,
      vendor: this.vendor,
      filename: fileParts && fileParts[2]
    });
    return this.router.navigate(['/dashboard']);
  }
}
