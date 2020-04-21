(function($) {
    Drupal.behaviors.myBehavior = {
        attach: function (context, settings) {

            // Read more link
            var divText = jQuery("#hidetext");
            jQuery("#hidetext").hide();
            jQuery("#disclaimer").append('<a class="readmore" href="javascript:void(0);">Read More</a>');
            var clickToggle = jQuery(".readmore");
            clickToggle.on( "click", function() {
                divText.toggle();
            });

            // OnFocus and OnBlur
            var fName = jQuery("input#tfa_396");
            var lName = jQuery("input#tfa_3");
            var email = jQuery("input#tfa_5");
            var phoneNum = jQuery("input#tfa_693");
            var zipCode = jQuery("input#tfa_2846");

            fName.attr("onfocus", "if(this.value == 'Legal First Name') { this.value = ''; }").attr("onblur", "if(this.value == '') { this.value = 'Legal First Name'; }");
            lName.attr("onfocus", "if(this.value == 'Legal Last Name') { this.value = ''; }").attr("onblur", "if(this.value == '') { this.value = 'Legal Last Name'; }");
            email.attr("onfocus", "if(this.value == 'Email') { this.value = ''; }").attr("onblur", "if(this.value == '') { this.value = 'Email'; }");
            phoneNum.attr("onfocus", "if(this.value == 'Cell Phone') { this.value = ''; }").attr("onblur", "if(this.value == '') { this.value = 'Cell Phone'; }");
            zipCode.attr("onfocus", "if(this.value == 'Zip Code') { this.value = ''; }").attr("onblur", "if(this.value == '') { this.value = 'Zip Code'; }");

            $('select#tfa_315 option:contains("Please select...")').text('Please select...');
            $('select#tfa_2868 option:contains("Please select...")').text('Please select an MBA concentration');
            $('select#tfa_2822 option:contains("Please select...")').text('Please select a Term...');
            $('select#tfa_2829 option:contains("Please select...")').text('Can we text you?');
            $('select#tfa_2829 option:contains("Can we call you?")').text('Can we text you?');
            $('select#tfa_2837 option:contains("Please select...")').text('How are you enrolling?');
            $('select#tfa_2851 option:contains("Please select...")').text('Are you currently a GMercyU student?');
            $('select#tfa_2853 option:contains("Please select...")').text('How did you hear about us?');
            // $('select#tfa_2857 option:contains("Please select...")').text("How did you hear about GMercyU’s programs?");
            $('select#tfa_2879 option:contains("Please select...")').text("How did you hear about GMercyU’s programs?");
            $('select#tfa_2891 option:contains("Please select...")').text("What program(s) are you interested in?");
          }
    };
})(jQuery);
