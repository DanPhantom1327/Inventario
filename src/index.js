/* function expression */
import app from "./App.js";
const main = () => {
    app.listen(app.get("port"));
    console.log(`The company's Super web server is running on port ${app.get("port")}`);
}

main();


