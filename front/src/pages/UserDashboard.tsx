// src/pages/UserDashboard.tsx
import React from 'react';
import { useAuth } from './../context/AuthContext';
import { LogOut } from 'lucide-react';

const UserDashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Dashboard do Usuário - <span className="text-blue-600">NovaGeo</span>
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user?.name?.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{user?.name}</p>
                  <p className="text-sm text-gray-600">Estudante</p>
                </div>
              </div>
              <button 
                onClick={logout}
                className="text-gray-600 hover:text-red-600 transition-colors"
                title="Sair"
              >
                <LogOut size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Bem-vindo, {user?.name}! 👋
          </h2>
          <p className="text-gray-600 mb-8">
            Seu dashboard está sendo preparado com muito carinho...
          </p>
          <div className="bg-blue-50 p-6 rounded-xl">
            <p className="text-blue-800">
              Em breve você terá acesso a todos os seus cursos, progresso e certificados aqui!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;