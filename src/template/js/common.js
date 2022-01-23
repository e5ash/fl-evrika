var html = document.querySelector('html'),
		body = document.querySelector('body'),
		wrap = document.querySelector('.wrap');

document.addEventListener('DOMContentLoaded', ()=>{
	// Fields
	let fields = document.querySelectorAll('.field');
	 
	if (fields) {
		fields.forEach((field)=>{
			new Field(field);
		});
	}


	// Checks
	let checks = document.querySelectorAll('.check');
	 
	if (checks) {
		checks.forEach((check)=>{
			new Check(check);
		});
	}


	// Selects
	var selects = document.querySelectorAll('.select');
	if (selects) {
			selects.forEach(select => {
		  new Select(select);
		});

		document.addEventListener('click', (event)=>{
			let openSelects = document.querySelectorAll('.select.--open');
			if (!event.target.closest('.select') && openSelects) {
				openSelects.forEach((select)=> {
					select.classList.remove(Select.classOpen);
				});
			}
		})
	}

	let toggleAuthBtns = document.querySelectorAll('.toggle-auth');
	let auth = document.querySelector('.auth');
	toggleAuthBtns.forEach((btn)=>{
		btn.addEventListener('click', (event)=>{
			event.preventDefault();
			auth.classList.toggle('--show');
		});
	});


	let toggleNavBtns = document.querySelectorAll('.toggle-nav');
	let nav = document.querySelector('.header__nav');
	toggleNavBtns.forEach((btn)=>{
		btn.addEventListener('click', (event)=>{
			event.preventDefault();
			nav.classList.toggle('--show');
		});
	});


	let products = document.querySelectorAll('.product');
	if (products) {
		products.forEach((product)=>{
			product.imgs = product.querySelector('.product__imgs');
			product.checks = product.querySelectorAll('.sizes__item');
			product.addBtn = product.querySelector('.product__btn-add');
			product.checksCount = 0;

			if (product.imgs) {
				product.imgs.arrowPrev = product.imgs.querySelector('.imgs__arrow.--prev');
				product.imgs.arrowNext = product.imgs.querySelector('.imgs__arrow.--next');
			}

			new Swiper(product.imgs, {
					navigation: {
					prevEl: product.imgs.arrowPrev,
					nextEl: product.imgs.arrowNext
				}
			});

			product.checks.forEach((check)=>{
				check.addEventListener('click', ()=> {
					if (check.classList.contains('--checked')) {
						product.checksCount++;
					} else {
						product.checksCount--;
					}

					if (product.checksCount == 0) {
						product.classList.remove('--added');
					}
				});
			});

			product.addBtn.addEventListener('click', ()=>{
				if (product.classList.contains('--added')) {
					product.classList.remove('--added');

					return false;
				}

				let hasValue = false;
				product.checks.forEach((check)=>{
					if (check.classList.contains('--checked')) {
						hasValue = true;
						// break;
					}
				})

				if (hasValue) {
					product.classList.add('--added');
				}
			});
		});
	}

	let collection = document.querySelector('.collection__inner');
	if (collection) {
		collection.arrowPrev = collection.querySelector('.collection__arrow.--prev');
		collection.arrowNext = collection.querySelector('.collection__arrow.--next');

		new Swiper(collection, {
			slidesPerView: 4,
			spaceBetween: 20,
			navigation: {
				prevEl: collection.arrowPrev,
				nextEl: collection.arrowNext
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				580: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				780: {
					slidesPerView: 4,
					spaceBetween: 20,
				}
			}
		});
	}

	let sections = document.querySelectorAll('.section');
	if (sections) {
		sections.forEach((section)=>{
			section.inner = section.querySelector('.section__inner');
			section.arrowPrev = section.querySelector('.section__arrow.--prev');
			section.arrowNext = section.querySelector('.section__arrow.--next');

			new Swiper(section.inner, {
				slidesPerView: 4,
				spaceBetween: 20,
				navigation: {
					prevEl: section.arrowPrev,
					nextEl: section.arrowNext
				},
				breakpoints: {
					0: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					580: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					870: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1030: {
						slidesPerView: 4,
						spaceBetween: 20,
					}
				}
			});
		});
	}

	let cats = document.querySelector('.cats');
	if (cats) {
		cats.inner = document.querySelector('.cats__inner');
		cats.arrowPrev = cats.querySelector('.cats__arrow.--prev');
		cats.arrowNext = cats.querySelector('.cats__arrow.--next');

		new Swiper(cats.inner, {
			slidesPerView: 5,
			spaceBetween: 26,
			navigation: {
				prevEl: cats.arrowPrev,
				nextEl: cats.arrowNext
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				560: {
					slidesPerView: 2,
					spaceBetween: 14,
				},
				800: {
					slidesPerView: 3,
					spaceBetween: 14,
				},
				1020: {
					slidesPerView: 4,
					spaceBetween: 14,
				},
				1250: {
					slidesPerView: 5,
					spaceBetween: 14,
				},
				1450: {
					slidesPerView: 5,
					spaceBetween: 14,
				},
			}
		});
	}
});