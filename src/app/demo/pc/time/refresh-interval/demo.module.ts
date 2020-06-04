import {NgModule} from '@angular/core';
import {JigsawTimeModule} from "jigsaw/public_api";
import {TimeRefreshIntervalComponent} from './demo.component';
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";

@NgModule({
    imports: [JigsawTimeModule, JigsawDemoDescriptionModule],
    declarations: [TimeRefreshIntervalComponent],
    exports: [TimeRefreshIntervalComponent]
})
export class TimeRrefreshIntervalDemoModule {
}
