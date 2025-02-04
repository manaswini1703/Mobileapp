function sendOTP() {
    const mobile = document.getElementById('mobile').value;
    if (mobile) {
        // Simulate sending OTP
        alert('OTP sent to ' + mobile);
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('otp-form').style.display = 'block';
    } else {
        alert('Please enter a valid mobile number');
    }
}

function verifyOTP() {
    const otp = document.getElementById('otp').value;
    if (otp) {
        // Simulate OTP verification
        alert('OTP verified successfully');
    } else {
        alert('Please enter the OTP');
    }
}