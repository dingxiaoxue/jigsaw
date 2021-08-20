import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {JigsawBoxModule, JigsawButtonBarModule, JigsawGraphModule, JigsawIconModule} from "jigsaw/public_api";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {BoxLayoutInteractionDemoComponent} from "./demo.component";

import {JigsawHeaderModule} from "jigsaw/public_api";

@NgModule({
    declarations: [BoxLayoutInteractionDemoComponent],
    exports: [BoxLayoutInteractionDemoComponent],
    imports: [JigsawDemoDescriptionModule, JigsawBoxModule, CommonModule, JigsawHeaderModule, JigsawIconModule, JigsawButtonBarModule, JigsawGraphModule]
})
export class BoxLayoutInteractionDemoModule {

}
