// =============================================================
// =============================================================
// =============================================================

// <!-- // Code PreLoading -->
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});

// =============================================================
// =============================================================
// =============================================================

// Close the options list if user clicks outside
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    optionsList.style.display = "none";
  }
});

// =============================================================
// =============================================================
// =============================================================

// Convert language
window.onload = function () {
  const languageOptions = document.querySelectorAll(".options li");
  const div_Add_email = document.querySelector(".div_Add_email .search a");
  const radioDivs = document.querySelectorAll(".radio_div");
  const justify_center_1024 = document.querySelector(".justify_center_1024");
  //   convert radio input with label
  const arMarginRightLabels = document.querySelectorAll(".ar_marginRight ");
  const radio_div = document.querySelectorAll(".radio_div");
  const htmlTag = document.querySelector("html");
 

  function updateLanguage(selectedLanguage) {
    if (selectedLanguage === "arabic") {
      htmlTag.setAttribute("lang", "ar");
      htmlTag.setAttribute("dir", "rtl");

      // Login Page convert checkbox
      const form_check = document.querySelector(".signUp_sec .form-check");
      const labelForm_check = document.querySelector(".signUp_sec .form-check label");
      if (form_check) {
        form_check.style.setProperty("display", "flex", "important");
        form_check.style.setProperty("flex-direction", "row", "important");
        form_check.style.setProperty("padding-right", "0.5em", "important");
      }
      if (labelForm_check) {
         labelForm_check.style.setProperty("padding-right","2em","important");
      }    

       // convert image in about us
      const ar_img_whoAre_we = document.querySelector(".ar_img_whoAre_we");
      const en_img_whoAre_we = document.querySelector(".en_img_whoAre_we");
      if (en_img_whoAre_we) {
        en_img_whoAre_we.style.setProperty("display", "none", "important");
      }
      if (ar_img_whoAre_we) {
        ar_img_whoAre_we.style.setProperty("display", "block", "important");
      }

      // convert image in Calender
      function applyResponsiveStylesBookingNow() {
        const screenWidth = window.innerWidth;
        const ar_img_homeCalender = document.querySelector('.ar_img_homeCalender');
        const en_img_homeCalender = document.querySelector('.en_img_homeCalender'); 
        if (screenWidth > 991) {
            if (en_img_homeCalender) {
              en_img_homeCalender.style.setProperty("display", "none", "important");
            }
            if (ar_img_homeCalender) {
              ar_img_homeCalender.style.setProperty("display", "block", "important");
            }
        }
        else{
          if (en_img_homeCalender) {
            en_img_homeCalender.style.setProperty("display", "none", "important");

          }
          if (ar_img_homeCalender) {
            ar_img_homeCalender.style.setProperty("display", "none", "important");
          }
        }
      }
      window.addEventListener("DOMContentLoaded", applyResponsiveStylesHome);
      window.addEventListener("resize", applyResponsiveStylesHome);
      window.addEventListener("DOMContentLoaded", applyResponsiveStylesHome_768);
      window.addEventListener("resize", applyResponsiveStylesHome_768);
      window.addEventListener("DOMContentLoaded", paddingStileDetailsFood);
      window.addEventListener("resize", paddingStileDetailsFood);
      // window.addEventListener("DOMContentLoaded", applyResponsiveStylesBookingNow);
      window.addEventListener("resize", applyResponsiveStylesBookingNow);
      applyResponsiveStylesBookingNow();


      const bgImgReview = document.querySelector(".bg_img_review");
      const arBgImgReview = document.querySelector(".ar_bg_img_review");

      if (bgImgReview) {
        bgImgReview.style.setProperty("display", "none", "important");
      }

      if (arBgImgReview) {
        arBgImgReview.style.setProperty("display", "block", "important");
      }

      //  This For Swiper In Details Food in arabic language
      const nextButton = document.querySelector(".swiper_next_detailsFood_sec");
      if (nextButton) {
        nextButton.style.setProperty("right", "10px", "important");
        nextButton.style.setProperty("opacity", "0", "important");
      }

      const swiper_slide = document.querySelector(".swiper-slide");
      if (swiper_slide) {
        swiper_slide.style.setProperty("margin-right", "0px", "important");
      }

      const circle_load_blue = document.querySelector(".circle_load_blue");
       if (circle_load_blue) {
         circle_load_blue.style.setProperty("left", "48px", "important");
       }

       const circle_load_border = document.querySelector(".circle_load_border");
       if (circle_load_border) {
         circle_load_border.style.setProperty("left", "16px", "important");
      }

      const swiper_next_onlineReview_sec = document.querySelector(".swiper_next_onlineReview_sec");
       if (swiper_next_onlineReview_sec) {
         swiper_next_onlineReview_sec.style.setProperty("display","none","important");
       }

     const svg_Live_Experience = document.querySelector(".svg_Live_Experience");
      if (svg_Live_Experience) {
      svg_Live_Experience.style.setProperty("width", "145px", "important");
      svg_Live_Experience.style.setProperty("margin-left", "-53px", "important");
      svg_Live_Experience.style.setProperty("margin-bottom", "0px", "important");
      }

      const pr_0_lg = document.querySelector(".pr_0_lg");
      if (pr_0_lg){
        pr_0_lg.style.setProperty("padding-right", "0px", "important");
      }

      // Search page
      const search_secSearchInput = document.querySelector(".search_sec .search input");
      if (search_secSearchInput) {
        search_secSearchInput.style.setProperty("border-top-right-radius", "0px", "important");
        search_secSearchInput.style.setProperty("border-bottom-right-radius", "0px", "important");
        search_secSearchInput.style.setProperty("border-top-left-radius", ".375rem", "important");
        search_secSearchInput.style.setProperty("border-bottom-left-radius", ".375rem", "important");
      }


      // Home Page
        const ar_rotate_180 = document.querySelectorAll('.ar_rotate_180');
        if (ar_rotate_180) {
          ar_rotate_180.forEach(element => {
            element.style.setProperty("transform", "rotate(180deg)", "important");
          });
        }

        const nextButtonSwiperHome = document.querySelector('.Experience_of_day .swiper-button-next');
        if (nextButtonSwiperHome) {
          nextButtonSwiperHome.style.setProperty("display", "none", "important");
        }

        function applyResponsiveStylesHome() {
          const screenWidth = window.innerWidth;
        
          if (screenWidth < 602) {
            const swiperSlideExperience = document.querySelectorAll('.Experience_of_day .swiper-slide');
            if (swiperSlideExperience) {
              swiperSlideExperience.forEach(item => {
                item.style.setProperty("margin-right", "0", "important");
              });
            }
          }
        }

        function applyResponsiveStylesHome_768() {
          const screenWidth = window.innerWidth;
        
          if (screenWidth > 767 && screenWidth < 770) {
            const inputSearchHome = document.querySelector('.header_sec .search input');
            if (inputSearchHome) {
              inputSearchHome.style.setProperty("padding-right", "34px", "important");
            }
          }
        }

        const inner_descr_swiper_slides = document.querySelectorAll('.Experience_of_day .inner_descr_swiper_slide');
        if (inner_descr_swiper_slides) {
          inner_descr_swiper_slides.forEach(slide => {
            slide.style.setProperty("text-align", "start", "important");
          });
        }

        
        const px_800_812_0 = document.querySelector('.px_800_812_0');
        if (px_800_812_0) {
          px_800_812_0.style.setProperty("padding-right", "0px", "important");
        }
          //  Code Modal
        const modalHeader = document.querySelector(".modal-header");
        if (modalHeader) {
          modalHeader.style.setProperty("flex-direction", "row-reverse", "important");
        }
  // End Page Home


      document.addEventListener("DOMContentLoaded", function () {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 320) {
          const onlineReviewSlideActive = document.querySelector(".detailsFood_sec .swiper-slide-active");
      
          if (onlineReviewSlideActive) {
            onlineReviewSlideActive.style.setProperty("margin-right", "0px", "important");
          }
        }
      });

// Details Food Page
   function paddingStileDetailsFood(e){
    e.preventDefault();
     const padding_style = document.querySelector(".padding_style");
     const screenWidth = window.innerWidth;
      if (screenWidth > 765 && screenWidth < 769) {
        if (padding_style) {
              //  padding_style.style.setProperty("padding-left", "0px", "important");
              //  padding_style.style.setProperty("padding-right", "110px", "important");
             }
        } else{
              if (padding_style) {
                // padding_style.style.setProperty("padding-right", "0px", "important");
              }
        }     
  }

      const quantityBoxDetailsFood = document.querySelector('.quantity-box');
      if (quantityBoxDetailsFood) {
        quantityBoxDetailsFood.style.setProperty("display", "flex", "important");
        quantityBoxDetailsFood.style.setProperty("flex-direction", "row-reverse", "important");
      }

      function paddingTextDetailsFood() {
        const padding_style_820 = document.querySelector(".padding_style");
        const screenWidth = window.innerWidth;
      
        if (screenWidth > 819 && screenWidth <= 822) {
          if (padding_style_820) {
            // padding_style_820.style.setProperty("width", "84%", "important");
            // padding_style_820.style.setProperty("padding-right", "80px", "important");
            // console.log("run code");
          }
        } else {
          //  console.log("stop");
        }
      }
      
      document.addEventListener("DOMContentLoaded", paddingTextDetailsFood);
      window.addEventListener("resize", paddingTextDetailsFood);
      
      function paddingTextDetailsFood_912() {
        const padding_style_820 = document.querySelector(".padding_style");
        const screenWidth = window.innerWidth;
      
        if (screenWidth > 911 && screenWidth <= 915) {
          if (padding_style_820) {
            // padding_style_820.style.setProperty("width", "84%", "important");
            // padding_style_820.style.setProperty("padding-right", "170px", "important");
            // console.log("run code 2");
          }
        } else {
           console.log("");
        }
      }
      
      document.addEventListener("DOMContentLoaded", paddingTextDetailsFood_912);
      window.addEventListener("resize", paddingTextDetailsFood_912);
      
      function paddingTextDetailsFood_768() {
        const padding_style_820 = document.querySelector(".padding_style");
        const screenWidth = window.innerWidth;
      
        if (screenWidth > 1278 && screenWidth <= 1285) {
          if (padding_style_820) {
            padding_style_820.style.setProperty("width", "85%", "important");
          }
        } else {
           console.log("");
        }
      }
      
      document.addEventListener("DOMContentLoaded", paddingTextDetailsFood_768);
      // window.addEventListener("resize", paddingTextDetailsFood_768);
      paddingTextDetailsFood_768();
      
      // Booking Now Page
      const radio_div_select = document.querySelectorAll(".radio_div_select");
      const radio_div_selectLabel = document.querySelectorAll(".radio_div_select label");
      if (radio_div_select) {
        radio_div_select.forEach((select) => {
          select.style.setProperty("display", "flex", "important");
          select.style.setProperty("flex-direction", "row", "important");
        });
        if (radio_div_selectLabel) {
          radio_div_selectLabel.forEach((label) => {
              label.style.setProperty("padding-right", "40px", "important");
          });
        }
      }

      const quantityBoxBookNow= document.querySelectorAll('.rightPart_box .quantity-box');
      if (quantityBoxBookNow) {
        quantityBoxBookNow.forEach((label) => {
          label.style.setProperty("display", "flex", "important");
          label.style.setProperty("flex-direction", "row-reverse", "important");
         });
      }
//  Live The Experience in Booking Now Page
      const form_checkBookingNow= document.querySelector('.rightPart_box .form-check');
      const form_checLabelkBookingNow= document.querySelector('.rightPart_box .form-check-label');
      if (form_checkBookingNow) {
        form_checkBookingNow.style.setProperty("display", "flex", "important");
        form_checkBookingNow.style.setProperty("flex-direction", "row", "important");
        form_checkBookingNow.style.setProperty("padding", "0px", "important");
        console.log("very good man");
      }
      if(form_checLabelkBookingNow){
        form_checLabelkBookingNow.style.setProperty("margin-right" , "30px" , "important");
      }

        

      // ===============================================
      ar_handleResizeSize_414();
      ar_handleResizeSize_1024();
   //  FAQ Page      
   function icon_accordion_button() {
    const screenWidth = window.innerWidth;
    const accordionButtons = document.querySelectorAll(".accordion-button");
  
    if (screenWidth > 1020 && screenWidth <= 1950) {
      if (accordionButtons) {
        accordionButtons.forEach(button => {
          button.classList.add("hide-after");
          button.classList.remove("display_none"); 
        });
      }
    } else {
      if (accordionButtons) {
        accordionButtons.forEach(button => {
          button.classList.remove("hide-after"); 
          button.classList.add("display_none");
        });
      }
    }
  }
  
  window.addEventListener("DOMContentLoaded", icon_accordion_button);
  window.addEventListener("resize", icon_accordion_button);
  
    window.addEventListener("DOMContentLoaded", icon_accordion_button);
    window.addEventListener("resize", icon_accordion_button);
    icon_accordion_button();
  
      // ===============================================
      radioDivs.forEach((div) => {
        div.classList.add("d-flex", "flex-row");
      });

      // ===============================================
      //   convert radio input with label
      arMarginRightLabels.forEach((label) => {
        label.style.setProperty("margin-right", "30px", "important");
      });
      radio_div.forEach((div) => {
        div.style.setProperty("padding", "0px", "important");
      });
      // ===============================================
     

      document.addEventListener("DOMContentLoaded", function () {
      const boxCheckbox2 = document.querySelector(".box_checkbox_2");
        if (boxCheckbox2) {
            boxCheckbox2.style.setProperty(
              "flex-direction",
              "row-reverse",
              "important"
            );
        }
      });
      
      // ===============================================
      
      
      
      // ===============================================
    } else {
      htmlTag.setAttribute("lang", "en");
      htmlTag.setAttribute("dir", "ltr");
        //  Code Modal
        const modalHeader = document.querySelector(".modal-header");
        if (modalHeader) {
          modalHeader.style.setProperty("flex-direction", "row", "important");
        }
      // convert image in about us
      const ar_img_whoAre_we = document.querySelector(".ar_img_whoAre_we");
      const en_img_whoAre_we = document.querySelector(".en_img_whoAre_we");
      if (en_img_whoAre_we) {
        en_img_whoAre_we.style.setProperty("display", "block", "important");
      }
      if (ar_img_whoAre_we) {
        ar_img_whoAre_we.style.setProperty("display", "none", "important");
      }
         // convert image in Calender
      function applyResponsiveStylesBookingNow() {
        const screenWidth = window.innerWidth;
        const ar_img_homeCalender = document.querySelector('.ar_img_homeCalender');
        const en_img_homeCalender = document.querySelector('.en_img_homeCalender'); 
        if (screenWidth > 991) {
            if (en_img_homeCalender) {
              en_img_homeCalender.style.setProperty("display", "block", "important");
            }
            if (ar_img_homeCalender) {
              ar_img_homeCalender.style.setProperty("display", "none", "important");
            }
        }
        else{
          if (en_img_homeCalender) {
            en_img_homeCalender.style.setProperty("display", "none", "important");
          }
          if (ar_img_homeCalender) {
            ar_img_homeCalender.style.setProperty("display", "none", "important");
          }
        }
      }
      // window.addEventListener("DOMContentLoaded", applyResponsiveStylesBookingNow);
      window.addEventListener("resize", applyResponsiveStylesBookingNow);
      applyResponsiveStylesBookingNow();
      const quantityBoxBookNow= document.querySelectorAll('.rightPart_box .quantity-box');
      if (quantityBoxBookNow) {
        quantityBoxBookNow.forEach((label) => {
          label.style.setProperty("display", "flex", "important");
          label.style.setProperty("flex-direction", "row", "important");
         });
      }
       
       // Booking Now Page
       const radio_div_select = document.querySelectorAll(".radio_div_select");
       const radio_div_selectLabel = document.querySelectorAll(".radio_div_select label");
       if (radio_div_select) {
         radio_div_select.forEach((select) => {
           select.style.setProperty("display", "block", "important");
         });
         if (radio_div_selectLabel) {
           radio_div_selectLabel.forEach((label) => {
               label.style.setProperty("padding-right", "0px", "important");
           });
         }
       }

        en_handleResizeSize_414();
      
    }
  }

  


  function en_handleResizeSize_414() {
    var screenWidth = window.innerWidth;
    var breakpointWidth = 414;
    if (screenWidth <= breakpointWidth) {
      div_Add_email.style.right = "40%";
    } else {
      div_Add_email.style.right = "35px";
    }
  }

  function ar_handleResizeSize_414() {
    var screenWidth = window.innerWidth;
    var breakpointWidth = 414;
    if (screenWidth <= breakpointWidth) {
      div_Add_email.style.right = "30% !important";
    } else {
      div_Add_email.style.right = "35px";
    }
  }

  function ar_handleResizeSize_1024() {
    var screenWidth = window.innerWidth;
    if (screenWidth <= 1025 && screenWidth >= 1020) {
      justify_center_1024.style.setProperty(
        "justify-content",
        "center",
        "important"
      );
    }
  }

  window.addEventListener("resize", function () {
    if (htmlTag.getAttribute("lang") === "ar") {
      ar_handleResizeSize_414();
      ar_handleResizeSize_1024();

    
    } else {
      en_handleResizeSize_414();
    }
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedLanguage = option.getAttribute("data-value");
      updateLanguage(selectedLanguage);
    });
  });
};



