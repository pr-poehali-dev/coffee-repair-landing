import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Home",
      title: "Домашние кофемашины",
      description:
        "Ремонт капсульных, рожковых, автоматических кофемашин для дома",
      features: ["Delonghi", "Saeco", "Philips", "Bosch", "Nespresso", "Krups"],
    },
    {
      icon: "Building",
      title: "Профессиональные кофемашины",
      description:
        "Обслуживание коммерческого оборудования для кафе и ресторанов",
      features: [
        "La Marzocco",
        "Nuova Simonelli",
        "Faema",
        "Rancilio",
        "Gaggia",
        "Astoria",
      ],
    },
    {
      icon: "Settings",
      title: "Профилактическое обслуживание",
      description: "Регулярное ТО для продления срока службы оборудования",
      features: [
        "Декальцинация",
        "Чистка группы",
        "Замена фильтров",
        "Настройка помола",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексный подход к ремонту и обслуживанию кофейного оборудования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 bg-violet-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-violet-600"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
