const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');

// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open');
});

// close request modal
requestModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('new-request')) {
    requestModal.classList.remove('open');
  }
});

// sayhello function call
const btn = document.querySelector('.call');
btn.addEventListener('click', () => {
  //get function reference
  const sayHello = firebase.functions().httpsCallable('sayHello');
  sayHello({name: 'shaun', profession: 'instructor for programming'}).then(result => {
    console.log(result.data);
  });
})