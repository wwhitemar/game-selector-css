const levels = [
	{ task: "Выбери все тарелки.", hint: "Попробуй выбрать элементы по их классу, например, классу тарелок.", answer: ".plate", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="plate">Тарелка</div>` },
	{ task: "Выбери все яблоки.", hint: "Каждое яблоко имеет свой класс. Попробуй найти его в HTML-коде.", answer: ".apple", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="plate">Тарелка</div>` },
	{ task: "Выбери все бенто.", hint: "Бенто — это тоже класс. Посмотри, как он называется.", answer: ".bento", items: `<div class="bento">Бенто</div><div class="apple">Яблоко</div><div class="bento">Бенто</div>` },
	{ task: "Выбери все маленькие элементы.", hint: "Маленькие элементы имеют особый класс. Найди его.", answer: ".small", items: `<div class="plate small">Маленькая тарелка</div><div class="apple">Яблоко</div><div class="plate">Тарелка</div>` },
	{ task: "Выбери первый элемент.", hint: "Есть псевдокласс, который выбирает первый элемент среди детей. Как он называется?", answer: ".table :first-child", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="plate">Тарелка</div>` },
	{ task: "Выбери все тарелки и яблоки.", hint: "Можно выбрать несколько разных классов, перечислив их через запятую.", answer: ".plate, .apple", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="orange">Апельсин</div>` },
	{ task: "Выбери все элементы с классом small внутри тарелок.", hint: "Попробуй указать, что элемент с определённым классом находится внутри другого элемента.", answer: ".plate .small", items: `<div class="plate"><div class="small">Маленькая</div></div><div class="apple">Яблоко</div><div class="small">Маленькая</div>` },
	{ task: "Выбери все бенто после тарелок.", hint: "Есть селектор, который выбирает элемент, следующий сразу за другим. Попробуй его.", answer: ".plate + .bento", items: `<div class="plate">Тарелка</div><div class="bento">Бенто</div><div class="plate">Тарелка</div>` },
	{ task: "Выбери последний элемент.", hint: "Какой псевдокласс позволяет выбрать последний элемент среди детей?", answer: ".table :last-child", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="bento">Бенто</div>` },
	{ task: "Выбери все тарелки или бенто.", hint: "Перечисли два класса через запятую, чтобы выбрать и те, и другие.", answer: ".plate, .bento", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="bento">Бенто</div>` },
	{ task: "Выбери все апельсины.", hint: "Апельсины имеют свой класс. Проверь HTML-код, чтобы узнать, какой.", answer: ".orange", items: `<div class="plate">Тарелка</div><div class="orange">Апельсин</div><div class="apple">Яблоко</div>` },
	{ task: "Выбери все соленья.", hint: "Соленья тоже обозначены классом. Найди его название.", answer: ".pickle", items: `<div class="pickle">Соленье</div><div class="apple">Яблоко</div><div class="pickle">Соленье</div>` },
	{ task: "Выбери второй элемент.", hint: "Есть псевдокласс, который выбирает элемент по его порядковому номеру. Какой?", answer: ".table :nth-child(2)", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="bento">Бенто</div>` },
	{ task: "Выбери все нечётные элементы.", hint: "Псевдокласс может выбирать элементы по их позиции. Попробуй выбрать нечётные.", answer: ".table :nth-child(odd)", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="bento">Бенто</div>` },
	{ task: "Выбери все чётные элементы.", hint: "Как выбрать элементы на чётных позициях? Найди подходящий псевдокласс.", answer: ".table :nth-child(even)", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="bento">Бенто</div><div class="orange">Апельсин</div>` },
	{ task: "Выбери все маленькие тарелки.", hint: "Некоторые элементы имеют два класса. Как выбрать элементы, у которых есть оба?", answer: ".plate.small", items: `<div class="plate small">Маленькая тарелка</div><div class="apple">Яблоко</div><div class="plate">Тарелка</div>` },
	{ task: "Выбери все элементы после бенто.", hint: "Есть селектор, который выбирает все элементы, следующие за другим. Какой?", answer: ".bento ~ div", items: `<div class="plate">Тарелка</div><div class="bento">Бенто</div><div class="apple">Яблоко</div><div class="orange">Апельсин</div>` },
	{ task: "Выбери первый бенто.", hint: "Комбинируй класс с псевдоклассом, чтобы выбрать первый элемент определённого типа.", answer: ".bento:first-child", items: `<div class="bento">Бенто</div><div class="apple">Яблоко</div><div class="bento">Бенто</div>` },
	{ task: "Выбери последний апельсин.", hint: "Какой псевдокласс поможет выбрать последний элемент определённого класса?", answer: ".orange:last-child", items: `<div class="plate">Тарелка</div><div class="orange">Апельсин</div><div class="orange">Апельсин</div>` },
	{ task: "Выбери все тарелки перед яблоками.", hint: "Попробуй селектор, который выбирает элемент, за которым сразу следует другой.", answer: ".plate + .apple", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="plate">Тарелка</div>` },
	{ task: "Выбери третий элемент.", hint: "Используй псевдокласс для выбора элемента по его позиции. Номер — 3.", answer: ".table :nth-child(3)", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="bento">Бенто</div>` },
	{ task: "Выбери все элементы, кроме последнего.", hint: "Есть псевдокласс, который исключает элементы. Как исключить последний?", answer: ".table :not(:last-child)", items: `<div class="plate">Тарелка</div><div class="apple">Яблоко</div><div class="bento">Бенто</div>` },
	{ task: "Выбери все бенто с классом small.", hint: "Как выбрать элементы, у которых есть два класса одновременно?", answer: ".bento.small", items: `<div class="bento small">Маленькое бенто</div><div class="bento">Бенто</div><div class="apple">Яблоко</div>` },
	{ task: "Выбери все элементы после первого бенто.", hint: "Какой селектор выбирает все элементы, следующие за определённым?", answer: ".bento ~ div", items: `<div class="bento">Бенто</div><div class="plate">Тарелка</div><div class="apple">Яблоко</div>` },
	{ task: "Выбери все тарелки, кроме маленьких.", hint: "Попробуй исключить элементы с определённым классом.", answer: ".plate:not(.small)", items: `<div class="plate small">Маленькая тарелка</div><div class="plate">Тарелка</div><div class="apple">Яблоко</div>` },
	{ task: "Выбери второй бенто.", hint: "Комбинируй класс с псевдоклассом, чтобы выбрать второй элемент этого типа.", answer: ".bento:nth-child(2)", items: `<div class="plate">Тарелка</div><div class="bento">Бенто</div><div class="bento">Бенто</div>` },
	{ task: "Выбери все элементы внутри бенто.", hint: "Как выбрать элементы, которые являются детьми другого элемента?", answer: ".bento div", items: `<div class="bento"><div>Элемент</div></div><div class="apple">Яблоко</div><div class="plate">Тарелка</div>` },
	{ task: "Выбери все апельсины перед тарелками.", hint: "Используй селектор, который выбирает элемент, за которым следует другой.", answer: ".orange + .plate", items: `<div class="orange">Апельсин</div><div class="plate">Тарелка</div><div class="apple">Яблоко</div>` },
	{ task: "Выбери все не маленькие элементы.", hint: "Как исключить элементы с определённым классом?", answer: ".table :not(.small)", items: `<div class="plate small">Маленькая тарелка</div><div class="apple">Яблоко</div><div class="bento">Бенто</div>` },
	{ task: "Выбери все элементы с классом pickle или orange.", hint: "Перечисли два класса через запятую.", answer: ".pickle, .orange", items: `<div class="pickle">Соленье</div><div class="orange">Апельсин</div><div class="apple">Яблоко</div>` }
];

let currentLevel = 0;

function loadLevel() {
	const level = levels[currentLevel];
	document.getElementById('level-num').textContent = currentLevel + 1;
	document.getElementById('task-text').textContent = level.task;
	document.getElementById('hint-text').textContent = level.hint;
	document.getElementById('table').innerHTML = level.items;

	// Скрываем подсказку при загрузке нового уровня
	const hintText = document.getElementById('hint-text');
	hintText.style.display = 'none';

	// Показываем HTML-код элементов на столе
	const tableContent = document.getElementById('table').innerHTML;
	document.getElementById('html-code').textContent = `<div class="table">\n  ${tableContent.replace(/></g, '>\n  ').replace(/<\/div>$/, '\n</div>')}\n</div>`;

	document.getElementById('selector-input').value = '';
	document.getElementById('next-btn').style.display = 'none';
	document.querySelector('button[onclick="checkAnswer()"]').style.display = 'inline';
}

function toggleHint() {
	const hintText = document.getElementById('hint-text');
	hintText.style.display = hintText.style.display === 'none' ? 'block' : 'none';
}

function checkAnswer() {
	const input = document.getElementById('selector-input').value.trim().toLowerCase();
	const level = levels[currentLevel];
	const correctAnswer = level.answer.toLowerCase();
	const allElements = document.querySelectorAll('.table > *');

	allElements.forEach(el => el.classList.remove('highlight'));

	try {
			const selectedElements = document.querySelectorAll(input);
			const correctElements = document.querySelectorAll(correctAnswer);

			const selectedArray = Array.from(selectedElements);
			const correctArray = Array.from(correctElements);

			const isCorrect = selectedArray.length === correctArray.length &&
					selectedArray.every((el, index) => el === correctArray[index]);

			if (isCorrect) {
					correctElements.forEach(el => el.classList.add('highlight'));
					document.getElementById('next-btn').style.display = 'inline';
					document.querySelector('button[onclick="checkAnswer()"]').style.display = 'none';
					alert('Правильно!');
			} else {
					alert('Неправильно. Попробуй ещё раз!');
			}
	} catch (e) {
			alert('Ошибка в селекторе. Проверь синтаксис!');
	}
}

function nextLevel() {
	currentLevel++;
	if (currentLevel < levels.length) {
			loadLevel();
	} else {
			alert('Поздравляю! Ты прошёл все уровни!');
			currentLevel = 0;
			loadLevel();
	}
}

loadLevel();