function startProcess() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "" && password === "") {
        alert("من فضلك أدخل اسم الحساب والباسورد أولاً!");
        return;
    } else if (username === "") {
        alert("من فضلك أدخل اسم الحساب أولاً!");
        return;
    }
        else if (password === "") {
        alert("من فضلك أدخل الباسورد أولاً!");
        return;
    }

    // إخفاء النموذج وإظهار شريط التحميل
    document.getElementById('formBox').style.display = 'none';
    document.getElementById('loadingBox').style.display = 'block';

    let progress = 0;
    const progressFill = document.getElementById('progressFill');
    const statusText = document.getElementById('statusText');

    const interval = setInterval(() => {
        progress += 1;
        progressFill.style.width = progress + '%';

        if (progress === 30) statusText.innerText = "تم العثور على الحساب " + username;
        if (progress === 60) statusText.innerText = "جاري تحضير المتابعين الجدد...";
        if (progress === 85) statusText.innerText = "جاري تأمين الإرسال...";

        if (progress >= 100) {
            clearInterval(interval);
            showSuccess();
        }
    }, 50); // سرعة التحميل
}

function showSuccess() {
    document.getElementById('loadingBox').style.display = 'none';
    document.getElementById('successBox').style.display = 'block';
}