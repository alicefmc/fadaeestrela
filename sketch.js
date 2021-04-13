var imgEstrela,imgFt;
var estrela, corpoEstrela;
//criar variável para sprite de fada e imgFada

const Mecanismo = Matter.Mecanismo;
const Mundo = Matter.Mundo;
const Corpos = Matter.Corpos;
const Body = Matter.Body;

function preload()
{
    imgEstrela = loadImage("images/star.png");
    imgFt = loadImage("images/starNight.png");
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada

    estrela = createSprite(650,30);
    estrela.addImage(imgEstrela);
    estrela.scale = 0.2;

    Mecanismo = Mecanismo.create();
    Mundo = Mecanismo.Mundo;

    corpoEstrela = Corpos.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
    Mundo.add(Mundo, corpoEstrela);
    
    Mecanismo.run(Mecanismo);

}
