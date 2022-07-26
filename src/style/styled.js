import styled, { keyframes } from "styled-components";
import fire from '../icons/fireborder.svg';

export const ContainerMain = styled.div`
  background-color: #f9f9f9f9;
`;

export const Header = styled.header`
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-image: linear-gradient(to left, #010000, #020000);
  display: grid;
  grid-template-rows: 250px 1fr;

  h1 {
    color: #ffffff;
    margin-left: 70px;
    margin-top: 50px;
  }
`;

export const FireLeft = styled.div`
  position: absolute;
  top: -13px;
  left: 0;
  overflow: hidden;
  transform: rotate(180deg);
  z-index: -1;
`;

export const FireRight = styled.div`
  position: absolute;
  bottom: -30px;
  right: 0;
  overflow: hidden;
  z-index: -1;
`;

export const ContainerNav = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    ol {
      text-align: center;
      display: flex;
      margin-left: -20px;

      li {
        :nth-child(1) {
          margin-left: -5px;
        }
        list-style: none;
      }
      a {
        color: #fff;
        margin-left: 30px;
        font-size: 18px;
        text-decoration: none;
      }
    }
  }
`;

export const ContainerSpan = styled.div`
  margin-left: 20px;
  span {
    margin-left: 10px;
  }
`;

export const Presentation = styled.div`
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ContainerDescriptionAmburguer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    font-family: "Bebas Neue", cursive;
    color: #ffc326;
    text-transform: uppercase;
    font-size: 80px;
    width: 50px;
    margin-left: 50px;
    margin-top: -50px;
    p {
      color: #fff;
    }
  }
  p {
    margin-top: -70px;
    margin-left: 50px;
    color: #fff;
    font-size: 24px;
    width: 500px;
  }
  button {
    width: 204px;
    height: 50px;
    background-color: #6b0909;
    border: none;
    margin-left: 50px;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
  }

  span {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    background-color: #6b090980;
    position: absolute;
    right: 200px;
    top: 20px;
    z-index: -1;
    filter: blur(80px);
  }
`;

export const BlurLeft = styled.span`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  background-color: #6b090990;
  position: absolute;
  left: -50px;
  bottom: -50px;
  z-index: -1;
  filter: blur(80px);
`;

export const ContainerHamburguerHeader = styled.div`
  margin-top: -75px;
  display: flex;
  align-items: center;
  position: relative;
  
  ol {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: -10px;
      margin-left: -50px;
    }
    li img {
        margin-bottom: 20px;
    }
    `;

export const Amburguer = styled.img`
  ::before {
      color: #fff;
    }
    `;

const efeitoQuente = keyframes`
    0% {
        margin-top:-35px;
    }25% {
        margin-top: -40px;
    }
    50% {
        margin-top: -35px;
    }
    75% {
        margin-top: -30px;
    }
    100% {
        margin-top: -35px;
    }
    `;
export const EfeitoFumaça = styled.img`
font-family: roboto;
  position: absolute;
  width: 200px;
  margin-top: -30px;
  
  animation: ${efeitoQuente} 4s ease-in infinite;
  `;

export const TextPrice = styled.span`
  font-family: roboto;
  position: absolute;
  display: flex;
  top: 170px;
  left: -40px;
  width: 165px;
  justify-content: center;
  align-items: center;
  height: 55px;
  color: #fff;
  font-size: 36px;
  border-radius: 10px;
  font-weight: 700;
  background-image: linear-gradient(to left, #4b0202, #2a0202);
  `;

export const Lancamento = styled.img`
  font-family: roboto;
  position: absolute;
  top: 20px;
  right: 130px;
  `;

export const ContainerBestSellers = styled.div`
font-family: roboto;
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 271px);
  column-gap: 50px;
  row-gap: 20px;
  justify-content: center;

  article {
    font-family: "Roboto", cursive;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    background-color: #fff;
    box-shadow: 0px 2px 8px #00000025;
    border-radius: 10px;
    padding-bottom: 50px;

    h2 {
      color: #ff9800;
      font-weight: 700;
      font-size: 25px;
    }

    p {
      width: 240px;
      text-align: left;
      margin-left: auto;
      margin-right: auto;
      color: #969393;
      font-size: 15px;
    }

    h3 {
      font-weight: 900;
      font-size: 30px;

      ::after {
        content: "R$";
        margin-left: 5px;
    }
    }
    button {
      display: flex;
      align-items: center;
      background-color: #f9f9f9;
      border: none;
      box-shadow: 1px 1px 4px #000;
      span {
        font-size: 24px;
        font-weight: 700;
        color: #8cde77;
        margin-left: 10px;
        margin-right: 15px;
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 250px;
      height: 150px;
      
      img {
          margin-top: 20px;
          width: 100%;
          height: 100%;
        }
    }
}
`;

export const VerMais = styled.button`
font-family: roboto;
  background-color: #f9f9f9;
  border: 1px solid #000;
  border-radius: 6px;
  height: 38px;
  width: 10%;
  margin-top: 30px;
  margin-left: 45%;
  margin-right: 45%;
  font-size: 18px;
  font-weight: 700;
  `;

export const ArticleCombo = styled.article`
font-family: roboto;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  background-color: #fff;
  box-shadow: 1px 1px 8px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
    width: 250px;
    height: 150px;
    
    img {
        width: 100%;
    }
}

