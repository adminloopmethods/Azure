import app from "./app.js";
import config from "./config/env.js";
import { logger } from "./utils/index.js";

const server = app.listen(config.server.port, () => {
  logger.info("Server is listening on", {
    url: `http://localhost:${config.server.port}`,
  });
});
server.on("error", (err) => {
  logger.error("Server listen error", { code: err.code, message: err.message });
  process.exit(1);
});
