import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateStatusService {


  /**
   * Indicates whether the translation is active.
   * @type {boolean} - true if the translation is active, false otherwise.
   */
  translateStatus: boolean = false;

  constructor() { }
}
