$('.password-control').click(function () {
  if ($('.password-input').attr('type') === 'password') {
    $(this).addClass('view');
    $('.password-input').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('.password-input').attr('type', 'password');
  }
  return false;
});
$('[name=quantity]').bind("change keyup input click", function () {
  if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) {
    this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s]/g, '');
  }
});
$(document).ready(function () {
  $(".exim-btn-items").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 750);
  });
});
// cabinet-account-load-photo
window.loadPhotoURL = function loadPhotoURL(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      input.previousElementSibling.style.backgroundImage = `url(${e.target.result})`;
      input.previousElementSibling.innerHTML = ' ';
    };
    reader.readAsDataURL(input.files[0]);
    document.getElementsByClassName('')
  }
};

// all photo loading
window.readURL = function readURL(input) {
  let rel = Number(input.getAttribute('rel'));
  const nameInput = input.getAttribute('data-name');
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      input.previousElementSibling.style.backgroundImage = `url(${e.target.result})`;
      input.previousElementSibling.innerHTML = ' ';
      input.nextElementSibling.classList.remove('hidden');
    };
    reader.readAsDataURL(input.files[0]);
    document.getElementsByClassName('')
  }
  rel++;
  const wrapper = input.parentElement.parentElement.parentElement;
  if (!input.parentElement.parentElement.nextElementSibling) {
    let htmlSection = `
			<li class="cabinet-register-container-form-addFile-item">
			 <label>
			   <div class="addFile-inner">
			       <img src="img/data-falling/plus.png" alt="plus">
			       <span>Загрузить</span>
			   </div>
			   <input type="file" onchange="readURL(this)" rel="${rel}" name='${nameInput}[${rel}]'>
			   <em class="hidden">замена изображения</em>
			 </label>
			 <a href="javascript:" class="remove-container" onclick="this.parentElement.remove()">&times;</a>
			</li>`;
    wrapper.insertAdjacentHTML("beforeend", htmlSection);
  }
}

// cabinet-declaration add form
const declarationinputsWrapper = document.getElementById('declaration-input-wrapper');
if (declarationinputsWrapper) {
  const declarationCounter = document.getElementById('declaration-input');
  let declarationInputNumber = Number(declarationCounter.getAttribute('rel')) + 1;
  let declarationAddSwitcher = document.getElementById('add-switcher');
  declarationAddSwitcher.addEventListener('click', () => {
    declarationinputsWrapper.insertAdjacentHTML("afterbegin", `
		<div class="cabinet-declaration-form-top">
			<div class="cabinet-declaration-form-inputs">
				<label>
					<span>Наименование товара</span>
					<input type="text" class="input-kervan" placeholder="Наименование товара" name="product[${declarationInputNumber}]"/>
				</label>
				<label>
					<span>Количество товара</span>
					<input type="text" class="input-kervan" placeholder="шт" name="count[${declarationInputNumber}]"/>
				</label>
			</div>
			<button type="button" id="remove-switcher" class="remove-switcher" onclick="this.parentElement.remove()">
				<span>-</span>
			</button>
		</div>
	  `);
    declarationInputNumber++;
  });
}

// cabinet-register-farmer add form
const farmerinputsWrapper = document.getElementById('farmer-input-wrapper');
if (farmerinputsWrapper) {
  const declarationCounter = document.getElementById('declaration-input');
  let declarationInputNumber = Number(declarationCounter.getAttribute('rel')) + 1;
  let declarationAddSwitcher = document.getElementById('add-switcher');
  declarationAddSwitcher.addEventListener('click', () => {
    farmerinputsWrapper.insertAdjacentHTML("afterbegin", `
		<div class="cabinet-declaration-form-top cabinet-register-farmer">
			<div class="cabinet-declaration-form-inputs">
				<label>
					<span>Посев*</span>
					<input type="text" class="input-kervan" placeholder="_____" name="product[${declarationInputNumber}]"/>
				</label>
			</div>
			<button type="button" id="remove-switcher" class="remove-switcher" onclick="this.parentElement.remove()">
				<span>-</span>
			</button>
		</div>
	  `);
    declarationInputNumber++;
  });
}


window.uploadCompanyFIleRegister = function (input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.readAsText(input.files[0]);
    const fileName = input.files[0].name;
    const htmlWrapper = document.querySelector('.cabinet-edit-data-load-wrapper');
    const wrapper = `
          <div class="cabinet-edit-data-load-complete">
            <div class="cabinet-edit-data-load-complete-img">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28"><g><g><path fill="#a1abb8" d="M13.1 9.8V2.1l7.7 7.7zM3.3 0A2.796 2.796 0 0 0 .514 2.8L.5 25.2c0 1.54 1.246 2.8 2.786 2.8H20.1c1.54 0 2.8-1.26 2.8-2.8V8.4L14.5 0z"/></g></g></svg>
                </span>
            </div>
            <div class="cabinet-edit-data-load-complete-text">
               <h5>${fileName}</h5>
            </div>
            <a class="cabinet-edit-data-load-complete-delete" href="javascript:" onclick="this.parentElement.remove()">
              <span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14"><g><g><path fill="#a1abb8" d="M10.5 2.625H0V.875h2.625L3.5 0H7l.875.875H10.5zM.875 3.5h8.75v8.75c0 .963-.787 1.75-1.75 1.75h-5.25c-.963 0-1.75-.787-1.75-1.75zm10.5 3.5h5.25v1.75h-5.25zm0-3.5H17.5v1.75h-6.125zm0 7h3.5v1.75h-3.5z"/></g></g></svg>
              </span>
            </a>
          </div>`
    htmlWrapper.innerHTML = wrapper;
  }
}