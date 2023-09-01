
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
  const dropdown = document.querySelector(".custom-dropdown");
  
  if (dropdown) {
    const optionsList = dropdown.querySelector(".options");
    
    if (!dropdown.contains(event.target)) {
      optionsList.style.display = "none";
    }
  }
});


// =============================================================
// Convert language
window.onload = function () {
  const languageOptions = document.querySelectorAll(".options li");
  const justify_center_1024 = document.querySelector(".justify_center_1024");
  const htmlTag = document.querySelector("html");
 
  function updateLanguage(selectedLanguage) {
    if (selectedLanguage === "arabic") {
      htmlTag.setAttribute("lang", "ar");
      htmlTag.setAttribute("dir", "rtl");
    
      window.addEventListener("DOMContentLoaded", applyResponsiveStylesHome);
      window.addEventListener("resize", applyResponsiveStylesHome);

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

      document.addEventListener("DOMContentLoaded", function () {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 320) {
          const onlineReviewSlideActive = document.querySelector(".detailsFood_sec .swiper-slide-active");
      
          if (onlineReviewSlideActive) {
            onlineReviewSlideActive.style.setProperty("margin-right", "0px", "important");
          }
        }
      });

      // وضع السايدبار في جهة اليمين في الشاشات الصغيرة
      if (window.innerWidth < 913) {
        var sidebar_768 = document.querySelector(".sidebar.sidebar_sec");
        var mainContent_768 = document.querySelector(".navbarDashboard .main-content");
        var buttonAction_768 = document.querySelector(".navbarDashboard .main-content button");            
        if (buttonAction_768) {
          buttonAction_768.addEventListener("click", function() {
              if (sidebar_768.classList.contains("active")) {
                sidebar_768.style.setProperty("right", "6px" , "");
                mainContent_768.style.setProperty("margin-right", "3px" , "important");
                mainContent_768.style.setProperty("margin-left", "auto" , "");
              } else {
                sidebar_768.style.setProperty("right", "-299px" , "important");
                mainContent_768.style.setProperty("margin-right", "0" , "important");
                mainContent_768.style.setProperty("margin-left", "auto" , "");
              }
            });
        }
      }
       
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

    } else {
      htmlTag.setAttribute("lang", "en");
      htmlTag.setAttribute("dir", "ltr");

        // وضع السايدبار في جهة اليسار في الشاشات الصغيرة
        if (window.innerWidth < 913) {
          var sidebar_768 = document.querySelector(".sidebar.sidebar_sec");
          var mainContent_768 = document.querySelector(".navbarDashboard .main-content");
          var buttonAction_768 = document.querySelector(".navbarDashboard .main-content button");
          
          if (buttonAction_768) {
            buttonAction_768.addEventListener("click", function() {
                if (sidebar_768.classList.contains("active")) {
                  sidebar_768.style.setProperty("left", "0" , "important");
                  mainContent_768.style.setProperty("margin-left", "3px" , "important");
                  mainContent_768.style.setProperty("margin-right", "auto" , "");
                } else {
                  sidebar_768.style.setProperty("left", "-299px" , "important");
                  mainContent_768.style.setProperty("margin-left", "0" , "important");
                  mainContent_768.style.setProperty("margin-right", "auto" , "");
                }
              });
          }
        }      
}
      }
      function ar_handleResizeSize_1024() {
        var screenWidth = window.innerWidth;
        if (screenWidth <= 1025 && screenWidth >= 1020) {
          if (justify_center_1024) {
              justify_center_1024.style.setProperty(
                "justify-content",
                "center",
                "important"
              );
          }
        }
      }

      window.addEventListener("resize", function () {
        if (htmlTag.getAttribute("lang") === "ar") {
          ar_handleResizeSize_1024();
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
  function togglePasswordVisibility(containerId) {
    const container = $("#" + containerId);
    const input = container.find("input");
    const icon = container.find("i");

    if (input.attr("type") === "text") {
      input.attr("type", "password");
      icon.addClass("ri-eye-off-line").removeClass("ri-eye-line");
    } else if (input.attr("type") === "password") {
      input.attr("type", "text");
      icon.addClass("ri-eye-line").removeClass("ri-eye-off-line");
    }
  }

  $(".password-toggle a").on("click", function (event) {
    event.preventDefault();
    const containerId = $(this).closest(".password-toggle").attr("id");
    togglePasswordVisibility(containerId);
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
// <!-- Add Image With Tag Option (Language) --> in navbar
const dropdown = document.querySelector(".custom-dropdown");

const selectedOptions = document.querySelectorAll(".selected-option");
const optionsLists = document.querySelectorAll(".options");

selectedOptions.forEach((selectedOption, index) => {
    const optionsList = optionsLists[index];
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
});


// ================================
// ================================

// <!--Start Code Toggle Sidebar Guest active and non active -->
const sidebarToggleLinks = document.querySelectorAll('.sidebarToggle');

sidebarToggleLinks.forEach(sidebarToggleLink => {
  sidebarToggleLink.addEventListener('click', (e) => {
    e.preventDefault();

    const sidebar = document.querySelector('.sidebar');

    sidebarToggleLink.classList.toggle('active');
    sidebar.classList.toggle('active');

    const isSidebarActive = sidebar.classList.contains('active');
    const mainContentButtonsSidebar = document.querySelectorAll('.navbarDashboard .main-content button'); 

    mainContentButtonsSidebar.forEach(button => {
        if (isSidebarActive) {
            button.style.transform = 'rotate(180deg)';
        } else {
            button.style.transform = 'none';
        }
    });
  });
});
         

const closeBtn = document.getElementById('closeBtn');
const sidebar_guest = document.querySelector('.sidebar_guest');

if (closeBtn && sidebar_guest) {
    closeBtn.addEventListener('click', () => {
        if (sidebar_guest.classList.contains('active')) {
            sidebar_guest.classList.remove('active');
        }
    });
}


// <!--End Code Toggle Sidebar Guest active and non active -->

