const Reviews = () => {
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

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div
              className="w-full h-[800px] max-h-[70vh] overflow-hidden relative rounded-xl shadow-lg"
              style={{
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              <iframe
                className="w-full h-full border border-gray-200 rounded-lg"
                src="https://yandex.ru/maps-reviews-widget/1377422153?comments"
                title="Отзывы о техническом сервисе Битпорт"
              />
              <a
                href="https://yandex.ru/maps/org/tekhnicheskiy_servis_bitport/1377422153/"
                target="_blank"
                className="absolute bottom-2 left-0 right-0 text-center text-gray-400 text-xs no-underline px-4 overflow-hidden text-ellipsis whitespace-nowrap block max-h-3.5"
                style={{
                  fontFamily: "YS Text, sans-serif",
                }}
              >
                Технический сервис Битпорт на карте Лабытнанги — Яндекс Карты
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
