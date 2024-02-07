import terminalImage from "terminal-image";
import got from "got"

export async function getData() {
    var dados = await got('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').json()
    showData(dados.url)
}

export async function showData(url) {
    var body = await got(url).buffer()
    var imagem = await terminalImage.buffer(body)
    console.log(imagem)
}
