var description = document.querySelector('.description')
var posterList = document.querySelector('.poster-list')

var highlight1 = document.querySelector('.highlight.one')
var poster1 = document.querySelector('.poster.one')

highlight1.addEventListener('mouseover', function() {
	description.classList.add('is-active')
	posterList.classList.add('is-active')
	poster1.classList.add('is-active')
})

highlight1.addEventListener('mouseout', function() {
	description.classList.remove('is-active')
	posterList.classList.remove('is-active')
	poster1.classList.remove('is-active')
})
