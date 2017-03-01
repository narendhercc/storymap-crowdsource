define({
  "loading": {
    "general": "Загрузка",
    "initializing": "Загрузка истории",
    "map": "Загрузка карты"
  },
  "common": {
    "or": "или",
    "appNamePrepend": "Story Map",
    "appName": "Crowdsource",
    "buttons": {
      "save": "Сохранить",
      "saving": "Сохранение",
      "close": "Закрыть"
    }
  },
  "banner": {
    "buttons": {
      "edit": "Редактировать историю",
      "hide": "Скрыть"
    }
  },
  "sharing": {
    "buttonTitleAttr": {
      "facebook": "Разместить в Facebook",
      "twitter": "Разместить в Twitter",
      "link": "Получить код для встраивания или скопировать краткую ссылку"
    },
    "link": {
      "title": "Опубликовать",
      "copied": "Скопировано",
      "linkHeader": "Ссылка на историю",
      "linkHelper": "Опубликуйте эту историю через email или социальные сети с помощью ссылки ниже.",
      "copyShortLink": "Копировать краткую ссылку",
      "showShortLink": "Показать краткую ссылку",
      "copyFullLink": "Копировать полный URL-адрес",
      "showFullLink": "Показать полный URL-адрес",
      "embedSizeHelper": "Размер (ширина/высота)",
      "embedCodeHeader": "Встроить в веб-сайт",
      "embedCodeHelper": "Используйте следующий HTML-код для встраивания истории на веб-страницу.",
      "copyEmbedCode": "Копировать встроенный код"
    }
  },
  "layouts": {
    "stacked": {
      "changeView": {
        "mapView": "Просмотреть карту",
        "galleryView": "Просмотреть Галерею"
      }
    }
  },
  "mobile": {
    "bottomNav": {
      "home": "На главную",
      "map": "Карта",
      "gallery": "Галерея",
      "participate": "Участвовать"
    }
  },
  "forms": {
    "select": {
      "noDefaultSelection": "Выберите опцию..."
    },
    "photo": {
      "loading": "Загрузка фотографии",
      "resizing": "Изменение размера фотографии"
    }
  },
  "map": {
    "controls": {
      "homeButton": "Перейти к начальному местоположению"
    }
  },
  "selectedShares": {
    "enlargePhotoButton": "Крупнее",
    "review": {
      "title": "Обзор элемента",
      "options": {
        "approve": "Одобрить",
        "reject": "Отклонить"
      }
    }
  },
  "contribute": {
    "login": {
      "title": "Войти",
      "services": {
        "arcgis": "Войти через ArcGIS",
        "facebook": "Войти через Facebook",
        "google": "Войти с помощью Google",
        "guest": "Продолжить как гость"
      },
      "loginDescription": "Для присоединения используйте одну из опций, указанных выше.",
      "loginDescriptionSingle": "Для присоединения используйте опцию, указанную выше."
    },
    "form": {
      "photo": {
        "pickFile": "Щелкните, чтобы выбрать файл",
        "choosePhoto": "Загрузить фотографию",
        "selectNew": "Использовать другую фотографию",
        "photoTooSmall": "Фотография слишком мала. Минимальный размер должен быть по крайней мере"
      },
      "location": {
        "gettingLocation": "Поиск местоположения",
        "locate": "Найти меня",
        "findOnMap": "Найти на карте",
        "findOnMapTooltip": "Щелкните на карте или перетащите эту точку, чтобы уточнить свое местоположение.",
        "saveLocation": "Сохранить местоположение",
        "search": "Поиск",
        "longitude": "Долгота",
        "latitude": "Широта",
        "nullIsland": "Пустой остров",
        "photoLocation": "Хотите использовать местоположение этой фотографии?"
      },
      "termsAndConditions": {
        "buttonShow": "Показать условия использования",
        "buttonHide": "Скрыть условия использования"
      },
      "save": "Я принимаю эти условия и отправляю данные",
      "saving": "Отправка",
      "requiredWarning": "Обязательные поля",
      "changedCloseWarning": "Вы действительно хотите закрыть приложение? Изменения будут потеряны."
    },
    "messages": {
      "contributionShownAfterReview": {
        "title": "Спасибо за участие.",
        "body": "Ваши данные были отправлены и появятся не карте после просмотра и одобрения. Проверьте через некоторое время.",
        "confirmBtn": "OK"
      },
      "contributionError": {
        "title": "Внимание",
        "body": "Произошла неопознанная ошибка, ваши данные не могут быть сохранены. Обновите страницу браузера и повторите попытку.",
        "confirmBtn": "OK"
      }
    }
  },
  "validations": {
    "fix": "Исправить!",
    "basic": {
      "noValue": "Не указано значение",
      "required": "Требуется <% атрибут %>.",
      "regex": "Атрибут <% %> не соответствует требуемому образцу.",
      "max": {
        "string": "Атрибут <% %> не может содержать более <% макс. %> знаков.",
        "number": "Атрибут <% %> должен быть меньше или равен <% макс. %>."
      },
      "acceptedTerms": "Необходимо принять условия использования перед публикацией.",
      "https": "Атрибут <% %> должен быть загружен через безопасное подключение. Для правильной загрузки URL-адрес должен начинаться с \"https://\" или \"//\".",
      "imageUrl": "Атрибут <% %> должен быть URL-адресом изображения. в большинстве случаев URL должен оканчиваться расширением \".jpg\", \".gif\". или \".png\"."
    },
    "pattern": {
      "commaSeparated": "Атрибут <% %> не должен содержать пробелов.",
      "noNewLine": "Атрибут <% attribute %> не может содержать переносов."
    },
    "arcgis": {
      "basic": {
        "arcgisSupportedHtml": "Атрибут <% attribute %> содержит неподдерживаемый HTML."
      },
      "location": {
        "notValid": "Введенное местоположение неверно, пожалуйста, попробуйте снова.",
        "noResults": "Указанное местоположение не может быть найдено. Повторите попытку и укажите наиболее точные данные."
      }
    }
  },
  "errors": {
    "actionsBtns": {
      "startFromScratch": "Начните создание новой Crowdsource Story"
    },
    "loading": {
      "heading": "Внимание",
      "invalidConfig": "Некорректная настройка",
      "inaccessibleApp": "Картографическое веб-приложение отсутствует или недоступно.",
      "invalidConfigNoApp": "ID картографического веб-приложения не указан в файле index.html приложения или в URL-адресе. Исправьте appid и повторите попытку.",
      "unspecifiedConfigOwner": "Авторизованный владелец не настроен.",
      "invalidConfigOwner": "Владелец истории не авторизован.",
      "createMap": "Не удалось создать карту",
      "notAuthorizedApp": "Вы не авторизованы для доступа к истории.",
      "notAuthorizedMap": "Вы не авторизованы для доступа к веб-карте в этой истории.",
      "notAuthorizedLayers": "Вы не авторизованы для просмотра одного или нескольких слоев веб-карты.",
      "upgradeBrowser": "<a href=\"http://browsehappy.com/\" target=\"_blank\">Пожалуйста, обновите ваш браузер</a>.",
      "mapLoadingFail": "Произошла ошибка, карта загрузилась некорректно.",
      "appLoadingFail": "Что-то пошло не так, приложение не может быть корректно загружено.",
      "crowdsourceLayerNotFound": "Что-то пошло не так, история не может найти или корректно загрузить слой карты crowdsource."
    },
    "sharing": {
      "localhost": "URL-адреса с \"localhost\" не могут быть опубликованы."
    },
    "selectedDisplay": {
      "noPhoto": "Ошибка: фотография отсутствует или недоступна."
    }
  }
});