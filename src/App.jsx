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
	const [showEnding, setShowEnding] = useState(false);

	const textTypeSpeed = 27;
	const regularTextTypeSpeed = 27;
	const smilesTypeSpeed = 100;

	const cuties_start = 2700;
	const regular_1_start = 2500;
	// const peace_btn_start = 346000;
	// const slider_start = 381000;
	// const gif_start = 382000;

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
								setShowEnding(true);
							},
						});
					}, regular_1_start);
				});
			// // BTN
			// document.querySelectorAll('.peace-wrap').forEach(function (el) {
			// 	document.querySelectorAll('.peace-wrap').forEach(function (el) {
			// 		el.style.opacity = '0';
			// 		setTimeout(() => {
			// 			el.style.opacity = '1';
			// 		}, peace_btn_start);
			// 	});
			// });
			// // SWIPER
			// document.querySelectorAll('.mySwiper').forEach(function (el) {
			// 	document.querySelectorAll('.mySwiper').forEach(function (el) {
			// 		el.style.opacity = '0';
			// 		setTimeout(() => {
			// 			el.style.opacity = '1';
			// 		}, slider_start);
			// 	});
			// });
			// // GIF
			// document.querySelectorAll('.gif').forEach(function (el) {
			// 	document.querySelectorAll('.gif').forEach(function (el) {
			// 		el.style.opacity = '0';
			// 		setTimeout(() => {
			// 			el.style.opacity = '1';
			// 		}, gif_start);
			// 	});
			// });

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
					знаю, что тебе нужно пространство, и я всё это время искренне старался
					дать его тебе.
					<br />
					<br />
					но сегодня — твой день, и я не хочу, чтобы ты думала, что мне всё
					равно.
					<br />
					даже если шанс того, что эти слова по-настоящему дойдут до тебя
					невелик, я всё равно использую его, ведь ты заслуживаешь слышать это
					всё, несмотря на все обстоятельства <span className="green">=)</span>
					<br /> <br />я понимаю, что день рождения — не лучший повод для
					откровений и сентиментов в нашей ситуации, но оставить тебя без этих
					слов сегодня — выше моих сил. потому что{' '}
					<span className="underline">я правда люблю тебя</span>,{' '}
					<span className="underline">очень</span>.
					<br /> <br />
					я изо всех сил старался держаться подальше, потому что уважаю твоё
					решение, не хочу давить и тревожить, но мне ТАК много хочется сказать
					и пожелать тебе в этот день... ведь ты — самое светлое и важное, что
					есть в моей жизни, поэтому просто прими этот текст как знак, что ты
					важна.
					<br /> <br />
					{'-/-/-/-/-/-/-/-/-/-/-'}
					<br /> <br />
					<span className="yellow">
						как же незаметно пролетел ещё один год!!
					</span>
					<br />
					год, в котором ты, как всегда, делала этот мир ярче, добрее, теплее, и
					вообще в разы лучше, просто тем, что ты есть.
					<br />
					<br />
					даже после всего, что мы друг другу наговорили, я каждый раз, думая о
					тебе, ловлю себя на том, что ты всё та же девочка, от одной мысли о
					которой у меня с первого дня пархают бабочки в животе, в груди
					взрываются фейерверки, а в голове крутится только одна мысль —{' '}
					<span className="red">
						«как вообще можно быть настолько идеальной???»
					</span>
					.
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
					остальные праздники, а ПО-НАСТОЯЩЕМУ особенный, как и ты сама.
					<br />
					но не думай, что я пишу это всё просто в честь твоего др, — я всегда к
					тебе так относился, пусть мы и не говорили о чувствах так ярко в
					последнее время.
					<br />
					<br />
					и хоть мы молчим и ссоримся уже больше двух недель, я всё ещё чувствую
					волнение, когда слышу твоё имя, с улыбкой думаю о тебе каждую секунду
					жизни, вижу тебя во снах, пересматриваю твои фото и вспоминаю все наши
					моменты — как мы играли в стардью в новогоднюю ночь, проходили разные
					тестики, вместе смотрели фильмы, сериалы, мультики... как ты рисовала,
					пока я писал музыку, как мы засыпали в звонке, готовили вместе,
					строили планы на будущее (и ещё много-много всего). а ведь это было
					ещё совсем недавно!
					<br />
					<br />я нахожу частички тебя буквально во всех вещах, мне как и прежде
					нравится всё, что с тобой связано. и я готов сколько нужно ждать
					момента, когда мы наконец сможем найти общий язык и помириться...
					<br />
					<br />
					...и я смогу повставлять сирень в твои волосыыы {'>:)'}
					<br />
					<br />
					аня, я <span className="green">очень горжусь</span> тобой.
					<br />
					за то, что ты, несмотря на всё плохое, что было в твоей жизни, всё ещё
					остаёшься настолько хорошим человечком.
					<br />
					за то, что ты справляешься с трудностями, даже когда они всем уже
					кажутся неподъёмными.
					<br />
					за то, как блестяще ты справляешься с учёбой и стрессом от неё, хотя
					знаю, как это порой бывает непросто для тебя.
					<br />
					горжусь тем, как ты держишься, даже когда очень устала. тем, как ты
					ответственно подходишь ко всему в жизни, несмотря ни на что.
					<br />
					<br />я каждый день, каждую секунду жизни{' '}
					<span className="blue">восхищаюсь тобой</span>, твоим вкусом и
					вайбиком — он у тебя самый тонкий и особенный на свете, никто как ты
					не умеет создавать красоту вокруг себя и уделять внимание мелочам. за
					что бы ты только ни бралась, у тебя всегда и всё получается просто
					прекрасно, у тебя золотые ручки.
					<br />
					ты пишешь картины, которые по-настоящему захватывают дух, они
					завораживают меня с самого первого дня, и никакие мировые шедевры не
					вызывают у меня столько эмоций, сколько самые простые из твоих
					зарисовок и скетчей. ты такая талантливая, аня...!!
					<br />
					<br />
					ты <span className="red">красивее всех на свете</span> для меня, — не
					только внешне, но и каждой частичкой своей души. я до сих пор
					смущаюсь, когда вижу тебя на фото. я обожаю твои ямочки на щеках, твои
					носогубные полосочки, твои прекрасные глаза, особенно когда ты
					улыбаешься... обожаю твои волосы, твои милые и аккуратные ручки,
					ножки, пальчики, все твои родинки и шрамики, да каждый твой миллиметр
					для меня — изысканность.
					<br />
					<br />
					ты самый чудесный человек на свете, моё «самое-самое» абсолютно во
					всём, и так будет всегда, ведь моя любовь к тебе не имеет условий.
					аня, я бесконечно счастлив, что судьба однажды свела нас вместе.{' '}
					<span className="golden">
						ты навсегда моё самое тёплое, комфортное, приятное место в этом мире
						— мой настоящий дом
					</span>
					. и мне жаль, что я так неумело это показывал.
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
					мне очень жаль, что я был тем ещё экземпляром и причинил тебе столько
					боли за последнее время. ты — моё счастье, и мне невыносимо думать о
					том, что из-за меня ты так долго чувствуешь себя плохо.
					<br />
					<br />я действительно сильно подвёл тебя, когда пообещал мигом
					справиться со своей тревожностью и не смог.
					<br />
					не потому что мне всё равно или лень, а потому что не знал как, —
					пытался держать всё в себе, находить способы успокоиться, но не
					прорабатывал проблему по-настоящему.
					<br />
					<br />
					но теперь я хоть научился дышать перед тем, как писать сообщения.
					спасибо тебе за терпение — я наконец понял, как важно просто слушать и
					принимать, а не выспрашивать.
					<br />
					<br />
					эти недели молчания заставили меня переосмыслить всё, что было за
					последние месяцы. я наконец увидел, как по-разному мы реагировали на
					стресс и проблемы, — тебе всегда было нужно уединение, время подумать
					и пространство, а мне наоборот, сразу же всё обсудить, разобрать и
					понять тебя как можно скорее. а ты и сама себя понять не могла,
					бедняжка...
					<br />
					<br />я хочу чтобы ты знала, что сейчас я учусь:
					<br />
					<span className="purple">—</span> не перекладывать на тебя то, с чем
					должен справляться сам.
					<br />
					теперь я понимаю, что тревога — это не что-то, что можно брать и
					сваливать на любимого человека, а моя личная ответственность и забота.
					не твоя.
					<br />
					<span className="purple">—</span> давать тебе время, не требуя «ответа
					здесь и сейчас».
					<br />я не знал, что мои попытки «решить всё сейчас» для тебя
					выглядели как давление и атаки. раньше такой подход казался мне
					правильным, потому что я не учитывал, что ты можешь иначе реагировать
					на конфликты, и поэтому твои попытки отойти от эмоций мне казались
					обидной отстраненностью и игнорированием.
					<br />
					<span className="purple">—</span> ценить твои слова, даже если они не
					те, что я хотел бы услышать.
					<br />
					я постоянно выражал недовольство и обиду за слова, которые отличались
					от того, что я тогда хотел услышать. это было максимально эгоистично и
					глупо, ведь все твои слова одинаково важны для меня, вне зависимости
					от их посыла, — они же твои.
					<br />
					<br />и хотя это всё было просто ужасно, знай, что я делал это не ради
					контроля и давления, а от переизбытка чувств и страха тебя потерять.
					<br />я просто не умел справляться с этим, как и ты когда-то не умела.
					<br />
					и мне жаль, что я осознал это всё так поздно...
					<br />
					<br />
					теперь я понимаю, что{' '}
					<span className="yellow">
						всё, что от меня требовалось — это просто быть рядом в трудную
						минуту, воздержаться от вопросов и разговоров о тревоге, когда ты
						напрямую об этом просила
					</span>
					.
					<br />
					<br />
					я должен был дарить тебе тепло в ответ на холод, понимать, что его
					причина в твоём самочувствии, а не в отношении ко мне.
					<br />
					должен был просто оставаться рядом в эти моменты, а не требовать
					поддержки когда тебе самой было хуже некуда.
					<br />
					<br />
					мне очень стыдно за то, что я, будучи тревожным комком нервов,
					сковывал твою свободу, устраивал бесконечные расспросы, глупую
					ревность… за то, что так долго не слышал тебя и обижался, пока твоя
					мама не объяснила мне всё, что ты всегда пыталась мне сказать.
					<br />
					<br />
					но благодаря ей я правда стал лучше!{' '}
					<span className="red">не идеальным</span>,{' '}
					<span className="green">но лучше</span>. и я продолжаю работать над
					этим и над тем, чтобы стать по-настоящему надёжным и стойким рядом с
					тобой, принимать тебя в любом состоянии.
					<br />
					<br />
					и я знаю, что ты боишься.
					<br />
					боишься того, что если простишь меня, то всё это рано или поздно
					повторится. что я снова начну трястись, тревожиться из-за пустяков,
					дотошничать из-за надуманных вещей. и я конечно же понимаю тебя в этом
					плане.
					<br />
					но я больше не хочу такого, — хочу лишь быть тем, кто{' '}
					<span className="green">защищает твой покой</span>,{' '}
					<span className="red">а не нарушает его</span>.
					<br />
					<br />я осознал, как сильно моя мнительность ранила тебя. понимаю, что
					был не прав и ошибался в некоторые моменты,{' '}
					<span className="blue">даже буквально на днях</span>.
					<br />
					но теперь я готов быть другим — без давления без тревог, которые
					душили тебя, без ощущения недоверия, которое тебя ранило.
					<br />
					<br />
					моя дорогая, я очень виноват перед тобой. пожалуйста, прости меня,
					если сможешь.
					<br />
					<br />
					я всё ещё верю в нас и очень надеюсь, что в один день у нас ещё всё
					может наладится. понимаю, что тебе нужно ещё больше времени и
					пространства, чтобы подумать, но если ты захочешь поговорить — знай, я
					всегда здесь. больше не лезу, терпеливо жду и никуда не пропадаю, как
					и моя любовь к тебе.
					<br />
					<br />
					это поздравление, как и все подарочки (если ты их уже получила) — не
					попытка нарушить твои границы, вывести тебя на разговор или как-то
					надавить. ты можешь просто прочитать его и не ответить, никаких
					скрытых ожиданий тут нет, — я прекрасно понимаю твоё самочувствие и
					эмоции. я просто очень хотел сделать тебе приятно.
					<br />
					<br />
					пусть этот год принесёт тебе столько света, сколько ты дарила мне.
					<br />
					ты — моя единственная родственная душа в этом мире, мой самый близкий
					и любимый человек, мой котёночек. и я бесконечно благодарен тебе за
					каждый момент, проведённый вместе со мной, — даже за те, в которых мы
					ругались. спасибо тебе за всё, анечка, ты мой ангел. надеюсь, ты в
					порядке, где бы ты ни была.
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
						я здесь!
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
			{showEnding ? (
				<>
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
							<img src="./slider/23423.jpg" alt="" />
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
				</>
			) : (
				''
			)}
		</div>
	);
}

export default App;
