import './App.css';
import Header from './componentes/Header';
import Tarjeta from './componentes/Tarjeta';
import Footer from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Header title="Galería de imágenes con React" />
      <Tarjeta address="https://cdn.pixabay.com/photo/2022/06/21/07/04/naruto-7275259_960_720.png" title="Naruto Uzumaki" description="Shinobi de Konoha, shinjuriki del kyuubi." />
      <Tarjeta address="https://cdn.pixabay.com/photo/2022/08/09/08/04/naruto-7374415_960_720.jpg" title="Sasuke Uchiha" description="Shinobi de Konoha, sobreviviente del clan Uchiha. Usuario del sharingan" />
      <Tarjeta address="https://cdn.pixabay.com/photo/2020/12/15/10/22/hinata-5833262_960_720.png" title="Hinata Hyuga" description="Shinobi de Konoha, heredera del clan Hyuga. Usuaria del byakugan." />
      <Tarjeta address="https://cdn.pixabay.com/photo/2021/07/03/10/54/naruto-6383641_960_720.png" title="Gaara" description="Shinobi de la aldea de la arena, Quinto  Kazekage. Jinchuriki del ichibi." />


      <Footer texto="Ninjas del mundo de Naruto Shippuden" />


    </div>
  );
}

export default App;
