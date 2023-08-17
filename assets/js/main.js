// Close the options list if user clicks outside
document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target)) {
      optionsList.style.display = 'none';
  }
});

// Convert Language
document.addEventListener('DOMContentLoaded', function () {
  const languageOptions = document.querySelectorAll('.options li');
  const div_Add_email = document.querySelector('.div_Add_email .search a');
  const modalHeader = document.querySelector('.modal-header');

  const htmlTag = document.querySelector('html');


  function en_handleResizeSize_414() {
    var screenWidth = window.innerWidth;
    var breakpointWidth = 414;
    if (screenWidth <= breakpointWidth) {
      div_Add_email.style.right = '40%';
    } else {
      div_Add_email.style.right = '35px';
    }
  }

  // function
  function ar_handleResizeSize_414() {
    var screenWidth = window.innerWidth;
    var breakpointWidth = 414;
    if (screenWidth <= breakpointWidth) {
      div_Add_email.style.right = '30% !important';
    } else{
      div_Add_email.style.right = '35px';
    }
  }
   
 

  // Add the resize event listener 
  window.addEventListener('resize', en_handleResizeSize_414);
  window.addEventListener('resize', ar_handleResizeSize_414);

  languageOptions.forEach(option => {
    option.addEventListener('click', () => {
      const selectedLanguage = option.getAttribute('data-value');
      
      if (selectedLanguage === 'arabic') {
        htmlTag.setAttribute('lang', 'ar');
        htmlTag.setAttribute('dir', 'rtl');
        // Call the resize function 
        ar_handleResizeSize_414();
        modalHeader.style.flexDirection = 'row-reverse';
      } else {
        htmlTag.setAttribute('lang', 'en');
        htmlTag.setAttribute('dir', 'ltr');
        en_handleResizeSize_414();
        modalHeader.style.flexDirection = 'row';

      }
    });
  });
});












// Code Hidden Password
$(document).ready(function() {
  $("#show_hide_password a").on('click', function(event) {
      event.preventDefault();
      if ($('#show_hide_password input').attr("type") == "text") {
          $('#show_hide_password input').attr('type', 'password');
          $('#show_hide_password i').addClass("ri-eye-off-line");
          $('#show_hide_password i').removeClass("ri-eye-line");
      } else if ($('#show_hide_password input').attr("type") == "password") {
          $('#show_hide_password input').attr('type', 'text');
          $('#show_hide_password i').removeClass("ri-eye-off-line");
          $('#show_hide_password i').addClass("ri-eye-line");
      }
  });
});

// btn_direction Top
$(window).scroll(function(){
  var windowScroll = $(this).scrollTop()
  if (windowScroll > 500) {
      $(".btn_direction").fadeIn(); 
  } else {
      $(".btn_direction").fadeOut();
  }
});

  $(".btn_direction").on('click',function(){
  $("html").animate({
      scrollTop : 0
  },100);
  })

// <!-- // Code PreLoading -->
window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
  // body.style.display = "block";
});

// <!-- Add Image With Tag Option (Language) -->
const dropdown = document.querySelector('.custom-dropdown');
const selectedOption = dropdown.querySelector('.selected-option');
const optionsList = dropdown.querySelector('.options');
const options = optionsList.querySelectorAll('li');

selectedOption.addEventListener('click', () => {
  optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
});

options.forEach(option => {
  option.addEventListener('click', () => {
      const value = option.getAttribute('data-value');
      const text = option.textContent;
      const icon = option.querySelector('.language-icon').cloneNode(true);

      selectedOption.innerHTML = '';
      selectedOption.appendChild(icon);
      selectedOption.insertAdjacentHTML('beforeend', `<span>${text}</span>`);

      optionsList.style.display = 'none';
  });
});

// <!-- Start Slider Cultures -->
let items = document.querySelectorAll('.carousel .carousel-item')
items.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
      if (!next) {
          // wrap carousel by using first child
          next = items[0]
      }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
  }
})
// <!-- End Slider Cultures -->

