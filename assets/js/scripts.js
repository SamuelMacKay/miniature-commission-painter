
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get all images with the class 'myImg' and insert them inside the modal
        var images = document.getElementsByClassName("myImg");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            img.onclick = function (evt) {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
        }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
