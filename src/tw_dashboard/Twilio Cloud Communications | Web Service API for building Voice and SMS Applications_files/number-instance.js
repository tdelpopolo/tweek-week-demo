$(function(){$("#ApplicationSid").siblings(".selectize-control").on("click",function(){twilio.analytics.event("num-config-voice-app")}),$("#SmsApplicationSid").siblings(".selectize-control").on("click",function(){twilio.analytics.event("num-config-sms-app")});var e=$("body"),n=".voice-form",i=".messaging-form";e.on("change","@voice-configuration-select",function(){var e=$(this),i="#voice-"+e.val()+"-form";$(n).addClass("hidden"),$(i).removeClass("hidden")}),e.on("change","@messaging-configuration-select",function(){var e=$(this),n="#messaging-"+e.val()+"-form";$(i).addClass("hidden"),$(n).removeClass("hidden")}),$("@handler-selector").selectize({onDropdownClose:function(e){var n=e.parents("@handler-wrapper");switch(e.find(".selected").text().toLowerCase()){case"twiml":n.find("@webhook-form").addClass("hidden"),n.find("@function-wrapper").addClass("hidden"),n.find("@twiml-wrapper").removeClass("hidden");break;case"webhook":n.find("@twiml-wrapper").addClass("hidden"),n.find("@function-wrapper").addClass("hidden"),n.find("@webhook-form").removeClass("hidden");break;case"function":n.find("@twiml-wrapper").addClass("hidden"),n.find("@webhook-form").addClass("hidden"),n.find("@function-wrapper").removeClass("hidden")}n.closest("form").trigger("content-changed")}}),$("@voice-capability-selector").selectize({onChange:function(e){var n=$("#voice-url-form"),i=$("#caller-name-lookup");switch(e){case"voice":n.find(".voice-url-call").removeClass("hidden").siblings("label").addClass("hidden"),i.removeClass("hidden");break;case"fax":n.find(".voice-url-fax").removeClass("hidden").siblings("label").addClass("hidden"),i.addClass("hidden")}n.closest("form").trigger("content-changed")}});var a=$("#new-twiml-modal");e.on("change","@twiml-wrapper select",function(e){"create"==e.target.value&&(a.modal("show"),e.preventDefault())}),$(document).on("click","@e911-single-disable",function(e){var n=$("@e911-single-disable"),i=n.attr("data-sid");n.button("loading");var a="/console/phone-numbers/e911/disable";$.post(a,{numberSid:i}).always(function(){window.location.reload(!0)})}),$(document).on("click","@e911-remove-address",function(e){var n=$("@e911-remove-address"),i=n.attr("data-sid");n.button("loading");var a="/console/phone-numbers/e911/remove-address";$.post(a,{numberSid:i}).always(function(){window.location.reload(!0)})})});
//# sourceMappingURL=number-instance.js.map