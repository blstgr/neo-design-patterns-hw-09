# neo-design-patterns-hw-08
Цей застосунок демонструє використання структурних патернів **Composite** та **Bridge**, а також поведінкового патерну **Observer** у TypeScript.

## Функціональність
- Composite — дозволяє будувати дерево документів, де `Section` є вузлом, що містить інші елементи (`Paragraph`, `List`, або інші `Section`).
- Bridge — інтерфейс `DocRenderer` абстрагує спосіб виводу документа, дозволяючи легко змінювати формат (HTML, Markdown, plain).

## Структура проєкту
```text
src/
├── factories/           # Фабрика RendererFactory
├── interfaces/          # Інтерфейси DocNode, DocRenderer, RenderContext, RenderEventSubscriber
├── nodes/               # Елементи документа (Paragraph, List, Section)
├── renderers/           # Рендерери для HTML, Markdown та PlainText
├── subscribers/         # Підписники: логування, збирання статистики, замір часу
├── RenderEventPublisher.ts
└── main.ts              # Точка входу
```

## Запуск 
```bash
npx ts-node src/main.ts markdown
```

## Зберегти у файл
```bash
npx ts-node src/main.ts html output.html
npx ts-node src/main.ts markdown output.md
npx ts-node src/main.ts plain output.txt
```

## Вивід у консолі
```text
[Log] Rendered Paragraph (45 chars)
[Log] Rendered List (3 items)
[Log] Rendered Section ("Composite", level 2)
...
[Summary] Rendered 4 sections, 3 paragraphs, 2 lists
[Performance] Total render time: 1.7ms
```

## Вимоги
- Node.js
- TypeScript
- ts-node

## Встановлення залежностей
```bash
npm install
```

