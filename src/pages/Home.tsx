import { ArrowDown, Code2, Zap, Rocket, Instagram, Facebook, Github, MessageCircle, Users, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Correa
              </span>
              <span className="text-foreground"> Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia, inovação e soluções criativas. 
              Explore meu mundo digital.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/projects">
              <Button className="glow-button group">
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-float" />
                Ver Projetos
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                <Code2 className="w-5 h-5 mr-2" />
                Entre em Contato
              </Button>
            </Link>
          </div>

          <button
            onClick={scrollToSection}
            className="animate-bounce text-primary hover:text-primary-glow transition-colors duration-300"
            aria-label="Rolar para baixo"
          >
            <ArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-glow">Experiência & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combinando tecnologia de ponta com design inovador para criar experiências excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/setup" className="group">
              <div className="tech-card group-hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 animate-glow-pulse">
                  <Code2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-glow">Setup Tecnológico</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hardware de alta performance otimizado para desenvolvimento e gaming. 
                  Configuração pensada para máxima produtividade.
                </p>
              </div>
            </Link>

            <Link to="/projects" className="group">
              <div className="tech-card group-hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 animate-glow-pulse">
                  <Rocket className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-glow">Projetos Inovadores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aplicações web modernas, mobile apps e soluções criativas. 
                  Cada projeto é uma oportunidade de inovar e superar expectativas.
                </p>
              </div>
            </Link>

            <Link to="/certifications" className="group">
              <div className="tech-card group-hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 animate-glow-pulse">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-glow">Certificações</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Constante evolução através de cursos, certificações e workshops. 
                  Sempre atualizado com as últimas tendências tecnológicas.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills & Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-glow">Habilidades & Estatísticas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Números que representam dedicação, experiência e resultados consistentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="tech-card text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 mx-auto animate-glow-pulse">
                <Code2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
            </div>

            <div className="tech-card text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 mx-auto animate-glow-pulse">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>

            <div className="tech-card text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 mx-auto animate-glow-pulse">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>

            <div className="tech-card text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 mx-auto animate-glow-pulse">
                <Activity className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
            </div>
          </div>
          
          {/* Tech Stack Highlights */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-glow">Stack Principal</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React", "TypeScript", "Node.js", "Python", "AWS", "PostgreSQL", 
                "MongoDB", "Docker", "Kubernetes", "Next.js", "Tailwind CSS", "GraphQL"
              ].map((tech, index) => (
                <div 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/30 rounded-full text-sm font-medium text-primary hover:from-primary/20 hover:to-primary-glow/20 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background-secondary/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-glow">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Redes Sociais
              </span>
              <span className="text-foreground ml-3">& Comunidades</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conecte-se comigo nas principais plataformas e acompanhe meu trabalho, 
              projetos e insights sobre tecnologia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="https://instagram.com/correa10k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-card group hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-pink-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                <Instagram className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-pink-500 transition-colors duration-300">
                Instagram
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Unico perfil meu no Instagram.
              </p>
              <span className="text-xs text-pink-500 font-medium">@correa10K</span>
            </a>

            <a 
              href="https://github.com/FagundesDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-card group hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700/20 to-gray-900/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-gray-700/30 group-hover:to-gray-900/30 transition-all duration-300">
                <Github className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gray-300 transition-colors duration-300">
                GitHub
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Código aberto, repositórios e contribuições
              </p>
              <span className="text-xs text-gray-300 font-medium">@FagundesDev</span>
            </a>

            <a 
              href="https://discord.gg/NG3pNbAH3f" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-card group hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-indigo-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                Discord
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Acesse meu Laboratório no Discord, Comunidade com muitos conteudos.
              </p>
              <span className="text-xs text-indigo-400 font-medium">fagundes.10k</span>
            </a>

            <a 
              href="https://tiktok.com/@bah.correa10K" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-card group hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-red-500/30 group-hover:to-pink-600/30 transition-all duration-300">
                <Activity className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-red-400 transition-colors duration-300">
                TikTok
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Tutoriais rápidos e dicas de programação EM BREVE
              </p>
              <span className="text-xs text-red-400 font-medium">@bah.correa10K</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <a 
              href="https://facebook.com/pennywise23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-card group hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-blue-500/30 group-hover:to-blue-700/30 transition-all duration-300">
                <Facebook className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-500 transition-colors duration-300">
                Facebook
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Perfil pessoal e networking profissional
              </p>
              <span className="text-xs text-blue-500 font-medium">facebook.com/TheusVespa</span>
            </a>

            <a 
              href="https://facebook.com/techportfolio.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-card group hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Página Facebook
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Conteúdo profissional e atualizações de projetos
              </p>
              <span className="text-xs text-blue-600 font-medium">TechPortfolio Dev</span>
            </a>

            <a 
              href="https://threads.net/@correa10k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-card group hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800/20 to-black/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-gray-800/30 group-hover:to-black/30 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-gray-200" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gray-200 transition-colors duration-300">
                Threads
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Discussões técnicas e insights da indústria
              </p>
              <span className="text-xs text-gray-200 font-medium">@correa10k</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-background via-background-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-glow">
            Vamos Criar Algo
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent ml-3">
              Extraordinário
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pronto para transformar suas ideias em realidade digital? 
            Entre em contato e vamos discutir seu próximo projeto.
          </p>
          <Link to="/contact">
            <Button className="glow-button text-lg px-8 py-4">
              <Code2 className="w-5 h-5 mr-2" />
              Iniciar Conversa
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;