const subChild = [
  React.createElement("h1", { id: "heading1" }, "Im H1 Tag"),
  React.createElement("h1", { id: "heading2" }, "Im H2 Tag"),
];

const child = [
  React.createElement("div", { id: "child1" }, subChild),
  React.createElement("div", { id: "child2" }, subChild),
];

const parent = React.createElement("div", { id: "parent" }, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
