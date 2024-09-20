'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  DatabaseOutlined,
  TeamOutlined,
  BarChartOutlined,
  SafetyOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Gestión de Inventario Simplificada`,
      description: `Controle fácilmente todos los activos municipales con nuestra interfaz intuitiva y familiar.`,
      icon: <DatabaseOutlined />,
    },
    {
      heading: `Acceso Basado en Roles`,
      description: `Garantice la seguridad y eficiencia con permisos personalizados para cada departamento.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Informes Detallados`,
      description: `Tome decisiones informadas con reportes completos y fáciles de entender.`,
      icon: <BarChartOutlined />,
    },
    {
      heading: `Seguridad Mejorada`,
      description: `Proteja los activos municipales con un sistema de seguimiento preciso y transparente.`,
      icon: <SafetyOutlined />,
    },
    {
      heading: `Interfaz Retro Familiar`,
      description: `Disfrute de una experiencia nostálgica con nuestro diseño inspirado en Windows 98.`,
      icon: <EditOutlined />,
    },
    {
      heading: `Respuesta Rápida en Emergencias`,
      description: `Localice y despliegue recursos críticos en tiempo récord durante situaciones urgentes.`,
      icon: <ClockCircleOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Carlos Rodríguez`,
      designation: `Alcalde de San Miguel`,
      content: `Gracias a este sistema, hemos reducido nuestras pérdidas de inventario en un 40% y mejorado nuestra respuesta en emergencias.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `María Fernández`,
      designation: `Jefa de Logística, Municipalidad de La Paz`,
      content: `La interfaz retro es sorprendentemente fácil de usar. Nuestro personal se adaptó rápidamente y ahora gestionamos nuestros recursos de manera más eficiente.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Juan Pérez`,
      designation: `Director de TI, Ayuntamiento de Córdoba`,
      content: `La implementación fue sencilla y el soporte es excelente. Hemos logrado una transparencia total en nuestra gestión de activos.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: `Características`,
      link: `#features`,
    },
    {
      title: `Precios`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Básico`,
      description: `Ideal para municipios pequeños`,
      monthly: 99,
      yearly: 990,
      features: [`Hasta 1,000 items`, `5 usuarios`, `Soporte por email`],
    },
    {
      title: `Pro`,
      description: `Perfecto para municipios medianos`,
      monthly: 199,
      yearly: 1990,
      features: [
        `Hasta 10,000 items`,
        `20 usuarios`,
        `Soporte prioritario 24/7`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Para grandes municipalidades`,
      monthly: 399,
      yearly: 3990,
      features: [`Items ilimitados`, `Usuarios ilimitados`, `Soporte dedicado`],
    },
  ]

  const questionAnswers = [
    {
      question: `¿Qué tan seguro es el sistema?`,
      answer: `Nuestro sistema utiliza encriptación de grado militar y cumple con todos los estándares de seguridad gubernamentales.`,
    },
    {
      question: `¿Puedo migrar datos de mi sistema actual?`,
      answer: `Sí, ofrecemos servicios de migración de datos para asegurar una transición suave desde su sistema actual.`,
    },
    {
      question: `¿Qué tipo de soporte ofrecen?`,
      answer: `Proporcionamos soporte técnico por email, chat y teléfono, además de recursos de capacitación en línea.`,
    },
    {
      question: `¿El sistema funciona en dispositivos móviles?`,
      answer: `Sí, nuestra plataforma es totalmente responsive y funciona en cualquier dispositivo con acceso a internet.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Registro Sencillo`,
      description: `Cree su cuenta en minutos y configure los permisos de usuario.`,
    },
    {
      heading: `Importación de Datos`,
      description: `Importe fácilmente su inventario existente o comience desde cero.`,
    },
    {
      heading: `Gestión Diaria`,
      description: `Actualice y monitoree su inventario con nuestra interfaz intuitiva.`,
    },
    {
      heading: `Análisis y Reportes`,
      description: `Genere informes detallados para una toma de decisiones informada.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😰`,
      title: `Pérdida de activos y recursos`,
    },
    {
      emoji: `🕒`,
      title: `Respuesta lenta en emergencias`,
    },
    {
      emoji: `📉`,
      title: `Ineficiencia en la gestión municipal`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Transforme la Gestión Municipal con Nostalgia y Eficiencia`}
        subtitle={`Descubra cómo nuestro sistema de inventario retro puede ahorrarle millones y mejorar la respuesta en emergencias.`}
        buttonText={`Comience Ahora`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/olEvZd-inventariomuni-X7pF`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`municipios satisfechos`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Reconocido por`} />
      <LandingPainPoints
        title={`¿Está su municipio perdiendo $400,000 al año en activos mal gestionados?`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Simplifique su Gestión Municipal en 4 Pasos Sencillos`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Gestione su Municipio como un Profesional, con la Nostalgia de los 90`}
        subtitle={`Descubra cómo nuestras características únicas pueden revolucionar su gestión municipal`}
        features={features}
      />
      <LandingTestimonials
        title={`Municipios que Ya Están Ahorrando Millones`}
        subtitle={`Descubra cómo otros líderes municipales han transformado su gestión`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invierta en Eficiencia, Ahorre en Recursos`}
        subtitle={`Elija el plan perfecto para su municipio y comience a ahorrar hoy mismo`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Respuestas a Sus Preguntas`}
        subtitle={`Todo lo que necesita saber sobre nuestro sistema de gestión municipal`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`¿Listo para Revolucionar su Gestión Municipal?`}
        subtitle={`Únase a los municipios que ya están ahorrando millones y mejorando su eficiencia`}
        buttonText={`Comience su Prueba Gratuita`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
