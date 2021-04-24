const gloAcademiList = document.querySelector('.glo-academy-list')


// передаем в функцию две переменные  блок враппер и список видео

const createList = (wrapper,listVideo) => {
console.log(listVideo);


   //wrapper.innerHTML= '' //очищаем враппер
   wrapper.textContent= '' //очищаем враппер
  //  listVideo.map(item =>{
  //    console.log(item);
  //    return item
  //  })

// первый способ перебора

  // for(let i = 0 ; i < listVideo.length ;i++){
  //   wrapper.textContent += listVideo[i]
  // }

// второй способ перебора массива

// for(item of listVideo){
//   console.log(item);
//   wrapper.textContent += item

// }

// третий способ перебора



// listVideo.map(item=>wrapper.innerHTML += `

// <div class="video-card">
//             <div class="video-thumb">
//               <a class="link-video youtube-modal" href="https://youtu.be/NtcgznHOBlc">
//                 <img src="${item.snippet.thumbnails.medium.url}" alt="" class="thumbnail">
//               </a>
//             </div>
//             <!-- /.video-thumb -->
//             <h3 class="video-title">${item.snippet.title}</h3>
//             <div class="video-info">
//               <span class="video-counter">
//                 <span class="video-date">${item.snippet.publishTime}</span>
//               </span>
//               <span class="video-channel">Glo Academy</span>
//             </div>
//             <!-- /.video-info -->
//             <!-- /.video-card -->
//           </div>
// `)

listVideo.map(item=>wrapper.append(createCard(item)))}

// функция создание карточки

const createCard = (ludoyObject)=>{
// console.log(ludoyObject);
const{thumbnails,title,publishTime,channelTitle} = ludoyObject.snippet

let card = document.createElement('div') // создаем див

card.classList.add('video-card') // добавляем созданному диву класс

card.innerHTML =  `
            <div class="video-thumb">
              <a class="link-video youtube-modal" href="https://youtu.be/${ludoyObject.id.videoId}">
                <img src="${thumbnails.high.url}" alt="" class="thumbnail">
              </a>
            </div>
            <h3 class="video-title">${title}</h3>
            <div class="video-info">
              <span class="video-counter">
                <span class="video-date">${publishTime}</span>
              </span>
              <span class="video-channel">${channelTitle}</span>
            </div>
                 
`
return  card 
}



createList(gloAcademiList,gloAcademy)

const foo = (jj,name)=> {
  const a = 1
  return  () => {
    console.log(jj(name))
    console.log(a)
  }
}

function bar(nm) {
  return 'Привет ' + nm;
} 


const max = foo(bar,'любое имя')
console.log(max);
console.dir(max);
max()