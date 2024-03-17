# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Базовый код
### Класс ProductMenager
Этот класс отвечает за взаимодействие пользователя с товарами:
-добавляет/удаляет его в корзину

### Класс BasketManager
Этот класс отвечает за работу корзины:
-выбор метода оплаты
-добавление/изменение и удалене информации о пользователе
-доваление/удаление товаров
-подсчет итоговой стоимости заказа

## Архитектура
![Архитктура проекта](https://github.com/VikaShipovalova/web-larek-frontend/raw/main/classmodel.png)