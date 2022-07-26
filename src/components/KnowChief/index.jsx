import React from "react";
import { PresentationChief, TitleChief } from "../../style/styled";
import chief from "../../icons/chief.svg";
import fire from '../../icons/fireborder.svg'

function KnowChief() {
    return (
        <div>
            <TitleChief>Conheça nosso chef</TitleChief>
            <PresentationChief>
                <div className="ContainerTextChief">
                    <h2>Gustavo Ambrósio</h2>
                    <p>Chef e sócio proprietário</p>
                    <div>
                        <h3>
                            “Abrir uma hamburgueria era um sonho desde de criança,aprendi a
                            fazer hamburguer com meu pai, desde os 12 anos, faziamos burgues
                            nos domingos.”
                        </h3>
                    </div>
                </div>

                <div className="ChiefImg">
                    <img src={chief} />
                    <span className="FireChiefLeft"><img src={fire}/></span>
                    <span className="FireChiefRight"><img src={fire}/></span>
                </div>

                <div>
                    <h3 className="SubTexChief">
                        “É a realização de um sonho abrir um negócio pra familia, trabalhar
                        com meu pai e minha mãe em algo que amo”
                    </h3>
                </div>
            </PresentationChief>
        </div>
    );
}

export default KnowChief;
