import { logger } from "./app/logging.js";
import { app } from "./app/web.js";

app.listen(3000, () => {
    logger.info("Server connection");
});
