import { useEffect, useState } from 'react';
import './App.css';
import heroBg from './assets/img/home/bg.jpg';
import logo from './assets/img/home/logo.png';

const services = [
  {
    icon: 'ET',
    title: 'Estimulacion Temprana',
    desc: 'Actividades disenadas para potenciar el desarrollo cognitivo, motor y emocional desde los primeros meses de vida.',
  },
  {
    icon: 'JL',
    title: 'Juego Libre y Dirigido',
    desc: 'Espacios seguros donde los ninos exploran, crean y aprenden a traves del juego en todas sus formas.',
  },
  {
    icon: 'PC',
    title: 'Preescolar Creativo',
    desc: 'Preparacion academica divertida basada en metodologias activas que despiertan el amor por aprender.',
  },
  {
    icon: 'AR',
    title: 'Artes y Expresion',
    desc: 'Musica, danza, teatro y artes plasticas integradas como herramientas de aprendizaje y expresion emocional.',
  },
  {
    icon: 'AL',
    title: 'Educacion al Aire Libre',
    desc: 'Actividades en entornos naturales que fomentan la conexion con el mundo y el desarrollo sensorial.',
  },
  {
    icon: 'AE',
    title: 'Apoyo Emocional',
    desc: 'Acompanamiento socioafectivo para que cada nino desarrolle autoestima, empatia e inteligencia emocional.',
  },
];

const stats = [
  { number: '10+', label: 'Anos de experiencia', color: '#FFD93D' },
  { number: '200+', label: 'Familias felices', color: '#FF6B9D' },
  { number: '15', label: 'Maestros certificados', color: '#4ECDC4' },
  { number: '100%', label: 'Ambiente seguro', color: '#FF6B35' },
];

const aboutServices = [
  'Estancia infantil',
  'Apoyo academico',
  'Clases de ingles',
  'Reforzamiento pedagogico',
];

