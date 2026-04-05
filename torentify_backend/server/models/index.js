import sequelize from "../common/db.config.js";

import Admin from "./admin.model.js";
import Blog from "./blog.model.js";
import Job from "./job.model.js";
import Contact from "./contact.model.js";
const db = {};

db.sequelize = sequelize;
db.Admin = Admin(sequelize);
db.Blog = Blog(sequelize);
db.Job = Job(sequelize);
db.Contact = Contact(sequelize);
export default db;