h2 {
    color: #ff9800;
    font-weight: 700;
    font-size: 25px;
}

p {
    width: 240px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #969393;
    font-size: 15px;
}
`;

export const ContainerCombo = styled.div`
      font-family: roboto;
  h1 {
      width: 550px;
    color: #000;
    font-weight: 700;
    font-size: 36px;
  }
`;

export const ContainerMenuArtesanal = styled.div`
font-family: roboto;
  width: 100%;
  .Menu {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 36px;
    width: 767px;
  }
  .TitleSection {
    color: #969393;
    font-size: 30px;
    text-align: center;
    position: relative;

    :hover {
      color: #ff9800;
    }
    ::after {
      content: "";
      display: flex;
      width: 250px;
      height: 2px;
      position: absolute;
      bottom: -3px;
      right: 545px;
    }
    :hover::after {
      transition: 0.3s linear;
      background-color: #ff9800;
    }
  }
  section {
    margin-top: -20px;
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
    padding: 0 15px;
    box-sizing: border-box;
    column-gap: 50px;
    justify-items: center;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    h1 {
      font-size: 25px;
      color: #000;
    }
    p {
      font-family: roboto;
      margin-top: -20px;
      width: 100%;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const ContainerMenuLancamentos = styled(ContainerMenuArtesanal)`
  margin-top: 50px;
`;

export const ContainerMenuPromocoes = styled(ContainerMenuArtesanal)`
  margin-top: 50px;
`;

export const PresentationChief = styled.section`
    font-family: roboto;
    width: 100%;
    height: 550px;
    position: relative;
    background-color: #000;
    color: #fff;
    
    
    display: flex;
    justify-content: space-between;
    
    
    ::before {
        content: '';
        display: flex;
        width: 150px;
        height: 150px;
        background-color: red;
        position: absolute;
        left:-190px;
        top: 200px;
        filter: blur(150px);
    }
    
    .ContainerTextChief {
        margin-top: 50px;
        margin-left: 35px;
        color: #f9f9f9;
        
        h2 {
            font-size: 24px;
            font-weight: 700;
        }
        
        p{
            font-style: normal;
            font-size:16px;
            margin-top: -15px;
            font-weight: 400;
        }
        
        h3 {
            width: 319px;
            font-weight: 400;
            font-size:24px;
            font-style: italic;
        }
        
        ::before {
            content: '';
        }
    }
    
    .SubTexChief {
        margin-top: 350px;
        margin-right: 30px;
        width: 319px;
        font-weight: 400;
        font-size:24px;
        font-style: italic;
    }
    
    .ChiefImg {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 58.7%;
        left: 50%;
        width: 492px;
        height: 482px;
        img {
            width: 100%;
            position: relative;
        }
        
        .FireChiefLeft {
            position: absolute;
            bottom: 10px;
            right:-65px;
            width: 255px;
            z-index: -1;
            transform:rotateY(180deg);
        }
        .FireChiefRight {
            position: absolute;
            bottom: 10px;
            left:-65px;
            width: 255px;
            z-index: -1;
        }
    }
    
    `;
export const TitleChief = styled.h1 `
    font-family: roboto;
    font-size: 36px;
    margin-top: 60px;
    `;

export const SectionInfo = styled.section `
    margin-top: 50px;
    font-family: roboto;
    
    display: grid;
    grid-template-columns: 1fr 1fr;

    .contentInfo {
        margin-left: 50px;
        display: flex;
        flex-direction: column;

        h1 {
            width: 596px;
            font-size: 36px;
        }

        p {
            margin-top: -20px;
            margin-bottom: 70px;
            font-size: 18px;
            width: 404px;
        }

        button {
            width: 253px;
            height: 50px;
            background-color: #6B0909;
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 5px;
            color: #fff;
            font-weight:700;            

            span img {
                width: 20px;
            }
        }

    }
    .contentImgburguer {
        position: relative;

        .spanBack {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background-color: #000;
            position: absolute;
            right: 250px;
            top: 70px;
        }

        img {
            width: 320px;
            position: absolute;
            right: 250px;
            top:85px
        }

        span img{
            width: 100px;
        }
    }
    margin-bottom: 150px;
`;

export const FooterSection =styled.footer `
    color: #fff;
    background-color:#000;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items:center;
    align-items: center;
    padding: 0 2px;
    box-sizing: border-box;

    .column1 {
        display: flex;
        flex-direction: column;
        justify-content: left;
        margin-left: 50px;

        h1 {
            font-family: 'Poppins';
            font-size: 36px;
        }
        
        p {
            font-size: 14px;
            width: 224px;
            margin-top: -10px;
        }
 
        ol{
            display: flex;
            margin-top: -5px;
            margin-left: -45px;

            li {
                font-size: 18px;
                margin-left: 10px;
                list-style: none;
                
                img {
                    width: 80%;
                }
            }
        }
    }
    .column2 {
        li {
            font-size: 18px;
            list-style: none;
        }
    }
    .column3 {
        p {
            width: 248px;
            font-size: 18px;
        }
    }
    ::after {
        content: '';
        width: 200px;
        height: 100px;
        display: flex;
        background-color: #6B0909;
        position: absolute;
        right: 0px;
        filter: blur(100px);
    }
    
    .copy {
        grid-column: 2/2;
        width: 150px;        
        text-align: center;
    }
`