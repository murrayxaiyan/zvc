class BSDialogsDemo1 extends ZCustomControllr {
    onOpenDialog_click() {
        this.showDialog("./WDialog1", {}, 
            name => this.output.text = "Hello " + name, 
            _ => console.log("cancel")
        )
    }
}
ZVC.export(BSDialogsDemo1);
