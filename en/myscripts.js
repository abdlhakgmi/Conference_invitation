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
                            <h2 class="mb-3">Laboratory for Social, Psychological, and Anthropological Studies</h2>
                            <h4 class="mb-3">Formative Research Team</h4>
                            <p class="mb-2">Digital citizenship, safe and ethical use of  technological medium in Algeria</p>
                            <p class="fw-bold">Code: I02N01UN480120220001</p>
                            <hr class="divider">
                            <h1 class="conference-title mb-3">Coordinate</h1>
                            <h2 class="fw-bold">The First International Hybrid Scientific Conference</h2>
                            <h3 class="fw-bold text-warning">Digital empowerment mechanism in higher education across the Arab world</h3>
                            <p class="conference-date fs-4 mt-3"> <span class="text-primary">07 may 2025</span></p>
                        </div>
                    </section>

                    <!-- Carousel Section -->
                    <!-- Carousel Section -->
                    <section class="carousel slide my-4 w-100" data-bs-ride="carousel" id="conferenceCarousel">
                        <div class="carousel-inner" id="carousel-inner">
                            <!-- Carousel items will be dynamically inserted here -->
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#conferenceCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#conferenceCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">next</span>
                        </button>
                    </section>


                    <!-- Days Remaining Section -->
                    <section id="days-remaining-section" class="days-remaining text-center py-5">
                        <div class="container">
                            <h2 class="mb-4 text-white section-header">Days remaining until the conference starts</h2>
                            <div class="countdown-card mx-auto p-4">
                                <h1 id="days-count" class="fw-bold display-2">0</h1>
                                <p class="fs-4">Days</p>
                            </div>
                        </div>
                    </section>

                    <!-- Supervisory Board of the Conference Section -->
<section class="my-4 text-center">
    <section class="container my-5">
        <h2 class="text-center mb-4 section-header">Supervisory Board of the Conference</h2>
        <div class="row">
            <!-- Conference Chairman -->
            <div class="col-md-3 col-sm-6">
                <div class="supervisor-card">
                    <!-- Image with data-bs-toggle to trigger the modal -->
                    <img 
                        src="images/BEDANI.jpg" 
                        alt="Dr Amina Naziha BEDANI" 
                        class="supervisor-image" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modal1"
                    >
                    <h5 class="supervisor-title">Conference Chairman</h5>
                    <p class="supervisor-description">Dr Amina Naziha BEDANI <b style="visibility: hidden;">Dr Amina Naziha BEDANI</b></p>
                </div>
            </div>

            <!-- Conference Supervisor -->
            <div class="col-md-3 col-sm-6">
                <div class="supervisor-card">
                    <img 
                        src="images/BAGHDED-BEY.jpg" 
                        alt="Professor Abdelkader BAGHDED-BEY" 
                        class="supervisor-image" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modal2"
                    >
                    <h5 class="supervisor-title">Conference Supervisor</h5>
                    <p class="supervisor-description">Professor Abdelkader BAGHDED-BEY</p>
                </div>
            </div>

            <!-- Head of the Scientific Committee -->
            <div class="col-md-3 col-sm-6">
                <div class="supervisor-card">
                    <img 
                        src="images/BENAMMAR.jpg" 
                        alt="Saida Kheira BENAMMAR" 
                        class="supervisor-image" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modal3"
                    >
                    <h5 class="supervisor-title">Head of the Scientific Committee</h5>
                    <p class="supervisor-description">Saida Kheira BENAMMAR</p>
                </div>
            </div>

            <!-- Head of the Organizing Committee -->
            <div class="col-md-3 col-sm-6">
                <div class="supervisor-card">
                    <img 
                        src="images/SICHI.jpg" 
                        alt="Yousri SICHI" 
                        class="supervisor-image" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modal4"
                    >
                    <h5 class="supervisor-title">Head of the Organizing Committee</h5>
                    <p class="supervisor-description">Yousri SICHI</p>
                </div>
            </div>
        </div>
    </section>
</section>

<!-- Modals for each image -->
<!-- Modal 1 -->
<div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="modal1Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <img 
                    src="https://i.ibb.co/rRBKKc8D/photo-2025-02-01-17-18-26-2.jpg" 
                    alt="Dr Amina Naziha BEDANI" 
                    class="img-fluid"
                >
            </div>
        </div>
    </div>
