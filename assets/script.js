let Slides = 
{
	Dots : document.querySelector('.dots'),
	Arrow : document.querySelectorAll('.arrow'),
	BannerImg : document.querySelector('.banner-img'),
	ImgBasePath : "./assets/images/slideshow/",
	BannerTxt : document.querySelector('#banner').getElementsByTagName('p')[0],
	Left : "arrow_left",
	Right : "arrow_right",
	CurrentPosition : 0,
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
		const Arrow = Slides.Arrow;
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
		const Dots = Slides.Dots;
		const DotsChildCount = Dots.childElementCount;
		let PlusOuMoins = "+";

		
		if(ArrowDirection === Slides.Left)
			PlusOuMoins = "-";

		
		if(Dots.children[eval(Slides.CurrentPosition + PlusOuMoins + "1")] 
		!== undefined )
			Slides.CurrentPosition = eval(Slides.CurrentPosition + PlusOuMoins + 1);
		else
		{
			if(Slides.CurrentPosition == (DotsChildCount - 1) )
				Slides.CurrentPosition = 0;
			else
				Slides.CurrentPosition = DotsChildCount-1;
		}

		Slides.setCurrentDot(Slides.CurrentPosition);
		Slides.UpdateContent(Slides.CurrentPosition);
	},
	"setCurrentDot" : (NewPosition) => 
	{
		Slides.RemoveDotSelected();
		const CurrentDot = Slides.Dots.children[NewPosition];
		CurrentDot.className = "dot dot_selected";
	},
	"UpdateContent" : (NewPosition) => 
	{
		Slides.BannerImg.src = Slides.ImgBasePath+Slides.SlidesList[NewPosition].image;
	    Slides.BannerTxt.innerHTML = Slides.SlidesList[NewPosition].tagLine;
	},
	"RemoveDotSelected" : () => 
	{
		//Pour mettre toutes les classes des points en "dot" uniquement
		Array.from(Slides.Dots.children).forEach(Dot => {
			Dot.className = "dot";
		});
	}
}

Slides.Init();


