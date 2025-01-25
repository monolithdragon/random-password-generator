const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];

const passwordFirst = document.getElementById('password-01');
const passwordSecond = document.getElementById('password-02');
const passwordLength = document.getElementById('password-length');
const checkboxNumber = document.getElementById('checkbox-number');
const checkboxSymbol = document.getElementById('checkbox-symbol');

function generatePassword() {
	ResetContent();

	const characterResult = getCharactersMatch();

	for (let index = 0; index < passwordLength.value; index++) {
		const characterIndex = Math.floor(Math.random() * characterResult.length);

		passwordFirst.textContent += characterResult[characterIndex];
		passwordSecond.textContent +=
			characterResult[
				characterIndex === 0 ? characterIndex + 1 : characterIndex - 1
			];
	}
}

function ResetContent() {
	passwordFirst.textContent = '';
	passwordSecond.textContent = '';
}

async function copy(text) {
	try {
		await navigator.clipboard.writeText(text);
		console.log('Content copied to clipboard');
		alert('Copied the text: ' + text);
	} catch (err) {
		console.error('Failed to copy: ', err);
	}
}

function getCharactersMatch() {
	if (!checkboxNumber.checked && !checkboxSymbol.checked) {
		return characters.join().match(/[a-zA-Z]/gi);
	} else if (checkboxNumber.checked && !checkboxSymbol.checked) {
		return characters.join().match(/[a-zA-Z0-9]/gi);
	} else if (checkboxSymbol.checked && !checkboxNumber.checked) {
		return characters
			.join()
			.match(/[a-zA-Z-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/gi);
	}

	return characters;
}

passwordFirst.addEventListener('click', () => copy(passwordFirst.innerText));
passwordSecond.addEventListener('click', () => copy(passwordSecond.innerText));
