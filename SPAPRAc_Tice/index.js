const HomeComponent = {
  render: () => {
    return `<h2>This is Home Page</h2>
    <p>Lorem ipsum</p>`;
  },
};

const FavouriteComponent = {
  render: () => {
    return `<h2>This is Favourites Page</h2>
      <p>Lorem ipsum</p>`;
  },
};

const BidsComponent = {
  render: () => {
    return `<h2>This is Bids Page</h2>
        <p>Lorem ipsum</p>`;
  },
};

const ItemComponent = {
  render: () => {
    return `<h2>This is Item Page</h2>
        <p>Lorem ipsum</p>`;
  },
};

const AboutComponent = {
  render: () => {
    return `<h2>This is About Page</h2>
        <p>Not lorem ipsum</p>`;
  },
};

const ErrorComponent = {
  render: () => {
    return `<h2>This is ERROR. Page 404</h2>
          <p>Not lorem ipsum</p>`;
  },
};

// Пути

const routes = [
  { path: "/", component: HomeComponent },
  { path: "favourite", component: FavouriteComponent },
  { path: "bids", component: BidsComponent },
  { path: "item", component: ItemComponent },
  { path: "about", component: AboutComponent },
];

// поиск в роуте нужного объекта + компонента
function findComponentByPath(path, routes) {
  return routes.find((route) => {
    return route.path === path;
  });
}

// в зависимости от адреса вызывать нужный компонент и его метод рендер
function router() {
  const pathArray = location.hash.split("/");
  console.log("pathArray ->", pathArray);

  let currencyPath;
  // теперь нужна проверка на случай если HomePage === undefined засунуть в него /
  if (pathArray[1] === undefined) {
    currencyPath = "/";
  } else {
    currencyPath = pathArray[1];
  }
  if (currencyPath === "") {
    // может быть равен по итогу пустой строке
    currencyPath = "/";
  }
  console.log(currencyPath);

  const { component = ErrorComponent } =
    findComponentByPath(currencyPath, routes) || {};
  document.querySelector("#app").innerHTML = component.render();
}

/* 
!!! load - это событие, которое происходит, когда веб-страница полностью загружена, включая все ресурсы, 
такие как изображения, стили и скрипты.

!!! hashchange - это событие, которое происходит, когда изменяется часть URL-адреса после символа # (хэша). 
Это может произойти, например, когда пользователь переходит по ссылке на другую страницу внутри веб-приложения, 
используя механизм маршрутизации на основе хэшей.*/

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