// =============================================================
// =============================================================

// Code Hidden Password
$(document).ready(function () {
  $("#show_hide_password a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password input").attr("type") == "text") {
      $("#show_hide_password input").attr("type", "password");
      $("#show_hide_password i").addClass("ri-eye-off-line");
      $("#show_hide_password i").removeClass("ri-eye-line");
    } else if ($("#show_hide_password input").attr("type") == "password") {
      $("#show_hide_password input").attr("type", "text");
      $("#show_hide_password i").removeClass("ri-eye-off-line");
      $("#show_hide_password i").addClass("ri-eye-line");
    }
  });
});

// =============================================================
// =============================================================
// =============================================================

// btn_direction Top
$(window).scroll(function () {
  var windowScroll = $(this).scrollTop();
  if (windowScroll > 500) {
    $(".btn_direction").fadeIn();
  } else {
    $(".btn_direction").fadeOut();
  }
});

$(".btn_direction").on("click", function () {
  $("html").animate(
    {
      scrollTop: 0,
    },
    100
  );
});

// =============================================================
// =============================================================
// =============================================================
// <!-- Add Image With Tag Option (Language) -->
const dropdown = document.querySelector(".custom-dropdown");
const selectedOption = dropdown.querySelector(".selected-option");
const optionsList = dropdown.querySelector(".options");
const options = optionsList.querySelectorAll("li");

