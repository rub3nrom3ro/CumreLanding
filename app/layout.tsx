import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cumre Inmobiliario | Cumplimiento para arrendamientos',
  description: 'Facilita las obligaciones de identificación y presentación de avisos de tu inmobiliaria con Cumre Inmobiliario. Conoce el servicio y contáctanos.',
  icons: { icon: './images/cumre-logo-color.png' },
  openGraph: { title: 'Cumre Inmobiliario', description: 'Tu operación inmobiliaria, con el cumplimiento en orden.', locale: 'es_MX', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-MX"><body>{children}</body></html>;
}
