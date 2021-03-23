import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1:string[] = ["xyz","MNO","LMN"];
  info2:string[] = ["pxyz","pMNO","pLMN"];
  info3:string[] = ["mxyz","mMNO","mLMN"];

  getinfo1():string[]{
    return this.info1
  }
  getinfo2():string[]{
    return this.info2
  }
  getinfo3():string[]{
    return this.info3
  }

  constructor() { }
}
