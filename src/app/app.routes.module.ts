import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { TableListComponent } from "./table-list/table-list.component";
import { TableDataComponent } from "./table-data/table-data.component";

const appRoutes : Routes = [
    { path : 'tables', component: TableListComponent, 
    children:[
        { path:':tablename', component: TableDataComponent}
    ]},
    { path : '', redirectTo: '/tables', pathMatch:'full'}
];
 
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

    
}