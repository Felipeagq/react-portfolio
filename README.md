This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# React Class
## node_modules
Es la carpeta de todos los modulos
## pages
- Es la carpeta donde estan todas las pagina
- _app.js es el padre, donde se va renderizar todo

## Preparamos el entorno
- https://react.semantic-ui.com/
- instalacion de librerias de estilo para **react** y **css**  ````npm install semantic-ui-react semantic-ui-css````
- ````sass```` compilador de estilos.
- Eliminamos la carpeta ````styles/Home.module.css```` , borramos la importacion en el ````index.js````.
- Cambiamos el archivo ````styles/global.css```` --> ````styles/global.scss````.
````js
/* _app.js */
import '../styles/globals.scss'
import "semantic-ui-css/semantic.min.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
````
- dentro de ````styles```` creamos ````styles/index.scss```` y ````styles/colors.scss````.
- Creamos una carpeta llamada ````components````.


## Crear un componente
- crear la carpeta del ````componente````.
- Creo 3 archivos:
  - ````componente.js```` del componente
  - ````componente.scss```` del componente
  - ````index.js```` de la exportaci??n del componente.
- nos vamos al ````componente.js```` del componente y corremos ````rfc```` (reactFunctionalComponent).
- exportamos el componente  ````export { default } from "./Layout";```` en ````index.js```` del componente.
- me dirijo a ````styles/index.scss```` e importo los estilos de mi componente ````@import "../components/componente/componente.scss";````