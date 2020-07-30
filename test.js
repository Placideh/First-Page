let items=document.getElementsByClassName('list-item');
for(let i of items){

i.style.backgroundColor='#ade';
}

let register=document.querySelector('h2');
// register.style.color='#f4f4f4';
// register.style.border="1px solid #f4f4f4";
let list=document.querySelector('.list-item');
// list.style.color='red';
let myList=document.querySelector('.myList');
myList.style.backgroundColor='#ccc';	
// console.log(myList.children);
// console.log(myList.firstElementChild);
// console.log(myList.lastElementChild);
let innerList=document.querySelector('.list-item');
// console.log(innerList.nextElementSibling);
// console.log(innerList.previousElementSibling);
// console.log(myList.children);
// let newDiv=document.createElement('div');
// newDiv.className='yoh';
// newDiv.setAttribute('title','Hello There');
// // console.log(newDiv);
// let newText=document.createTextNode('Hello Internet');
// newDiv.appendChild(newText);
// let ul=document.createElement('ul');
// ul.id='list';
// let li=document.createElement('li');
// let lis=document.createTextNode('Placha');
// li.appendChild(lis);
// ul.appendChild(li);

// newDiv.appendChild(ul);
// //Inserting New Element in Dom
// let placing=document.querySelector('.myList .addItems ');
// let placed=document.querySelector('.myList .btn-click');
// // placing.insertBefore(newDiv,placed);

let button=document.getElementById('btn-click');
let newList=document.getElementById('list');
button.addEventListener('click',buttonClicked);

function buttonClicked(e){
	e.preventDefault();
let keyBoard=document.getElementById('keyBoard');
let newItem=document.createElement('li');
newItem.className='list-item';
let div=document.createElement('div');
div.className='btn-div';
let btn=document.createElement('button');
btn.className='btn2';
let text=document.createTextNode('X');
btn.appendChild(text);
div.appendChild(btn);
newItem.appendChild(div);
let output=document.createTextNode(keyBoard.value);
newItem.appendChild(output);
newList.appendChild(newItem);
}

let deleteBtn=document.querySelector('#list');
deleteBtn.addEventListener('dblclick',deleteItem);
let lis=document.querySelector('.list-item');

function deleteItem(e) {
	if (e.target.classList.contains('btn2')) {
		if (confirm('Are you Sure')) {
			// let li=e.target.parentElement;
			lis=e.target.parentElement.parentElement;
			deleteBtn.removeChild(lis);
			// console.log(e);
			// console.log(lis);
			/*HELLO FINALLY I I  I DID IT 
			JUST WITH MY BRAIN AND I HAVE SEEN that 
			everything is possible if we don't give up! */
		}
	}
	
}
//search 
let search=document.querySelector('#searchBtn');
//add Event
search.addEventListener('keyup',filter);

function filter(e){
	let text=e.target.value.toLowerCase();
	console.log(text);
	let items=document.querySelector('#list');
	let lis=items.getElementsByTagName('li')

	console.log(lis);
	Array.from(lis).forEach(item=>{
		let itemName=item.firstChild.textContent;
		console.log(itemName);
		if(itemName.toLowerCase().indexOf(text)!=-1){
			item.style.display='block';
		}else{
			item.style.display='none';
		}
	});

}


