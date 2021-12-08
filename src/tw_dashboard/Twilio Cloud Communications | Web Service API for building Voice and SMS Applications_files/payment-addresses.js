var twilio = twilio || {};

twilio.paymentAddress = {
	modalSelector: '@payment-address-modal',
	verifiedAddressForm: '#verifiedAddress',
	originalAddressForm: '#originalAddress',

	init: function() {
		var $addressModal = $(twilio.paymentAddress.modalSelector);
		$addressModal.on('hide.bs.modal', function() {
			window.location.reload();
		});
	},

	/**
	 * Handle server response when validating payment address
	 * @param data
	 */
	processValidationResponseCallback: function(data) {
		var $addressModal = $(twilio.paymentAddress.modalSelector);

		if (data.error || data.fatal) {
			var $alertContainer = $addressModal.find('.modal-body');
			var errMsg = (data.error) ? data.error : data.fatal;

			twilio.alert.new('danger', errMsg, $alertContainer, {
				'clear': true,
				'method': 'prepend',
				'dismissible': false,
				'fatal': data.fatal ? true : false
			});
			$alertContainer.closest('.modal').modal('refresh');
		} else {
			$addressModal.modal('push', $(data.html));

			$('@use-verified-address').on('click', function () {
				twilio.paymentAddress.useAddressHandler(twilio.paymentAddress.verifiedAddressForm);
			});
			$('@use-original-address').on('click', function () {
				twilio.paymentAddress.useAddressHandler(twilio.paymentAddress.originalAddressForm);
			});
		}
	},

	/**
	 * Submit form data to create new payment address
	 * @param addressForm
	 */
	useAddressHandler: function(addressForm) {
		var $this = $(this);
		$this.button('loading');

		$.ajax({
			type: 'POST',
			url: '/console/billing/payment-addresses',
			data: $(addressForm).serialize()
		}).done(function(data) {
			$this.button('reset');
			twilio.paymentAddress.processSaveResponseCallback(data);
		});
	},

	/**
	 * Handle server response when saving payment address
	 * @param data
	 */
	processSaveResponseCallback: function(data) {
		var $addressModal = $(twilio.paymentAddress.modalSelector);

		if (data.error || data.fatal) {
			var $alertContainer = $addressModal.find('.modal-body');
			var errMsg = (data.error) ? data.error : data.fatal;

			twilio.alert.new('danger', errMsg, $alertContainer[1], {
				'clear': true,
				'method': 'prepend',
				'dismissible': false,
				'fatal': data.fatal ? true : false
			});
			$alertContainer.closest('.modal').modal('refresh');
		} else {
			window.location.reload();
		}
	}

};

$(function() {
	twilio.paymentAddress.init();
});
