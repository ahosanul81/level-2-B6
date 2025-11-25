import { readUsers, writeUsers } from "../helpers/fileDB";
import parseBody from "../helpers/parseBody";
import addRoutes from "../helpers/routeHelper";
import sendJson from "../helpers/sendJson";

addRoutes("GET", "/", (req, res) => {
  sendJson(res, 200, { message: "Message from node server", path: req.url });
});
addRoutes("GET", "/api", (req, res) => {
  sendJson(res, 200, { message: "Message from api", path: req.url });
});
addRoutes("POST", "/api/user", async (req, res) => {
  const body = await parseBody(req);
  const users = readUsers();
  const newUser = {
    id: Date.now(),
    ...body,
  };
  users?.push(newUser);
  writeUsers(users);
  sendJson(res, 200, { success: true, data: body, path: req.url });
});
