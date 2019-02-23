function sendForm() {
  // crate a variable that holds the valu
  var keyword = document.getElementById("keyword");
  var htmlRequest = new XMLHttpRequest();
  htmlRequest.open(
    "POST",
    "https://hook.integromat.com/8vy1c5ujg5nlhpbusmin2t7wbnau38ic"
  );

  htmlRequest.onreadystatechange = function() {
    if (htmlRequest.readyState === 4 && htmlRequest.status === 200) {
      var parsedjson = JSON.parse(htmlRequest.responseText);
      //   console.log(parsedjson);
      var list = document.createElement("ul");
      var container = document.getElementById("container");
      list.classList.add("list-group");
      list.style.marginTop = "30px";
      for (result of parsedjson) {
        console.log(result);
        var listItem = document.createElement("li");
        var item = document.createElement("p"); // Create a <button> element
        var title = document.createTextNode(result.Title);
        var secondItem = document.createElement("a"); // Create a text node
        var link = document.createTextNode(result.ArticleURL);
        item.appendChild(title);
        secondItem.appendChild(link);
        listItem.appendChild(item);
        listItem.appendChild(secondItem); // Append the text to <button>
        listItem.classList.add("list-group-item");
        list.appendChild(listItem);
        // list.appendChild(secondItem); // Append <button> to <body>
      }
      container.appendChild(list);
    }
  };
  htmlRequest.send(keyword.value);
}
