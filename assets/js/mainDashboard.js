//Start  Code Dashboard Page ===> toggle active class in sidebar 
document.addEventListener('DOMContentLoaded', function() {
   const navListDashboard = document.querySelectorAll('.ul_listPage .nav-list');

   navListDashboard.forEach(item => {
       item.addEventListener('click', function(event) {
           event.preventDefault();

           const active_navListDashboard = document.querySelector('.ul_listPage .nav-list.active');
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




// function updateLanguage(selectedLanguage) {
//    if (selectedLanguage === "arabic") {
//            // Convert li in sidebar when language ==> Arabic + english
//             document.addEventListener('DOMContentLoaded', function() {
//                const dashboard_navList_a = document.querySelectorAll('.ul_listPage .nav-list a');
//                const isArabic = document.documentElement.lang === 'ar';
//                console.log(dashboard_navList_a);
//                dashboard_navList_a.forEach(item => {
//                   item.style.display = isArabic ? 'flex' : 'block';
//                    console.log(item);
//                });
//             });
//    }else{
//              console.log("Erorrrrrrrrrrrrrrrrrrrrrrrr");
//    }
// }

