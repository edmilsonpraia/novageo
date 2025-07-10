import React, { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  features: string[];
  price: string;
  duration: string;
  image: string;
  icon: string;
  featured: boolean;
  software: string[];
  requirements: string[];
  benefits: string[];
  modules: string[];
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  service: string;
  rating: number;
}

const NovaGeoServices: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: 'Interpretação de Dados Sísmicos',
      description: 'Curso completo de interpretação sísmica 2D e 3D, incluindo fundamentos de aquisição, processamento e análise de DHI (Indicadores Diretos de Hidrocarbonetos).',
      category: 'geofisica',
      features: [
        'Aquisição de dados sísmicos',
        'Processamento de dados sísmicos',
        'Interpretação estrutural',
        'Mapeamento de horizontes em 2D',
        'Análise de DHI',
        'Sismoestratigrafia',
        'Exercícios práticos'
      ],
      price: '350.000,00 Kz',
      duration: '40 horas',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f7?w=600&h=300&fit=crop',
      icon: '📊',
      featured: true,
      software: ['Software especializado de interpretação sísmica'],
      requirements: ['Licenciatura em Geociências', 'Conhecimentos básicos de geofísica', 'Computador Core i3+'],
      benefits: ['Domínio em interpretação sísmica', 'Análise de indicadores de hidrocarbonetos', 'Competência em mapeamento estrutural'],
      modules: ['Aquisição de dados', 'Processamento sísmico', 'Interpretação de dados sísmicos']
    },
    {
      id: 2,
      title: 'Petrel - Modelagem Estática',
      description: 'Domínio completo do Petrel para modelagem estática, correlação de poços e cálculo de volumes de hidrocarbonetos usando o software Schlumberger.',
      category: 'modelagem',
      features: [
        'Interface do Petrel Software',
        'Importação de dados de poços',
        'Correlação de poços',
        'Modelo de falhas',
        'Elaboração de zonas',
        'Modelo petrofísico',
        'Cálculo de volumes de hidrocarbonetos'
      ],
      price: '350.000,00 Kz',
      duration: '40 horas',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop',
      icon: '🗻',
      featured: true,
      software: ['Petrel (Schlumberger)'],
      requirements: ['Experiência em geologia', 'Conhecimento de petrofísica', 'Acesso ao software Petrel'],
      benefits: ['Modelagem geológica avançada', 'Cálculo preciso de volumes', 'Competência em software líder'],
      modules: ['Introdução ao Petrel', 'Importação e manipulação de dados', 'Construção de modelos', 'Cálculo de volumes']
    },
    {
      id: 3,
      title: 'Programação Python para Geociências',
      description: 'Python aplicado a geociências: importação de diagrafias, dados sísmicos, manipulação com Pandas e análise estatística para profissionais da área.',
      category: 'programacao',
      features: [
        'Fundamentos da programação Python',
        'Importação de dados CSV e Excel',
        'Visualização de diagrafias',
        'Importação de dados sísmicos',
        'Manipulação com Pandas',
        'Análise estatística descritiva'
      ],
      price: '350.000,00 Kz',
      duration: '32 horas',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=300&fit=crop',
      icon: '🐍',
      featured: true,
      software: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
      requirements: ['Conhecimentos básicos de programação', 'Experiência em geociências', 'Boa conexão à internet'],
      benefits: ['Automação de análises', 'Processamento eficiente de dados', 'Competência em Python'],
      modules: ['Fundamentos Python', 'Manipulação de dados', 'Visualização', 'Análise estatística']
    },
    {
      id: 4,
      title: 'Geologia do Petróleo',
      description: 'Fundamentos completos: sistema petrolífero, rochas geradoras, reservatório, migração e armadilhas das bacias angolanas.',
      category: 'geologia',
      features: [
        'Sistema petrolífero',
        'Rochas geradoras',
        'Rochas reservatório',
        'Migração de hidrocarbonetos',
        'Tipos de armadilhas',
        'Bacias sedimentares angolanas',
        'Exploração petrolífera'
      ],
      price: '350.000,00 Kz',
      duration: '40 horas',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=300&fit=crop',
      icon: '🛢️',
      featured: false,
      software: ['Software de modelagem geológica'],
      requirements: ['Formação em geociências', 'Conhecimento de geologia geral', 'Interesse em petróleo'],
      benefits: ['Compreensão do sistema petrolífero', 'Conhecimento das bacias angolanas', 'Base para exploração'],
      modules: ['Introdução à Geologia do Petróleo', 'Sistema Petrolífero', 'Ciclo de transformação', 'Exploração Petrolífera']
    },
    {
      id: 5,
      title: 'Interpretação de Dados Petrofísicos',
      description: 'Interpretação de diagrafias, cálculo de porosidade, saturação de água, volume de argila e identificação de reservatórios.',
      category: 'petrofisica',
      features: [
        'Ferramentas wireline e LWD',
        'Interpretação de diagrafias',
        'Cálculo de porosidade',
        'Saturação de água',
        'Volume de argila',
        'Identificação de reservatórios',
        'Exercícios práticos'
      ],
      price: '350.000,00 Kz',
      duration: '36 horas',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=300&fit=crop',
      icon: '📈',
      featured: false,
      software: ['Software de interpretação petrofísica'],
      requirements: ['Conhecimento de geologia', 'Experiência com poços', 'Fundamentos de petrofísica'],
      benefits: ['Interpretação precisa de poços', 'Cálculos petrofísicos', 'Avaliação de reservatórios'],
      modules: ['Fundamentos e aplicações', 'Ferramentas petrofísicas', 'Interpretação de diagrafias', 'Exercícios práticos']
    },
    {
      id: 6,
      title: 'Geologia de Campo - Miradouro da Lua',
      description: 'Análise estratigráfica e estrutural no campo com visita técnica ao Miradouro da Lua para observação de formações geológicas únicas.',
      category: 'campo',
      features: [
        'Análise estratigráfica',
        'Análise estrutural',
        'Observação de afloramentos',
        'Técnicas de campo',
        'Fotografia geológica',
        'Relatório de campo'
      ],
      price: '350.000,00 Kz',
      duration: '2 dias (16 horas)',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=300&fit=crop',
      icon: '🏔️',
      featured: true,
      software: ['GPS', 'Bússola geológica', 'Martelo de geólogo'],
      requirements: ['Equipamentos de campo', 'Disposição para trabalho outdoor', 'Conhecimentos básicos de geologia'],
      benefits: ['Experiência prática de campo', 'Conhecimento das formações angolanas', 'Técnicas de observação'],
      modules: ['Preparação para campo', 'Trabalho de campo', 'Análise de dados']
    },
    {
      id: 7,
      title: 'Introdução ao QGIS',
      description: 'Fundamentos de Sistema de Informação Geográfica usando QGIS 3.36 para análise espacial e mapeamento geológico.',
      category: 'gis',
      features: [
        'Interface do QGIS',
        'Importação de dados',
        'Análise espacial',
        'Cartografia digital',
        'Geoprocessamento',
        'Produção de mapas'
      ],
      price: '350.000,00 Kz',
      duration: '32 horas',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
      icon: '🗺️',
      featured: false,
      software: ['QGIS 3.36'],
      requirements: ['Conhecimentos básicos de informática', 'Interesse em cartografia', 'Computador adequado'],
      benefits: ['Domínio em SIG', 'Capacidade de mapeamento', 'Análise espacial'],
      modules: ['Fundamentos de SIG', 'Interface QGIS', 'Análise espacial', 'Cartografia']
    },
    {
      id: 8,
      title: 'Introdução às Operações Petrolíferas',
      description: 'Visão geral das operações da indústria petrolífera, desde exploração até produção, com foco nas operações angolanas.',
      category: 'operacoes',
      features: [
        'Exploração da indústria em Angola',
        'Métodos de exploração geológica',
        'Operações de perfuração',
        'Completação de poços',
        'Produção de petróleo',
        'Segurança operacional'
      ],
      price: '350.000,00 Kz',
      duration: '40 horas',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop',
      icon: '🏭',
      featured: false,
      software: ['Software de simulação'],
      requirements: ['Interesse na indústria petrolífera', 'Conhecimentos básicos', 'Compromisso com segurança'],
      benefits: ['Visão geral da indústria', 'Conhecimento operacional', 'Perspectivas de carreira'],
      modules: ['Introdução à indústria', 'Noções de geologia', 'Operações de perfuração', 'Noções de produção']
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Eng. Carlos Mendes',
      role: 'Geofísico Sênior',
      company: 'Sonangol EP',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
      content: 'O curso de interpretação sísmica da NovaGeo transformou minha carreira. MSc. Zongo Armando tem uma didática excepcional e experiência prática impressionante.',
      service: 'Interpretação Sísmica',
      rating: 5
    },
    {
      id: 2,
      name: 'Dra. Ana Ferreira',
      role: 'Geóloga de Reservatório',
      company: 'Chevron Angola',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c3c5?w=100&h=100&fit=crop&crop=face',
      content: 'O domínio do Petrel que adquiri na NovaGeo me abriu portas na indústria. O curso é muito prático e focado nas necessidades reais do mercado angolano.',
      service: 'Petrel - Modelagem',
      rating: 5
    },
    {
      id: 3,
      name: 'João Silva',
      role: 'Estudante de Geologia',
      company: 'Universidade Agostinho Neto',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'O field trip ao Miradouro da Lua foi uma experiência única! Ver na prática as formações geológicas e aplicar os conceitos teóricos foi incrível.',
      service: 'Geologia de Campo',
      rating: 5
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos os Cursos', icon: '🎓', count: services.length },
    { id: 'geofisica', name: 'Geofísica', icon: '📊', count: services.filter(s => s.category === 'geofisica').length },
    { id: 'modelagem', name: 'Modelagem', icon: '🗻', count: services.filter(s => s.category === 'modelagem').length },
    { id: 'programacao', name: 'Programação', icon: '🐍', count: services.filter(s => s.category === 'programacao').length },
    { id: 'geologia', name: 'Geologia', icon: '🛢️', count: services.filter(s => s.category === 'geologia').length },
    { id: 'petrofisica', name: 'Petrofísica', icon: '📈', count: services.filter(s => s.category === 'petrofisica').length },
    { id: 'campo', name: 'Campo', icon: '🏔️', count: services.filter(s => s.category === 'campo').length },
    { id: 'gis', name: 'SIG/GIS', icon: '🗺️', count: services.filter(s => s.category === 'gis').length },
    { id: 'operacoes', name: 'Operações', icon: '🏭', count: services.filter(s => s.category === 'operacoes').length }
  ];

  const filteredServices = services.filter(service => {
    if (activeCategory !== 'all' && service.category !== activeCategory) return false;
    return true;
  });

  const featuredServices = services.filter(service => service.featured);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
    ));
  };

  const handleRequestService = (service: Service) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de me inscrever no curso "${service.title}". Valor: ${service.price}. Podem me fornecer mais informações?`
    );
    window.open(`https://wa.me/+244923577164?text=${message}`, '_blank');
  };

  const handleEmailContact = (service: Service) => {
    const subject = encodeURIComponent(`Interesse no curso: ${service.title}`);
    const body = encodeURIComponent(
      `Prezado MSc. Zongo Armando,\n\nTenho interesse no curso "${service.title}" no valor de ${service.price}.\n\nPoderia fornecer mais informações sobre:\n- Datas de início\n- Formato do curso (presencial/online/domicílio)\n- Cronograma\n- Requisitos\n\nObrigado!`
    );
    window.location.href = `mailto:info@nova-geo.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Cursos em Geociências</h1>
          <p className="text-xl mb-4 opacity-90">
            🇦🇴 NovaGeo - Prestação de Serviços em Geociências
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mb-8">
            Formação especializada, consultoria e prestação de serviços em geociências 
            ministrada por MSc. Zongo Armando, com experiência prática na indústria angolana.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-2xl">🎓</span>
              <p className="text-sm">Formação Especializada</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-2xl">🏭</span>
              <p className="text-sm">Foco na Indústria</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-2xl">💰</span>
              <p className="text-sm">Valor Fixo: 350K Kz</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* Cursos em Destaque */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <span>⭐</span>
              Cursos em Destaque
            </h2>
            <p className="text-lg text-gray-600">Os cursos mais procurados pelos profissionais de geociências</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      ⭐ Destaque
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-lg">
                      {service.icon}
                    </span>
                  </div>
                </div>
                
                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Ver Detalhes
                    </button>
                    <button 
                      onClick={() => handleRequestService(service)}
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filtros por Categoria */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Todos os Cursos</h2>
            <p className="text-lg text-gray-600">Explore por área de especialização</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Grid de Cursos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="md:flex">
                  {/* Imagem lateral */}
                  <div className="md:w-64 h-48 md:h-auto">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-2xl">{service.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>

                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                          <div>
                            <p className="text-gray-500">Valor</p>
                            <p className="font-semibold text-green-600">{service.price}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Duração</p>
                            <p className="font-semibold text-gray-900">{service.duration}</p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button 
                            onClick={() => setSelectedService(service)}
                            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                          >
                            Ver Detalhes
                          </button>
                          <button 
                            onClick={() => handleRequestService(service)}
                            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                          >
                            Inscrever-se
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <span>💬</span>
              Depoimentos dos Alunos
            </h2>
            <p className="text-lg text-gray-600">O que dizem os profissionais formados pela NovaGeo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">🇦🇴 {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                
                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium inline-block">
                  {testimonial.service}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal de Detalhes do Curso */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{selectedService.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                      <p className="text-green-200 text-sm">👨‍🏫 MSc. Zongo Armando</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Descrição do Curso</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{selectedService.description}</p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Conteúdo Programático</h3>
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Benefícios</h3>
                    <div className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-blue-500">🎯</span>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Informações do Curso</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Valor</p>
                          <p className="text-2xl font-bold text-green-600">{selectedService.price}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Duração</p>
                          <p className="text-xl font-bold text-gray-900">{selectedService.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Formador</p>
                          <p className="text-lg font-bold text-gray-900">MSc. Zongo Armando</p>
                          <p className="text-sm text-gray-600">Geofísico e Geólogo • ISPTEC</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-4">Softwares Utilizados</h3>
                    <div className="space-y-2 mb-6">
                      {selectedService.software.map((software, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg">
                          <span className="text-green-500">💻</span>
                          <span className="text-gray-700">{software}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-4">Requisitos</h3>
                    <div className="space-y-2 mb-6">
                      {selectedService.requirements.map((requirement, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-orange-500">📋</span>
                          <span className="text-gray-700 text-sm">{requirement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedService(null)}
                        className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      >
                        Fechar
                      </button>
                      <button
                        onClick={() => {
                          handleRequestService(selectedService);
                          setSelectedService(null);
                        }}
                        className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                      >
                        📱 Inscrever via WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Formatos de Treinamento */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <span>📍</span>
              Formatos de Treinamento
            </h2>
            <p className="text-lg text-gray-600">Escolha a modalidade que melhor se adapta às suas necessidades</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ao Domicílio</h3>
              <p className="text-gray-600 text-sm mb-4">
                Atendimento personalizado na sua casa ou escritório.
              </p>
              <p className="text-green-600 font-bold">350.000 Kz + Deslocação</p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Presencial</h3>
              <p className="text-gray-600 text-sm mb-4">
                Nas instalações da NovaGeo em Kilamba.
              </p>
              <p className="text-green-600 font-bold">350.000 Kz</p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Online</h3>
              <p className="text-gray-600 text-sm mb-4">
                Aulas virtuais com gravações e materiais digitais.
              </p>
              <p className="text-green-600 font-bold">350.000 Kz</p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Empresas</h3>
              <p className="text-gray-600 text-sm mb-4">
                Treinamento corporativo personalizado.
              </p>
              <p className="text-green-600 font-bold">Valor Negociável</p>
            </div>
          </div>
        </section>

        {/* Processo de Inscrição */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <span>🔄</span>
              Como se Inscrever?
            </h2>
            <p className="text-lg text-gray-600">Processo simples e rápido para começar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📞 Contato</h3>
              <p className="text-gray-600 text-sm">
                Entre em contato via WhatsApp (+244 923 577 164) ou email (info@nova-geo.com).
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📋 Formulário</h3>
              <p className="text-gray-600 text-sm">
                Preencha o formulário de inscrição online e escolha sua modalidade de ensino.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">💳 Pagamento</h3>
              <p className="text-gray-600 text-sm">
                Efetue o pagamento via transferência bancária (Banco BIC) no valor de 350.000 Kz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🎓 Início</h3>
              <p className="text-gray-600 text-sm">
                Receba confirmação e comece suas aulas com MSc. Zongo Armando.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">🚀 Desenvolva sua Carreira em Geociências</h2>
          <p className="text-green-100 mb-8 max-w-3xl mx-auto text-lg">
            Junte-se aos profissionais angolanos que confiam na NovaGeo para sua formação. 
            Cursos práticos, orientados para o mercado, com certificação reconhecida.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="font-bold mb-2">Formador Experiente</h3>
              <p className="text-sm text-green-100">MSc. Zongo Armando com experiência prática</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-bold mb-2">Softwares Profissionais</h3>
              <p className="text-sm text-green-100">Petrel, Python, QGIS e mais</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-bold mb-2">Certificação</h3>
              <p className="text-sm text-green-100">Certificado reconhecido na indústria</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/+244923577164?text=Olá! Gostaria de saber mais sobre os cursos da NovaGeo.', '_blank')}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              📱 WhatsApp: +244 923 577 164
            </button>
            <button 
              onClick={() => handleEmailContact(services[0])}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              📧 info@nova-geo.com
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-green-200 text-sm mb-2">
              🏢 Kilamba, W24, p. 114, Luanda • 🆔 NIF: 5002077655 • 🌐 www.nova-geo.com
            </p>
            <p className="text-green-200 text-sm">
              💰 Valor fixo: 350.000 Kz • 📚 Todos os cursos • 📜 Certificação incluída
            </p>
          </div>
        </section>

        {/* Rodapé */}
        <section className="text-center bg-gray-100 rounded-xl p-6">
          <p className="text-gray-600 mb-2">
            <strong>NovaGeo - Prestação de Serviços (SU), LDA</strong>
          </p>
          <p className="text-sm text-gray-500">
            Formação, Consultoria e Prestação de Serviços em Geociências • NIF: 5002077655
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Formador: MSc. Zongo Armando • Geofísico e Geólogo
          </p>
        </section>
      </div>
    </div>
  );
};

export default NovaGeoServices;