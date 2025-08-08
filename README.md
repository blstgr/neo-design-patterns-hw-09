# neo-design-patterns-hw-09
Цей застосунок демонструє використання поведінкового патерну Шаблонний метод для експорту користувацьких даних, а також патерну Ітератор для читання згенерованих файлів.

## Функціональність
- Шаблонний метод — дозволяє винести спільну логіку експорту у базовий клас DataExporter, а деталізацію форматів делегувати у CsvExporter, JsonExporter та XmlExporter.
- Ітератор — дає можливість зручно обходитись по кожному запису у збережених файлах без ручного парсингу.

## Структура проєкту
```text
src/
├── data/                # Тип UserData
├── exporters/           # Експортери для CSV, JSON, XML
├── iterators/           # Ітератори для CSV, JSON, XML
├── main.ts              # Генерує файли експорту
└── main-iterate.ts      # Виводить користувачів з усіх файлів
```

## Запуск 
```bash
npx ts-node src/main.ts
```

## Після запуску будуть створені файли
```bash
dist/users.csv
dist/users.json
dist/users.xml
```

## Запуск обходу файлів
```bash
npx ts-node src/main-iterate.ts
```

## Вивід у консолі
```text
--- CSV ---
{ id: 5, name: 'Chelsey Dietrich', email: '...', phone: '...' }
...
--- JSON ---
{ id: 2, name: 'Ervin Howell', email: '...', phone: '...' }
...
--- XML ---
{ id: 4, name: 'Patricia Lebsack', email: '...', phone: '...' }
...
```

## Вимоги
- Node.js
- TypeScript
- ts-node

## Встановлення залежностей
```bash
npm install
```

