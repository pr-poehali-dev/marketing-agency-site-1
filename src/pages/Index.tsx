import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Globe',
      title: 'Разработка сайтов',
      description: 'Создаем современные и функциональные веб-сайты, которые работают на ваш бизнес'
    },
    {
      icon: 'TrendingUp',
      title: 'Яндекс Директ',
      description: 'Настройка и ведение рекламных кампаний для максимальной конверсии'
    },
    {
      icon: 'Search',
      title: 'SEO продвижение',
      description: 'Выводим ваш сайт в топ поисковых систем и увеличиваем органический трафик'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика',
      description: 'Анализируем результаты и оптимизируем стратегию для роста вашего бизнеса'
    }
  ];

  const portfolio = [
    {
      title: 'E-commerce платформа',
      category: 'Интернет-магазин',
      description: 'Разработка и запуск интернет-магазина с интеграцией платежных систем'
    },
    {
      title: 'Корпоративный сайт',
      category: 'Бизнес',
      description: 'Премиальный сайт для финансовой компании с личным кабинетом'
    },
    {
      title: 'Landing page',
      category: 'Маркетинг',
      description: 'Продающая страница для IT-продукта с конверсией 12%'
    }
  ];

  const cases = [
    {
      title: 'Рост продаж на 340%',
      client: 'Интернет-магазин электроники',
      result: 'Увеличили продажи в 3.4 раза за 6 месяцев через Яндекс Директ',
      metrics: '+340% продаж'
    },
    {
      title: 'Лиды по 200₽',
      client: 'Клиника пластической хирургии',
      result: 'Снизили стоимость лида с 1200₽ до 200₽ при сохранении качества',
      metrics: '-83% стоимость лида'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/948226c6-c861-4fc4-99c1-b86c3e41391d.png" 
                alt="A&I Digital Marketing" 
                className="h-10"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'cases', label: 'Кейсы' },
                { id: 'about', label: 'О нас' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-[#7c6fd6] ${
                    activeSection === item.id ? 'text-[#7c6fd6]' : 'text-[#3a3a3a]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#7c6fd6] hover:bg-[#6b5ec5] text-white"
            >
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-[#3a3a3a] mb-6">
                Цифровой маркетинг
                <br />
                <span className="text-[#7c6fd6]">для вашего роста</span>
              </h1>
              <p className="text-xl text-[#888a8f] mb-8 max-w-2xl mx-auto">
                Разрабатываем сайты и продвигаем бизнес в Яндекс Директ. 
                Превращаем клики в продажи.
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-[#7c6fd6] hover:bg-[#6b5ec5] text-white text-lg px-8"
                >
                  Начать проект
                </Button>
                <Button 
                  onClick={() => scrollToSection('cases')}
                  size="lg"
                  variant="outline"
                  className="border-[#7c6fd6] text-[#7c6fd6] hover:bg-[#7c6fd6] hover:text-white text-lg px-8"
                >
                  Наши кейсы
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl font-bold text-[#3a3a3a] mb-4">Наши услуги</h2>
              <p className="text-lg text-[#888a8f] max-w-2xl mx-auto">
                Полный спектр digital-услуг для развития вашего бизнеса
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#7c6fd6]/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon name={service.icon} className="text-[#7c6fd6]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#3a3a3a] mb-3">{service.title}</h3>
                    <p className="text-[#888a8f]">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-[#3a3a3a] mb-4">Портфолио</h2>
              <p className="text-lg text-[#888a8f] max-w-2xl mx-auto">
                Проекты, которыми мы гордимся
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {portfolio.map((project, index) => (
                <Card 
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="h-64 bg-gradient-to-br from-[#7c6fd6] to-[#b8b8c1] group-hover:scale-105 transition-transform duration-300"></div>
                  <CardContent className="p-6">
                    <span className="text-sm text-[#7c6fd6] font-medium">{project.category}</span>
                    <h3 className="text-2xl font-bold text-[#3a3a3a] mt-2 mb-3">{project.title}</h3>
                    <p className="text-[#888a8f]">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-[#3a3a3a] mb-4">Кейсы</h2>
              <p className="text-lg text-[#888a8f] max-w-2xl mx-auto">
                Реальные результаты наших клиентов
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {cases.map((caseItem, index) => (
                <Card 
                  key={index}
                  className="border-2 border-[#7c6fd6]/20 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-[#7c6fd6] mb-4">{caseItem.metrics}</div>
                    <h3 className="text-2xl font-bold text-[#3a3a3a] mb-2">{caseItem.title}</h3>
                    <p className="text-sm text-[#888a8f] mb-4">{caseItem.client}</p>
                    <p className="text-[#3a3a3a]">{caseItem.result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-[#3a3a3a] mb-6">О нас</h2>
              <p className="text-lg text-[#888a8f] mb-8 leading-relaxed">
                A&I Digital Marketing — это команда профессионалов с опытом более 7 лет в сфере 
                цифрового маркетинга. Мы специализируемся на разработке современных веб-сайтов 
                и продвижении бизнеса через контекстную рекламу в Яндекс Директ.
              </p>
              <p className="text-lg text-[#888a8f] leading-relaxed">
                Наша миссия — помогать бизнесу расти, используя передовые digital-технологии 
                и индивидуальный подход к каждому проекту. Мы не просто делаем сайты — 
                мы создаем инструменты для увеличения ваших продаж.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-[#7c6fd6] mb-2">150+</div>
                  <p className="text-[#888a8f]">Проектов</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#7c6fd6] mb-2">7+</div>
                  <p className="text-[#888a8f]">Лет опыта</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#7c6fd6] mb-2">98%</div>
                  <p className="text-[#888a8f]">Довольных клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-[#3a3a3a] mb-4">Контакты</h2>
                <p className="text-lg text-[#888a8f]">
                  Расскажите о вашем проекте, и мы свяжемся с вами в ближайшее время
                </p>
              </div>
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#3a3a3a] mb-2">
                        Ваше имя
                      </label>
                      <Input 
                        placeholder="Иван Иванов"
                        className="border-gray-200 focus:border-[#7c6fd6]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3a3a3a] mb-2">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="ivan@example.com"
                        className="border-gray-200 focus:border-[#7c6fd6]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3a3a3a] mb-2">
                        Телефон
                      </label>
                      <Input 
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        className="border-gray-200 focus:border-[#7c6fd6]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3a3a3a] mb-2">
                        Сообщение
                      </label>
                      <Textarea 
                        placeholder="Расскажите о вашем проекте..."
                        rows={5}
                        className="border-gray-200 focus:border-[#7c6fd6]"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-[#7c6fd6] hover:bg-[#6b5ec5] text-white text-lg py-6"
                    >
                      Отправить заявку
                    </Button>
                  </form>
                  <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                    <div className="flex items-center gap-3 text-[#888a8f]">
                      <Icon name="Mail" size={20} className="text-[#7c6fd6]" />
                      <span>info@aidigital.ru</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#888a8f]">
                      <Icon name="Phone" size={20} className="text-[#7c6fd6]" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#888a8f]">
                      <Icon name="MapPin" size={20} className="text-[#7c6fd6]" />
                      <span>Москва, ул. Примерная, 123</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#3a3a3a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src="https://cdn.poehali.dev/files/a03d547c-ca5b-44ce-9292-e964de322741.png" 
                alt="A&I Digital Marketing" 
                className="h-12 brightness-0 invert"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-[#b8b8c1]">© 2024 A&I Digital Marketing. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
