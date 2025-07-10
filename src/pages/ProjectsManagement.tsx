import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Calendar, 
  Users, 
  MapPin, 
  TrendingUp,
  FileText,
  Settings,
  Eye,
  Edit3,
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle,
  Play
} from 'lucide-react';

// Interfaces TypeScript
interface Project {
  id: string;
  name: string;
  client: string;
  serviceType: ServiceType;
  status: ProjectStatus;
  progress: number;
  startDate: string;
  endDate: string;
  location: string;
  budget: number;
  team: TeamMember[];
  description: string;
  software: string[];
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

type ServiceType = 
  | 'interpretacao-sismica'
  | 'interpretacao-petrofisica'
  | 'petrel-modelagem'
  | 'geologia-petroleo'
  | 'operacoes-petroliferas'
  | 'python-geociences'
  | 'qgis-intro'
  | 'geologia-campo'
  | 'prospeccao-mineral'
  | 'analise-amostras';

type ProjectStatus = 'planejamento' | 'em-andamento' | 'revisao' | 'concluido' | 'pausado';

const ProjectsManagement: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | 'todos'>('todos');
  const [serviceFilter, setServiceFilter] = useState<ServiceType | 'todos'>('todos');
  const [isLoading, setIsLoading] = useState(true);

  // Dados mockados da NovaGeo
  const mockProjects: Project[] = [
    {
      id: '1',
      name: 'Interpretação Sísmica 3D - Bloco 15',
      client: 'Sonangol EP',
      serviceType: 'interpretacao-sismica',
      status: 'em-andamento',
      progress: 65,
      startDate: '2025-01-15',
      endDate: '2025-04-30',
      location: 'Offshore Angola',
      budget: 850000,
      team: [
        { id: '1', name: 'Zongo Armando', role: 'Geofísico Lead' },
        { id: '2', name: 'Maria Santos', role: 'Intérprete Sísmica' },
        { id: '3', name: 'João Silva', role: 'Analista Junior' }
      ],
      description: 'Interpretação estrutural e estratigráfica de dados sísmicos 3D',
      software: ['Petrel', 'Python']
    },
    {
      id: '2',
      name: 'Modelagem Estática - Campo Girassol',
      client: 'Total Energies',
      serviceType: 'petrel-modelagem',
      status: 'revisao',
      progress: 90,
      startDate: '2024-11-01',
      endDate: '2025-02-15',
      location: 'Bloco 17, Angola',
      budget: 1200000,
      team: [
        { id: '1', name: 'Zongo Armando', role: 'Consultor Sénior' },
        { id: '4', name: 'Ana Costa', role: 'Modeladora Petrel' }
      ],
      description: 'Construção de modelo geológico estático 3D usando Petrel',
      software: ['Petrel', 'QGIS']
    },
    {
      id: '3',
      name: 'Análise Petrofísica - Poços 7A/7B',
      client: 'Chevron Angola',
      serviceType: 'interpretacao-petrofisica',
      status: 'em-andamento',
      progress: 45,
      startDate: '2025-02-01',
      endDate: '2025-06-30',
      location: 'Cabinda, Angola',
      budget: 650000,
      team: [
        { id: '5', name: 'Pedro Mendes', role: 'Petrofísico' },
        { id: '6', name: 'Luísa Fernandes', role: 'Geóloga' }
      ],
      description: 'Interpretação de diagrafias e cálculo de propriedades petrofísicas',
      software: ['Petrel', 'Excel', 'Python']
    },
    {
      id: '4',
      name: 'Field Trip Geológico - Miradouro da Lua',
      client: 'Universidade Agostinho Neto',
      serviceType: 'geologia-campo',
      status: 'planejamento',
      progress: 15,
      startDate: '2025-03-15',
      endDate: '2025-03-17',
      location: 'Miradouro da Lua, Luanda',
      budget: 75000,
      team: [
        { id: '1', name: 'Zongo Armando', role: 'Geólogo Lead' },
        { id: '7', name: 'Carlos Baptista', role: 'Assistente de Campo' }
      ],
      description: 'Formação prática em geologia de campo - análise estratigráfica',
      software: ['QGIS', 'ArcGIS Pro']
    },
    {
      id: '5',
      name: 'Automação Python para Geocientistas',
      client: 'ISPTEC',
      serviceType: 'python-geociences',
      status: 'concluido',
      progress: 100,
      startDate: '2024-09-01',
      endDate: '2024-12-15',
      location: 'Luanda, Angola',
      budget: 120000,
      team: [
        { id: '1', name: 'Zongo Armando', role: 'Instrutor Python' }
      ],
      description: 'Curso de programação Python aplicada às geociências',
      software: ['Python', 'Jupyter']
    },
    {
      id: '6',
      name: 'Prospecção Mineral - Província de Lunda Norte',
      client: 'Endiama EP',
      serviceType: 'prospeccao-mineral',
      status: 'pausado',
      progress: 30,
      startDate: '2024-10-01',
      endDate: '2025-08-30',
      location: 'Lunda Norte, Angola',
      budget: 950000,
      team: [
        { id: '8', name: 'Roberto Nunes', role: 'Geólogo de Exploração' },
        { id: '9', name: 'Isabel Rodrigues', role: 'Geofísica' }
      ],
      description: 'Levantamento geofísico e análise mineral para exploração diamantífera',
      software: ['QGIS', 'ArcGIS Pro', 'Python']
    }
  ];

