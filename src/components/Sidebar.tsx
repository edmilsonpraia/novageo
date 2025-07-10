import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { userRole } = useAuth();
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['main']);

  const toggleSubmenu = (menuId: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  // Menu items para administrador - APENAS FUNCIONALIDADES EXISTENTES
  const adminMenuItems = [
    {
      section: 'main',
      title: 'Principal',
      icon: '🛢️',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          icon: '📊',
          path: '/admin',
          badge: null
        },
        {
          id: 'projects',
          label: 'Projetos Sísmicos',
          icon: '🌍',
          badge: '8',
          submenu: [
            { label: 'Levantamentos Sísmicos', path: '/admin/seismic-surveys', icon: '📈', badge: '5' },
            { label: 'Novo Levantamento', path: '/admin/seismic-surveys/create', icon: '➕' },
            { label: 'Análise de Dados', path: '/admin/data-analysis', icon: '🔍', badge: '3' }
          ]
        },
        {
          id: 'wells',
          label: 'Poços & Perfuração',
          icon: '🏗️',
          badge: '12',
          submenu: [
            { label: 'Gestão de Poços', path: '/admin/wells', icon: '🏗️', badge: '12' },
            { label: 'Planejamento', path: '/admin/wells/planning', icon: '📋' },
            { label: 'Monitoramento', path: '/admin/wells/monitoring', icon: '📡', badge: '4' }
          ]
        },
        {
          id: 'geology',
          label: 'Geologia & Reservatórios',
          icon: '🪨',
          badge: '6',
          submenu: [
            { label: 'Estudos Geológicos', path: '/admin/geology', icon: '🪨', badge: '6' },
            { label: 'Modelagem 3D', path: '/admin/geology/modeling', icon: '🧊' },
            { label: 'Reservatórios', path: '/admin/reservoirs', icon: '🛢️', badge: '3' }
          ]
        },
        {
          id: 'clients',
          label: 'Clientes & Parcerias',
          icon: '🤝',
          badge: '24',
          path: '/admin/clients'
        },
        {
          id: 'team',
          label: 'Equipe Técnica',
          icon: '👥',
          badge: '18',
          path: '/admin/team'
        },
        {
          id: 'finance',
          label: 'Financeiro',
          icon: '💰',
          badge: '5',
          path: '/admin/finance'
        }
      ]
    },
    {
      section: 'analytics',
      title: 'Analytics & Relatórios',
      icon: '📊',
      items: [
        {
          id: 'analytics',
          label: 'Analytics & KPIs',
          icon: '📊',
          path: '/admin/analytics'
        },
        {
          id: 'reports',
          label: 'Relatórios Técnicos',
          icon: '📋',
          path: '/admin/reports'
        }
      ]
    },
    {
      section: 'services',
      title: 'Serviços & Contato',
      icon: '🌍',
      items: [
        {
          id: 'services',
          label: 'Serviços Geológicos',
          icon: '🔬',
          path: '/services'
        },
        {
          id: 'contact',
          label: 'Contato',
          icon: '📞',
          path: '/contact'
        }
      ]
    }
  ];

  // Menu items para geólogo - APENAS FUNCIONALIDADES EXISTENTES
  const userMenuItems = [
    {
      section: 'main',
      title: 'Principal',
      icon: '🛢️',
      items: [
        {
          id: 'dashboard',
          label: 'Meu Painel',
          icon: '📊',
          path: '/user'
        },
        {
          id: 'projects',
          label: 'Meus Projetos',
          icon: '🌍',
          path: '/user/projects'
        }
      ]
    },
    {
      section: 'services',
      title: 'Serviços & Contato',
      icon: '🌍',
      items: [
        {
          id: 'services',
          label: 'Serviços Geológicos',
          icon: '🔬',
          path: '/services'
        },
        {
          id: 'contact',
          label: 'Contato',
          icon: '📞',
          path: '/contact'
        }
      ]
    }
  ];

  const menuSections = userRole === 'admin' ? adminMenuItems : userMenuItems;

  const NavItem = ({ item, isSubmenu = false }: { item: any, isSubmenu?: boolean }) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isExpanded = expandedMenus.includes(item.id);

    return (
      <div>
        <button
          onClick={() => {
            if (hasSubmenu) {
              toggleSubmenu(item.id);
            } else if (item.path) {
              window.location.href = item.path;
              onClose();
            }
          }}
          className={`
            w-full flex items-center justify-between px-3 py-2.5 text-left transition-all duration-200 rounded-lg mx-2 mb-1
            ${isSubmenu 
              ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 text-sm pl-8' 
              : 'text-gray-700 hover:text-gray-900 hover:bg-blue-50 hover:border-blue-100'
            }
            group
          `}
        >
          <div className="flex items-center gap-3">
            <span className={`text-lg transition-colors ${!isSubmenu ? 'group-hover:text-blue-600' : ''}`}>
              {item.icon}
            </span>
            <span className="font-medium">{item.label}</span>
            {item.badge && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[18px] text-center">
                {item.badge}
              </span>
            )}
          </div>
          
          {hasSubmenu && (
            <span className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          )}
        </button>

        {/* Submenu */}
        {hasSubmenu && (
          <div className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-1">
              {item.submenu.map((subItem: any, index: number) => (
                <NavItem key={index} item={subItem} isSubmenu={true} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-200 z-40 transform transition-transform duration-300 ease-in-out shadow-xl
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:h-auto lg:shadow-none
        `}
      >
        <div className="h-full flex flex-col">
          
          {/* Header da sidebar */}
          <div className="px-6 py-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Logo */}
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">🛢️</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold">NovaGeo</h2>
                  <p className="text-sm text-blue-200">🇦🇴 Geociências & O&G</p>
                </div>
              </div>
              
              {/* Botão de fechar (apenas em mobile) */}
              <button
                onClick={onClose}
                className="lg:hidden p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Badge do Papel do Usuário */}
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
              userRole === 'admin' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-green-100 text-green-700'
            }`}>
              <span>{userRole === 'admin' ? '👨‍💼' : '🧑‍🔬'}</span>
              {userRole === 'admin' ? 'Administrador' : 'Geólogo'}
              {userRole === 'admin' && <span className="bg-blue-500 text-white text-xs px-1 rounded">PRO</span>}
            </div>
          </div>

          {/* Navegação principal */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-6">
              {menuSections.map((section) => {
                const isSectionExpanded = expandedMenus.includes(section.section);
                
                return (
                  <div key={section.section}>
                    {/* Section Header */}
                    <button
                      onClick={() => toggleSubmenu(section.section)}
                      className="w-full flex items-center justify-between px-4 py-2 mx-2 text-left transition-all duration-200 rounded-lg hover:bg-gray-100 group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{section.icon}</span>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                          {section.title}
                        </span>
                      </div>
                      <span className={`transition-transform duration-200 ${isSectionExpanded ? 'rotate-90' : ''}`}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>

                    {/* Section Items */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isSectionExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-1 mt-2">
                        {section.items.map((item) => (
                          <NavItem key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Seção de informações da empresa */}
            <div className="mt-8 mx-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Áreas de Atuação</h3>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🛢️ Bacia de Kwanza</p>
                  <p>🌊 Exploração Offshore</p>
                  <p>🪨 Geologia de Reservatórios</p>
                  <p>📊 Análise Sísmica 3D</p>
                </div>
              </div>
            </div>

            {/* Status do Sistema */}
            <div className="mt-4 mx-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-700">Sistema Operacional</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white p-1 rounded text-xs">
                  <div className="font-bold text-blue-600">8</div>
                  <div className="text-gray-500">Sísmicos</div>
                </div>
                <div className="bg-white p-1 rounded text-xs">
                  <div className="font-bold text-green-600">12</div>
                  <div className="text-gray-500">Poços</div>
                </div>
                <div className="bg-white p-1 rounded text-xs">
                  <div className="font-bold text-purple-600">18</div>
                  <div className="text-gray-500">Geólogos</div>
                </div>
              </div>
            </div>
          </nav>

          {/* Footer da sidebar */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            {/* Quick Actions para Admin */}
            {userRole === 'admin' && (
              <div className="mb-4">
                <button 
                  onClick={() => {
                    window.location.href = '/admin/seismic-surveys/create';
                    onClose();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Novo Levantamento
                </button>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-xs">
                    {userRole === 'admin' ? 'VE' : 'GE'}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {userRole === 'admin' ? 'Valdimir Esteves' : 'Geólogo'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {userRole === 'admin' ? '🇦🇴 Luanda, Angola' : 'Online'}
                  </p>
                </div>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                v2.1.0 • © 2024 NovaGeo
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Geociências & Petróleo
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;