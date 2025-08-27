import { Award, Calendar, ExternalLink, Star, Trophy, Shield, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      category: "Cloud Computing",
      icon: Shield,
      level: "Professional",
      description: "Certificação avançada em arquitetura de soluções na AWS, cobrindo design de sistemas distribuídos, segurança e otimização de custos.",
      skills: ["AWS Architecture", "Cloud Security", "Cost Optimization", "Scalability"],
      credentialId: "AWS-SAP-2023-001",
      verifyUrl: "https://aws.amazon.com/verification"
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud Platform",
      date: "2023",
      category: "Cloud Development",
      icon: Code,
      level: "Professional",
      description: "Certificação em desenvolvimento de aplicações nativas da nuvem usando serviços do Google Cloud Platform.",
      skills: ["GCP Services", "Kubernetes", "Cloud Functions", "BigQuery"],
      credentialId: "GCP-PD-2023-002",
      verifyUrl: "https://cloud.google.com/certification"
    },
    {
      id: 3,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      category: "Database",
      icon: Database,
      level: "Associate",
      description: "Certificação em desenvolvimento com MongoDB, incluindo modelagem de dados, queries avançadas e performance optimization.",
      skills: ["MongoDB", "Aggregation Pipeline", "Indexing", "Sharding"],
      credentialId: "MDB-DEV-2022-003",
      verifyUrl: "https://university.mongodb.com/verify"
    },
    {
      id: 4,
      title: "React Advanced Patterns",
      issuer: "Meta (Facebook)",
      date: "2022",
      category: "Frontend Development",
      icon: Code,
      level: "Advanced",
      description: "Certificação avançada em React cobrindo hooks customizados, context API, performance optimization e patterns avançados.",
      skills: ["React Hooks", "Context API", "Performance", "Testing"],
      credentialId: "META-REACT-2022-004",
      verifyUrl: "https://developers.facebook.com/certification"
    },
    {
      id: 5,
      title: "Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      category: "DevOps",
      icon: Shield,
      level: "Professional",
      description: "Certificação em administração de clusters Kubernetes, incluindo instalação, configuração e troubleshooting.",
      skills: ["Kubernetes", "Docker", "Container Orchestration", "Networking"],
      credentialId: "CKA-2023-005",
      verifyUrl: "https://www.cncf.io/certification"
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      issuer: "CompTIA",
      date: "2021",
      category: "Security",
      icon: Shield,
      level: "Foundation",
      description: "Certificação fundamental em segurança cibernética, cobrindo princípios de segurança, criptografia e gerenciamento de riscos.",
      skills: ["Network Security", "Cryptography", "Risk Management", "Compliance"],
      credentialId: "SEC-FUND-2021-006",
      verifyUrl: "https://www.comptia.org/certifications"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Professional": return "text-purple-400 border-purple-400/30 bg-purple-400/10";
      case "Advanced": return "text-blue-400 border-blue-400/30 bg-blue-400/10";
      case "Associate": return "text-green-400 border-green-400/30 bg-green-400/10";
      case "Foundation": return "text-yellow-400 border-yellow-400/30 bg-yellow-400/10";
      default: return "text-muted-foreground border-border/30 bg-muted/10";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Cloud Computing":
      case "Cloud Development":
        return Shield;
      case "Frontend Development":
        return Code;
      case "Database":
        return Database;
      case "DevOps":
        return Trophy;
      case "Security":
        return Shield;
      default:
        return Award;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-glow">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Certificações
            </span>
            <span className="text-foreground ml-3">& Conquistas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprometimento contínuo com o aprendizado e excelência técnica. 
            Certificações que validam expertise e conhecimento em tecnologias de ponta.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="tech-card text-center">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Certificações Ativas</div>
          </div>
          <div className="tech-card text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Níveis Professional</div>
          </div>
          <div className="tech-card text-center">
            <div className="text-3xl font-bold text-primary mb-2">2023</div>
            <div className="text-sm text-muted-foreground">Última Atualização</div>
          </div>
          <div className="tech-card text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Taxa de Aprovação</div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const CategoryIcon = getCategoryIcon(cert.category);
            
            return (
              <div 
                key={cert.id}
                className="tech-card group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center animate-glow-pulse">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-center mb-4">
                  <CategoryIcon className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm text-primary font-medium">{cert.category}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Habilidades Validadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-background-secondary/50 text-foreground text-xs rounded-md border border-border/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential Info */}
                <div className="bg-background-secondary/30 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">ID da Credencial</span>
                    <span className="text-xs font-mono text-primary">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Verify Button */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary/50 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verificar Credencial
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Learning Journey Timeline */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-glow">Jornada de Aprendizado</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-6 p-6 tech-card">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center animate-glow-pulse">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">2023 - Certificações Cloud</h3>
                  <p className="text-muted-foreground">
                    Foco em arquitetura de nuvem e DevOps. AWS Solutions Architect, 
                    Google Cloud Developer e Kubernetes Administrator.
                  </p>
                </div>
                <div className="text-primary font-semibold">3 certificações</div>
              </div>
              
              <div className="flex items-center space-x-6 p-6 tech-card">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">2022 - Desenvolvimento Moderno</h3>
                  <p className="text-muted-foreground">
                    Especialização em frameworks modernos. React Advanced Patterns, 
                    MongoDB Developer e certificações específicas de tecnologia.
                  </p>
                </div>
                <div className="text-blue-400 font-semibold">2 certificações</div>
              </div>
              
              <div className="flex items-center space-x-6 p-6 tech-card">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">2021 - Fundamentos Sólidos</h3>
                  <p className="text-muted-foreground">
                    Base sólida em segurança e fundamentos. CompTIA Security+ 
                    e outras certificações essenciais para carreira tech.
                  </p>
                </div>
                <div className="text-green-400 font-semibold">1 certificação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Matrix */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-glow">Matriz de Competências</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Cloud & DevOps
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">AWS</span>
                  <div className="w-24 h-2 bg-background-secondary rounded-full">
                    <div className="w-full h-full bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Kubernetes</span>
                  <div className="w-24 h-2 bg-background-secondary rounded-full">
                    <div className="w-5/6 h-full bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Docker</span>
                  <div className="w-24 h-2 bg-background-secondary rounded-full">
                    <div className="w-full h-full bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Desenvolvimento
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">React/TypeScript</span>
                  <div className="w-24 h-2 bg-background-secondary rounded-full">
                    <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Node.js</span>
                  <div className="w-24 h-2 bg-background-secondary rounded-full">
                    <div className="w-5/6 h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Python</span>
                  <div className="w-24 h-2 bg-background-secondary rounded-full">
                    <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Banco de Dados
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">MongoDB</span>
                  <div className="w-24 h-2 bg-background-secondary rounded-full">
                    <div className="w-full h-full bg-gradient-to-r from-green-500 to-green-700 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">PostgreSQL</span>
                  <div className="w-24 h-2 bg-background-secondary rounded-full">
                    <div className="w-5/6 h-full bg-gradient-to-r from-green-500 to-green-700 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Redis</span>
                  <div className="w-24 h-2 bg-background-secondary rounded-full">
                    <div className="w-3/4 h-full bg-gradient-to-r from-green-500 to-green-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Próximas Metas */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-glow">Próximas Metas de Certificação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="tech-card opacity-60 border-dashed">
              <div className="w-12 h-12 bg-gradient-to-br from-muted to-muted-foreground/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Trophy className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">Machine Learning Engineer</h3>
              <p className="text-sm text-muted-foreground">Google Cloud ML Engineer</p>
              <span className="inline-block mt-2 px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full">
                Em Progresso - 70%
              </span>
            </div>
            
            <div className="tech-card opacity-60 border-dashed">
              <div className="w-12 h-12 bg-gradient-to-br from-muted to-muted-foreground/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">Security Specialist</h3>
              <p className="text-sm text-muted-foreground">CISSP Certification</p>
              <span className="inline-block mt-2 px-3 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full">
                Planejado Q2 2024
              </span>
            </div>
            
            <div className="tech-card opacity-60 border-dashed">
              <div className="w-12 h-12 bg-gradient-to-br from-muted to-muted-foreground/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Code className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">Blockchain Developer</h3>
              <p className="text-sm text-muted-foreground">Ethereum Developer</p>
              <span className="inline-block mt-2 px-3 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">
                Meta Q3 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;