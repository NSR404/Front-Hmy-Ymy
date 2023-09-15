    // <!-- Start Code Add View uploaded image  --> 
    const fileUpload = document.getElementById('file-upload');
    const fileDrag = document.getElementById('file-drag');
    const startButton = document.getElementById('start');
    const fileImage = document.getElementById('file-image');
    const displayUploadImage = document.querySelector('.displayUploadImage');

    startButton.addEventListener('click', function () {
        fileUpload.setAttribute('id', 'file-upload');            
        startButton.setAttribute('id', 'start');            
        fileImage.style.display = 'none';
        displayUploadImage.style.setProperty('display', 'none', 'important');
        fileUpload.value = '';
    });

    fileUpload.addEventListener('change', function () {
        fileUpload.setAttribute('id', 'file-upload');
        startButton.setAttribute('id', 'start');                  
        fileImage.style.display = 'none';
        displayUploadImage.style.setProperty('display', 'none', 'important');
        
        const selectedFile = fileUpload.files[0];
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
        displayUploadImage.src = e.target.result;
        displayUploadImage.style.setProperty('display', 'initial', 'important');
        };
        fileReader.readAsDataURL(selectedFile);
    });

    // Upload multi Image
    document.addEventListener('DOMContentLoaded', function () {
    var imgContainer1 = document.querySelector('.uploadedMultiImage'); 
    var imgContainer2 = document.querySelector('.uploadedMultiImageRow2'); 
    var images1 = [];
    var images2 = [];

    document.getElementById('file-uploadMulti').addEventListener('change', function (e) {
    var numberOfImages = e.target.files.length;

    for (var i = 0; i < numberOfImages; i++) {
        var file = e.target.files[i];
        
        if (file.type.match('image.*')) {
        var reader = new FileReader();

        reader.onload = function (event) {
        var img = document.createElement('img');
        var deleteIcon = document.createElement('span');

        img.src = event.target.result;
        img.alt = 'Uploaded Image';

        img.style.maxWidth = '100%';
        img.style.height = '100%';
        img.style.borderRadius = '3px';

        img.classList.remove('d-none');

        deleteIcon.innerHTML = '<i class="ri-delete-bin-line h4"></i>';
        deleteIcon.className = 'delete-icon';

        var imageContainer = document.createElement('div');
        imageContainer.className = 'col-lg-4 col-md-4 col-sm-6 col-6 px-1 my-2';
        imageContainer.appendChild(deleteIcon);
        imageContainer.appendChild(img);

        if (images1.length < 3) {
                images1.push(imageContainer);
                imgContainer1.innerHTML = '';
                images1.forEach(function (image) {
                imgContainer1.appendChild(image);
                });
        } else {
                images2.push(imageContainer);
                imgContainer2.innerHTML = '';
                images2.forEach(function (image) {
                imgContainer2.appendChild(image);
                });
        }
        
        deleteIcon.addEventListener('click', function () {
                imageContainer.remove();
                if (images1.includes(imageContainer)) {
                images1.splice(images1.indexOf(imageContainer), 1);
                } else if (images2.includes(imageContainer)) {
                images2.splice(images2.indexOf(imageContainer), 1);
                }
        });
        };

        reader.readAsDataURL(file);
        }
    }
    });
    });
    // <!-- End Code Add View uploaded image  -->

