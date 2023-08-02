# Kurojam

![KuroJam](https://i.postimg.cc/G2bg4wWP/Screenshot-2023-08-02-at-19-36-38.png)

## Descripción 📖

La KuroJam es un evento de tecnologia donde se busca que los participantes desarrollen un proyecto segun un tema seleccionado en directo.

## Cómo contribuir 🤔

Para contribuir a este proyecto, es necesario tener instalado el CLI de vercel para probar los endpoint de API localmente.

```
pnpm i -g vercel - yarn global add vercel - npm i -g vercel
```

Al hacer fork del proyecto, instala las dependencias y ejecuta el proyecto localmente.

```
vercel dev
```

## Probar la base de datos 📦

Si quisieras emular la base de datos en local, debes incluir un archivo .env con las variables de entorno de la base de datos.

```
VITE_REDIS_URL=redis://localhost:6379

```
