import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const dataServiceHost = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  configChanged = new Subject<string>();


  getTables() {
    return this.http
    .get<any>(dataServiceHost+'/tables')
    .pipe(map(data => data));
  }

  getTableDetails(tableName: string) {
    return this.http
    .get<any>(dataServiceHost+'/tables/'+tableName)
    .pipe(map(data => data));
  }

  sendConfig(config : any){
    return this.http
    .post<any>(dataServiceHost+'/tables/data/config',config)
    .pipe(map(data => data));
  }

  getConfig(config : any){
    return this.http
    .get<any>(dataServiceHost+'/tables/data/config',config)
    .pipe(map(data => data));
  }

}





// tables = [
//   'MockApis',
//   'MockCounters',
//   'MockPaths',
//   'vagrant_tci_CatalogList',
//   'vagrant_tci_Catalogs',
//   'vagrant_tci_MockApis',
//   'vagrant_tci_MockCounters',
//   'vagrant_tci_MockPaths',
//   'vagrant_tci_Rules',
//   'vagrant_tci_RulesSnapshot',
//   'vagrant_tci_WIConnection',
//   'vagrant_tci_WIFlow',
//   'vagrant_tci_WIFlowChunks',
//   'vagrant_tci_apimodeler_api',
//   'vagrant_tci_apimodeler_apiContent',
//   'vagrant_tci_apimodeler_apiTrash',
//   'vagrant_tci_apimodeler_counter',
//   'vagrant_tci_apimodeler_uploadhistory',
//   'vagrant_tci_app_resource',
//   'vagrant_tci_appinternalenvpairs',
//   'vagrant_tci_applications',
//   'vagrant_tci_ftlusers',
//   'vagrant_tci_news',
//   'vagrant_tci_organizations',
//   'vagrant_tci_sandboxes',
//   'vagrant_tci_subscriptions',
//   'vagrant_tci_users',
//   'vagrant_tci_vpnconnections' ];