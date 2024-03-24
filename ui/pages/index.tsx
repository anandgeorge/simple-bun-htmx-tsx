import Button from "../components/Button"

const page = () => {
    return <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script src="https://unpkg.com/htmx.org@1.9.11"></script>
    </head>
    <body>
        <h1>Bun, TSX, HTMX</h1>
        <Button />
    </body>
    </html>
}

export default page