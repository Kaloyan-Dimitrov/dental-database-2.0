"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// create a simple server
const app = (0, express_1.default)();
// listen to localhost
app.listen(3000, () => {
    console.log('listening on port 3000');
});
// send a message to the client
app.get('/', (req, res) => {
    return res.send('Hello World!');
});
//# sourceMappingURL=index.js.map