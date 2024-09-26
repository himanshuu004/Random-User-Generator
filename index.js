var btn = document.querySelector("button");



function getNewUSer(){
  fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(result =>{
  const{name,email,gender,picture}=result.results[0];

  document.querySelector(".cards").innerHTML +=`
        <div class="card w-56 p-4  rounded-xl bg-zinc-600">
        <div class="w-32 h-32 mb-2  bg-white rounded-full overflow-hidden">
          <img  src="${picture.large}" class="w-full h-full fit-cover" alt="user photo">
        </div>
        <h3 class="font-semibold text-2xl">${name.first}</h3>
        <h4 class="font-semibold text-sm opacity-90">${gender}</h4>
        <h5 class="font-semibold text-sm opacity-60">${email}</h5>
        <p class="mt-1.5 text-xs font-semibold opacity-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>`

});
}

btn.addEventListener("click",function(){
  getNewUSer();
})
