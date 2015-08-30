(function($){
	
	var imgs = [];
	
	var img;
	for(var a=1; a <= 12; a++){
		img = new Image();
		img.src = "images/img_" + a + ".jpg";
		img.alt = "Imagem aplicada à página de forma dinâmica";
		
		imgs.push(img);
	}
	
	var container = $('.img-container');
	var content = "Essa é alguma descrição da imagem, que seria fornecida por um script server-side!";
	
	$.each(imgs, function(index, img){
		
		var div = container.clone(true, true);
		div.find(".image").append(img);
		div.children("h3").text("Nome da Foto");
		div.children("p").text(content);
		div.css("display", "block");
		
		$('#images-list').append(div);
		
	});
	
	var lightbox = $("#lightbox");
	var lb_container = $("lb-container");
	
	$(".image img").click(function(){
		
		$(this).clone().appendTo("#lb-container");
		lightbox.css("display", "block");
		
	});
	
	$("#icon-remove").click(function(){
		
		lightbox.css("display", "none");
		lb_container.empty();
		
	})
	
}(jQuery));