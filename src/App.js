import { useEffect, useState } from 'react';
import './App.css';
import heroBg from './assets/img/home/bg.jpg';
import logo from './assets/img/home/logo.png';
import playingClassroom from './assets/img/home/playing-classroom-home.jpg';

const services = [
  {
    title: "Estancia Infantil",
    description:
      "Servicio de estancia para niños a partir de 2 meses hasta 5 años. Horario de 7:00 am a 7:00 pm.",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Estimulación temprana",
    description:
      "Por medio de juegos, actividades y ejercicios buscamos desarrollar y potenciar las habilidades del niño.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Estimulación del lenguaje",
    description:
      "A través del juego, cuentos y canciones trabajamos diferentes formas de expresión y comunicación.",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Control de esfínteres",
    description:
      "Apoyamos al niño en su proceso de aprendizaje de ir al baño, respetando sus tiempos.",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Desarrollo psicomotor",
    description:
      "Mediante actividades de movimiento buscamos desarrollar habilidades motrices, expresivas y creativas.",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Desarrollo socioemocional",
    description:
      "Brindamos un ambiente seguro y agradable donde predominan el diálogo, la escucha y la confianza.",
    image:
      "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hábitos y rutinas",
    description:
      "Establecemos horarios y espacios específicos para darle al niño organización, seguridad y autonomía.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Actividades artísticas",
    description:
      "Las artes ayudan a desarrollar sensibilidad, disciplina, creatividad y trabajo en equipo.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Servicio de comida",
    description:
      "Servicio opcional. La dieta de los niños es elaborada por una nutrióloga.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
  },
];

const galleryItems = [
  {
    title: 'Actividades creativas',
    image: playingClassroom,
  },
  {
    title: 'Juegos educativos',
    image:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Espacios seguros',
    image:
      'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Aprendizaje diario',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Arte y colores',
    image:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Convivencia',
    image: heroBg,
  },
];

const stats = [
  { number: '10+', label: 'Años de experiencia', color: '#FFD93D' },
  { number: '200+', label: 'Familias felices', color: '#FF6B9D' },
  { number: '15', label: 'Maestros certificados', color: '#4ECDC4' },
  { number: '100%', label: 'Ambiente seguro', color: '#FF6B35' },
];

const aboutBenefits = [
  'Autoconfianza y autoestima.',
  'Habilidades de comunicacion efectiva.',
  'Empatia y compasion hacia los demas.',
  'Valores eticos y responsabilidad.',
];

const contactItems = [
  { icon: 'location', label: 'Direccion', value: 'Monterrey, Nuevo Leon, Mexico', bg: '#FFF3C4' },
  { icon: 'phone', label: 'Telefono', value: '+52 (81) 1234-5678', bg: '#FFE0EC' },
  { icon: 'mail', label: 'Email', value: 'hola@estanciainfanciacreativa.com', bg: '#D4F5F1' },
  { icon: 'clock', label: 'Horario', value: 'Lunes a Viernes - 7:00am a 6:00pm', bg: '#EDE9FE' },
];

const testimonials = [
  {
    name: 'Mama de Valentina',
    text: 'Mi hija llega feliz todos los dias. Nos encanta la atencion y el carino con el que la reciben.',
  },
  {
    name: 'Papa de Mateo',
    text: 'Un espacio seguro, creativo y muy bonito. Hemos visto mucho avance en su aprendizaje.',
  },
  {
    name: 'Familia Rodriguez',
    text: 'Excelente trato, comunicacion y actividades. Nos sentimos muy tranquilos dejando a nuestro pequeno aqui.',
  },
];

