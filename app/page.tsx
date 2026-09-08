import { ArrowUpRight, ArrowRight, Check, Fingerprint, FileCheck2, Building2, MessageCircle, Mail, Phone, ShieldCheck, MoveDown } from 'lucide-react';

const whatsapp = 'https://wa.me/526644841118?text=Hola%2C%20me%20interesa%20conocer%20Cumre%20Inmobiliario%20para%20mi%20operaci%C3%B3n%20de%20arrendamiento.';
const correo = 'mailto:cumreinmobiliario@gmail.com?subject=Informaci%C3%B3n%20de%20Cumre%20Inmobiliario';

function Marca({ light = false }: { light?: boolean }) {
  return <a className={`marca ${light ? 'marca-light' : ''}`} href="#inicio" aria-label="Cumre Inmobiliario, inicio">
    <span className="official-logo"><img src={light ? './images/cumre-logo-white.png' : './images/cumre-logo-color.png'} alt="CumRe Inmobiliario" width="3000" height="3000" /></span>{light && <span className="brand-name">CumRe<span>INMOBILIARIO</span></span>}
  </a>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <header className="header" id="inicio"><div className="container nav">
      <Marca/>
      <nav aria-label="Navegación principal"><a href="#servicio">El servicio</a><a href="#proceso">Cómo empezar</a><a href="#preguntas">Preguntas</a></nav>
      <a className="button button-dark nav-cta" href="#contacto">Hablemos <ArrowUpRight size={17}/></a>
    </div></header>
    <main id="contenido">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot"/> CUMPLIMIENTO PARA ARRENDAMIENTOS</p>
          <h1 id="hero-title">Tu inmobiliaria<br/>avanza.<br/><span>Tu cumplimiento<br/>también.</span></h1>
          <p className="hero-description">Facilita tus obligaciones de identificación y presentación de avisos conforme a la LFPIORPI con <strong>Cumre Inmobiliario.</strong></p>
          <div className="hero-actions"><a className="button button-lime" href={whatsapp} target="_blank" rel="noopener noreferrer">Conoce el servicio <ArrowUpRight size={19}/></a><a className="text-link" href="#servicio">Explorar la solución <ArrowRight size={17}/></a></div>
          <p className="hero-footnote"><Building2 size={16}/> Para inmobiliarias que arriendan inmuebles en México.</p>
        </div>
        <div className="hero-visual">
          <div className="visual-heading"><span>MENOS COMPLEJIDAD.<br/>MÁS CLARIDAD.</span><ArrowUpRight size={35} strokeWidth={1.3}/></div>
          <img className="hero-photo" src="./images/espacio-inmobiliario.jpg" alt="Interior luminoso de un inmueble con ventanales y áreas abiertas" width="1000" height="1200" fetchPriority="high"/>
          <div className="visual-caption">Enfócate en tu operación.<br/><strong>Dale su lugar al cumplimiento.</strong></div>
          <div className="visual-bottom"><span><ShieldCheck size={19}/> ENFOQUE LFPIORPI</span><span>01 / 02</span></div>
          <div className="identification-card"><span className="mini-icon"><Fingerprint size={23}/></span><div><span>DOS OBLIGACIONES, UN ENFOQUE</span><strong>Identificación + Avisos</strong></div><Check size={18}/></div>
        </div>
      </section>
      <div className="focus-band"><div className="container"><p>El arrendamiento es tu actividad.<br/><strong>Facilitar el cumplimiento es nuestro enfoque.</strong></p><div className="focus-tags"><span><Fingerprint size={19}/> Identificación</span><i aria-hidden="true"/><span><FileCheck2 size={19}/> Presentación de avisos</span></div></div></div>

      <section className="section container" id="servicio" aria-labelledby="service-title">
        <div className="section-heading"><div><p className="eyebrow">EL SERVICIO</p><h2 id="service-title">Dos obligaciones.<br/>Un camino más claro.</h2></div><p>Cumre Inmobiliario está enfocado en facilitar las obligaciones que acompañan a la actividad de arrendamiento. Conoce cómo puede ayudar a tu inmobiliaria.</p></div>
        <div className="service-grid">
          <article className="service-card"><div className="card-top"><span className="card-icon"><Fingerprint size={30} strokeWidth={1.4}/></span><span className="card-number">01</span></div><h3>Identificación</h3><p>Facilita el trabajo relacionado con la identificación de clientes o usuarios de tus operaciones de arrendamiento.</p><div className="card-footer"><span>El primer paso para el cumplimiento</span><ArrowUpRight size={21}/></div></article>
          <article className="service-card"><div className="card-top"><span className="card-icon"><FileCheck2 size={30} strokeWidth={1.4}/></span><span className="card-number">02</span></div><h3>Presentación de avisos</h3><p>Apóyate en Cumre Inmobiliario para facilitar la presentación de los avisos que correspondan a tu actividad.</p><div className="card-footer"><span>Atención a tus obligaciones</span><ArrowUpRight size={21}/></div></article>
        </div>
        <div className="law-note"><ShieldCheck size={22}/><p><strong>Una solución pensada para tu actividad.</strong> La LFPIORPI contempla el uso o goce de inmuebles como actividad vulnerable bajo los supuestos previstos en la ley. Las obligaciones aplicables dependen de cada operación.</p><a href="https://sppld.sat.gob.mx/pld/interiores/arrendamiento.html" target="_blank" rel="noopener noreferrer">Consultar el SAT <ArrowUpRight size={16}/></a></div>
      </section>

      <section className="process-section" id="proceso" aria-labelledby="process-title"><div className="container process-layout"><div className="process-intro"><p className="eyebrow">CÓMO EMPEZAR</p><h2 id="process-title">Empecemos por<br/>tu inmobiliaria.</h2><p>Una conversación para conocer tu operación y el alcance del servicio que necesitas.</p><a className="text-link" href={whatsapp} target="_blank" rel="noopener noreferrer">Hablar con Cumre <ArrowUpRight size={19}/></a><span className="process-arrow" aria-hidden="true"><MoveDown size={62} strokeWidth={1}/></span></div><ol className="process-steps">
        <li><span className="step-number">01</span><div><h3>Cuéntanos cómo operas</h3><p>Comparte las necesidades de tu inmobiliaria en materia de identificación y avisos.</p></div></li>
        <li><span className="step-number">02</span><div><h3>Conoce Cumre Inmobiliario</h3><p>Te explicamos cómo el servicio puede facilitar estas obligaciones en tus arrendamientos.</p></div></li>
        <li><span className="step-number">03</span><div><h3>Define el siguiente paso</h3><p>Consulta el alcance y las condiciones del servicio antes de comenzar.</p></div></li>
      </ol></div></section>

      <section className="section container questions" id="preguntas" aria-labelledby="questions-title"><div><p className="eyebrow">ANTES DE EMPEZAR</p><h2 id="questions-title">Lo esencial,<br/>sin rodeos.</h2></div><div className="question-list">
        <article><h3>¿A quién está dirigido?</h3><p>A inmobiliarias que arriendan inmuebles y buscan facilitar sus obligaciones de identificación y presentación de avisos conforme a la LFPIORPI.</p></article>
        <article><h3>¿Cumre es un portal para encontrar inmuebles?</h3><p>No. Cumre Inmobiliario es un servicio enfocado en facilitar el cumplimiento relacionado con la actividad de arrendamiento.</p></article>
        <article><h3>¿Cómo puedo conocer el alcance y el costo?</h3><p>Escríbenos por WhatsApp o correo. Cuéntanos sobre tu operación para conocer el servicio y sus condiciones.</p></article>
      </div></section>

      <section className="contact-section container" id="contacto" aria-labelledby="contact-title"><div className="contact-panel"><div className="contact-copy"><p className="eyebrow"><span className="status-dot"/> CONVERSEMOS</p><h2 id="contact-title">Haz más sencillo<br/>tu siguiente paso.</h2><p>Conoce cómo Cumre Inmobiliario puede ayudar a facilitar el cumplimiento en tus arrendamientos.</p><a className="button button-lime" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> Escribir por WhatsApp <ArrowUpRight size={19}/></a></div><div className="contact-details"><Marca light/><span className="contact-label">CONTACTO DIRECTO</span><a href="tel:+526644841118"><Phone size={20}/><span><small>Teléfono y WhatsApp</small>664 484 1118</span><ArrowUpRight size={18}/></a><a href={correo}><Mail size={20}/><span><small>Correo electrónico</small>cumreinmobiliario@gmail.com</span><ArrowUpRight size={18}/></a><p>No compartas identificaciones ni información confidencial en tu primer mensaje.</p></div></div></section>
    </main>
    <footer className="container footer"><div className="footer-top"><Marca/><p>Tu operación inmobiliaria,<br/>con el cumplimiento en orden.</p><a href="#inicio" className="back-top">Volver arriba <ArrowUpRight size={17}/></a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Cumre Inmobiliario.</p><p>Servicio independiente. Sin afiliación al SAT o a la UIF.</p></div></footer>
  </>;
}
