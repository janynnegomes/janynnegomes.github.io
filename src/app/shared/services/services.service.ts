import { Injectable } from '@angular/core';
import {services} from '../../../assets/data/services.json';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() {

   }

   getServices(){
    return services;
  }
}