</div>

<!-- Modal 2 -->
<div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="modal2Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <img 
                    src="https://i.ibb.co/Tqv52NBj/photo-2025-02-01-17-18-30-2.jpg" 
                    alt="Professor Abdelkader BAGHDED-BEY" 
                    class="img-fluid"
                >
            </div>
        </div>
    </div>
</div>

<!-- Modal 3 -->
<div class="modal fade" id="modal3" tabindex="-1" aria-labelledby="modal3Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <img 
                    src="https://i.ibb.co/MxMGsw70/photo-2025-02-01-17-18-14.jpg" 
                    alt="Saida Kheira BENAMMAR" 
                    class="img-fluid"
                >
            </div>
        </div>
    </div>
</div>

<!-- Modal 4 -->
<div class="modal fade" id="modal4" tabindex="-1" aria-labelledby="modal4Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <img 
                    src="https://i.ibb.co/tpwZDMmp/344764433-1263174611243504-2517104134431019421-n.jpg" 
                    alt="Yousri SICHI" 
                    class="img-fluid"
                >
            </div>
        </div>
    </div>
</div>

                    <!-- Members Section -->
                    <section class="members-section my-4 text-center">
                        <div class="container">
                            <h2 class="section-header">Scientific Committee Members</h2>
                            <table class="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th>Name and Surname</th>
                                        <th>Affiliated Institution</th>
                                        <th>Name and Surname</th>
                                        <th>Affiliated Institution</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Add your table rows here -->
                                    <tr>
                                        <td>Prof. Mohamed Toualibia</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. Abdel Karim Ben Aisha</td>
                                        <td>University of Bejaia - Algeria</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Abdallah Hannader</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. Omar Osama</td>
                                        <td>University of Sidi Bel Abbes - Algeria</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Wahiba Becherif</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. Fatima Zahra Touati</td>
                                        <td>University of Algiers 3 - Algeria</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Hanaa Omrani</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. Neriman Mariem Noumar</td>
                                        <td>University of Batna - Algeria</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Nadia Ben Sti</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. Karima Boumediene</td>
                                        <td>University of Khemis Miliana - Algeria</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Sara Kherchi</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. Fatima Zahra Kacimi</td>
                                        <td>University of Algiers 3 - Algeria</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Djamel Boucif</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. Bassam Ahmed Sherif</td>
                                        <td>University of Medea - Algeria</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Zahia Abdelaziz</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. Sara Oushfoun</td>
                                        <td>University of Constantine 3 - Algeria</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Atika Azzedine</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. Amal Kacimi</td>
                                        <td>University of Algiers 3 - Algeria</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Warda Hassain Douadji</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. Nourine Achache</td>
                                        <td>University of Sidi Bel Abbes - Algeria</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Amal Ameur</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. May Abdallah</td>
                                        <td>University of Beirut - Lebanon</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Reem Fatiha Kadouri</td>
                                        <td>University of Relizane - Algeria</td>
                                        <td>Dr. Djamel zran </td>
                                        <td>Institute of Journalism and Media Sciences, University of Manouba - Tunisia</td>
                                    </tr>
                                    <tr>
                                        <td>Prof. Abdelouaheb Ghalem</td>
                                        <td>University of Oran - Algeria</td>
                                        <td>Dr. Wael Ismail Abdelbari</td>
                                        <td>University of Ain Shams - Egypt</td>
                                    </tr>
                                    <tr>
                                        <td>Prof. Mohamed Berekan</td>
                                        <td>University of Oran - Algeria</td>
                                        <td>Dr. Abbas Mustafa Sadiq</td>
                                        <td>International Center for Strategic Studies, Abu Dhabi</td>
                                    </tr>
                                    <tr>
                                        <td>Prof. Bouamama Larbi</td>
                                        <td>University of Mostaganem - Algeria</td>
                                        <td>Dr. Doaa Kamal Mohamed Rizk</td>
                                        <td>Applied Science Private University - Jordan</td>
                                    </tr>
                                    <tr>
                                        <td>Prof. Salima Bouchefra</td>
                                        <td>University of Mostaganem - Algeria</td>
                                        <td>Dr. Chahira Ben Abdullah</td>
                                        <td>Institute of Journalism and Media Sciences, University of Manouba - Tunisia</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Bouabdellah  Benajaimia</td>
                                        <td>University of Mostaganem - Algeria</td>
                                        <td>Dr. Lyamin Boudhane</td>
                                        <td>Qatar University</td>
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
                                            Dr. Khadija Cherchar
                                        </div>
                                    </div>
                                </div>
                                <!-- Add more cards here -->
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            Dr. Naima Bouaricha
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            Dr. Fathi Elkacir
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            Dr. Djamel Bendimia
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            Dr. Fatiha Hattab
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            Dr. Hafida Djellouli 
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            Dr. Houaria Boughari
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 class="section-header">Organizing Committee Members</h2>
                        </div>
                    </section>


                    <!-- PHOTO GALLERY Section 01 -->
                    <section class="my-4 text-center">
                        
                        <!-- Section 1 -->
                        
                        <section class="image-section">
                        <h2 class="section-header"> Photo Gallery </h2>
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
                        <br>

                    </section>


                    <!-- Participation Section -->
                    <section class="participation-conditions my-4 text-center">
                        <div class="container">
                            <h2 class="section-header">Conditions and stipulations for participation:</h2>
                            <ul class="list-group">
                                <!-- Add your list items here -->
                                 <li class="list-group-item">The intervention should correspond with one of the themes of the forum.</li>
                                    <li class="list-group-item">The intervention text has not been previously presented at scientific
                                        conferences or published in any journals.</li>
                                    <li class="list-group-item">The researcher is required to adhere to established scientific standards for the
                                        preparation and composition of scientific research and treatments.</li>
                                    <li class="list-group-item">When composing the research, it is essential to consider linguistic precision and
                                        scientific rigour.</li>
                                    <li class="list-group-item">Interventions may be conducted in Arabic, French, or English. Individual and
                                        dual participation is permitted.</li>
                                    <li class="list-group-item">Focus is directed towards applied and field research.</li>
                                    <li class="list-group-item">The first page of the intervention should include the research title, intervention
                                        theme, researcher's full name, affiliated institution, rank, and email address.</li>
                                    <li class="list-group-item">The research paper should include two summaries, one in Arabic and the other
                                        in English.</li>
                                    <li class="list-group-item">Interventions should utilise Sakkal Majalla font at size 16 for Arabic text, and
                                        Times New Roman font at size 14 for texts in foreign languages.</li>
                                    <li class="list-group-item">The intervention should not surpass 25 pages, including the reference list and
                                        appendices.</li>
                                    <li class="list-group-item">The use of APA style for documentation is required.</li>
                            </ul>
                        </div>
                    </section>

                    
                      
                     <!-- important dates Section -->
                    <div class="important-dates-section">
                        <h2>Important Dates</h2>

                        <div class="important-dates">
                            <div class="card">
                                <h5 class="card-title">Abstract Submission Deadline:</h5>
                                <p class="card-text">25 /02/ 2025</p>
                            </div>
                            <div class="card">
                                <h5 class="card-title">Responding to Accepted Abstract:</h5>
                                <p class="card-text">10/03/2025</p>
                            </div>
                            <div class="card">
                                <h5 class="card-title">Deadline for Full Paper Submissions:</h5>
                                <p class="card-text">20/04/2025</p>
                            </div>
                        </div>

                        <div class="important-dates" style="margin-top: 20px;">
                            <div class="card">
                                <h5 class="card-title">Responding to Accepted Papers:</h5>
                                <p class="card-text">30/04/2025</p>
                            </div>
                            <div class="card">
                                <h5 class="card-title">Conference Date:</h5>
                                <p class="card-text">07 May 2025</p>
                            </div>
                        </div>

                        <!-- Empty div to clear floats -->
                        <div class="important-dates-clear"></div>
                    </div>




                    <!-- conference venue Section -->
                    <section class="py-5 bg-light">
                        <div class="container">
                            <h2 class="mb-4 text-center section-header">
                                <i class="fas fa-map-marker-alt text-danger me-2"></i>
                                Conference Venue
                            </h2>
                            
                            <div class="row g-4 justify-content-center">
                                <!-- In-Person Venue -->
                                <div class="col-md-6">
                                    <div class="d-flex align-items-start bg-white p-4 rounded shadow-sm">
                                        <div class="me-3 text-primary">
                                            <i class="fas fa-university fa-2x"></i>
                                        </div>
                                        <div>
                                            <h4 class="mb-3">In-Person Attendance</h4>
                                            <ul class="list-unstyled">
                                                <li class="mb-2">
                                                    <i class="fas fa-building me-2 text-secondary"></i>
                                                    Grand Lecture Hall
                                                </li>
                                                <li class="mb-2">
                                                    <i class="fas fa-school me-2 text-secondary"></i>
                                                    Ahmed Zabana University
                                                </li>
                                                <li>
                                                    <i class="fas fa-map-pin me-2 text-secondary"></i>
                                                    Relizane, Algeria
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
                                            <h4 class="mb-3">Virtual Attendance</h4>
                                            <p class="mb-2">
                                                <i class="fas fa-video me-2 text-secondary"></i>
                                                Remote participation via
                                            </p>
                                            <div class="d-flex align-items-center">
                                                <i class="fab fa-google me-2 text-primary"></i>
                                                <h5 class="mb-0">Google Meet</h5>
                                            </div>
                                            <div class="mt-3">
                                                <a href="#" class="btn btn-outline-primary btn-sm">
                                                    <i class="fas fa-link me-2"></i>
                                                    Meeting Link (Available Closer to Date)
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
                       <h2>Google Maps Location </h2>
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
                                <h2 class="mb-4">Contact Us</h2>
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
                                            <i class="fab fa-whatsapp fa-lg"></i> • For communication using WhatsApp:
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
                                    <h2 class="mb-4">Methods for contacting the conference organising committee:</h2>
                                    <p class="lead mb-4">
                                       Abstracts must be submitted via the following link:
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
                        <h2 class="section-header">Participation Fees</h2>

                        <!-- Row for Fee Structure and Participation Rights -->
                        <div class="fees-row">
                        <!-- Fee Structure Card -->
                        <div class="fees-card">
                            <h3>Fee Structure</h3>
                            <ul>
                            <li><strong>PhD students:</strong> 3000 DZD for face-to-face participation, 2000 DZD for online participation.</li>
                            <li><strong>Professors and researchers:</strong> 6000 DZD for face-to-face participation, 4000 DZD for online participation.</li>
                            <li><strong>Entities and organizations:</strong> 10,000 DZD for face-to-face participation, 6,000 DZD for online participation.</li>
                            <li><strong>International participants:</strong> 150 euros for face-to-face participation, 100 euros for online participation.</li>
                            <li><strong>Bilateral participation:</strong> The second participant in the ranking is required to remit 50% of the participation fees.</li>
                            </ul>
                        </div>

                        <!-- Participation Rights Card -->
                        <div class="fees-card">
                            <h3>Participation Rights & Additional Info</h3>
                            <ul>
                            <li><strong>Engage with murals:</strong> You may engage with murals that will be shown for discourse and scientific interaction alongside the conference.</li>
                            <li><strong>Participation rights include:</strong> Participation at conference sessions and workshops, lunches, coffee breaks, and access to conference publications, brochures, and leaflets.</li>
                            <li><strong>Conference proceedings:</strong> The conference proceedings will be compiled into a collective volume with international numbering.</li>
                            </ul>
                        </div>
                        </div>
                    </section>

                    <!-- Conference files download Section -->
                    <section class="my-4 text-center">
                        <!-- Contact Us Section -->
                        <section class="contact-us my-5">
                            <div class="container text-center">
                                <h2 class="mb-4 section-header">Conference files</h2>
                                <div class="row d-flex justify-content-between">
                                    <!-- Arabic file -->
                                    <div class="col-md-4 mb-3">
                                        <a href="https://drive.google.com/file/d/1A4Ade6TvrhkVKoRdunBb10U47LDuUGjP/edit?fbclid=IwY2xjawIKKRBleHRuA2FlbQIxMAABHRhMo2b9vaahoSbzS0XYyW1dqrCmotN6uVwh5aEMBgxIxAOEGXyo4ht9tw_aem_rD4hnMP4eTqGaMnCuT9z1w" target="_blank" class=" align-items-center">
                                            <i class="fas fa-file-pdf" style="font-size: 2rem; color: #d9534f; margin-right: 8px;"></i> 
                                            Download Arabic Version
                                        </a>
                                    </div>
                                    <!-- English file -->
                                    <div class="col-md-4 mb-3">
                                        <a href="https://drive.google.com/file/d/1-kg5Z1lX8t89ScqnJQsN2WZqcJ8DqBDt/edit?fbclid=IwY2xjawIKKLpleHRuA2FlbQIxMAABHWYipz-LHJgElOFVk8N4fvNE4P6oD2i9cTPRpps2ZvOW70rpajilr_LOnA_aem_KGG3CxdrBXTZweBV96tP6g" target="_blank" class=" align-items-center">
                                            <i class="fas fa-file-pdf" style="font-size: 2rem; color: #d9534f; margin-right: 8px;"></i> 
                                            Download English Version
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
                    <!-- Conference Preamble Section -->
                    <section class="preamble-section">
                        <div class="container">
                        <h2 class="text-start ">Conference Preamble</h2>
                        
                        <p>
                            Digital transformation within educational institutions has emerged as a defining characteristic of the modernisation and digitisation of the higher education sector, both locally and internationally. This modernisation encompasses a series of transformations across various levels and classifications, involving all stakeholders in the educational and learning process (professor, researcher, teacher, learner, supervisor, student, administrator, etc.), owing to their significant contributions to enhancing the performance, efficiency, and quality of higher education.
                        </p>

                        <p>
                            The application of ICT in education can be delineated at two levels: the first pertains to the professor's utilisation of such technology, which is contingent upon their proficiency in integrating and adopting these tools within the educational framework, in scientific research, and subsequently in establishing a professional online identity. This utilisation varies between professional engagement within and beyond the educational institution.
                        </p>

                        <p>
                            The second stage is exemplified by the university student's utilisation of ICT, integrating its application both within and beyond the department. Achievement of this goal necessitates an initial training process for the individual learner, followed by an assessment of their experiences in this domain, encompassing the capacity to diversify multimedia utilisation in research, work, and activities, as well as proficiency in navigating websites and educational digital platforms. This cannot be accomplished without the requisite material resources (computers, internet access both within and outside the university) that facilitate learners in engaging in this form of practice.
                        </p>

                        <p>
                            It appears that the precise scientific disciplines are the most rapid to embrace the professional and personal uses of ICT in the educational process, in comparison to the social and human sciences, which appear to be more sluggish when it comes to integrating ICT into universities. Because other scientific fields, like mathematics, have had to quickly embrace specialised software to help them do their jobs, this has happened. Numerous research have demonstrated that social studies instructors make less use of NTIC than academics from other fields, as pointed out by Zhao and Bryant (2006).
                        </p>

                        <p>
                            In the contemporary era, digital features are no longer confined to a particular scientific discipline, particularly following the development of specialised scientific models across diverse domains such as digital sociology, digital humanities, virtual reality, virtual public space, artificial intelligence, and digital journalism. These fields necessitate specific digital software applications for data collection and analysis, enabling theoretical and methodological exploration of these digital environments.
                        </p>

                        <p>
                            The necessity for digital empowerment has emerged as essential in these domains, particularly due to the rapid advancement of educational digitisation in these specialisations. This encompasses not only the utilisation of multimedia in education and the incorporation of the Internet into academic research for students and faculty but also the imperative to establish online training and teaching environments, as evidenced by Western universities.
                        </p>

                        <blockquote>
                            Digital empowerment pertains to the capacity to utilise new information and communication technologies (NTIC) in educational processes and their associated activities, executed safely, responsibly, and with high proficiency and effectiveness.
                        </blockquote>

                        <p>
                            Digital empowerment seeks to provide individuals with the skills to utilise NTIC in the educational process, hence fostering national capabilities for the creation of digital educational content. This is accomplished by developing specialised programs for digital empowerment across all higher education institutions, facilitating the incorporation of technology into the educational process, including Microsoft Office 365, technical support, and the safe and ethical use of technology, as well as Microsoft Education. The integration and adoption of NTIC in higher education institutions is no longer optional; it has become an essential requirement, particularly due to the recent global health crisis that necessitated a shift towards digital education tools.
                        </p>

                        </div>
                    </section>
                `;
                break;

            case 'objectives':
                content = `
                    <!-- Conference Objectives Section -->
                    <section class="objectives-section">
                        <div class="container">
                        <h2 section-header>Conference Objectives</h2>

                        <ul class="objectives-list">
                            <li>Identifying all cognitive, human, and material obstacles associated with the use of ICT in higher education institutions by focussing on: training challenges, utilisation and employment issues, and adoption concerns...</li>
                            <li>Evaluating the use of information and communication technology inside university institutions in the Arab world across communication, research, and instructional dimensions:
                            <ul class="nested-list">
                                <li>Under the communication level: encompassing all human elements inside the university institution, including administrators, students, faculty, and supervisors.</li>
                                <li>Within the research level: regarding the university professor-researcher and the extent of their utilisation of NTIC in scientific research, from the initial phase to the prospective formation of an online professional identity, acknowledging the critical significance of this criterion in assessing the quality of scientific research within a nation.</li>
                            </ul>
                            </li>
                            <li>Investigate the utilization of new information and communication technologies (NTIC) in education across all scientific disciplines, with a particular focus on the humanities and social sciences.</li>
                            <li>Identifying the instruments and initiatives of digital empowerment in higher education within the Arab globe.</li>
                            <li>Disclosing the prerequisites for digital empowerment in the education of all scientific disciplines, with a particular emphasis on the humanities and social sciences.</li>
                            <li>Investigating the barriers that hinder the development of digital empowerment initiatives and projects in higher education.</li>
                        </ul>

                        </div>
                    </section>
                `;
                break;

            case 'themes':
                content = `
                    <!-- Conference Topics Section -->
                    <section class="topics-section">
                        <div class="container">
                        <h2 section-header>Conference Topics</h2>

                        <ul class="topic-list">
                            <li>
                            <span class="topic-title">Topic One: Digital Empowerment, Associated Concepts and Theoretical Foundations</span>
                            <ul class="nested-list">
                                <li>Digital Empowerment and Digital Divide</li>
                                <li>Digital Empowerment and Digital Bias</li>
                                <li>Digital Empowerment and Digital Inclusion</li>
                                <li>Digital Empowerment and Digital Accessibility</li>
                            </ul>
                            </li>
                            <li>
                            <span class="topic-title">Topic Two: Digital Empowerment in Higher Education and Research Institutions</span>
                            <ul class="nested-list">
                                <li>Domains of Digital Empowerment in:
                                <ul>
                                    <li>Publishing and Scientific Research</li>
                                    <li>Higher Education</li>
                                    <li>Academic Communication</li>
                                    <li>Learning among University Students</li>
                                </ul>
                                </li>
                                <li>The Issue of Accessibility to Digital Empowerment Resources among Arab Universities:
                                <ul>
                                    <li>Cognitive, Skill, and Technical Prerequisites</li>
                                    <li>Financial and Economic Prerequisites</li>
                                </ul>
                                </li>
                                <li>Establishing the Regulatory and Technical Framework to Attain Digital Empowerment in Arab Universities</li>
                                <li>Teaching and Learning Strategies for the Integration of ICT into Academic and Professional Contexts</li>
                            </ul>
                            </li>
                            <li>
                            <span class="topic-title">Topic Three: Impediments and Obstacles to Attaining Digital Empowerment Initiatives in Higher Education and Scientific Research</span>
                            <ul class="nested-list">
                                <li>Concerns about Digital Empowerment's Security and Ethical Considerations</li>
                                <li>Financial and Economic Obstacles to Attain Digital Empowerment Criteria</li>
                                <li>Linguistic and Cultural Obstacles to the Execution of Digital Empowerment Initiatives</li>
                            </ul>
                            </li>
                            <li>
                            <span class="topic-title">Topic Four: Digital Empowerment Initiatives in the Arab World: Experiences and Perspectives</span>
                            <ul class="nested-list">
                                <li>"Digital Empowerment" Experiences at Higher Education Institutions in the Arab World Across Scientific, Humanities, and Social Disciplines</li>
                                <li>Showcasing the Experience of Humanities and Social Sciences Disciplines in Arab Universities</li>
                            </ul>
                            </li>
                            <li>
                            <span class="topic-title">Topic Five: Digital Empowerment and Artificial Intelligence</span>
                            </li>
                        </ul>

                        </div>
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