import React, { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  course: string;
  education: string;
  organization: string;
  experience: string;
  subject: string;
  message: string;
  preferredContact: string;
  trainingFormat: string;
}

const NovaGeoContact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    course: '',
    education: '',
    organization: '',
    experience: '',
    subject: '',
    message: '',
    preferredContact: 'whatsapp',
    trainingFormat: 'presencial'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const courses = [
    'Interpretação de Dados Sísmicos',
    'Petrel - Modelagem Estática',
    'Programação Python para Geociências',
    'Geologia do Petróleo',
    'Interpretação de Dados Petrofísicos',
    'Geologia de Campo - Miradouro da Lua',
    'Introdução ao QGIS',
    'Introdução às Operações Petrolíferas',
    'Consultoria Personalizada',
    'Outros'
  ];

  const educationLevels = [
    'Ensino Médio (12ª Classe)',
    'Licenciatura em Geociências',
    'Licenciatura em Engenharia',
    'Mestrado',
    'Doutorado',
    'Profissional da Indústria',
    'Outros'
  ];

  const experienceLevels = [
    'Iniciante (0-1 anos)',
    'Básico (1-3 anos)',
    'Intermediário (3-7 anos)',
    'Avançado (7+ anos)',
    'Especialista (10+ anos)',
    'Estudante'
  ];

  const trainingFormats = [
    { value: 'presencial', label: 'Presencial (Kilamba)', price: '350.000 Kz' },
    { value: 'domicilio', label: 'Ao Domicílio', price: '350.000 Kz + Deslocação' },
    { value: 'online', label: 'Online', price: '350.000 Kz' },
    { value: 'empresa', label: 'Formação Empresarial', price: 'Valor Negociável' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      education: '',
      organization: '',
      experience: '',
      subject: '',
      message: '',
      preferredContact: 'whatsapp',
      trainingFormat: 'presencial'
    });

    // Esconder mensagem de sucesso após 5 segundos
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Olá MSc. Zongo Armando! Gostaria de saber mais sobre os cursos da NovaGeo.\n\nNome: ${formData.name}\nCurso de interesse: ${formData.course}\nFormato: ${formData.trainingFormat}\n\nObrigado!`
    );
    window.open(`https://wa.me/+244923577164?text=${message}`, '_blank');
  };

  const handleEmailContact = () => {
    const subject = encodeURIComponent(`Interesse nos cursos NovaGeo - ${formData.course}`);
    const body = encodeURIComponent(
      `Prezado MSc. Zongo Armando,\n\nTenho interesse nos cursos da NovaGeo.\n\nNome: ${formData.name}\nCurso: ${formData.course}\nFormato: ${formData.trainingFormat}\n\nAguardo retorno.\n\nAtenciosamente,\n${formData.name}`
    );
    window.location.href = `mailto:info@nova-geo.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      type: 'whatsapp',
      label: 'WhatsApp Direto',
      value: '+244 923 577 164',
      description: 'MSc. Zongo Armando',
      city: 'Resposta Rápida',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=200&fit=crop',
      icon: '📱'
    },
    {
      type: 'email',
      label: 'E-mail Institucional',
      value: 'info@nova-geo.com',
      description: 'Atendimento Oficial',
      city: 'Suporte 24h',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=200&fit=crop',
      icon: '✉️'
    },
    {
      type: 'location',
      label: 'Escritório Kilamba',
      value: 'W24, p. 114, Luanda',
      description: 'Instalações NovaGeo',
      city: 'Visitas Agendadas',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop',
      icon: '📍'
    }
  ];

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
          <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl mb-4 opacity-90">
            🇦🇴 NovaGeo - Formação em Geociências
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mb-8">
            Estamos aqui para ajudar você a desenvolver sua carreira em geociências. 
            Entre em contato conosco para informações sobre cursos, consultoria e serviços especializados.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-2xl">👨‍🏫</span>
              <p className="text-sm">MSc. Zongo Armando</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-2xl">💰</span>
              <p className="text-sm">Valor: 350.000 Kz</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-2xl">📜</span>
              <p className="text-sm">Certificação Incluída</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* Informações de Contato Principais */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fale Conosco</h2>
            <p className="text-lg text-gray-600">Escolha a melhor forma de entrar em contato</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 overflow-hidden">
                  <img 
                    src={info.image}
                    alt={info.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="text-3xl mb-3">{info.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.label}</h3>
                  <p className="text-gray-600 mb-1">{info.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{info.city}</p>
                  <p className="text-lg font-semibold text-green-600 mb-4">{info.value}</p>
                  <button 
                    onClick={() => {
                      if (info.type === 'whatsapp') handleWhatsAppContact();
                      else if (info.type === 'email') handleEmailContact();
                      else window.open('https://maps.google.com/?q=Kilamba+W24+Luanda+Angola', '_blank');
                    }}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    {info.type === 'whatsapp' ? '📱 WhatsApp' : 
                     info.type === 'email' ? '✉️ Enviar E-mail' : '🗺️ Ver Localização'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formulário de Contato e Informações */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span>📝</span>
              Solicitar Informações
            </h2>
            
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-green-800 font-medium">Mensagem enviada com sucesso! 🎉</p>
                </div>
                <p className="text-green-700 text-sm mt-1">MSc. Zongo Armando entrará em contato em até 24 horas.</p>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+244 923 xxx xxx"
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Curso de Interesse *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione um curso</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                    Nível de Formação
                  </label>
                  <select
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione seu nível</option>
                    {educationLevels.map((level, index) => (
                      <option key={index} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Experiência em Geociências
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione sua experiência</option>
                    {experienceLevels.map((level, index) => (
                      <option key={index} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa/Instituição
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Sonangol, Chevron, UAN, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Formato de Treinamento Preferido
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {trainingFormats.map((format, index) => (
                    <label key={index} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="trainingFormat"
                        value={format.value}
                        checked={formData.trainingFormat === format.value}
                        onChange={handleInputChange}
                        className="mr-3 text-green-600"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{format.label}</div>
                        <div className="text-sm text-green-600">{format.price}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Informações sobre o curso, datas, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Descreva suas necessidades, objetivos ou dúvidas sobre os cursos..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Forma Preferida de Contato
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="whatsapp"
                      checked={formData.preferredContact === 'whatsapp'}
                      onChange={handleInputChange}
                      className="mr-2 text-green-600"
                    />
                    📱 WhatsApp
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className="mr-2 text-green-600"
                    />
                    📧 E-mail
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      className="mr-2 text-green-600"
                    />
                    📞 Telefone
                  </label>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    Enviar Solicitação
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="space-y-8">
            {/* Horário de Atendimento */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🕒</span>
                Horário de Atendimento
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Segunda - Sexta</span>
                  <span className="font-bold text-green-600">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Sábado</span>
                  <span className="font-bold text-yellow-600">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Domingo</span>
                  <span className="font-bold text-red-600">Fechado</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg text-center">
                  <p className="text-sm text-blue-700">
                    <strong>📱 WhatsApp 24/7:</strong> +244 923 577 164
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Rápido */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>❓</span>
                Perguntas Frequentes
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Qual o valor dos cursos?</h4>
                  <p className="text-sm text-gray-600">Valor fixo de 350.000 Kz para todos os cursos (exceto empresas).</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Preciso ter experiência prévia?</h4>
                  <p className="text-sm text-gray-600">Não! Oferecemos cursos desde iniciante até avançado.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Recebo certificado?</h4>
                  <p className="text-sm text-gray-600">Sim! Certificado reconhecido na indústria angolana.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Posso pagar parcelado?</h4>
                  <p className="text-sm text-gray-600">Consulte condições especiais via WhatsApp.</p>
                </div>
              </div>
            </div>

            {/* Informações Bancárias */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🏦</span>
                Dados Bancários
              </h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Titular</p>
                  <p className="font-semibold">NOVAGEO - PRESTAÇÃO DE SERVIÇOS SU, LDA</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Banco</p>
                  <p className="font-semibold">Banco BIC</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Conta</p>
                  <p className="font-semibold">22039355510001</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">IBAN</p>
                  <p className="font-semibold text-xs">A006.0051.0000.2039.3555.1017.3</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700">
                    💡 Envie o comprovativo via WhatsApp após o pagamento
                  </p>
                </div>
              </div>
            </div>

            {/* Links Rápidos */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🔗</span>
                Acesso Rápido
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-colors text-left flex items-center gap-3"
                >
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-medium">WhatsApp Direto</p>
                    <p className="text-sm text-green-100">Chat com MSc. Zongo Armando</p>
                  </div>
                </button>
                <button 
                  onClick={() => window.open('https://forms.gle/XeChXKgrYWxfdN7k9', '_blank')}
                  className="w-full bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-colors text-left flex items-center gap-3"
                >
                  <span className="text-2xl">📝</span>
                  <div>
                    <p className="font-medium">Formulário de Inscrição</p>
                    <p className="text-sm text-green-100">Inscreva-se online</p>
                  </div>
                </button>
                <button 
                  onClick={() => window.open('https://www.nova-geo.com', '_blank')}
                  className="w-full bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-colors text-left flex items-center gap-3"
                >
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-medium">Website Oficial</p>
                    <p className="text-sm text-green-100">www.nova-geo.com</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Formador */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <span>👨‍🏫</span>
              Nosso Formador
            </h2>
            <p className="text-lg text-gray-600">Conheça quem vai guiar sua jornada em geociências</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                      alt="MSc. Zongo Armando"
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-green-100"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-lg">
                      🇦🇴
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">MSc. Zongo Armando</h3>
                  <p className="text-green-600 font-medium mb-2">Geofísico e Geólogo</p>
                  <p className="text-gray-600 text-sm mb-4">Formador Principal • ISPTEC</p>
                  
                  <div className="flex justify-center gap-3">
                    <button 
                      onClick={handleWhatsAppContact}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      📱 WhatsApp
                    </button>
                    <button 
                      onClick={handleEmailContact}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      📧 E-mail
                    </button>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Experiência e Qualificações</h4>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-900 mb-2">🎓 Formação Acadêmica</h5>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Mestrado em Geologia aplicada à tecnologia inovadora de exploração de petróleo e gás</li>
                        <li>• Licenciatura em Geofísica</li>
                        <li>• Formador nos laboratórios do ISPTEC</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-900 mb-2">📚 Publicações</h5>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• 2 livros publicados</li>
                        <li>• 4 artigos científicos</li>
                        <li>• Pesquisas em exploração petrolífera</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-orange-900 mb-2">💼 Especialidades</h5>
                      <div className="flex flex-wrap gap-2">
                        {['Interpretação Sísmica', 'Petrel', 'Python', 'Geologia do Petróleo', 'Petrofísica', 'QGIS'].map((skill, i) => (
                          <span key={i} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">🏆 Diferenciais</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Experiência prática na indústria petrolífera angolana</li>
                        <li>• Abordagem didática adaptada ao mercado local</li>
                        <li>• Foco em aplicações práticas e casos reais</li>
                        <li>• Suporte contínuo aos alunos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Localização */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
            <span>📍</span>
            Nossa Localização
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Informações do Escritório */}
            <div>
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <span>🏢</span>
                  NovaGeo - Sede
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">📍</span>
                    <div>
                      <p className="font-medium text-gray-900">Endereço</p>
                      <p className="text-gray-600">Kilamba, W24, p. 114</p>
                      <p className="text-gray-600">Luanda, Angola</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">📱</span>
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">+244 923 577 164</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✉️</span>
                    <div>
                      <p className="font-medium text-gray-900">E-mail</p>
                      <p className="text-gray-600">info@nova-geo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">🌐</span>
                    <div>
                      <p className="font-medium text-gray-900">Website</p>
                      <p className="text-gray-600">www.nova-geo.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">Como Chegar</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">🚗 De Carro</h5>
                  <p className="text-sm text-blue-800">
                    Siga pela Estrada do Kilamba até o Bairro W24, casa 114. 
                    Estacionamento disponível próximo.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-900 mb-2">🚌 Transporte Público</h5>
                  <p className="text-sm text-yellow-800">
                    Ônibus urbanos com destino ao Kilamba. 
                    Ponto de referência: Mercado do Kilamba.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-2">📞 Visitas</h5>
                  <p className="text-sm text-green-800">
                    Agende sua visita via WhatsApp para atendimento personalizado 
                    e demonstração das instalações.
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa Placeholder */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">Mapa de Localização</h3>
                <p className="text-gray-500 mb-4">Kilamba, W24, p. 114, Luanda</p>
                <button 
                  onClick={() => window.open('https://maps.google.com/?q=Kilamba+W24+Luanda+Angola', '_blank')}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  🗺️ Ver no Google Maps
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">🚀 Pronto para Começar sua Formação?</h2>
          <p className="text-green-100 mb-8 max-w-3xl mx-auto text-lg">
            MSc. Zongo Armando está pronto para guiar você no desenvolvimento de suas competências em geociências. 
            Entre em contato agora e dê o próximo passo na sua carreira!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Resposta Imediata</h3>
              <p className="text-sm text-green-100">WhatsApp 24/7 para esclarecimentos</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold mb-2">Formação Especializada</h3>
              <p className="text-sm text-green-100">Cursos focados no mercado angolano</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-bold mb-2">Certificação Reconhecida</h3>
              <p className="text-sm text-green-100">Certificado valorizado na indústria</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleWhatsAppContact}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              📱 WhatsApp: +244 923 577 164
            </button>
            <button 
              onClick={handleEmailContact}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              📧 info@nova-geo.com
            </button>
            <button 
              onClick={() => window.open('https://forms.gle/XeChXKgrYWxfdN7k9', '_blank')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              📝 Inscrever-se Online
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-green-200 text-sm">
              💰 Valor: 350.000 Kz • 📜 Certificação incluída • 🎯 Qualidade garantida
            </p>
          </div>
        </section>

        {/* Rodapé */}
        <section className="bg-gray-100 rounded-xl p-8 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">NovaGeo</h3>
            <p className="text-gray-600">Prestação de Serviços (SU), LDA</p>
            <p className="text-gray-600">Formação, Consultoria e Prestação de Serviços em Geociências</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🏢 Empresa</h4>
              <p className="text-sm text-gray-600">NIF: 5002077655</p>
              <p className="text-sm text-gray-600">Registro Comercial Angolano</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">📍 Endereço</h4>
              <p className="text-sm text-gray-600">Kilamba, W24, p. 114</p>
              <p className="text-sm text-gray-600">Luanda, Angola</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">👨‍🏫 Formador</h4>
              <p className="text-sm text-gray-600">MSc. Zongo Armando</p>
              <p className="text-sm text-gray-600">Geofísico e Geólogo</p>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <p className="text-sm text-gray-600">
              © 2025 NovaGeo - Prestação de Serviços (SU), LDA. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Formação especializada em geociências para o mercado angolano.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NovaGeoContact;