//  <!-- Code Carousal For Section Food Box -->
document.addEventListener("DOMContentLoaded", function() {
  var carousel = new bootstrap.Carousel(document.querySelector('#customTwoRowCarousel'), {
      interval: 2000, // Adjust as needed
      wrap: true, // Enable infinite loop
  });
});

//   <!-- Include plugin after Swiper -->
function myPlugin({ swiper, extendParams, on }) {
  extendParams({
      debugger: false,
  });

  on('init', () => {
      if (!swiper.params.debugger) return;
      console.log('init');
  });
  on('click', (swiper, e) => {
      if (!swiper.params.debugger) return;
      console.log('click');
  });
  on('tap', (swiper, e) => {
      if (!swiper.params.debugger) return;
      console.log('tap');
  });
  on('doubleTap', (swiper, e) => {
      if (!swiper.params.debugger) return;
      console.log('doubleTap');
  });
  on('sliderMove', (swiper, e) => {
      if (!swiper.params.debugger) return;
      console.log('sliderMove');
  });
  on('slideChange', () => {
      if (!swiper.params.debugger) return;
      console.log(
          'slideChange',
          swiper.previousIndex,
          '->',
          swiper.activeIndex
      );
  });
  on('slideChangeTransitionStart', () => {
      if (!swiper.params.debugger) return;
      console.log('slideChangeTransitionStart');
  });
  on('slideChangeTransitionEnd', () => {
      if (!swiper.params.debugger) return;
      console.log('slideChangeTransitionEnd');
  });
  on('transitionStart', () => {
      if (!swiper.params.debugger) return;
      console.log('transitionStart');
  });
  on('transitionEnd', () => {
      if (!swiper.params.debugger) return;
      console.log('transitionEnd');
  });
  on('fromEdge', () => {
      if (!swiper.params.debugger) return;
      console.log('fromEdge');
  });
  on('reachBeginning', () => {
      if (!swiper.params.debugger) return;
      console.log('reachBeginning');
  });
  on('reachEnd', () => {
      if (!swiper.params.debugger) return;
      console.log('reachEnd');
  });
}

// <!-- Swiper Code js -->
var swiper = new Swiper('.swiper', {
  // Install Plugin To Swiper
  modules: [myPlugin],
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // Enable debugger
  debugger: true,
});

// =================================

