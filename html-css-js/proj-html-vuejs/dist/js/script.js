const app = new Vue({

	el: '#app',

	data: {

		// header menu
		headerLeftMenu: [
			{ "text": 'home' },
			{ "text": 'pages' },
			{ "text": 'menu'}
		],
		headerRightMenu: [
			{ "text": 'event' },
			{ "text": 'blog' },
			{ "text": 'landing'}
		],
		// header menu

		// header slider
		headerSlider: [
			{ "src": './img/h3-rev-img-2.png' },
			{ "src": './img/h3-rev-img-4.png' },
			{ "src": './img/h3-rev-img-6.png' }
		],

		sliderIndex: 0,
		// header slider

		// section one
		sectionOneTopRow: [
			{ "src": './img/h3-img-1.jpg' },
			{ "src": './img/h3-img-2.jpg' },
			{ "src": './img/h3-img-3.jpg' },
			{ "src": './img/h3-img-4.jpg' }
		],

		sectionOneSlider: [
			{ 
				"phrase": '"forget the trendy pizza shop, this hidden spot makes the best new york-style pizza slice in naples"',
				"source": 'washington post 2018'
			},
			// {
			// 	"phrase": '"phrase one"',
			// 	"source": 'source one'
			// },
			// {
			// 	"phrase": '"phrase two"',
			// 	"source": 'source three'
			// },
			// {
			// 	"phrase": '"phrase four"',
			// 	"source": 'source four'
			// }
		],

		sectionOneIndex: 0,
		// section one

		// section five
		sectionFivePizzas: {
			"bismark": {
				"src": './img/h3-product-img-1a-100x100.png',
				"price": '$30.00'
			},
			"fiori di zucca": {
				"src": './img/h3-product-img-2a-150x150.png',
				"price": '$7.00 - $50.00'
			},
			"valdostana": {
				"src": './img/h3-product-img-3a-150x150.png',
				"price": '$55.00'
			},
			"pizza tartufata": { 
				"src": './img/h3-product-img-4a-150x150.png',
				"price": '$45.00'
			},
			"francescana": { 
				"src": './img/h3-product-img-5a-150x150.png',
				"price": '$25.00'
			},
			"campagnola": { 
				"src": './img/h3-product-img-6a-100x100.png',
				"price": '$50.00 - $95.00'
			}	
		},
		// section five

		// section seven
		bookTable: {
			"persons": [
				'1 Person',
				'2 Person',
				'3 Person',
				'4 Person',
				'5 Person',
				'6 Person',
				'7 Person',
				'8 Person',
				'9 Person',
				'10 Person'
			],
			"calendar": [
				"02/23/2021",
				"02/24/2021",
				"02/25/2021",
				"02/26/2021",
				"02/27/2021",
				"02/28/2021",
				"03/01/2021"
			],
			"hours": [
				"12:00 pm",
				"12:30 pm",
				"13:00 pm",
				"13:30 pm",
				"14:00 pm",
				"14:30 pm",
				"15:00 pm"
			]
		},
		// section seven

		// footer
		restaurants: {
			"firstRestaurant": { 
				"street": '1614 E. Bell Rd #104',
				"city": 'Salerno, AZ 85022',
				"telephone": '(602) 867-1010'
			},
			"secondRestaurant": {
				"street": '204 E. Pizzetta Tommaso',
				"city": 'Sorrento, AZ 85022',
				"telephone": '(358) 867-1010'
			},
			"thirdRestaurant": {
				"street": 'Viale Puglia 54',
				"city": 'Torre Del Greco AZ 85022',
				"telephone": '(359) 867-1010'
			},
			"fourthRestaurant": {
				"street": 'Corso Italia AA',
				"city": 'Naples, AZ 85022',
				"telephone": '(989) 867-1010'
			}
		},

		workingHours: {
			"monday": {
				"hours": '',
				"text": 'Kitchen Closed'
			},
			"tuesday": {
				"hours": '9:00 – 22:00',
				"text": ''
			},
			"wednesday": {
				"hours": '9:00 – 22:00',
				"text": ''
			},
			"thursday": {
				"hours": '9:00 – 22:00',
				"text": ''
			},
			"friday": {
				"hours": '9:00 – 22:00',
				"text": ''
			},
			"saturday": {
				"hours": '', "text":
				'Saturday 11am to midnight'
			},
			"sunday": {
				"hours": '9:00 – 22:00',
				"text": ''
			},
		}
		// footer
		
	},

	methods: {
		next() {
      this.sliderIndex = this.sliderIndex + 1
			if (this.sliderIndex >= this.headerSlider.length) {
				this.sliderIndex = 0
      }
		},
		prev() {
			this.sliderIndex = this.sliderIndex - 1
			if (this.sliderIndex < 0) {
				this.sliderIndex = this.headerSlider.length - 1
      }
		},
		// dotSelected(dotIndex) {
		// 	this.sliderIndex = dotsliderIndex
		// }
		scrollToTop() {
			window.scrollTo(0,0);
 		}
	},

	mounted() {

	}

})

Vue.config.devtools = true