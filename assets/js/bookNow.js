// <!-- Quantity Increment and Decrement in Booking Now -->
document.addEventListener("DOMContentLoaded", () => {
   const quantityBoxes = document.querySelectorAll(".quantity-box");
 
   quantityBoxes.forEach((quantityBox) => {
     const increaseButton = quantityBox.querySelector(".ri-add-line");
     const decreaseButton = quantityBox.querySelector(".ri-subtract-fill");
     const quantityInputBooking = quantityBox.querySelector(".quantity-input");
 
     increaseButton.addEventListener("click", (event) => {
       event.preventDefault();
       const currentValue = parseInt(quantityInputBooking.value);
       const newValue = currentValue + 1;
       quantityInputBooking.value = newValue;
       quantityInputBooking.setAttribute("value", newValue);
     });
 
     decreaseButton.addEventListener("click", (event) => {
       event.preventDefault();
       const currentValue = parseInt(quantityInputBooking.value);
       if (currentValue > 0) {
         const newValue = currentValue - 1;
         quantityInputBooking.value = newValue;
         quantityInputBooking.setAttribute("value", newValue);
       }
     });
   });
 });

 // // ==========================================================
 // // ==========================================================
 // Display Block for booking hours for any day in month
 document.addEventListener("DOMContentLoaded", function() {

  const monthSelect = document.getElementById("monthSelect");
  const yearSelect = document.getElementById("yearSelect");
  const calendarDays = document.querySelector(".calendar-days");
  const bookingHours = document.querySelector(".booking_hours");
  const bookingHourOptions = document.querySelectorAll(".form-check-input");
  
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
  
  // Define reserved days for each month
  const reservedDays = {
    January: [1, 4, 27],
    February: [6, 13, 25],
    March: [6, 9, 14],
    April: [15, 21, 10],
    May: [2, 11, 19],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: [],
  };
  
  // Define bookable time slots for each day in each month
  const bookableTimeSlots = {
    January: {
      2: ["rang_hour_6" , "10 am-12 pm", "2 pm-4 pm"],
      3: ["rang_hour_6"],
      4: ["rang_hour_6"],
    },
    February: {
      7: ["rang_hour_3"],
      11: ["rang_hour_2"],
      20: ["rang_hour_6"],
    },
    June: {
      20: ["10 am-12 pm", "2 pm-4 pm"],
    },
  };
  
  function updateCalendar() {
    const selectedMonth = monthSelect.value;
    const selectedYear = yearSelect.value;
    const daysCount = daysInMonth[months[selectedMonth]];
  
    calendarDays.innerHTML = "";
    for (let day = 1; day <= daysCount; day++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("calendar-day");
  
      if (reservedDays[months[selectedMonth]].includes(day)) {
        dayElement.classList.add("booked");
      } else {
        dayElement.classList.add("bookable");
      }
  
      dayElement.textContent = day;
      calendarDays.appendChild(dayElement);
    }
  
    const calendarDayElements = document.querySelectorAll(".calendar-day");
    calendarDayElements.forEach((dayElement, index) => {
      dayElement.addEventListener("click", () => {
        if (dayElement.classList.contains("bookable")) {
          showBookingHours();
          displayBookableHours(index + 1, selectedMonth);
        } else if (dayElement.classList.contains("booked")) {
          hideBookingHours();
          alert("This day is not available for booking.");
        }
      });
    });
  }
  
  function displayBookableHours(day, month) {
    const availableHours = bookableTimeSlots[months[month]][day];
    const bookingHoursContainer = document.querySelector(".booking_hours");
    const bookingTimeOptionsContainer = document.getElementById("bookingTimeOptions");
    const bookingTimeTemplate = document.getElementById("bookingTimeTemplate");
  
    bookingHoursContainer.style.display = "block";
    if (bookingTimeOptionsContainer !== null) {
      bookingTimeOptionsContainer.innerHTML = "";
  }
  
    if (availableHours !== undefined) {
      availableHours.forEach((time) => {
        const clonedTemplate = bookingTimeTemplate.content.cloneNode(true);
        const label = clonedTemplate.querySelector(".form-check-label");
        const input = clonedTemplate.querySelector(".form-check-input");
    
        label.textContent = time;
        input.value = time;
    
        bookingTimeOptionsContainer.appendChild(clonedTemplate);
      });
  }
  }
  
  function showBookingHours(selectedDay) {
    bookingHours.style.display = "block";
    const bookingTimeTemplate = document.getElementById("bookingTimeTemplate");
    const bookingTimeOptionsContainer = document.getElementById("bookingTimeOptions");
  
    // bookingTimeOptionsContainer.innerHTML = ""; 
  
    const selectedMonth = monthSelect.value; 
  
    const availableHours = bookableTimeSlots[months[selectedMonth]][selectedDay];

    if (availableHours !== undefined) {
      availableHours.forEach((time) => {
        const clonedTemplate = bookingTimeTemplate.content.cloneNode(true);
        const label = clonedTemplate.querySelector(".form-check-label");
        const input = clonedTemplate.querySelector(".form-check-input");
        
        label.textContent = time;
        input.value = time;
        
        bookingTimeOptionsContainer.appendChild(clonedTemplate);
      });
}

  }
  
  function hideBookingHours() {
    bookingHours.style.display = "none";
  }
  
  monthSelect.addEventListener("change", updateCalendar);
  yearSelect.addEventListener("change", updateCalendar);
  
  // Update the calendar for the first time
  updateCalendar();
  
  bookingHourOptions.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.stopPropagation(); 
    });
  });
  });
  
  // ======================================
  // ======================================
  
  // <!-- Start Code JS   multi form for choice (Dine in , Out door , boxPick up )   in page login -->
  function showForm(choice) {
    var dine_in = document.getElementById("div_Dine_in");
    var pick_up = document.getElementById("div_pickUp");
    var out_door = document.getElementById("div_Outdoor");
    
    if (choice === 'dine_in') {
      dine_in.style.setProperty("display" , "block" ,"important");
      pick_up.style.display = "none";
      out_door.style.display = "none";
    } else if (choice === 'pick_up') {
      dine_in.style.display = "none";
      pick_up.style.setProperty("display" , "block" ,"important");
      out_door.style.display = "none";
    } else if (choice === 'out_door') {
      dine_in.style.display = "none";
      pick_up.style.display = "none";
      out_door.style.setProperty("display" , "block" ,"important");
    }
  }
  // <!-- End Code JS   multi form for choice (Dine in , Out door , boxPick up )   in page login -->
  