selectedOption.addEventListener("click", () => {
  optionsList.style.display =
    optionsList.style.display === "block" ? "none" : "block";
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    const value = option.getAttribute("data-value");
    const text = option.textContent;
    const icon = option.querySelector(".language-icon").cloneNode(true);

    selectedOption.innerHTML = "";
    selectedOption.appendChild(icon);
    selectedOption.insertAdjacentHTML("beforeend", `<span>${text}</span>`);

    optionsList.style.display = "none";
  });
});

// =============================================================
// =============================================================
// =============================================================
// <!-- Start Slider Cultures -->
let items = document.querySelectorAll(".carousel .carousel-item");
items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
// <!-- End Slider Cultures -->

// =============================================================
// =============================================================
// =============================================================
//  <!-- Code Carousal For Section Food Box -->
document.addEventListener("DOMContentLoaded", function () {
  var carousel = new bootstrap.Carousel(
    document.querySelector("#customTwoRowCarousel"),
    {
      interval: 2000, // Adjust as needed
      wrap: true, // Enable infinite loop
    }
  );
});

// =============================================================
// =============================================================
// =============================================================
//   <!-- Include plugin after Swiper -->
function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on("init", () => {
    if (!swiper.params.debugger) return;
  });
  on("click", (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on("tap", (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on("doubleTap", (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on("sliderMove", (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on("slideChange", () => {
    if (!swiper.params.debugger) return;
  });
  on("slideChangeTransitionStart", () => {
    if (!swiper.params.debugger) return;
  });
  on("slideChangeTransitionEnd", () => {
    if (!swiper.params.debugger) return;
  });
  on("transitionStart", () => {
    if (!swiper.params.debugger) return;
  });
  on("transitionEnd", () => {
    if (!swiper.params.debugger) return;
  });
  on("fromEdge", () => {
    if (!swiper.params.debugger) return;
  });
  on("reachBeginning", () => {
    if (!swiper.params.debugger) return;
  });
  on("reachEnd", () => {
    if (!swiper.params.debugger) return;
  });
}

// =============================================================
// =============================================================
// =============================================================
// <!-- Swiper Code js -->
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Install Plugin To Swiper
    modules: [myPlugin],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Enable debugger
    debugger: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
  });
});

// =============================================================
// =============================================================
// =============================================================

// <!-- Quantity Increment and Decrement in Details Food-->
document.addEventListener("DOMContentLoaded", () => {
  const quantityInput = document.getElementById("quantity");
  const increaseButton = document.getElementById("increase");
  const decreaseButton = document.getElementById("decrease");
  increaseButton.addEventListener("click", (event) => {
    event.preventDefault();
    quantityInput.value = parseInt(quantityInput.value) ;
  });

  decreaseButton.addEventListener("click", (event) => {
    event.preventDefault();
    const currentValue = parseInt(quantityInput.value);
    const current_quantityMale = parseInt(quantityMale.value);
    const current_quantityFemale = parseInt(quantityFemale.value);
    const current_quantityChildren = parseInt(quantityChildren.value);
    if (currentValue > 0) {
      quantityInput.value = currentValue - 1;
    }
  });
});

// <!-- Quantity Increment and Decrement in Booking Now -->
document.addEventListener("DOMContentLoaded", () => {
  const quantityBoxes = document.querySelectorAll(".quantity-box");

  quantityBoxes.forEach((quantityBox) => {
    const increaseButton = quantityBox.querySelector(".ri-add-line");
    const decreaseButton = quantityBox.querySelector(".ri-subtract-fill");
    const quantityInputBooking = quantityBox.querySelector(".quantity-input");

    increaseButton.addEventListener("click", (event) => {
      event.preventDefault();
      quantityInputBooking.value = parseInt(quantityInputBooking.value) + 1;
    });

    decreaseButton.addEventListener("click", (event) => {
      event.preventDefault();
      const currentValue = parseInt(quantityInputBooking.value);
      if (currentValue > 0) {
        quantityInputBooking.value = currentValue - 1;
        event.preventDefault();
      }
    });
  });
});

// // =================================
// // =================================

// Display Block for booking hours for any day in month
const monthSelect = document.getElementById("monthSelect");
const yearSelect = document.getElementById("yearSelect");
const calendarDays = document.querySelector(".calendar-days");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysInMonth = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

// Update month days based on selected month and year
function updateCalendar() {
  const selectedMonth = monthSelect.value;
  const selectedYear = yearSelect.value;
  const daysCount = daysInMonth[months[selectedMonth]];

  //   Update the days of the month in the table
  calendarDays.innerHTML = "";
  for (let day = 1; day <= daysCount; day++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("calendar-day");
    dayElement.classList.add("booked");
    dayElement.textContent = day;
    calendarDays.appendChild(dayElement);
  }
}

// Add a change event month and year
monthSelect.addEventListener("change", updateCalendar);
yearSelect.addEventListener("change", updateCalendar);

// Update the calendar for the first time
updateCalendar();

const calendarDayElements = document.querySelectorAll(".calendar-day");
const bookingHours = document.querySelector(".booking_hours");

// Add a click event for each day in the calendar
calendarDayElements.forEach((dayElement) => {
  dayElement.addEventListener("click", () => {
    bookingHours.style.display = "block";
  });
});
