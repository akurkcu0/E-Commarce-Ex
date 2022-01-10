function getIsitma(){$.getJSON("product-list.json", function custom(data) {
  var content = document.getElementById("content");
  var recommendedProducts =
    data["responses"][0][0]["params"]["recommendedProducts"][
      "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"
    ];
  for (var i = 0; i < recommendedProducts.length; i++) {
    var image =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"
      ][i]["image"];
    var name =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"
      ][i]["name"];
    var price =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"
      ][i]["price"];
    var free =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"
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
