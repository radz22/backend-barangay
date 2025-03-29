"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongodb_connection_1 = __importDefault(require("./config/mongodb-connection"));
const error_handler_1 = require("./middleware/error-handler");
const auth_route_1 = __importDefault(require("./routes/auth-route"));
const cencus_route_1 = __importDefault(require("./routes/cencus-route"));
const cookie_route_1 = __importDefault(require("./routes/cookie-route"));
const resident_route_1 = __importDefault(require("./routes/resident-route"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/auth", auth_route_1.default);
app.use("/api/cencus", cencus_route_1.default);
app.use("/api/cookie", cookie_route_1.default);
app.use("/api/resident", resident_route_1.default);
app.use(error_handler_1.errorHandler);
// Start the server
(0, mongodb_connection_1.default)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
