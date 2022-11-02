
let details = navigator.userAgent;


let regexp = /android|iphone|kindle|ipad/i;//it is used for matching the text with pattern.

let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
    document.write("You are using a Mobile Device");
}
else {
    document.write("You are using Desktop");
}