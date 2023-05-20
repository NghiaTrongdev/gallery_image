var images = document.querySelectorAll('.item img')
var close = document.querySelector('.close')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var gallery = document.querySelector('.gallery')
var galleryImg = document.querySelector('.image img')

var pos =0

images.forEach((item, index)=>
{
    item.addEventListener('click',function()
    {
        pos = index
        show()
    })
})
function show ()
{
    if (pos ==0)
    {
        prev.classList.add('hide')
    }else 
    {
        prev.classList.remove('hide')
    }
    if (pos == images.length-1)
    {
        next.classList.add('hide')
    }else 
    {
        next.classList.remove('hide')
    }
    galleryImg.src = images[pos].src
    gallery.classList.add('show')
}
close.addEventListener('click',function()
{
    gallery.classList.remove('show')
})
prev.addEventListener('click',function()
{
    if (pos > 0)
    {
        pos--
        show()
    }
})
next.addEventListener('click',function()
{
    if (pos < images.length-1)
    {
        pos++
        show()
    }
})

