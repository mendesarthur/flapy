console.log("FLAPPY BIRD")

const sprites = new Image();
sprites.src = './sprites.png'

const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')


// background
const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha() {
        contexto.fillStyle = '#70c5ce'
        contexto.fillRect(0, 0, canvas.width, canvas.height)

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura, // Sprite x, Sprite y
            planoDeFundo.x, planoDeFundo.y, // Tamanho do recorte na sprite
            planoDeFundo.largura, planoDeFundo.altura,
        )
        contexto.drawImage(
            sprites,
            planoDeFundo.spritX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura, // Sprite x, Sprite y
            (planoDeFundo.x, planoDeFundo.largura), planoDeFundo.y, // Tamanho do recorte na sprite
            planoDeFundo.largura, planoDeFundo.altura,
        )
    }
}



// [Chão]
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura, // Sprite x, Sprite y
            chao.x, chao.y, // Tamanho do recorte na sprite
            chao.largura, chao.altura,
        )
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura, // Sprite x, Sprite y
            (chao.x, chao.largura), chao.y, // Tamanho do recorte na sprite
            chao.largura, chao.altura,
        )
    }
}



const flappyBird = {
    spritX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spritX, flappyBird.spriteY,
            flappyBird.largura, flappyBird.altura, // Sprite x, Sprite y
            flappyBird.x, flappyBird.y, // Tamanho do recorte na sprite
            flappyBird.largura, flappyBird.altura,
        )
    }
}

function loop() {
    planoDeFundo.desenha()
    chao.desenha()
    flappyBird.desenha()
    requestAnimationFrame(loop)
}
loop()
