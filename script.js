document.getElementById('applicationForm').addEventListener('submit', function(e){
  e.preventDefault();
  const message=document.getElementById('formMessage');
  message.textContent='Application captured locally. Connect this form to your application backend before going live.';
  message.scrollIntoView({behavior:'smooth',block:'nearest'});
});
