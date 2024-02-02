/*
if we have any complex structure like below
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>
</div>





*/
const parent = React.createElement(
  "div",
  { id: "parentid" },
  React.createElement(
    "div",
    { id: "child" },
   [React.createElement("h1", {}, "i am h1 tag"),React.createElement("h2", {}, "i am h2 tag")] 
  )
);

// const heading = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
