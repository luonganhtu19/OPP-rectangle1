class Rectangle{
    constructor(_length,_width) {
        this.length=_length;
        this.width=_width;
    }
    getPerimeter(){
        let per=this.length+this.width;
        return 2*per;
    }
    getArea(){
        let ar= this.length*this.width;
        return ar;
    }
    getranDom(){
        return Math.random();
    }
    getranDomColor(){
        let red  =Math.floor(this.getranDom()*255);
        let blu  =Math.floor(this.getranDom()*255);
        let green=Math.floor(this.getranDom()*255);
        return `rgb(${red},${blu},${green})`;
    }
}
function createRec() {
    document.getElementById("myCanvas").inputMode="";

    let length=+document.getElementById("length").value;
    let width=+document.getElementById("width").value;

    let c=document.getElementById("myCanvas");
    let ctx=c.getContext("2d");
    // clear canvas
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath()
    ////////
    let rec=new Rectangle(length,width);
    //alert(length);
    let color=rec.getranDomColor();
    ctx.fillStyle=color;
    ctx.fillRect(20,20,20+length,20+width);
    document.getElementById("result").innerHTML= "Rectangle with length " +length +" and width "+width +
                                                          "<br>"+"Area: "+rec.getArea()+
                                                           "<br>"+"Per: "+rec.getPerimeter();

}