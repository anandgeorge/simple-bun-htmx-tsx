import { renderToString } from "react-dom/server";
import Index from "./ui/pages/index";
import Data from "./ui/pages/data";

const server = Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    switch (url.pathname) {
      case "/":
        return new Response(
          renderToString(<Index />),
          {
            headers: {
              "Content-Type": "text/html",
            },
          }
        );
        break;

      case "/data":
        return new Response(
          renderToString(<Data />),
          {
            headers: {
              "Content-Type": "text/html",
            },
          }
        );
        break;

      default:
        return new Response("<p>404</p>", {
          headers: {
            "Content-Type": "text/html",
          },
        });
        break;
    }
  },
});