// ================================================================================
// ================================================================================

    // This code The Best Calender
    // Display Block for booking hours for any day in month
    document.addEventListener("DOMContentLoaded", function () {
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
    
        let reservations = [
            {
                date: '1',
                day: 'Friday',
                month: 'September',
                year: '2023',
                times: [
                    '04:15 pm - 05:15 pm',
                    '06:15 pm - 07:15 pm',
                    '08:15 pm - 09:15 pm'
                ],
            },
            {
                date: '2',
                day: 'Saturday',
                month: 'September',
                year: '2023',
                times: [
                  '02:15 pm - 04:15 pm',
                  '05:15 pm - 06:15 pm',
                  '08:15 pm - 09:15 pm'
                ],
            },
            {
                date: '3',
                day: 'Sunday',
                month: 'September',
                year: '2023',
                times: [
                    '04:15 pm - 05:15 pm',
                    '06:15 pm - 07:15 pm',
                    '08:15 pm - 09:15 pm'
                ],
            },
            {
                date: '4',
                day: 'Monday',
                month: 'September',
                year: '2023',
                times: [
                  '02:15 pm - 04:15 pm',
                  '05:15 pm - 06:15 pm',
                  '08:15 pm - 09:15 pm'
                ],
            },
            {
                date: '5',
                day: 'Tuesday',
                month: 'September',
                year: '2024',
                times: [
                  '04:15 pm - 05:15 pm',
                  '06:15 pm - 07:15 pm',
                  '08:15 pm - 09:15 pm'
                ],
            },
            {
                date: '6',
                day: 'Wednesday',
                month: 'September',
                year: '2024',
                times: [
                  '04:15 pm - 05:15 pm',
                  '06:15 pm - 07:15 pm',
                  '08:15 pm - 09:15 pm'
                ],
            },
            {
                    date: '1',
                    day: 'Sunday',
                    month: 'January',
                    year: '2023',
                    times: [
                        '04:15 pm - 05:15 pm',
                        '06:15 pm - 07:15 pm',
                        '08:15 pm - 09:15 pm'
                    ],
                },
                {
                    date: '2',
                    day: 'Monday',
                    month: 'January',
                    year: '2023',
                    times: [
                        '02:15 pm - 04:15 pm',
                        '05:15 pm - 06:15 pm',
                        '08:15 pm - 09:15 pm'
                    ],
                },
        ];

        function updateCalendar() {
            
            // Start Code Show Days And Month And Year In Calender
            const monthSelect = document.getElementById("monthSelect");
            const optionMonthSelect = document.querySelectorAll(".monthSelect option");
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth();

            optionMonthSelect.forEach(item => {
                if (item.value === currentMonth.toString()) {
                    item.setAttribute("selected", "selected");
                    item.style.setProperty("display","block","important");
                } 
            });

            const selectedMonth = parseInt(monthSelect.value);
            const selectedYear = parseInt(yearSelect.value);
            const daysCount = daysInMonth[months[selectedMonth]];
    
            calendarDays.innerHTML = "";
            const firstDayIndex = new Date(selectedYear, selectedMonth, 1).getDay();
            const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
            const dayFullNames =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
            for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
                const dayNameElement = document.createElement("h4");
                dayNameElement.classList.add("calendar-day-name");
                dayNameElement.textContent = dayNames[dayIndex];
                calendarDays.appendChild(dayNameElement);
            }
    
            for (let i = 0; i < firstDayIndex; i++) {
                const emptyDayElement = document.createElement("div");
                emptyDayElement.classList.add("calendar-day-empty");
                calendarDays.appendChild(emptyDayElement);
            }
    
            for (let day = 1; day <= daysCount; day++) {
                const dayElement = document.createElement("div");
                dayElement.classList.add("calendar-day");
                dayElement.classList.add("bookable");
                dayElement.id = "day" + day;
                dayElement.setAttribute('data-date', day);
                dayElement.setAttribute('data-day', dayFullNames[(firstDayIndex + day - 1) % 7]);
                dayElement.setAttribute('data-month', months[selectedMonth]);
                dayElement.setAttribute('data-year', selectedYear);
    
                dayElement.textContent = day;
                calendarDays.appendChild(dayElement);
            }
            // End Code Show Days And Month And Year In Calender
                      
            const valueSelectedMonth = monthSelect.value; 
            // Start Function Code All Function
            if (valueSelectedMonth) {
                 allFunctionsCalender();
                 monthSelect.addEventListener('change', function() {
                        const selectTimesContainerClear = document.querySelector('.itemsAddTimes.selectTimes');
                        const showItemsWithDayContainerClear = document.querySelector('.itemBookingDays');
                        const divNoAnyTimes = document.querySelector('.divNoAnyTimes');
                        selectTimesContainerClear.innerHTML = '';
                        divNoAnyTimes.style.setProperty("display" , "block" , "important");
                        showItemsWithDayContainerClear.style.setProperty("display" , "none" , "important");
                       allFunctionsCalender();
                 });
             }
           // End Function Code All Function
           

    }

      // Start Function Code All Function
      function allFunctionsCalender(){
            //  Add Class active ==> calendar-day
       let activeDay = null;
       calendarDays.querySelectorAll('.calendar-day').forEach((day) => {
           day.addEventListener('click', function () {
               if (activeDay) {
                   activeDay.classList.remove('active');
               }                
               activeDay = day;                
               activeDay.classList.add('active');                
           });
       });

       // ==================================================

       // Get day and date function when pressing a specific day 
       const childCalendarDay = document.querySelectorAll('.calendar-day');
       childCalendarDay.forEach((day) => {
           day.addEventListener('click', function () {
               const date = day.getAttribute('data-date');
               const dayValue = day.getAttribute('data-day');
               const month = day.getAttribute('data-month');
               const year = day.getAttribute('data-year');
               console.log(date + "-" + dayValue + "-" + month + "-" + year);      
               handleCalendarDayClick(date, dayValue, month, year);
           });
       });

       // A function that displays reservations 
       function handleCalendarDayClick(date, dayValue, month, year) {
           selectedDate = {date, dayValue, month, year};
           console.log(selectedDate.date + "-" + selectedDate.dayValue + "-" + selectedDate.month + "-" + selectedDate.year);      

           const selectTimesContainer = document.querySelector('.itemsAddTimes.selectTimes');
           const showItemsWithDayContainer = document.querySelector('.itemsTimes.showItemsWithDay');
           const parentItemBookingDays = document.querySelector('.parentItemBookingDays');
           const divNoAnyTimes = document.querySelector('.divNoAnyTimes');

           var addedTimesCount = selectTimesContainer.querySelectorAll('.itemTime').length;
           // if (addedTimesCount >= 12) {
           //     alert('You can only add up to 12 times.');
           //     return;
           // }

           const reservationsForDate = reservations.find((reservation) => {
               return (
                   reservation.date === selectedDate.date &&
                   reservation.day === selectedDate.dayValue &&
                   reservation.month === selectedDate.month &&
                   reservation.year === selectedDate.year
               );
           });

           selectTimesContainer.innerHTML = '';
           showItemsWithDayContainer.innerHTML = '';
           if (reservationsForDate && reservationsForDate.times.length > 0) {
               parentItemBookingDays.style.setProperty("display" , "block" , "important");
               divNoAnyTimes.style.setProperty("display" , "none" , "important");

               if (reservationsForDate) {
                   reservationsForDate.times.forEach((time) => {
                       var timeItem = document.createElement('div');
                       timeItem.className = 'itemTime';
                       
                       var deleteIcon = document.createElement('i');
                       var editIcon = document.createElement('i');
                       deleteIcon.className = 'ri-close-circle-fill h4 deleteIcon';
                       editIcon.className = 'ri-edit-circle-fill clr_basic h4 editIcon';
                       
                       var spanFrom = document.createElement('span');
                       spanFrom.textContent = time;
                       
                       timeItem.appendChild(spanFrom);
                       timeItem.appendChild(deleteIcon);
                       timeItem.appendChild(editIcon);
                       
                       // Clone the timeItem for the second container
                       var timeItemClone = timeItem.cloneNode(true);
               
                       selectTimesContainer.appendChild(timeItem);
                       showItemsWithDayContainer.appendChild(timeItemClone);

                       var dayTitle = document.querySelector('.itemBookingDays h5');
                       if (dayTitle) {
                           dayTitle.textContent = dayValue;
                       } 
               
                       deleteIcon.addEventListener('click', function() {
                           const timeItem = this.parentNode;
                           const timeText = timeItem.querySelector('span').textContent;
                           handleTimeDeletion(timeItem, timeItemClone, timeText);
                       });

                       editIcon.addEventListener('click', function() {
                           const timeItem = this.parentNode;
                           const oldTime = timeItem.querySelector('span').textContent;

                           updateReservationTime(oldTime);
                       });
                   });
               }
               //  console.log(selectedDate.date + "-" + selectedDate.dayValue + "-" + selectedDate.month + "-" + selectedDate.year);      
           }
           else{
               parentItemBookingDays.style.setProperty("display" , "none" , "important");
               divNoAnyTimes.style.setProperty("display" , "block" , "important");
           }
       }

       // A function for the deletion of the reservation itself 
       function handleTimeDeletion(timeItem, timeItemClone, timeText) {
           const selectTimesContainer = document.querySelector('.itemsAddTimes.selectTimes');
           const showItemsWithDayContainer = document.querySelector('.itemsTimes.showItemsWithDay');

           console.log("Deleted time:", timeText);
       
           selectTimesContainer.removeChild(timeItem);
           showItemsWithDayContainer.removeChild(timeItemClone);
       
        //    reservations.forEach((reservation) => {
        //        if ( reservation.date === selectedDate.date &&
        //            reservation.day === selectedDate.dayValue &&
        //            reservation.month === selectedDate.month &&
        //            reservation.year === selectedDate.year
        //        ) {
        //            reservation.times = reservation.times.filter((time) => time !== timeText);
        //        }
        //    });

           if (selectedDate !== null) {
            reservations.forEach((reservation) => {
                if (
                    reservation.date === selectedDate.date &&
                    reservation.day === selectedDate.dayValue &&
                    reservation.month === selectedDate.month &&
                    reservation.year === selectedDate.year
                ) {
                    reservation.times = reservation.times.filter((time) => time !== timeText);
                }
            });
             }
        
       
           console.log("Updated reservations:", reservations);
       
           const reservationsForDate = reservations.find((reservation) => {
               return (
                   reservation.date === selectedDate.date &&
                   reservation.day === selectedDate.dayValue &&
                   reservation.month === selectedDate.month &&
                   reservation.year === selectedDate.year
               );
           });

           
           if (reservationsForDate) {
               const remainingReservationsCounts = reservationsForDate.times.map((time) => {
                   return reservations.filter((reservation) =>
                       reservation.date === selectedDate.date &&
                       reservation.day === selectedDate.dayValue &&
                       reservation.month === selectedDate.month &&
                       reservation.year === selectedDate.year &&
                       reservation.times.includes(time)
                   ).length;
               });

               console.log(remainingReservationsCounts.length);

               if (remainingReservationsCounts.length < 1) {
                   const parentItemBookingDays = document.querySelector('.parentItemBookingDays');
                   parentItemBookingDays.style.setProperty("display" , "none" , "important");
               }
           }

       }

       // function to take from the form the hour, the minute and the time in the morning or in the evening
       function convertTo12Hour(time) {
           let hour = time.split(':')[0];
           let min = time.split(':')[1];
           let part = hour > 12 ? 'pm' : 'am';
           
           min = (min + '').length == 1 ? `0${min}` : min;
           hour = hour > 12 ? hour - 12 : hour;
           hour = (hour + '').length == 1 ? `0${hour}` : hour;

           return `${hour}:${min} ${part}`;
       }   

       // Message function after adding and deleting operation
       function showAlert(titleMessage, descMessage) {                
           var successMessage = document.getElementById('successMessage');
           successMessage.style.setProperty("display" , "block" , "important");

           var strongTitleMessage = document.querySelector('#successMessage strong');
           var descriptionMessage = document.querySelector('#successMessage span');
           strongTitleMessage.innerText = titleMessage;
           descriptionMessage.innerText = descMessage;
           
           setTimeout(function() {
               successMessage.style.display = 'none';
           }, 2000);
       }
       
       
       // A function that adds reservations through the model
        let isAlertDisplayed = false;

        document.querySelector('.addTimesDayModal .submitAddTime').addEventListener('click', function(event) {
            event.preventDefault();
        
            var insertNumberFromValue = document.getElementById('numberFrom').value;
            var insertNumberToValue = document.getElementById('numberTo').value;
            var numberFromValue = convertTo12Hour(document.getElementById('numberFrom').value);
            var numberToValue = convertTo12Hour(document.getElementById('numberTo').value);
        
            const activeCalendarDay = document.querySelector('.calendar-day.active');
        
            if (!activeCalendarDay) {
                alert('Please select a date');
                return;
            }
        
            const date = activeCalendarDay.getAttribute('data-date');
            const dayValue = activeCalendarDay.getAttribute('data-day');
            const month = activeCalendarDay.getAttribute('data-month');
            const year = activeCalendarDay.getAttribute('data-year');
        
            const dateIndex = reservations.findIndex(function(reservation) {
                return (
                    reservation.date === date &&
                    reservation.day === dayValue &&
                    reservation.month === month &&
                    reservation.year === year
                );
            });
        
            if (insertNumberFromValue.trim() !== '' && insertNumberToValue.trim() !== '') {
                const newTimeText = numberFromValue + ' - ' + numberToValue;
        
                // If the date doesn't exist, add the date and new booking
                if (dateIndex === -1) {
                    const newReservation = {
                        date: date,
                        day: dayValue,
                        month: month,
                        year: year,
                        times: [newTimeText]
                    };
                    reservations.push(newReservation);
                    showAlert('Success :', ' Added Successfully');
                } 
                // If the date exists, add the reservation if it doesn't already exist
                else {
                    const existingReservation = reservations[dateIndex];
        
                    if (existingReservation.times.includes(newTimeText)) {
                        alert('This time has already been added');
                        return;
                    } else {
                        existingReservation.times.push(newTimeText);
                        showAlert('Success :', ' Added Successfully');
                    }
                }
        
                document.getElementById('numberFrom').value = '';
                document.getElementById('numberTo').value = '';
                handleCalendarDayClick(date, dayValue, month, year);
            } else {
                alert('Time must be entered');
            }
        });
        

    

      // A function that deletes all bookings for the specified day
      document.querySelector('.itemTimeDeleteAllTimeDay').addEventListener('click', function(event) {
       event.preventDefault();
       
       const activeCalendarDay = document.querySelector('.calendar-day.active');
       if (!activeCalendarDay) {
           alert('Please select a date to delete reservations.');
           return;
       }

       const date = activeCalendarDay.getAttribute('data-date');
       const dayValue = activeCalendarDay.getAttribute('data-day');
       const month = activeCalendarDay.getAttribute('data-month');
       const year = activeCalendarDay.getAttribute('data-year');

       const reservationsForDate = reservations.filter((reservation) => {
           return (
               reservation.date === date &&
               reservation.day === dayValue &&
               reservation.month === month &&
               reservation.year === year
           );
       });
   
       if (reservationsForDate.length === 0) {
           alert('There are no reservations for the selected date.');
           return;
       }
       else{
           reservations = reservations.filter((reservation) => {
               return (
                   reservation.date !== date ||
                   reservation.day !== dayValue ||
                   reservation.month !== month ||
                   reservation.year !== year
               );
           });
       }
        
       handleCalendarDayClick(date , dayValue , month , year);

       console.log('All reservations for the selected date have been deleted : ' , reservations );
       });

       // Modify booking timing 
       function updateReservationTime(oldTime) {
           const activeCalendarDay = document.querySelector('.calendar-day.active');    
           const date = activeCalendarDay.getAttribute('data-date');
           const dayValue = activeCalendarDay.getAttribute('data-day');
           const month = activeCalendarDay.getAttribute('data-month');
           const year = activeCalendarDay.getAttribute('data-year');
       
           const index = reservations.findIndex((reservation) => {
               return (
                   reservation.date === date &&
                   reservation.day === dayValue &&
                   reservation.month === month &&
                   reservation.year === year &&
                   reservation.times.includes(oldTime)
               );
           });

           if (index !== -1) {
               $('#editTimeModal').modal('show');
               submitSaveTimeUpdate(index , oldTime,  date, dayValue, month, year);
           }
           else {
               alert('Reservation not found.');
            } 
       }
       function submitSaveTimeUpdate(index , oldTime , date, dayValue, month, year){
           document.getElementById('saveTimeChanges').addEventListener('click', function (e) {
               var newTimeFromInput = document.getElementById('newTimeFrom').value;
               var newTimeToInput = document.getElementById('newTimeTo').value;
               var numberFromValue = convertTo12Hour(document.getElementById('newTimeFrom').value);
               var numberToValue = convertTo12Hour(document.getElementById('newTimeTo').value);
               const editTimeModal = document.getElementById('editTimeModal');
               e.preventDefault();
               console.log(newTimeFromInput , newTimeToInput);

               if (newTimeFromInput.trim() === '' || newTimeToInput.trim() === '') {
                   alert('Time must be entered');
                   return;
               }
               else{
                   const newTimeFrom = newTimeFromInput;
                   const newTimeTo = newTimeToInput;
                   console.log(numberFromValue , numberToValue);
               
                   // Update booking time in matrix
                   if (index !== -1) {
                       reservations[index].times = reservations[index].times.map((time) => {
                           if (time === oldTime) {
                               return `${numberFromValue} - ${numberToValue}`;
                           }
                           return time;
                       });
               
                       showAlert('Success : ', 'Modified successfully ')
                   }

                   handleCalendarDayClick(date, dayValue, month, year);
                   $('#editTimeModal').modal('hide');
               }           
           });
           
       }
      
    }
    // End Function Code All Function
        monthSelect.addEventListener("change", updateCalendar);
        yearSelect.addEventListener("change", updateCalendar);
        updateCalendar(); 
    });
