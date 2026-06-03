import { app } from "./app";

const PORT = 3001;

app.listen(PORT, () => {
  console.log(
    `Healthcare Procurement API running on http://localhost:${PORT}`
  );
});
