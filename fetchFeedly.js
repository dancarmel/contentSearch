var list = document.createElement("ul");
var container = document.getElementById("container");
list.classList.add("list-group");
list.style.marginTop = "30px";

function sendForm() {
  var keyword = document.getElementById("keyword").value; // crate a variable that holds the search query

  fetch("https://hook.integromat.com/8vy1c5ujg5nlhpbusmin2t7wbnau38ic", {
    // use JS's fetch method to send a request with the keyword to the webhook
    method: "POST", // define the http request
    body: `${JSON.stringify(keyword)}` //attach the keyword to the webhook so we can process it in integromat
  })
    .then(res => res.json()) // wait for response. then, turn the response into json
    .then(result => resultsToHTMLList(result)); //then, run resultsToHTMLList() and insert the new json response as parameter
}
function resultsToHTMLList(results) {
  // create an html
  for (result of results) {
    console.log(result);
    var listItem = document.createElement("li");
    var item = document.createElement("p");
    var title = document.createTextNode(result.Title);
    var secondItem = document.createElement("a");
    secondItem.setAttribute("href", result.ArticleURL);
    var link = document.createTextNode(result.ArticleURL);
    item.appendChild(title);
    secondItem.appendChild(link);
    listItem.appendChild(item);
    listItem.appendChild(secondItem);
    listItem.classList.add("list-group-item");
    list.appendChild(listItem);
  }
  container.appendChild(list);
}
