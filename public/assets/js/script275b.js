
jQuery(document).ready(function ($) {

  modernizer: {
    if (!Modernizr.objectfit) {
      $('.object-fit').each(function () {
        var $container = $(this),
          imgUrl = $container.find('img').prop('src')
        if (imgUrl) {
          $container
            // .css('backgroundImage', 'url(' + imgUrl + ')')
            .addClass('not-compatible')
        }
      })
      //$( 'body' ).addClass('no-object-fit');
    }
  }

  fixedheader: {
    $(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 150) {
          $('.header').addClass('fixed-header')
        }
        if ($(window).scrollTop() >= 160) {
          $('.header').addClass('transform-none')
        } else {
          $('.header').removeClass('fixed-header')
          $('.header').removeClass('transform-none')
        }
      })
    })
  }

  search: {
    if (window.innerWidth > 768) {
      $('.search-icon').on('click', function (e) {
        $('.searchform').toggleClass('search-open')
        $(this).toggleClass('submit-zindex')
        $('.select-lang').removeClass('transform-height')
        $('#menu-main-menu-top, .lang_dropdown').fadeOut()
        $('#s').focus()
        setTimeout(function () {
          $('.close-search').fadeIn()
        }, 300)
      })
      $('.close-search').on('click', function (e) {
        $(this).fadeOut()
        $('.searchform').removeClass('search-open')
        $('.search-icon').removeClass('submit-zindex')
        $('#menu-main-menu-top, .lang_dropdown').fadeIn()
      })

      $('.main').addClass('blurTransition')
      $('.hamburger').addClass('blurTransition')
      $('.top-nav__logo').parent().addClass('blurTransition')
      $('.top-nav__contact').addClass('blurTransition')
      $('footer').addClass('blurTransition')

      $('.top-nav__search-trigger').on('click', function (e) {
        $(this).addClass('active')
        $('.top-nav__search-wrapper').addClass('active')
        $('.main').addClass('blur')
        $('.hamburger').addClass('blur')
        $('.top-nav__logo').parent().addClass('blur')
        $('.top-nav__contact').addClass('blur')
        $('footer').addClass('blur')

        $(document).on('click', function (e) {
          if (!$(e.target).closest('.top-nav__search-wrapper').length) {
            $('.top-nav__search-wrapper').removeClass('active')
            $('.top-nav__search-trigger').removeClass('active')
            $('.main').removeClass('blur')
            $('.hamburger').removeClass('blur')
            $('.top-nav__logo').parent().removeClass('blur')
            $('.top-nav__contact').removeClass('blur')
            $('footer').removeClass('blur')
          }
        })
      })
    } else {
      $('.main').addClass('blurTransition')
      $('.hamburger').addClass('blurTransition')
      $('.top-nav__logo').parent().addClass('blurTransition')
      $('.top-nav__contact').addClass('blurTransition')
      $('footer').addClass('blurTransition')

      $('.top-nav__search-trigger').on('click', function (e) {
        $('.search_mobile').addClass('mobile-open')
        $('.main').addClass('blur')
        $('.hamburger').addClass('blur')
        $('.top-nav__logo').parent().addClass('blur')
        $('.top-nav__contact').addClass('blur')
        $('footer').addClass('blur')
      })

      $(document).on('click', function (e) {
        if (
          !$(e.target).closest('.search_mobile').length &&
          !$(e.target).closest('.top-nav__search-trigger').length
        ) {
          $('.search_mobile').removeClass('mobile-open')
          $('.main').removeClass('blur')
          $('.hamburger').removeClass('blur')
          $('.top-nav__logo').parent().removeClass('blur')
          $('.top-nav__contact').removeClass('blur')
          $('footer').removeClass('blur')
        }
      })
    }
  }

  anchorlinks: {
    $(document).on('click', '.scroll-to', function (event) {
      event.preventDefault()

      $('html, body').animate(
        {
          scrollTop: $($.attr(this, 'href')).offset().top,
        },
        500
      )
    })
  }

  externallinks: {
    $('a[href^="mailto:"]').each(function () {
      $(this).addClass('email-link')
    })

    // $('a:not(.magnific-video, .email-link)').each(function () {
    // 	var a = new RegExp('/' + window.location.host + '/');

    // 	if (!a.test(this.href)) {
    // 		$(this).click(function (event) {
    // 		event.preventDefault();
    // 		window.open(this.href, '_blank');
    // 		});
    // 	}
    // });
    pdfs: {
      // Open PDFs in new window
      $(function () {
        $('a[href$=".pdf"]').prop('target', '_blank')
      })
    }
  }

  scrollDown: {
    const scrollHeight = document.querySelectorAll('.js-scroll-screen')

    if (scrollHeight.length > 0) {
      scrollHeight.forEach((element) => {
        element.addEventListener('click', function () {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          })
        })
      })
    }
  }

  glossary: {
    function areTheyCrashing(element1, element2) {
      const rect1 = element1.getBoundingClientRect()
      const rect2 = element2.getBoundingClientRect()
      const verticalSpace = rect2.bottom - rect1.top
      const horizontalSpace = rect2.left - rect1.right

      if (verticalSpace < 0 || horizontalSpace < 0) {
        return true
      } else {
        return false
      }
    }

    // Eton Glossary
    if (document.querySelector('.glossary-banner')) {
      if (!document.querySelector('.glossary-content')) {
        document.querySelector('.glossary-index').classList.add('invisible')
      } else {
        const theArrow = document.querySelector('.glossary-index .arrow')
        const theIndex = document.querySelector('.glossary-index__index')

        theArrow.addEventListener('click', function () {
          theIndex.classList.toggle('open')
        })
      }

      // Loading animation
      const mainTitleLine1 = document.querySelector(
        '.glossary-banner .title span:nth-child(1)'
      )
      const mainTitleLine2 = document.querySelector(
        '.glossary-banner .title span:nth-child(2)'
      )
      const sentencesRow1 = document.querySelectorAll(
        '.glossary-banner .random-line--one .sentences a'
      )
      const sentencesRow2 = document.querySelectorAll(
        '.glossary-banner .random-line--two .sentences a'
      )
      const scrollTo = document.querySelector(
        '.glossary-banner .scroll-to-link'
      )
      const scrollToArrow = scrollTo.querySelector('svg #arrow')

      const glossayBannerScroll = gsap.timeline()
      const glossayBannerTitle = gsap.timeline()
      const glossayBannerSentencesRow1 = gsap.timeline({ repeat: -1, delay: 3 })
      const glossayBannerSentencesRow2 = gsap.timeline({ repeat: -1, delay: 1 })

      gsap.set(scrollToArrow, { opacity: 0 })

      glossayBannerScroll
        .to(scrollTo, {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'power2.out',
          duration: 0.7,
        })
        .to(scrollToArrow, { opacity: 1 }, '+=0.1')
      glossayBannerTitle
        .to(mainTitleLine1, {
          clipPath: 'inset(0% 0% -10% 0%)',
          ease: 'power2.out',
          duration: 1,
        })
        .to(mainTitleLine1, { y: 0, duration: 1 }, '<')
        .to(
          mainTitleLine2,
          { clipPath: 'inset(0% 0% -10% 0%)', ease: 'power2.out', duration: 1 },
          '<'
        )
        .to(mainTitleLine2, { y: 0, duration: 1 }, '<')

      // Sentences row 1
      sentencesRow1.forEach((element, index) => {
        gsap.set(element, { opacity: 0 })

        if (index % 2 == 0) {
          if (
            index > 0 &&
            areTheyCrashing(sentencesRow1[index - 1], sentencesRow1[index])
          ) {
            glossayBannerSentencesRow1.to(sentencesRow1[index - 1], {
              opacity: 0,
              duration: 1,
            })
          }

          glossayBannerSentencesRow1
            .to(element, { opacity: 1, duration: 1 })
            .to(element, { opacity: 1, duration: 1 }) // Wait
        } else if (index % 3 == 0) {
          glossayBannerSentencesRow1.to(sentencesRow1, {
            opacity: 0,
            duration: 1,
          })

          glossayBannerSentencesRow1
            .to(element, { opacity: 1, duration: 1 })
            .to(element, { opacity: 1, duration: 1 }) // Wait
        } else if (index % 2 != 0) {
          if (areTheyCrashing(sentencesRow1[index - 1], sentencesRow1[index])) {
            glossayBannerSentencesRow1.to(sentencesRow1[index - 1], {
              opacity: 0,
              duration: 1,
            })
          }

          glossayBannerSentencesRow1
            .to(element, { opacity: 1, duration: 1 })
            .to(element, { opacity: 1, duration: 1 }) // Wait
        }
      })
      glossayBannerSentencesRow1.to(mainTitleLine1, { opacity: 1, duration: 3 }) // Dummny action to wait the repeat

      // Sentences row 2
      sentencesRow2.forEach((element, index) => {
        gsap.set(element, { opacity: 0 })

        if (index % 2 == 0) {
          if (
            index > 0 &&
            areTheyCrashing(sentencesRow2[index - 1], sentencesRow2[index])
          ) {
            glossayBannerSentencesRow2.to(sentencesRow2[index - 1], {
              opacity: 0,
              duration: 1,
            })
          }

          glossayBannerSentencesRow2
            .to(element, { opacity: 1, duration: 1 })
            .to(element, { opacity: 1, duration: 1 }) // Wait
        } else if (index % 3 == 0) {
          glossayBannerSentencesRow2.to(sentencesRow2, {
            opacity: 0,
            duration: 1,
          })

          glossayBannerSentencesRow2
            .to(element, { opacity: 1, duration: 1 })
            .to(element, { opacity: 1, duration: 1 }) // Wait
        } else if (index % 2 != 0) {
          if (areTheyCrashing(sentencesRow2[index - 1], sentencesRow2[index])) {
            glossayBannerSentencesRow2.to(sentencesRow2[index - 1], {
              opacity: 0,
              duration: 1,
            })
          }

          glossayBannerSentencesRow2
            .to(element, { opacity: 1, duration: 1 })
            .to(element, { opacity: 1, duration: 1 }) // Wait
        }
      })
      glossayBannerSentencesRow2.to(mainTitleLine1, { opacity: 1, duration: 1 }) // Dummny action to wait the repeat

      /**
       * Oberver to detect when the sentence is not visible so we can add pointer events none
       */
      const allSentences = document.querySelectorAll(
        '.random-line .sentences a'
      )

      allSentences.forEach((sentence) => {
        // Create a MutationObserver instance
        const observer = new MutationObserver((mutationsList, observer) => {
          for (const mutation of mutationsList) {
            if (
              mutation.type === 'attributes' &&
              mutation.attributeName === 'style'
            ) {
              const opacityValue = parseFloat(sentence.style.opacity)

              if (opacityValue === 0) {
                sentence.style.pointerEvents = 'none'
              } else {
                sentence.style.pointerEvents = 'auto'
              }
            }
          }
        })

        // Observe changes to the 'style' attribute of the target div
        observer.observe(sentence, { attributes: true })
      })
    }

    // Glossary Index. Make not clickable letters with no words
    const letters = document.querySelectorAll('.glossary-index .letter')
    letters.forEach((letter) => {
      if (
        !document.querySelector(
          '.glossary-content #letter-' + letter.innerHTML.toLocaleLowerCase()
        )
      ) {
        document
          .querySelector(
            '.glossary-index [href="#letter-' +
              letter.innerHTML.toLocaleLowerCase() +
              '"]'
          )
          .classList.add('empty')
      }
    })

    if (document.querySelector('.glossary-content')) {
      const audiosText = document.querySelectorAll(
        '.glossary-content .audio-text'
      )

      audiosText.forEach((text) => {
        text.addEventListener('click', function () {
          this.parentNode.querySelector('audio').play()
        })
      })
    }

    // Glossary Index - Sticky letters on scroll
    let glossaryIndex = document.querySelector('.glossary-index')

    if (glossaryIndex) {
      let gap = 20
      if (window.innerWidth < 1191) {
        gap = 105
      }
      if (window.innerWidth < 701) {
        gap = 85
      }
      let glossaryIndexOffset = glossaryIndex.offsetTop - gap

      window.addEventListener('scroll', () => {
        window.scrollY >= glossaryIndexOffset
          ? glossaryIndex.classList.add('index-sticky')
          : glossaryIndex.classList.remove('index-sticky')
      })
    }

    // Images parallax effect
    // Start after event "glossaryBgImages" is dispatched.
    document
      .querySelector('#content-wrap')
      .addEventListener('glossaryBgImages', (event) => {
        let images = document.querySelectorAll('.background-image')

        if (images.length > 0) {
          images.forEach((image) => {
            let animation = gsap.to(image, {
              yPercent: image.dataset.distance,
              ease: 'none',
            })

            ScrollTrigger.create({
              animation: animation,
              trigger: image,
              start: 'top bottom',
              // end: "bottom top",
              scrub: true,
            })
          })
        }
      })
  }

  images: {
    // On the main site.
    if ($('html.blog-1').length > 0) {
      $('html.blog-1').on('contextmenu', 'img', function (e) {
        return false
      })

      // WP gallery on popup.
      $('.wp-block-gallery .wp-block-image').each(function () {
        let url = $(this).find('img').attr('src')

        $(this)
          .find('img')
          .wrap("<a href='" + url + "'></a>")
      })

      $('.wp-block-gallery .wp-block-image').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled: true,
        },
      })
    }
  }


  magnific: {
    // IFRAME
    $('.magnific-video').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    })

    // INLINE
    $('.inline-popup').magnificPopup({
      type: 'inline',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true,
      closeMarkup: '<div title="%title%" class=" mfp-close"></div>',
    })
    $('.magnific-full-screen-popup').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in full-screen-popup',
      closeMarkup: '<span class="mfp-close"><svg width="32" height="33" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-width="2" fill="none"      fill-rule="evenodd" stroke-linecap="square"><path d="M1.858 30.642 30.142 2.358M1.858 2.358l28.284 28.284"/></g></svg></span>',

      callbacks: {
        open: function() {
          $( 'body' ).addClass( 'not-scrollable' );
          $( 'body' ).addClass( 'add-blur' );
          $( '.menu-search-form-container' ).addClass( 'open' );
        
          //const inputsCurtain = CSSRulePlugin.getRule( '.full-screen-popup .mfp-content .menu-search-form-container .inputs-container:after' ) // it needs to match       exactly the CSS rule.
          //const inputs        = document.querySelector( '.full-screen-popup .inputs-container' )
        
          //let inputsTL = gsap.timeline();
        
          //inputsTL
            //.fromTo( inputs, { height: 0 }, { height: '100%' } )
            //.to( inputsCurtain, { top: '100%', duration: 1.2, ease: "power1.out" } )
        },
        close: function() {
          $( 'body' ).removeClass( 'not-scrollable' );
          $( 'body' ).removeClass( 'add-blur' );
          $( '.menu-search-form-container' ).removeClass( 'open' );
        
          //const inputsCurtain = CSSRulePlugin.getRule( '.full-screen-popup .mfp-content .menu-search-form-container .inputs-container:after' ) // it needs to match       exactly the CSS rule.
          //gsap.to( inputsCurtain, { top: '0%', duration: 0.2, ease: "power1.out" } )
        }
      }
  });
    // boarding-houses popup
    $('.boarding-house-popup').magnificPopup({
      type: 'inline',
      mainClass: 'mfp-fade',
      removalDelay: 300,
      preloader: false,
      fixedContentPos: false, // Changed to false to allow scrolling
      closeMarkup: '<div title="%title%" class="mfp-close"></div>',
      callbacks: {
        open: function() {
          // Remove background overlay
          $('.mfp-bg').remove();
          
          // Hide houses grid
          $('.houses-hide').css('opacity', 0);
          
          // Position popup relative to grid
          let gridElement = $('.boarding-houses__grid');
          let popup = $(this.content);
          
          popup.css({
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'width': '100%',
            'z-index': '1000'
          });
          
          gridElement.append(popup);

          // Add navigation handlers
          // mp.content.append('<button title="Previous" type="button" class="mfp-arrow mfp-arrow-left mfp-prevent-close">Previous</button>');
          $('.prev-house').click(function() {
            var magnificPopup = $.magnificPopup.instance;
            magnificPopup.prev();
          });
          
          // Add "Next" button
          // mp.content.append('<button title="Next" type="button" class="mfp-arrow mfp-arrow-right mfp-prevent-close">Next</button>');
          $('.next-house').click(function() {
            var magnificPopup = $.magnificPopup.instance;
            magnificPopup.next(); 
          });

        },
        close: function() {
          // Clean up any inline styles
          $(this.content).removeAttr('style');
          
          // Show houses grid again
          $('.houses-hide').css('opacity', 1);
          
          // Remove event handlers
          $('.prev-house, .next-house').off('click');
        }
      }
    })
    // GALLERY IMAGE

    $('.magnific-gallery-image, .blocks-gallery-item').each(function () {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
          verticalFit: true,
          titleSrc: function (item) {
            return $(this).next('figcaption')
          },
        },
        gallery: {
          enabled: false,
        },
      })
    })
  }

  /* tabs: {
		const tabs = document.querySelectorAll('[role="tab"]');
		const tabList = document.querySelector('[role="tablist"]');

		if ( tabs ) {

			// Add a click event handler to each tab
			tabs.forEach(tab => {
				tab.addEventListener("click", changeTabs);
			});

			// Enable arrow navigation between tabs in the tab list
			let tabFocus = 0;

			if ( tabList ) {
				tabList.addEventListener("keydown", e => {
					// Move right
					if (e.keyCode === 39 || e.keyCode === 37) {
					tabs[tabFocus].setAttribute("tabindex", -1);
					if (e.keyCode === 39) {
						tabFocus++;
						// If we're at the end, go to the start
						if (tabFocus >= tabs.length) {
						tabFocus = 0;
						}
						// Move left
					} else if (e.keyCode === 37) {
						tabFocus--;
						// If we're at the start, move to the end
						if (tabFocus < 0) {
						tabFocus = tabs.length - 1;
						}
					}
	
					tabs[tabFocus].setAttribute("tabindex", 0);
					tabs[tabFocus].focus();
					}
				});
			}

			function changeTabs(e) {
				console.info('tabs clicked');
				const target = e.target;
				const parent = target.parentNode;
				const grandparent = parent.closest('.tabs');


					console.info(grandparent);
				// Remove all current selected tabs
				parent
					.querySelectorAll('[aria-selected="true"]')
					.forEach(t => t.setAttribute("aria-selected", false));

				// Set this tab as selected
				target.setAttribute("aria-selected", true);

				// Hide all tab panels
				grandparent
					.querySelectorAll('[role="tabpanel"]')
					.forEach(p => p.setAttribute("hidden", true));

				// Show the selected panel
				grandparent.parentNode
					.querySelector(`#${target.getAttribute("aria-controls")}`)
					.removeAttribute("hidden");
			}

		}
	} */
  menu: {
    let menuopen = false
    

    //	$('#menu-nested-pages > li:has(div ul) > a').addClass('page-has-children');
    // $('.hamburger').on('click', function () {
      // menuopen = true
      // $(this).toggleClass('open')
      // $('.nav-menu').toggleClass('open')
      // $('.parent-page > Link').removeClass('active')
      // $('.sub-menu-wrap > Link').removeClass('sub-menu-open')
      // if ($('.hamburger span').text() == 'Close') {
        // $('.hamburger span').text('Menu')
      // } else {
        // $('.hamburger span').text('Close')
        // setTimeout(function () {
          // $('.sub-menu-slide').addClass('sub-menu-open')
        // }, 300)
      // }
    // })
    $('.parent-page > a').on('click', function (e) {
      e.preventDefault()
      let menutoopen = $(this).attr('id')
      //console.log(menutoopen)
      $('.parent-page > a').removeClass('active')
      $(this).addClass('active')
      $('.sub-menu-wrap').removeClass('sub-menu-open')
      $('#sub_' + menutoopen).toggleClass('sub-menu-open')
    })
    $('.back-button').on('click', function () {
      $('.parent-page > a').removeClass('active')
      $('.sub-menu-wrap').removeClass('sub-menu-open')
    })

    $('#content-wrap').on('click', function () {
      if (menuopen == true) {
        //console.log('its true');
        $('.parent-page > a').removeClass('active')
        $('.sub-menu-wrap').removeClass('sub-menu-open')
        $('.hamburger').removeClass('open')
        $('.nav-menu').removeClass('open')
        $('.hamburger span').text('Menu')
        menuopen = false
      } else {
      }
    })

    if ($('body#site-5').length > 0) {
      // Collections
      $('.post-type-archive-news-item #sub_6, .single  #sub_6').addClass(
        'sub-menu-slide'
      )
    } else {
      $(
        '.post-type-archive-news-item #sub_12, .single  #sub_12, .blog #sub_12'
      ).addClass('sub-menu-slide')
    }

    // Subsites active links on bottom menu.
    $('#menu-footer-menu li a').each(function () {
      if (
        $(this).attr('href') === php_vars.homeUrl ||
        $(this).attr('href') === php_vars.homeUrl + '/'
      ) {
        $(this).parent().addClass('current-menu-item')
      }
    })
  }
