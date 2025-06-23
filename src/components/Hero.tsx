import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-violet-50 to-orange-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <Icon
            name="Coffee"
            size={64}
            className="mx-auto mb-6 text-violet-600"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Ремонт кофемашин
          <span className="block text-violet-600">любой сложности</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Профессиональный ремонт домашних и коммерческих кофемашин. Быстро,
          качественно, с гарантией. Более 500 довольных клиентов.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl text-lg"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Вызвать мастера
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-violet-600 text-violet-600 hover:bg-violet-50 px-8 py-4 rounded-xl text-lg"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Онлайн консультация
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <Icon
              name="Clock"
              size={40}
              className="mx-auto mb-4 text-orange-500"
            />
            <h3 className="font-semibold text-gray-900 mb-2">Быстрый ремонт</h3>
            <p className="text-gray-600 text-sm">От 30 минут до 2 дней</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <Icon
              name="Shield"
              size={40}
              className="mx-auto mb-4 text-orange-500"
            />
            <h3 className="font-semibold text-gray-900 mb-2">
              Гарантия качества
            </h3>
            <p className="text-gray-600 text-sm">До 12 месяцев на работы</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <Icon
              name="Home"
              size={40}
              className="mx-auto mb-4 text-orange-500"
            />
            <h3 className="font-semibold text-gray-900 mb-2">Выезд на дом</h3>
            <p className="text-gray-600 text-sm">По всему городу</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
