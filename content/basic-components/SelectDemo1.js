class SelectDemo1 extends ZCustomController {
    onFramework_change() {
        this.output.text = "[" + this.framework.value + "] " + this.framework.selectedText.textContent;
    }
    onSelectUIKit_click() {
        this.framework.value = "uiKit";
    }
}

ZVC.export(SelectDemo1);