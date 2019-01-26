window.onload = () => {
    // catalog
    let script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "public/catalog.js"; 
    document.getElementsByTagName("body")[0].appendChild(script2);
    // Basket
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "public/basket.js"; 
    document.getElementsByTagName("body")[0].appendChild(script);
      
}