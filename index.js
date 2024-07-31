import express from "express";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 4000;

// Habilitando PUB
app.set("view engine", "pug");

//Definir la carpeta pública
app.use(express.static("public"));

// Agregando router
app.use("/", router);

app.listen(port, () => {
  console.log(`Servidor listo en el puerto ${port}`);
});
