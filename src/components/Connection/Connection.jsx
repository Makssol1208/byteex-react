import './connection.css';

import aboutYou from '../../assets/img/aboutYou.png';
import vector from '../../assets/img/hero/Vector.png';

export default function Connection() {
  return (
    <section className="connection">
      <div className="container">
        <div className="connection-content">
          <h3 className="connection-title mobile">Be your best self.</h3>
          <div className="connection-img">
            <img src={aboutYou} alt="About you" />
          </div>
          <div className="connection-desc">
            <h3 className="connection-title">Be your best self.</h3>
            <p>
              Hi! My name’s [Insert Name], and I founded [Insert] in ____.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce
              lobortis sapien facilisis tincidunt pellentesque.In eget ipsum et
              felis finibus consequat.
              <br />
              <br />
              Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
              placerat volutpat ligula, ac consectetur felis varius non.Aliquam
              a nunc rutrum,porttitor dolor eu, pellentesque est.Vivamus id arcu
              congue,faucibus libero nec, placerat ligula.
              <br />
              <br />
              Orci varius natoque penatibus et magnis dis parturient
              montes,nascetur ridiculus mus. Sed eu nisl a metus ultrices
              sodales.
              <br />
              <br />
              Fusce non ante velit.Sed auctor odio eu semper molestie.Nam
              mattis, sapien eget lobortis fringilla,eros ipsum tristique
              tellus, ac convallis urna massa at nibh.
              <br />
              <br />
              Duis non fermentum augue.Vivamus laoreet aliquam risus, sed
              euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam
              nec in sapien.
              <br />
              <br />
              Cras mattis varius mollis.
            </p>

            <button className="btn connect">
              Customize Your Outfit
              <img
                src={vector}
                className="btn-img"
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
