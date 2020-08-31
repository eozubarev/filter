function checkFormErrors(form_ID,link)
{
	var arInput = [];
	var valid = true;
	var tel_valid = true;
	var tel_inp = null;

	$('#'+form_ID+' .input_required').each(function(i){
		var inp=$(this);
		if(inp.prop('class').match(/phone/))
		{
			if((inp.prop('value')==inp.prop('placeholder')))
			{
				inp.addClass('error');
				valid=false;
			}
			else
			{
				if(inp.val().replace(/\D/g,'').length<11)
				{
					inp.addClass('error');
					valid=false;
				}
				else
				{
					inp.removeClass('error');
					if(inp.prop('value')[4] == '8' || inp.prop('value')[4] == '7')
					{
						tel_inp = inp;
						//inp.addClass('error');
						tel_valid=false;
					}
				}
			}
		} else {
			if(inp.prop('class').match(/email/))
			{
				eTest="^[_\\.0-9a-z-]+@([0-9a-z][0-9a-z_-]+\\.)+[a-z]{2,4}$";
				var regexb=new RegExp(eTest);
				if(regexb.test(inp.prop('value')))
				{
					inp.removeClass('error');
				}
				else
				{
					inp.addClass('error');
					valid=false;
				}
			}
			else
			{
				if((inp.prop('value')=='')||(inp.prop('value')==inp.prop('placeholder')))
				{
					inp.addClass('error');
					valid=false;
				}
				else
				{
					inp.removeClass('error');
				}
			}
		}
	});

	if(valid==true)
	{
		if(tel_valid)
			send_form(form_ID);
		else{
			swal({
				title: "",
				text: "Ваш номер: " + tel_inp.prop('value') + ", верно?",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Да, отправить!",
				cancelButtonText: "Нет, исправить!",
				closeOnConfirm: true,
				closeOnCancel: true
			},
			function(isConfirm){
				if (isConfirm) {
					send_form(form_ID);
				}
			});
		}
		return true;
	}
	return false;
}

function send_form(form_ID)
{
	$.ajax({
		url:'/libs/post.php',
		data:new FormData($('#'+form_ID)[0]),
		type:"POST",
		contentType:false,
		processData:false,
		cache:false,
	}).done(function(html){
		if(html!=''){
			if($('#'+form_ID).closest('.modal-body').length>0){
				$('#'+form_ID).closest('.modal-dialog').addClass('answer');
				$('#'+form_ID).html($('#'+form_ID+' .text_hidden').html());
				var date=new Date();
				var hours=date.getHours();
				var day=date.getDay();
				console.log(hours+'/'+day);
				if((hours<8||hours>18)&&(day==0||day==6))
					$('.worktime-text').hide();
				else
					$('.unworktime-text').hide();
			}
			else
			{
				// $('#'+form_ID).html('');
                $('#'+form_ID).html($('#'+form_ID+' .text_hidden').html());
                $('#'+form_ID).parents(".c-section-feedback__form").addClass("form-after-send");
				// $('#modal-answer').modal('show');
			}
		}
		else
		{
			$('#'+form_ID).html('<p class="error">Произошла ошибка отправки заявки! Попробуйте отправить заявку через некоторое время!</p>');
		}
	});
}