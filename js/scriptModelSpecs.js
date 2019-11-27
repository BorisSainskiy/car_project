let modelSpecs,
  modelPrice,
  modelPriceDollar,
  modelSpecsHolder,
  modelPriceHolder,
  modelPriceHolderDollar;
modelSpecsHolder = $("#modelSpecs");
modelPriceHolder = $("#modelPrice");
modelPriceHolderDollar = $("#modelPriceUSD");
modelPrice = 0;
modelSpecs = "";
let form = $("#autoForm input").on("change", () => {
  calculatePrice();
  compileSpecs();
});
let calculatePrice = () => {
  modelPrice = parseInt($("input[name=engine]:checked", "#autoForm").val());
  modelPrice += parseInt(
    $("input[name=transmission]:checked", "#autoForm").val()
  );
  modelPrice += parseInt($("input[name=package]:checked", "#autoForm").val());
  modelPriceHolder.text(modelPrice + " грн");
  modelPriceDollar = Math.floor(modelPrice / 24);
  modelPriceHolderDollar.text("$ " + modelPriceDollar);
};

let compileSpecs = () => {
  modelSpecs = $("input[name=engine]:checked + label", "#autoForm").text();
  modelSpecs +=
    ", " + $("input[name=transmission]:checked + label", "#autoForm").text();
  modelSpecs +=
    ", " + $("input[name=package]:checked + label", "#autoForm").text();
  modelSpecsHolder.text(modelSpecs);
};
