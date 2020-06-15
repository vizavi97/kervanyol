
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
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 750);
    })
});

// cabinet-account-load-photo
$(".addedPhoto").change(function () {
    loadPhotoURL(this);

    function loadPhotoURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                input.previousElementSibling.style.backgroundImage = `url(${e.target.result})`;
                input.previousElementSibling.innerHTML = ' ';
            };
            reader.readAsDataURL(input.files[0]);
            document.getElementsByClassName('')
        }
    }
});
// all photo loading
$(".addedPhotoAll").change(function () {
    readURL(this);

    function readURL(input) {
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
			   <input type="file"
			    onchange="readURL(this)"
			     rel="${rel}"
			     name='${nameInput}[${rel}]'>
			   <em class="hidden">замена изображения</em>
			 </label>
			 <a href="javascript:" class="remove-container" onclick="this.parentElement.remove()">&times;</a>
			</li>`;
            wrapper.insertAdjacentHTML("beforeend", htmlSection);
        }
    }
});

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

// zoom product
function imageZoom(imgID, resultID) {
        var img, lens, result, cx, cy;
        img = document.getElementById(imgID);
        result = document.getElementById(resultID);
        /*create lens:*/
        lens = document.createElement("DIV");
        lens.setAttribute("class", "img-zoom-lens");
        /*insert lens:*/
        img.parentElement.insertBefore(lens, img);
        /*calculate the ratio between result DIV and lens:*/
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        /*set background properties for the result DIV:*/
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        /*execute a function when someone moves the cursor over the image, or the lens:*/
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        /*and also for touch screens:*/
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);

        function moveLens(e) {
            var pos, x, y;
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e);
            /*calculate the position of the lens:*/
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            /*prevent the lens from being positioned outside the image:*/
            if (x > img.width - lens.offsetWidth) {
                x = img.width - lens.offsetWidth;
            }
            if (x < 0) {
                x = 0;
            }
            if (y > img.height - lens.offsetHeight) {
                y = img.height - lens.offsetHeight;
            }
            if (y < 0) {
                y = 0;
            }
            /*set the position of the lens:*/
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            /*display what the lens "sees":*/
            result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        }

        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            /*get the x and y positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x and y coordinates, relative to the image:*/
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x: x, y: y};
        }
    }

imageZoom("myimage", "myresult");
