//Start  Code Dashboard Page ===> toggle active class in sidebar 
document.addEventListener('DOMContentLoaded', function() {
   const navListDashboard = document.querySelectorAll('.ul_listPage .nav-list');

   navListDashboard.forEach(item => {
    
    //    item.addEventListener('click', function(event) {
    //     //    event.preventDefault();

    //        const active_navListDashboard = document.querySelector('.ul_listPage .nav-list.active');
    //        if (active_navListDashboard) {
    //            active_navListDashboard.classList.remove('active');
    //        }

    //        this.classList.add('active');
    //    });
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
// document.getElementById("notificationTrigger").addEventListener("click", function(e) {
//    e.preventDefault(); 
//    var notificationDropdown = document.getElementById("notificationDropdown");
   
//    notificationDropdown.classList.toggle("active");
//    console.log(notificationDropdown.style);
//  });
// //  اخفاء الاشعارات لما اضغط ع اي مكان في الشاشة
//  document.addEventListener("click", function(event) {
//    var notificationDropdown = document.getElementById("notificationDropdown");
   
//    if (!event.target.matches("#notificationTrigger") && !notificationDropdown.contains(event.target)) {
//      notificationDropdown.classList.remove("active");
//    }
//  });

document.querySelectorAll(".openNotifications").forEach(function(button) {
   button.addEventListener("click", function(e) {
     e.preventDefault();
 
     var notificationDropdown = document.querySelector(".notificationContent");
     notificationDropdown.classList.toggle("active");
   });
 });
 
 // حدث النقر على الوثيقة (Document) لإخفاء القائمة
 document.addEventListener("click", function(event) {
   var notificationDropdowns = document.querySelectorAll(".notificationContent");
 
   notificationDropdowns.forEach(function(dropdown) {
     if (!event.target.matches(".openNotifications") && !dropdown.contains(event.target)) {
       dropdown.classList.remove("active");
     }
   });
 });
 