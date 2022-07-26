import React, {useState} from 'react'

import { ContainerMenuArtesanal, ContainerMenuLancamentos,ContainerMenuPromocoes } from '../../style/styled.js'

function Menu() {
    const bestSellers = [
        {
          id: 1,
          name: "Black Burguer",
          ingredients:
            "Hambuguer preparado na brasa,  molho cheddar, picles, bacon defumado",
          price: "32.00",
          image: "https://save-images.vercel.app/icons/amburguer/black-burguer.svg",
        },
        {
          id: 2,
          name: "Roliço Burguer",
          ingredients:
            "Hambuguer preparado na brasa, alface, cheddar, bacon cebola frita e molho barbecue",
          price: "19.50",
          image:
            "https://save-images.vercel.app/icons/amburguer/rolico-burguer.svg",
        },
        {
          id: 3,
          name: "Megacheese",
          ingredients:
            "Hambuguer preparado na brasa, alface, cheddar, cebola frita, bacon e molho barbecue",
          price: "22.50",
          image: "https://save-images.vercel.app/icons/amburguer/megacheese%20.svg",
        },
        {
          id: 4,
          name: "X-tudo AM",
          ingredients:
            "Hambuguer preparado na brasa, salada, molho cheddar, picles, bacon defumado e molho especial",
          price: "20.00",
          image: "https://save-images.vercel.app/icons/amburguer/xtudo-am.svg",
        },
        {
          id: 5,
          name: "Big BBQ",
          ingredients:
            "Hambuguer preparado na brasa,  molho cheddar, picles, bacon defumado",
          price: "29.50",
          image: "https://save-images.vercel.app/icons/amburguer/big-bbq.svg",
        },
        {
          id: 6,
          name: "Burguer Chicken",
          ingredients:
            "Hambuguer de frango na feito brasa, alface, cheddar, bacon e molho barbecue",
          price: "22.50",
          image:
            "https://save-images.vercel.app/icons/amburguer/burguer-chicken.svg",
        },
        {
          id: 7,
          name: "Gigante AM",
          ingredients:
            "Hambuguer preparado na brasa, alface, cheddar, cebola frita, bacon e molho barbecue",
          price: "25.00",
          image: "https://save-images.vercel.app/icons/amburguer/gigante-am.svg",
        },
        {
          id: 8,
          name: "Monstrão",
          ingredients:
            "Hambuguer preparado na brasa, salada, molho cheddar, picles, bacon defumado e molho especial",
          price: "28.50",
          image: "https://save-images.vercel.app/icons/amburguer/monstrao.svg",
        },
      ];
    
    return (
        <div>
            <ContainerMenuArtesanal>
                <h1 className='Menu'>Conheças todos os nossos burgues, acompanhe nosso cardápio</h1>
                <h1 className='TitleSection'>Artesanal</h1>
                <section>
                    {bestSellers.slice(0,8).map((item) => {
                        const  {id, name, price, ingredients} = item;
                        return(
                            <article key={id}>
                                <div>
                                    <h1>
                                        {name}
                                    </h1>
                                    <h2>
                                        {price} R$
                                    </h2>
                                </div>
                                <p>
                                    {ingredients}
                                </p>
                            </article>
                        )
                    })}
                </section>
            </ContainerMenuArtesanal>
                    
            <ContainerMenuLancamentos>
                <h1 className='TitleSection'>Lançamentos</h1>
                    <section>
                        {bestSellers.slice(0,4).map((item) => {
                            const {id, name, price, ingredients} = item;
                            return (
                                <article key={id}>
                                    <div>
                                        <h1>{name}</h1>
                                        <h2>{price} R$</h2>
                                    </div>

                                    <p>{ingredients}</p>
                                </article>
                            )
                        })}
                    </section>
            </ContainerMenuLancamentos>

            <ContainerMenuPromocoes>
                <h1 className='TitleSection'>Promoções</h1>
            <section>
                        {bestSellers.slice(0,6).map((item) => {
                            const {id, name, price, ingredients} = item;
                            return (
                                <article key={id}>
                                    <div>
                                        <h1>{name}</h1>
                                        <h2>{price} R$</h2>
                                    </div>

                                    <p>{ingredients}</p>
                                </article>
                            )
                        })}
                    </section>

            </ContainerMenuPromocoes>
        </div>
    )
}

export default Menu