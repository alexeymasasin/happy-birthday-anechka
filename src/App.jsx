import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Typed from 'typed.js';
import { useEffect, useState } from 'react';
import Welcome from './components/Welcome/Welcome';

function App() {
	const [showWelcome, setShowWelcome] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);

	const handleDismiss = () => {
		setShowWelcome(false);
	};

	return (
		<>{showWelcome ? <Welcome onDismiss={handleDismiss} /> : <MainContent />}</>
	);
}

function MainContent() {
	const textTypeSpeed = 27;
	const regularTextTypeSpeed = 27;
	const smilesTypeSpeed = 100;

	const cuties_start = 2700;
	const regular_1_start = 2500;
	const peace_btn_start = 346000;
	const slider_start = 361000;
	const gif_start = 362000;

	function useInitAnimations() {
		useEffect(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });

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
			document
				.querySelectorAll('.typed-still-regular-1')
				.forEach(function (el) {
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
			// BTN
			document.querySelectorAll('.peace-wrap').forEach(function (el) {
				document.querySelectorAll('.peace-wrap').forEach(function (el) {
					el.style.opacity = '0';
					setTimeout(() => {
						el.style.opacity = '1';
					}, peace_btn_start);
				});
			});
			// SWIPER
			document.querySelectorAll('.mySwiper').forEach(function (el) {
				document.querySelectorAll('.mySwiper').forEach(function (el) {
					el.style.opacity = '0';
					setTimeout(() => {
						el.style.opacity = '1';
					}, slider_start);
				});
			});
			// GIF
			document.querySelectorAll('.gif').forEach(function (el) {
				document.querySelectorAll('.gif').forEach(function (el) {
					el.style.opacity = '0';
					setTimeout(() => {
						el.style.opacity = '1';
					}, gif_start);
				});
			});

			return () => {
				document.querySelectorAll('.typed').forEach((el) => {
					if (el._typed) {
						el._typed.destroy();
					}
				});
			};
		}, []);
	}

	useInitAnimations();

	return (
		<div className="container__main">
			<div className="heading">
				<div className="typed-strings">
					<h1>{'с днём рождения, моя хорошая!!'}</h1>
				</div>
				<span className="typed-still-nocursor"></span>

				<div className="typed-strings">
					<p>{'<3'}</p>
					<p>^_^</p>
					<p>:3</p>
				</div>
				<span className="typed-loop heading-cuties"></span>
			</div>
			<div className="typed-strings regular-1">
				<p>
					я вижу, что ты, похоже, всё ещё злишься на меня и не хочешь общаться.
					знаю, что тебе нужно пространство, и всё это время я искренне старался
					дать тебе его.
					<br />
					<br />
					но сегодня — твой день, и я не хочу, чтобы ты думала, что мне всё
					равно.
					<br />
					даже если шанс того, что эти слова по-настоящему дойдут до тебя
					невелик, я не могу просто молчать, ведь ты заслуживаешь услышать это
					всё <span className="green">=)</span>
					<br /> <br />я понимаю, что день рождения — не лучший повод для
					откровений и сентиментов в нашей ситуации, но оставить тебя без этих
					слов — выше моих сил. потому что{' '}
					<span className="underline">я правда люблю тебя</span>,{' '}
					<span className="underline">очень</span>.
					<br /> <br />
					я изо всех сил старался держаться подальше, потому что уважаю твоё
					решение, не хочу давить и тревожить, но мне так много хочется сказать
					и пожелать тебе на др... ведь ты — самое светлое и важное, что есть в
					моей жизни, и я просто не могу промолчать в такой важный день. ты
					слишком дорога мне.
					<br /> <br />
					{'-/-/-/-/-/-/-/-/-/-/-'}
					<br /> <br />
					как же незаметно пролетел ещё один год!! год, в котором ты, как
					всегда, делала этот мир ярче, добрее, теплее, и вообще в разы лучше,
					просто тем, что ты есть. прямо как лучик света в пасмурный день.
					<br />
					<br />
					даже после всего, что мы друг другу наговорили, я каждый раз, думая о
					тебе, ловлю себя на том, что ты всё ещё та же пупсичка, от одной мысли
					о которой у меня пархают бабочки в животе, в груди взрываются
					фейерверки, а в голове крутится только одна мысль —{' '}
					<span className="red">
						«как вообще можно быть настолько идеальной???».
					</span>
					<br />
					я не могу представить себе человека, который и на каплю смог бы
					приблизиться к тебе, серьёзно.
					<br />
					<br />
					анечка, мои <span className="underline">главные</span> пожелания для
					тебя — это:
					<br />
					<span className="green">•</span> чтобы ты всегда чувствовала себя
					любимой. не только мной, а вообще всеми, кто тебе дорог в этой жизни.
					<br />
					<span className="green">•</span> чтобы ты не боялась будущего, потому
					что заслуживаешь в нём только самого наилучшего.
					<br />
					<span className="green">•</span> чтобы ты помнила, что есть в этом
					мире люди, для которых ты — самое прекрасное чудо, самый ценный и
					любимый цветочек.
					<br />
					<span className="green">•</span> чтобы ты никогда не сомневалась в
					себе, особенно из-за разных пустячков, ведь ты самый удивительный,
					талантливый и прекрасный человек из всех-всех-всех вообще!!
					<br />
					<br />
					твой день рождения для меня — не просто дата, это{' '}
					<span className="yellow">настоящий праздник</span>. и не как все
					остальные праздники, а ПО-НАСТОЯЩЕМУ особенный, как и ты.
					<br />
					но не думай, что я пишу это всё просто в честь твоего др, — я всегда к
					тебе так отношусь, пусть мы и не говорили о чувствах так ярко в
					последнее время...
					<br />
					<br />
					и хоть мы и играем в эту молчанку уже две недели, я всё ещё с улыбкой
					думаю о тебе каждую секунду, просматриваю твои фото, вспоминаю все
					наши моменты, — как мы играли в стардью в новогоднюю ночь, проходили
					тестики, вместе смотрели фильмы, сериалы, мультики, видео... как ты
					рисовала, пока я писал музыку, как мы засыпали в звонке, готовили
					вместе (и ещё много-много всего).
					<br />я нахожу тебя буквально во всех вещах, мне как и прежде нравится
					всё, что с тобой связано, моя хорошая, и я не могу дождаться момента,
					когда мы уже сможем найти общий язык и помириться...
					<br />
					<br />я <span className="green">очень горжусь</span> тобой.
					<br />
					за то, что ты, несмотря на всё плохое в своей жизни, всё ещё остаёшься
					таким хорошим человечком.
					<br />
					за то, что ты справляешься с трудностями, даже когда они кажутся
					неподъёмными.
					<br />
					за то, как блестяще ты справляешься с учёбой, хотя знаю, как это порой
					бывает непросто.
					<br />
					горжусь тем, как ты держишься, даже когда очень устала, как ты
					ответственно ко всему подходишь, несмотря ни на что.
					<br />
					<br />я каждый день, каждую секунду жизни{' '}
					<span className="blue">восхищаюсь тобой</span>, твоим вкусом и вайбом
					— он у тебя самый тонкий и особенный на свете, никто как ты не умеет
					так создавать красоту вокруг себя и уделять внимание мелочам. за что
					бы ты только ни бралась, у тебя всегда и всё получается просто
					прекрасно, у тебя золотые ручки.
					<br />и что бы ни случилось, я всегда буду так считать, ведь я так
					обожаю это всё в тебе лишь за то, что оно твоё.
					<br />
					ты пишешь картины, которые по-настоящему захватывают дух, с самого
					первого дня они меня завораживают, — никакие мировые шедевры не
					вызывают у меня столько эмоций, сколько самые простые из твоих
					зарисовок и скетчей. ты такая талантливая, аня...!!
					<br />
					<br />
					ты <span className="red">красивее всех на свете</span> для меня, — не
					только внешне, но и каждой частичкой своей души. я до сих пор
					смущаюсь, когда вижу тебя на фото. я обожаю твои ямочки на щеках, твои
					носогубные полосочки, твои прекрасные глаза, особенно когда ты
					улыбаешься... обожаю твои волосы, твои аккуратные ручки, пальчики,
					ножки, все твои родинки, да каждый миллиметр твоего тела меня
					очаровывает.
					<br />
					<br />
					ты самый чудесный человек на свете, моё «самое-самое», абсолютно во
					всём, и так будет всегда. я бесконечно счастлив, что судьба однажды
					свела нас вместе.{' '}
					<span className="golden">
						я тебя очень сильно люблю, ты моё самое тёплое, комфортное, приятное
						место в этом мире — мой настоящий дом.
					</span>
					<br />
					<br />
					знай, что как бы мы ни ссорились, я не перестаю любить тебя ни на
					секунду, и мне очень тебя не хватает, моя девочка( без тебя всё совсем
					не так.
					<br />
					<br />
					<span className="yellow">я всегда думаю о тебе</span>,{' '}
					<span className="green">я ценю тебя и всё что с тобой связано</span>,{' '}
					<span className="red">я верю в тебя и в нашу любовь</span>,{' '}
					<span className="blue">я восхищаюсь и горжусь тобой</span>. правда.
					<br /> <br />
					{'-/-/-/-/-/-/-/-/-/-/-'}
					<br /> <br />
					мне очень жаль, что я причинил тебе столько боли за последнее время,
					моя дорогая. ты — моё счастье, и мне невыносимо думать о том, что
					из-за меня ты так долго чувствовала себя плохо.
					<br />
					<br />я действительно сильно подвёл тебя, когда пообещал справиться со
					своей тревожностью и не смог.
					<br />
					не потому что мне всё равно или лень, а потому что не знал как, —
					пытался держать всё в себе, находить способы успокоиться, но не
					прорабатывал проблему по-настоящему, в корне. и мне жаль, что я
					осознал это всё так поздно...
					<br />
					<br />я хочу чтобы ты знала, что теперь
					<span className="purple"> я понимаю тебя</span>. понимаю, что тревога
					— это не что-то, что можно брать и сваливать на любимого человека, а
					моя личная ответственность и забота. не твоя.
					<br />
					<br />
					эти недели молчания заставили меня переосмыслить всё, что было за
					последние месяцы. я наконец увидел, как всегда был виноват, как
					по-разному мы реагировали на стресс и проблемы, — тебе всегда было
					нужно уединение, время подумать и пространство, а мне наоборот, сразу
					же всё обсудить, разобрать, понять тебя как можно скорее.
					<br />
					<br />
					я, как слепой, не видел, что мои попытки «решить всё сейчас» для тебя
					выглядели как давление и атаки, а твои попытки отойти от эмоций мне
					ложно казались отстраненностью и игнорированием.
					<br />
					<br />и хотя это всё было ужасно, знай, что я делал это не ради
					контроля и давления, а от переизбытка чувств и страха тебя потерять.
					<br />я просто не умел справляться с этим, как и ты когда-то.
					<br />
					<br />
					теперь я понимаю, что{' '}
					<span className="yellow">
						всё, что от меня требовалось — это просто быть рядом в трудную
						минуту, воздержаться от вопросов и разговоров о тревоге, когда ты
						напрямую об этом просила.
					</span>
					<br />
					я должен был дарить тебе тепло в ответ на холод, понимать, что его
					причина в твоём самочувствии, а не в отношении ко мне.
					<br />
					должен был просто оставаться рядом в эти моменты, а не требовать
					поддержки когда тебе самой было хуже некуда.
					<br />
					мне не стоило говорить, что меня не будут расстраивать короткие
					ответы, или даже их отсутствие, когда даже тёплые могли меня тронуть.
					<br />
					я очень виню себя за то, что постоянно выражал недовольство и обиду за
					ответы, отличающиеся от тех, которые я хотел увидеть. это было глупо и
					эгоистично.
					<br />
					<br />
					мне очень стыдно за свою тревожность, за то, что я сковывал твою
					свободу, за бесконечные расспросы, беспричинную и глупую ревность… за
					то, что так долго не слышал тебя и обижался, пока твоя мама не
					объяснила мне то, что ты всегда пыталась мне сказать. но благодаря ей
					я правда стал лучше. <span className="red">не идеальным</span>,{' '}
					<span className="green">но лучше</span>. и я продолжаю работать над
					этим и над тем, чтобы стать по-настоящему надёжным и стойким рядом с
					тобой, принимать тебя в любом состоянии.
					<br />
					<br />
					я знаю, тебе страшно.
					<br />
					страшно, что если простишь меня, то всё это рано или поздно
					повторится. что я снова начну трястись, тревожиться из-за пустяков,
					дотошничать из-за надуманных вещей. и я понимаю тебя.
					<br />
					но я больше не хочу такого, — я лишь хочу быть тем, кто{' '}
					<span className="green">защищает твой покой</span>,{' '}
					<span className="red">а не нарушает его</span>.
					<br />
					<br />я осознал, как сильно мои поступки ранили тебя. понимаю, что был
					не прав и не понимал тебя в некоторые моменты.
					<br />
					я готов быть другим с тобой, — лёшей без тревог, которые душили тебя,
					без ощущения недоверия, которое тебя ранило.
					<br />
					<br />
					любимая, я очень виноват перед тобой. прости меня, дурака,
					пожалуйста...
					<br />
					<br />
					ты — моя единственная родственная душа в этом мире, мой самый близкий
					и любимый человек, мой котёночек. я бесконечно благодарен тебе за
					каждый момент, проведённый вместе со мной, — даже за те, в которых мы
					ругались. спасибо тебе за всё, анечка, ты мой ангел.
					<br />
					я всё ещё верю в нас и очень надеюсь, что у нас всё наладится.
					понимаю, что тебе, возможно, нужно ещё время, но если ты готова
					поговорить — я здесь.
					<br /> <br />
					{'-/-/-/-/-/-/-/-/-/-/-'}
					<br />
					<br />с любовью, твой лёша
					<span className="ending-text-small">
						(который теперь не трясётся над каждым твоим «хорошо», а просто
						верит тебе)
					</span>
					<br />
					<br />
					<a href="http://t.me/alexeymasasin" target="_blank">
						Давай мириться!
						<img
							className="heart"
							src="./icons/1670710-200.png"
							alt="<3"
							width={32}
						/>
					</a>
					<span className="ending-text-small hint">
						штучка ниже, кстати, листается, попробуй обязательно!
					</span>
					<br />
					<br />
				</p>
			</div>
			<span className="typed-still-regular-1 regular-text"></span>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="./slider/1.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/2.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/4.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/5.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/6.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/66_1.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/9.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/3.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/8.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/7.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/776.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/668.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/77.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/66.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/15.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/10.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/14.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./slider/ya.jpg" alt="" />
				</SwiperSlide>
			</Swiper>
			<div className="gif">
				<img src="./gifs/IMG_1814.gif" alt="" />
				<p className="gif_annotation">ты моё солнышко!!</p>
			</div>
		</div>
	);
}

export default App;
