let Slides = 
{
	SlidesList : [
		{
			"image":"slide1.jpg",
			"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image":"slide2.jpg",
			"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image":"slide3.jpg",
			"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image":"slide4.png",
			"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		}
	],

	"Init" : () => 
	{
		const Arrow = document.querySelectorAll('.arrow');
		
		for(let i = 0; i < Arrow.length; i++)
		{
			Arrow[i].addEventListener('click', (e) => {
				const Elm = e.currentTarget;
				const ElmClass = Elm.className.split(' ');

				Slides.MouveSlide(ElmClass[1]);
			})
		}
	
	},
	"MouveSlide" : (ArrowDirection) => 
	{
		
		console.log(ArrowDirection);
	}
}


Slides.Init();

