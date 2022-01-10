function getDizüstü(){
  $.getJSON("product-list.json", function custom(data) {
  var content = document.getElementById("content");
  var recommendedProducts =
    data["responses"][0][0]["params"]["recommendedProducts"][
      "Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"
    ];
  for (var i = 0; i < recommendedProducts.length; i++) {
    var image =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"
      ][i]["image"];
    var name =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"
      ][i]["name"];
    var price =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"
      ][i]["price"];
    var free =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"
      ][i]["params"]["shippingFee"];
    free = "Ücretsiz Kargo";
    name = name.substring(0, 65) + "...";
    getProduct(image,name,price,free);
  }
  $("#productSliderContent").html(productshtml);
  $("#productSlider").multislider({
    interval: 500000,
    slideAll: true,
  });
});
productshtml = "";
}