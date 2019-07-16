var ctx= document.getElementById("idcanvas").getContext('2d');


dibujar(ctx);

function dibujar(ctx) {
    ctx.translate(500,500);
    rama(ctx,110,0.4); // El angulo va en radianes
}

function rama(ctx,largo,ang){
    ctx.moveTo(0,0);
    ctx.lineTo(0,- largo);
    ctx.stroke();
    if (largo>10){
        ctx.save();
        ctx.translate(0, -largo);
        ctx.moveTo(0,0);
        ctx.rotate(ang);
        rama(ctx, largo * 0.75,ang);
        ctx.restore();
        
        ctx.translate(0, -largo);
        ctx.moveTo(0,0);
        ctx.rotate(-ang);
        rama(ctx, largo * 0.75,ang); 
    }
}

