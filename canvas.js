$(document).ready(function(e) {
  (function($) {
    $("#myForm").on("submit", function(e) {
      e.preventDefault();
      var myMessage = $("#myMessage").val();

      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      var x = canvas.width / 2;
      var y = canvas.height / 2;

      // Create gradient
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop("0", "magenta");
      gradient.addColorStop("0.5", "blue");
      gradient.addColorStop("1.0", "red");
      // Fill with gradient
      ctx.fillStyle = gradient;
      ctx.font = "120px helvetica";
      ctx.textAlign = "center";
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText(myMessage, x, y + 7.5);
    });

    function downloadCanvas(link, canvasId, filename) {
      link.href = document.getElementById(canvasId).toDataURL();
      link.download = filename;
    }

    document.getElementById("myDownload").addEventListener(
      "click",
      function() {
        var myMessage = $("#myMessage").val();
        downloadCanvas(this, "myCanvas", myMessage + ".jpg");
      },
      false
    );
  })(jQuery);
});
