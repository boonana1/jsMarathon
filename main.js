const $btn = document.querySelector('#btn-kick');
const $btn2 = document.querySelector('#btn-kick-2');
const $resetGame = document.querySelector('.logo');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.querySelector('#health-character'),
  elProgressBarHP: document.querySelector('#progressbar-character'),
};

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.querySelector('#health-enemy'),
  elProgressBarHP: document.querySelector('#progressbar-enemy'),
};

$btn.addEventListener('click', () => {
  btnDisable();
  changeHP(random(20), character);
  setTimeout(() => {
    changeHP(random(20), enemy);
    btnDisable();
  }, Math.random() * 800);
});
$btn2.addEventListener('click', () => {
  btnDisable();
  changeHP(random(10), character);
  setTimeout(() => {
    changeHP(random(10), enemy);
    btnDisable();
  }, Math.random() * 1000);
});

$resetGame.addEventListener('click', () => {
  resetGame();
});

const init = () => {
  console.log('Start Game');
  renderHP(character);
  renderHP(enemy);
};

const renderHP = (person) => {
  person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
  person.elProgressBarHP.style.width = person.damageHP + '%';
};

const changeHP = (count, person) => {
  if (person.damageHP < count) {
    person.damageHP = 0;
    btnDisable();
    alert(person.name + ' проиграл бой!');
  } else {
    person.damageHP -= count;
  }
  renderHP(person);
};

const btnDisable = () => {
  $btn.disabled = !$btn.disabled;
  $btn2.disabled = !$btn2.disabled;
};

const resetGame = () => {
  document.location.reload(true);
};

const random = (num) => {
  return Math.ceil(Math.random() * num);
};

init();
