import fs from "fs";
import { execSync } from "child_process";

// Генерация самоподписанных сертификатов для разработки
try {
  console.log("Генерируем HTTPS сертификаты для разработки...");

  // Создаем приватный ключ
  execSync("openssl genrsa -out localhost-key.pem 2048");

  // Создаем сертификат
  execSync(
    `openssl req -new -x509 -key localhost-key.pem -out localhost.pem -days 365 -subj "/C=RU/ST=Moscow/L=Moscow/O=Dev/CN=localhost"`,
  );

  console.log("✅ Сертификаты созданы: localhost.pem и localhost-key.pem");
  console.log("🚀 Теперь можно запустить: npm run dev");
} catch (error) {
  console.error("❌ Ошибка при создании сертификатов:", error.message);
  console.log("💡 Установите OpenSSL или используйте альтернативу mkcert");
}
