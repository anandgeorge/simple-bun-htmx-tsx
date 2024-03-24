const Button = () => {
    return <button hx-get="/data" hx-swap="outerHTML">Get Text</button>;
};

export default Button;