// <!-- Quantity Increment and Decrement -->
document.addEventListener("DOMContentLoaded", () => {
  const quantityInput = document.getElementById("quantity");
  const increaseButton = document.getElementById("increase");
  const decreaseButton = document.getElementById("decrease");
  increaseButton.addEventListener("click", (event) => {
      event.preventDefault();
      quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  decreaseButton.addEventListener("click", (event) => {
      event.preventDefault();
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 0) {
          quantityInput.value = currentValue - 1;
      }
  });
});



// ---------------------------------------------------------------------------------------


// // Show/hide "Back to Top" button
// $(window).scroll(function() {
//   var windowscroll = $(this).scrollTop();
//   if (windowscroll > 500) {
//     $(".btn_direction").fadeIn();
//   } else {
//     $(".btn_direction").fadeOut();
//   }
// });

// // =================================
// // =================================


// // Convert Language
// document.addEventListener('DOMContentLoaded', function() {
//   const languageOptions = document.querySelectorAll('.options li');

//   languageOptions.forEach(option => {
//     option.addEventListener('click', () => {
//       const selectedLanguage = option.getAttribute('data-value');
//       const htmlTag = document.querySelector('html');
//       if (selectedLanguage === 'arabic') {
//         htmlTag.setAttribute('lang', 'ar');
//         htmlTag.setAttribute('dir', 'rtl');
//       } else {
//         htmlTag.setAttribute('lang', 'en');
//         htmlTag.setAttribute('dir', 'ltr');
//       }
//       // Rest of your code to update content and language icon
//     });
//   });
// });


// // =================================
// // =================================

// // Toggle password visibility
// $(document).ready(function() {
//   $("#show_hide_password a").on('click', function(event) {
//     event.preventDefault();
//     const input = $('#show_hide_password input');
//     const icon = $('#show_hide_password i');
//     if (input.attr("type") === "text") {
//       input.attr('type', 'password');
//       icon.addClass("ri-eye-off-line").removeClass("ri-eye-line");
//     } else if (input.attr("type") === "password") {
//       input.attr('type', 'text');
//       icon.removeClass("ri-eye-off-line").addClass("ri-eye-line");
//     }
//   });
// });

// // =================================
// // =================================
// // Preloading
// window.addEventListener('load', function() {
//   var preloader = document.getElementById('preloader');
//   preloader.style.display = 'none';
// });

// // =================================
// // =================================

// // Language dropdown
// const dropdown = document.querySelector('.custom-dropdown');
// const selectedOption = dropdown.querySelector('.selected-option');
// const optionsList = dropdown.querySelector('.options');
// const options = optionsList.querySelectorAll('li');

// selectedOption.addEventListener('click', () => {
//   optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
// });

// options.forEach(option => {
//   option.addEventListener('click', () => {
//     const value = option.getAttribute('data-value');
//     const text = option.textContent;
//     const icon = option.querySelector('.language-icon').cloneNode(true);

//     selectedOption.innerHTML = '';
//     selectedOption.appendChild(icon);
//     selectedOption.insertAdjacentHTML('beforeend', `<span>${text}</span>`);
//     optionsList.style.display = 'none';
//   });
// });

// // =================================
// // =================================
// // Close dropdown on click outside
// document.addEventListener('click', (event) => {
//   if (!dropdown.contains(event.target)) {
//     optionsList.style.display = 'none';
//   }
// });

// // =================================
// // =================================

// // Slider Cultures
// let items = document.querySelectorAll('.carousel .carousel-item');
// items.forEach((el) => {
//   const minPerSlide = 4;
//   let next = el.nextElementSibling;
//   for (var i = 1; i < minPerSlide; i++) {
//     if (!next) {
//       next = items[0];
//     }
//     let cloneChild = next.cloneNode(true);
//     el.appendChild(cloneChild.children[0]);
//     next = next.nextElementSibling;
//   }
// });

// // =================================
// // =================================
// // Swiper Plugin
// function myPlugin({ swiper, extendParams, on }) {
//   extendParams({
//     debugger: false,
//   });
//   // Event listeners for debugging
//   on('init', () => { /* ... */ });
//   on('click', (swiper, e) => { /* ... */ });
//   // ... add more event listeners
// }
// // =================================
// // =================================
// // Carousal Initialization
// document.addEventListener("DOMContentLoaded", () => {
//   var carousel = new bootstrap.Carousel(document.querySelector('#customTwoRowCarousel'), {
//     interval: 2000,
//     wrap: true,
//   });
// });
// // =================================
// // =================================
// // Quantity Input
// document.addEventListener("DOMContentLoaded", () => {
//   const quantityInput = document.getElementById("quantity");
//   const increaseButton = document.getElementById("increase");
//   const decreaseButton = document.getElementById("decrease");
  
//   increaseButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     quantityInput.value = parseInt(quantityInput.value) + 1;
//   });
  
//   decreaseButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     const currentValue = parseInt(quantityInput.value);
//     if (currentValue > 0) {
//       quantityInput.value = currentValue - 1;
//     }
//   });
// });


// // btn_direction Top
//   //   $(window).scroll(function(){
//   //     var windowscroll = $(this).scrollTop()
//   //     if(windowscroll > 500){
//   //             $(".btn_direction").fadeIn(); 
//   //     }
//   //     else{
//   //         $(".btn_direction").fadeOut();
//   //     }
//   // });

//   // $(".btn_direction").on('click',function(){
//   // $("html").animate({
//   //     scrollTop : 0
//   // },100);
//   // })

//   // $(".btn_direction").on('click', function() {
//   //   $("html").animate({
//   //     scrollTop: 0
//   //   }, 100);
//   // });
// // =================================
// // =================================

// // Convert Language
//   //   document.addEventListener('DOMContentLoaded', function () {
//   //     const languageOptions = document.querySelectorAll('.options li');

//   //     languageOptions.forEach(option => {
//   //         option.addEventListener('click', () => {
//   //             const selectedLanguage = option.getAttribute('data-value');

//   //             // Update language direction based on the selected language
//   //             const htmlTag = document.querySelector('html');
//   //             if (selectedLanguage === 'arabic') {
//   //                 htmlTag.setAttribute('lang', 'ar');
//   //                 htmlTag.setAttribute('dir', 'rtl');
//   //             } else {
//   //                 htmlTag.setAttribute('lang', 'en');
//   //                 htmlTag.setAttribute('dir', 'ltr');
//   //             }

//   //             // Rest of your code to update content and language icon
//   //         });
//   //     });
//   // });


// // Code Hidden Password
//   // $(document).ready(function() {
//   //     $("#show_hide_password a").on('click', function(event) {
//   //         event.preventDefault();
//   //         if($('#show_hide_password input').attr("type") == "text"){
//   //             $('#show_hide_password input').attr('type', 'password');
//   //             $('#show_hide_password i').addClass( "ri-eye-off-line" );
//   //             $('#show_hide_password i').removeClass( "ri-eye-line" );
//   //         }else if($('#show_hide_password input').attr("type") == "password"){
//   //             $('#show_hide_password input').attr('type', 'text');
//   //             $('#show_hide_password i').removeClass( "ri-eye-off-line" );
//   //             $('#show_hide_password i').addClass( "ri-eye-line" );
//   //         }
//   //     });
//   // });

// // =================================
// // =================================

// // <!-- // Code PreLoading -->
//   // window.addEventListener('load', function () {
//   //     var preloader = document.getElementById('preloader');
//   //     preloader.style.display = 'none';
//   //     // body.style.display = "block";
//   // });

// // =================================
// // =================================

// // <!-- Add Image With Tag Option  (Language) -->
//   // const dropdown = document.querySelector('.custom-dropdown');
//   // const selectedOption = dropdown.querySelector('.selected-option');
//   // const optionsList = dropdown.querySelector('.options');
//   // const options = optionsList.querySelectorAll('li');

//   // selectedOption.addEventListener('click', () => {
//   //     optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
//   // });

//   // options.forEach(option => {
//   //     option.addEventListener('click', () => {
//   //         const value = option.getAttribute('data-value');
//   //         const text = option.textContent;
//   //         const icon = option.querySelector('.language-icon').cloneNode(true);

//   //         selectedOption.innerHTML = '';
//   //         selectedOption.appendChild(icon);
//   //         selectedOption.insertAdjacentHTML('beforeend', `<span>${text}</span>`);

//   //         optionsList.style.display = 'none';
//   //     });
//   // });

// // =================================
// // =================================

// // // Close the options list if user clicks outside
// //     document.addEventListener('click', (event) => {
// //         if (!dropdown.contains(event.target)) {
// //             optionsList.style.display = 'none';
// //         }
// //     });

// // =================================
// // =================================

// // <!-- Start Slider Cultures -->
//   // let items = document.querySelectorAll('.carousel .carousel-item')
//   //   items.forEach((el) => {
//   //       const minPerSlide = 4
//   //       let next = el.nextElementSibling
//   //       for (var i=1; i<minPerSlide; i++) {
//   //         if (!next) {
//   //         // wrap carousel by using first child
//   //         next = items[0]
//   //   }
//   //   let cloneChild = next.cloneNode(true)
//   //   el.appendChild(cloneChild.children[0])
//   //   next = next.nextElementSibling
//   //   }
//   //   })
// // <!-- End Slider Cultures -->

// // =================================
// // =================================

// //   <!-- Include plugin after Swiper -->
// // function myPlugin({ swiper, extendParams, on }) {
// //   extendParams({
// //     debugger: false,
// //   });

// //   on('init', () => {
// //     if (!swiper.params.debugger) return;
// //     console.log('init');
// //   });
// //   on('click', (swiper, e) => {
// //     if (!swiper.params.debugger) return;
// //     console.log('click');
// //   });
// //   on('tap', (swiper, e) => {
// //     if (!swiper.params.debugger) return;
// //     console.log('tap');
// //   });
// //   on('doubleTap', (swiper, e) => {
// //     if (!swiper.params.debugger) return;
// //     console.log('doubleTap');
// //   });
// //   on('sliderMove', (swiper, e) => {
// //     if (!swiper.params.debugger) return;
// //     console.log('sliderMove');
// //   });
// //   on('slideChange', () => {
// //     if (!swiper.params.debugger) return;
// //     console.log(
// //       'slideChange',
// //       swiper.previousIndex,
// //       '->',
// //       swiper.activeIndex
// //     );
// //   });
// //   on('slideChangeTransitionStart', () => {
// //     if (!swiper.params.debugger) return;
// //     console.log('slideChangeTransitionStart');
// //   });
// //   on('slideChangeTransitionEnd', () => {
// //     if (!swiper.params.debugger) return;
// //     console.log('slideChangeTransitionEnd');
// //   });
// //   on('transitionStart', () => {
// //     if (!swiper.params.debugger) return;
// //     console.log('transitionStart');
// //   });
// //   on('transitionEnd', () => {
// //     if (!swiper.params.debugger) return;
// //     console.log('transitionEnd');
// //   });
// //   on('fromEdge', () => {
// //     if (!swiper.params.debugger) return;
// //     console.log('fromEdge');
// //   });
// //   on('reachBeginning', () => {
// //     if (!swiper.params.debugger) return;
// //     console.log('reachBeginning');
// //   });
// //   on('reachEnd', () => {
// //     if (!swiper.params.debugger) return;
// //     console.log('reachEnd');
// //   });
// // }

// // =================================
// // =================================

// // <!-- Swiper Code js -->

// // var swiper = new Swiper('.swiper', {
// //   // Install Plugin To Swiper
// //   modules: [myPlugin],
// //   pagination: {
// //     el: '.swiper-pagination',
// //     clickable: true,
// //   },
// //   navigation: {
// //     nextEl: '.swiper-button-next',
// //     prevEl: '.swiper-button-prev',
// //   },
// //   // Enable debugger
// //   debugger: true,
// // });

// // =================================
// // =================================

// //  <!-- Code Carousal For Section Food Box -->
// // document.addEventListener("DOMContentLoaded", function() {
// //   var carousel = new bootstrap.Carousel(document.querySelector('#customTwoRowCarousel'), {
// //     interval: 2000, // Adjust as needed
// //     wrap: true, // Enable infinite loop
// //   });
// // });

// // =================================
// // =================================
// // document.addEventListener("DOMContentLoaded", () => {
// //     const quantityInput = document.getElementById("quantity");
// //     const increaseButton = document.getElementById("increase");
// //     const decreaseButton = document.getElementById("decrease");
// //     increaseButton.addEventListener("click", (event) => {
// //       event.preventDefault();
// //       quantityInput.value = parseInt(quantityInput.value) + 1;
// //     });
    
// //     decreaseButton.addEventListener("click", (event) => {
// //       event.preventDefault();
// //       const currentValue = parseInt(quantityInput.value);
// //       if (currentValue > 0) {
// //         quantityInput.value = currentValue - 1;
// //       }
// //     });    
// //   });
  




// This Edit In Arabic Language