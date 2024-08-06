document.addEventListener("DOMContentLoaded" , () =>{
    var printPagee = document.querySelector('#printPage');
    printPagee.addEventListener('click' , ()=>{
        window.print();
    })
})