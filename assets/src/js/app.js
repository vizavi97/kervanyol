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
  const nameInput = input.getAttribute('name');
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      input.previousElementSibling.style.backgroundImage = `url(${e.target.result})`;
      input.previousElementSibling.innerHTML = ' ';
      input.nextElementSibling.classList.remove('hidden');
    };
    reader.readAsDataURL(input.files[0]);
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
			</li>`;
    const remover = '<a href="javascript:" class="remove-container" onclick="this.parentElement.parentElement.remove()">&times;</a>'
    input.insertAdjacentHTML('afterend', remover);
    wrapper.insertAdjacentHTML("beforeend", htmlSection);
  }
};

// cabinet-declaration add form
const declarationinputsWrapper = document.getElementById('declaration-input-wrapper');
if (declarationinputsWrapper) {
  const declarationCounter = document.getElementById('declaration-input');
  let declarationInputNumber = Number(declarationCounter.getAttribute('rel')) + 1;
  let declarationAddSwitcher = document.getElementById('add-switcher');
  declarationAddSwitcher.addEventListener('click', () => {
    declarationinputsWrapper.insertAdjacentHTML("afterbegin", `
		<div class="cabinet-declaration-form-top">
			<div class="form-row">
				<label class="col-lg-6 col-12">
					<span>Наименование товара</span>
					<input type="text" class="form-control" placeholder="Наименование товара" name="products[${declarationInputNumber}][name]"/>
				</label>
				<label class="col-lg-6 col-12">
					<span>Количество товара</span>
					<input type="text" class="form-control form-control-number" placeholder="шт" name="count[${declarationInputNumber}][quantity]"/>
				</label>
			</div>
			<button type="button" id="remove-switcher" class="remove-switcher" onclick="this.parentElement.remove()">
				<span>-</span>
			</button>
		</div>
	  `);
    document.querySelector('.form-control-number') ?
    document.querySelectorAll('.form-control-number').forEach(function (el) {
      new Cleave(el, {numeral: true});
    }) : null;
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
			<div class="form-row">
				<label class="col-12">
					<span>Посев *</span>
					<input type="text" class="form-control" placeholder="_____" name="product[${declarationInputNumber}]"/>
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
  if (input.files) {
    const inputFiles = input.files;
    const collection = [...inputFiles].map(file => {
      window.removeFileIntoInput = function () {
        inputFiles.value = '';
        Array.from(document.querySelectorAll('.cabinet-edit-data-load-complete')).forEach(elem => elem.remove())
      }
      return (
        `
          <div class="cabinet-edit-data-load-complete">
            <div class="cabinet-edit-data-load-complete-img">
                <span class="icon-file1"></span>
            </div>
            <div class="cabinet-edit-data-load-complete-text">
               <h5>${file.name}</h5>
            </div>
            <a class="cabinet-edit-data-load-complete-delete" href="javascript:" onclick="this.parentElement.remove()">
              <span class="icon-delete"></span>
            </a>
          </div>
        `)
    }).join('');
    input.parentElement.insertAdjacentHTML("beforebegin", collection);
  }
};