//  accordion: {
//     function toggleAccordion() {
//       $('.js-accordion-target')
//         .not($(this).next('.js-accordion-target'))
//         .slideUp()
//       $('.js-accordion-plus')
//         .not($(this).find('.js-accordion-plus'))
//         .removeClass('active')
//       $(this).next('.js-accordion-target').slideToggle()
//       $(this).find('.js-accordion-plus').toggleClass('active')
//     }

//     const get_accordions = document.querySelectorAll('.js-accordion-trigger')
//    let accordions = Array.prototype.slice.call(get_accordions)

//     if (accordions.length > 0) {
//       accordions.forEach(function (accordion) {
//         accordion.addEventListener('click', toggleAccordion, false)
//       })
//     }
//   }

document.addEventListener('DOMContentLoaded', function () {
  // Accordion Functionality
  function toggleAccordion(event) {
    // Prevent event propagation for specific target clicks
    event.stopPropagation();

    // Handle accordion toggling
    const trigger = $(event.currentTarget); // Current accordion trigger
    const target = trigger.next('.js-accordion-target'); // Target content
    const plusIcon = trigger.find('.js-accordion-plus'); // Plus icon in the trigger

    // Close all other open accordions
    $('.js-accordion-target').not(target).slideUp();
    $('.js-accordion-plus').not(plusIcon).removeClass('active');

    // Toggle the current accordion
    target.slideToggle();
    plusIcon.toggleClass('active');
  }

  // Bind event listeners to accordion triggers
  const accordions = $('.js-accordion-trigger'); // All triggers
  if (accordions.length > 0) {
    accordions.on('click', toggleAccordion);
  }
});

  loadingAnimations: {
    $.fn.isOnScreen = function () {
      var win = $(window)
      var viewport = {
        top: win.scrollTop(),
      }
      viewport.bottom = viewport.top + win.height()

      var bounds = this.offset()
      bounds.bottom = bounds.top + this.outerHeight()

      return !(viewport.bottom < bounds.top || viewport.top > bounds.bottom)
    }

    // First load Animation
    $('.off-screen').each(function (index) {
      if ($(this).isOnScreen()) {
        $(this).removeClass('off-screen--hide')
      }
    })

    // Blockquotes
    $('blockquote').each(function (index) {
      if ($(this).isOnScreen()) {
        $(this).addClass('blockquote-loaded')
      }
    })

    // Animation on scroll
    $(window).scroll(function () {
      $('.off-screen').each(function (index) {
        if ($(this).isOnScreen()) {
          $(this).removeClass('off-screen--hide')
        }
      })
      $('.fade-in').each(function (index) {
        if ($(this).isOnScreen()) {
          $(this).removeClass('fade-in--active')
        }
      })
      // Blockquotes
      $('blockquote').each(function (index) {
        if ($(this).isOnScreen()) {
          $(this).addClass('blockquote-loaded')
        }
      })
      $('.image-with-statistic').each(function (index) {
        if ($(this).isOnScreen()) {
          $(this).addClass('blockquote-loaded')
        }
      })
    })

    $('.img-animate').each(function () {
      if ($(this).isOnScreen()) {
        var obj = $(this)
        var imagePos = $(this).offset().top
        var topOfWindow = $(window).scrollTop()
        if (imagePos < topOfWindow + 300) {
          $(this).addClass('animate-active')
          $(obj).next('div').addClass('loaded')
        }
        // setTimeout(function(obj) {
        // 	$(obj).next('div').addClass('loaded');
        // }, 800, obj);
      }
    })

    $('.banner .img-animate').each(function () {
      var obj = $(this)

      $(this).addClass('animate-active')
      $(obj).next('div').addClass('loaded')

      // setTimeout(function(obj) {
      // 	$(obj).next('div').addClass('loaded');
      // }, 800, obj);
    })

    $(window).scroll(function () {
      $('.img-animate').each(function () {
        var obj = $(this)
        var imagePos = $(this).offset().top
        var topOfWindow = $(window).scrollTop()
        if ($(this).isOnScreen()) {
          $(this).addClass('animate-active')
          $(obj).next('div').addClass('loaded')
        }
        // setTimeout(function(obj) {
        // 	$(obj).next('div').addClass('loaded');
        // }, 800, obj);
      })
      $('.slide-up--scroll').each(function (index) {
        if ($(this).isOnScreen()) {
          $(this).addClass('slide-up--loaded')
        }
      })
    })
    $('.slide-up--static').each(function (index) {
      $(this).addClass('slide-up--loaded')
    })
  }
  fadein: {
    window.fadeIn = function (obj) {
      $(obj).fadeIn(1000)
    }
    $(document).ready(function () {
      $('.fadeIn').each(function () {
        var src = $(this).data('src')
        if (src) {
          var img = new Image()
          img.style.display = 'none'
          img.onload = function () {
            $(this).fadeIn(1000)
            $('.banner__shadow').fadeIn(1000)
            //	$('.fadeIn').addClass('img-fade-in');
          }
          $(this).append(img)
          var $item = $(this)

          img.src = src
        }
      })
    })
  }
  sticky: {
  }

  cursor: {
    // var isonlink = false;
    // // Custom Mouse
    // function updateCustomCursorPosition(e, customCursor) {
    // 	const { pageX, pageY } = e;
    // 	if(isonlink) {
    // 		TweenLite.to(customCursor, 0.2, {
    // 			x: pageX,
    // 			y: pageY,
    // 			scale: 2,
    // 			opacity: 0.5
    // 		});
    // 	}
    // 	else {
    // 		TweenLite.to(customCursor, 0.2, {
    // 			x: pageX,
    // 			y: pageY,
    // 			scale: 1
    // 		});
    // 	}
    // 	updateCustomCursorStyle(e, customCursor);
    // }
    // function updateCustomCursorStyle(e, customCursor) {
    // 	// add custom styles to the cursor based on the target of the mouse during the mouseover event
    // 	const { target } = e; // destructuring
    // 	if (target.matches('a') || target.closest('a') || target.matches('.hamburger') || target.closest('.hamburger') ) {
    // 		customCursor.classList.add('normal-hover');
    // 		isonlink = true;
    // 	} else {
    // 		customCursor.classList.remove('normal-hover');
    // 		isonlink = false;
    // 	}
    // }
    // function initCustomMouse() {
    // 	const customCursor = document.querySelector('.custom-cursor');
    // 	document.addEventListener('mousemove', function(e) {
    // 		updateCustomCursorPosition(e, customCursor);
    // 	}, false);
    // 	document.addEventListener('wheel', function(e) {
    // 		updateCustomCursorPosition(e, customCursor);
    // 	}, false);
    // }
    // initCustomMouse();
  }

  /* lerpscroll: {
		class Smooth {
			constructor() {
			  // Grab the node that contains the entire scrollable area
			  this.content = document.querySelector('[data-scroll-container]')
			  // Grab what we want to lerp / parallax scroll
			  this.elems = [...this.content.querySelectorAll('[data-scroll-item]')]
			  
			  this.cache = []
			  
			  // Initialize document, bind methods, start render loop
			  this.init()
			}
			
			// Set the document height based on the height of the scrollable elements
			setHeight() {
			  document.body.style.height = this.content.clientHeight + 'px'
			}
			
			// Add metadata for each scrolling element
			setCache() {
			  this.elems.forEach((elem) => {
				const elemCache = {}
				
				// The actual element
				elemCache.el = elem
		
				// Starting position
				elemCache.sy = 0
		
				// Changed position initialized as starting position
				elemCache.dy = elemCache.sy
		
				// wat
				elemCache.ease = elem.dataset.ease
		
				// element parallax value
				elemCache.parallax = 1;
				
				// Add this to the list of scrolling element objects
				this.cache.push(elemCache)
			  })
			}
			
			// The event handler on when we scroll
			scroll() {
			  // Iterate through scrolling element objects and update
			  // metadata for the starting position
			  this.cache.forEach((el) => {
				el.sy = window.scrollY
			  })
			}
			
			// The render loop that animates the lerp scroll
			transformElem() {
			  // Iterate through each object w/ index in mind
			  this.cache.forEach((elem, i) => {
				// Calculate an ease value based on element index
				// ease will be used in lerp as the progress betweem
				// the two values
				const ease = `0.1${i}`
		
				// Calculate the element's change in position based
				// on the progress between the starting and changed
				// position
				elem.dy = lerp(elem.dy, elem.sy, ease)
		
				// Scale the scroll change up
				elem.dy = Math.floor(elem.dy * 100) / 200;
				
				// Set the actual change
				TweenMax.set(elem.el, { y: elem.dy})
			  })
		  
			  // After updating all scrolling element metadata
			  // Animate the changes
			  window.requestAnimationFrame(this.transformElem.bind(this))   
			}
			
			init() {
			  this.setHeight()
			  this.setCache()
			  
			  window.addEventListener('scroll', this.scroll.bind(this))
			  window.requestAnimationFrame(this.transformElem.bind(this))
			}
		  }
		  
		  const smooth = new Smooth()
		  
		  function lerp(a, b, n) {
			return (1 - n) * a + n * b;
		  }
	} */

  background: {
    /**
     * jQuery plugin paroller.js v1.4.6
     * https://github.com/tgomilar/paroller.js
     * preview: https://tgomilar.github.io/paroller/
     **/
    ;(function (factory) {
      'use strict'
      if (typeof define === 'function' && define.amd) {
        define('parollerjs', ['jquery'], factory)
      } else if (
        typeof module === 'object' &&
        typeof module.exports === 'object'
      ) {
        module.exports = factory(require('jquery'))
      } else {
        factory(jQuery)
      }
    })(function ($) {
      'use strict'

      let working = false
      let scrollAction = function () {
        working = false
      }

      let setDirection = {
        bgVertical: function (elem, bgOffset) {
          return elem.css({
            'background-position': 'center ' + -bgOffset + 'px',
          })
        },
        bgHorizontal: function (elem, bgOffset) {
          return elem.css({
            'background-position': -bgOffset + 'px' + ' center',
          })
        },
        vertical: function (elem, elemOffset, transition, oldTransform) {
          oldTransform === 'none' ? (oldTransform = '') : true
          return elem.css({
            '-webkit-transform':
              'translateY(' + elemOffset + 'px)' + oldTransform,
            '-moz-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
            transform: 'translate(0,' + elemOffset + 'px)' + oldTransform,
            transition: transition,
            'will-change': 'transform',
          })
        },
        horizontal: function (elem, elemOffset, transition, oldTransform) {
          oldTransform === 'none' ? (oldTransform = '') : true
          return elem.css({
            '-webkit-transform':
              'translateX(' + elemOffset + 'px)' + oldTransform,
            '-moz-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
            transform: 'translate(' + elemOffset + 'px, 0)' + oldTransform,
            transition: transition,
            'will-change': 'transform',
          })
        },
      }

      let setMovement = {
        factor: function (elem, width, options) {
          let dataFactor = elem.data('paroller-factor')
          let factor = dataFactor ? dataFactor : options.factor
          if (width < 576) {
            let dataFactorXs = elem.data('paroller-factor-xs')
            let factorXs = dataFactorXs ? dataFactorXs : options.factorXs
            return factorXs ? factorXs : factor
          } else if (width <= 768) {
            let dataFactorSm = elem.data('paroller-factor-sm')
            let factorSm = dataFactorSm ? dataFactorSm : options.factorSm
            return factorSm ? factorSm : factor
          } else if (width <= 1024) {
            let dataFactorMd = elem.data('paroller-factor-md')
            let factorMd = dataFactorMd ? dataFactorMd : options.factorMd
            return factorMd ? factorMd : factor
          } else if (width <= 1200) {
            let dataFactorLg = elem.data('paroller-factor-lg')
            let factorLg = dataFactorLg ? dataFactorLg : options.factorLg
            return factorLg ? factorLg : factor
          } else if (width <= 1920) {
            let dataFactorXl = elem.data('paroller-factor-xl')
            let factorXl = dataFactorXl ? dataFactorXl : options.factorXl
            return factorXl ? factorXl : factor
          } else {
            return factor
          }
        },
        bgOffset: function (offset, factor) {
          return Math.round(offset * factor)
        },
        transform: function (offset, factor, windowHeight, height) {
          return Math.round((offset - windowHeight / 2 + height) * factor)
        },
      }

      let clearPositions = {
        background: function (elem) {
          return elem.css({ 'background-position': 'unset' })
        },
        foreground: function (elem) {
          return elem.css({
            transform: 'unset',
            transition: 'unset',
          })
        },
      }

      $.fn.paroller = function (options) {
        const windowHeight = $(window).height()
        const documentHeight = $(document).height()

        // default options
        options = $.extend(
          {
            factor: 0, // - to +
            factorXs: 0, // - to +
            factorSm: 0, // - to +
            factorMd: 0, // - to +
            factorLg: 0, // - to +
            factorXl: 0, // - to +
            transition: 'transform .1s ease', // CSS transition
            type: 'background', // foreground
            direction: 'vertical', // horizontal
          },
          options
        )

        return this.each(function () {
          const $this = $(this)
          let height = $this.outerHeight()
          let width = $(window).width()
          let elemTop = $this.offset().top
          let scrollOffset = 0

          let withScrollOffset = function (scrollTop, transform) {
            if (!scrollTop) {
              scrollOffset = transform
            }
            // console.log(`offset ${scrollOffset} => ${transform - scrollOffset}`)
            return transform - scrollOffset
          }

          const dataType = $this.data('paroller-type')
          const dataDirection = $this.data('paroller-direction')
          const dataTransition = $this.data('paroller-transition')
          const oldTransform = $this.css('transform')

          const transition = dataTransition
            ? dataTransition
            : options.transition
          const type = dataType ? dataType : options.type
          const direction = dataDirection ? dataDirection : options.direction
          let factor = 0
          let bgOffset = setMovement.bgOffset(elemTop, factor)
          let transform = setMovement.transform(
            elemTop,
            factor,
            windowHeight,
            height
          )

          if (type === 'background') {
            if (direction === 'vertical') {
              setDirection.bgVertical($this, bgOffset)
            } else if (direction === 'horizontal') {
              setDirection.bgHorizontal($this, bgOffset)
            }
          } else if (type === 'foreground') {
            if (direction === 'vertical') {
              setDirection.vertical($this, transform, transition, oldTransform)
            } else if (direction === 'horizontal') {
              setDirection.horizontal(
                $this,
                transform,
                transition,
                oldTransform
              )
            }
          }

          $(window).on('resize', function () {
            let scrolling = $(this).scrollTop()
            width = $(window).width()
            elemTop = $this.offset().top
            height = $this.outerHeight()
            factor = setMovement.factor($this, width, options)

            bgOffset = Math.round(elemTop * factor)
            let transform = withScrollOffset(
              $(document).scrollTop(),
              Math.round((elemTop - windowHeight / 2 + height) * factor)
            )

            if (!working) {
              window.requestAnimationFrame(scrollAction)
              working = true
            }

            if (type === 'background') {
              clearPositions.background($this)
              if (direction === 'vertical') {
                setDirection.bgVertical($this, bgOffset)
              } else if (direction === 'horizontal') {
                setDirection.bgHorizontal($this, bgOffset)
              }
            } else if (type === 'foreground' && scrolling <= documentHeight) {
              clearPositions.foreground($this)
              if (direction === 'vertical') {
                setDirection.vertical($this, transform, transition)
              } else if (direction === 'horizontal') {
                setDirection.horizontal($this, transform, transition)
              }
            }
          })

          $(window).on('load scroll', function () {
            let scrolling = $(this).scrollTop()
            let scrollTop = $(document).scrollTop()
            factor = setMovement.factor($this, width, options)
            let transform = withScrollOffset(
              scrollTop,
              Math.round(
                (elemTop - windowHeight / 2 + height - scrolling) * factor
              )
            )

            if (!working) {
              window.requestAnimationFrame(scrollAction)
              working = true
            }

            if (type === 'background') {
              if (direction === 'vertical') {
                setDirection.bgVertical($this, bgOffset)
              } else if (direction === 'horizontal') {
                setDirection.bgHorizontal($this, bgOffset)
              }
            } else if (type === 'foreground' && scrolling <= documentHeight) {
              if (direction === 'vertical') {
                setDirection.vertical(
                  $this,
                  transform,
                  transition,
                  oldTransform
                )
              } else if (direction === 'horizontal') {
                setDirection.horizontal(
                  $this,
                  transform,
                  transition,
                  oldTransform
                )
              }
            }
          })
        })
      }
    })

    if ($('[image-background-scroll]').length) {
      $('[image-background-scroll]').paroller({
        factor: 0.04, // multiplier for scrolling speed and offset
        type: 'foreground', // background, foreground
        direction: 'vertical', // vertical, horizontal
      })
      $('[image-background-scroll-bg]').paroller({
        factor: 0.04, // multiplier for scrolling speed and offset
        type: 'background', // background, foreground
        direction: 'vertical', // vertical, horizontal
      })
    }
    // $(window).scroll(function () {
    // 	parallax();
    // });
    // function parallax() {
    // 	var ev = {
    // 		scrollTop: document.body.scrollTop || document.documentElement.scrollTop
    // 	};
    // 	ev.ratioScrolled = ev.scrollTop / (document.body.scrollHeight - document.documentElement.clientHeight);
    // 	render(ev);
    // }
    // function render(ev) {
    // 	var t = ev.scrollTop;
    // 	var y = Math.round(t * 2/3) / 5;
    // 	$('[image-background-scroll]').css('background-position', '0 ' + y + 'px');
    // }
  }
  breadcrumbs: {
    $('#breadcrumbs > span > span > span > a:not(.link-away)').on(
      'click',
      function (e) {
        //console.log('clicked');
        e.preventDefault()
        $('.hamburger').addClass('open')
        $('.nav-menu').addClass('open')
        $('.hamburger span').text('Close')
        setTimeout(function () {
          $('.sub-menu-slide').addClass('sub-menu-open')
        }, 300)
        menuopen = true
      }
    )
  }
  homepage2024Animations: {
    if($('body').hasClass('page-id-21395') && window.innerWidth > 768) {
      // smooth scroll
      const lenis = new Lenis({
        duration: 1.2   ,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 0.5,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })
    
    lenis.on('scroll', (e) => {
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)


      gsap.registerPlugin(ScrollTrigger);

      var full = document.querySelector('.js-home-banner-full');
      var pin = document.querySelector('.js-home-banner-pin');
      var container = document.querySelector('.js-home-banner-container');
      var col1 = document.querySelector('.js-home-banner-col-1');
      var col2 = document.querySelector('.js-home-banner-col-2');
      var col3 = document.querySelector('.js-home-banner-col-3');
      var bannerText = document.querySelectorAll('.js-home-banner-text');
      var clipScroll = document.querySelector('.js-clip-scroll');


      var loadingTL = gsap.timeline({
        delay: 1
      })
      var bannerTL = gsap.timeline({
        scrollTrigger: {
            start: 'top top',
            end: window.innerHeight * 4,
            trigger:  pin,
            scrub: 0.1,
            // ease: "power3.in",
            pin: true,                    
        }
      })  


      loadingTL.to(container, {
        opacity: 1,
        duration: 0.5
      })
      loadingTL.from(bannerText, {
        y: -30,
        duration: 0.6,        
      }, "<")
      loadingTL.from(col1, {
        yPercent: 60,
        duration: 2,
        ease: "power4.out"
      }, "<")
      loadingTL.from(col2, {
        yPercent : -60 ,
        duration: 2,
        ease: "power4.out"
      }, "<")
      loadingTL.from(col3, {
        yPercent: 60,
        duration: 2,
        ease: "power4.out"
      }, "<")

      

      // ScrollTrigger.refresh();  

      bannerTL.to(col1, {      
        // ease: "power3.in",
        y: () => -1 * ((col1.offsetHeight - window.innerHeight) + 108),

      })
      bannerTL.to(col2, {      
        // ease: "power3.in",
        y: () => 84
      }, "<")
      bannerTL.to(col3, {      
        // ease: "power3.in",
        y: () => -1 * ((col3.offsetHeight - window.innerHeight) + 108)
      }, "<")
      bannerTL.set(bannerText, { 
        opacity: 0 
      }, "<6%");  
      gsap.to(container, {
        scale: 0.8,
        transformOrigin: "top",
        ease: 'none',   
        scrollTrigger: {
          trigger: '.home-block-introduction',
          start: "top bottom",
          end: "top top",
          scrub: 1.2,
          onEnter: () => {
            gsap.to(full, {
              backgroundColor: '#CBDACF',     
              duration: 1.5,
              ease: "power2.inOut"
            })  
          },
          onLeaveBack: () => {
            gsap.to(full, {
              backgroundColor: '#EFF3F0',
              duration: 1.5,
              ease: "power2.inOut"
            })  
          }
        },   
      }, ">")      

      ScrollTrigger.refresh();

      // instagram horizontal scroll
      var topRow = document.querySelector('.js-top-row-ig');
      var bottomRow = document.querySelector('.js-bottom-row-ig');

      var igTL = gsap.timeline({
        scrollTrigger: {
          trigger: '.focus-areas__instagram',
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          ease: "power3.out",        
        }
      })


      igTL.fromTo(topRow, {
        x: -1 * (topRow.offsetWidth - window.innerWidth + 396)
      }, {
        x: 148,
      })
      igTL.fromTo(bottomRow, {
        x: (window.innerWidth/2 + 198)
      }, {
        x: -1 * (topRow.offsetWidth - window.innerWidth + 148)
      }, "<")

      ScrollTrigger.refresh();

      // mask image scroll 

      gsap.utils.toArray('.js-mask-text').forEach((text) => {
        const maskTL = gsap.timeline({
          scrollTrigger: {
            trigger: text,
            start: "center bottom",
            end: "bottom top",
            once: false,
            toggleActions: "play reverse play reverse",
            // scrub: 1,
            // ease: "power3.out",     

          }
        })      
        var maskNumber = text.getAttribute('data-mask-text');
        var image = document.querySelector('[data-mask-image="'+maskNumber+'"]');        
        maskTL.to(image, {
          clipPath: "inset(0% 0 0 0)",
          duration: 1,
          ease: "power1.out"
        })
      })
    }

    // load on scroll 
    
    gsap.utils.toArray('.js-fade-up').forEach((section) => {
      var hpTimeline = gsap.timeline({
        scrollTrigger: {
          start: "top bottom-=150",
          trigger: section,          
        }
      });
         
      hpTimeline.from(section, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
      })
    })
    
  }

  scrollanimations: {
    if ($('.js-image-move').length > 0) {
      $('.js-image-move').each(function () {
        let trigger = $(this)
        let element = $(this).find('.js-image-move__inner')

        let mouseScrollSliderTL = gsap.timeline({})
        let animation = gsap.fromTo(
          element,
          { yPercent: '0' },
          { duration: 2, yPercent: '-10', ease: 'easeOut' }
        )

        ScrollTrigger.create({
          animation: animation,
          trigger: trigger,
          //		toggleActions: "restart reset restart reset",
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          //				markers: true,
        })
      })
    }
  }
  titles: {
    function horizontal_scroll_left() {
      var horizontal = $('.horizontal-scroll--left')

      if (horizontal) {
        var speed = 8
        var direction = 'left'
        var startPosition = horizontal.position()
        $(window).scroll(function () {
          var st = $(this).scrollTop()
          var newPosition = st * (speed / 100)
          horizontal.css({
            left: newPosition,
          })
        })
      }
    }

    function horizontal_scroll_right() {
      var horizontal = $('.horizontal-scroll--right')

      if (horizontal.length > 0) {
        var speed = 8
        var direction = 'right'
        var startPosition = horizontal.position().left
        $(window).scroll(function () {
          var st = $(this).scrollTop()
          var newPosition = st * (speed / 100)
          horizontal.css({
            right: newPosition,
          })
        })
      }
    }
    horizontal_scroll_left()
    horizontal_scroll_right()
  }
  hotspot: {
    $('.modal-item__image img').on('click', function () {
      $('.hotspot__content').hide()
    })
    $('.hotspot').on('click', function () {
      $('.hotspot__content').hide()
      $(this).children('.hotspot__content').fadeIn()
    })
  }

  videoWrap: {
    $('.page-id-8395 .wp-block-column video').wrap(
      '<div class="responsive-video"></div>'
    )
    $('.page-id-8395 .wp-block-column img').wrap(
      '<div class="responsive-image"></div>'
    )
  }

  imageZoom: {
    {
      let disabled = false
      let zoomLvl = 1.1
      let isZoomed = false
      const zoomImg = {
        init() {
          document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('_JS_zoomIn')) {
              isZoomed = false
            }
            if (e.target.classList.contains('_JS_zoomOut')) {
              isZoomed = true
            }
            if (
              e.target.classList.contains('_JS_zoomIn') ||
              e.target.classList.contains('_JS_zoomOut')
            ) {
              this.controlZoomActions(
                e.target.parentElement.querySelector('.zoomContainer img')
              )
              //this.setButtonState(e.target);
            }

            disabled = true
            //console.log(isZoomed);
          })
        },
        setButtonState(target) {
          // target.setAttribute('disabled', 'disabled');
          // Array.apply(null, document.querySelectorAll('._JS_zoomControls')).forEach(button => {
          // 	if (button !== target) {
          // 		button.removeAttribute('disabled');
          // 	}
          // });
        },
        controlZoomActions(target) {
          const parentDimensions = target.parentElement.getBoundingClientRect()

          if (isZoomed == false) {
            if (zoomLvl < 3) {
              $('.hotspot__content, .hotspot').hide()
              target.parentElement.style.pointerEvents = 'all'
              target.setAttribute('data-zoomreset', target.getAttribute('src'))
              target.setAttribute('src', target.getAttribute('data-zoomImg'))
              target.style.width = 'auto'
              target.style.height = 'auto'
              target.parentElement.style.height = `${parentDimensions.height}px`
              target.parentElement.style.width = `${parentDimensions.width}px`
              this.enableDragging(target)

              zoomLvl = zoomLvl + 0.2
              target.style.transform = 'scale(' + zoomLvl + ')'
              //console.log(zoomLvl);
              disabled = false
            } else {
              isZoomed = true
            }
          } else {
            if (zoomLvl <= 1.1) {
              zoomLvl = 1.1
              target.style.transform = 'scale(1)'
              isZoomed = false
              target.parentElement.style.pointerEvents = 'none'
              disabled = true
              target.setAttribute('src', target.getAttribute('data-zoomreset'))
              target.style.width = ''
              target.parentElement.style.height = ''
              target.removeAttribute('data-zoomreset')
              this.disableDragging(target)
              $('.hotspot__content, .hotspot').show()
            } else {
              //console.log(zoomLvl);
              zoomLvl = zoomLvl - 0.2
              target.style.transform = 'scale(' + zoomLvl + ')'
            }
          }
        },

        enableDragging(target) {
          target.addEventListener('mousedown', this.dragImg)

          //target.addEventListener('touchmove', this.dragImg);
          disabled = false
        },
        disableDragging(target) {
          target.style.transform = ''
          target.style.webkitTransform = ''
          target.removeEventListener('mousedown', this.dragImg)
          //target.removeEventListener('touchmove', this.dragImg);
        },
        dragImg(userEvt) {
          const el = userEvt.target
          el.onmousemove = function (event) {
            if (disabled == false) {
              const coords =
                event.clientY === undefined ? event.touches[0] : event
              const { clientX, clientY } = coords

              const elDimensions = el.getBoundingClientRect()
              const parentDimensions = el.parentElement.getBoundingClientRect()
              const wMod = elDimensions.width / parentDimensions.width //width modifier - need to move img more than 1px right / left
              const hMod = elDimensions.height / parentDimensions.height
              const moveX =
                clientX - parentDimensions.left - parentDimensions.width / 2
              const moveY =
                clientY - parentDimensions.top - parentDimensions.height / 2
              let finalX
              let finalY
              if (
                Math.abs(moveX * wMod) >=
                Math.abs((elDimensions.width - parentDimensions.width) / 2)
              ) {
                finalX =
                  moveX * wMod > 0
                    ? (elDimensions.width - parentDimensions.width) / 2
                    : ((elDimensions.width - parentDimensions.width) / 2) * -1 //if it's negative, dont reset image to positive value
              } else {
                finalX = moveX * wMod
              }
              if (
                Math.abs(moveY * hMod) >=
                Math.abs((elDimensions.height - parentDimensions.height) / 2)
              ) {
                finalY =
                  moveY * hMod > 0
                    ? (elDimensions.height - parentDimensions.height) / 2
                    : ((elDimensions.height - parentDimensions.height) / 2) * -1
              } else {
                finalY = moveY * hMod
              }
              requestAnimationFrame(() => {
                el.style.transform = `translateX(${finalX}px) translateY(${finalY}px) scale(${zoomLvl})`
                el.style.webkitTransform = `translateX(${finalX}px) translateY(${finalY}px) scale(${zoomLvl})`
              })
            }
          }
          el.onmouseup = function (event) {
            disabled = true
          }

          el.onmousedown = function (event) {
            disabled = false
          }
        },
      }
      zoomImg.init()
    }
  }
})
