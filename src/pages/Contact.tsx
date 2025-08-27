import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Clock, MessageSquare, Code, Smartphone, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Retornarei o contato em breve. Obrigado!",
      });

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "RealCorreaF@gmail.com",
      href: "mailto:RealCorreaF@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/techportfolio",
      href: "https://linkedin.com/in/techportfolio"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@FagundesDev",
      href: "https://github.com/fagundesdev"
    }
  ];

  const quickInfo = [
    {
      icon: MapPin,
      label: "Localização",
      value: "Gravataí, RS"
    },
    {
      icon: Clock,
      label: "Fuso Horário",
      value: "UTC-3 (BRT)"
    },
    {
      icon: MessageSquare,
      label: "Resposta",
      value: "Dentro de 24h"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-glow">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Entre em
            </span>
            <span className="text-foreground ml-3">Contato</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vamos conversar sobre seu próximo projeto? Estou sempre aberto a novas oportunidades 
            e colaborações interessantes. Entre em contato!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="tech-card">
              <h2 className="text-2xl font-bold text-glow mb-6">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="bg-background-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu.email@exemplo.com"
                      required
                      className="bg-background-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Assunto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sobre o que você gostaria de conversar?"
                    required
                    className="bg-background-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto, ideia ou como posso ajudar..."
                    required
                    rows={6}
                    className="bg-background-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="glow-button w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="tech-card">
              <h3 className="text-xl font-bold text-glow mb-6">Contato Direto</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary-glow/30 transition-all duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        <div className="text-foreground font-medium">{contact.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="tech-card">
              <h3 className="text-xl font-bold text-glow mb-6">Informações Úteis</h3>
              <div className="space-y-4">
                {quickInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="text-foreground font-medium">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Card */}
            <div className="tech-card bg-gradient-to-br from-primary/10 to-primary-glow/5 border-primary/30">
              <div className="text-center">
                <h3 className="text-lg font-bold text-primary mb-3">Projeto Urgente?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Para projetos com prazo apertado, entre em contato direto via WhatsApp.
                </p>
                <Button 
                  className="glow-button text-sm"
                  asChild
                >
                  <a href="https://wa.link/52x7fb" target="_blank" rel="noopener noreferrer">
                    WhatsApp Direto
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Services */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-glow">Serviços Profissionais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="tech-card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Code className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Desenvolvimento Web</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Aplicações web completas com React, Next.js e tecnologias modernas. 
                Desde MVPs até plataformas empresariais.
              </p>
              <div className="text-xs text-muted-foreground">
                A partir de <span className="text-primary font-semibold">R$ 5.000</span>
              </div>
            </div>

            <div className="tech-card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Apps Mobile</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Desenvolvimento de aplicativos iOS e Android usando React Native. 
                Performance nativa com código compartilhado.
              </p>
              <div className="text-xs text-muted-foreground">
                A partir de <span className="text-primary font-semibold">R$ 8.000</span>
              </div>
            </div>

            <div className="tech-card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Database className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Consultoria Cloud</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Migração para nuvem, otimização de custos e arquitetura escalável. 
                AWS, GCP e Azure.
              </p>
              <div className="text-xs text-muted-foreground">
                <span className="text-primary font-semibold">R$ 200/hora</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-glow">Como Trabalhamos</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 tech-card">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Descoberta & Planejamento</h3>
                  <p className="text-muted-foreground">
                    Entendemos suas necessidades, objetivos e restrições. Definimos escopo, 
                    cronograma e tecnologias mais adequadas para o projeto.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 tech-card">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Design & Prototipagem</h3>
                  <p className="text-muted-foreground">
                    Criamos wireframes, mockups e protótipos interativos. 
                    Validamos a experiência do usuário antes do desenvolvimento.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 tech-card">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Desenvolvimento</h3>
                  <p className="text-muted-foreground">
                    Desenvolvimento iterativo com entregas frequentes. 
                    Código limpo, testes automatizados e documentação completa.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 tech-card">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Deploy & Suporte</h3>
                  <p className="text-muted-foreground">
                    Deploy automatizado, monitoramento em produção e suporte técnico. 
                    Garantimos que tudo funcione perfeitamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-glow">Perguntas Frequentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-3">Quanto tempo para resposta?</h3>
              <p className="text-sm text-muted-foreground">
                Normalmente respondo em até 4 horas durante horário comercial. 
                Para projetos urgentes, entre em contato direto via WhatsApp.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-3">Trabalho com que tecnologias?</h3>
              <p className="text-sm text-muted-foreground">
                React, Node.js, Python, AWS, PostgreSQL, MongoDB e muitas outras. 
                Sempre usando as tecnologias mais adequadas ao projeto.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-3">Disponível para freelance?</h3>
              <p className="text-sm text-muted-foreground">
                Sim! Sempre aberto a projetos interessantes e desafios técnicos únicos. 
                Contato para discutirmos seu projeto.
              </p>
            </div>

            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-3">Como é o processo de pagamento?</h3>
              <p className="text-sm text-muted-foreground">
                Normalmente 50% antecipado e 50% na entrega. Para projetos maiores, 
                podemos parcelar em mais etapas conforme cronograma.
              </p>
            </div>

            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-3">Oferece garantia?</h3>
              <p className="text-sm text-muted-foreground">
                Sim! 30 dias de garantia para correção de bugs e ajustes. 
                Suporte técnico estendido disponível mediante contrato.
              </p>
            </div>

            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-3">Trabalha presencial?</h3>
              <p className="text-sm text-muted-foreground">
                Preferencialmente remoto, mas posso atender presencialmente 
                na região de Gravataí/Cachoeirinha/POA mediante agendamento prévio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;