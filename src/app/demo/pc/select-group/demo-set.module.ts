import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { SelectGroupDemoComponent } from './select-group/demo.component';
import { SelectGroupDemoModule } from './select-group/demo.module';
import { SelectGroupEditResultDemoComponent } from './edit-selected-items/demo.component';
import { SelectGroupEditResultDemoModule } from './edit-selected-items/demo.module';
import {SelectGroupCustomizeGroupFieldDemoModule} from "./customize-group-field/demo.module";
import {SelectGroupCustomizeGroupFieldDemoComponent} from "./customize-group-field/demo.component";

export const routerConfig = [
    {
        path: 'select-group', component: SelectGroupDemoComponent
    },
    {
        path: 'edit-selected-items', component: SelectGroupEditResultDemoComponent
    },
    {
        path: 'customize-group-field', component: SelectGroupCustomizeGroupFieldDemoComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routerConfig),
        SelectGroupDemoModule,
        SelectGroupEditResultDemoModule,
        SelectGroupCustomizeGroupFieldDemoModule
    ]
})
export class SelectGroupDemoSetModule {
}
