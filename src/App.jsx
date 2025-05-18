import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

function App() {
	// const textTypeSpeed = 40;
	// const regularTextTypeSpeed = 28;
	const textTypeSpeed = 30;
	const regularTextTypeSpeed = 30;
	const smilesTypeSpeed = 100;

	// timings

	const cuties_start = 1800;
	const regular_1_start = 3500;
	const regular_2_start = 21500;
	const regular_3_start = 32500;
	const regular_4_start = 47000; // divider
	const regular_5_start = 49000;
	const regular_6_start = 215300; // divider
	const regular_7_start = 217000;
	const regular_8_start = 322500; // divider
	const regular_9_start = 324000;
	const regular_10_start = 326000;
	const peace_btn_start = 327000;
	const slider_start = 328000;

	// const cuties_start = 0;
	// const regular_1_start = 0;
	// const regular_2_start = 0;
	// const regular_3_start = 0;
	// const regular_4_start = 0; // divider
	// const regular_5_start = 0;
	// const regular_6_start = 0; // divider
	// const regular_7_start = 0;
	// const regular_8_start = 0; // divider
	// const regular_9_start = 0;
	// const regular_10_start = 0;
	// const peace_btn = 270000;

	// utils

	// const shouldShowCursor = (startTime) => {
	// 	return Date.now() >= startTime;
	// };

	window.addEventListener('load', function () {
		document.querySelectorAll('.typed-loop').forEach(function (el) {
			document.querySelectorAll('.heading-cuties').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, cuties_start);
			});

			const typedInstance = new Typed(el, {
				stringsElement: el.previousElementSibling,
				loop: true,
				typeSpeed: smilesTypeSpeed,
				backSpeed: smilesTypeSpeed,
				backDelay: 1500,
				showCursor: false,
			});
		});

		document.querySelectorAll('.typed-still').forEach(function (el) {
			const typedInstance = new Typed(el, {
				stringsElement: el.previousElementSibling,
				loop: false,
				typeSpeed: textTypeSpeed,
				backSpeed: 20,
				backDelay: 1700,
				showCursor: true,
			});
		});

		document.querySelectorAll('.typed-still-nocursor').forEach(function (el) {
			const typedInstance = new Typed(el, {
				stringsElement: el.previousElementSibling,
				loop: false,
				typeSpeed: textTypeSpeed,
				backSpeed: 20,
				backDelay: 1700,
				showCursor: false,
			});
		});

		// REGULAR 1
		document.querySelectorAll('.typed-still-regular-1').forEach(function (el) {
			document.querySelectorAll('.regular-1').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, regular_1_start);
			});

			setTimeout(() => {
				const typedInstance = new Typed(el, {
					stringsElement: el.previousElementSibling,
					loop: false,
					typeSpeed: regularTextTypeSpeed,
					backSpeed: regularTextTypeSpeed,
					backDelay: 1700,
					showCursor: true,
					cursorChar: '|',
					onComplete() {
						typedInstance.cursor.remove();
					},
				});
			}, regular_1_start);
		});

		// REGULAR 2
		document.querySelectorAll('.typed-still-regular-2').forEach(function (el) {
			document.querySelectorAll('.regular-2').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, regular_2_start);
			});

			setTimeout(() => {
				const typedInstance = new Typed(el, {
					stringsElement: el.previousElementSibling,
					loop: false,
					typeSpeed: regularTextTypeSpeed,
					backSpeed: regularTextTypeSpeed,
					backDelay: 1700,
					showCursor: true,
					cursorChar: '|',
					onComplete() {
						typedInstance.cursor.remove();
					},
				});
			}, regular_2_start);
		});

		// REGULAR 3
		document.querySelectorAll('.typed-still-regular-3').forEach(function (el) {
			document.querySelectorAll('.regular-3').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, regular_3_start);
			});

			setTimeout(() => {
				const typedInstance = new Typed(el, {
					stringsElement: el.previousElementSibling,
					loop: false,
					typeSpeed: regularTextTypeSpeed,
					backSpeed: regularTextTypeSpeed,
					backDelay: 1700,
					showCursor: true,
					cursorChar: '|',
					onComplete() {
						typedInstance.cursor.remove();
					},
				});
			}, regular_3_start);
		});

		// REGULAR 4
		document.querySelectorAll('.typed-still-regular-4').forEach(function (el) {
			document.querySelectorAll('.regular-4').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, regular_4_start);
			});

			setTimeout(() => {
				const typedInstance = new Typed(el, {
					stringsElement: el.previousElementSibling,
					loop: false,
					typeSpeed: regularTextTypeSpeed,
					backSpeed: regularTextTypeSpeed,
					backDelay: 1700,
					showCursor: true,
					cursorChar: '|',
					onComplete() {
						typedInstance.cursor.remove();
					},
				});
			}, regular_4_start);
		});

		// REGULAR 5
		document.querySelectorAll('.typed-still-regular-5').forEach(function (el) {
			document.querySelectorAll('.regular-5').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, regular_5_start);
			});

			setTimeout(() => {
				const typedInstance = new Typed(el, {
					stringsElement: el.previousElementSibling,
					loop: false,
					typeSpeed: regularTextTypeSpeed,
					backSpeed: regularTextTypeSpeed,
					backDelay: 1700,
					showCursor: true,
					cursorChar: '|',
					onComplete() {
						typedInstance.cursor.remove();
					},
				});
			}, regular_5_start);
		});

		// REGULAR 6
		document.querySelectorAll('.typed-still-regular-6').forEach(function (el) {
			document.querySelectorAll('.regular-6').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, regular_6_start);
			});

			setTimeout(() => {
				const typedInstance = new Typed(el, {
					stringsElement: el.previousElementSibling,
					loop: false,
					typeSpeed: regularTextTypeSpeed,
					backSpeed: regularTextTypeSpeed,
					backDelay: 1700,
					showCursor: true,
					cursorChar: '|',
					onComplete() {
						typedInstance.cursor.remove();
					},
				});
			}, regular_6_start);
		});

		// REGULAR 7
		document.querySelectorAll('.typed-still-regular-7').forEach(function (el) {
			document.querySelectorAll('.regular-7').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, regular_7_start);
			});

			setTimeout(() => {
				const typedInstance = new Typed(el, {
					stringsElement: el.previousElementSibling,
					loop: false,
					typeSpeed: regularTextTypeSpeed,
					backSpeed: regularTextTypeSpeed,
					backDelay: 1700,
					showCursor: true,
					cursorChar: '|',
					onComplete() {
						typedInstance.cursor.remove();
					},
				});
			}, regular_7_start);
		});

		// REGULAR 8
		document.querySelectorAll('.typed-still-regular-8').forEach(function (el) {
			document.querySelectorAll('.regular-8').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, regular_8_start);
			});

			setTimeout(() => {
				const typedInstance = new Typed(el, {
					stringsElement: el.previousElementSibling,
					loop: false,
					typeSpeed: regularTextTypeSpeed,
					backSpeed: regularTextTypeSpeed,
					backDelay: 1700,
					showCursor: true,
					cursorChar: '|',
					onComplete() {
						typedInstance.cursor.remove();
					},
				});
			}, regular_8_start);
		});

		// REGULAR 9
		document.querySelectorAll('.typed-still-regular-9').forEach(function (el) {
			document.querySelectorAll('.regular-9').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, regular_9_start);
			});

			setTimeout(() => {
				const typedInstance = new Typed(el, {
					stringsElement: el.previousElementSibling,
					loop: false,
					typeSpeed: regularTextTypeSpeed,
					backSpeed: regularTextTypeSpeed,
					backDelay: 1700,
					showCursor: true,
					cursorChar: '|',
					onComplete() {
						typedInstance.cursor.remove();
					},
				});
			}, regular_9_start);
		});
		// REGULAR 10
		document.querySelectorAll('.typed-still-regular-10').forEach(function (el) {
			document.querySelectorAll('.regular-10').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, regular_10_start);
			});

			setTimeout(() => {
				const typedInstance = new Typed(el, {
					stringsElement: el.previousElementSibling,
					loop: false,
					typeSpeed: regularTextTypeSpeed,
					backSpeed: regularTextTypeSpeed,
					backDelay: 1700,
					showCursor: true,
					cursorChar: '|',
					onComplete() {
						typedInstance.cursor.remove();
					},
				});
			}, regular_10_start);
		});
		// BTN
		document.querySelectorAll('.peace-wrap').forEach(function (el) {
			document.querySelectorAll('.peace-wrap').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, peace_btn_start);
			});
		});

		// SLIDER
		document.querySelectorAll('.mySwiper').forEach(function (el) {
			document.querySelectorAll('.mySwiper').forEach(function (el) {
				el.style.opacity = '0';
				setTimeout(() => {
					el.style.opacity = '1';
				}, slider_start);
			});
		});
	});

	return (
		<div className="container__main">
			<div className="heading">
				<div className="typed-strings">
					<h1>{'с днём рождения, моя хорошая зайка!'}</h1>
				</div>
				<span className="typed-still-nocursor"></span>

				<div className="typed-strings">
					<p>{'<3'}</p>
					<p>:3</p>
					<p>^_^</p>
					<p>:*</p>
				</div>
				<span className="typed-loop heading-cuties"></span>
			</div>
			<div className="typed-strings regular-1">
				<p>
					я знаю, что ты, наверное, всё ещё злишься на меня, тебе нужно
					пространство, и я искренне старался дать тебе его всё это время. но
					сегодня — твой день, и я не хочу, чтобы ты думала, что мне всё равно.
					я знаю, что ты тоже скучаешь, я здесь. даже если шанс того, что эти
					слова по-настоящему дойдут до тебя, невелик, я не могу промолчать.
					потому что ты заслуживаешь это слышать{' '}
					<span className="green">:)</span>
				</p>
			</div>
			<span className="typed-still-regular-1 regular-text"></span>
			<br /> <br />
			<div className="typed-strings regular-2">
				<p>
					это не просто поздравление, анечка. это крик души. я понимаю, что день
					рождения — не лучший повод для откровений в нашей ситуации, но
					оставить тебя без этих слов — выше моих сил. потому что{' '}
					<span className="underline">я правда люблю тебя</span>,{' '}
					<span className="underline">очень</span>.
				</p>
			</div>
			<span className="typed-still-regular-2 regular-text"></span>
			<br /> <br />
			<div className="typed-strings regular-3">
				<p>
					мне так много хочется сказать и пожелать тебе, ведь ты — самое светлое
					и важное, что есть в моей жизни. я изо всех сил старался держаться
					подальше, потому что уважаю твоё решение, не хочу давить и тревожить,
					но я просто не могу промолчать в такой важный день. надеюсь, ты
					поймёшь меня правильно!
				</p>
			</div>
			<span className="typed-still-regular-3 regular-text"></span>
			<br /> <br />
			<div className="typed-strings regular-4">
				<p>-/-/-/-/-/-/-/-/-/-/-</p>
			</div>
			{/* divider */}
			<span className="typed-still-regular-4 regular-text"></span>
			<br /> <br />
			<div className="typed-strings regular-5">
				<p>
					как же незаметно пролетел ещё один год, господи! год, в которым ты,
					как всегда, делала этот мир ярче, добрее, теплее, и вообще в разы
					лучше просто тем, что ты есть. прямо как солнечный зайчик в хмурый
					день, твое присутствие, пусть даже где-то далеко, меняет всё вокруг к
					лучшему.
					<br />
					<br />
					каждый раз, думая о тебе, я ловлю себя на том, что ты всё ещё та же
					пупсичка, от которой у меня в животе пархают бабочки, в груди
					взрываются фейерверки, а в голове крутится только одна мысль —{' '}
					<span className="red">
						«как вообще можно быть настолько идеальной???».
					</span>
					<br />
					<br />
					анечка, мои <span className="underline">главные</span> пожелания для
					тебя — это
					<br />
					<span className="green">•</span> чтобы ты чувствовала себя любимой, не
					только мной, а вообще всеми, кто тебе дорог в этой жизни.
					<br />
					<span className="green">•</span> чтобы ты не боялась будущего, потому
					что заслуживаешь только самого наилучшего.
					<br />
					<span className="green">•</span> чтобы ты помнила, что есть в этом
					мире люди, для которых ты — самое прекрасное чудо, самый ценный и
					любимый цветочек.
					<br />
					<span className="green">•</span> чтобы ты никогда не сомневалась в
					себе, особенно из-за разных пустячков, ведь ты самый удивительный и
					прекрасный человек из всех-всех-всех вообще!!
					<br />
					<br />
					твой день рождения для меня — не просто дата, это{' '}
					<span className="yellow">настоящий праздник</span>. и не как все
					остальные праздники, а ПО-НАСТОЯЩЕМУ особенный, как и ты. хотя, если
					честно, каждый другой день с тобой ощущался как подарок мне. но не
					думай, что я пишу это всё просто в честь др, — я всегда к тебе так
					отношусь, пусть мы в последнее время и не говорили так ярко о
					чувствах...
					<br />
					<br />я всё ещё постоянно вспоминаю все наши моменты: как мы играли в
					стардью в новогоднюю ночь, проходили тестики, вместе смотрели фильмы,
					сериалы, мультики, как ты рисовала, пока я писал музыку, как засыпали
					в звонке (и ещё много-много всего).
					<br />я постоянно думаю о тебе, мне как и прежде нравится всё, что с
					тобой связано, моя хорошая, и я не могу дождаться момента, когда мы
					встретимся, если ты, конечно, захочешь.
					<br />
					<br />я <span className="green">горжусь</span> тобой.
					<br />
					тем, что ты, несмотря на всё плохое в своей жизни, остаёшься таким
					хорошим человеком.
					<br />
					тем, как ты справляешься с трудностями, даже когда они кажутся
					неподъёмными.
					<br />
					горжусь твоей учёбой, — ты так блестяще справляешься, хотя знаю, как
					это порой непросто.
					<br />
					горжусь тем, как ты держишься, даже когда очень устала.
					<br />
					<br />я каждый день, каждую секунду{' '}
					<span className="blue">восхищаюсь</span> тобой, твоим вкусом — он
					самый тонкий на свете, никто как ты не умеет подбирать цвета,
					слова,картинки, предметы одежды и всё-всё-всё. за что бы ты только ни
					бралась, у тебя всегда и всё получается просто прекрасно, у тебя
					золотые ручки!
					<br />
					ты пишешь картины, которые по-настоящему захватывают дух, с самого
					первого дня они меня завораживают, — даже самые признанные мировые
					шедевры не вызывают столько эмоций, сколько твои зарисовки и скетчи.
					ты такая талантливая...!!
					<br />
					<br />
					ты <span className="red">красивее всех</span> для меня, — не только
					внешне, но и каждой частичкой своей души. я до сих пор смущаюсь, когда
					вижу тебя на фото, твой взгляд меня парализует, ты буквально богиня
					красоты для меня. я обожаю твои ямочки на щеках, обожаю твои
					носогубные полосочки, обожаю твои прекрасные глаза, обожаю каждый
					миллиметр твоего тела.
					<br />
					<br />
					ты — самый чудесный человек на свете, моё «самое-самое», абсолютно во
					всём, и так будет всегда. я бесконечно счастлив, что судьба однажды
					связала нас.{' '}
					<span className="golden">
						я тебя очень сильно люблю, ты моё самое тёплое, комфортное, приятное
						место в этом мире — мой настоящий дом.
					</span>
					<br />
					<br />
					знай, что как бы мы ни ссорились, я не перестаю любить тебя ни на
					секунду.
					<br />
					<br />
					<span className="yellow">я всегда думаю о тебе</span>,{' '}
					<span className="green">я ценю тебя и всё что с тобой связано</span>,{' '}
					<span className="red">я верю в тебя и нашу любовь</span>,{' '}
					<span className="blue">я восхищаюсь и горжусь тобой</span>. правда.
				</p>
			</div>
			<span className="typed-still-regular-5 regular-text"></span>
			<br /> <br />
			{/* divider */}
			<div className="typed-strings regular-6">
				<p>-/-/-/-/-/-/-/-/-/-/-</p>
			</div>
			<span className="typed-still-regular-6 regular-text"></span>
			<br /> <br />
			<div className="typed-strings regular-7">
				<p>
					мне очень жаль, что я причинил тебе столько боли за последнее время.
					ты — моё счастье, и мне невыносимо думать о том, что из-за меня ты
					чувствовала себя плохо.
					<br />я подвёл тебя, когда пообещал справиться со своей тревожностью и
					не смог. не потому что мне всё равно или лень, а потому что не знал
					как, — пытался держать всё в себе, находить способы успокоиться, но не
					прорабатывал проблему по-настоящему, в корне. и мне стыдно, что я
					осознал это всё так поздно...
					<br />
					<br />я хочу чтобы ты знала, что{' '}
					<span className="purple">теперь я понимаю</span>. понимаю, что тревога
					— это не что-то, что можно брать и сваливать на любимого человека, а
					моя личная ответственность, не твоя. эти недели молчания заставили
					меня переосмыслить всё, что было за последние месяцы. я наконец
					увидел, как по-разному мы реагируем на стресс и проблемы: тебе всегда
					было нужно уединение, время подумать и пространство, а мне — наоборот,
					сразу же поговорить, разобрать, понять тебя как можно скорее.
					<br />
					я, как слепой, не видел, что мои попытки «решить всё сейчас» для тебя
					выглядели как давление и атаки, а твои попытки отойти от эмоций для
					меня казались отстраненностью и игнорированием.
					<br />и хотя это всё было ужасно, знай, что я делал это не ради
					контроля и давления, а от переизбытка чувств и страха тебя потерять, я
					просто не умел справляться со своими беспокойствами.
					<br />
					<br />
					мне очень стыдно. за свою тревожность, за то, что сковывал твою
					свободу, за бесконечные расспросы, беспричинную и глупую ревность… за
					то, что так долго не слышал тебя, пока твоя мама не объяснила мне то,
					что ты всегда пыталась мне сказать. но я стал лучше.{' '}
					<span className="red">не идеальным</span>,{' '}
					<span className="green">но лучше</span>. и я продолжаю работать над
					собой, над тем. чтобы быть по-настоящему надёжным.
					<br />
					<br />я знаю, чего ты боишься, — того, что если мы попробуем снова,
					всё повторится, что я опять начну трястись, ревновать из-за пустяков,
					выдумывать проблемы. но я не хочу такого — я хочу быть тем, кто
					защищает твой покой, а не нарушает его.
					<br />
					<br />
					прости меня, дурака, пожалуйста.
					<br />
					<br />
					ты заслуживаешь всего наилучшего в этой жизни, правда, и я всё, что в
					моих силах будет сделаю, чтобы тебе жилось настолько счастливо,
					насколько это возможно.
					<br />
					<br />
					ты — моя родственная душа, мой самый близкий и любимый человек, мой
					котёночек. я бесконечно благодарен тебе за каждый момент, проведённый
					вместе, — даже за те, где мы ругались. спасибо тебе за всё, анечка.
				</p>
			</div>
			<span className="typed-still-regular-7 regular-text"></span>
			<br /> <br />
			{/* divider */}
			<div className="typed-strings regular-8">
				<p>-/-/-/-/-/-/-/-/-/-/-</p>
			</div>
			<span className="typed-still-regular-8 regular-text"></span>
			<br />
			<br />
			<div className="typed-strings regular-9">
				<p>с любовью, твой лёша</p>
			</div>
			<span className="typed-still-regular-9 ending-text"></span>
			<br />
			<div className="typed-strings regular-10">
				<p>
					(который теперь не трясётся над каждым твоим «хорошо», а просто верит
					тебе)
				</p>
			</div>
			<span className="typed-still-regular-10 ending-text-small"></span>
			<br />
			<br />
			<div className="peace-wrap">
				<a href="http://t.me/alexeymasasin" target="_blank">
					Давай мириться!
					<img
						className="heart"
						src="./../public/icons/1670710-200.png"
						alt="<3"
						width={32}
					/>
				</a>
			</div>
			<br />
			<br />
			<div className="typed-strings regular-10">
				<p>штучка ниже, кстати, листается, попробуй!</p>
			</div>
			<span className="typed-still-regular-10 ending-text-small hint"></span>
			{/* swiper */}
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="./../public/slider/1.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./../public/slider/2.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./../public/slider/3.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./../public/slider/4.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./../public/slider/5.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./../public/slider/6.jpg" alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default App;
