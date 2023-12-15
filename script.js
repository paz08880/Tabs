const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        tabs.forEach((tab) => {
            tab.classList.remove("active-tab");
        })
        tab.classList.add("active-tab") ;
        let line = document.querySelector('.line-tab')
        if(index == 3){
            line.style.width = "100%";
        }else{
            line.style.width = e.target.offsetLeft + "px";
        }
        contents.forEach((tab) => {
            tab.classList.remove("active-content");
        })
        contents[index].classList.add("active-content")
    });
});
