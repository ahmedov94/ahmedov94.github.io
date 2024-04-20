import {
  F as e,
  P as t,
  T as a,
  I as i,
  C as s,
  R as r,
  S as o,
  a as n,
  b as l,
  c,
  $ as d,
  d as p,
  e as g,
} from "./vendor.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const a of e)
        if ("childList" === a.type)
          for (const e of a.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        "use-credentials" === e.crossorigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossorigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})(),
  e.use([t, a, i, s, r, o, n, l, c]);
const m = {},
  u = function (e, t) {
    return t && 0 !== t.length
      ? Promise.all(
          t.map((e) => {
            if ((e = `${e}`) in m) return;
            m[e] = !0;
            const t = e.endsWith(".css"),
              a = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${a}`)) return;
            const i = document.createElement("link");
            return (
              (i.rel = t ? "stylesheet" : "modulepreload"),
              t || ((i.as = "script"), (i.crossOrigin = "")),
              (i.href = e),
              document.head.appendChild(i),
              t
                ? new Promise((e, t) => {
                    i.addEventListener("load", e),
                      i.addEventListener("error", t);
                  })
                : void 0
            );
          })
        ).then(() => e())
      : e();
  };
function f(e) {
  const { items: t, loadItem: a } = e;
  return () =>
    d(
      "div",
      { class: "block item-cards" },
      (t.value || t).map((e) =>
        d(
          "a",
          { href: "#", onClick: () => a(e), class: "item-card", key: e.id },
          d(
            "div",
            { class: "item-card-image" },
            d("img", {
              src: e.image,
              onLoad: (e) => e.target.classList.add("loaded"),
            })
          ),
          d("div", { class: "item-card-title" }, e.title),
          d("div", { class: "item-card-price" }, e.price, " руб.")
        )
      )
    );
}

const h = p({
  state: 
  {
    items: [
      {
        id: 1,
        title: "Американо",
        description:
          "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
        ingredients: ["Brewed Espresso"],
        image: "images/catalog/no.jpg",
        price: 100,
        categoryId: 1,
      },
      {
        id: 2,
        title: "Ристретто",
        description:
          "Espresso meets a dollop of whipped cream to enhance the rich and caramelly flavors of a straight-up shot.",
        ingredients: ["Brewed Espresso", "Whipped Cream", "Vanilla Syrup"],
        image: "images/catalog/no.jpg",
        price: 100,
        categoryId: 1,
      },
      {
        id: 3,
        title: "Эспрессо",
        description:
          "Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Enjoy it topped with whipped cream and real pumpkin-pie spices.",
        ingredients: [
          "Milk",
          "Pumpkin Spice Sauce",
          "Brewed Espresso",
          "Whipped Cream",
        ],
        image: "images/catalog/no.jpg",
        price: 100,
        categoryId: 1,
      },
      {
        id: 4,
        title: "Лунго",
        description:
          "Oatmilk and signature espresso are intentionally combined with a hint of honey and a toasted honey topping—a savory tribute to all things sweet and salty.",
        ingredients: [
          "Oatmilk",
          "Brewed Espresso",
          "Honey Blend",
          "Toasted Honey Topping",
        ],
        image: "images/catalog/no.jpg",
        price: 100,
        categoryId: 1,
      },
      {
        id: 5,
        title: "Капучино",
        description:
          "Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 2,
        price: 150,
      },
      {
        id: 6,
        title: "Флэт Уайт",
        description:
          "We add freshly steamed milk and cinnamon dolce-flavored syrup to our classic espresso, topped with sweetened whipped cream and a cinnamon dolce topping to bring you specialness in a treat.",
        ingredients: [
          "Milk",
          "Brewed Espresso",
          "Cinnamon Dolce Syrup",
          "Whipped Cream",
        ],
        image: "images/catalog/no.jpg",
        categoryId: 2,
        price: 100,
      },
      {
        id: 7,
        title: "Мокачино",
        description:
          "Small-lot espresso balanced with steamed milk and a light layer of foam forms a perfectly handcrafted latte.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 2,
        price: 150,
      },
      {
        id: 8,
        title: "Латте",
        description:
          "House-made hazelnut-praline-infused milk combined with our small-lot  espresso—a true character of sweetly nut love.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 2,
        price: 150,
      },
      {
        id: 9,
        title: "Раф",
        description:
          "Extra-smooth espresso, velvety steamed milk and vanilla syrup come together to create a delightful new twist on a beloved espresso classic. An ideal cup for those who prefer a lighter-roasted coffee.",
        ingredients: ["Milk", "Brewed Espresso", "Vanilla Syrup"],
        image: "images/catalog/no.jpg",
        categoryId: 2,
        price: 150,
      },
      {
        id: 10,
        title: "Какао",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 1,
        price: 50,
      },
      {
        id: 11,
        title: "Гляссе",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 3,
        price: 100,
      },
      {
        id: 12,
        title: "Фраппе",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 3,
        price: 150,
      },
      {
        id: 13,
        title: "Айс Фюри",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 3,
        price: 200,
      },
      {
        id: 14,
        title: "Айс Латте",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 3,
        price: 150,
      },
      {
        id: 15,
        title: "Бамбл на соке",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 3,
        price: 150,
      },
      {
        id: 16,
        title: "Колд Брю",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 3,
        price: 100,
      },
      {
        id: 17,
        title: "Орео",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 4,
        price: 150,
      },
      {
        id: 18,
        title: "Сникерс",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 4,
        price: 150,
      },
      {
        id: 19,
        title: "Пеликан",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 4,
        price: 150,
      },
      {
        id: 20,
        title: "Черника",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 4,
        price: 180,
      },
      {
        id: 21,
        title: "Малина",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 4,
        price: 180,
      },
      {
        id: 22,
        title: "Клубника",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 4,
        price: 180,
      },
      {
        id: 23,
        title: "Ежевика",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 4,
        price: 180,
      },
      {
        id: 24,
        title: "Ягодный микс",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 4,
        price: 200,
      },
      {
        id: 25,
        title: "Молочно банановый",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 4,
        price: 150,
      },
      {
        id: 26,
        title: "Шоколадно банановый",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 4,
        price: 150,
      },
      {
        id: 27,
        title: "Махито классический",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 5,
        price: 150,
      },
      {
        id: 28,
        title: "Махито клубничный",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 5,
        price: 150,
      },
      {
        id: 29,
        title: "Махито апельсин",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 5,
        price: 150,
      },
      {
        id: 30,
        title: "Голубая лагуна",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 5,
        price: 150,
      },
      {
        id: 31,
        title: "Апельсин маракуя",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 5,
        price: 150,
      },
      {
        id: 32,
        title: "Манго маракуя",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 5,
        price: 150,
      },
      {
        id: 33,
        title: "Апельсиновый сок",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 5,
        price: 100,
      },
      {
        id: 34,
        title: "Гранатовый сок",
        description:
          "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        ingredients: ["Milk", "Brewed Espresso"],
        image: "images/catalog/no.jpg",
        categoryId: 5,
        price: 100,
      },
    ],
    categories: [
      { id: 1, title: "Черное кофе" },
      { id: 2, title: "Кофе с молоком" },
      { id: 3, title: "Холодное кофе" },
      { id: 4, title: "Коктейли" },
      { id: 5, title: "Напитки" },
    ],
    filterCategoryId: null,
    cart:
      ((y = "cart"),
      (v = []),
      localStorage[y] ? JSON.parse(localStorage[y]) : v),
  },
  getters: {
    filterCategoryId: ({ state: e }) => e.filterCategoryId,
    filteredItems: ({ state: e }) =>
      e.filterCategoryId
        ? e.items.filter((t) => t.categoryId === e.filterCategoryId)
        : e.items,
    items: ({ state: e }) => e.items,
    categories: ({ state: e }) => e.categories,
    cart: ({ state: e }) => e.cart,
    cartTotal({ state: e }) {
      let t = 0;
      if (
        (e.cart.forEach((e) => {
          t += e.quantity * e.item.price;
        }),
        (t = String(t)),
        t.split(".")[1] && 2 !== t.split(".")[1].length)
      ) {
        let e = t.split(".")[1].slice(0, 2);
        1 === e.length && (e = `${e}0`), (t = `${t.split(".")[0]}.${e}`);
      } else t.split(".")[1] || (t = `${t}.00`);
      return t;
    },
  },
  actions: {
    setFilterCategoryId({ state: e }, t) {
      e.filterCategoryId = t;
    },
    emptyCart({ state: e }) {
      (e.cart = []), (localStorage.cart = JSON.stringify(e.cart));
    },
    updateCartQuanity({ state: e }, { quantity: t, obj: a }) {
      (a.quantity = t),
        0 === t && e.cart.splice(e.cart.indexOf(a), 1),
        (e.cart = [...e.cart]),
        (localStorage.cart = JSON.stringify(e.cart));
    },
    addToCart({ state: e }, { item: t }) {
      const a = e.cart.filter((e) => e.item.id === t.id)[0];
      a ? (a.quantity += 1) : e.cart.push({ quantity: 1, item: t }),
        (e.cart = [...e.cart]),
        (localStorage.cart = JSON.stringify(e.cart));
    },
  },
});
var y, v;
const b = [
  {
    path: "/",
    component: function (e, t) {
      const { $f7router: a, $store: i, $theme: s } = t,
        {
          cart: r,
          cartTotal: o,
          filteredItems: n,
          categories: l,
          filterCategoryId: c,
        } = i.getters,
        p = (e) => {
          h.dispatch("setFilterCategoryId", e);
        },
        g = (e) => {
          a.navigate(`/item/${e.id}/`, { props: { item: e } });
        };
      return () =>
        d(
          "div",
          { class: "page" },
          d(
            "div",
            { class: "navbar navbar-transparent" },
            d("div", { class: "navbar-bg" }),
            d(
              "div",
              { class: "navbar-inner" },
              d("div", { class: "title" }, "GM Coffee")
            )
          ),
          r.value.length > 0 &&
            d(
              "div",
              { key: "fab", class: "fab fab-extended fab-center-bottom" },
              d(
                "a",
                { href: "/cart/" },
                s.ios
                  ? d("i", { class: "icon f7-icons" }, "cart_fill")
                  : d("i", { class: "icon material-icons" }, "shopping_cart"),
                d(
                  "span",
                  { class: "fab-text" },
                  d("span", null, "Корзина"),
                  d("span", null, o.value, " руб.")
                )
              )
            ),
          d(
            "div",
            { class: "page-content" },
            d("div", { class: "page-title" }, "GM Coffee"),
            d(
              "div",
              { class: "page-title page-subtitle" },
              "Вкус так же хорош, как и запах."
            ),
            d(
              "div",
              { class: "block block-filter" },
              d(
                "a",
                {
                  href: "#",
                  class:
                    "button button-round " +
                    (null === c.value ? "button-fill" : ""),
                  onClick: () => p(null),
                },
                "Все"
              ),
              l.value.map((e) =>
                d(
                  "a",
                  {
                    href: "#",
                    class:
                      "button button-round " +
                      (c.value === e.id ? "button-fill" : ""),
                    onClick: () => p(e.id),
                  },
                  e.title
                )
              )
            ),
            d(f, { "load-item": g, items: n })
          )
        );
    },
  },
  {
    path: "/item/:id/",
    popup: {
      asyncComponent: () =>
        u(
          () => import("./item.f7.js"),
          [
            "assets/item.f7.js",
            "assets/item.f7.css",
            "assets/vendor.js",
          ]
        ),
      swipeToClose: "to-bottom",
    },
  },
  {
    path: "/cart/",
    popup: {
      asyncComponent: () =>
        u(
          () => import("./cart.f7.js"),
          [
            "assets/cart.f7.js",
            "assets/cart.f7.css",
            "assets/vendor.js",
          ]
        ),
      swipeToClose: "to-bottom",
    },
  },
];
function w(e, { $f7: t, $el: a, $onMounted: i, $onBeforeUnmount: s }) {
  const r = !localStorage.onboardingFinished;
  let o, n;
  const l = () => {
    o && o.destroy();
  };
  i(() => {
    r &&
      ((n = t.popup.create({ el: a.value, opened: !0 })),
      n.open(!1),
      (o = t.swiper.create({
        el: ".onboarding .swiper-container",
        observer: !0,
        observeParents: !0,
        speed: 600,
        pagination: { el: ".onboarding .swiper-pagination" },
      })));
  }),
    s(() => {
      n && n.destroy(), l();
    });
  const c = () => {
      o.slideNext();
    },
    p = () => {
      t.popup.close(".popup-onboarding", !0),
        (localStorage.onboardingFinished = !0);
    };
  return () =>
    r
      ? d(
          "div",
          {
            class:
              "popup popup-onboarding onboarding popup-tablet-fullscreen modal-in",
            onPopupClosed: l,
          },
          d(
            "div",
            { class: "swiper-container" },
            d("div", { class: "swiper-pagination" }),
            d(
              "div",
              { class: "swiper-wrapper" },
              d(
                "div",
                { class: "swiper-slide" },
                d(
                  "div",
                  { class: "onboarding-content" },
                  d(
                    "div",
                    { class: "onboarding-image" },
                    d("img", { src: "images/onboarding-intro.png" })
                  ),
                  d(
                    "div",
                    { class: "onboarding-title" },
                    "Coffee so good, your taste buds will love it"
                  ),
                  d(
                    "div",
                    { class: "onboarding-text" },
                    "The best grain, the finest roast, the most powerful flavor."
                  ),
                  d(
                    "div",
                    { class: "onboarding-next" },
                    d(
                      "a",
                      {
                        href: "#",
                        class: "button button-large button-round button-fill",
                        onClick: c,
                      },
                      "Next"
                    )
                  )
                )
              ),
              d(
                "div",
                { class: "swiper-slide" },
                d(
                  "div",
                  { class: "onboarding-content" },
                  d(
                    "div",
                    { class: "onboarding-image" },
                    d("img", { src: "images/onboarding-cups.png" })
                  ),
                  d(
                    "div",
                    { class: "onboarding-title" },
                    "Discover our signature espresso"
                  ),
                  d(
                    "div",
                    { class: "onboarding-text" },
                    "We've compiled a wide selection of blends and beans to fill your cup"
                  ),
                  d(
                    "div",
                    { class: "onboarding-next" },
                    d(
                      "a",
                      {
                        href: "#",
                        class: "button button-large button-round button-fill",
                        onClick: p,
                      },
                      "Let's Coffee!"
                    )
                  )
                )
              )
            )
          )
        )
      : d("div", null);
}
new e({
  name: "GM Coffee",
  theme: "auto",
  el: "#app",
  component: () => () =>
    d(
      "div",
      { id: "app" },
      d("div", { class: "view view-main view-init", "data-url": "/" }),
      d(w, null)
    ),
  darkMode: "auto",
  colors: { primary: "#027c43" },
  store: h,
  routes: b,
  serviceWorker: { path: "/service-worker.js" },
  on: {
    init() {
      g("html").hasClass("dark") ||
        g('meta[name="theme-color"').attr("content", "#eee7e1");
    },
  },
});
