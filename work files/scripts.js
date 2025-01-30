$(document).ready(function () {
    // Initialize the Bootstrap Carousel
    $('#conferenceCarousel').carousel({
        interval: 3000, // Change slide every 3 seconds
        pause: 'hover' // Pause on hover
    });

    // Load default section (Home) on page load
    loadSection('home');

    // Handle menu clicks
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        const section = $(this).data('section');
        loadSection(section);
    });

    // Function to load section content
    function loadSection(section) {
        let content = '';

        switch (section) {
            case 'home':
                content = `
                    <!-- Carousel Section -->
                    <section class="carousel slide my-4" data-bs-ride="carousel" id="conferenceCarousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="images/carosel01.jpg" class="d-block w-100" alt="صورة 1">
                            </div>
                            <div class="carousel-item">
                                <img src="images/carosel02.jpg" class="d-block w-100" alt="صورة 2">
                            </div>
                            <div class="carousel-item">
                                <img src="images/carosel03.jpg" class="d-block w-100" alt="صورة 3">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#conferenceCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">السابق</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#conferenceCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">التالي</span>
                        </button>
                    </section>

                    <!-- Location Section -->
                    <section class="my-4">
                        <h2>موقع المؤتمر</h2>
                        <div class="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.123456789012!2d0.1234567890123456!3d36.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA3JzI0LjQiTiAwwrAwNyczNi4wIkU!5e0!3m2!1sen!2sdz!4v1691234567890!5m2!1sen!2sdz"
                                width="100%"
                                height="400"
                                style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </section>
                `;
                break;

            case 'about':
                content = `
                    <h2>ديباجة المؤتمر</h2>
                    <p>إن التحول الرقمي على مستوى المؤسسات التعليمية والجامعية خاصة أصبح السّمة البارزة في عصرنة ورقمنة قطاع التعليم العالي على المستوى المحلي والدولي...</p>
                    <!-- Add the rest of the content from the PDF -->
                `;
                break;

            case 'objectives':
                content = `
                    <h2>أهداف المؤتمر</h2>
                    <ul>
                        <li>الكشف عن جميع الإشكالات المعرفية، البشرية والمادية المرتبطة بتوظيف تكنولوجيا المعلومات والاتصال في مؤسسات التعليم العالي...</li>
                        <!-- Add the rest of the content from the PDF -->
                    </ul>
                `;
                break;

            case 'themes':
                content = `
                    <h2>محاور المؤتمر</h2>
                    <h3>المحور الأول: التمكين الرقمي، المفاهيم المجاورة والأسس النظرية</h3>
                    <ul>
                        <li>التمكين الرقمي والفجوة الرقمية</li>
                        <!-- Add the rest of the content from the PDF -->
                    </ul>
                `;
                break;

            case 'scientific-committee':
                content = `
                    <h2>اللجنة العلمية</h2>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>الاسم واللقب</th>
                                <th>مؤسسة الانتماء</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>د/ محمد طوالبية</td>
                                <td>جامعة غليزان</td>
                            </tr>
                            <!-- Add the rest of the members from the PDF -->
                        </tbody>
                    </table>
                `;
                break;

            case 'organizing-committee':
                content = `
                    <h2>اللجنة التنظيمية</h2>
                    <ul>
                        <li>د/ خديجة شرشار</li>
                        <li>د/ نعيمة بوعريشة</li>
                        <!-- Add the rest of the members from the PDF -->
                    </ul>
                `;
                break;

            case 'participation':
                content = `
                    <h2>شروط وضوابط المشاركة</h2>
                    <ul>
                        <li>أن تكون المداخلة ضمن أحد محاور المؤتمر.</li>
                        <!-- Add the rest of the content from the PDF -->
                    </ul>
                `;
                break;

            case 'dates':
                content = `
                    <h2>مواعيد هامة</h2>
                    <ul>
                        <li>آخر أجل لاستقبال الملخصات يوم 02 مارس 2025.</li>
                        <!-- Add the rest of the content from the PDF -->
                    </ul>
                `;
                break;

            case 'contact':
                content = `
                    <h2>اتصل بنا</h2>
                    <p>للتواصل عبر البريد الإلكتروني: <a href="mailto:digitalemp2@gmail.com">digitalemp2@gmail.com</a></p>
                    <p>للتواصل عبر الواتساب: <a href="https://chat.whatsapp.com/FgtvsGURNchK5wvTYf3opb">انقر هنا</a></p>
                `;
                break;

            default:
                content = `<h1>الصفحة غير موجودة</h1>`;
        }

        $('#main-content').html(content);

        // Reinitialize the carousel after loading new content
        if (section === 'home') {
            $('#conferenceCarousel').carousel({
                interval: 3000,
                pause: 'hover'
            });
        }
    }
});