declare var window;

export class StorageService {

  _drive: string = 'sessionStorage';

  drive(): string {
    return this._drive;
  }

  setDrive(v?: string): string {
    return this._drive = v + 'Storage';
  }

  get(key: string): any {
    return JSON.parse(window[this.drive()].getItem(key));
  }

  set(key: string, value: any): void {
    window[this.drive()].setItem(key, JSON.stringify(value));
  }

  clear(): void {
    window[this.drive()].clear();
  }

}
