import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tables = [ 
      'MockApis',
      'MockCounters',
      'MockPaths',
      'vagrant_tci_CatalogList',
      'vagrant_tci_Catalogs',
      'vagrant_tci_MockApis',
      'vagrant_tci_MockCounters',
      'vagrant_tci_MockPaths',
      'vagrant_tci_Rules',
      'vagrant_tci_RulesSnapshot',
      'vagrant_tci_WIConnection',
      'vagrant_tci_WIFlow',
      'vagrant_tci_WIFlowChunks',
      'vagrant_tci_apimodeler_api',
      'vagrant_tci_apimodeler_apiContent',
      'vagrant_tci_apimodeler_apiTrash',
      'vagrant_tci_apimodeler_counter',
      'vagrant_tci_apimodeler_uploadhistory',
      'vagrant_tci_app_resource',
      'vagrant_tci_appinternalenvpairs',
      'vagrant_tci_applications',
      'vagrant_tci_ftlusers',
      'vagrant_tci_news',
      'vagrant_tci_organizations',
      'vagrant_tci_sandboxes',
      'vagrant_tci_subscriptions',
      'vagrant_tci_users',
      'vagrant_tci_vpnconnections' ];

  getTables(){
    return this.tables.slice();
  }    

  constructor() { }
}
