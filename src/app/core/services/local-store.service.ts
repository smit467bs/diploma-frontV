import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({providedIn: 'root'})
export class LocalStoreService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  public storeOnLocalStorage(storageKey: string, value: string): void {
    this.storage.set(storageKey, value);
  }

  public getValueFromLocalStorage(storageKey: string) {
    return this.storage.get(storageKey);
  }

}
