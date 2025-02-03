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

    // jQuery animations for hover effect
    $('.organizing-committee .card').hover(function () {
        $(this).css('transform', 'scale(1.05)');
    }, function () {
        $(this).css('transform', 'scale(1)');
    });

    // Countdown function
    function updateCountdown() {
        const eventDate = new Date("2025-05-07"); // Event Start Date
        const today = new Date();
        const timeDiff = eventDate - today;
        const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days

        if (daysRemaining <= 0) {
            $("#days-remaining-section").hide(); // Hide section when event starts
        } else {
            $("#days-count").text(daysRemaining);
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000); // Update every second

    // Function to load section content
    function loadSection(section) {
        let content = '';

        switch (section) {
            case 'home':
                content = `
                    <!-- Conference Introduction Section -->
                    <section class="conference-intro text-center text-white py-5">
                        <div class="container">
                            <h2 class="mb-3">مخبر الدراسات الاجتماعية والنفسية والأنثروبولوجية LESPA</h2>
                            <h4 class="mb-3">فرقة البحث التكويني PRFU</h4>
                            <p class="mb-2">المواطنة الرقمية والاستخدام الآمن والأخلاقي للوسائط التكنولوجية في الجزائر</p>
                            <p class="fw-bold">رمز: I02N01UN480120220001</p>
                            <hr class="divider">
                            <h1 class="conference-title mb-3">تنظم</h1>
                            <h2 class="fw-bold">المؤتمر العلمي الدولي الهجين الأول</h2>
                            <h3 class="fw-bold text-warning">آليات التمكين الرقمي في التعليم الجامعي بالعالم العربي</h3>
                            <p class="conference-date fs-4 mt-3"> <span class="text-primary">يوم 7 ماي 2025</span></p>
                        </div>
                    </section>

                    <!-- Carousel Section -->
                    <section class="carousel slide my-4 w-100" data-bs-ride="carousel" id="conferenceCarousel">
                        <div class="carousel-inner" id="carousel-inner">
                            <!-- Carousel items will be dynamically inserted here -->
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

                    <!-- Days Remaining Section -->
                    <section id="days-remaining-section" class="days-remaining text-center py-5">
                        <div class="container">
                            <h2 class="mb-4 text-white">الأيام المتبقية حتى انطلاق المؤتمر</h2>
                            <div class="countdown-card mx-auto p-4">
                                <h1 id="days-count" class="fw-bold display-2">0</h1>
                                <p class="fs-4">يوم</p>
                            </div>
                        </div>
                    </section>


                     <!-- Supervisory Board of the Conference Section -->
                    <section class="my-4 text-center">
                         <section class="container my-5">
                            <h2 class="text-center mb-4">هيئــة الإشــراف علـى المؤتمـر:</h2>
                            <div class="row">
                            <!-- Conference Chairman -->
                            <div class="col-md-3 col-sm-6">
                                <div class="supervisor-card">
                                <img src="https://i.ibb.co/rRBKKc8D/photo-2025-02-01-17-18-26-2.jpg" alt="د/أمينة نزيهة بداني" class="supervisor-image">
                                <h5 class="supervisor-title">رئيس المؤتمر</h5>
                                <p class="supervisor-description">د/أمينة نزيهة بداني </p>
                                </div>
                            </div>

                            <!-- Conference Supervisor -->
                            <div class="col-md-3 col-sm-6">
                                <div class="supervisor-card">
                                <img src="https://i.ibb.co/Tqv52NBj/photo-2025-02-01-17-18-30-2.jpg" alt="Professor Abdelkader BAGHDED-BEY" class="supervisor-image">
                                <h5 class="supervisor-title">المشرف العام على المؤتمر</h5>
                                <p class="supervisor-description">أد/ عبد القادر بغداد باي </p>
                                </div>
                            </div>

                            <!-- Head of the Scientific Committee -->
                            <div class="col-md-3 col-sm-6">
                                <div class="supervisor-card">
                                <img src="https://i.ibb.co/MxMGsw70/photo-2025-02-01-17-18-14.jpg" alt="Saida Kheira BENAMMAR" class="supervisor-image">
                                <h5 class="supervisor-title">رئيس اللّجنة العلمية</h5>
                                <p class="supervisor-description">د/ سعيدة خيرة بن عمار </p>
                                </div>
                            </div>

                            <!-- Head of the Organizing Committee -->
                            <div class="col-md-3 col-sm-6">
                                <div class="supervisor-card">
                                <img src="https://i.ibb.co/tpwZDMmp/344764433-1263174611243504-2517104134431019421-n.jpg" alt="Yousri SICHI" class="supervisor-image">
                                <h5 class="supervisor-title">رئيس اللّجنة التنظيمية</h5>
                                <p class="supervisor-description">د/ يسري صيشي </p>
                                </div>
                            </div>
                            </div>
                        </section>
                    </section>



                    <!-- Members Section -->
                    <section class="members-section my-4 text-center">
                        <div class="container">
                            <h2>اعضاء اللجنة العلمية</h2>
                            <table class="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th>الإسم واللقب</th>
                                        <th>مؤسسة الإنتماء</th>
                                        <th>الإسم واللقب</th>
                                        <th>مؤسسة الإنتماء</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Add your table rows here -->
                                    <tr>
                                            <td>أد/محمد طوالبية</td>
                                            <td>جامعة غليزان- الجزائر</td>
                                            <td>د/عبد الكريم بن عيشة</td>
                                            <td>جامعة بجاية-الجزائر</td>
                                        </tr>
                                        <tr>
                                            <td>د/ عبد الله حنادر</td>
                                            <td>جامعة غليزان-الجزائر</td>
                                            <td>د/عمر أوسامة</td>
                                            <td>جامعة سيدي بلعباس-الجزائر</td>
                                        </tr>
                                        <tr>
                                            <td>د/ وهيبة بشريف</td>
                                            <td>جامعة غليزان-الجزائر</td>
                                            <td>د/فاطمة الزهرة تواتي</td>
                                            <td>جامعة الجزائر 3-الجزائر</td>
                                        </tr>
                                        <tr>
                                            <td>د/ هناء عمراني</td>
                                            <td>جامعة غليزان-الجزائر</td>
                                            <td>د/نريمان مريم نومار</td>
                                            <td>جامعة باتنة-الجزائر</td>
                                        </tr>
                                        <tr>
                                            <td>د/نادية بن ستي</td>
                                            <td>جامعة غليزان-الجزائر</td>
                                            <td>د/كريمة بومدين</td>
                                            <td>جامعة خميس مليانة-الجزائر</td>
                                        </tr>
                                        <tr>
                                            <td>د/سارة خرشي</td>
                                            <td>جامعة غليزان-الجزائر</td>
                                            <td>د/فاطمة الزهراء قاسيمي</td>
                                            <td>جامعة الجزائر 3-الجزائر</td>
                                        </tr>
                                        <tr>
                                            <td>د/جمال بوسيف</td>
                                            <td>جامعة غليزان-الجزائر</td>
                                            <td>د/بسام أحمد الشريف</td>
                                            <td>جامعة المدية-الجزائر</td>
                                        </tr>
                                        <tr>
                                            <td>د/زهية عبد العزيز</td>
                                            <td>جامعة غليزان-الجزائر</td>
                                            <td>د/سارة أوشفون</td>
                                            <td>جامعة قسنطينة3-الجزائر</td>
                                        </tr>
                                        <tr>
                                            <td>د/عتيقة عز الدين</td>
                                            <td>جامعة غليزان-الجزائر</td>
                                            <td>د/آمال قاسيمي</td>
                                            <td>جامعة الجزائر3-الجزائر</td>
                                        </tr>
                                        <tr>
                                            <td>د/وردة حساين دواجي</td>
                                            <td>جامعة غليزان-الجزائر</td>
                                            <td>د/نورين عشاش</td>
                                            <td>جامعة سيدي بلعباس-الجزائر</td>
                                        </tr>
                                        <tr>
                                            <td>د/أمال عامر</td>
                                            <td>جامعة غليزان-الجزائر</td>
                                            <td>د/مي عبد الله</td>
                                            <td>جامعة بيروت-لبنان</td>
                                        </tr>
                                        <tr>
                                            <td>د/ريم فتيحة قدوري</td>
                                            <td>جامعة غليزان-الجزائر</td>
                                            <td>د/جمال الزرن</td>
                                            <td>معهد الصحافة وعلوم الأخبار-جامعة منوبة تونس</td>
                                        </tr>
                                        <tr>
                                            <td>أد/عبد الوهاب غالم</td>
                                            <td>جامعة وهران-الجزائر</td>
                                            <td>د/وائل إسماعيل عبد الباري</td>
                                            <td>جامعة عين شمس-مصر</td>
                                        </tr>
                                        <tr>
                                            <td>أد/محمد برقان</td>
                                            <td>جامعة وهران-الجزائر</td>
                                            <td>د/عباس مصطفى صادق</td>
                                            <td>المركز الدولي للدراسات الإستراتيجية في أبوظبي</td>
                                        </tr>
                                        <tr>
                                            <td>أد/بوعمامة العربي</td>
                                            <td>جامعة مستغانم-الجزائر</td>
                                            <td>د/دعاء كمال محمد رزق</td>
                                            <td>جامعة العلوم التطبيقية الخاصة-الأردن</td>
                                        </tr>
                                        <tr>
                                            <td>أد/سليمة بوشفرة</td>
                                            <td>جامعة مستغانم-الجزائر</td>
                                            <td>د/شهيرة بن عبد الله</td>
                                            <td>معهد الصحافة وعلوم الأخبار-جامعة منوبة تونس</td>
                                        </tr>
                                        <tr>
                                            <td>د/بوعبد الله بن عجمية</td>
                                            <td>جامعة مستغانم-الجزائر</td>
                                            <td>د/يامين بودهان</td>
                                            <td>جامعة قطر</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>


                    <!-- Organizing Committee Section -->
                    
                    <section class="organizing-committee my-4 text-center">
                    
                        <div class="container">
                            
                            <div class="row">
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            د/خديجة شرشار
                                        </div>
                                    </div>
                                </div>
                                <!-- Add more cards here -->
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            د/نعيمة بوعريشة
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            د/فتحي لقصير
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            د/جمال بن ديمية
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            د/فتيحة حطاب
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            د/حفيظة جلولي
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            د/هوارية بوغاري
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2>أعضاء اللجنة التنظيمية</h2>
                        </div>
                    </section>

                    <!-- PHOTO GALLERY Section 01 -->
                    <section class="my-4 text-center">
                        
                        <!-- Section 1 -->
                        
                        <section class="image-section">
                        <h2> معرض الصور</h2>
                            <br>
                            <div class="container">
                                <div class="row g-4 justify-content-center">
                                    <!-- Card 1 -->
                                    <div class="col-md-4">
                                        <div class="card custom-card">
                                            <div class="card-bg" style="background-image: url('images/group-img01.jpg');"></div>
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card 2 -->
                                    <div class="col-md-4">
                                        <div class="card custom-card">
                                            <div class="card-bg" style="background-image: url('images/group-img02.jpg');"></div>
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card 3 -->
                                    <div class="col-md-4">
                                        <div class="card custom-card">
                                            <div class="card-bg" style="background-image: url('images/group-img03.jpg');"></div>
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <!-- Section 2 -->
                        <section class="image-section">
                            <div class="container">
                                <div class="row g-4 justify-content-center">
                                    <!-- Card 4 -->
                                    <div class="col-md-4">
                                        <div class="card custom-card">
                                            <div class="card-bg" style="background-image: url('images/group-img04.jpg');"></div>
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card 5 -->
                                    <div class="col-md-4">
                                        <div class="card custom-card">
                                            <div class="card-bg" style="background-image: url('images/group-img05.jpg');"></div>
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card 6 -->
                                    <div class="col-md-4">
                                        <div class="card custom-card">
                                            <div class="card-bg" style="background-image: url('images/group-img06.jpg');"></div>
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                    </section>


                    <!-- Participation Section -->
                    <section class="participation-conditions my-4 text-center">
                        <div class="container">
                            <h2>شروط وضوابط المشاركة</h2>
                            <ul class="list-group">
                                <!-- Add your list items here -->
                                 <li class="list-group-item">أن تكون المداخلة ضمن أحد محاور المؤتمر.</li>
                                    <li class="list-group-item">أن لم يسبق نشر أو تقديم المداخلة في ملتقيات أو فعاليات سابقة.</li>
                                    <li class="list-group-item">أن يلتزم الباحث بالشروط العلمية المتعارف عليها في إعداد وكتابة البحوث والمداخلات العلمية.</li>
                                    <li class="list-group-item">يجب مراعاة الدقة اللّغوية والأمانة العلمية عند كتابة البحث.</li>
                                    <li class="list-group-item">تُقبل المداخلات بإحدى اللّغات العربية، الفرنسية أو الإنجليزية.</li>
                                    <li class="list-group-item">تقبل المشاركات الفردية والثنائية فقط.</li>
                                    <li class="list-group-item">تعطى الأولية للدراسات التطبيقية والميدانية.</li>
                                    <li class="list-group-item">يجب أن تتضمن الصفحة الأولى من المداخلة عنوان البحث، محور المداخلة، اسم ولقب الباحث، مؤسسة الانتماء، الرتبة، البريد الإلكتروني.</li>
                                    <li class="list-group-item">ترفق الورقة البحثية بملخصين أحدهما باللّغة العربية والآخر باللغة الإنجليزية.</li>
                                    <li class="list-group-item">تكتب المداخلات بخط Sakkal Majalla حجم 16 للغة العربية، وخط Times New Roman حجم 14 للغات الأجنبية.</li>
                                    <li class="list-group-item">أن لا يتجاوز عدد صفحات المداخلة 25 صفحة بما في ذلك قائمة المراجع والملاحق.</li>
                                    <li class="list-group-item">يتم إعتماد طريقة APA في توثيق المداخلة.</li>
                                    <li class="list-group-item">تخضع الملخصات والبحوث للتقييم من قيل اللجنة العلمية للملتقى.</li>
                            </ul>
                        </div>
                    </section>


                    <div class="important-dates-section">
                        <h2>مواعيد هامة: </h2>

                        <div class="important-dates">
                            <div class="card">
                                <h5 class="card-title">آخر أجل لاستقبال الملخصات</h5>
                                <p class="card-text">يوم 25 فيفري 2025 </p>
                            </div>
                            <div class="card">
                                <h5 class="card-title">	الرد على الملخصات المقبولة </h5>
                                <p class="card-text">يوم 10 مارس 2025</p>
                            </div>
                            <div class="card">
                                <h5 class="card-title">	آخر أجل لإرسال المداخلات كاملة </h5>
                                <p class="card-text">يوم 20 أفريل 2025</p>
                            </div>
                        </div>

                        <div class="important-dates" style="margin-top: 20px;">
                            <div class="card">
                                <h5 class="card-title">يتم الرد على المداخلات المقبولة </h5>
                                <p class="card-text">يوم 30 افريل 2025</p>
                            </div>
                            <div class="card">
                                <h5 class="card-title">	يعقد المؤتمر يوم </h5>
                                <p class="card-text">يوم 07 ماي 2025</p>
                            </div>
                        </div>

                        <!-- Empty div to clear floats -->
                        <div class="important-dates-clear"></div>
                    </div>



                    <!-- conference venue Section -->
                    <section class="py-5 bg-light">
                        <div class="container">
                            <h2 class="mb-4 text-center">
                                <i class="fas fa-map-marker-alt text-danger me-2"></i>
                                مكان إنعقاد المؤتمر:
                            </h2>
                            
                            <div class="row g-4 justify-content-center">
                                <!-- In-Person Venue -->
                                <div class="col-md-6">
                                    <div class="d-flex align-items-start bg-white p-4 rounded shadow-sm">
                                        <div class="me-3 text-primary">
                                            <i class="fas fa-university fa-2x"></i>
                                        </div>
                                        <div>
                                            <h4 class="mb-3">	يعقد المؤتمر حضوريا </h4>
                                            <ul class="list-unstyled">
                                                <li class="mb-2">
                                                    <i class="fas fa-building me-2 text-secondary"></i>
                                                    بقاعة المحاضرات الكبرى
                                                </li>
                                                <li class="mb-2">
                                                    <i class="fas fa-school me-2 text-secondary"></i>
                                                   جامعة أحمد زبانة 
                                                </li>
                                                <li>
                                                    <i class="fas fa-map-pin me-2 text-secondary"></i>
                                                    غليزان- الجزائر
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <!-- Virtual Venue -->
                                <div class="col-md-6">
                                    <div class="d-flex align-items-start bg-white p-4 rounded shadow-sm">
                                        <div class="me-3 text-danger">
                                            <i class="fab fa-google fa-2x"></i>
                                        </div>
                                        <div>
                                            <h4 class="mb-3">وعبر تقنية التحاضر عن بعد</h4>
                                            <p class="mb-2">
                                                <i class="fas fa-video me-2 text-secondary"></i>
                                                عبر
                                            </p>
                                            <div class="d-flex align-items-center">
                                                <i class="fab fa-google me-2 text-primary"></i>
                                                <h5 class="mb-0">Google Meet</h5>
                                            </div>
                                            <div class="mt-3">
                                                <a href="#" class="btn btn-outline-primary btn-sm">
                                                    <i class="fas fa-link me-2"></i>
                                                    رابط الاجتماع (متاح عند إقتراب الموعد)
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <!-- conference venue on maps Section -->
                    <section class="my-4 text-center">
                        <h2>إحداثيات جوجل مابس </h2>
                        <div class="d-flex justify-content-center">
                            <div class="map-container" style="width: 80%;">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8292.474210203774!2d0.5766355739308361!3d35.70702531072404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sdz!4v1738234385353!5m2!1sfr!2sdz" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </section>


                    
                    <!-- contact Section -->
                    <section class="my-4 text-center">
                        <!-- Contact Us Section -->
                        <section class="contact-us my-5">
                            <div class="container text-center">
                                <h2 class="mb-4">آليات التواصل مع الهيئة المنظمة للمؤتمر:</h2>
                                <div class="row justify-content-center">
                                    <!-- Email -->
                                    <div class="col-md-4 mb-3">
                                        <a href="mailto:digitalemp2@gmail.com" class="btn btn-outline-primary w-100">
                                            <i class="fas fa-envelope fa-lg"></i> digitalemp2@gmail.com
                                        </a>
                                    </div>
                                    <!-- WhatsApp -->
                                    <div class="col-md-4 mb-3">
                                        <a href="https://wa.me/+213541925504" class="btn btn-outline-success w-100" target="_blank">
                                            <i class="fab fa-whatsapp fa-lg"></i> للتواصل عبر الواتساب
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </section>

                    <!-- Registration Section -->
                    <section class="registration-section py-5 bg-light">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h2 class="mb-4">صفحة المشاركة في المؤتمر</h2>
                                    <p class="lead mb-4">
                                      ملاحظة: ترسل الملخصات حصرا عبر استمارة التسجيل التالية:
                                    </p>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdG9jOwJMY1H5EvXpDYCqTSH2p49fDLEXHrBgqDp7eRcLIhPg/viewform?pli=1" 
                                       class="btn btn-primary btn-lg" 
                                       target="_blank">
                                       Go to the registration form
                                    </a>
                                </div>
                              
                                <div class="col-md-4 text-center">
                                    <li class="mb-3"><a href="https://forms.gle/eThMfQxKfTdNgJZt5" class="text-decoration-none text-white link-info">https://forms.gle/eThMfQxKfTdNgJZt5</a></li>
                                    <img src="images/code-qr.jpg" alt="QR Code" class="img-fluid" style="max-width: 200px;">
                                    <p class="mt-2"></p>
                                </div>
                            </div>
                        </div>
                    </section>

                    
                    <!-- Participation Fees Section -->
                    <section class="participation-fees-section">
                        <h2></h2>

                        <!-- Row for Fee Structure and Participation Rights -->
                        <div class="fees-row">
                        <!-- Fee Structure Card -->
                        <div class="fees-card">
                            <h3>رسوم المشاركة:  </h3>
                            <ul>
                            <li><طلبة الدكتوراه: 3000 دج حضوريا، 2000 دج عن بعد.</li>
                            <li>الأساتذة الباحثون:  6000دج  حضوريا، 4000 دج عن بعد.</li>
                            <li>الهيئات والمؤسسات :   10000دج حضوريا، 6000دج عن بعد.</li>
                            <li>المشاركون الأجانب: 150 أورو حضوريا، 100 أورو عن بعد.</li>
                            <li><في حالة المشاركات الثنائية، يدفع المشارك الثاني في الترتيب نصف حقوق المشاركة 50%. </li>
                            </ul>
                        </div>

                        <!-- Participation Rights Card -->
                        <div class="fees-card">
                            <h3>ملاحظات:</h3>
                            <ul>
                            <li>يمكن المشاركة بجداريات تعرض للنقاش والتفاعل العلمي على هامش المؤتمر.</li>
                            <li>تشمل حقوق المشاركة: حضور جلسات وورشات المؤتمر، وجبات الغداء، استراحة القهوة، منشورات ومطويات المؤتمر.</li>
                            <li>تنشر أعمال المؤتمر في كتاب جماعي ذو ترقيم دولي.  </li>
                            </ul>
                        </div>
                        </div>
                    </section>

                     <!-- Conference files download Section -->
                    <section class="my-4 text-center">
                        <!-- Contact Us Section -->
                        <section class="contact-us my-5">
                            <div class="container text-center">
                                <h2 class="mb-4 section-header"> تحميل الملفات</h2>
                                <div class="row d-flex justify-content-between">
                                    <!-- Arabic file -->
                                    <div class="col-md-4 mb-3">
                                        <a href="https://drive.google.com/file/d/1A4Ade6TvrhkVKoRdunBb10U47LDuUGjP/edit?fbclid=IwY2xjawIKKRBleHRuA2FlbQIxMAABHRhMo2b9vaahoSbzS0XYyW1dqrCmotN6uVwh5aEMBgxIxAOEGXyo4ht9tw_aem_rD4hnMP4eTqGaMnCuT9z1w" target="_blank" class=" align-items-center">
                                            <i class="fas fa-file-pdf" style="font-size: 2rem; color: #d9534f; margin-right: 8px;"></i> 
                                            تحميل النسخة العربية
                                        </a>
                                    </div>
                                    <!-- English file -->
                                    <div class="col-md-4 mb-3">
                                        <a href="https://drive.google.com/file/d/1-kg5Z1lX8t89ScqnJQsN2WZqcJ8DqBDt/edit?fbclid=IwY2xjawIKKLpleHRuA2FlbQIxMAABHWYipz-LHJgElOFVk8N4fvNE4P6oD2i9cTPRpps2ZvOW70rpajilr_LOnA_aem_KGG3CxdrBXTZweBV96tP6g" target="_blank" class=" align-items-center">
                                            <i class="fas fa-file-pdf" style="font-size: 2rem; color: #d9534f; margin-right: 8px;"></i> 
                                           تحميل النسخة الإنجليزية
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </section>


                `;
                break;

            case 'about':
                content = `
                    <section class="text-center">
                        <section class="container">
                            <div class="intro-card bg-white p-4 p-md-5 mb-2">
                                <h2 class="display-6 text-primary mb-4 border-bottom pb-3 text-end">ديباجة المؤتمر</h2>
                                
                                <div class="conference-intro fs-5 lh-base bg-light">
                                    
                                    <p class="mb-4">إن التحول الرقمي على مستوى المؤسسات التعليمية والجامعية خاصة أصبح السّمة البارزة في عصرنة ورقمنة قطاع التعليم العالي على المستوى المحلي والدولي حيث تشمل هذه العصرنة مجموعة من التحولات على عدة مستويات وتصنيفات لا تخُصُّ جهة معينة فقط بل تجمع كل الجهات والعناصر المُساهمة في العملية التعليمية والتعلُّمية (أستاذ، باحث، مُعلم، مُتعلم، مؤطر، مشرف، طالب، إداري...الخ) لما لها من دور فعّال في تحسين أداء وكفاءة وجودة التعليم العالي.</p>
                                    
                                    <p class="mb-4">حيث يمكن تحديد مجالات توظيف تكنولوجيا المعلومات والاتصال في العملية التعليمية من خلال المستويين؛ يتمثل الأول في استخدام تكنولوجيا المعلومات والاتصال لدى الأستاذ وذلك يتوقف على مدى كفاءته في توظيف وتبني استخدام تكنولوجيا المعلومات والاتصال في العملية التعليمية، في البحث العلمي ولاحقا في خلق هوية مهنية على الويب، ويتراوح هذا الاستخدام بين الاستخدام المهني داخل وخارج المؤسسة التعليمية.</p>
                                    
                                    <p class="mb-4">أما المستوى الثاني فيتمثل في استخدام تكنولوجيا المعلومات والاتصال لدى الطالب الجامعي أيضا عن طريق المزاوجة في توظيفها داخل وخارج القسم وهذا لا يمكن أن يكون دون المرور بعملية تكوينية للفرد المُتعلم أولاً ومن ثم تقييم خبراته في هذا المجال، انطلاقا من القدرة على تنويع استخدام الوسائط المتعددة في بحوثه وأعماله ونشاطاته إلى القدرة على التعامل مع المواقع الالكترونية والمنصات الرقمية التعليمية. وهذا لا يمكن تحقيقه دون التوفر على إمكانيات مادية (حاسوب، انترنت داخل وخارج الجامعة) تخول للمُتعلمين هذا النوع من الممارسات.</p>
                                    
                                    <p class="mb-4">إن تسريع عملية ادماج تكنولوجيا المعلومات والاتصال في الجامعة له علاقة أيضا بالتخصصات العلمية حيث تبدو التخصصات العلمية الدقيقة الأكثر سرعة في تبني الاستخدامات المهنية والشخصية لتكنولوجيات المعلومات والاتصال في العملية التعليمية مقارنة بالتخصصات الاجتماعية والإنسانية التي تبدو أبطأ، يعود هذا إلى سرعة تطور العلوم الأخرى (مثل الرياضيات) وذلك بسبب حاجتها إلى اعتماد برمجيات مُتخصصة تسهل عليها عملها.</p>
                                    
                                    <p class="mb-4">في العصر الحالي لم تعد تنحصر هذه الميّزات الرقمية في مجال علمي معين خاصة بعدما خلقت التطبيقات الرقمية نماذج علمية تخصصية في مجالات مختلفة مثل: علم الاجتماع الرقمي، الإنسانيات الرقمية، الواقع الإفتراضي، الفضاء العمومي الإفتراضي، الذكاء الاصطناعي، الصحافة الإلكترونية.....الخ وما تتطلبه هذه المجالات من استخدامات برمجية رقمية من أجل جمع وتحليل البيانات والتمكن من دراسة هذه البيئات الرقمية نظريا ومنهجياً.</p>
                                    
                                    <p class="mb-4">فالحاجة إلى التمكين الرقمي أصبحت ضرورية في هذه المجالات خاصة في ظل التسارع التي أصبحت تشهده رقمنة التعليم في هذه التخصصات ليس فقط من خلال استخدام الوسائط المتعددة في التعليم، أو ادماج الانترنت في البحث العلمي لدى الطالب والأستاذ وإنما أيضا على مستوى الحاجة إلى خلق بيئات للتدريب والتدريس أونلاين كما تشهده الجامعات الغربية.</p>
                                    
                                    <p class="mb-4">يُعنى بالتمكين الرقمي، القدرة على توظيف NTIC في العملية التعليمية والتعلمية والعمليات المساندة لها وذات الصلة بها، توظيفاً آمنا ومسؤولا بمهارة وكفاءة عالية.</p>
                                    
                                    <p class="mb-4">يستهدف التمكين الرقمي تدريب الأفراد لإكسابهم القدرة على توظيف NTIC في العملية التعليمية والتعلمية من أجل بناء الكفاءات الوطنية القادرة على انتاج المحتوى التعليمي الرقمي.</p>
                                    
                                    <p class="mb-4">ذلك بخلق برامج خاصة بالتمكين الرقمي في جميع مؤسسات التعليم الجامعي من خلال توفير دمج التقنية في العملية التعليمية مثل: ميكروسوفت أوفيس 365، الإرشاد التقني، الاستعمال الآمن والأخلاقي للتكنولوجيا، ميكروفوست Education.</p>
                                    
                                    <p class="mb-4">حيث لم تعد الحاجة إلى ادماج وتبني NTIC في مؤسسات التعليم الجامعي خيارا متاحاَ لها بل أصبح ضرورة حتمية خاصة في ظل التوجه الإجباري نحو اعتماد تطبيقات التعليم الرقمي في السنوات الأخيرة بفعل الأزمة الصحيّة التي شهدها العالم وما فرضته من حاجة مُلّحة إلى التوجه نحو أدوات التعليم الرقمي كحتمية ظرفية.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                `;
                break;

            case 'objectives':
                content = `
                    <section class="my-4 text-center">
                        <section class="container">
                            <div class="intro-card bg-white p-4 p-md-5 mb-2">
                                <h2 class="display-6 text-primary mb-4 border-bottom pb-3 text-end">أهداف المؤتمر </h2>
                                
                                <div class="conference-intro fs-5 lh-base bg-light">
                                    <ul>
                                        <li> الكشف عن جميع الإشكالات المعرفية، البشرية والمادية المرتبطة بتوظيف NTIC في مؤسسات التعليم العالي وذلك من خلال التركيز على: إشكالات التكوين، إشكالات الاستخدام والتوظيف، إشكالات التبني...</li><br>
                                        <li> التعرف على واقع استخدام تكنولوجيا المعلومات والاتصال في المؤسسات الجامعية على المستوى الاتصالي، البحثي، التعليمي بالعالم العربي:</li><br>
                                        <ul>
                                            <li>على المستوى الاتصالي: بين جميع العناصر البشرية المُشكلة لنسق المؤسسة الجامعية، إداريون، طلبة، أساتذة ومُشرفين.</li><br>
                                            <li>على المستوى البحثي: بالنسبة للأستاذ الجامعي الباحث ومدى استخدامه لـNTIC في البحث العلمي من نقطة بدءه وصولاً إلى إمكانية خلق هوية مهنية على الويب لما لهذا المعيار من أهمية بالغة في قياس جودة البحث العلمي في دولة ما.</li><br>
                                        </ul>
                                        <li> البحث في مجالات توظيف NTIC في تعليمية جميع الميادين العلمية وميدان العلوم الإنسانية والاجتماعية خاصة.</li><br>
                                        <li> التعرف على أدوات وبرامج التمكين الرقمي في التعليم الجامعي في الوطن العربي.</li><br>
                                        <li> الكشف عن متطلبات التمكين الرقمي في تعليمية جميع الميادين العلمية وميدان العلوم الإنسانية والاجتماعية خاصة.</li><br>
                                        <li> البحث في العوائق التي تحُّدُ من خلق برامج ومشاريع التمكين الرقمي في التعليم الجامعي.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </section>
                `;
                break;

            case 'themes':
                content = `
                    <section class="my-4 d-flex justify-content-end ">
                        <section class="container ">
                            <div class="intro-card bg-white p-4 p-md-5 mb-2 ">
                                <h2 class="display-6 text-primary mb-4 border-bottom pb-3 text-end">محاور المؤتمر</h2>
                                
                                <div class="conference-intro conference-topics fs-5 lh-base bg-light">
                                    
                                   <h2>المحور الأول: التمكين الرقمي، المفاهيم المجاورة  والأسس النظرية</h2>
                                    <ul>
                                        <li>التمكين الرقمي والفجوة الرقمية Digital Divide</li>
                                        <li>التمكين الرقمي والتحيُّز الرقمي Digital Bias</li>
                                        <li>التمكين الرقمي والشمول الرقمي Digital Inclusion</li>
                                        <li>التمكين الرقمي والنّفاذ الرقمي Digital Accessibility</li>
                                    </ul>

                                    <h2>المحور الثاني: التمكين الرقمي في مؤسسات التعليم العالي والبحث العلمي</h2>
                                    <ul>
                                        <li>مجالات التمكين الرقمي في:
                                            <ul>
                                                <li>النشر والبحث العلمي، التعليم العالي، التواصل الأكاديمي، التَعَّلُم لدى الطلبة الجامعيين</li>
                                            </ul>
                                        </li>
                                        <li>اشكالية توفُّر مُتطلبات التمكين الرقمي في الجامعات العربية:
                                            <ul>
                                                <li>المُتطلبات المعرفية، المهارية والتقنية</li>
                                                <li>المتطلبات المالية والإقتصادية</li>
                                            </ul>
                                        </li>
                                        <li>تهيئة البيئة التنظيمية والتقنية لتحقيق التمكين الرقمي في الجامعات العربية</li>
                                        <li>آليات التدريب والتَدَّرُب على استخدام تكنولوجيا المعلومات والاتصال في البحث والتعليم</li>
                                    </ul>

                                    <h2>المحور الثالث: رهانات وتحديات تحقيق برامج التمكين الرقمي في التعليم العالي والبحث العلمي</h2>
                                    <ul>
                                        <li>التحديات الأمنية والأخلاقية للتمكين الرقمي</li>
                                        <li>التحديات المالية والاقتصادية لتحقيق متطلبات التمكين الرقمي</li>
                                        <li>التحديات اللغوية والثقافية لتنفيذ برامج التمكين الرقمي</li>
                                    </ul>

                                    <h2>المحور الرابع: برامج التمكين الرقمي في الوطن العربي تجارب ورؤى</h2>
                                    <ul>
                                        <li>تجارب "التمكين الرقمي" في مؤسسات التعليم العالي بالوطن العربي بين التخصصات العلمية والتخصصات الإنسانية والاجتماعية</li>
                                        <li>عرض تجربة التخصصات الإنسانية والاجتماعية بالجامعات العربية</li>
                                    </ul>

                                    <h2>المحور الخامس: التمكين الرقمي والذكاء الاصطناعي</h2>
                                    
                                </div>
                            </div>
                        </section>
                    </section>
                `;
                break;

            default:
                content = `
                    <section class="my-4 text-center">
                        <h1>الصفحة غير موجودة</h1>
                    </section>
                `;
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