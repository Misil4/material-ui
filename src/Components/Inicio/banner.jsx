import React from 'react';
const Texts = {
    Title: "Bienvenido a mi pagina web",
    Subtitle: "Trabajamos con las ultimas tecnologias"
}
class Banner extends React.Component {
    render() {
        return(
            <div className="Banner">
                <h1>{Texts.Title}</h1> <br />
                <h3>{Texts.Subtitle}</h3>
            </div>
        )
    }
}
export default Banner