  // Service type mappings
  const serviceTypeLabels: Record<ServiceType, string> = {
    'interpretacao-sismica': 'Interpretação Sísmica',
    'interpretacao-petrofisica': 'Interpretação Petrofísica',
    'petrel-modelagem': 'Petrel - Modelagem',
    'geologia-petroleo': 'Geologia do Petróleo',
    'operacoes-petroliferas': 'Operações Petrolíferas',
    'python-geociences': 'Python Geociências',
    'qgis-intro': 'Introdução QGIS',
    'geologia-campo': 'Geologia de Campo',
    'prospeccao-mineral': 'Prospecção Mineral',
    'analise-amostras': 'Análise de Amostras'
  };

  const statusLabels: Record<ProjectStatus, string> = {
    'planejamento': 'Planejamento',
    'em-andamento': 'Em Andamento',
    'revisao': 'Em Revisão',
    'concluido': 'Concluído',
    'pausado': 'Pausado'
  };

  const statusColors: Record<ProjectStatus, string> = {
    'planejamento': 'bg-blue-100 text-blue-800',
    'em-andamento': 'bg-green-100 text-green-800',
    'revisao': 'bg-yellow-100 text-yellow-800',
    'concluido': 'bg-gray-100 text-gray-800',
    'pausado': 'bg-red-100 text-red-800'
  };

  const statusIcons: Record<ProjectStatus, React.ReactNode> = {
    'planejamento': <Clock className="w-4 h-4" />,
    'em-andamento': <Play className="w-4 h-4" />,
    'revisao': <AlertCircle className="w-4 h-4" />,
    'concluido': <CheckCircle className="w-4 h-4" />,
    'pausado': <AlertCircle className="w-4 h-4" />
  };

  // Simulação de carregamento
  useEffect(() => {
    setTimeout(() => {
      setProjects(mockProjects);
      setFilteredProjects(mockProjects);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filtros
  useEffect(() => {
    let filtered = projects;

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'todos') {
      filtered = filtered.filter(project => project.status === statusFilter);
    }

    if (serviceFilter !== 'todos') {
      filtered = filtered.filter(project => project.serviceType === serviceFilter);
    }

    setFilteredProjects(filtered);
  }, [searchTerm, statusFilter, serviceFilter, projects]);

  // Formatação de moeda
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 0
    }).format(amount);
  };

  // Estatísticas resumidas
  const getProjectStats = () => {
    const total = projects.length;
    const emAndamento = projects.filter(p => p.status === 'em-andamento').length;
    const concluidos = projects.filter(p => p.status === 'concluido').length;
    const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);

    return { total, emAndamento, concluidos, totalBudget };
  };

  const stats = getProjectStats();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando projetos NovaGeo...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gestão de Projetos</h1>
              <p className="text-gray-600 mt-1">NovaGeo - Consultoria em Geociências</p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              <Plus className="w-5 h-5" />
              Novo Projeto
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total de Projetos</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Em Andamento</p>
                <p className="text-2xl font-bold text-green-600">{stats.emAndamento}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div>
              <p className="text-gray-600 text-sm">Concluídos</p>
              <p className="text-2xl font-bold text-gray-900">{stats.concluidos}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div>
              <p className="text-gray-600 text-sm">Valor Total</p>
              <p className="text-lg font-bold text-gray-900">{formatCurrency(stats.totalBudget)}</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as ProjectStatus | 'todos')}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="todos">Todos os Status</option>
              {Object.entries(statusLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>

            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value as ServiceType | 'todos')}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="todos">Todos os Serviços</option>
              {Object.entries(serviceTypeLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>

            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5" />
              Filtros Avançados
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                      {project.name}
                    </h3>
                    <p className="text-green-600 font-medium text-sm">{project.client}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 p-1">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                {/* Service Type & Status */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {serviceTypeLabels[project.serviceType]}
                  </span>
                  <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${statusColors[project.status]}`}>
                    {statusIcons[project.status]}
                    {statusLabels[project.status]}
                  </span>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Progresso</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-3 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(project.startDate).toLocaleDateString('pt-BR')} - {new Date(project.endDate).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{project.team.length} membros</span>
                  </div>
                </div>

                {/* Budget */}
                <div className="mb-4">
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(project.budget)}</p>
                </div>

                {/* Software Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.software.slice(0, 3).map((software, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {software}
                    </span>
                  ))}
                  {project.software.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      +{project.software.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-4 border-t">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded text-sm flex items-center justify-center gap-1 transition-colors">
                    <Eye className="w-4 h-4" />
                    Visualizar
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-200 rounded transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 border border-gray-200 rounded transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum projeto encontrado</h3>
            <p className="text-gray-600 mb-4">Tente ajustar os filtros ou criar um novo projeto.</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2 transition-colors">
              <Plus className="w-5 h-5" />
              Criar Primeiro Projeto
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsManagement;