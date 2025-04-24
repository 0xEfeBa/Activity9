$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		evt.preventDefault(); // Varsayılan link davranışını iptal et

		var clickedLink = $(this); // Tıklanan linki sakla

		// Mevcut başlık ve resmi aynı anda kaybet
		$("#caption").fadeOut(1000);
		$("#image").fadeOut(1000, function() {
			// Resim kaybolduktan sonra çalışacak callback fonksiyonu

			var imageURL = clickedLink.attr("href");
			$("#image").attr("src", imageURL); // Yeni resim kaynağını ayarla

			var caption = clickedLink.attr("title");
			$("#caption").text(caption); // Yeni başlık metnini ayarla

			// Yeni başlık ve resmi aynı anda görünür yap
			$("#caption").fadeIn(1000);
			$("#image").fadeIn(1000);
		}); // image fadeOut callback sonu
		
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready