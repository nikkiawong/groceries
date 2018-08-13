$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $(".well").show();
    var items = ["item1", "item2","item3", "item4", "item5"];

    var groceries = items.map(function(item) {
        return $("input#" + item).val().toUpperCase();
    });
    groceries.sort().map(function(grocery, index) {
      $("." + items[index]).text(grocery);
    });

  });
});
