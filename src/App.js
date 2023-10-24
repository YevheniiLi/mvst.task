import "./styles/styles.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Sidebar from "./component/Sidebar/Sidebar";
// import {queryComponent} from './useQuery';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="outline"></div>
      <div className="main-container">
        <Sidebar />
        <Hero />
        {/* {queryComponent()} */}
      </div>
    </div>
  );
}

export default App;

//  Создать веб-приложение, используя React и TypeScript.

// Использовать официальное GitHub API для получения репозиториев пользователя.  >> https://docs.github.com/en/rest?apiVersion=2022-11-28

// взять апи с гитхаба и установить гит хаб цла  add git api and install gip cli

// Реализовать интерфейс, который позволяет пользователям взаимодействовать с репозиториями, включая функцию поиска по имени.
// Обеспечить адаптивный дизайн, соответствующий принципам хорошего пользовательского опыта.
// Использовать систему контроля версий Git для управления кодом.
// Можно использовать дополнительные плагины или модули для более эффективной разработки.

// { Дополнительные плюсы к задаче }
// Провести тестирование приложения (дополнительный плюс, если вы добавите тесты). add cypress
// Документировать код (дополнительный плюс). doc code, add comments to ts and react functions
// Развернуть приложение, например, на платформах, таких как Netlify или Heroku (дополнительный плюс). deploy on netlify or heroku
// Если вы готовы к вызову, использовать GitHub API v4, построенный с использованием GraphQL (дополнительный плюс). add github apiv4
// Написать README-файл, включая краткое описание проекта, инструкции по его запуску, инструкции по запуску тестов и предложения по будущим улучшениям (дополнительный плюс).

//
// - +1, если вы добавите сборник рассказов и разделите компоненты create components✅

// - +1, если пишешь тесты add cypress ✅

// - +1, если развернуть его где-нибудь (например, [Netlify](https://www.netlify.com/) или [Heroku](https://www.heroku.com/))

// - +1, если ваш [код задокументирован](https://google.github.io/styleguide/jsguide.html#jsdoc)

// - +1 Если вы готовы принять вызов, используйте [v4 API](https://docs.github.com/en/graphql), созданный с использованием GraphQL.✅

// - +1 Если вы напишете README, включающий
//     - Краткое описание проекта.
//     - Инструкция по запуску
//     - Инструкции по запуску набора тестов.
//     - Будущие улучшения
