"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// mongoose.set('strictQuery', true);
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const getDecksController_1 = require("./controllers/getDecksController");
const createDeckController_1 = require("./controllers/createDeckController");
const deleteDeckController_1 = require("./controllers/deleteDeckController");
const getDeckController_1 = require("./controllers/getDeckController");
const createCardForDeckController_1 = require("./controllers/createCardForDeckController");
const deleteCardOnDeckController_1 = require("./controllers/deleteCardOnDeckController");
const PORT = 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http:/localhost:5000", "https:/flashcard.onrender.com"],
}));
app.use(express_1.default.json());
app.get("/decks", getDecksController_1.getDecksController);
app.post("/decks", createDeckController_1.createDeckController);
app.delete("/decks/:deckId", deleteDeckController_1.deleteDeckController);
app.get("/decks/:deckId", getDeckController_1.getDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController_1.createCardForDeckController);
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController_1.deleteCardOnDeckController);
mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});
