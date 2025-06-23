import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const prices = [
    {
      category: "Диагностика",
      price: "Бесплатно",
      description: "При последующем ремонте",
      icon: "Search",
    },
    {
      category: "Декальцинация",
      price: "1 500 ₽",
      description: "Полная очистка от накипи",
      icon: "Droplets",
    },
    {
      category: "Ремонт помпы",
      price: "от 2 500 ₽",
      description: "Замена + работа",
      icon: "Zap",
    },
    {
      category: "Замена ТЭНа",
      price: "от 3 000 ₽",
      description: "Нагревательный элемент",
      icon: "Flame",
    },
    {
      category: "Ремонт электроники",
      price: "от 4 000 ₽",
      description: "Платы управления",
      icon: "Cpu",
    },
    {
      category: "Выезд мастера",
      price: "500 ₽",
      description: "В пределах города",
      icon: "Car",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Прайс-лист</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Честные цены без скрытых доплат. Окончательная стоимость после
            диагностики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {prices.map((item, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon
                      name={item.icon as any}
                      size={24}
                      className="text-orange-600"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {item.category}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm">
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-violet-600">
                  {item.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-violet-100 rounded-2xl p-8 mb-8">
            <Icon
              name="Star"
              size={48}
              className="mx-auto mb-4 text-violet-600"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Гарантия на все работы
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              От 3 до 12 месяцев в зависимости от типа ремонта. Используем
              только оригинальные запчасти.
            </p>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-xl">
              Узнать точную стоимость
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
