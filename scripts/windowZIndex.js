const windows =  document.querySelectorAll('.window')

windows.forEach(element => {

    element.addEventListener('click', () => {

        windows.forEach(element => {
            element.classList.remove('zIndex2');
        })

        element.classList.add('zIndex2');
        
    });
    
})
