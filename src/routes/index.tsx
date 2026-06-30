import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ShieldCheck, Camera, Cpu, Network, Code2, MonitorSmartphone, Building2,
  Wifi, Eye, Bell, Smartphone, CheckCircle2, ArrowRight, Phone, MessageCircle,
  Sparkles, Zap, Headphones, Wallet, Users, Settings2, ChevronDown, MapPin, Mail,
  Instagram, Facebook, Star, Quote,
} from "lucide-react";
import logoAsset from "@/assets/logo.asset.jpg";
import heroCamera from "@/assets/hero-camera.jpg";
import aboutTech from "@/assets/about-technician.jpg";
import gControl from "@/assets/gallery-control-room.jpg";
import gNetwork from "@/assets/gallery-network.jpg";
import gWebsite from "@/assets/gallery-website.jpg";
import gInstall from "@/assets/gallery-camera-install.jpg";
import gDashboard from "@/assets/gallery-dashboard.jpg";

const WHATSAPP = "943591165";
const WA_LINK = `https://wa.me/244${WHATSAPP}?text=${encodeURIComponent("Olá Double M Tec, gostaria de um orçamento.")}`;
const TEL_LINK = `tel:+244${WHATSAPP}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Double M Tec — CCTV, Segurança Eletrónica & Soluções Digitais" },
      { name: "description", content: "Sistemas CCTV profissionais, segurança eletrónica, redes e software à medida. Proteja e modernize o seu negócio com a Double M Tec." },
      { property: "og:title", content: "Double M Tec — Technology • Security • Innovation" },
      { property: "og:description", content: "CCTV, segurança eletrónica, redes, websites e software à medida." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <Benefits />
      <Gallery />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f(); window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [
    { h: "#services", l: "Serviços" },
    { h: "#about", l: "Empresa" },
    { h: "#gallery", l: "Projetos" },
    { h: "#process", l: "Processo" },
    { h: "#faq", l: "FAQ" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
         <div className="grid h-10 w-10 place-items-center rounded-lg  ring-1 ring-border/60">
            <img src={logoAsset} alt="Double M Tec" width={40} height={40} className="h-8 w-8 object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold tracking-tight text-[15px]">DOUBLE M TEC</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">CCTV Solutions</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.h} href={l.h} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.l}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">

          <a
            href={WA_LINK} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition"
          >
            Pedir Orçamento <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-hairline bg-background">
          <div className="container-x flex flex-col py-4 gap-3">
            {links.map((l) => (
              <a key={l.h} href={l.h} onClick={() => setOpen(false)} className="py-2 text-foreground/80">{l.l}</a>
            ))}
            <a href={WA_LINK} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
              Pedir Orçamento <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      {/* bg layers */}
      <div className="absolute inset-0 -z-10 hairline-grid opacity-[0.45]" />
      <div className="absolute -top-40 -left-40 -z-10 h-[520px] w-[520px] rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 -z-10 h-[420px] w-[420px] rounded-full bg-red/15 blur-3xl" />

      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 pulse-ring" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            Technology • Security • Innovation
          </div>
          <h1 className="mt-6 font-display font-extrabold text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-tight">
            Segurança profissional
            <br />
            e <span className="text-gradient">soluções digitais</span>
            <br />
            para o seu negócio.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Proteja a sua propriedade com sistemas CCTV inteligentes e modernize a sua empresa com websites
            profissionais, landing pages e software de gestão à medida.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={WA_LINK} target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:translate-y-[-1px] transition">
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface transition">
              Pedir Orçamento
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
            {[
              { k: "10+", v: "Anos de experiência" },
              { k: "500+", v: "Projetos entregues" },
              { k: "24/7", v: "Suporte técnico" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-2xl font-bold tracking-tight">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative reveal" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-square max-w-[620px] mx-auto">
            {/* circular gradient backdrop */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-navy-deep via-navy to-brand/60 shadow-elegant" />
            <div className="absolute inset-12 rounded-full border border-white/10" />
            <div className="absolute inset-20 rounded-full border border-white/5" />
            <img
              src={heroCamera}
              alt="CCTV Camera"
              width={1280} height={1280}
              className="absolute inset-0 h-full w-full object-cover rounded-[28px] mix-blend-screen opacity-95"
              style={{ maskImage: "radial-gradient(circle at center, black 60%, transparent 78%)" }}
            />

            {/* floating cards */}
            <FloatingCard className="absolute -left-2 sm:-left-6 top-10 float-soft" icon={<Eye className="h-4 w-4 text-brand" />} title="Live Monitoring" sub="Em tempo real" />
            <FloatingCard className="absolute -right-2 sm:-right-4 top-32 float-soft" style={{ animationDelay: "0.8s" }} icon={<Sparkles className="h-4 w-4 text-red" />} title="AI Detection" sub="Alertas inteligentes" />
            <FloatingCard className="absolute left-4 bottom-24 float-soft" style={{ animationDelay: "1.6s" }} icon={<ShieldCheck className="h-4 w-4 text-brand" />} title="24/7 Security" sub="Vigilância contínua" />
            <FloatingCard className="absolute right-6 -bottom-2 float-soft" style={{ animationDelay: "2.2s" }} icon={<Smartphone className="h-4 w-4 text-red" />} title="Remote Access" sub="No seu telemóvel" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ icon, title, sub, className = "", style }: { icon: React.ReactNode; title: string; sub: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`glass-card rounded-2xl px-4 py-3 min-w-[170px] ${className}`} style={style}>
      <div className="flex items-center gap-3">
        <div className="grid place-items-center h-9 w-9 rounded-xl bg-background border border-hairline">{icon}</div>
        <div>
          <div className="text-[13px] font-semibold text-foreground">{title}</div>
          <div className="text-[11px] text-muted-foreground">{sub}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  const items = ["Instalação Profissional", "Equipamentos Certificados", "Suporte Rápido", "Soluções à Medida", "Residencial", "Comercial", "Corporativo"];
  return (
    <section className="border-y border-hairline bg-surface/60">
      <div className="container-x py-6 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((i) => (
            <div key={i} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-brand" /> {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-hairline">
            <img src={aboutTech} alt="Técnico instalando câmera" width={1200} height={1400} loading="lazy" className="w-full h-[560px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block glass-card rounded-2xl p-5 max-w-[240px]">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand text-primary-foreground">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">100%</div>
                <div className="text-xs text-muted-foreground">Satisfação garantida</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <Eyebrow>Sobre a empresa</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Tecnologia, segurança e <span className="text-gradient">inovação</span> num só parceiro.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A Double M Tec entrega soluções completas de tecnologia — da segurança eletrónica à transformação
            digital de negócios. Combinamos engenharia de redes, vigilância profissional e desenvolvimento de
            software para proteger, modernizar e fazer crescer a sua operação.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {[
              { t: "Missão", d: "Proteger e capacitar negócios com tecnologia de excelência." },
              { t: "Visão", d: "Ser referência em segurança eletrónica e transformação digital." },
              { t: "Valores", d: "Confiança, qualidade, inovação e proximidade ao cliente." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-hairline bg-card p-5">
                <div className="font-display font-semibold">{b.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    { icon: Camera, title: "Instalação CCTV", desc: "Câmeras HD e IP, monitorização remota, visão noturna, DVR/NVR e manutenção.", items: ["Câmeras HD e IP", "Monitorização remota", "Visão noturna", "DVR / NVR", "Manutenção preventiva"] },
    { icon: ShieldCheck, title: "Segurança Eletrónica", desc: "Controlo de acesso, videoporteiros, sistemas de alarme e cercas elétricas.", items: ["Controlo de acesso", "Videoporteiros", "Sistemas de alarme", "Cerca elétrica"] },
    { icon: Zap, title: "Landing Pages Profissionais", desc: "Páginas otimizadas para conversão, prontas para gerar leads.", items: ["Alta conversão", "Otimizadas para Google", "Responsivas", "Carregamento rápido", "Geração de leads"] },
    { icon: MonitorSmartphone, title: "Websites Corporativos", desc: "Sites institucionais, portfólios e plataformas com painel de gestão.", items: ["Sites institucionais", "Portfólio", "Páginas corporativas", "SEO Ready", "Painel admin"] },
    { icon: Code2, title: "Software de Gestão", desc: "Sistemas à medida para inventário, vendas, finanças e RH.", items: ["Inventário", "Vendas", "Finanças", "Gestão de equipa", "Relatórios", "Automação"] },
    { icon: Network, title: "Consultoria Técnica", desc: "Planeamento de infraestrutura, design de rede e manutenção.", items: ["Infraestrutura IT", "Design de redes", "Planeamento tecnológico", "Manutenção"] },
  ];
  return (
    <section id="services" className="py-24 md:py-32 bg-surface/50 border-y border-hairline">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>Serviços</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Uma plataforma completa para proteger e modernizar.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Da câmera ao código — entregamos infraestrutura, segurança e produtos digitais com padrão corporativo.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className="group relative rounded-2xl border border-hairline bg-card p-7 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-navy-deep text-on-dark">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="h-1 w-1 rounded-full bg-brand" /> {i}
                  </li>
                ))}
              </ul>
              <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    { icon: Zap, t: "Instalação rápida", d: "Equipas eficientes, com prazos cumpridos." },
    { icon: Sparkles, t: "Equipamento premium", d: "Marcas certificadas e tecnologia de ponta." },
    { icon: Users, t: "Equipa profissional", d: "Técnicos formados e especializados." },
    { icon: Headphones, t: "Pós-venda dedicado", d: "Acompanhamento contínuo e suporte." },
    { icon: Wallet, t: "Preços acessíveis", d: "Soluções escaláveis ao seu orçamento." },
    { icon: Settings2, t: "Soluções à medida", d: "Cada projeto é desenhado para si." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <Eyebrow>Porquê a Double M Tec</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Padrão corporativo, atenção artesanal.
            </h2>
          </div>
          <p className="lg:col-span-6 text-muted-foreground max-w-lg">
            Combinamos engenharia rigorosa com um serviço próximo e humano. Cada instalação e cada linha de
            código é pensada para durar.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline rounded-3xl overflow-hidden border border-hairline">
          {items.map((i) => (
            <div key={i.t} className="bg-background p-8 hover:bg-surface transition">
              <div className="grid place-items-center h-11 w-11 rounded-xl border border-hairline bg-card">
                <i.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BENEFITS ---------------- */
function Benefits() {
  const items = [
    "Monitore a sua propriedade de qualquer lugar.",
    "Receba alertas em tempo real.",
    "Provas em caso de incidentes.",
    "Proteja os seus colaboradores.",
    "Reduza furtos e perdas.",
    "Aumente a produtividade.",
    "Modernize a sua empresa.",
    "Melhore a presença digital.",
    "Automatize processos do negócio.",
  ];
  return (
    <section className="py-24 md:py-32 bg-navy-deep text-on-dark relative overflow-hidden">
      <div className="absolute inset-0 hairline-grid opacity-[0.07]" />
      <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-brand/30 blur-3xl" />
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-5">
          <Eyebrow dark>Benefícios</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Mais segurança. Mais controlo. <span className="text-gradient">Mais negócio.</span>
          </h2>
          <p className="mt-5 text-on-dark-muted leading-relaxed">
            Ferramentas pensadas para proteger pessoas, ativos e operação — enquanto aceleram a transformação digital da sua empresa.
          </p>
          <div className="mt-8 flex gap-3">
            <a href={WA_LINK} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> Falar agora
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid sm:grid-cols-2 gap-3">
            {items.map((t) => (
              <li key={t} className="glass-dark rounded-2xl px-5 py-4 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                <span className="text-sm text-on-dark/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const items = [
    { img: gControl, t: "Sala de Controlo", k: "CCTV" },
    { img: gNetwork, t: "Infraestrutura de Rede", k: "Networking" },
    { img: gInstall, t: "Instalação Exterior", k: "Segurança" },
    { img: gDashboard, t: "Dashboard de Gestão", k: "Software" },
    { img: gWebsite, t: "Website Corporativo", k: "Web" },
    { img: heroCamera, t: "Câmera HD/IP", k: "Equipamento" },
  ];
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Projetos</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Trabalhos recentes.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Uma seleção do nosso trabalho — CCTV, redes, salas de controlo e produtos digitais.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4 [grid-auto-rows:200px]">
          {items.map((it, idx) => (
            <figure
              key={it.t}
              className={`group relative overflow-hidden rounded-2xl border border-hairline ${
                idx === 0 ? "md:row-span-2 md:col-span-2" : idx === 3 ? "md:row-span-2" : ""
              }`}
            >
              <img src={it.img} alt={it.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-on-dark">
                <div className="text-[11px] uppercase tracking-[0.18em] text-on-dark-muted">{it.k}</div>
                <div className="mt-1 font-display font-semibold text-lg">{it.t}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Consultoria", d: "Entendemos o seu contexto, riscos e objetivos." },
    { n: "02", t: "Planeamento", d: "Desenhamos a solução técnica e comercial." },
    { n: "03", t: "Instalação / Desenvolvimento", d: "Executamos com qualidade e prazo." },
    { n: "04", t: "Suporte", d: "Acompanhamento e manutenção contínua." },
  ];
  return (
    <section id="process" className="py-24 md:py-32 bg-surface/50 border-y border-hairline">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>Processo</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Quatro passos para entregar excelência.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-4 gap-px bg-hairline border border-hairline rounded-3xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 relative">
              <div className="font-display text-5xl font-bold text-brand/15">{s.n}</div>
              <h3 className="mt-4 font-display font-semibold text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    { n: "Carlos Mateus", r: "Gestor — Retalho", q: "Instalação impecável e suporte rápido. As câmeras já evitaram duas tentativas de furto.", i: "https://i.pravatar.cc/120?img=12" },
    { n: "Ana Bernardo", r: "Diretora — Clínica", q: "Recebemos um site e um sistema de gestão de pacientes. Profissionalismo do início ao fim.", i: "https://i.pravatar.cc/120?img=47" },
    { n: "Edmilson Lopes", r: "CEO — Logística", q: "Desenharam toda a nossa rede e sala de controlo. Total confiança na equipa da Double M Tec.", i: "https://i.pravatar.cc/120?img=15" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>Testemunhos</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Clientes que recomendam o nosso trabalho.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure key={t.n} className="rounded-2xl border border-hairline bg-card p-7 shadow-card">
              <Quote className="h-7 w-7 text-brand/40" />
              <blockquote className="mt-4 text-foreground leading-relaxed">{t.q}</blockquote>
              <div className="mt-5 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.i} alt={t.n} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-sm">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const qs = [
    { q: "Quanto tempo demora uma instalação de CCTV?", a: "A maioria dos projetos residenciais é concluída em 1 dia. Projetos comerciais variam consoante o número de pontos e infraestrutura." },
    { q: "Posso aceder às câmeras pelo telemóvel?", a: "Sim. Todas as nossas instalações incluem acesso remoto seguro via aplicação no smartphone." },
    { q: "Oferecem garantia e manutenção?", a: "Sim. Equipamentos com garantia oficial e planos de manutenção preventiva." },
    { q: "Desenvolvem software à medida?", a: "Sim. Criamos sistemas de gestão personalizados — vendas, stocks, finanças, RH e mais." },
    { q: "Trabalham em todo o país?", a: "Atendemos em Luanda e regiões próximas. Para outras localidades, consulte-nos." },
  ];
  return (
    <section id="faq" className="py-24 md:py-32 bg-surface/50 border-t border-hairline">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Perguntas frequentes.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Não encontrou o que procura? Fale connosco diretamente no WhatsApp.
          </p>
          <a href={WA_LINK} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            <MessageCircle className="h-4 w-4" /> Falar com a equipa
          </a>
        </div>
        <div className="lg:col-span-7 divide-y divide-hairline border-y border-hairline">
          {qs.map((it, i) => <FaqItem key={i} q={it.q} a={it.a} />)}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
        <span className="font-display font-semibold text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-navy-deep text-on-dark relative overflow-hidden">
      <div className="absolute inset-0 hairline-grid opacity-[0.06]" />
      <div className="absolute -top-32 -left-20 h-[480px] w-[480px] rounded-full bg-brand/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-10 h-[420px] w-[420px] rounded-full bg-red/20 blur-3xl" />
      <div className="container-x relative text-center max-w-3xl">
        <Eyebrow dark>Vamos conversar</Eyebrow>
        <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight">
          Pronto para <span className="text-gradient">proteger e expandir</span> o seu negócio?
        </h2>
        <p className="mt-5 text-on-dark-muted text-lg">
          Fale hoje mesmo com os nossos especialistas — orçamento sem compromisso.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href={WA_LINK} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href={TEL_LINK}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-on-dark hover:bg-white/10">
            <Phone className="h-4 w-4" /> Ligar agora
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-background border-t border-hairline">
      <div className="container-x py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-background/95 ring-1 ring-border/60">
              <img src={logoAsset} alt="Double M Tec" width={44} height={44} className="h-9 w-9 object-contain" />
            </div>
            <div>
              <div className="font-display font-bold tracking-tight">DOUBLE M TEC</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">CCTV Solutions</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Tecnologia, segurança e inovação. CCTV, segurança eletrónica, redes e software à medida para casas e empresas.
          </p>
          <div className="mt-5 flex gap-2">
            <a href="#" className="grid place-items-center h-10 w-10 rounded-full border border-hairline hover:bg-surface"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="grid place-items-center h-10 w-10 rounded-full border border-hairline hover:bg-surface"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
        <FooterCol title="Empresa" links={[["Sobre", "#about"], ["Projetos", "#gallery"], ["Processo", "#process"], ["FAQ", "#faq"]]} />
        <FooterCol title="Serviços" links={[["CCTV", "#services"], ["Segurança Eletrónica", "#services"], ["Websites", "#services"], ["Software", "#services"]]} />
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contacto</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand" /> +244 943 591 165</li>
            <li className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-brand" /> WhatsApp 24/7</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand" /> contacto@doublemtec.com</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand" /> Luanda, Angola</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Double M Tec. Todos os direitos reservados.</div>
          <div className="flex items-center gap-2"><Building2 className="h-3.5 w-3.5" /> Technology • Security • Innovation</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="md:col-span-2">
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map(([l, h]) => (
          <li key={l}><a href={h} className="text-foreground/80 hover:text-foreground transition">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- FLOATING WHATSAPP ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[oklch(0.7_0.18_150)] text-white px-5 py-3.5 shadow-elegant hover:scale-105 transition-transform pulse-ring"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}

/* ---------------- shared ---------------- */
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold ${dark ? "text-on-dark-muted" : "text-muted-foreground"}`}>
      <span className="h-px w-8 bg-current opacity-50" /> {children}
    </div>
  );
}
