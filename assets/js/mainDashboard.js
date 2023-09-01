//Start  Code Dashboard Page ===> toggle active class in sidebar 
document.addEventListener('DOMContentLoaded', function() {
   const navListDashboard = document.querySelectorAll('.ul_listPage .nav-list a');

   navListDashboard.forEach(item => {
    
       item.addEventListener('click', function(event) {
        //    event.preventDefault();

           const active_navListDashboard = document.querySelector('.ul_listPage .nav-list a.active');
           if (active_navListDashboard) {
               active_navListDashboard.classList.remove('active');
           }

           this.classList.add('active');
       });
   });
});
//End  Code Dashboard Page ===> toggle active class in sidebar 

// ===================================
// ===================================
     

// <!--Start Code toggle active drop down list in ==> Profile -->
   const profileWrapper_Dashboard = document.getElementById('profileWrapper');
   const profileDropdown_Dashboard = document.getElementById('profileDropdown');

   profileWrapper_Dashboard.addEventListener('click', () => {
      profileWrapper_Dashboard.classList.toggle('active');
   });
// <!--End Code toggle active drop down list in ==> Profile -->

// ===================================
// ===================================
     

// <!--Start Code Toggle Sidebar active and non active -->
   sidebarToggle.addEventListener('click', () => {
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
            
   // closeBtn.addEventListener('click', () => {
   //    sidebar.classList.remove('active'); 
   // });
// <!--End Code Toggle Sidebar active and non active -->


// Display Div Notification
document.querySelectorAll(".openNotifications").forEach(function(button) {
   button.addEventListener("click", function(e) {
     e.preventDefault();
 
     var notificationDropdown = document.querySelector(".notificationContent");
     notificationDropdown.classList.toggle("active");
   });
 });
 
 document.addEventListener("click", function(event) {
   var notificationDropdowns = document.querySelectorAll(".notificationContent");
 
   notificationDropdowns.forEach(function(dropdown) {
     if (!event.target.matches(".openNotifications") && !dropdown.contains(event.target)) {
       dropdown.classList.remove("active");
     }
   });
 });
 


//  منع نزول القائمة تعت البروفايل الشخصي لما اضغط على اي مكان جوا الاشعارات
 document.addEventListener("DOMContentLoaded", function() {
  var notificationDropdown = document.querySelector(".notificationDropdown");

  notificationDropdown.addEventListener("click", function(event) {
      event.stopPropagation();
  });

  var profileDropdown = document.querySelector(".profile-dropdown");
  var profileWrapper = document.querySelector(".profile-wrapper");

  profileDropdown.addEventListener("click", function(event) {
    profileWrapper.classList.remove("active");
      event.stopPropagation();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var profileWrapper = document.querySelector(".profile-wrapper");
  document.addEventListener("click", function(event) {
    if (!profileWrapper.contains(event.target)) {
      profileWrapper.classList.remove("active");
      }
  });
});



// Add color red for icon meal favorite 
document.addEventListener('DOMContentLoaded', function () {
  var starBoxes = document.querySelectorAll('.star_box_food_2');
  
  starBoxes.forEach(function(starBox) {
      var favoriteIcon = starBox.querySelector('.clr_favorite');
      var isBlack = false; 
      
      starBox.addEventListener('click', function () {
          if (isBlack) {
              favoriteIcon.style.setProperty("color", "red", "important");
          } else {
              favoriteIcon.style.setProperty("color", "black", "important");
          }
          isBlack = !isBlack;
      });
  });
});