import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { ThemeBuildInDemoComponent } from './build-in/demo.component';
import { ThemeBuildInDemoModule } from './build-in/demo.module';
import { AdjustFontColorDemoModule } from './adjust-font-color/demo.module';
import { AdjustFontColorDemoComponent } from './adjust-font-color/demo.component';
import { ThemePropertiesDemoModule } from './properties/demo.module';
import { ThemePropertiesDemoComponent } from './properties/demo.component';

export const routerConfig = [
    {
        path: 'build-in', component: ThemeBuildInDemoComponent
    },
    {
        path: 'adjust-font-color', component: AdjustFontColorDemoComponent
    },
    {
        path: 'properties', component: ThemePropertiesDemoComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routerConfig), ThemeBuildInDemoModule, AdjustFontColorDemoModule,
        ThemePropertiesDemoModule
    ]
})
export class ThemeDemoModule {
}
