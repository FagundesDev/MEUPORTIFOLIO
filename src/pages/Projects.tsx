import { ExternalLink, Github, Zap, Globe, Smartphone, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Pro",
      description: "Plataforma completa de e-commerce B2B/B2C com dashboard administrativo avançado, sistema de pagamentos múltiplos, gestão de inventário em tempo real e analytics detalhado.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis", "Docker"],
      category: "Full Stack",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      status: "Concluído",
      github: "https://github.com/techportfolio/ecommerce-platform",
      demo: "https://ecommerce-demo.techportfolio.dev",
      highlights: ["1M+ produtos", "99.9% uptime", "< 2s loading", "500+ usuários simultâneos"]
    },
    {
      id: 2,
      title: "TaskFlow - Gestão Empresarial",
      description: "Aplicativo empresarial de gerenciamento de projetos e tarefas com sincronização em tempo real, notificações push inteligentes, relatórios avançados e integração com Slack/Teams.",
      tech: ["React Native", "Firebase", "TypeScript", "Redux Toolkit", "Expo"],
      category: "Mobile",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      status: "Em desenvolvimento",
      github: "https://github.com/techportfolio/taskflow",
      demo: null,
      highlights: ["Offline-first", "Cross-platform", "Real-time sync", "10k+ downloads beta"]
    },
    {
      id: 3,
      title: "DataViz Analytics Hub",
      description: "Dashboard executivo de business intelligence com visualizações interativas D3.js, relatórios personalizáveis, alertas automáticos e exportação para múltiplos formatos.",
      tech: ["Vue.js", "Python", "FastAPI", "MongoDB", "D3.js", "Docker", "Kubernetes"],
      category: "Data Visualization",
      icon: Database,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      status: "Concluído",
      github: "https://github.com/techportfolio/dataviz-hub",
      demo: "https://analytics.techportfolio.dev",
      highlights: ["5TB+ dados", "50+ widgets", "Real-time updates", "Multi-tenant"]
    },
    {
      id: 4,
      title: "AI Content Studio",
      description: "Plataforma SaaS de geração de conteúdo usando IA para criar textos, imagens, layouts e campanhas automaticamente. Integração com OpenAI, Midjourney e ferramentas de marketing.",
      tech: ["Next.js", "OpenAI API", "Tailwind", "Prisma", "Vercel", "Stripe", "Supabase"],
      category: "AI/ML",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=entropy&auto=format",
      status: "Concluído",
      github: "https://github.com/techportfolio/ai-content-studio",
      demo: "https://ai-studio.techportfolio.dev",
      highlights: ["10k+ gerações/dia", "15+ templates", "95% precisão", "API pública"]
    },
    {
      id: 5,
      title: "FinTech Crypto Wallet",
      description: "Carteira digital multi-cripto com trading automático, staking, DeFi integration, portfolio tracking e security features avançadas. Suporte para 100+ criptomoedas.",
      tech: ["React", "Solidity", "Web3.js", "Node.js", "PostgreSQL", "AWS KMS"],
      category: "Blockchain",
      icon: Database,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=entropy&auto=format",
      status: "Beta",
      github: "https://github.com/techportfolio/crypto-wallet",
      demo: "https://wallet-beta.techportfolio.dev",
      highlights: ["100+ cryptos", "Bank-level security", "DeFi integration", "Mobile + Web"]
    },
    {
      id: 6,
      title: "IoT Smart Home Hub",
      description: "Sistema completo de automação residencial com controle via app, machine learning para otimização energética, integração com Alexa/Google e monitoramento 24/7.",
      tech: ["React Native", "Python", "MQTT", "TensorFlow", "PostgreSQL", "AWS IoT"],
      category: "IoT",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1558618666-fdcd92146c3c?w=600&h=400&fit=crop&crop=entropy&auto=format",
      status: "Concluído",
      github: "https://github.com/techportfolio/smart-home",
      demo: "https://smarthome-demo.techportfolio.dev",
      highlights: ["500+ devices", "30% economia energia", "ML predictions", "Voice control"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído": return "text-green-400";
      case "Em desenvolvimento": return "text-yellow-400";
      case "Beta": return "text-blue-400";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-glow">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Projetos
            </span>
            <span className="text-foreground ml-3">em Destaque</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções inovadoras desenvolvidas com tecnologias modernas. 
            Cada projeto representa um desafio superado e uma oportunidade de crescimento.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.id}
                className="tech-card group hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary-glow/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-md font-medium">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Project Highlights */}
                    {project.highlights && (
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight) => (
                            <span 
                              key={highlight}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium border border-primary/20"
                            >
                              ✓ {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-background-secondary/50 text-foreground text-xs rounded-md border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary/50 text-primary hover:bg-primary/10 flex-1"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button 
                        size="sm"
                        className="glow-button flex-1"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Stats */}
        <div className="mt-20 p-8 tech-card">
          <h2 className="text-2xl font-bold text-center mb-8 text-glow">Estatísticas dos Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-background-secondary/30 rounded-lg border border-border/30">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
            </div>
            <div className="text-center p-4 bg-background-secondary/30 rounded-lg border border-border/30">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div className="text-center p-4 bg-background-secondary/30 rounded-lg border border-border/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Tecnologias Dominadas</div>
            </div>
            <div className="text-center p-4 bg-background-secondary/30 rounded-lg border border-border/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Tempo Médio Resposta</div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-glow">Stack Tecnológico Completo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SASS"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-4">Banco de Dados</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "Supabase"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-4">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx", "Linux"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-4">Mobile</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["React Native", "Flutter", "iOS", "Android", "Expo", "Capacitor"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-4">Ferramentas</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Git", "VS Code", "Figma", "Postman", "Jest", "Cypress"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-full border border-teal-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;