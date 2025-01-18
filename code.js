'use strict'
const swtr = document.querySelector(".btnch");
swtr.addEventListener('click', function()
{
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
    const className = document.body.className;
    if (className == 'dark')
    {
        this.textContent = "Light";
    } else
    {
        this.textContent = "Dark";
    }
});