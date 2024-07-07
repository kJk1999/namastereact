const heading = React.createElement("div", { id: "heading", className: "head" },
    [React.createElement("div", {},
        [React.createElement("h1", {}, "Hello WOrld I am Heading1"), React.createElement("h2", {}, "Hello WOrld I am Heading2")],
    ), React.createElement("div", {}, [React.createElement("h1", {}, "Hello WOrld I am Heading1"), React.createElement("h2", {}, "Hello WOrld I am Heading2")],
    )])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)