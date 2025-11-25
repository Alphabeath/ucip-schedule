"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/ucip.png" alt="UCEN Logo" width={100} height={100} />
          </div>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="#services"
                >
                  Servicios
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="#testimonials"
                >
                  Testimonios
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              size="sm"
              className="text-xs sm:text-sm bg-secondary hover:bg-secondary/70 cursor-pointer"
              data-cal-namespace="30min"
              data-cal-link="bryan-reyes-avila/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              Agendar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-12 text-center sm:py-16 md:py-24">
        {/* <Badge variant="secondary" className="mb-4">
          🎉 Nueva versión disponible
        </Badge> */}
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
          UNIDAD DE CONSULTORÍA E INTERVENCIÓN PSICOLÓGICA
          <br />
          <br />
          <p className="text-primary text-2xl">UNIVERSIDAD CENTRAL</p>
        </h1>
        <p className="mx-auto mb-6 max-w-2xl px-4 text-base text-muted-foreground sm:mb-8 sm:text-lg">
          UCIP es un área de la Universidad Central, sede Región de Coquimbo,
          dedicada a ofrecer servicios de apoyo y consultoría en el ámbito
          organizacional y psicológico.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4">
          <Button
            size="lg"
            className="w-full gap-2 sm:w-auto bg-secondary hover:bg-secondary/70 cursor-pointer"
            data-cal-namespace="30min"
            data-cal-link="bryan-reyes-avila/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Agenda con nosotros
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <Separator />

      {/* Services Section */}
      <section id="services" className="container py-12 sm:py-16 md:py-24">
        <div className="mb-8 text-center sm:mb-12">
          <Badge className="mb-4 bg-secondary">Servicios</Badge>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Nuestros servicios para organizaciones y bienestar emocional
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-sm text-muted-foreground sm:text-base">
            Acompañamos a personas y organizaciones en su desarrollo, bienestar
            y crecimiento
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Consultoría organizacional</CardTitle>
              <CardDescription>
                Diagnóstico de clima laboral, gestión de equipos y comunicación
                interna.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Intervención psicológica en organizaciones</CardTitle>
              <CardDescription>
                Programas de apoyo emocional y acompañamiento en situaciones de
                crisis o cambios estructurales.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Capacitación y talleres</CardTitle>
              <CardDescription>
                Formación en habilidades blandas, liderazgo, resolución de
                conflictos y trabajo en equipo.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Seguridad Avanzada</CardTitle>
              <CardDescription>
                Datos encriptados y cumplimiento con normativas de
                privacidad.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Automatización</CardTitle>
              <CardDescription>
                Genera horarios automáticamente basándote en reglas y
                preferencias.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>
                Alertas en tiempo real para cambios de turno y
                recordatorios.
              </CardDescription>
            </CardHeader>
          </Card> */}
        </div>
      </section>

      <Separator />

      {/* Pricing Section */}
      {/* <section id="pricing" className="container py-12 sm:py-16 md:py-24">
        <div className="mb-8 text-center sm:mb-12">
          <Badge className="mb-4">Precios</Badge>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Planes para cada necesidad
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-sm text-muted-foreground sm:text-base">
            Elige el plan que mejor se adapte a tu organización. Sin costos
            ocultos.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Básico</CardTitle>
              <CardDescription>Para equipos pequeños</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Hasta 5 usuarios
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Calendario básico
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Soporte por email
                </li>
              </ul>
              <Button className="mt-6 w-full" variant="outline">
                Comenzar gratis
              </Button>
            </CardContent>
          </Card>
          <Card className="border-primary shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Profesional</CardTitle>
                <Badge>Popular</Badge>
              </div>
              <CardDescription>Para empresas en crecimiento</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Hasta 50 usuarios
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Automatización avanzada
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Reportes y analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Soporte prioritario
                </li>
              </ul>
              <Button className="mt-6 w-full">Elegir plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Empresa</CardTitle>
              <CardDescription>Para grandes organizaciones</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Usuarios ilimitados
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  API personalizada
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  SSO y seguridad avanzada
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Soporte 24/7
                </li>
              </ul>
              <Button className="mt-6 w-full" variant="outline">
                Contactar ventas
              </Button>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section id="testimonials" className="container py-12 sm:py-16 md:py-24">
        <div className="mb-8 text-center sm:mb-12">
          <Badge className="mb-4 bg-secondary">Testimonios</Badge>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                &ldquo;Gracias al acompañamiento de UCIP logramos fortalecer la
                comunicación interna y reducir conflictos en nuestro
                equipo.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-medium">MG</span>
                </div>
                <div>
                  <p className="font-medium">María García</p>
                  <p className="text-sm text-muted-foreground">
                    Directora de RRHH
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                &ldquo;Los talleres de habilidades blandas nos ayudaron a
                mejorar el liderazgo y la motivación en la organización.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-medium">CR</span>
                </div>
                <div>
                  <p className="font-medium">Carlos Rodríguez</p>
                  <p className="text-sm text-muted-foreground">
                    Jefe de Enfermería
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                &ldquo;El apoyo emocional brindado por UCIP fue fundamental para
                acompañar a nuestros trabajadores durante un proceso de
                reestructuración.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-medium">AL</span>
                </div>
                <div>
                  <p className="font-medium">Ana López</p>
                  <p className="text-sm text-muted-foreground">
                    Administradora
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="container py-12 text-center sm:py-16 md:py-24">
        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          ¿Buscas fortalecer tu organización o cuidar tu bienestar emocional?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl px-4 text-sm text-muted-foreground sm:mb-8 sm:text-base">
          En UCIP estamos comprometidos con tu bienestar. Agenda una consulta
          con nuestro equipo de profesionales especializados de la Universidad
          Central.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4">
          <Button
            size="lg"
            className="w-full gap-2 sm:w-auto bg-secondary hover:bg-secondary/70 cursor-pointer"
            data-cal-namespace="30min"
            data-cal-link="bryan-reyes-avila/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Agendar una cita
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Conocer más sobre UCIP
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-8 sm:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/ucip.png"
                  alt="UCEN Logo"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Unidad de Consultoría e Intervención Psicológica de la
                Universidad Central.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">UCIP</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#sevices" className="hover:text-foreground">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-foreground">
                    Testiminios
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Carreras
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p>© 2025 UCIP Schedule. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ucip-ucen-817618285/"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
