import React from 'react';
import Combos from '../../components/combos';
import Footer from '../../components/Footer';
import ContainerHeader from '../../components/Header';
import KnowChief from '../../components/KnowChief';
import Menu from '../../components/Menu';
import SectionInformative from '../../components/SectionInformative';
import SectionProducts from '../../components/SectionProducts';

function Home() {
  return (
    <div>
      <ContainerHeader/>
      
        <main>
          <SectionProducts/>
          <section>
            <Combos/>
          </section>
          <section>
            <Menu/>
          </section>
          <section>
            <KnowChief/>
          </section>
          <section>
            <SectionInformative/>
          </section>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
    )
}
export default Home;