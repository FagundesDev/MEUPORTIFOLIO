import { Monitor, Cpu, HardDrive, MemoryStick, Headphones, Keyboard, Mouse, Gamepad2 } from 'lucide-react';

const Setup = () => {
  const setupItems = [
    {
      category: "Processamento",
      icon: Cpu,
      items: [
        { name: "Intel® Xeon® E5-2699 v3", description: "18 cores, 36 threads - 2,30 GHz", specs: "cache de 45 M, 2,30 GHz" },
        { name: "NVIDIA RTX 4080 Super", description: "16GB GDDR6X VRAM", specs: "10240 CUDA cores, Ray Tracing Gen 3" }
      ]
    },
    {
      category: "Memória & Armazenamento",
      icon: MemoryStick,
      items: [
        { name: "32GB DDR4-3200", description: "Machinist Game Memory PPX", specs: "CL30, Dual Channel" },
        { name: "Kingspec 256GB", description: "NVMe SSD M.2", specs: "7000MB/s read, PCIe 4.0" },
        { name: "2x Kingston 1TB Cada", description: "2000MB/s", specs: "Cache 256MB, SATA III" }
      ]
    },
    {
      category: "Display & Visual",
      icon: Monitor,
      items: [
        { name: "LG 27GP950-B", description: "4K 144Hz Nano IPS", specs: "HDR600, 1ms, G-Sync Compatible" },
        { name: "AOC 24G2 2° Tela", description: "Full HD 144Hz IPS", specs: "1ms, FreeSync Premium" }
      ]
    },
    {
      category: "Periféricos",
      icon: Keyboard,
      items: [
        { name: "Attack Shark", description: "Mouse ergonômico wireless", specs: "8000 DPI, USB-C, 70 dias bateria" },
        { name: "Keychron K8 Pro", description: "Teclado mecânico 75%", specs: "Gateron Pro Red, RGB, Wireless" },
        { name: "Attack Shark", description: "H7 profissional", specs: "45mm drivers, Bluetooth 5.0, 50h bateria" },
        { name: "BM800", description: "Microfone Condensador", specs: "Mic P2" }

      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-glow">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Setup
            </span>
            <span className="text-foreground ml-3">Atual</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Configuração de alta performance otimizada para desenvolvimento, design e gaming. 
            Hardware cuidadosamente selecionado para máxima produtividade e experiência.
          </p>
        </div>

        {/* Setup Categories */}
        <div className="space-y-12">
          {setupItems.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.category}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mr-4 animate-glow-pulse">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-glow">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={item.name}
                      className="tech-card group hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (itemIndex * 0.1)}s` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {item.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-background-secondary/50 rounded-lg p-3 border border-border/30">
                        <p className="text-xs text-primary font-mono">
                          {item.specs}
                        </p>
                      </div>
                      
                      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Stats */}
        <div className="mt-20 p-8 tech-card">
          <h2 className="text-2xl font-bold text-center mb-8 text-glow">Benchmarks & Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-background-secondary/30 rounded-lg border border-border/30">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground mb-1">CPU Performance</div>
              <div className="text-xs text-muted-foreground">Cinebench R23</div>
            </div>
            <div className="text-center p-4 bg-background-secondary/30 rounded-lg border border-border/30">
              <div className="text-3xl font-bold text-primary mb-2">165fps</div>
              <div className="text-sm text-muted-foreground mb-1">Média de Jogos</div>
              <div className="text-xs text-muted-foreground">1440p Configurações Ultra</div>
            </div>
            <div className="text-center p-4 bg-background-secondary/30 rounded-lg border border-border/30">
              <div className="text-3xl font-bold text-primary mb-2">&lt;3s</div>
              <div className="text-sm text-muted-foreground mb-1">Build Time</div>
              <div className="text-xs text-muted-foreground">React + Vite Projects</div>
            </div>
            <div className="text-center p-4 bg-background-secondary/30 rounded-lg border border-border/30">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground mb-1">Uptime</div>
              <div className="text-xs text-muted-foreground">Sistema estável</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-background-secondary/30 rounded-lg border border-border/30">
              <div className="text-2xl font-bold text-green-400 mb-2">7.2GB/s</div>
              <div className="text-sm text-muted-foreground">SSD Read Speed</div>
            </div>
            <div className="text-center p-4 bg-background-secondary/30 rounded-lg border border-border/30">
              <div className="text-2xl font-bold text-blue-400 mb-2">32GB</div>
              <div className="text-sm text-muted-foreground">DDR4 3200MHz</div>
            </div>
            <div className="text-center p-4 bg-background-secondary/30 rounded-lg border border-border/30">
              <div className="text-2xl font-bold text-purple-400 mb-2">MSI 650W</div>
              <div className="text-sm text-muted-foreground">80+ Gold</div>
            </div>
          </div>
        </div>

        {/* Setup Philosophy */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8 text-glow">Filosofia do Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-3">Performance</h3>
              <p className="text-sm text-muted-foreground">
                Cada componente selecionado para oferecer máxima performance em desenvolvimento, 
                design e multitasking pesado.
              </p>
            </div>
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-3">Confiabilidade</h3>
              <p className="text-sm text-muted-foreground">
                Marcas e modelos testados e aprovados pela comunidade, 
                garantindo estabilidade para trabalho profissional.
              </p>
            </div>
            <div className="tech-card">
              <h3 className="text-lg font-semibold text-primary mb-3">Futuro-proof</h3>
              <p className="text-sm text-muted-foreground">
                Configuração preparada para as próximas gerações de tecnologia, 
                com capacidade de upgrades e expansão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;