const contactItems = [
  { icon: 'UB', label: 'Direccion', value: 'Monterrey, Nuevo Leon, Mexico', bg: '#FFF3C4' },
  { icon: 'TE', label: 'Telefono', value: '+52 (81) 1234-5678', bg: '#FFE0EC' },
  { icon: 'EM', label: 'Email', value: 'hola@estanciainfanciacreativa.com', bg: '#D4F5F1' },
  { icon: 'HR', label: 'Horario', value: 'Lunes a Viernes - 7:00am a 6:00pm', bg: '#EDE9FE' },
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a className="nav-logo" href="#inicio">
          <span className="nav-logo-dot">
            <img src={logo} alt="" />
          </span>
          <span className="nav-logo-text">
            Estancia
            <span>Infancia Creativa</span>
          </span>
        </a>

        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Quienes Somos?</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a className="nav-cta" href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <section id="inicio" className="hero" style={{ '--hero-bg': `url(${heroBg})` }}>
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Guarderia & Preescolar
          </div>

          <h1 className="hero-title">
            <span className="accent-pink">Infancia</span>
            <span className="accent-blue">Creativa</span>
            <span className="accent-orange">Estancia</span>
          </h1>

          <p className="hero-tagline">Explorar, Pensar y Crear</p>
          <p className="hero-desc">
            Somos un centro que contribuye en el desarrollo integral del nino dentro de
            un entorno seguro, a traves de programas innovadores basados en el juego y
            el movimiento.
          </p>

          <div className="hero-buttons">
            <a className="btn btn-primary" href="#servicios">Ver servicios</a>
            <a className="btn btn-secondary" href="#contacto">Contactanos</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-stage">
            <div className="hero-img-frame">
              <div className="hero-img-placeholder">
                <img className="hero-placeholder-logo" src={logo} alt="Infancia Creativa" />
              </div>
            </div>
            <div className="hero-float hero-float-1">Ambiente seguro</div>
            <div className="hero-float hero-float-2">Maestros certificados</div>
            <div className="hero-float hero-float-3">Con amor</div>
          </div>
        </div>
      </section>

      <div className="cloud-separator" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <section id="nosotros" className="about">
        <div className="about-visual">
          <div className="about-cards-grid">
            <article className="about-card">
              <span>MS</span>
              <h3>Nuestra Mision</h3>
              <p>Contribuir al desarrollo integral del nino dentro de un entorno seguro y estimulante.</p>
            </article>
            <article className="about-card">
              <span>VS</span>
              <h3>Nuestra Vision</h3>
              <p>Ser la guarderia de referencia en innovacion educativa y desarrollo infantil.</p>
            </article>
            <article className="about-card">
              <span>MT</span>
              <h3>Metodologia</h3>
              <p>Aprendizaje basado en el juego, movimiento y experiencias significativas.</p>
            </article>
            <article className="about-card">
              <span>VL</span>
              <h3>Valores</h3>
              <p>Amor, respeto, creatividad y compromiso con cada familia.</p>
            </article>
          </div>
        </div>

        <div className="about-content">
          <div className="section-label">Quienes somos?</div>
          <h2 className="section-title">Un espacio donde los ninos florecen</h2>
          <p className="section-desc">
            Somos un centro que contribuye al desarrollo integral del nino dentro de un
            entorno seguro a traves de programas innovadores, basados en el juego y
            movimiento, alcanzando aprendizajes significativos.
          </p>
          <p className="section-desc">
            Acompanamos a cada pequeno con actividades academicas, creativas y
            socioemocionales para que explore, piense y cree con confianza.
          </p>
          <div className="about-service-tags" aria-label="Programas principales">
            {aboutServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Datos de confianza">
        {stats.map((item) => (
          <article className="stat-item" key={item.label}>
            <strong style={{ color: item.color }}>{item.number}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section id="servicios" className="services">
        <div className="services-header">
          <div className="section-label">Lo que ofrecemos</div>
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-desc">
            Programas disenados para acompanar cada etapa del desarrollo infantil con
            amor, creatividad y profesionalismo.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <span className="cta-emoji">IC</span>
          <h2>Listo para inscribir a tu pequeno?</h2>
          <p>Agenda una visita gratuita y conoce nuestras instalaciones. Cupos limitados cada ciclo.</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-white" href="#contacto">Agendar visita</a>
          <a className="btn btn-outline-white" href="tel:+528001234567">Llamar ahora</a>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div>
          <div className="section-label">Hablemos</div>
          <h2 className="section-title">Visitanos o escribenos</h2>
          <p className="section-desc">
            Estamos aqui para responder tus dudas y ayudarte a encontrar el mejor
            programa para tu hijo.
          </p>

          <div className="contact-info-items">
            {contactItems.map((item) => (
              <article className="contact-item" key={item.label}>
                <span className="contact-item-icon" style={{ background: item.bg }}>{item.icon}</span>
                <span>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
              </article>
            ))}
          </div>
        </div>

        <form className="contact-form">
          <h3>Envianos un mensaje</h3>
          <div className="form-row">
            <label>
              Nombre
              <input placeholder="Tu nombre" />
            </label>
            <label>
              Telefono
              <input placeholder="81 xxxx-xxxx" />
            </label>
          </div>
          <label>
            Email
            <input placeholder="correo@ejemplo.com" type="email" />
          </label>
          <label>
            Edad de tu hijo/a
            <input placeholder="ej. 2 anos 3 meses" />
          </label>
          <label>
            Mensaje
            <textarea placeholder="En que podemos ayudarte?" />
          </label>
          <button className="btn btn-primary" type="button">Enviar mensaje</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <a className="nav-logo" href="#inicio">
            <span className="nav-logo-dot">
              <img src={logo} alt="" />
            </span>
            <span className="nav-logo-text">
              Estancia
              <span>Infancia Creativa</span>
            </span>
          </a>
          <p>Un espacio seguro y lleno de amor donde los ninos exploran, piensan y crean.</p>
        </div>
        <small>2026 Estancia Infancia Creativa. Todos los derechos reservados.</small>
      </footer>

      <a className="whatsapp-fab" href="https://wa.me/528001234567" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        WA
      </a>
    </>
  );
}

export default App;
