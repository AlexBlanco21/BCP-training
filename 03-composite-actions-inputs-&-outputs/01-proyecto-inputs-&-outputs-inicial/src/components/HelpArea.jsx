import HelpBox from './HelpBox';
import './HelpArea.css';

const HELP_ITEMS = [
  {
    id: 'h1',
    title: 'Que es Git?',
    text: 'Git es un sistema de control de versiones que te ayuda a gestionar tu código y crear instantáneas de tu código.',
  },
  {
    id: 'h2',
    title: 'Que es GitHub?',
    text: 'GitHub es una empresa y plataforma en línea que te ofrece una gran cantidad de servicios relacionados con Git (por ejemplo, repositorios en la nube).',
  },
  {
    id: 'h3',
    title: 'Que es  GitHub Actions?',
    text: 'GitHub Actions es un servicio de automatización (o servicio de CI/CD) que te ayuda a automatizar flujos de trabajo y procesos relacionados con el repositorio.',
  },
  {
    id: 'h3',
    title: 'Que es  GitHub Actions Composite?',
    text: 'GitHub Actions Composite es una funcionalidad que permite combinar múltiples pasos de ejecución en una sola acción reutilizable.',
  },
];

function HelpArea() {
  return (
    <section data-testid="help-area" id="help-area">
      {HELP_ITEMS.map((item) => (
        <HelpBox key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
}

export default HelpArea;