const icons = {
  location: (
    <path d="M12 21s7-4.8 7-11a7 7 0 1 0-14 0c0 6.2 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  ),
  phone: (
    <path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7.1 9.4a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
  ),
  mail: (
    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm18 3-10 6L2 8" />
  ),
  clock: (
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-15v5l3 2" />
  ),
};

function ContactIcon({ name }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  );
}

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
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#ubicacion">Ubicacion</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
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

      <section id="nosotros" className="about">
        <div className="about-doodles" aria-hidden="true">
          <span className="doodle doodle-note">Aa</span>
          <span className="doodle doodle-apple" />
          <span className="doodle doodle-pencil" />
          <span className="doodle doodle-star">123</span>
          <span className="doodle doodle-rocket" />
          <span className="doodle doodle-blocks">ABC</span>
          <span className="doodle doodle-train" />
        </div>

        <div className="about-visual story-gallery">
          <figure className="photo-frame photo-frame-primary">
            <img src={playingClassroom} alt="Ninos jugando con material didactico" />
          </figure>
          <figure className="photo-frame photo-frame-secondary">
            <img src={heroBg} alt="Nino explorando juguetes en estancia infantil" />
          </figure>
        </div>

        <div className="about-content">
          <div className="section-label">Quienes somos?</div>
          <h2 className="section-title">Nos esforzamos por crear un ambiente seguro y amoroso</h2>
          <p className="section-desc">
            Somos un centro que contribuye en el desarrollo integral del nino dentro de
            un entorno seguro a traves de programas innovadores, basados en el juego y
            movimiento alcanzando aprendizajes significativos.
          </p>
          <p className="section-desc">
            Cada actividad esta pensada para que los ninos se sientan valorados,
            respetados y motivados a descubrir el mundo con alegria.
          </p>
          <ul className="about-benefits">
            {aboutBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <a className="btn btn-green" href="#servicios">Ver servicios</a>
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
              <img src={service.image} alt={service.title} />

              <div className="service-overlay">
                <div className="service-bottom">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="gallery">
        <div className="gallery-header">
          <div className="section-label">Galeria</div>
          <h2 className="section-title">Momentos llenos de aprendizaje y diversion</h2>
          <p className="section-desc">
            Conoce algunos espacios y actividades que forman parte de nuestra estancia.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </article>
          ))}
        </div>
      </section>

      {/* UBICACION */}
      <section id="ubicacion" className="location-section">
        <div className="location-grid">
          <div>
            <div className="section-label">Ubicacion</div>
            <h2 className="section-title">Encuentranos facilmente</h2>
            <p className="section-desc">
              Estamos ubicados en Calle Alejandro de Rodas 5661, Colonial Cumbres, 64349 Monterrey, N.L.
            </p>

            <div className="map-card">
              <iframe
                title="Ubicación Estancia Infantil"
                src="https://www.google.com/maps?q=25.6866,-100.3161&z=15&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <aside className="location-info-card">
            <h3>Datos para tu visita</h3>
            <div className="location-info-list">
              <article className="contact-item">
                <span className="contact-item-icon" style={{ background: '#FFF3C4' }}>
                  <ContactIcon name="location" />
                </span>
                <span>
                  <small>Direccion</small>
                  <strong>Monterrey, Nuevo Leon, Mexico</strong>
                </span>
              </article>
              <article className="contact-item">
                <span className="contact-item-icon" style={{ background: '#EDE9FE' }}>
                  <ContactIcon name="clock" />
                </span>
                <span>
                  <small>Horario</small>
                  <strong>Lunes a Viernes - 7:00am a 6:00pm</strong>
                </span>
              </article>
            </div>
            <a
              className="btn btn-primary"
              href="https://www.google.com/maps/search/?api=1&query=Monterrey%2C%20Nuevo%20Leon%2C%20Mexico"
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>
          </aside>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="testimonials">
        <div className="testimonials-header">
          <div className="section-label">Testimonios</div>
          <h2 className="section-title">Lo que dicen las familias</h2>
          <p className="section-desc">
            La confianza de cada familia nos motiva a seguir creando experiencias felices y seguras.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-quote" aria-hidden="true">"</div>
              <div className="testimonial-stars" aria-label="Cinco estrellas">★★★★★</div>
              <p>{testimonial.text}</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <span className="cta-logo">
            <img src={logo} alt="Infancia Creativa" />
          </span>
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
                <span className="contact-item-icon" style={{ background: item.bg }}>
                  <ContactIcon name={item.icon} />
                </span>
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
            <input placeholder="ej. 2 años 3 meses" />
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

      <a
        className="whatsapp-fab"
        href="https://wa.me/521XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="whatsapp-icon">
          <path
            fill="currentColor"
            d="M16.04 3C9.42 3 4.04 8.38 4.04 15c0 2.12.56 4.19 1.62 6.01L4 29l8.18-1.61A12 12 0 1 0 16.04 3zm0 22.03c-1.85 0-3.65-.5-5.22-1.45l-.37-.22-4.85.95.98-4.72-.25-.39A9.95 9.95 0 1 1 16.04 25.03zm5.72-7.45c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1.01 1.22-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.23 3.4 5.4 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37z"
          />
        </svg>
      </a>
    </>
  );
}

export default App;
