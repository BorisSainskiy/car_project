$(() => {
  let carColors = $("#colorSelector .colorItem");
  let carImg = $("img");
  carColors.on("click", function() {
    let imgPath;
    imgPath = $(this).attr("data-img-path");
    carImg.fadeOut(300, () => {
      carImg.attr("src", imgPath).fadeIn(300);
    });
  });
});
