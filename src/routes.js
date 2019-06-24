import React from 'react';
import { Redirect } from 'react-router-dom';
import App from './App.js';
import { Connect, Dashboard } from 'screens';

/*
  Centralized route definition
  Used with react-router-config
*/
export const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        name: 'default',
        exact: true,
        render: ({ isAuthenticated }) =>
          isAuthenticated ? <Redirect to="/dashboard" /> : <Connect />,
      },
      {
        path: '/connect',
        name: 'connect',
        exact: true,
        component: Connect,
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        render: ({ isAuthenticated }) => {
          return isAuthenticated ? <Dashboard /> : <Redirect to="/" />;
        },
      },
    ],
  },
];

/*
  Build an object that can be used to access path by route name within a link
  e.g. {
    <route_name>: <route_path>
    ...
  }
  Was mainly usefull when we had nested routes
*/

function flattenRoutes(into, node) {
  if (node == null) return into;
  if (Array.isArray(node)) return node.reduce(flattenRoutes, into);
  into.push(node);
  return flattenRoutes(into, node.routes);
}

export function pathByName(routes) {
  const out = flattenRoutes([], routes);
  return out.reduce((accu, { name, path }) => {
    accu[name] = path;
    return accu;
  }, {});
}
