import {Component} from "@angular/core";
import {JigsawConfirmAlert, JigsawErrorAlert, JigsawInfoAlert, JigsawWarningAlert} from "jigsaw/public_api";

@Component({
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class AlertPopupDemoComponent {
    header = '这是一个标题';
    message = '弹出的信息也可以直接给一个字符串，Alert会将此字符串作为主消息显示出来。';
    answer = '';

    createLongText() {
        this.message = 'This is very long regular text in English. This is very long regular text in English. This is very long abnormall texxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxt in English. 这是一长串数字123456789012345678901234567890123456789012345678901234567890';
    }

    commonInfoAlert() {
        this.answer = 'waiting for an answer';
        const info = {header: this.header, message: this.message};
        JigsawInfoAlert.show(info, answer => {
            this.answer = answer ? 'great! your answer is: ' + answer.label : 'you closed the alert with the close button';
        });
    }

    commonWarningAlert() {
        this.answer = 'waiting for an answer';
        const info = {header: this.header, message: this.message};
        JigsawWarningAlert.show(info, answer => {
            this.answer = answer ? 'great! your answer is: ' + answer.label : 'you closed the alert with the close button';
        });
    }

    commonErrorAlert() {
        this.answer = 'waiting for an answer';
        const info = {header: this.header, message: this.message};
        JigsawErrorAlert.show(info, answer => {
            this.answer = answer ? 'great! your answer is: ' + answer.label : 'you closed the alert with the close button';
        });
    }

    commonConfirmAlert() {
        this.answer = 'waiting for an answer';
        const info = { header: this.header, message: this.message };
        JigsawConfirmAlert.show(info, answer => {
            this.answer = answer ? 'great! your answer is: ' + answer.label : 'you closed the alert with the close button';
        },
            /* custom your own buttons*/
            [{ label: 'alert.button.yes' }, { label: 'alert.button.no' }, { label: "不知道" }]);
    }

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '演示了如何弹出一个Alert组件';
    description: string = '';
}
