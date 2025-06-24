import fs from "fs";
import { execSync } from "child_process";

// Генерация самоподписанных сертификатов для разработки
try {
  // Проверяем, есть ли уже сертификаты
  if (
    fs.existsSync("./localhost.pem") &&
    fs.existsSync("./localhost-key.pem")
  ) {
    console.log("✅ Сертификаты уже существуют");
    console.log("🚀 Запускаем dev server с HTTPS...");
    process.exit(0);
  }

  console.log("Генерируем HTTPS сертификаты для разработки...");

  // Создаем приватный ключ
  execSync("openssl genrsa -out localhost-key.pem 2048", { stdio: "inherit" });

  // Создаем сертификат
  execSync(
    `openssl req -new -x509 -key localhost-key.pem -out localhost.pem -days 365 -subj "/C=RU/ST=Moscow/L=Moscow/O=Dev/CN=localhost"`,
    { stdio: "inherit" },
  );

  console.log("✅ Сертификаты созданы: localhost.pem и localhost-key.pem");
  console.log("🚀 Запускаем dev server с HTTPS...");
} catch (error) {
  console.error("❌ Ошибка при создании сертификатов:", error.message);
  console.log("💡 Установите OpenSSL или используйте альтернативу mkcert");
  console.log("🔧 Альтернатива: npm install -g mkcert && mkcert localhost");
  process.exit(1);
}
