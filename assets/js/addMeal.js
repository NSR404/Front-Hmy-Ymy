    // Display Block for booking hours for any day in month
    document.addEventListener("DOMContentLoaded", function () {
      const monthSelect = document.getElementById("monthSelect");
      const yearSelect = document.getElementById("yearSelect");
      const calendarDays = document.querySelector(".calendar-days");
      const nameDays = document.querySelectorAll(".nameDays h4");

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

      function updateCalendar() {
        const selectedMonth = monthSelect.value;
        const selectedYear = yearSelect.value;
        const daysCount = daysInMonth[months[selectedMonth]];
    
        calendarDays.innerHTML = "";
    
        for (let day = 1; day <= daysCount; day++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("calendar-day");
            dayElement.classList.add("bookable");
            dayElement.id = "day" + day;
            dayElement.setAttribute('data-date', day);
            dayElement.setAttribute('data-day', getDayName(new Date(selectedYear, selectedMonth, day).getDay()));
            dayElement.setAttribute('data-month', months[selectedMonth]);
            dayElement.setAttribute('data-year', selectedYear);
    
            dayElement.textContent = day;
            calendarDays.appendChild(dayElement);
        }
    }
    

      function getDayName(index) {
          const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
          return dayNames[index];
      }

      monthSelect.addEventListener("change", updateCalendar);
      yearSelect.addEventListener("change", updateCalendar);

      updateCalendar();
  });

  // Display Booking Times in Calendar
  document.addEventListener('DOMContentLoaded', function () {
    const monthSelect = document.getElementById('monthSelect');
    const yearSelect = document.getElementById('yearSelect');
    const calendarDays = document.querySelectorAll('.calendar-day');
    const timesContainer = document.querySelector('.itemsAddTimes');
    
    const reservations = [
        {
            date: '1',
            day: 'sunday',
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
            day: 'monday',
            month: 'January',
            year: '2023',
            times: [
              '02:15 pm - 04:15 pm',
              '05:15 pm - 06:15 pm',
              '08:15 pm - 09:15 pm'
            ],
        },
        {
            date: '1',
            day: 'sunday',
            month: 'January',
            year: '2024',
            times: [
              '04:15 pm - 05:15 pm',
              '06:15 pm - 07:15 pm',
              '08:15 pm - 09:15 pm'
            ],
        },
        {
            date: '2',
            day: 'monday',
            month: 'January',
            year: '2024',
            times: [
              '04:15 pm - 05:15 pm',
              '06:15 pm - 07:15 pm',
              '08:15 pm - 09:15 pm'
            ],
        },
    ];

    calendarDays.forEach((day) => {
        day.addEventListener('click', function () {
            const date = day.getAttribute('data-date');
            const dayValue = day.getAttribute('data-day');
            const month = day.getAttribute('data-month');
            const year = day.getAttribute('data-year');

            selectedDate = {
                date,
                dayValue,
                month,
                year
            };

            console.log(selectedDate.date + "-" + selectedDate.dayValue + "-" + selectedDate.month + "-" + selectedDate.year);

            const reservationsForDate = reservations.find((reservation) => {
                return (
                    reservation.date === selectedDate.date &&
                    reservation.day === selectedDate.dayValue &&
                    reservation.month === selectedDate.month &&
                    reservation.year === selectedDate.year
                );
            });

            timesContainer.innerHTML = '';

            if (reservationsForDate) {
                reservationsForDate.times.forEach((time) => {
                    var timeItem = document.createElement('div');
                    timeItem.className = 'itemTime';
                    var deleteIcon = document.createElement('i');
                    deleteIcon.className = 'ri-close-circle-fill clr_basic h5';
                    var spanFrom = document.createElement('span');
                    spanFrom.textContent = time;
                
                    timesContainer.appendChild(timeItem);
                    timeItem.appendChild(spanFrom);
                    timeItem.appendChild(deleteIcon);
                    deleteIcon.addEventListener('click', function() {
                      const timeItem = this.parentNode;
                      timesContainer.removeChild(timeItem);
                      });
                });

                timesContainer.classList.remove('d-none');
            } else {
              const span = document.createElement('strong');
              span.textContent = 'No reservations for this date';
              timesContainer.appendChild(span);
              timesContainer.classList.remove('d-none');
            }
        });
    });
    

    monthSelect.addEventListener('change', updateSchedule);
    yearSelect.addEventListener('change', updateSchedule);

    function updateSchedule() {
      const selectedMonth = monthSelect.options[monthSelect.selectedIndex].text;
      const selectedYear = yearSelect.value;
  
      reservations = reservations.filter((reservation) => {
          return !(reservation.month === selectedMonth && reservation.year === selectedYear);
      });
  
      const newReservations = [
          {
              date: '1',
              day: 'sunday',
              month: selectedMonth,
              year: selectedYear,
              times: [
                  '7am - 8am',
                  '9am - 10am',
                  '2pm - 3pm'
              ],
          },
      ];
  
      reservations = [...reservations, ...newReservations];
  
      updateCalendar();
  }
  
});


