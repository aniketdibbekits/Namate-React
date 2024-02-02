in react we use React.createElement to create any element.it takes three arguments("tag,{this is the place where you give attributes to tags},"content") eg ("h1",{id:"heading"},"Rachi")
you need to create an root to do all your dom manupulation ie.ReactDOM.createRoot(getidof root)
render the root root.render()