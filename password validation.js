
let pswrd=document.getElementById('pswrd');
let toggleBtn= document.getElementById('toggleBtn');


let lower=document.getElementById('lower');
let upper=document.getElementById('upper');
let special=document.getElementById('special');
let num=document.getElementById('num');
let chars=document.getElementById('chars');

function checkpassword(data)
{
   let lowercase= new RegExp('(?=.*[a-z])');
   let uppercase= new RegExp('(?=.*[A-Z])');
   let specialcase= new RegExp('(?=.*[!@?/\%])');
   let numcase= new RegExp('(?=.*[0-9])');
   let charscase= new RegExp('(?=.{8,})');

if (lowercase.test(data)) {
	lower.classList.add('valid');
}
	else{
lower.classList.remove('valid');
	}

	if (uppercase.test(data)) {
	upper.classList.add('valid');
}
	else{
upper.classList.remove('valid');
	}

	if (specialcase.test(data)) {
	special.classList.add('valid');
}
	else{
special.classList.remove('valid');
	}

	if (numcase.test(data)) {
	num.classList.add('valid');
}
	else{
num.classList.remove('valid');
	}

	if (charscase.test(data)) {
	chars.classList.add('valid');
}
	else{
chars.classList.remove('valid');
	}


}

toggleBtn.onclick=function(){
	if (pswrd.type == 'password') {
		pswrd.setAttribute('type','text');
		toggleBtn.classList.add('hide');
	}
	else{
		pswrd.setAttribute('type','password');
		toggleBtn.classList.remove('hide');
	}

}