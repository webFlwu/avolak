/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Sidebar Js
04. Sticky Header Js
05. Brand Slider Js
06. Testimonial Slider Js
07. Multi Select
08. Input Number
09. Price Box Popup
10. Password Toggle

****************************************************/

;(function ($) {
  'use strict'

  var windowOn = $(window)
  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  windowOn.on('load', function () {
    $('#loading').fadeOut(500)
  })

  ////////////////////////////////////////////////////
  // 02. Mobile Menu Js
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '1199',
    meanExpand: ['<i class="fal fa-plus"></i>'],
  })

  ////////////////////////////////////////////////////
  // 03. Sidebar Js
  $('#sidebar-toggle').on('click', function () {
    $('.sidebar__area').addClass('sidebar-opened')
    $('.body-overlay').addClass('opened')
  })
  $('.sidebar__close-btn').on('click', function () {
    $('.sidebar__area').removeClass('sidebar-opened')
    $('.body-overlay').removeClass('opened')
  })

  ////////////////////////////////////////////////////
  // 04. Sticky Header Js
  windowOn.on('scroll', function () {
    var scroll = $(window).scrollTop()
    if (scroll < 800) {
      $('#header-sticky').removeClass('sticky')
    } else {
      $('#header-sticky').addClass('sticky')
    }
  })

  ////////////////////////////////////////////////////
  // 05. Brand Slider Js

  $('.brand__slider').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    autoplay: true,
    pauseOnHover: false,
    dots: false,
    nav: false,
    responsive: {
      300: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 6,
      },
    },
  })

  ////////////////////////////////////////////////////
  // 06. Testimonial Slider Js

  $('.testimonial__slider').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 30,
    autoplay: true,
    pauseOnHover: false,
    dots: false,
    nav: false,
    responsive: {
      300: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  })

  ////////////////////////////////////////////////////
  // 07. Multi Select

  $('.multi-select-head').click(function (e) {
    var currentWrap = $(this).parents('.multi-select-wrap')
    var currentBox = currentWrap.find('.multi-select-box-holder')

    var currentArrow = currentWrap.find('.arrow-up')

    currentBox.toggleClass('box-show')
    currentArrow.toggleClass('arrow-down')
    e.stopPropagation()
  })

  $(window).click(function (e) {
    $('.multi-select-box-holder').removeClass('box-show')
    $('.arrow-up').removeClass('arrow-down')
    e.stopPropagation()
  })

  $('.multi-select-wrap').click(function (e) {
    e.stopPropagation()
  })

  $('.item-checkbox-input').on('click', function () {
    var currentInput = $(this)
    var currentText = currentInput.parent('.checkbox-item').find('.checkbox-text').html()
    var curentTitle = currentInput.parents('.multi-select-wrap').find('.multi-select-title')

    var currentWrap = currentInput.parents('.multi-select-wrap')

    currentWrap.find('.item-checkbox-input').prop('checked', false)
    $(this).prop('checked', true)

    curentTitle.html(currentText)

    currentWrap.find('.multi-select-box-holder').removeClass('box-show')
    currentWrap.find('.arrow-up').removeClass('arrow-down')
  })

  ////////////////////////////////////////////////////
  // 08. Input Number

  $(document).ready(function () {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input')
      var count = parseInt($input.val()) - 1
      count = count < 1 ? 1 : count
      $input.val(count)
      $input.change()
      return false
    })
    $('.plus').click(function () {
      var $input = $(this).parent().find('input')
      $input.val(parseInt($input.val()) + 1)
      $input.change()
      return false
    })
  })

  ////////////////////////////////////////////////////
  // 09. Price Box Popup

  $(document).ready(function () {
    $('.showbtn').click(function () {
      $('#estimated__price__box').css({
        top: '0',
        transition: '.5s',
      })
    })
    $('.hidebtn').click(function () {
      $('#estimated__price__box').css({
        top: '-100%',
        transition: '.5s',
      })
    })

    $('.close-box').click(function () {
      $('#estimated__price__box').css({
        top: '-100%',
        transition: '.5s',
      })
    })
  })

  ////////////////////////////////////////////////////
  // 10. Password Toggle
  $('.toggle-password').click(function () {
    $(this).toggleClass('fa-eye fa-eye-slash')
    var input = $($(this).attr('toggle'))
    if (input.attr('type') == 'password') {
      input.attr('type', 'text')
    } else {
      input.attr('type', 'password')
    }
  })

  ////////////////////////////////////////////////////
  // 11. Account Created Animation

  $(document).ready(function () {
    setTimeout(function () {
      $('#account__created').addClass('hide__top')
    }, 2500)
  })

  ////////////////////////////////////////////////////
  // 12. Search Expand

  var expandSearch = {
    init: function () {
      var _this = this,
        _searchContainers = document.querySelectorAll('.expandSearch')

      for (var _index in _searchContainers) {
        if (typeof _searchContainers[_index] === 'object') {
          _this.searchFunctions(_searchContainers[_index])
        }
      }
    },

    searchFunctions: function (_thisSearch) {
      var _nodes = _thisSearch.childNodes

      //a click
      _nodes[3].addEventListener('click', function (e) {
        if (_thisSearch.attributes.class.value.indexOf('showSearch') > -1) {
          _thisSearch.attributes.class.value = 'expandSearch'
        } else {
          _thisSearch.attributes.class.value = 'expandSearch showSearch'
        }

        if (!e.preventDefault()) {
          e.returnValue = false
        }
      })
    },
  }
  //execute
  expandSearch.init()

  ////////////////////////////////////////////////////
  // 13. Wishlist

  $('.wishlist-btn').click(function () {
    $(this).toggleClass('active')
  })

  ////////////////////////////////////////////////////
  // 14. Dashboard Sidebar

  let arrow = document.querySelectorAll('.arrow')
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', (e) => {
      let arrowParent = e.target.parentElement.parentElement //selecting main parent of arrow
      arrowParent.classList.toggle('showMenu')
    })
  }

  let sidebar = document.querySelector('.sidebar')
  let sidebarBtn = document.querySelector('.sidebar__btn')
  sidebarBtn?.addEventListener('click', () => {
    sidebar.classList.toggle('close')
  })

  $('.icon_bar').click(function () {
    $('.sidebar').removeClass('close')
  })

  $('.searchExpand .trigger').click(function () {
    $(this).parent().toggleClass('active')
  })

  ////////////////////////////////////////////////////
  // 14. Dynamic Height

  function setHeight() {
    $('.dynamic-height').each(function () {
      const gap = $(this).offset()?.top + 37
      const bodyHeight = $(window).height() - gap

      let extraHeight = 0
      const tableSummaryHeight = $('.table-summary-wrapper').height()
      if (tableSummaryHeight) {
        extraHeight = tableSummaryHeight + 20
      }

      $(this).height(bodyHeight - extraHeight)
      $('.chat-wrapper').height(bodyHeight - 3)
    })
  }

  $(document).ready(function () {
    setHeight()
  })

  $(window).resize(function () {
    setHeight()
  })

  ////////////////////////////////////////////////////
  // Tab Section

  function setIndicatorPosition() {
    const { left } = $(this).position()
    const width = $(this).width()
    document.documentElement.style.setProperty('--tab-left', left + 'px')
    document.documentElement.style.setProperty('--tab-item-width', width + 'px')
  }

  $('.tab-section .tab-item').click(function () {
    setIndicatorPosition.call(this)
    $('.tab-section .tab-item.active').removeClass('active')
    $(this).addClass('active')

    const tabContentId = $(this).attr('data-target')
    $('.tab-pane.active').removeClass('show active')
    $('#' + tabContentId).addClass('show active')

    setHeight()
  })

  if ($('.tab-section .tab-item.active').length) {
    setIndicatorPosition.call($('.tab-section .tab-item.active'))
  }

  /////////////////////////////////////////////////
  // dashboard sidebar

  if ($(window).width() < 768) {
    $('.sidebar').addClass('close')
  }

  /////////////////////////////////////////////////
  // chat page

  $('.chat-list-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')

    const isStartingMessage = $(this).children('.start-new-message').length
    const isChatBoxHidden = $('.chat-body').hasClass('d-none')

    if (isStartingMessage) {
      $('.chat-start-body').removeClass('d-none')
      $('.chat-body, .chat-footer').addClass('d-none')
    } else if (isChatBoxHidden) {
      $('.chat-start-body').addClass('d-none')
      $('.chat-body, .chat-footer').removeClass('d-none')
    }
  })

  /////////////////////////////////////////////////
  // show page

  $('.shop-product-slider').owlCarousel({
    loop: false,
    margin: 24,
    nav: false,
    dots: false,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  })

  /////////////////////////////////////////////////
  // input with save btn

  $('.with-save-btn button.input-group-text:last-child').click(function () {
    $(this).toggleClass('d-none')
    $(this).parents('.with-save-btn').find('.btn-primary').toggleClass('d-none')
    $(this).parents('.with-save-btn').siblings('.helping-text').html('<span class="success pointer">Cancel</span>')
  })

  $('.with-save-btn .btn-primary').click(function () {
    $(this).toggleClass('d-none')
    $(this).parents('.with-save-btn').find('button.input-group-text:last-child').toggleClass('d-none')
    $(this).parents('.with-save-btn').siblings('.helping-text').html('lorem ipsum dolor sit amet')
  })

  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl))
})(jQuery)