// ================================
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

                  img.classList.remove('d-none');

                  deleteIcon.innerHTML = '<i class="ri-delete-bin-line h4"></i>';
                  deleteIcon.className = 'delete-icon';

                  var imageContainer = document.createElement('div');
                  imageContainer.className = 'col-lg-4 col-md-4 col-sm-6 col-6 px-1';
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


// <!-- Start Code Add Time in Div Select time -->
 
     
     function convertTo12Hour(time) {
    let hour = time.split(':')[0];
    let min = time.split(':')[1];
    let part = hour > 12 ? 'pm' : 'am';
    
    min = (min + '').length == 1 ? `0${min}` : min;
    hour = hour > 12 ? hour - 12 : hour;
    hour = (hour + '').length == 1 ? `0${hour}` : hour;

    return `${hour}:${min} ${part}`;
}

var addedTimes = [];


document.querySelector('.submitAddTime').addEventListener('click', function(event) {
    event.preventDefault();

    var numberFromValue = convertTo12Hour(document.getElementById('numberFrom').value);
    var numberToValue = convertTo12Hour(document.getElementById('numberTo').value);
    var insertNumberFromValue = document.getElementById('numberFrom').value;
    var insertNumberToValue = document.getElementById('numberTo').value;

    
    var itemsAddTimesContainer = document.querySelector('.itemsAddTimes');
    var addedTimesCount = itemsAddTimesContainer.querySelectorAll('.itemTime').length;

    if (addedTimesCount >= 12) {
        alert('You can only add up to 12 times.');
    }

    var existingTimeElements = itemsAddTimesContainer.querySelectorAll('.itemsAddTimes .itemTime');

    existingTimeElements.forEach(function(itemTimeElement) {
        var spanElements = itemTimeElement.querySelectorAll('span');
        var timeText = '';
        spanElements.forEach(function(spanElement) {
            timeText += spanElement.textContent + ' ';
            console.log(timeText);
        });
        addedTimes.push(timeText.trim());
        console.log(timeText.trim());
    });

    if (insertNumberFromValue.trim() === '' || insertNumberToValue.trim() === '') {
        alert('Time must be entered');
        return;
    }

    var newTimeText = numberFromValue + ' ' + numberToValue;
    console.log(newTimeText);
    if (addedTimes.includes(newTimeText)) {
        alert('This time is already added.');
        return;
    }

    var newItemTime = document.createElement('div');
    newItemTime.className = 'itemTime';

    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'ri-close-circle-fill clr_basic h5';

    newItemTime.appendChild(deleteIcon);

    var spanFrom = document.createElement('span');
    spanFrom.textContent = numberFromValue;
    var spanTo = document.createElement('span');
    spanTo.textContent = numberToValue;

    newItemTime.appendChild(spanFrom);
    newItemTime.appendChild(document.createTextNode(' - '));
    newItemTime.appendChild(spanTo);

    itemsAddTimesContainer.appendChild(newItemTime);

    deleteIcon.addEventListener('click', function() {
        itemsAddTimesContainer.removeChild(newItemTime);
    });
});



//   Submit Done
document.addEventListener('DOMContentLoaded', function() {
    // document.querySelector('.DivSubmitDone button[type="submit"]').addEventListener('click', function(event) {
    //     event.preventDefault();
    
    //     var itemTimeElements = document.querySelectorAll('.itemsAddTimes .itemTime');
    //     var itemsTimesContainer = document.querySelector('.itemBookingDays .itemsTimes');
    //     var deleteIconsInDay = document.querySelectorAll('.itemBookingDays .itemsTimes .itemTime');
    
    //     if (itemTimeElements.length > 0) {
    //         itemsTimesContainer.innerHTML = '';
    
    //         itemTimeElements.forEach(function(itemTimeElement) {
    //             itemsTimesContainer.appendChild(itemTimeElement.cloneNode(true));
    //         });
    
    //         var itemBookingDays = document.querySelector('.itemBookingDays');
    //         itemBookingDays.style.setProperty('display', 'block', 'important');
    
    //         var newItemsTimesContainer = document.querySelectorAll('.itemBookingDays .itemsTimes .itemTime');
    
    //         newItemsTimesContainer.forEach(function(item) {
    //             item.classList.add('mb-3');
    //         });


    //         deleteIconsInDay.forEach(function(deleteIcon) {
    //             deleteIcon.addEventListener('click', function() {
    //                   console.log("success");
    //                 var delItemTimeElement = this.closest('.itemTime');
    //                 if (delItemTimeElement) {
    //                     itemsTimesContainer.removeChild(delItemTimeElement);

    //                 }
    //             });
    //         });
    //     } else {
    //         alert('There are no time items to display.');
    //     }
    // });
});


// حذف كل الحجوزات في اليوم 
document.querySelector('.itemTimeDeleteAllTimeDay').addEventListener('click', function(event) {
    event.preventDefault();

    var itemsTimesContainer = document.querySelector('.itemsTimes');
    var itemTimeElementsToRemove = itemsTimesContainer.querySelectorAll('.itemTime');

    itemTimeElementsToRemove.forEach(function(itemTimeElement) {
        itemsTimesContainer.removeChild(itemTimeElement);
    });
});


 
// <!-- end Code Add Time in Div Select time -->

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


    