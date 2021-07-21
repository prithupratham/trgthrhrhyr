var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('https://guardian.ng/wp-content/uploads/2020/06/birthday.jpg',function(Img){	
	block_image_object=Img;

    block_image_object.scaleToWidth(650);
    block_image_object.scaleToHeight(450);
    block_image_object.set({
        top:0,
        left:0
    });
    canvas.add(block_image_object);

});
}

function playsound()
{
	x.play();

}

