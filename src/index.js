import app from "./app.js";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.info(`Server is listening on ${PORT}`);
});

export default server;