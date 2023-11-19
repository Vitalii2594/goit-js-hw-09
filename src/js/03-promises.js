import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  let delay = Number(e.currentTarget.elements.delay.value);
  const step = Number(e.currentTarget.elements.step.value);
  const amount = Number(e.currentTarget.elements.amount.value);

  if (step < 0 || delay < 0 || amount <= 0) {
    Notiflix.Notify.failure('Invalid input values');
    return;
  }

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(`Fullfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`)
      );
    delay += step;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
