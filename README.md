# Шаблон Next.js & HeroUI

Это шаблон для создания приложений с использованием Next.js 14 (директория pages) и HeroUI (v2).

[Попробовать на CodeSandbox](https://githubbox.com/heroui-inc/next-pages-template)

> Примечание: С версии Next.js 14 рекомендуется перейти на [новый App Router](https://nextjs.org/docs/app), чтобы использовать последние возможности React.
>
> Подробнее: [Pages Router](https://nextjs.org/docs/pages)

## Используемые технологии

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Как использовать

Чтобы создать новый проект на основе этого шаблона с помощью create-next-app, выполните следующую команду:

```bash
npx create-next-app -e https://github.com/heroui-inc/next-pages-template
```

### Установка зависимостей

Вы можете использовать один из менеджеров пакетов: npm, yarn, pnpm, bun. Пример с npm:

```bash
npm install
```

### Запуск сервера разработки

```bash
npm run dev
```

### Настройка pnpm (опционально)

Если вы используете pnpm, добавьте следующий код в файл `.npmrc`:

```bash
public-hoist-pattern[]=*@heroui/*
```

После изменения файла `.npmrc` необходимо снова выполнить `pnpm install`, чтобы зависимости установились корректно.

## Лицензия

Лицензировано под [лицензией MIT](https://github.com/heroui-inc/next-pages-template/blob/main/LICENSE).
