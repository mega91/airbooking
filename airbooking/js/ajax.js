$(function() {
	$.ajax({
		url: 'js/selectbox.json',
		success: function (res) {
			let dayIn     = $('#dayin'),
				dayOut    = $('#dayout'),
				mounthIn  = $('#checkin'),
				mounthOut = $('#checkout'),
				guests    = $('#guest');
			let selectboxdata = res[0];
			let {day,mounth,guest} = selectboxdata;
			for (var i = 0; i < day.length; i++) {
				dayIn.append(`
					<option value="${day[i]}">${day[i]}</option>
				`);
				dayOut.append(`
					<option value="${day[i]}">${day[i]}</option>
				`);
			}
			for (var i = 0; i < mounth.length; i++) {
				mounthIn.append(`
					<option value="${mounth[i]}">${mounth[i]}</option>
				`);
				mounthOut.append(`
					<option value="${mounth[i]}">${mounth[i]}</option>
				`);
			}
			for (var i = 0; i < guest.length; i++) {
				guests.append(`
					<option value="${guest[i]}">${guest[i]}</option>
				`);
			}
			let	dayInOption     = $('#dayin option'),
				dayOutOption    = $('#dayout option'),
				mounthInOption  = $('#checkin option'),
				mounthOutOption = $('#checkout option'),
				guestOption     = $('#guest option');
			dayInOption.eq(15).attr('selected', 'selected');
			dayOutOption.eq(25).attr('selected', 'selected');
			mounthInOption.eq(5).attr('selected', 'selected');
			mounthOutOption.eq(5).attr('selected', 'selected');
			guestOption.eq(2).attr('selected', 'selected');
		},
		error: function (error) {
			alert('error')
		}
	});

	$('form.date').submit(function(e) {
	e.preventDefault();
		$.ajax({
			url: 'js/visitor.json',
			success: function(data) {
				let visitor = data;
				console.log(visitor);
				let check = {dayIn : $('#dayin').val(),mounthIn: $('#checkin').val(),dayOut : $('#dayout').val(),mounthOut: $('#checkout').val()};
				console.log(check);
				    
				let index = data.findIndex(x => x.dayIn === check.dayIn && x.dayOut === check.dayOut && x.mounthIn === check.mounthIn && x.mounthOut === check.mounthOut);
				if (index == -1) {
					$('header .modal-body').html(`this is avilable <a href="#">Go To Sign Page</a>`);
				}else{
					$('header .modal-body').text('sorry this is not avilable');	
				}
			},
			error: function(error) {
				console.log(`error ${error}`);
			}
		});
	});
	
});
