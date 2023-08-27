
// =============================================================

// <!-- // Code PreLoading -->
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});

// =============================================================

// Close the options list if user clicks outside
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    optionsList.style.display = "none";
  }
});

// =============================================================
// Convert language
window.onload = function () {
  const languageOptions = document.querySelectorAll(".options li");
  const div_Add_email = document.querySelector(".div_Add_email .search a");
  const radioDivs = document.querySelectorAll(".radio_div");
  const justify_center_1024 = document.querySelector(".justify_center_1024");
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


      const swiper_next_onlineReview_sec = document.querySelector(".swiper_next_onlineReview_sec");
       if (swiper_next_onlineReview_sec) {
         swiper_next_onlineReview_sec.style.setProperty("display","none","important");
       }

    //  const svg_Live_Experience = document.querySelector(".svg_Live_Experience");
    //   if (svg_Live_Experience) {
    //   svg_Live_Experience.style.setProperty("width", "145px", "important");
    //   svg_Live_Experience.style.setProperty("margin-left", "-53px", "important");
    //   svg_Live_Experience.style.setProperty("margin-bottom", "0px", "important");
    //   }

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

/* ================================================================================================================== */
/* ================================================================================================================== */
 /*========================  Dashboard Code JS     ==================================================================*/

// Start  Page one ==> Dashboard

// convert title Total order
      const totalOrderElement = document.querySelector('.contentDashboard .totalOrder');
      if (totalOrderElement) {
          totalOrderElement.style.setProperty("display", "flex", "important");
          totalOrderElement.style.setProperty("flex-direction", "row", "important");
          console.log("يا عم والله شغال");
      }

// convert Border radius thead in Table
  const firstTh = document.querySelector('.tableView_dateFilter thead tr th:nth-child(1)');
  const lastTh = document.querySelector('.tableView_dateFilter thead tr th:last-child');

    if (lastTh) {
          lastTh.style.borderTopLeftRadius = '5px';
          lastTh.style.borderBottomLeftRadius = '5px';
          lastTh.style.borderTopRightRadius = '0px';
          lastTh.style.borderBottomRightRadius = '0px';
    }
    if (firstTh) {
      firstTh.style.borderTopRightRadius = '5px';
      firstTh.style.borderBottomRightRadius = '5px';
      firstTh.style.borderTopLeftRadius = '0px';
      firstTh.style.borderBottomLeftRadius = '0px';
    }

    // Convert List with Icon
      const ul_listPage_a = document.querySelectorAll('.sidebar_sec .ul_listPage li a');
      const ul_listPage_li = document.querySelectorAll('.sidebar_sec .ul_listPage li');
      if (ul_listPage_a) {
          ul_listPage_a.forEach(link => {
              link.style.setProperty("display", "flex", "");
              link.style.setProperty("flex-direction", "row", "");
          });
          ul_listPage_li.forEach(li => {
            li.style.setProperty("padding-bottom", "initial", "important");
            li.style.setProperty("padding-top", "10px", "important");
        });
      }


      const sidebar = document.getElementById('sidebar');
      // Check if the sidebar content height is greater than the viewport height
      if (sidebar.scrollHeight > window.innerHeight) {
          sidebar.style.maxHeight = `calc(${window.innerHeight}px - 20px)`;
      }

        //  edit location dropdown profile in navbar in dashboard
          if (window.innerWidth < 1025) {
            var profileDropdown = document.querySelector(".navbarDashboard .profile-dropdown");
            
            profileDropdown.style.setProperty("right", "-176px", "important");
          }


        // تحويل السايدبار الى الجهة اليمين في اللغة العربية
        if (window.innerWidth > 913) {

          var sidebar_Sec = document.querySelector(".sidebar.sidebar_sec");
          var mainContent_sidebar = document.querySelector(".navbarDashboard .main-content");
          var closeBtn_Sidebar = document.querySelector(".sidebar_sec .close-btn");
          // ---
         
          if (sidebar_Sec) {
            sidebar_Sec.style.setProperty("right", "0","important");
            sidebar_Sec.style.setProperty("margin-left", "0","important");
            sidebar_Sec.style.setProperty("margin-right", "18px", "important");
          }
          if (mainContent_sidebar) {
            mainContent_sidebar.style.setProperty("margin-right", "280px", "important");
          }
          if (closeBtn_Sidebar) {
            closeBtn_Sidebar.style.setProperty("display", "none","important");
          }

          // ---
          var contentPagesDashboard = document.querySelector(".contentPages_Dashboard");
          if (contentPagesDashboard) {
            // contentPagesDashboard.style.setProperty("width", "calc(100vw - 330px)" , "important");
            contentPagesDashboard.style.setProperty("margin-right", "315px" , "important");
            contentPagesDashboard.style.setProperty("margin-left", "0px" , "important");
          }
        }

        // وضع السايدبار في جهة اليمين في الشاشات الصغيرة
          if (window.innerWidth < 913) {
            var sidebar_768 = document.querySelector(".sidebar.sidebar_sec");
            var mainContent_768 = document.querySelector(".navbarDashboard .main-content");
            var buttonAction_768 = document.querySelector(".navbarDashboard .main-content button");
            
            if (sidebar_768) {
              sidebar_768.style.setProperty("left", "auto" , "important");
              sidebar_768.style.setProperty("right", "-299px", "important");
              mainContent_768.style.setProperty("margin-right", "0", "important");     
            }
            
            if (buttonAction_768) {
              buttonAction_768.addEventListener("click", function() {
                  if (sidebar_768.classList.contains("active")) {
                    sidebar_768.style.setProperty("right", "6px" , "important");
                    sidebar_768.style.setProperty("left", "auto" , "important");
                    mainContent_768.style.setProperty("margin-right", "3px" , "important");
                    mainContent_768.style.setProperty("margin-left", "auto" , "important");
                  } else {
                    sidebar_768.style.setProperty("right", "-299px" , "important");
                    mainContent_768.style.setProperty("margin-right", "0" , "important");
                    mainContent_768.style.setProperty("margin-left", "auto" , "important");
                  }
                });
            }
          }
    
        

// ===================================================================
// ===================================================================
// ===================================================================

      
      
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
      paddingTextDetailsFood_768();
      
      //  Live The Experience in Booking Now Page
      const form_checkBookingNow= document.querySelector('.rightPart_box .form-check');
      const form_checLabelkBookingNow= document.querySelector('.rightPart_box .form-check-label');
      if (form_checkBookingNow) {
        form_checkBookingNow.style.setProperty("display", "flex", "important");
        form_checkBookingNow.style.setProperty("flex-direction", "row", "important");
        form_checkBookingNow.style.setProperty("padding", "0px", "important");
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

// ================== New Code in Page (Reset Password) ====================

      // <!-- Start section Reset Password -->
      // Convert Name User whit word Hi User
      var titleUser = document.querySelector('.resetPass_sec .nameUser');
      if (titleUser) { 
        titleUser.style.display = 'flex';
      } 

      // convert image Reset Password
      var en_img_resetPass = document.querySelector('.resetPass_sec .en_img_resetPass');
      var ar_img_resetPass = document.querySelector('.resetPass_sec .ar_img_resetPass');
      if (ar_img_resetPass) { 
        ar_img_resetPass.style.setProperty("display", "block", "important");
        en_img_resetPass.style.setProperty("display", "none", "important");
      }
      // <!-- End section Reset Password -->

      //  <!-- Start section Reset By Email -->
      // Convert image reset By Email
      var en_img_resetByEmail = document.querySelector('.resetByEmail_sec .en_img_resetByEmail');
      var ar_img_resetByEmail = document.querySelector('.resetByEmail_sec .ar_img_resetByEmail');
      if (ar_img_resetByEmail) { 
        ar_img_resetByEmail.style.setProperty("display", "block", "important");
        en_img_resetByEmail.style.setProperty("display", "none", "important");
      }
      //  <!-- End section Reset By Email -->




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

/* ================================================================================================================== */
/* ================================================================================================================== */
/*========================  Dashboard Code JS     ==================================================================*/

    // convert Border radius thead in Table
      const firstTh = document.querySelector('.tableView_dateFilter thead tr th:nth-child(1)');
      const lastTh = document.querySelector('.tableView_dateFilter thead tr th:last-child');

        if (lastTh) {
              lastTh.style.borderTopLeftRadius = '0px';
              lastTh.style.borderBottomLeftRadius = '0px';
              lastTh.style.borderTopRightRadius = '5px';
              lastTh.style.borderBottomRightRadius = '5px';
        }
        if (firstTh) {
          firstTh.style.borderTopRightRadius = '0px';
          firstTh.style.borderBottomRightRadius = '0px';
          firstTh.style.borderTopLeftRadius = '5px';
          firstTh.style.borderBottomLeftRadius = '5px';
        }

        //  edit location dropdown profile in navbar in dashboard
        if (window.innerWidth < 1025) {
          var profileDropdown = document.querySelector(".navbarDashboard .profile-dropdown");
          
          profileDropdown.style.setProperty("right", "76px", "important");
        }

        // تحويل السايدبار الى الجهة اليسار في اللغة الانجليزية
        if (window.innerWidth >= 913) {

          var sidebar_Sec = document.querySelector(".sidebar.sidebar_sec");
          var mainContent_sidebar = document.querySelector(".navbarDashboard .main-content");
          var closeBtn_Sidebar = document.querySelector(".sidebar_sec .close-btn");
          if (sidebar_Sec) {
            sidebar_Sec.style.setProperty("left", "0","important");
            sidebar_Sec.style.setProperty("margin-left", "18px","important");
            sidebar_Sec.style.setProperty("margin-right", "0px", "important");
          }
          if (mainContent_sidebar) {
            mainContent_sidebar.style.setProperty("margin-left", "280px", "important");
          }
          if (closeBtn_Sidebar) {
            closeBtn_Sidebar.style.setProperty("display", "none","important");
          }
          // ---
          var contentPagesDashboard = document.querySelector(".contentPages_Dashboard");
          if (contentPagesDashboard) {
            contentPagesDashboard.style.setProperty("width", "calc(100vw - 330px)","important");
            contentPagesDashboard.style.setProperty("margin-left", "315px","important");
            contentPagesDashboard.style.setProperty("margin-right", "0px","important");                
          }
        }

        // وضع السايدبار في جهة اليسار في الشاشات الصغيرة
        if (window.innerWidth < 913) {
          var sidebar_768 = document.querySelector(".sidebar.sidebar_sec");
          var mainContent_768 = document.querySelector(".navbarDashboard .main-content");
          var buttonAction_768 = document.querySelector(".navbarDashboard .main-content button");
          if (sidebar_768) {
            sidebar_768.style.setProperty("left", "-299px" , "important");
            sidebar_768.style.setProperty("right", "auto", "important");
            mainContent_768.style.setProperty("margin-left", "0", "important");     
          }
          
          if (buttonAction_768) {
            buttonAction_768.addEventListener("click", function() {
                if (sidebar_768.classList.contains("active")) {
                  sidebar_768.style.setProperty("left", "0" , "important");
                  sidebar_768.style.setProperty("right", "auto" , "important");
                  mainContent_768.style.setProperty("margin-left", "3px" , "important");
                  mainContent_768.style.setProperty("margin-right", "auto" , "important");
                } else {
                  sidebar_768.style.setProperty("left", "-299px" , "important");
                  sidebar_768.style.setProperty("right", "auto" , "important");
                  mainContent_768.style.setProperty("margin-left", "0" , "important");
                  mainContent_768.style.setProperty("margin-right", "auto" , "important");
                }
              });
          }
        }

        // =====================================================
        // =====================================================
        // =====================================================

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
      en_handleResizeSize_414();
 // ======================================================
      // <!-- Start section Reset Password -->
      // Convert Name User whit word Hi User
      var titleUser = document.querySelector('.resetPass_sec .nameUser');
      if(titleUser) { 
        titleUser.style.display = 'block';
        // titleUser.style.flexDirection = 'row';
      }

      // convert image Reset Password
      var en_img_resetPass = document.querySelector('.resetPass_sec .en_img_resetPass');
      var ar_img_resetPass = document.querySelector('.resetPass_sec .ar_img_resetPass');
       if(ar_img_resetPass) { 
        ar_img_resetPass.style.setProperty("display", "none", "important");
        en_img_resetPass.style.setProperty("display", "block", "important");
      }
      // <!-- End section Reset Password -->

      //  <!-- Start section Reset By Email -->
      // Convert image reset By Email
      var en_img_resetByEmail = document.querySelector('.resetByEmail_sec .en_img_resetByEmail');
      var ar_img_resetByEmail = document.querySelector('.resetByEmail_sec .ar_img_resetByEmail');
      if (ar_img_resetByEmail) { 
        ar_img_resetByEmail.style.setProperty("display", "none", "important");
        en_img_resetByEmail.style.setProperty("display", "block", "important");
      }
      //  <!-- End section Reset By Email -->
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