// <!-- end Code Add Time in Div Select time -->

// ================================================================================
// ================================================================================

// <!-- Start Code increment and decrement in input number Add Meal -->
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="ri-arrow-down-s-fill"></i></div><div class="quantity-button quantity-down"><i class="ri-arrow-up-s-fill"></i></div></div>').insertAfter('.quantity input');
    
    jQuery('.addMeal_sec .quantity').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('.inputTypeNumber'),
        btnDown = spinner.find('.quantity-up i'),
        btnUp = spinner.find('.quantity-down i'),
        min = parseFloat(input.attr('min')) || 0,
        max = parseFloat(input.attr('max')) || Infinity;

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
        return;
        }
        var newVal = oldValue + 1;
        input.val(newVal); 
        input.attr('value', newVal); 
        input.trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
        return;
        }
        var newVal = oldValue - 1;
        input.val(newVal); 
        input.attr('value', newVal); 
        input.trigger("change");
    });

    }); 
// <!-- End Code increment and decrement in input number Add Meal -->


//    <!-- Start Add new Input url when click icon add  -->
    const addUrlFieldButtonModal = document.getElementById('addUrlFieldButtonModal');
    const urlFieldsContainerModal = document.getElementById('urlFields');

    addUrlFieldButtonModal.addEventListener('click', function () {
            const fieldContainer = document.createElement('div');
            fieldContainer.className = 'url-field-container';

            const newUrlField = document.createElement('input');
            newUrlField.type = 'url';
            newUrlField.className = 'form-control';
            newUrlField.name = 'urlVideoMeal';
            newUrlField.placeholder = 'https://www.youtube.com/watch?v=1N6h';
            newUrlField.setAttribute("required", "true");

            const deleteIcon = document.createElement('span'); 
            deleteIcon.innerHTML = '<i class="ri-delete-bin-line deleteIconInputUrl"></i>';
            deleteIcon.className = 'delete-icon';

            deleteIcon.addEventListener('click', function () {
            fieldContainer.remove(); 
            });

            fieldContainer.appendChild(newUrlField); 
            fieldContainer.appendChild(deleteIcon); 

            urlFieldsContainerModal.appendChild(fieldContainer); 
    });
//    <!-- End Add new Input url when click icon add  -->


    