import {Component} from "@angular/core";
import {TimeGr, TimeService, ArrayCollection} from "jigsaw/public_api";

@Component({
    templateUrl: './demo.component.html'
})
export class WithComboSelectDemoComponent {
    date = TimeService.getFormatDate('now', TimeGr.second);
    singleTimeComboValue = new ArrayCollection([{
        label: this.date,
        closable: false
    }]);

    beginDate = TimeService.getFormatDate('now-7d', TimeGr.date);
    endDate = TimeService.getFormatDate('now', TimeGr.date);
    rangeTimeComboValue = new ArrayCollection([
        {label: this.beginDate, closable: false},
        {label: this.endDate, closable: false}
    ]);

    handleDateChange() {
        if (this.date === "") {
            this.singleTimeComboValue.splice(0, this.singleTimeComboValue.length);
        } else {
            this.singleTimeComboValue = new ArrayCollection([{
                label: this.date,
                closable: false
            }]);
        }
        this.singleTimeComboValue.refresh();
    }
// ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '';
    description: string = '';
}
