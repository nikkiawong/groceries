$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var items = ["item1", "item2","item3", "item4", "item5"];

    var groceries = items.map(function(item) {
        var itemInput = $("input#" + item).val();
        $("." + item).text(itemInput);
    });


  })
})
