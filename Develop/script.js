// this function displays today's date
$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

// time blocks background colors change based on the time of day
blockColor = () => {
	const hour = moment().hours();

	$(".time-block").each(function () {
		var currentHour = parseInt($(this).attr("id"));

		if (currentHour < hour) {
			$(this).addClass("past");
		} else if (currentHour === hour) {
			$(this).addClass("present");
		} else {
			$(this).addClass("future");
		}
	});
};

const saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
	const time = $(this).siblings(".hour").text();
	const activity = $(this).siblings(".activity").val();

	localStorage.setItem(time, activity);
});

// This funtions allows activities to be saved after a page refresh
saveActivity = () => {
  $(".hour").each(function() {
    var currentHour = $(this).text()
    var currentActivity = localStorage.getItem(currentHour)

    if(currentActivity !== null) {
      $(this).siblings(".activity").val(currentActivity);
    }
  })
}

blockColor();
saveActivity();