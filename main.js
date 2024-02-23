document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('myForm');

    if (contactForm) { 
        contactForm.addEventListener('submit', function (event) {
            // Sayfanın yeniden yüklenmesini engelle
            event.preventDefault();

           
            var formData = new FormData(contactForm);
            var mailBody = '';

          
            formData.forEach(function (value, key) {
                mailBody += key + ': ' + value + '\n';
            });

            // Buraya e-posta gönderme işlemi için kullanılabilecek olan API veya sunucu 

        
            console.log(mailBody);

            // Kullanıcıya formun başarıyla gönderildiğine dair bir bildirim göster
            alert('Form başarıyla gönderildi!');

            // Formu sıfırla
            contactForm.reset();
        });
    } else {
        console.error('Form elementi bulunamadı!');
    }
});