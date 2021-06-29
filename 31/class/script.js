$('.accordion-item__title').on('click', function(e) {
  $(this)
    .parent('.accordion-item')
    .siblings('.accordion-item')
    .children('.accordion-item__content')
    .slideUp(300)

  const contentElement = $(this).siblings('.accordion-item__content')
  
  if (contentElement.css('display') === 'none') {
    contentElement
    .slideDown(300)
  } else {
    contentElement
    .slideUp(300)
  }
})

$(window).on('click', function(event) {
  if ($(event.target).closest('.accordion-item').length === 0) {
    $('.accordion-item__content')
      .slideUp(300)
  }
})
