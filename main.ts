radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.No)
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(50)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
