"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//config .env
dotenv_1.default.config();
//crate express app
const app = (0, express_1.default)(); //creamos una instancia de espress
const port = process.env.PORT || 3000; //puerto de la aplicacion
//primera ruta
app.get('/', (req, res) => {
    //mandamos una respuesta cuando se haga una peticion
    res.send({ hola: 'saludo2' });
});
app.get('/hello', (req, res) => {
    //mandamos una respuesta cuando se haga una peticion
    res.send({ hola: 'como estas' });
});
//ejecutar la app
app.listen(port, () => {
    console.log(`[RUN] http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map