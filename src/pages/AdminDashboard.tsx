import React, { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';

interface Project {
  id: number;
  name: string;
  client: string;
  country: string;
  sector: string;
  status: string;
  priority: string;
  budget: number;
  spent: number;
  startDate: string;
  endDate: string;
  progress: number;
  team: string[];
  description: string;
}

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

interface Activity {
  id: number;
  type: string;
  title: string;
  description: string;
  time: string;
  user: string;
  country: string;
}

const AdminDashboardNovaGeo: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useTranslation();

  // Projetos de formação e consultoria em geociências
  const projects: Project[] = [
    {
      id: 1,
      name: 'Curso Interpretação de Dados Sísmicos',
      client: 'Sonangol E&P',
      country: 'Angola',
      sector: 'Geofísica',
      status: 'Ativo',
      priority: 'Alto',
      budget: 850000,
      spent: 450000,
      startDate: '2024-01-15',
      endDate: '2024-08-15',
      progress: 65,
      team: ['MSc. Zongo Armando', 'Eng. Geofísica Ana Silva'],
      description: 'Formação especializada em interpretação de dados sísmicos 2D e 3D para técnicos da Sonangol, incluindo módulos de aquisição, processamento e interpretação sísmica.'
    },
    {
      id: 2,
      name: 'Formação Petrel - Modelagem Estática',
      client: 'Chevron Angola',
      country: 'Angola',
      sector: 'Modelagem de Reservatórios',
      status: 'Ativo',
      priority: 'Alto',
      budget: 1200000,
      spent: 650000,
      startDate: '2024-02-01',
      endDate: '2024-09-01',
      progress: 55,
      team: ['MSc. Zongo Armando', 'Geólogo Pedro Santos'],
      description: 'Curso avançado de Petrel focado em modelagem estática de reservatórios, incluindo importação de dados, construção de modelos geológicos e cálculo de volumes.'
    },
    {
      id: 3,
      name: 'Programa Python para Geociências',
      client: 'ISPTEC',
      country: 'Angola',
      sector: 'Programação Técnica',
      status: 'Concluído',
      priority: 'Médio',
      budget: 450000,
      spent: 445000,
      startDate: '2023-09-01',
      endDate: '2024-01-01',
      progress: 100,
      team: ['MSc. Zongo Armando', 'Dr. Carlos Mbala'],
      description: 'Curso de programação Python aplicada às geociências, incluindo manipulação de dados sísmicos, visualização de diagrafias e análise estatística.'
    },
    {
      id: 4,
      name: 'Consultoria Geologia do Petróleo',
      client: 'Total Energies Angola',
      country: 'Angola',
      sector: 'Geologia',
      status: 'Ativo',
      priority: 'Alto',
      budget: 950000,
      spent: 380000,
      startDate: '2024-03-15',
      endDate: '2024-10-15',
      progress: 40,
      team: ['MSc. Zongo Armando', 'Geóloga Maria Fernandes'],
      description: 'Consultoria especializada em sistema petrolífero das bacias angolanas, incluindo análise de rochas geradoras, reservatório e migração de hidrocarbonetos.'
    },
    {
      id: 5,
      name: 'Formação Interpretação Petrofísica',
      client: 'ENI Angola',
      country: 'Angola',
      sector: 'Petrofísica',
      status: 'Planejamento',
      priority: 'Médio',
      budget: 750000,
      spent: 75000,
      startDate: '2024-06-01',
      endDate: '2024-12-01',
      progress: 10,
      team: ['MSc. Zongo Armando', 'Petrofísico João Katito'],
      description: 'Curso de interpretação de dados petrofísicos e diagrafias, incluindo cálculo de porosidade, saturação de água e volume de argila.'
    },
    {
      id: 6,
      name: 'Field Trip Miradouro da Lua',
      client: 'Universidade Agostinho Neto',
      country: 'Angola',
      sector: 'Geologia de Campo',
      status: 'Ativo',
      priority: 'Baixo',
      budget: 280000,
      spent: 180000,
      startDate: '2024-04-01',
      endDate: '2024-07-01',
      progress: 75,
      team: ['MSc. Zongo Armando', 'Prof. Ana Rodrigues'],
      description: 'Curso prático de geologia de campo no Miradouro da Lua, focado em análise estratigráfica e estrutural de formações geológicas.'
    }
  ];

  // Ações rápidas para navegação
  const quickActions: QuickAction[] = [
    {
      id: 'create-course',
      title: 'Novo Curso',
      description: 'Criar nova formação em geociências',
      icon: '🎓',
      link: '/admin/create-course',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      id: 'manage-clients',
      title: 'Gerir Clientes',
      description: 'Empresas de petróleo e gás',
      icon: '🏢',
      link: '/admin/clients',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      id: 'view-analytics',
      title: 'Analytics de Formação',
      description: 'KPIs e métricas dos cursos',
      icon: '📊',
      link: '/admin/analytics',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'team-management',
      title: 'Equipa Técnica',
      description: 'Geólogos e formadores',
      icon: '👥',
      link: '/admin/team',
      color: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      id: 'finance-management',
      title: 'Financeiro',
      description: 'Gestão financeira',
      icon: '💰',
      link: '/admin/finance',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'certificates',
      title: 'Certificados',
      description: 'Emissão de certificados',
      icon: '📜',
      link: '/admin/certificates',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  // Atividades recentes
  const recentActivities: Activity[] = [
    {
      id: 1,
      type: 'course_completed',
      title: 'Curso Concluído',
      description: 'Programa Python para Geociências finalizado com sucesso',
      time: 'Há 2 horas',
      user: 'MSc. Zongo Armando',
      country: 'Angola'
    },
    {
      id: 2,
      type: 'client_added',
      title: 'Novo Cliente',
      description: 'Total Energies Angola adicionado como cliente',
      time: 'Há 1 dia',
      user: 'Administração',
      country: 'Angola'
    },
    {
      id: 3,
      type: 'certificate_issued',
      title: 'Certificado Emitido',
      description: '15 certificados emitidos para curso de Python',
      time: 'Há 2 dias',
      user: 'Sistema',
      country: 'Angola'
    },
    {
      id: 4,
      type: 'budget_updated',
      title: 'Orçamento Atualizado',
      description: 'Formação Petrel teve orçamento ajustado',
      time: 'Há 3 dias',
      user: 'MSc. Zongo Armando',
      country: 'Angola'
    },
    {
      id: 5,
      type: 'field_trip',
      title: 'Field Trip Realizado',
      description: 'Field trip ao Miradouro da Lua executado',
      time: 'Há 5 dias',
      user: 'Prof. Ana Rodrigues',
      country: 'Angola'
    }
  ];

  const sectors = ['Geofísica', 'Geologia', 'Petrofísica', 'Modelagem de Reservatórios', 'Programação Técnica', 'Geologia de Campo'];

  // Estatísticas da NovaGeo
  const stats = {
    totalProjects: projects.length,
    activeProjects: projects.filter(p => p.status === 'Ativo').length,
    completedProjects: projects.filter(p => p.status === 'Concluído').length,
    totalClients: 25,
    totalStudents: 156,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
    totalSpent: projects.reduce((sum, p) => sum + p.spent, 0),
    avgProgress: Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length),
    certificatesIssued: 89,
    courseHours: 420
  };

  const getSectorIcon = (sector: string) => {
    const icons: { [key: string]: string } = {
      'Geofísica': '📊',
      'Geologia': '🪨',
      'Petrofísica': '🔬',
      'Modelagem de Reservatórios': '🧊',
      'Programação Técnica': '💻',
      'Geologia de Campo': '🌄'
    };
    return icons[sector] || '🎓';
  };

  const getActivityIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      'course_completed': '🎓',
      'client_added': '🏢',
      'certificate_issued': '📜',
      'budget_updated': '💰',
      'field_trip': '🌄'
    };
    return icons[type] || '📋';
  };

  const getActivityColor = (type: string) => {
    const colors = {
      'course_completed': 'bg-green-100 text-green-600',
      'client_added': 'bg-orange-100 text-orange-600',
      'certificate_issued': 'bg-blue-100 text-blue-600',
      'budget_updated': 'bg-yellow-100 text-yellow-600',
      'field_trip': 'bg-purple-100 text-purple-600'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  const handleQuickAction = (action: QuickAction) => {
    console.log(`Navegando para: ${action.link}`);
  };

  const handleCreateCourse = () => {
    console.log('Navegando para criar novo curso');
  };

  const handleViewAllProjects = () => {
    console.log('Navegando para todos os projetos');
  };

  return (
    <div className="space-y-6">
      {/* Header Principal */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard NovaGeo</h1>
          <p className="text-gray-600">Formação, Consultoria e Prestação de Serviços em Geociências</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={handleCreateCourse}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nova Formação
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Relatório Técnico
          </button>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cursos de Formação</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalProjects}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <span className="text-2xl">🎓</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-600">📊 Geofísica • 🪨 Geologia • 🔬 Petrofísica</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Formações Ativas</p>
              <p className="text-2xl font-bold text-orange-600">{stats.activeProjects}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <svg className="h-4 w-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-green-600">Progresso: {stats.avgProgress}%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Formandos Certificados</p>
              <p className="text-2xl font-bold text-green-600">{stats.certificatesIssued}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <span className="text-2xl">📜</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-600">Taxa de aprovação: 95%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Clientes Ativos</p>
              <p className="text-2xl font-bold text-orange-600">{stats.totalClients}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <span className="text-2xl">🏢</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">Empresas de O&G</span>
          </div>
        </div>
      </div>

      {/* Ações Rápidas */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Ações Rápidas</h2>
          <span className="text-sm text-gray-500">Acesso direto às funcionalidades principais</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={() => handleQuickAction(action)}
              className={`${action.color} text-white p-6 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{action.icon}</div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{action.title}</h3>
                  <p className="text-sm opacity-90">{action.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Grid Principal - Projetos e Atividades */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Cursos por Sector */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Formações por Área Técnica</h2>
            <button 
              onClick={handleViewAllProjects}
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              Ver Todas →
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            {sectors.slice(0, 4).map((sector) => {
              const sectorProjects = projects.filter(p => p.sector === sector);
              const sectorBudget = sectorProjects.reduce((sum, p) => sum + p.budget, 0);
              const avgProgress = sectorProjects.length > 0 
                ? Math.round(sectorProjects.reduce((sum, p) => sum + p.progress, 0) / sectorProjects.length)
                : 0;
              
              return (
                <div key={sector} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-4xl mb-3">{getSectorIcon(sector)}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{sectorProjects.length}</div>
                  <div className="text-sm text-gray-600 mb-2">{sector}</div>
                  <div className="text-xs text-gray-500 mb-2">
                    {(sectorBudget / 1000).toFixed(0)}K Kz
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${avgProgress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{avgProgress}% progresso</div>
                </div>
              );
            })}
          </div>

          {/* Lista de Projetos Recentes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Formações Recentes</h3>
            <div className="space-y-3">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span>🇦🇴</span>
                      <span>{getSectorIcon(project.sector)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{project.name}</h4>
                      <p className="text-sm text-gray-600">{project.client}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{project.progress}%</span>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'Ativo' ? 'bg-orange-100 text-orange-800' :
                      project.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Atividades Recentes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Atividades Recentes</h2>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              Ver Todas →
            </button>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                  <span className="text-sm">{getActivityIcon(activity.type)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <span className="text-xs">🇦🇴</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{activity.description}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-400">{activity.time}</p>
                    <span className="text-xs text-gray-400">•</span>
                    <p className="text-xs text-gray-400">{activity.user}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status do Sistema */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900">Status do Sistema</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600">Operacional</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Plataforma LMS</span>
                <span className="text-green-600">Online</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Sistema de Certificados</span>
                <span className="text-green-600">Funcionando</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Backup</span>
                <span className="text-blue-600">Hoje</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes do Projeto */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProject.name}</h2>
                  <p className="text-gray-600">
                    🇦🇴 {selectedProject.country} • {getSectorIcon(selectedProject.sector)} {selectedProject.sector}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Informações do Curso</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Cliente:</span> 
                      <span className="font-medium">{selectedProject.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span> 
                      <span className={`font-medium ${
                        selectedProject.status === 'Ativo' ? 'text-orange-600' :
                        selectedProject.status === 'Concluído' ? 'text-green-600' :
                        'text-gray-600'
                      }`}>
                        {selectedProject.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Prioridade:</span> 
                      <span className={`font-medium ${
                        selectedProject.priority === 'Alto' ? 'text-red-600' :
                        selectedProject.priority === 'Médio' ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>
                        {selectedProject.priority}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Início:</span> 
                      <span className="font-medium">{new Date(selectedProject.startDate).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fim:</span> 
                      <span className="font-medium">{new Date(selectedProject.endDate).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Informações Financeiras</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Orçamento:</span> 
                      <span className="font-medium text-green-600">
                        {selectedProject.budget.toLocaleString('pt-AO')} Kz
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Gasto:</span> 
                      <span className="font-medium text-red-600">
                        {selectedProject.spent.toLocaleString('pt-AO')} Kz
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Restante:</span> 
                      <span className="font-medium text-blue-600">
                        {(selectedProject.budget - selectedProject.spent).toLocaleString('pt-AO')} Kz
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Progresso:</span> 
                      <span className="font-medium">{selectedProject.progress}%</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progresso do Curso</span>
                      <span className="font-medium">{selectedProject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${selectedProject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Descrição do Curso</h3>
                <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Equipa de Formação</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.team.map((member, index) => (
                    <div key={index} className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm border border-green-200">
                      <span>👤</span>
                      <span className="font-medium">{member}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Fechar
                </button>
                <button 
                  onClick={() => {
                    console.log('Editando curso:', selectedProject.id);
                    setSelectedProject(null);
                  }}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Editar Curso
                </button>
                <button 
                  onClick={() => {
                    console.log('Ver detalhes completos do curso:', selectedProject.id);
                    setSelectedProject(null);
                  }}
                  className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Seção de Estatísticas Detalhadas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Performance por Setor */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance por Área Técnica</h2>
          
          <div className="space-y-4">
            {sectors.map((sector) => {
              const sectorProjects = projects.filter(p => p.sector === sector);
              const sectorBudget = sectorProjects.reduce((sum, p) => sum + p.budget, 0);
              const avgProgress = sectorProjects.length > 0 
                ? Math.round(sectorProjects.reduce((sum, p) => sum + p.progress, 0) / sectorProjects.length)
                : 0;
              
              return (
                <div key={sector} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{getSectorIcon(sector)}</div>
                    <div>
                      <h3 className="font-medium text-gray-900">{sector}</h3>
                      <p className="text-sm text-gray-600">
                        {sectorProjects.length} curso{sectorProjects.length !== 1 ? 's' : ''} • 
                        {(sectorBudget / 1000).toFixed(0)}K Kz
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${avgProgress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12">{avgProgress}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resumo Financeiro */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Resumo Financeiro</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Receita Total</p>
                  <p className="text-2xl font-bold text-green-700">
                    {stats.totalBudget.toLocaleString('pt-AO')} Kz
                  </p>
                </div>
                <div className="text-3xl">💰</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border border-red-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-600">Custos Totais</p>
                  <p className="text-2xl font-bold text-red-700">
                    {stats.totalSpent.toLocaleString('pt-AO')} Kz
                  </p>
                </div>
                <div className="text-3xl">📉</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Lucro Atual</p>
                  <p className="text-2xl font-bold text-blue-700">
                    {(stats.totalBudget - stats.totalSpent).toLocaleString('pt-AO')} Kz
                  </p>
                </div>
                <div className="text-3xl">📈</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Margem de Lucro</p>
                  <p className="text-2xl font-bold text-orange-700">
                    {((stats.totalBudget - stats.totalSpent) / stats.totalBudget * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="text-3xl">📊</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer com Informações da Empresa */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-orange-600 rounded-xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold mb-4">NovaGeo - Prestação de Serviços (SU), LDA</h3>
            <p className="text-green-100 text-sm leading-relaxed">
              Formação, consultoria e prestação de serviços especializados em geociências. 
              Liderança de MSc. Zongo Armando, com experiência académica no ISPTEC.
            </p>
            <div className="mt-4 text-sm text-green-200">
              <p>🎓 {stats.certificatesIssued} Certificados Emitidos</p>
              <p>📚 {stats.courseHours} Horas de Formação</p>
              <p>🏢 {stats.totalClients} Clientes Ativos</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Cursos</h3>
            <div className="space-y-2 text-sm text-green-100">
              <div className="flex items-center gap-2">
                <span>📊</span>
                <span>Interpretação de Dados Sísmicos</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔬</span>
                <span>Petrofísica e Diagrafias</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🧊</span>
                <span>Petrel - Modelagem Estática</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💻</span>
                <span>Programação Python</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🗺️</span>
                <span>QGIS e ArcGIS</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-sm text-green-100">
              <p>📞 +244 923 577 164</p>
              <p>📧 info@nova-geo.com</p>
              <p>🌐 www.nova-geo.com</p>
              <p>📍 Kilamba, W24, p. 114</p>
              <p>🏦 Banco BIC - NIF: 5002077655</p>
            </div>
            <div className="mt-4 pt-4 border-t border-green-500">
              <p className="text-xs text-green-200">
                Formador: MSc. Zongo Armando
              </p>
              <p className="text-xs text-green-200">
                Geofísico e Geólogo Certificado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardNovaGeo;