import Footer from '../components/Footer';
import Header from '../components/Header';
import DepoimentosContent from './components/DepoimentosContent';
// import GradientContainer from './components/GradientContainer';
import HeroContent from './components/HeroContent';
import HistoryContent from './components/HistoryContent';
import IdealServices from './components/IdealServices';
import SeguradorasContent from './components/SeguradorasContent';

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroContent />
      <IdealServices />
      {/* <GradientContainer /> */}
      <HistoryContent />
      <DepoimentosContent />
      <SeguradorasContent />
      <Footer />
      {/* Adicione mais seções aqui conforme necessário */}
    </main>
  );
}