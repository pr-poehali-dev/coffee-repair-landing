import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Звоните с 10:00 до 18:00. Суббота выходной",
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: "+7 (495) 123-45-67",
      description: "Online консультации",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "service@bitport.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Адрес мастерской",
      value: "ул. Кофейная, 15",
      description: "м. Парк Культуры",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом или приезжайте в мастерскую
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-violet-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Icon
                        name={contact.icon as any}
                        size={24}
                        className="text-violet-600"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {contact.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {contact.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-violet-600">
                    {contact.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-80 bg-gradient-to-br from-violet-100 to-orange-100 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="Map"
                  size={64}
                  className="mx-auto mb-4 text-violet-600"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Карта
                </h3>
                <p className="text-gray-600">Интерактивная карта будет здесь</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Режим работы
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Пн-Пт:</span>
                  <span className="font-semibold">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота:</span>
                  <span className="font-semibold">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье:</span>
                  <span className="font-semibold">Выходной</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-violet-600 hover:bg-violet-700 text-white rounded-xl">
                <Icon name="Navigation" size={20} className="mr-2" />
                Построить маршрут
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
