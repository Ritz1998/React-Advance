// const heading = React.createElement('h1',{},"Hello there from far away!");

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Rendering a H1 tag"),
        React.createElement("h1",{},"Rendering a H2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h2",{},"Rendering a H2 tag"),
        React.createElement("h1",{},"Rendering a H1 tag")
    ])
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)