var errorClass = 'has-error';
var validClass = 'no-error';
var country = $('select[name$=Country]');
var zipSelector = $('input[name=shippingZip]');

if (validator_data.hasOwnProperty('enable_ca_statecode_validation')) {

    country
            .change(function () {

                FwUtils.log('Country changed');
                var c_code = $(this).val();
                
                if($(this).attr('name') == 'billingCountry')
                {
                    zipSelector = $('input[name=billingZip]');
                    country = $('select[name=billingCountry]');
                }
                else{
                    zipSelector = $('input[name=shippingZip]');
                    country = $('select[name=shippingCountry]');
                }
                if(c_code)
                {
                	var c_code_mask = validator_data[c_code.toLowerCase() + '_state_code_mask'];
	                if (c_code_mask) {
	                    $(zipSelector).mask(validator_data[c_code.toLowerCase() + '_state_code_mask']);
	                } else {
	                    $(zipSelector).unmask();
	                }
                }
               
            });


    $('input[name$=Zip]').blur(function () {
        if($(this).val() == '')
        {
            return;
        }
        var curAttr = $(this).attr('name');
        $('[name='+curAttr+']').removeAttr('data-ignore');
        var prefix = curAttr.replace(/Zip$/, '');
        if ($('[name='+prefix+'Country]').val() == 'CA' && validator_data.enable_ca_statecode_validation) {
            var pattern = new RegExp(validator_data.ca_state_code_regex); 
            if (pattern.test($(this).val())) {
                $('[name='+curAttr+']')
                        .removeClass(errorClass)
                        .addClass(validClass);
                $('[name='+curAttr+']').removeClass('required');
            } else {
                $('[name='+curAttr+']')
                        .removeClass(validClass)
                        .addClass(errorClass);
                $('[name='+curAttr+']').addClass('required');
                $('[name='+curAttr+']').attr('data-ignore', true);
            }
        } else {
            FwUtils.log('Cleaning up classes, CA is not selected')
        }      
        
    });

}