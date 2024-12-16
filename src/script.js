function st_random() {
  $("#ss-img").attr("src", "https://mkws.ac.th/prapatan01/app/mk-ss.gif");
  const max = 30;
  const min = 1;
  let ssimg = "";
  $("#b_start").hide();

  setTimeout(function () {
    const ssNumber = Math.floor(Math.random() * (max - min)) + min;
    ssimg = `https://mkws.ac.th/prapatan01/${ssNumber}.jpg`;
    $("#ss-img").attr("src", ssimg);
    $("#b_back").show();
  }, 3000);
}
