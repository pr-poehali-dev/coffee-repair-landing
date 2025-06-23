import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличный сервис! Мастер приехал в тот же день, быстро починил мою Delonghi. Работает как новая!",
      machine: "Delonghi ESAM 3200",
      initials: "АП",
    },
    {
      name: "Михаил Иванов",
      rating: 5,
      text: "Профессиональный подход к ремонту коммерческой техники. Наша La Marzocco снова радует гостей кафе.",
      machine: "La Marzocco GB5",
      initials: "МИ",
    },
    {
      name: "Елена Смирнова",
      rating: 5,
      text: "Честные цены, качественный ремонт. Мастер объяснил все проблемы и дал советы по уходу.",
      machine: "Saeco Xelsis",
      initials: "ЕС",
    },
    {
      name: "Дмитрий Козлов",
      rating: 5,
      text: "Быстро, качественно, с гарантией. Рекомендую всем владельцам кофемашин!",
      machine: "Jura E8",
      initials: "ДК",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 9000 довольных клиентов доверяют нам свои кофемашины
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-violet-50 to-orange-50 border-0 shadow-lg rounded-2xl"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-violet-600 text-white font-semibold">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {review.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm">
                      {review.machine}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mt-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <Icon name="Shield" size={20} />
            <span className="font-semibold">4.9/5 средняя оценка</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
