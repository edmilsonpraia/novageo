import React, { useState } from 'react';

interface LoginForm {
  email: string;
  password: string;
  area: string;
  rememberMe: boolean;
}

const NovaGeoLogin: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
    area: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Áreas de especialização da NovaGeo
  const areas = [
    { code: 'SEISMIC', name: 'Interpretação Sísmica', icon: '📊' },
    { code: 'PETREL', name: 'Petrel & Modelagem', icon: '🗻' },
    { code: 'PYTHON', name: 'Python Geociências', icon: '🐍' },
    { code: 'GEOLOGY', name: 'Geologia do Petróleo', icon: '🛢️' },
    { code: 'PETRO', name: 'Petrofísica', icon: '📈' },
    { code: 'QGIS', name: 'QGIS & Geoprocessamento', icon: '🗺️' },
    { code: 'FIELD', name: 'Geologia de Campo', icon: '🏔️' },
    { code: 'OTHER', name: 'Outras Áreas', icon: '🌍' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    setErrorMessage('');
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      // Simular autenticação
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Validação básica
      if (!formData.email || !formData.password) {
        throw new Error('Por favor, preencha todos os campos obrigatórios');
      }

      if (isLogin && !formData.area) {
        throw new Error('Por favor, selecione sua área de interesse');
      }

      // Simular diferentes tipos de usuário baseado no email
      let userRole = 'student';
      if (formData.email.includes('admin') || formData.email.includes('zongo')) {
        userRole = 'admin';
      } else if (formData.email.includes('instrutor') || formData.email.includes('professor')) {
        userRole = 'instructor';
      }

      // Login bem-sucedido
      console.log('Login realizado:', { userRole, area: formData.area });
      
      // Redirecionar baseado no papel do usuário
      if (userRole === 'admin') {
        window.location.href = '/admin/dashboard';
      } else if (userRole === 'instructor') {
        window.location.href = '/instructor/courses';
      } else {
        window.location.href = '/student/dashboard';
      }

    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os cursos da NovaGeo.');
    window.open(`https://wa.me/+244923577164?text=${message}`, '_blank');
  };

  const handleForgotPassword = () => {
    alert('Instruções de recuperação serão enviadas para seu email.');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left Side - Branding NovaGeo */}
      <div className="lg:w-1/2 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Logo NovaGeo */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">NovaGeo</h1>
            <p className="text-xl text-green-100">Formação, Consultoria e Prestação de Serviços em Geociências</p>
            <p className="text-sm text-green-200 mt-2">NIF: 5002077655 • Luanda, Angola</p>
          </div>

          {/* Formador */}
          <div className="mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xl">👨‍🏫</span>
                </div>
                <div>
                  <h3 className="font-bold">MSc. Zongo Armando</h3>
                  <p className="text-sm text-green-100">Geofísico e Geólogo • Formador Principal</p>
                </div>
              </div>
              <p className="text-sm text-green-100">
                Mestre em Geologia aplicada à tecnologia inovadora de exploração de petróleo e gás.
                Formador no ISPTEC com 2 livros e 4 artigos científicos publicados.
              </p>
            </div>
          </div>

          {/* Especialidades */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">🎓 Nossas Especialidades</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-orange-400">📊</span>
                <span className="text-sm text-green-100">Interpretação Sísmica</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">🗻</span>
                <span className="text-sm text-green-100">Petrel & Modelagem</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">🐍</span>
                <span className="text-sm text-green-100">Python Geociências</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">🛢️</span>
                <span className="text-sm text-green-100">Geologia Petróleo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">📈</span>
                <span className="text-sm text-green-100">Petrofísica</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">🏔️</span>
                <span className="text-sm text-green-100">Geologia Campo</span>
              </div>
            </div>
          </div>

          {/* Softwares */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">💻 Softwares Utilizados</h3>
            <div className="flex flex-wrap gap-2">
              {['Petrel', 'Python', 'QGIS', 'ArcGIS Pro', 'Excel', 'Photoshop'].map((software) => (
                <span key={software} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs">
                  {software}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm text-green-200">Cursos Especializados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-green-200">Anos Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">350K</div>
              <div className="text-sm text-green-200">Valor Fixo (Kz)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Bem-vindo à NovaGeo' : 'Junte-se à NovaGeo'}
            </h2>
            <p className="text-gray-600">
              {isLogin 
                ? 'Acesse sua conta e continue sua jornada em geociências'
                : 'Cadastre-se e comece sua formação em geociências'
              }
            </p>
          </div>

          {/* Toggle Login/Register */}
          <div className="bg-gray-100 rounded-lg p-1 mb-8">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`py-2 px-4 rounded-md font-medium transition-colors ${
                  isLogin 
                    ? 'bg-white text-green-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Entrar
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`py-2 px-4 rounded-md font-medium transition-colors ${
                  !isLogin 
                    ? 'bg-white text-green-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Cadastrar
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-800 text-sm">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="seu.email@exemplo.com"
              />
              <p className="text-xs text-gray-500 mt-1">
                💡 Use 'zongo@novageo.com' para acesso de administrador
              </p>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Área de Interesse */}
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                Área de Interesse {isLogin ? '*' : '(Opcional)'}
              </label>
              <select
                id="area"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                required={isLogin}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Selecione sua área de interesse</option>
                {areas.map((area) => (
                  <option key={area.code} value={area.code}>
                    {area.icon} {area.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Remember Me & Forgot Password */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Lembrar-me</span>
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-green-600 hover:text-green-700 font-medium"
                >
                  Esqueceu a senha?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isLogin ? 'Entrando...' : 'Cadastrando...'}
                </>
              ) : (
                <>
                  <span>{isLogin ? '🚀' : '✨'}</span>
                  {isLogin ? 'Acessar Plataforma' : 'Criar Minha Conta'}
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="my-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">ou continue com</span>
              </div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleWhatsAppContact}
              className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
              </svg>
              Falar no WhatsApp
            </button>

            <a
              href="mailto:info@nova-geo.com"
              className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar Email
            </a>
          </div>

          {/* Demo Accounts */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">🎯 Contas de Demonstração:</h3>
            <div className="text-xs text-blue-700 space-y-1">
              <p><strong>Administrador:</strong> zongo@novageo.com | senha123</p>
              <p><strong>Instrutor:</strong> instrutor@novageo.com | senha123</p>
              <p><strong>Estudante:</strong> estudante@novageo.com | senha123</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p className="mb-4">
              <strong>NovaGeo - Prestação de Serviços (SU), LDA</strong><br />
              NIF: 5002077655 • Kilamba, W24, p. 114, Luanda<br />
              📞 +244 923 577 164 • 📧 info@nova-geo.com
            </p>
            <p>
              Ao continuar, você concorda com nossos{' '}
              <a href="#" className="text-green-600 hover:text-green-700">Termos de Uso</a> e{' '}
              <a href="#" className="text-green-600 hover:text-green-700">Política de Privacidade</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovaGeoLogin;