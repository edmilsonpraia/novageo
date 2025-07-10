import React, { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';

interface Opportunity {
  id: number;
  title: string;
  country: string;
  sector: string;
  type: string;
  organization: string;
  deadline: string;
  description: string;
  budget?: number;
  requirements: string[];
  status: string;
  image: string;
  featured: boolean;
}

interface UserProfile {
  name: string;
  country: string;
  sector: string;
  organization: string;
  verified: boolean;
  avatar: string;
}

interface CourseRegistrationForm {
  nomeCompleto: string;
  email: string;
  whatsapp: string;
  residencia: string;
  grauAcademico: string;
  grauAcademicoOutro: string;
  cursoAtual: string;
  cursoAtualOutro: string;
  instituicao: string;
  modalidade: string;
  modalidadeOutro: string;
  comoConheceu: string;
  comoConheceuOutro: string;
  beneficioCarreira: string;
  concordaTermos: boolean;
}

const UserDashboardMobile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('opportunities');
  const [selectedSector, setSelectedSector] = useState('all');
  const [showServicesModal, setShowServicesModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [selectedServiceForRequest, setSelectedServiceForRequest] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Novo estado para o formulário de inscrição no curso
  const [showCourseRegistration, setShowCourseRegistration] = useState(false);
  const [selectedCourseForRegistration, setSelectedCourseForRegistration] = useState<Opportunity | null>(null);
  const [courseRegistrationData, setCourseRegistrationData] = useState<CourseRegistrationForm>({
    nomeCompleto: '',
    email: '',
    whatsapp: '',
    residencia: '',
    grauAcademico: '',
    grauAcademicoOutro: '',
    cursoAtual: '',
    cursoAtualOutro: '',
    instituicao: '',
    modalidade: '',
    modalidadeOutro: '',
    comoConheceu: '',
    comoConheceuOutro: '',
    beneficioCarreira: '',
    concordaTermos: false
  });

  const { t } = useTranslation();

  // Perfil do usuário
  const userProfile: UserProfile = {
    name: 'Eng. Carlos Silva',
    country: 'Angola',
    sector: 'Geofísica',
    organization: 'NovaGeo Prestação de Serviços',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  };

  // Oportunidades baseadas nos cursos reais da NovaGeo
  const opportunities: Opportunity[] = [
    {
      id: 1,
      title: 'Interpretação de Dados Sísmicos',
      country: 'Angola',
      sector: 'Geofísica Sísmica',
      type: 'course',
      organization: 'NovaGeo - Zongo Armando',
      deadline: '2025-02-28',
      description: 'Curso completo de interpretação sísmica 2D e 3D, incluindo fundamentos de aquisição, processamento e análise de DHI.',
      budget: 350000,
      requirements: ['Licenciatura em Geociências', 'Conhecimentos básicos de geofísica', 'Computador Core i3+'],
      status: 'Inscrições Abertas',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f7?w=400&h=200&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Petrel - Modelagem Estática',
      country: 'Angola',
      sector: 'Modelagem Geológica',
      type: 'course',
      organization: 'NovaGeo - Software Schlumberger',
      deadline: '2025-03-15',
      description: 'Domínio completo do Petrel para modelagem estática, correlação de poços e cálculo de volumes de hidrocarbonetos.',
      budget: 350000,
      requirements: ['Experiência em geologia', 'Conhecimento de petrofísica', 'Acesso ao software Petrel'],
      status: 'Vagas Limitadas',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'Programação Python para Geociências',
      country: 'Angola',
      sector: 'Python & Data Science',
      type: 'course',
      organization: 'NovaGeo - Tecnologia Aplicada',
      deadline: '2025-03-30',
      description: 'Python aplicado a geociências: importação de diagrafias, dados sísmicos, manipulação com Pandas e análise estatística.',
      budget: 350000,
      requirements: ['Conhecimentos básicos de programação', 'Experiência em geociências', 'Boa conexão à internet'],
      status: 'Online Disponível',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop',
      featured: true
    },
    {
      id: 4,
      title: 'Geologia do Petróleo',
      country: 'Angola',
      sector: 'Petroleum Geology',
      type: 'course',
      organization: 'NovaGeo - Sistema Petrolífero',
      deadline: '2025-04-10',
      description: 'Fundamentos completos: sistema petrolífero, rochas geradoras, reservatório, migração e armadilhas das bacias angolanas.',
      budget: 350000,
      requirements: ['Formação em geociências', 'Conhecimento de geologia geral', 'Interesse em petróleo'],
      status: 'Turma Iniciante',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=200&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Interpretação de Dados Petrofísicos',
      country: 'Angola',
      sector: 'Petrofísica & Well Logs',
      type: 'course',
      organization: 'NovaGeo - Análise de Poços',
      deadline: '2025-04-25',
      description: 'Interpretação de diagrafias, cálculo de porosidade, saturação de água, volume de argila e identificação de reservatórios.',
      budget: 350000,
      requirements: ['Conhecimento de geologia', 'Experiência com poços', 'Fundamentos de petrofísica'],
      status: 'Inscrições Abertas',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Geologia de Campo - Miradouro da Lua',
      country: 'Angola',
      sector: 'Field Geology',
      type: 'fieldtrip',
      organization: 'NovaGeo - Field Trip Prático',
      deadline: '2025-05-15',
      description: 'Análise estratigráfica e estrutural no campo com visita técnica ao Miradouro da Lua para observação de formações geológicas.',
      budget: 350000,
      requirements: ['Equipamentos de campo', 'Disposição para trabalho outdoor', 'Conhecimentos básicos de geologia'],
      status: 'Experiência Única',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=200&fit=crop',
      featured: true
    }
  ];

  const countries = ['Angola'];
  const sectors = ['Geofísica Sísmica', 'Modelagem Geológica', 'Python & Data Science', 'Petroleum Geology', 'Petrofísica & Well Logs', 'Field Geology'];

  const filteredOpportunities = opportunities.filter(opp => {
    if (selectedSector !== 'all' && opp.sector !== selectedSector) return false;
    return true;
  });

  const featuredOpportunities = opportunities.filter(opp => opp.featured);

  const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
      'Angola': '🇦🇴'
    };
    return flags[country] || '🌍';
  };

  const getSectorIcon = (sector: string) => {
    const icons: { [key: string]: string } = {
      'Geofísica Sísmica': '📊',
      'Modelagem Geológica': '🪨',
      'Python & Data Science': '🐍',
      'Petroleum Geology': '🛢️',
      'Petrofísica & Well Logs': '📈',
      'Field Geology': '🏔️'
    };
    return icons[sector] || '🌍';
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      'course': '📚',
      'fieldtrip': '🎒'
    };
    return icons[type as keyof typeof icons] || '📋';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'course': 'bg-green-100 text-green-800',
      'fieldtrip': 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      'course': 'Curso',
      'fieldtrip': 'Campo'
    };
    return labels[type as keyof typeof labels] || type;
  };

  // Função para abrir modal de serviços
  const openServicesModal = (service: string) => {
    setSelectedService(service);
    setShowServicesModal(true);
  };

  // Função para abrir formulário de solicitação
  const openRequestForm = (serviceType: string) => {
    setSelectedServiceForRequest(serviceType);
    setShowRequestForm(true);
    setShowServicesModal(false);
  };

  // Função para fechar formulário e resetar dados
  const closeRequestForm = () => {
    setShowRequestForm(false);
    setSelectedServiceForRequest('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  // Função para lidar com mudanças no formulário
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para enviar solicitação
  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados
    console.log('Solicitação enviada:', { 
      service: selectedServiceForRequest, 
      ...formData 
    });
    
    // Mostrar mensagem de sucesso (você pode personalizar isso)
    alert(t('form.requestSent') || 'Solicitação enviada com sucesso!');
    closeRequestForm();
  };

  // Novas funções para o formulário de inscrição no curso
  const openCourseRegistration = (course: Opportunity) => {
    setSelectedCourseForRegistration(course);
    setShowCourseRegistration(true);
  };

  const closeCourseRegistration = () => {
    setShowCourseRegistration(false);
    setSelectedCourseForRegistration(null);
    setCourseRegistrationData({
      nomeCompleto: '',
      email: '',
      whatsapp: '',
      residencia: '',
      grauAcademico: '',
      grauAcademicoOutro: '',
      cursoAtual: '',
      cursoAtualOutro: '',
      instituicao: '',
      modalidade: '',
      modalidadeOutro: '',
      comoConheceu: '',
      comoConheceuOutro: '',
      beneficioCarreira: '',
      concordaTermos: false
    });
  };

  const handleCourseRegistrationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setCourseRegistrationData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleCourseRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!courseRegistrationData.nomeCompleto || !courseRegistrationData.email || !courseRegistrationData.whatsapp || 
        !courseRegistrationData.residencia || !courseRegistrationData.grauAcademico || !courseRegistrationData.cursoAtual ||
        !courseRegistrationData.modalidade || !courseRegistrationData.comoConheceu || !courseRegistrationData.beneficioCarreira ||
        !courseRegistrationData.concordaTermos) {
      alert('Por favor, preencha todos os campos obrigatórios e aceite os termos e condições.');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados
    console.log('Inscrição no curso enviada:', {
      curso: selectedCourseForRegistration?.title,
      ...courseRegistrationData
    });
    
    // Mostrar mensagem de sucesso
    alert('Inscrição enviada com sucesso! Aguarde nosso contato para instruções sobre o processo de seleção e pagamento.');
    closeCourseRegistration();
  };

  // Estatísticas baseadas nos cursos reais da NovaGeo
  const userStats = [
    { 
      icon: '📊', 
      count: 5, 
      label: 'Interpretação Sísmica', 
      color: 'text-green-600',
      onClick: () => openServicesModal('seismic')
    },
    { 
      icon: '🪨', 
      count: 8, 
      label: 'Petrel & Modelagem', 
      color: 'text-orange-600',
      onClick: () => openServicesModal('petrel')
    },
    { 
      icon: '🐍', 
      count: 12, 
      label: 'Python Geosciências', 
      color: 'text-green-600',
      onClick: () => openServicesModal('python')
    },
    { 
      icon: '🛢️', 
      count: 6, 
      label: 'Geologia Petróleo', 
      color: 'text-orange-600',
      onClick: () => openServicesModal('geology')
    },
    { 
      icon: '📈', 
      count: 4, 
      label: 'Petrofísica', 
      color: 'text-green-600',
      onClick: () => openServicesModal('petrophysics')
    },
    { 
      icon: '🎒', 
      count: 2, 
      label: 'Geologia Campo', 
      color: 'text-orange-600',
      onClick: () => openServicesModal('fieldwork')
    },
    { 
      icon: '🎓', 
      count: 45, 
      label: 'Formandos', 
      color: 'text-green-600',
      onClick: () => {} // Sem modal para estatísticas
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da NovaGeo */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
          <div className="flex-1">
            <h1 className="text-lg font-bold">Bem-vindo, {userProfile.name}! 👋</h1>
            <p className="text-sm text-green-100 opacity-90">{userProfile.organization}</p>
          </div>
          {userProfile.verified && (
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Botões de Ação Mobile */}
        <div className="flex gap-2">
          <button className="flex-1 bg-white bg-opacity-20 text-white py-2 px-4 rounded-lg text-sm font-medium backdrop-blur-sm">
            ✏️ Editar Perfil
          </button>
          <button className="bg-white bg-opacity-20 text-white py-2 px-4 rounded-lg text-sm font-medium backdrop-blur-sm">
            🔔
          </button>
        </div>
      </div>

      {/* Estatísticas em Grid Mobile */}
      <div className="p-4 -mt-4">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="grid grid-cols-2 gap-3">
            {userStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={stat.onClick}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className={`text-xl font-bold ${stat.color} mb-1`}>{stat.count}</div>
                <div className="text-xs text-gray-600 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Serviços da NovaGeo */}
      {showServicesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header do Modal */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌍</span>
                  <h2 className="text-lg font-bold">NOVAGEO</h2>
                </div>
                <button
                  onClick={() => setShowServicesModal(false)}
                  className="text-white hover:text-green-200 p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-green-100 text-sm mt-1">Formação, Consultoria e Prestação de Serviços em Geociências</p>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-4">
              <div className="text-center mb-4">
                <p className="text-gray-700 font-medium">🎓 Cursos Especializados em Geociências</p>
              </div>

              {/* Conteúdo Específico por Setor */}
              {selectedService === 'seismic' && (
                <div className="space-y-4 mb-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-green-900 flex items-center justify-center gap-2">
                      <span className="text-2xl">📊</span>
                      Interpretação de Dados Sísmicos
                    </h3>
                    <p className="text-gray-600 text-sm">Curso completo de sísmica 2D e 3D</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">📈</span>
                          <div>
                            <p className="font-medium text-green-900">Aquisição de Dados</p>
                            <p className="text-xs text-green-700">Tipos e métodos sísmicos</p>
                          </div>
                        </div>
                        <button 
                          className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Aquisição de Dados Sísmicos')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🔍</span>
                          <div>
                            <p className="font-medium text-green-900">Interpretação Estrutural</p>
                            <p className="text-xs text-green-700">Mapeamento e correlação</p>
                          </div>
                        </div>
                        <button 
                          className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Interpretação Estrutural')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🛢️</span>
                          <div>
                            <p className="font-medium text-green-900">Análise DHI</p>
                            <p className="text-xs text-green-700">Indicadores diretos de hidrocarbonetos</p>
                          </div>
                        </div>
                        <button 
                          className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Análise DHI')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedService === 'petrel' && (
                <div className="space-y-4 mb-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-orange-900 flex items-center justify-center gap-2">
                      <span className="text-2xl">🪨</span>
                      Petrel - Modelagem Estática
                    </h3>
                    <p className="text-gray-600 text-sm">Software Schlumberger para modelagem</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">⚙️</span>
                          <div>
                            <p className="font-medium text-orange-900">Interface Petrel</p>
                            <p className="text-xs text-orange-700">Introdução ao software</p>
                          </div>
                        </div>
                        <button 
                          className="bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Interface Petrel')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🗺️</span>
                          <div>
                            <p className="font-medium text-orange-900">Modelagem 3D</p>
                            <p className="text-xs text-orange-700">Construção de modelos geológicos</p>
                          </div>
                        </div>
                        <button 
                          className="bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Modelagem 3D')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">📊</span>
                          <div>
                            <p className="font-medium text-orange-900">Cálculo de Volumes</p>
                            <p className="text-xs text-orange-700">Volumes de hidrocarbonetos</p>
                          </div>
                        </div>
                        <button 
                          className="bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Cálculo de Volumes')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedService === 'python' && (
                <div className="space-y-4 mb-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-green-900 flex items-center justify-center gap-2">
                      <span className="text-2xl">🐍</span>
                      Python para Geociências
                    </h3>
                    <p className="text-gray-600 text-sm">Programação aplicada às geociências</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🐍</span>
                          <div>
                            <p className="font-medium text-green-900">Fundamentos Python</p>
                            <p className="text-xs text-green-700">Linguagem de programação</p>
                          </div>
                        </div>
                        <button 
                          className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Fundamentos Python')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">📊</span>
                          <div>
                            <p className="font-medium text-green-900">Dados com Pandas</p>
                            <p className="text-xs text-green-700">Manipulação e análise</p>
                          </div>
                        </div>
                        <button 
                          className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Dados com Pandas')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">📈</span>
                          <div>
                            <p className="font-medium text-green-900">Visualização Diagrafias</p>
                            <p className="text-xs text-green-700">Importação e gráficos</p>
                          </div>
                        </div>
                        <button 
                          className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Visualização Diagrafias')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedService === 'geology' && (
                <div className="space-y-4 mb-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-orange-900 flex items-center justify-center gap-2">
                      <span className="text-2xl">🛢️</span>
                      Geologia do Petróleo
                    </h3>
                    <p className="text-gray-600 text-sm">Sistema petrolífero completo</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">⚡</span>
                          <div>
                            <p className="font-medium text-orange-900">Sistema Petrolífero</p>
                            <p className="text-xs text-orange-700">Rochas geradoras e reservatório</p>
                          </div>
                        </div>
                        <button 
                          className="bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Sistema Petrolífero')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🗺️</span>
                          <div>
                            <p className="font-medium text-orange-900">Bacias Angolanas</p>
                            <p className="text-xs text-orange-700">Evolução tectônica</p>
                          </div>
                        </div>
                        <button 
                          className="bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Bacias Angolanas')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🔍</span>
                          <div>
                            <p className="font-medium text-orange-900">Exploração Petrolífera</p>
                            <p className="text-xs text-orange-700">Etapas das operações</p>
                          </div>
                        </div>
                        <button 
                          className="bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Exploração Petrolífera')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedService === 'petrophysics' && (
                <div className="space-y-4 mb-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-green-900 flex items-center justify-center gap-2">
                      <span className="text-2xl">📈</span>
                      Interpretação Petrofísica
                    </h3>
                    <p className="text-gray-600 text-sm">Diagrafias e análise de poços</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">📊</span>
                          <div>
                            <p className="font-medium text-green-900">Ferramentas Wireline</p>
                            <p className="text-xs text-green-700">Gamma Ray, Density, Neutron</p>
                          </div>
                        </div>
                        <button 
                          className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Ferramentas Wireline')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">💧</span>
                          <div>
                            <p className="font-medium text-green-900">Saturação de Água</p>
                            <p className="text-xs text-green-700">Cálculos de Sw e porosidade</p>
                          </div>
                        </div>
                        <button 
                          className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Saturação de Água')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🪨</span>
                          <div>
                            <p className="font-medium text-green-900">Volume de Argila</p>
                            <p className="text-xs text-green-700">Identificação de reservatórios</p>
                          </div>
                        </div>
                        <button 
                          className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Volume de Argila')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedService === 'fieldwork' && (
                <div className="space-y-4 mb-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-orange-900 flex items-center justify-center gap-2">
                      <span className="text-2xl">🎒</span>
                      Geologia de Campo
                    </h3>
                    <p className="text-gray-600 text-sm">Field Trip - Miradouro da Lua</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🏔️</span>
                          <div>
                            <p className="font-medium text-orange-900">Análise Estratigráfica</p>
                            <p className="text-xs text-orange-700">Observação de camadas</p>
                          </div>
                        </div>
                        <button 
                          className="bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Análise Estratigráfica')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">⚡</span>
                          <div>
                            <p className="font-medium text-orange-900">Análise Estrutural</p>
                            <p className="text-xs text-orange-700">Falhas e dobras</p>
                          </div>
                        </div>
                        <button 
                          className="bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Análise Estrutural')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">📸</span>
                          <div>
                            <p className="font-medium text-orange-900">Miradouro da Lua</p>
                            <p className="text-xs text-orange-700">Formações geológicas únicas</p>
                          </div>
                        </div>
                        <button 
                          className="bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                          onClick={() => openRequestForm('Miradouro da Lua')}
                        >
                          Inscrever
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Localização Real da NovaGeo */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-center mb-3">📍 Nossa Localização</h3>
                
                {/* Angola - Sede Real */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🇦🇴</span>
                    <div>
                      <h4 className="font-bold text-green-900">NOVAGEO</h4>
                      <p className="text-xs text-green-700">PRESTAÇÃO DE SERVIÇOS (SU), LDA</p>
                    </div>
                  </div>
                  <div className="text-xs text-green-800 space-y-1 mb-4">
                    <p><strong>NIF: 5002077655</strong></p>
                    <p>Kilamba, W24, p. 114</p>
                    <p>Luanda - Angola</p>
                    <p>📧 info@nova-geo.com</p>
                    <p>📱 +244 923 577 164</p>
                    <p>👨‍🏫 Formador: Zongo Armando</p>
                  </div>
                  
                  {/* Redes Sociais */}
                  <div className="border-t border-green-200 pt-3">
                    <p className="text-xs font-medium text-green-900 mb-2">Contate-nos:</p>
                    <div className="flex gap-2 flex-wrap">
                      <a 
                        href="https://wa.me/+244923577164"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-green-500 text-white px-2 py-1.5 rounded-md text-xs font-medium hover:bg-green-600 transition-colors"
                      >
                        <span className="text-sm">📱</span>
                        <span className="text-xs">WhatsApp</span>
                      </a>
                      <button 
                        onClick={() => {
                          // Link das redes sociais
                          console.log('Instagram - @novageo');
                        }}
                        className="flex items-center gap-1 bg-orange-600 text-white px-2 py-1.5 rounded-md text-xs font-medium hover:bg-orange-700 transition-colors"
                      >
                        <span className="text-sm">📷</span>
                        <span className="text-xs">Instagram</span>
                      </button>
                      <button 
                        onClick={() => {
                          // Website da empresa
                          console.log('Website - www.nova-geo.com');
                        }}
                        className="flex items-center gap-1 bg-gray-600 text-white px-2 py-1.5 rounded-md text-xs font-medium hover:bg-gray-700 transition-colors"
                      >
                        <span className="text-sm">🌐</span>
                        <span className="text-xs">Website</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão Fechar */}
              <button
                onClick={() => setShowServicesModal(false)}
                className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-medium"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Formulário de Solicitação */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header do Modal */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📝</span>
                  <h2 className="text-lg font-bold">Inscrição no Curso</h2>
                </div>
                <button
                  onClick={closeRequestForm}
                  className="text-white hover:text-green-200 p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-green-100 text-sm mt-1">Curso: {selectedServiceForRequest}</p>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmitRequest} className="p-4">
              <div className="space-y-4">
                {/* Campo Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                {/* Campo Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Digite seu email"
                  />
                </div>

                {/* Campo Telefone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+244 923 577 164"
                  />
                </div>

                {/* Campo Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem Adicional
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Informações adicionais sobre sua inscrição, experiência prévia, objetivos, etc..."
                  />
                </div>

                {/* Informação do Curso */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-lg">🎓</span>
                    <div>
                      <p className="font-medium">Curso selecionado:</p>
                      <p className="text-green-600 font-semibold">{selectedServiceForRequest}</p>
                      <p className="text-xs text-gray-500 mt-1">Valor: 350.000,00 Kz • Formador: Zongo Armando</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeRequestForm}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium text-sm"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium text-sm"
                >
                  📤 Enviar Inscrição
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Inscrição no Curso - NOVO FORMULÁRIO BASEADO NO GOOGLE FORM */}
      {showCourseRegistration && selectedCourseForRegistration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header do Modal */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎓</span>
                  <h2 className="text-lg font-bold">Inscrição no Curso</h2>
                </div>
                <button
                  onClick={closeCourseRegistration}
                  className="text-white hover:text-green-200 p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-green-100 text-sm mt-1">{selectedCourseForRegistration.title}</p>
              <p className="text-green-100 text-xs">NOVAGEO - PRESTAÇÃO DE SERVIÇOS (SU), LDA</p>
            </div>

            {/* Informações da Organização */}
            <div className="p-4 bg-green-50 border-b border-green-200">
              <div className="text-xs text-green-800 space-y-1">
                <p><strong>ORGANIZAÇÃO:</strong> NOVAGEO - PRESTAÇÃO DE SERVIÇOS (SU), LDA</p>
                <p><strong>NIF:</strong> 5002077655</p>
                <p><strong>CHAMADAS/WHATSAPP:</strong> +244 923 577 164</p>
                <p><strong>E-MAIL:</strong> info@nova-geo.com</p>
                <p><strong>LOCALIZAÇÃO:</strong> Centralidade do Kilamba, W24, Porta 114</p>
              </div>
            </div>

            {/* Formulário de Inscrição */}
            <form onSubmit={handleCourseRegistrationSubmit} className="p-4">
              <div className="space-y-4">
                {/* 1. Nome completo */}
                <div>
                  <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-700 mb-1">
                    1. Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nomeCompleto"
                    name="nomeCompleto"
                    value={courseRegistrationData.nomeCompleto}
                    onChange={handleCourseRegistrationChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                {/* 2. E-mail */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    2. E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={courseRegistrationData.email}
                    onChange={handleCourseRegistrationChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Digite seu e-mail"
                  />
                </div>

                {/* 3. WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                    3. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={courseRegistrationData.whatsapp}
                    onChange={handleCourseRegistrationChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+244 923 577 164"
                  />
                </div>

                {/* 4. Residência atual/Localização */}
                <div>
                  <label htmlFor="residencia" className="block text-sm font-medium text-gray-700 mb-1">
                    4. Residência atual/Localização *
                  </label>
                  <input
                    type="text"
                    id="residencia"
                    name="residencia"
                    value={courseRegistrationData.residencia}
                    onChange={handleCourseRegistrationChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Digite sua localização atual"
                  />
                </div>

                {/* 5. Grau académico */}
                <div>
                  <label htmlFor="grauAcademico" className="block text-sm font-medium text-gray-700 mb-1">
                    5. Grau académico *
                  </label>
                  <select
                    id="grauAcademico"
                    name="grauAcademico"
                    value={courseRegistrationData.grauAcademico}
                    onChange={handleCourseRegistrationChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione seu grau académico</option>
                    <option value="Bacharelato">Bacharelato</option>
                    <option value="Licenciatura">Licenciatura</option>
                    <option value="Mestrado">Mestrado</option>
                    <option value="Doutoramento">Doutoramento</option>
                    <option value="Pós-Doutoramento">Pós-Doutoramento</option>
                    <option value="Mestrado Integrado">Mestrado Integrado</option>
                    <option value="Pós-Graduação">Pós-Graduação</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {courseRegistrationData.grauAcademico === 'Outro' && (
                    <input
                      type="text"
                      name="grauAcademicoOutro"
                      value={courseRegistrationData.grauAcademicoOutro}
                      onChange={handleCourseRegistrationChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mt-2"
                      placeholder="Especifique outro grau académico"
                    />
                  )}
                </div>

                {/* 6. Curso atual ou último curso concluído */}
                <div>
                  <label htmlFor="cursoAtual" className="block text-sm font-medium text-gray-700 mb-1">
                    6. Curso atual ou último curso concluído *
                  </label>
                  <select
                    id="cursoAtual"
                    name="cursoAtual"
                    value={courseRegistrationData.cursoAtual}
                    onChange={handleCourseRegistrationChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione seu curso</option>
                    <option value="Geologia/Geociências">Geologia/Geociências</option>
                    <option value="Engenharia Geológica">Engenharia Geológica</option>
                    <option value="Engenharia Geotécnica">Engenharia Geotécnica</option>
                    <option value="Engenharia de Minas">Engenharia de Minas</option>
                    <option value="Engenharia do Ambiente">Engenharia do Ambiente</option>
                    <option value="Ciências do Ambiente">Ciências do Ambiente</option>
                    <option value="Geofísica">Geofísica</option>
                    <option value="Engenharia do petróleo">Engenharia do petróleo</option>
                    <option value="Engenharia geográfica">Engenharia geográfica</option>
                    <option value="Topografia">Topografia</option>
                    <option value="Construção civil">Construção civil</option>
                    <option value="Arquitetura">Arquitetura</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {courseRegistrationData.cursoAtual === 'Outro' && (
                    <input
                      type="text"
                      name="cursoAtualOutro"
                      value={courseRegistrationData.cursoAtualOutro}
                      onChange={handleCourseRegistrationChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mt-2"
                      placeholder="Especifique outro curso"
                    />
                  )}
                </div>

                {/* 7. Instituição */}
                <div>
                  <label htmlFor="instituicao" className="block text-sm font-medium text-gray-700 mb-1">
                    7. Instituição (se aplicável)
                  </label>
                  <input
                    type="text"
                    id="instituicao"
                    name="instituicao"
                    value={courseRegistrationData.instituicao}
                    onChange={handleCourseRegistrationChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Nome da instituição"
                  />
                </div>

                {/* 8. Modalidade */}
                <div>
                  <label htmlFor="modalidade" className="block text-sm font-medium text-gray-700 mb-1">
                    8. Modalidade *
                  </label>
                  <select
                    id="modalidade"
                    name="modalidade"
                    value={courseRegistrationData.modalidade}
                    onChange={handleCourseRegistrationChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione a modalidade</option>
                    <option value="Em turma">Em turma</option>
                    <option value="Individual online">Individual online</option>
                    <option value="Individual nas instalações da NOVAGEO">Individual nas instalações da NOVAGEO</option>
                    <option value="Individual ao domicílio">Individual ao domicílio</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {courseRegistrationData.modalidade === 'Outro' && (
                    <input
                      type="text"
                      name="modalidadeOutro"
                      value={courseRegistrationData.modalidadeOutro}
                      onChange={handleCourseRegistrationChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mt-2"
                      placeholder="Especifique outra modalidade"
                    />
                  )}
                </div>

                {/* 9. Como tomou conhecimento do curso */}
                <div>
                  <label htmlFor="comoConheceu" className="block text-sm font-medium text-gray-700 mb-1">
                    9. Como tomou conhecimento do curso? *
                  </label>
                  <select
                    id="comoConheceu"
                    name="comoConheceu"
                    value={courseRegistrationData.comoConheceu}
                    onChange={handleCourseRegistrationChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Indicação de amigos">Indicação de amigos</option>
                    <option value="E-mail">E-mail</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {courseRegistrationData.comoConheceu === 'Outro' && (
                    <input
                      type="text"
                      name="comoConheceuOutro"
                      value={courseRegistrationData.comoConheceuOutro}
                      onChange={handleCourseRegistrationChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mt-2"
                      placeholder="Especifique como conheceu"
                    />
                  )}
                </div>

                {/* 10. Como você acredita que essa formação irá beneficiar sua carreira/projetos */}
                <div>
                  <label htmlFor="beneficioCarreira" className="block text-sm font-medium text-gray-700 mb-1">
                    10. Como você acredita que essa formação irá beneficiar sua carreira/projetos? *
                  </label>
                  <textarea
                    id="beneficioCarreira"
                    name="beneficioCarreira"
                    value={courseRegistrationData.beneficioCarreira}
                    onChange={handleCourseRegistrationChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Descreva como esta formação irá beneficiar sua carreira ou projetos..."
                  />
                </div>

                {/* 11. Concordância com termos */}
                <div>
                  <label className="flex items-start gap-2 text-sm">
                    <input
                      type="checkbox"
                      name="concordaTermos"
                      checked={courseRegistrationData.concordaTermos}
                      onChange={handleCourseRegistrationChange}
                      required
                      className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-700">
                      11. Li e concordo com os termos e condições da formação em Geociências *
                    </span>
                  </label>
                </div>

                {/* Informações do Curso */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-lg">🎓</span>
                    <div>
                      <p className="font-medium">Curso selecionado:</p>
                      <p className="text-green-600 font-semibold">{selectedCourseForRegistration.title}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Valor: {selectedCourseForRegistration.budget?.toLocaleString('pt-AO')} Kz • Formador: Zongo Armando
                      </p>
                      <p className="text-xs text-gray-500">
                        Prazo: {new Date(selectedCourseForRegistration.deadline).toLocaleDateString('pt-AO')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notas importantes */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <h4 className="font-medium text-yellow-800 mb-2">📋 Notas Importantes:</h4>
                  <div className="text-xs text-yellow-700 space-y-1">
                    <p>• Após enviar esta inscrição, aguarde nosso contato para instruções sobre seleção e pagamento.</p>
                    <p>• A formação é paga em duas prestações: 50% antes do início e 50% antes do segundo módulo.</p>
                    <p>• Ex-formandos têm 10% de desconto nas próximas formações.</p>
                    <p>• Em caso de desistência, não haverá reembolso.</p>
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeCourseRegistration}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium text-sm"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium text-sm"
                >
                  📤 Enviar Inscrição
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Navegação por Abas Mobile */}
      <div className="bg-white border-t border-gray-200 sticky top-0 z-40">
        <div className="flex overflow-x-auto">
          {[
            { id: 'opportunities', name: 'Cursos', icon: '📚' },
            { id: 'applications', name: 'Inscrições', icon: '📋' },
            { id: 'network', name: 'Rede', icon: '🌍' },
            { id: 'resources', name: 'Recursos', icon: '📖' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-max py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-green-500 text-green-600 bg-green-50'
                  : 'border-transparent text-gray-500'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg">{tab.icon}</span>
                <span className="text-xs">{tab.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo das Abas */}
      <div className="px-4 py-4">
        {/* Aba de Cursos */}
        {activeTab === 'opportunities' && (
          <div className="space-y-4">
            {/* Filtros Mobile */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🇦🇴 Cursos de Geociências em Angola</h3>
              <div className="grid grid-cols-1 gap-3 mb-4">
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                >
                  <option value="all">📊 Todas as Áreas de Geociências</option>
                  {sectors.map(sector => (
                    <option key={sector} value={sector}>
                      {getSectorIcon(sector)} {sector}
                    </option>
                  ))}
                </select>
              </div>

              {/* Lista de Cursos */}
              <div className="space-y-3">
                {filteredOpportunities.map((opportunity) => (
                  <div key={opportunity.id} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex gap-3">
                      <img 
                        src={opportunity.image}
                        alt={opportunity.title}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">{opportunity.title}</h3>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{opportunity.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            🇦🇴 NovaGeo Angola
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {getSectorIcon(opportunity.sector)} {opportunity.sector}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            💰 {(opportunity.budget! / 1000).toFixed(0)}K Kz
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => openCourseRegistration(opportunity)}
                            className="flex-1 bg-green-600 text-white py-1 px-3 rounded text-xs font-medium"
                          >
                            📚 Inscrever-se
                          </button>
                          <button className="bg-gray-100 text-gray-700 py-1 px-3 rounded text-xs">
                            💾
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Aba de Inscrições */}
        {activeTab === 'applications' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>📋</span>
                Minhas Inscrições
              </h2>
              
              <div className="space-y-3">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1581094271901-8022df4466f7?w=60&h=60&fit=crop"
                      alt="Sísmica"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900">Interpretação de Dados Sísmicos</h3>
                      <p className="text-xs text-gray-600">🇦🇴 NovaGeo - Zongo Armando</p>
                      <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium mt-1">
                        <span>⏳</span>
                        Aguardando Pagamento
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=60&h=60&fit=crop"
                      alt="Python"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900">Python para Geociências</h3>
                      <p className="text-xs text-gray-600">🇦🇴 NovaGeo - Online</p>
                      <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mt-1">
                        <span>✅</span>
                        Confirmado
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=60&h=60&fit=crop"
                      alt="Campo"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900">Geologia de Campo</h3>
                      <p className="text-xs text-gray-600">🇦🇴 Miradouro da Lua</p>
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mt-1">
                        <span>📅</span>
                        Agendado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Aba de Rede */}
        {activeTab === 'network' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🇦🇴</span>
                Rede de Geólogos Angola
              </h2>
              
              <div className="grid grid-cols-1 gap-3 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-2">🇦🇴</div>
                  <div className="text-lg font-bold text-green-600">156</div>
                  <div className="text-xs text-gray-600">Formandos Angola</div>
                </div>
              </div>

              {/* Conexões */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">👥 Rede de Contatos</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b332c3c5?w=40&h=40&fit=crop&crop=face"
                      alt="Dra. Ana Silva"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">Dra. Ana Silva</h4>
                      <p className="text-xs text-gray-600">📊 Geofísica • 🇦🇴 Sonangol</p>
                    </div>
                    <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs">
                      Conectar
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                      alt="Eng. Carlos Santos"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">Eng. Carlos Santos</h4>
                      <p className="text-xs text-gray-600">🛢️ Petroleum Eng. • 🇦🇴 Chevron Angola</p>
                    </div>
                    <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs">
                      Conectar
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                      alt="Geól. Maria Fernandes"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">Geól. Maria Fernandes</h4>
                      <p className="text-xs text-gray-600">🪨 Geologia • 🇦🇴 Total Angola</p>
                    </div>
                    <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs">
                      Conectar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Aba de Recursos */}
        {activeTab === 'resources' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>📖</span>
                Recursos Educacionais
              </h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📊</div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900 mb-2">Manual de Interpretação Sísmica</h3>
                      <p className="text-xs text-gray-600 mb-3">Guia completo para interpretação de dados sísmicos 2D e 3D</p>
                      <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium">
                        📥 Download PDF
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🐍</div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900 mb-2">Scripts Python Geociências</h3>
                      <p className="text-xs text-gray-600 mb-3">Códigos práticos para análise de dados geológicos</p>
                      <button className="w-full bg-orange-600 text-white py-2 rounded-lg text-sm font-medium">
                        💻 Acessar GitHub
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🪨</div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900 mb-2">Petrel Tutorial Avançado</h3>
                      <p className="text-xs text-gray-600 mb-3">Modelagem estática e dinâmica no Petrel</p>
                      <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium">
                        🎯 Ver Tutoriais
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vídeos */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">🎥 Vídeo Aulas</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <img 
                      src="https://images.unsplash.com/photo-1581094271901-8022df4466f7?w=300&h=120&fit=crop"
                      alt="Aula Sísmica"
                      className="w-full h-20 object-cover rounded-lg mb-2"
                    />
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Fundamentos de Interpretação Sísmica</h4>
                    <p className="text-xs text-gray-600 mb-2">Zongo Armando • 45min • Básico</p>
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg text-xs font-medium">
                      ▶️ Assistir Aula
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 mx-4 mb-4 rounded-xl p-6 text-white text-center">
        <h2 className="text-lg font-bold mb-3">🇦🇴 Desenvolva sua Carreira em Geociências</h2>
        <p className="text-sm text-green-100 mb-4">Junte-se aos profissionais angolanos que confiam na NovaGeo para sua formação em geociências</p>
        <div className="space-y-2">
          <button className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold text-sm">
            📚 Explorar Cursos em Angola
          </button>
          <button className="w-full border border-white text-white py-3 rounded-lg font-semibold text-sm">
            📞 Falar com Zongo Armando
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardMobile;