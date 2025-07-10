import React, { useState } from 'react';

interface AnalyticsData {
  period: string;
  projects: number;
  revenue: number;
  clients: number;
  teamMembers: number;
}

interface CountryMetrics {
  country: string;
  flag: string;
  projects: number;
  revenue: number;
  clients: number;
  teamSize: number;
  avgProgress: number;
  topSector: string;
}

interface SectorPerformance {
  sector: string;
  icon: string;
  projects: number;
  revenue: number;
  avgProgress: number;
  growth: number;
  status: 'growing' | 'stable' | 'declining';
}

interface ProjectHealth {
  id: number;
  name: string;
  country: string;
  progress: number;
  budget: number;
  spent: number;
  health: 'excellent' | 'good' | 'warning' | 'critical';
  daysRemaining: number;
}

const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [selectedCountry, setSelectedCountry] = useState('all');

  // Dados de analytics por período
  const analyticsData: AnalyticsData[] = [
    { period: '2024-01', projects: 2, revenue: 320000, clients: 12, teamMembers: 8 },
    { period: '2024-02', projects: 3, revenue: 485000, clients: 15, teamMembers: 10 },
    { period: '2024-03', projects: 4, revenue: 620000, clients: 18, teamMembers: 12 },
    { period: '2024-04', projects: 5, revenue: 780000, clients: 22, teamMembers: 14 },
    { period: '2024-05', projects: 6, revenue: 950000, clients: 25, teamMembers: 16 },
    { period: '2024-06', projects: 7, revenue: 1150000, clients: 28, teamMembers: 18 }
  ];

  // Métricas por país
  const countryMetrics: CountryMetrics[] = [
    {
      country: 'Angola',
      flag: '🇦🇴',
      projects: 5,
      revenue: 890000,
      clients: 18,
      teamSize: 12,
      avgProgress: 68,
      topSector: 'Petróleo e Gás'
    },
    {
      country: 'Namíbia',
      flag: '🇳🇦',
      projects: 2,
      revenue: 185000,
      clients: 6,
      teamSize: 4,
      avgProgress: 52,
      topSector: 'Mineração'
    },
    {
      country: 'África do Sul',
      flag: '🇿🇦',
      projects: 1,
      revenue: 75000,
      clients: 4,
      teamSize: 2,
      avgProgress: 85,
      topSector: 'Pesquisa Acadêmica'
    }
  ];

  // Performance por setor
  const sectorPerformance: SectorPerformance[] = [
    {
      sector: 'Petróleo e Gás',
      icon: '⛽',
      projects: 4,
      revenue: 720000,
      avgProgress: 72,
      growth: 28.5,
      status: 'growing'
    },
    {
      sector: 'Mineração',
      icon: '⛏️',
      projects: 2,
      revenue: 280000,
      avgProgress: 58,
      growth: 15.8,
      status: 'growing'
    },
    {
      sector: 'Geofísica',
      icon: '🌍',
      projects: 1,
      revenue: 95000,
      avgProgress: 45,
      growth: 12.3,
      status: 'stable'
    },
    {
      sector: 'Pesquisa Acadêmica',
      icon: '🎓',
      projects: 1,
      revenue: 55000,
      avgProgress: 85,
      growth: 8.7,
      status: 'stable'
    },
    {
      sector: 'Consultoria Ambiental',
      icon: '🌱',
      projects: 0,
      revenue: 0,
      avgProgress: 0,
      growth: 0,
      status: 'stable'
    },
    {
      sector: 'Geologia Estrutural',
      icon: '🗻',
      projects: 0,
      revenue: 0,
      avgProgress: 0,
      growth: 0,
      status: 'stable'
    }
  ];

  // Saúde dos projetos
  const projectHealth: ProjectHealth[] = [
    {
      id: 1,
      name: 'Interpretação Sísmica 3D - Bloco 15',
      country: 'Angola',
      progress: 65,
      budget: 850000,
      spent: 553000,
      health: 'good',
      daysRemaining: 87
    },
    {
      id: 2,
      name: 'Modelagem Estática - Campo Girassol',
      country: 'Angola',
      progress: 90,
      budget: 1200000,
      spent: 1080000,
      health: 'excellent',
      daysRemaining: 15
    },
    {
      id: 3,
      name: 'Análise Petrofísica - Poços 7A/7B',
      country: 'Angola',
      progress: 45,
      budget: 650000,
      spent: 292500,
      health: 'excellent',
      daysRemaining: 142
    },
    {
      id: 4,
      name: 'Prospecção Mineral - Lunda Norte',
      country: 'Angola',
      progress: 30,
      budget: 950000,
      spent: 285000,
      health: 'warning',
      daysRemaining: 198
    },
    {
      id: 5,
      name: 'Levantamento Geofísico - Erongo',
      country: 'Namíbia',
      progress: 20,
      budget: 380000,
      spent: 76000,
      health: 'critical',
      daysRemaining: 245
    },
    {
      id: 6,
      name: 'Automação Python - ISPTEC',
      country: 'Angola',
      progress: 100,
      budget: 120000,
      spent: 118000,
      health: 'excellent',
      daysRemaining: 0
    }
  ];

  const periods = [
    { value: '3months', label: 'Últimos 3 meses' },
    { value: '6months', label: 'Últimos 6 meses' },
    { value: '1year', label: 'Último ano' },
    { value: 'all', label: 'Todo período' }
  ];

  const metrics = [
    { value: 'revenue', label: 'Receita', icon: '💰', color: 'text-green-600' },
    { value: 'projects', label: 'Projetos', icon: '🛢️', color: 'text-blue-600' },
    { value: 'clients', label: 'Clientes', icon: '🤝', color: 'text-purple-600' },
    { value: 'team', label: 'Equipe', icon: '👥', color: 'text-indigo-600' }
  ];

  const getCountryFlag = (country: string) => {
    const flags = {
      'Angola': '🇦🇴',
      'Namíbia': '🇳🇦',
      'África do Sul': '🇿🇦',
      'Congo (RDC)': '🇨🇩',
      'Zâmbia': '🇿🇲'
    };
    return flags[country as keyof typeof flags] || '🌍';
  };

  const getHealthColor = (health: string) => {
    const colors = {
      'excellent': 'bg-green-100 text-green-800',
      'good': 'bg-blue-100 text-blue-800',
      'warning': 'bg-yellow-100 text-yellow-800',
      'critical': 'bg-red-100 text-red-800'
    };
    return colors[health as keyof typeof colors];
  };

  const getHealthIcon = (health: string) => {
    const icons = {
      'excellent': '🎯',
      'good': '✅',
      'warning': '⚠️',
      'critical': '🚨'
    };
    return icons[health as keyof typeof icons];
  };

  const getGrowthColor = (growth: number) => {
    if (growth > 10) return 'text-green-600';
    if (growth > 0) return 'text-blue-600';
    if (growth > -5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGrowthIcon = (growth: number) => {
    if (growth > 0) return '📈';
    if (growth < 0) return '📉';
    return '➡️';
  };

  const calculateKPIs = () => {
    const totalRevenue = countryMetrics.reduce((sum, country) => sum + country.revenue, 0);
    const totalProjects = countryMetrics.reduce((sum, country) => sum + country.projects, 0);
    const totalClients = countryMetrics.reduce((sum, country) => sum + country.clients, 0);
    const totalTeam = countryMetrics.reduce((sum, country) => sum + country.teamSize, 0);
    const avgProgress = Math.round(countryMetrics.reduce((sum, country) => sum + country.avgProgress, 0) / countryMetrics.length);
    
    return {
      totalRevenue,
      totalProjects,
      totalClients,
      totalTeam,
      avgProgress,
      revenuePerProject: Math.round(totalRevenue / totalProjects),
      revenuePerClient: Math.round(totalRevenue / totalClients),
      projectsPerCountry: Math.round(totalProjects / countryMetrics.length),
      teamEfficiency: Math.round(totalRevenue / totalTeam)
    };
  };

  const kpis = calculateKPIs();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & KPIs Geológicos</h1>
          <p className="text-gray-600">Métricas detalhadas e insights da performance NovaGeo - Consultoria em Geociências</p>
        </div>
        
        <div className="flex gap-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white"
          >
            {periods.map((period) => (
              <option key={period.value} value={period.value}>
                {period.label}
              </option>
            ))}
          </select>
          
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Exportar Relatório
          </button>
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Receita Total</p>
              <p className="text-2xl font-bold text-green-600">
                ${kpis.totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <span className="text-2xl">💰</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-600">📈 +35.8%</span>
            <span className="text-gray-500 ml-1">vs período anterior</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ROI Médio</p>
              <p className="text-2xl font-bold text-blue-600">
                {((kpis.totalRevenue - (kpis.totalRevenue * 0.65)) / (kpis.totalRevenue * 0.65) * 100).toFixed(1)}%
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <span className="text-2xl">📊</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-blue-600">Performance excepcional</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Eficiência da Equipe</p>
              <p className="text-2xl font-bold text-purple-600">
                ${kpis.teamEfficiency.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">Receita por geólogo</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Progresso Médio</p>
              <p className="text-2xl font-bold text-indigo-600">{kpis.avgProgress}%</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-full">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full" 
                style={{ width: `${kpis.avgProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico de Tendências */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Tendências de Performance Geológica</h2>
          
          <div className="flex gap-2">
            {metrics.map((metric) => (
              <button
                key={metric.value}
                onClick={() => setSelectedMetric(metric.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedMetric === metric.value
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-1">{metric.icon}</span>
                {metric.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gráfico Simulado */}
        <div className="h-64 bg-gray-50 rounded-lg p-6 flex items-end justify-between gap-2">
          {analyticsData.map((data, index) => {
            const getValue = () => {
              switch (selectedMetric) {
                case 'revenue': return data.revenue / 15000;
                case 'projects': return data.projects * 12;
                case 'clients': return data.clients * 4;
                case 'team': return data.teamMembers * 6;
                default: return data.revenue / 15000;
              }
            };
            
            const height = getValue();
            const maxHeight = 200;
            const percentage = (height / maxHeight) * 100;
            
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <div 
                  className="bg-gradient-to-t from-green-600 to-green-400 rounded-t transition-all duration-500 hover:scale-105 w-8"
                  style={{ height: `${Math.min(percentage, 100)}%` }}
                ></div>
                <span className="text-xs text-gray-600 transform -rotate-45">
                  {new Date(data.period).toLocaleDateString('pt-BR', { month: 'short' })}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span>Crescimento Exponencial</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🛢️</span>
            <span>Setor Petrolífero em Alta</span>
          </div>
        </div>
      </div>

      {/* Métricas por País */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance por País</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {countryMetrics.map((country) => (
            <div key={country.country} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{country.flag}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{country.country}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{country.projects}</div>
                  <div className="text-xs text-gray-600">Projetos</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Receita</p>
                    <p className="font-semibold text-green-600">${country.revenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Clientes</p>
                    <p className="font-semibold text-blue-600">{country.clients}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Equipe</p>
                    <p className="font-semibold text-purple-600">{country.teamSize}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Setor Top</p>
                    <p className="font-semibold text-indigo-600">{country.topSector}</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progresso Médio</span>
                    <span className="text-sm font-semibold">{country.avgProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${country.avgProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Receita/Projeto</span>
                    <span className="font-medium">${(country.revenue / country.projects).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance por Setor */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance por Setor Geológico</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Setor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Projetos</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Receita</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Progresso</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Crescimento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sectorPerformance.map((sector) => (
                <tr key={sector.sector} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{sector.icon}</span>
                      <span className="font-medium text-gray-900">{sector.sector}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{sector.projects}</td>
                  <td className="px-6 py-4 text-sm font-medium text-green-600">
                    ${sector.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${sector.avgProgress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{sector.avgProgress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <span>{getGrowthIcon(sector.growth)}</span>
                      <span className={`text-sm font-medium ${getGrowthColor(sector.growth)}`}>
                        {sector.growth > 0 ? '+' : ''}{sector.growth.toFixed(1)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      sector.status === 'growing' ? 'bg-green-100 text-green-800' :
                      sector.status === 'stable' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {sector.status === 'growing' ? 'Crescendo' :
                       sector.status === 'stable' ? 'Estável' : 'Declínio'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Saúde dos Projetos */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Saúde dos Projetos Geológicos</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectHealth.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getCountryFlag(project.country)}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.country}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${getHealthColor(project.health)}`}>
                  {getHealthIcon(project.health)}
                  {project.health === 'excellent' ? 'Excelente' :
                   project.health === 'good' ? 'Bom' :
                   project.health === 'warning' ? 'Atenção' : 'Crítico'}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progresso</span>
                    <span className="text-sm font-semibold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        project.progress >= 80 ? 'bg-green-500' :
                        project.progress >= 50 ? 'bg-blue-500' :
                        project.progress >= 25 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Orçamento</p>
                    <p className="font-semibold text-green-600">${project.budget.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Gasto</p>
                    <p className="font-semibold text-red-600">${project.spent.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <span className="text-sm text-gray-600">
                    {project.daysRemaining > 0 ? `${project.daysRemaining} dias restantes` : 'Concluído'}
                  </span>
                  <span className="text-sm font-medium">
                    {((project.spent / project.budget) * 100).toFixed(1)}% usado
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights e Recomendações */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Insights */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Insights Estratégicos</h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">💡</span>
                <div>
                  <h3 className="font-semibold text-green-800">Oportunidade de Crescimento</h3>
                  <p className="text-sm text-green-700 mt-1">
                    O setor de Petróleo e Gás apresenta 28.5% de crescimento. Angola lidera com 89% da receita total.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-yellow-600 text-xl">⚠️</span>
                <div>
                  <h3 className="font-semibold text-yellow-800">Atenção Necessária</h3>
                  <p className="text-sm text-yellow-700 mt-1">
                    Projeto de Levantamento Geofísico na Namíbia está com apenas 20% de progresso. Recomenda-se revisão.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">📊</span>
                <div>
                  <h3 className="font-semibold text-blue-800">Performance Excepcional</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Projetos de modelagem Petrel apresentam 95% de taxa de sucesso. Referência no mercado angolano.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-purple-800">Meta Superada</h3>
                  <p className="text-sm text-purple-700 mt-1">
                    ROI médio de 53.8% supera a meta de 45%. Excelente performance em projetos sísmicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recomendações */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recomendações Estratégicas</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🚀 Expandir Operações</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Aumentar projetos sísmicos em Angola (ROI atual: 65%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Explorar setor de Mineração na Namíbia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Expandir cursos Python para geociências</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">⚡ Otimizar Recursos</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Contratar mais especialistas em Petrel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Implementar metodologia ágil em projetos de campo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Criar laboratório de análise em Luanda</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🎯 Metas para Q4</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Atingir $1.5M em receita</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Manter ROI acima de 50%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Expandir para Congo (RDC)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Comparativo Regional */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Comparativo Regional SADC - Geociências</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Market Share */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Market Share por País</h3>
            <div className="space-y-4">
              {countryMetrics.map((country, index) => {
                const totalRevenue = countryMetrics.reduce((sum, c) => sum + c.revenue, 0);
                const marketShare = ((country.revenue / totalRevenue) * 100);
                
                return (
                  <div key={country.country}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span className="font-medium">{country.country}</span>
                      </div>
                      <span className="font-semibold">{marketShare.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${
                          index === 0 ? 'bg-green-500' :
                          index === 1 ? 'bg-blue-500' : 'bg-purple-500'
                        }`}
                        style={{ width: `${marketShare}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Eficiência Operacional */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Eficiência Operacional</h3>
            <div className="space-y-4">
              {countryMetrics.map((country) => {
                const efficiency = Math.round(country.revenue / country.teamSize);
                const maxEfficiency = Math.max(...countryMetrics.map(c => c.revenue / c.teamSize));
                const efficiencyPercentage = (efficiency / maxEfficiency) * 100;
                
                return (
                  <div key={country.country}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span className="font-medium">{country.country}</span>
                      </div>
                      <span className="font-semibold">${efficiency.toLocaleString()}/geólogo</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
                        style={{ width: `${efficiencyPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Forecast e Projeções */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Projeções para Q4 2024</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Projeção de Receita */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="font-semibold text-green-800 mb-2">Receita Projetada</h3>
              <div className="text-2xl font-bold text-green-700 mb-1">$1.8M</div>
              <div className="text-sm text-green-600">+56.5% vs Q3</div>
              <div className="mt-3 w-full bg-green-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '89%' }}></div>
              </div>
              <div className="text-xs text-green-600 mt-1">89% da meta anual</div>
            </div>
          </div>

          {/* Projeção de Projetos */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <div className="text-center">
              <div className="text-3xl mb-2">🛢️</div>
              <h3 className="font-semibold text-blue-800 mb-2">Novos Projetos</h3>
              <div className="text-2xl font-bold text-blue-700 mb-1">4-5</div>
              <div className="text-sm text-blue-600">+67% vs Q3</div>
              <div className="mt-3 w-full bg-blue-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <div className="text-xs text-blue-600 mt-1">Meta: 5 projetos</div>
            </div>
          </div>

          {/* Projeção de Clientes */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-semibold text-purple-800 mb-2">Novos Clientes</h3>
              <div className="text-2xl font-bold text-purple-700 mb-1">6-8</div>
              <div className="text-sm text-purple-600">+25% vs Q3</div>
              <div className="mt-3 w-full bg-purple-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <div className="text-xs text-purple-600 mt-1">Meta: 8 clientes</div>
            </div>
          </div>

          {/* Projeção de ROI */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
            <div className="text-center">
              <div className="text-3xl mb-2">💎</div>
              <h3 className="font-semibold text-orange-800 mb-2">ROI Projetado</h3>
              <div className="text-2xl font-bold text-orange-700 mb-1">55-60%</div>
              <div className="text-sm text-orange-600">Acima da meta</div>
              <div className="mt-3 w-full bg-orange-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
              <div className="text-xs text-orange-600 mt-1">Meta: 50%</div>
            </div>
          </div>
        </div>

        {/* Fatores de Risco */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-3">⚠️ Fatores de Risco para Q4</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-red-700 mb-2">Riscos Identificados</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Atraso no projeto de Prospecção Mineral (198 dias restantes)</li>
                <li>• Flutuação no preço do petróleo</li>
                <li>• Escassez de especialistas em Petrel</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-700 mb-2">Oportunidades</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Expansão para Congo (RDC)</li>
                <li>• Novos contratos com Chevron Angola</li>
                <li>• Demanda crescente por cursos Python</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Ações Recomendadas */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-xl p-8 text-white">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">🎯 Ações Estratégicas Recomendadas</h2>
          <p className="text-green-100 max-w-3xl mx-auto">
            Com base na análise dos dados, estas são as ações prioritárias para maximizar 
            o crescimento e performance da NovaGeo na região SADC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Curto Prazo */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span>⚡</span>
              Curto Prazo (30 dias)
            </h3>
            <ul className="space-y-2 text-sm text-green-100">
              <li>• Reunião urgente - Projeto Lunda Norte</li>
              <li>• Contratar 2 geofísicos especialistas</li>
              <li>• Lançar novos cursos Petrel</li>
              <li>• Revisar cronograma de projetos</li>
              <li>• Implementar dashboard de monitoramento</li>
            </ul>
          </div>

          {/* Médio Prazo */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span>📈</span>
              Médio Prazo (90 dias)
            </h3>
            <ul className="space-y-2 text-sm text-green-100">
              <li>• Expandir para setor de Mineração</li>
              <li>• Abrir escritório em Kinshasa</li>
              <li>• Criar programa de Field Trips</li>
              <li>• Parceria com universidades locais</li>
              <li>• Lançar cursos online certificados</li>
            </ul>
          </div>

          {/* Longo Prazo */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span>🚀</span>
              Longo Prazo (6 meses)
            </h3>
            <ul className="space-y-2 text-sm text-green-100">
              <li>• Expandir para Moçambique e Zâmbia</li>
              <li>• Criar centro de excelência em geociências</li>
              <li>• Implementar IA em interpretação sísmica</li>
              <li>• Estabelecer laboratório geológico</li>
              <li>• Meta: $2M receita anual</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            📊 Gerar Relatório Executivo Completo
          </button>
        </div>
      </div>

      {/* Footer com Metadados */}
      <div className="bg-gray-100 rounded-xl p-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-900">Última Atualização</p>
            <p>{new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR')}</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Fonte dos Dados</p>
            <p>Sistema Integrado NovaGeo</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Período Analisado</p>
            <p>Janeiro - Junho 2024</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Próxima Atualização</p>
            <p>Automática em 24h</p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="text-xs text-gray-500">
            © 2024 NovaGeo Analytics • Desenvolvido por MSc. Zongo Armando
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;