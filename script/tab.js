let tabList = document.querySelectorAll('.title > li');
let imgList = document.querySelectorAll('.gallery > li');

tabList.forEach((tab, idx)=>{
  tab.addEventListener('click', function(){
    imgList.forEach((img)=>{
      img.classList.remove('on');
    });
    tabList.forEach((List)=>{
      List.classList.remove('on');
    });
    imgList[idx].classList.add('on');
    tabList[idx].classList.add('on');
  });
});