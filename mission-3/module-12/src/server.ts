import express, { Request, Response } from "express";
import { Pool } from "pg";
const app = express();
const port = 5000;
import dotenv from "dotenv";
import path from "path";
app.use(express.json());
dotenv.config({ path: path.join(process.cwd(), ".env") });
const pool = new Pool({
  connectionString: `${process.env.CONNECTION_STR}`,
});
const initDB = async () => {
  //   await pool.query(`
  //         CREATE TABLE IF NOT EXISTS users(
  //         id SERIAL PRIMARY KEY,
  //         name VARCHAR(100) NOT NULL,
  //         email VARCHAR(50) UNIQUE NOT NULL,
  //         age INT,
  //         phone VARCHAR(20) ,
  //         address TEXT,
  //         created_at TIMESTAMP DEFAULT NOW() ,
  //         updated_at TIMESTAMP DEFAULT NOW(),
  //         completed DEFAULT false,
  //         due_date DATE
  //         )
  //         `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        age INT,
        phone VARCHAR(20),
        address TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        completed BOOLEAN DEFAULT false,
        due_date DATE
    );
    
`);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS todos(  
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES USERS(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL ,
    descriptin TEXT ,
    completed BOOLEAN DEFAULT false ,
    due_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    )
    `);
};
initDB();
app.get("/", async (req: Request, res: Response) => {
  res.send("Next Level web development");
});
app.post("/users", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO users(name, email) VALUES($1,$2) RETURNING *`,
      [name, email]
    );
    console.log(result);
    res.status(200).json({
      success: true,
      message: "user inserted successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});
app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);
    res.status(200).json({
      success: true,
      message: "user fetched successsfuly",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [
      req.params.id,
    ]);
    res.status(200).json({
      success: true,
      message: "specific user fetched successsfuly",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});
app.put("/users/:id", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      `UPDATE users SET name=$1, email=$2 WHERE id = $3 RETURNING *`,
      [name, email, req.params.id]
    );
    res.status(200).json({
      success: true,
      message: " specific user update successsfuly",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
app.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `DELETE FROM users  WHERE id = $1 RETURNING *`,
      [req.params.id]
    );
    res.status(200).json({
      success: true,
      message: " specific user delete successsfuly",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
//  todo
app.post("/todos", async (req: Request, res: Response) => {
  const { user_id, title } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`,
      [user_id, title]
    );
    res.status(200).json({
      success: true,
      message: " todo added successsfuly",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
app.get("/todos", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM todos`);
    res.status(200).json({
      success: true,
      message: " todo fetched successsfuly",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "route not found",
    path: req.path,
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
