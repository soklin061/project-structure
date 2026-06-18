export const API_ENDPOINTS = {
  CATEGORIES: {
    GET_ALL: '/products/categories',
    GET_ONE: '/products/category/:category',
  },

  PRODUCTS: {
    GET_ALL: '/products',
    GET_ONE: '/products/:id',
    SEARCH: '/products/search?q=:query',
    PAGINATION: '/products?limit=:limit&skip=:skip',
    ADD: '/products/add',
    UPDATE: '/products/:id',
    DELETE: '/products/:id',
  },

  USERS: {
    GET_ALL: '/users',
    GET_ONE: '/users/:id',
  },

  POSTS: {
    GET_ALL: '/posts',
    GET_ONE: '/posts/:id',
  },

  COMMENTS: {
    GET_ALL: '/comments',
    GET_ONE: '/comments/:id',
  },

  TODOS: {
    GET_ALL: '/todos',
    GET_ONE: '/todos/:id',
  },

  CARTS: {
    GET_ALL: '/carts',
    GET_ONE: '/carts/:id',
  },

  RECIPES: {
    GET_ALL: '/recipes',
    GET_ONE: '/recipes/:id',
  },

  QUOTES: {
    GET_ALL: '/quotes',
    GET_ONE: '/quotes/:id',
  },
};