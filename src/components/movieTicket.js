import smCardlight from '../img/smCardLight.svg';
import smCardDark from '../img/smCardDark.svg';
import lgCardLight from '../img/lgCardLight.svg';
import lgCardDark from '../img/lgCardDark.svg';

function MovieTicket(props){
    if(props.size == "small"){
        return (
            <>
                <div className="card-container">
                    <div className="card-left">
                        <div className="card-light">
                            <img src={smCardlight}/>
                        </div>
                        <div className="desconto">
                            <h1>{props.desconto}% OFF</h1>
                        </div>
                        <div className="info-filme">
                            <div className="classificacao">
                                <h1>L</h1>
                            </div>
                            <div className="genero">
                                <h1>
                                    {props.genero}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="card-right">
                        <div className="card-dark">
                            <img src={smCardDark}></img>
                        </div>
                        <div className="info-sessao">
                            <h2 className="titulo">{props.tituloFilme}</h2>
                            <span className="local">Cinemark Village Mall</span>
                            <span className="data">Use de segunda à sexta</span>
                            <span className="sessao">Sessões até 18:30</span>
                        </div>

                    </div>
                </div>
            </>
        );
    }
    if(props.size == "big"){
        return (
            <>
                <div className="big-card-container">
                    <div className="big-card-left">
                        <div className="big-card-light">
                            <img src={lgCardLight}/>
                        </div>
                        <div className="big-desconto">
                            <h1>{props.desconto}% OFF</h1>
                        </div>
                    </div>
                    <div className="big-card-right">
                        <div className="big-card-dark">
                            <img src={lgCardDark}></img>
                        </div>
                        <div className="big-info-sessao">
                            <h2 className="big-titulo">{props.tituloFilme}</h2>
                            <span className="big-local">Cinemark Village Mall</span>
                            <span className="big-data">Use de segunda à sexta</span>
                            <span className="big-sessao">Sessões até 18:30</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MovieTicket;