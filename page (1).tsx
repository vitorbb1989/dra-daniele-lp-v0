"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Star, 
  Shield, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  Award, 
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  Instagram,
  ChevronDown,
  Zap,
  Smile,
  ArrowRight,
  Play
} from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", whatsapp: "", email: "" })

  const whatsappLink = "https://wa.me/5581999999999?text=Olá! Gostaria de agendar uma avaliação para facetas de resina."

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Smile className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground">Dra. Daniele</span>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar Avaliacao
            </a>
          </Button>
        </div>
      </nav>

      {/* 1. HERO SECTION - Video/Image Before-After + Headline + Subheading + Primary CTA */}
      <section className="relative min-h-screen flex items-center px-4 pt-20 bg-white overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 text-center lg:text-left">
              <Badge className="bg-primary/10 text-primary border-0 hover:bg-primary/20 text-sm px-4 py-1.5">
                Especialista em Facetas de Resina em Recife
              </Badge>
              
              <div className="space-y-6">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Transforme seu sorriso sem desgastar seus dentes
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0">
                  Facetas de resina ultrafinas e 100% reversiveis. Resultado natural em poucas sessoes, sem dor e sem arrependimento.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 font-medium gap-2"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Agendar Avaliacao Gratuita
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-foreground font-serif">500+</div>
                  <div className="text-sm text-muted-foreground">Sorrisos transformados</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-foreground font-serif">4.9</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" /> no Google
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-foreground font-serif">10+</div>
                  <div className="text-sm text-muted-foreground">Anos de experiencia</div>
                </div>
              </div>
            </div>

            {/* Before/After Hero Image */}
            <div className="relative lg:order-last">
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-muted to-secondary">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-muted/50 flex flex-col items-center justify-center border-r-4 border-white">
                    <span className="text-muted-foreground font-semibold text-lg mb-2">ANTES</span>
                    <div className="w-20 h-20 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                      <Smile className="w-10 h-10 text-muted-foreground/50" />
                    </div>
                  </div>
                  <div className="w-1/2 bg-white/80 flex flex-col items-center justify-center">
                    <span className="text-primary font-semibold text-lg mb-2">DEPOIS</span>
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <Button variant="outline" className="bg-white/90 backdrop-blur gap-2 shadow-lg">
                    <Play className="w-4 h-4" /> Ver Transformacao
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM/SOLUTION - 6 Icons addressing pain points */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Voce se incomoda com algum desses problemas?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Facetas de resina podem resolver todos eles de forma rapida e indolor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Dentes trincados ou lascados", desc: "Pequenas rachaduras e imperfeicoes que afetam a estetica do seu sorriso" },
              { title: "Manchas e amarelamento", desc: "Dentes escurecidos, descoloridos ou com manchas que nao saem com clareamento" },
              { title: "Espacos entre os dentes", desc: "Diastemas que incomodam e afetam a harmonia do seu sorriso" },
              { title: "Dentes desalinhados ou tortos", desc: "Pequenos desalinhamentos que podem ser corrigidos sem aparelho ortodontico" }
            ].map((problem, i) => (
              <div 
                key={i} 
                className="bg-white rounded-3xl p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-1.5 h-full min-h-16 rounded-full bg-gradient-to-b from-primary to-primary/30 group-hover:from-primary group-hover:to-primary/60 transition-all" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-xl group-hover:text-primary transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Quero Resolver Meu Problema <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS - 4 Steps */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Como funciona o tratamento?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Processo simples, rapido e sem dor. Seu novo sorriso em 4 etapas.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: MessageCircle,
                title: "Consulta",
                desc: "Avaliacao gratuita para entender seus objetivos e criar um plano personalizado."
              },
              {
                step: "2",
                icon: Sparkles,
                title: "Design",
                desc: "Planejamento digital do seu novo sorriso. Voce ve o resultado antes de comecar."
              },
              {
                step: "3",
                icon: Heart,
                title: "Aplicacao",
                desc: "Colocacao das facetas em sessoes confortaveis, sem anestesia na maioria dos casos."
              },
              {
                step: "4",
                icon: Star,
                title: "Resultado",
                desc: "Sorriso transformado! Acompanhamento incluso para garantir sua satisfacao."
              }
            ].map((process, i) => (
              <div key={i} className="relative text-center">
                <div className="space-y-4">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <process.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{process.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{process.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BEFORE/AFTER GALLERY - 8-12 Real Patient Photos */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Resultados reais de pacientes
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Mais de 500 sorrisos transformados com naturalidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { facetas: "8 Facetas", rating: 5, name: "Maria S." },
              { facetas: "10 Facetas", rating: 5, name: "Ana P." },
              { facetas: "6 Facetas", rating: 5, name: "Carla M." },
              { facetas: "12 Facetas", rating: 5, name: "Julia R." },
              { facetas: "8 Facetas", rating: 5, name: "Fernanda L." },
              { facetas: "10 Facetas", rating: 5, name: "Patricia O." }
            ].map((item, i) => (
              <Card key={i} className="bg-white border-border overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-secondary to-muted">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-muted/70 flex items-center justify-center border-r-2 border-white">
                      <div className="text-center">
                        <Smile className="w-12 h-12 text-muted-foreground/40 mx-auto mb-2" />
                        <span className="text-muted-foreground font-medium text-sm">ANTES</span>
                      </div>
                    </div>
                    <div className="w-1/2 bg-white/80 flex items-center justify-center">
                      <div className="text-center">
                        <Sparkles className="w-12 h-12 text-primary/60 mx-auto mb-2" />
                        <span className="text-primary font-medium text-sm">DEPOIS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <Badge variant="outline" className="text-xs">{item.facetas}</Badge>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Quero Minha Transformacao <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL PROOF - 500+ Patients, 4.8/5 Rating, Named Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-primary text-primary" />
              ))}
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Avaliacao 4.9/5 no Google
            </h2>
            <p className="text-lg text-muted-foreground">
              Baseado em mais de 200 avaliacoes verificadas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Juliana Oliveira",
                photo: "J",
                location: "Boa Viagem, Recife",
                result: "8 facetas",
                text: "Sempre tive vergonha de sorrir por causa dos meus dentes manchados. A Dra. Daniele mudou minha vida! O resultado ficou tao natural que ninguem percebe que sao facetas. Melhor investimento que ja fiz!"
              },
              {
                name: "Camila Santos",
                photo: "C",
                location: "Casa Forte, Recife",
                result: "10 facetas",
                text: "Procurei varios dentistas antes de conhecer a Dra. Daniele. A diferenca esta no cuidado e na tecnica. Sem desgaste nenhum e meu sorriso ficou perfeito e natural. Super recomendo!"
              },
              {
                name: "Patricia Lima",
                photo: "P",
                location: "Pina, Recife",
                result: "6 facetas",
                text: "Tinha muito medo de fazer facetas e ficar artificial. A Dra. explicou tudo com calma e o resultado superou minhas expectativas. Parece que nasci com esse sorriso. Gratidao eterna!"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-muted/50 border-0 hover:shadow-lg transition-all">
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed text-pretty">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {testimonial.photo}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <Badge variant="outline" className="border-primary/30 text-primary text-xs mt-1">
                        {testimonial.result}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REVERSIBILITY & PRESERVATION - Resin vs Porcelain Infographic */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-0 text-base px-4 py-1.5">
              100% Reversivel
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Por que escolher Facetas de Resina?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Preservamos seus dentes naturais. Sem desgaste, sem arrependimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-2 border-primary shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Facetas de Resina</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Sem desgaste dental (ou minimo)",
                    "Processo reversivel a qualquer momento",
                    "Reparo facil se necessario",
                    "Resultado em poucas sessoes",
                    "Mais acessivel financeiramente",
                    "Aparencia natural e personalizada"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 border-border">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-muted-foreground">Facetas de Porcelana</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Requer desgaste permanente do dente",
                    "Processo irreversivel",
                    "Troca completa se quebrar",
                    "Multiplas consultas necessarias",
                    "Investimento mais alto",
                    "Pode parecer muito uniforme"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. DURABILITY & CARE - Comparison Table, Care Tips */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Durabilidade e Cuidados
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Com os cuidados corretos, suas facetas podem durar muitos anos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Clock, title: "5-10 Anos", desc: "Durabilidade media com cuidados adequados" },
              { icon: Shield, title: "Garantia", desc: "Acompanhamento incluso pos-tratamento" },
              { icon: Zap, title: "Reparo Facil", desc: "Manutencao simples se necessario" }
            ].map((item, i) => (
              <Card key={i} className="bg-muted/30 border-0 text-center">
                <CardContent className="p-6 space-y-3">
                  <item.icon className="w-10 h-10 text-primary mx-auto" />
                  <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">Dicas de Cuidados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Escove os dentes apos as refeicoes",
                  "Use fio dental diariamente",
                  "Evite morder objetos duros",
                  "Visite o dentista regularmente",
                  "Evite alimentos muito pigmentados",
                  "Use protetor bucal se tiver bruxismo"
                ].map((tip, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8. DENTIST AUTHORITY - Professional Photo + Bio + Credentials */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-white border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 relative min-h-[300px] md:min-h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-40 h-40 mx-auto rounded-full bg-primary/30 flex items-center justify-center border-4 border-primary/50">
                        <Award className="w-20 h-20 text-primary" />
                      </div>
                      <Badge className="bg-white text-foreground shadow">CRO-PE 12345</Badge>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-12 space-y-6">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                      Dra. Daniele Barboza
                    </h2>
                    <p className="text-primary font-medium text-lg">Especialista em Facetas de Resina</p>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Com mais de 10 anos dedicados exclusivamente a odontologia estetica, a Dra. Daniele e referencia em Recife quando o assunto e naturalidade em facetas de resina.
                    </p>
                    <p>
                      Formada pela UFPE com especializacao em Dentistica Restauradora, ja transformou mais de 500 sorrisos com sua tecnica conservadora que preserva ao maximo a estrutura natural dos dentes.
                    </p>
                    <p>
                      Sua clinica de alto padrao e dedicada exclusivamente a facetas de resina, garantindo foco total em excelencia e resultados que respeitam a individualidade de cada paciente.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Badge className="bg-primary/10 text-primary border-0">UFPE - Odontologia</Badge>
                    <Badge className="bg-primary/10 text-primary border-0">Especialista em Dentistica</Badge>
                    <Badge className="bg-primary/10 text-primary border-0">500+ Transformacoes</Badge>
                    <Badge className="bg-primary/10 text-primary border-0">10+ Anos Experiencia</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 9. FAQ COMPLETE - 6-8 Accordion Questions */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire todas as suas duvidas sobre facetas de resina
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "O procedimento doi?",
                a: "Nao! Na maioria dos casos, nao e necessaria anestesia. O processo e confortavel e indolor. Pacientes relatam que e ate relaxante."
              },
              {
                q: "Quanto tempo dura o tratamento?",
                a: "O tratamento completo leva de 2 a 4 sessoes, dependendo da quantidade de facetas. Cada sessao dura em media 2 horas."
              },
              {
                q: "Qual o valor do investimento?",
                a: "O valor varia de acordo com a quantidade de facetas e complexidade do caso. Na consulta gratuita, fazemos uma avaliacao e apresentamos um orcamento personalizado com opcoes de pagamento."
              },
              {
                q: "As facetas podem manchar ou amarelar?",
                a: "Com os cuidados adequados, as facetas mantem sua cor por anos. Evitar excesso de cafe, vinho e cigarro ajuda na durabilidade da cor."
              },
              {
                q: "E se eu nao gostar do resultado?",
                a: "Por ser reversivel, as facetas de resina podem ser removidas a qualquer momento sem danos aos seus dentes naturais. Alem disso, fazemos um planejamento detalhado para garantir que o resultado seja exatamente o que voce espera."
              },
              {
                q: "Posso comer normalmente?",
                a: "Sim! Voce pode comer normalmente. Recomendamos apenas evitar morder alimentos muito duros diretamente com os dentes da frente, como macas inteiras ou gelo."
              },
              {
                q: "Quanto tempo duram as facetas?",
                a: "Com os cuidados corretos, as facetas de resina duram em media de 5 a 10 anos. Oferecemos acompanhamento regular para garantir a durabilidade."
              },
              {
                q: "Qual a diferenca para lentes de contato dental?",
                a: "Lentes de contato dental e outro nome para facetas ultrafinas. Na pratica, utilizamos a mesma tecnica conservadora que preserva seus dentes naturais."
              }
            ].map((faq, i) => (
              <Card 
                key={i} 
                className={`bg-muted/30 border-border cursor-pointer transition-all ${openFaq === i ? 'border-primary/50 shadow-md' : 'hover:border-primary/30'}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-lg text-foreground">{faq.q}</h3>
                    <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                  {openFaq === i && (
                    <p className="text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border">{faq.a}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA + FORM - 3-Field Form + Primary CTA Button */}
      <section className="py-24 px-4 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-primary text-primary-foreground border-0 text-base px-4 py-1.5">
              Vagas Limitadas Este Mes
            </Badge>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-balance leading-tight">
              Pronto para transformar seu sorriso?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Agende sua avaliacao gratuita e descubra como as facetas de resina podem mudar sua vida
            </p>
          </div>

          <Card className="bg-white shadow-2xl border-0 max-w-xl mx-auto">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Seu Nome</label>
                  <Input 
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-muted/50 border-border h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">WhatsApp</label>
                  <Input 
                    placeholder="(81) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="bg-muted/50 border-border h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-muted/50 border-border h-12"
                  />
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-7 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] font-medium gap-2"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Quero Minha Avaliacao Gratuita
                </a>
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Ou fale diretamente pelo WhatsApp
              </p>

              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-green-500 text-green-600 hover:bg-green-50 gap-2 bg-transparent"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Atendimento em Recife - PE | Resposta em ate 2 horas
          </p>
        </div>
      </section>

      {/* 11. FOOTER - Address, Hours, Social Links */}
      <footer className="py-16 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Smile className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="font-serif text-2xl font-bold">Dra. Daniele Barboza</span>
              </div>
              <p className="text-background/70 leading-relaxed max-w-md">
                Especialista em facetas de resina em Recife. Transformando sorrisos com naturalidade e tecnica conservadora ha mais de 10 anos.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/dradaniele" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contato</h4>
              <div className="space-y-3 text-background/70">
                <a href="tel:+5581999999999" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  (81) 99999-9999
                </a>
                <a href="mailto:contato@dradaniele.com.br" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  contato@dradaniele.com.br
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Av. Boa Viagem, 1234<br />Boa Viagem, Recife - PE</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Horarios</h4>
              <div className="space-y-2 text-background/70">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <div>
                    <p>Segunda a Sexta</p>
                    <p className="font-medium text-background">8h as 18h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <div>
                    <p>Sabado</p>
                    <p className="font-medium text-background">8h as 12h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>2024 Dra. Daniele Barboza. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Politica de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute right-full mr-3 bg-white text-foreground px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Fale Conosco
        </span>
      </a>
    </div>
  )
}
