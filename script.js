$(document).ready(function () {

    // Navbar Scroll Effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Mobile Menu Toggle
    $('.mobile-toggle').click(function () {
        // console.log("Menu clicked");
    });

    // Smooth Scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 500, 'linear');
    });

    // Particles.js Initialization
    particlesJS('particles-js',
        {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#2796cb"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#2796cb",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.6
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }
    );

    // Initiatives Data
    const initiativesData = [
        {
            title: "الصحة الإلكترونية",
            category: "تقنية",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "استراتيجية تخصيص قطاع الصحة (خطة تخصيص)",
            category: "استراتيجية",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "برنامج الضمان الصحي و شراء الخدمات الصحية",
            category: "تمويل",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "تخطيط وتطوير وإدارة القوى العاملة بوزارة الصحة",
            category: "كوادر",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "نموذج الرعاية الصحية الحديثة",
            category: "رعاية",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "التحول المؤسسي لمرافق الرعاية الصحية",
            category: "تحول",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "ضمان توفير معايير السلامة الاساسية في المرافق الصحية وإجراء الاصلاحات الطارئة",
            category: "سلامة",
            image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "المركز الوطني للوقاية من الأمراض ومكافحتها",
            category: "وقاية",
            image: "https://images.unsplash.com/photo-1584036561566-b9354636787e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "إصلاح وإعادة هيكلة خدمات الرعاية الصحية الأولية",
            category: "تطوير",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "مركز الأبحاث الصحي",
            category: "أبحاث",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "تحسين أداء المستشفيات والمراكز الطبية المتخصصة بوزارة الصحة",
            category: "أداء",
            image: "https://images.unsplash.com/photo-1516574187841-693083f69382?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "الإستعداد للطوارئ الصحية",
            category: "طوارئ",
            image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "تحسين أداء مراكز الرعاية الصحية الأولية في وزارة الصحة",
            category: "جودة",
            image: "https://images.unsplash.com/photo-1590611936737-56e61ba69646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "المركز السعودي للمواعيد والإحالات الطبية",
            category: "خدمات",
            image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "المشاركة المجتمعية",
            category: "مجتمع",
            image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "تطوير أقسام العناية المركزة والطوارئ لضمان سرعة وجودة تلك الخدمات",
            category: "عناية",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "استراتيجية المشاركة المجتمعية للترغيب ببعض المهن الصحية",
            category: "توظيف",
            image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "عطاء تدقيق طلبات القطاع الخاص",
            category: "رقابة",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "تأسيس البنية التشريعية والتنظيمية والإعلامية لمراكز ومصانع البلازما",
            category: "تنظيم",
            image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "تحصيل تكلفة التأمين الطبي في مرافق وزارة الصحة",
            category: "مالية",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "المركز السعودي لسلامة المرضى",
            category: "جودة",
            image: "https://images.unsplash.com/photo-1532009324734-20a7a5813719?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "رفع كفاءة خدمات القطاع الصحي في رحلة الحج",
            category: "حج",
            image: "https://images.unsplash.com/photo-1565552629477-e254f3807577?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    // Render Initiatives Function
    const renderInitiatives = () => {
        const swiperWrapper = document.querySelector('.initiatives-swiper .swiper-wrapper');
        swiperWrapper.innerHTML = ''; // Clear existing content

        initiativesData.forEach(initiative => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `
                <div class="initiative-card">
                    <div class="card-image ps-relative">
                        <div class="overlay-gradient"></div>
                        <img src="${initiative.image}" alt="${initiative.title}" class="img-fluid">
                        <span class="category-badge">${initiative.category}</span>
                    </div>
                    <div class="card-content">
                        <p class="fw-bold mb-2">${initiative.title}</p>
                        <a href="#" class="btn-link" data-title="${initiative.title}" data-image="${initiative.image}" data-category="${initiative.category}">
                            اقرأ المزيد <i class="fa-solid fa-arrow-left ms-1"></i>
                        </a>
                    </div>
                </div>
            `;
            swiperWrapper.appendChild(slide);
        });
    };

    // Render the slides
    renderInitiatives();

    // Swiper Initialization
    var swiper = new Swiper(".initiatives-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30,
                centeredSlides: false,
            },
        },
    });

    // Initiative Modal Logic
    const modal = document.getElementById('initiativeModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');

    // We need to use event delegation since slides are dynamic
    const swiperWrapper = document.querySelector('.initiatives-swiper .swiper-wrapper');

    // Function to open modal
    const openModal = (e) => {
        // Check if the clicked element is the read more button or inside it
        const btn = e.target.closest('.btn-link');
        if (!btn) return;

        e.preventDefault();

        const title = btn.getAttribute('data-title');
        const imageSrc = btn.getAttribute('data-image');
        const category = btn.getAttribute('data-category');

        // Populate Modal Data
        modalTitle.textContent = title;
        modalImage.src = imageSrc;
        modalCategory.textContent = category;

        // Generate placeholder description
        modalDescription.textContent = `هذه نبذة مختصرة وتفاصيل حول مبادرة "${title}". تهدف هذه المبادرة إلى تحسين وتطوير الخدمات في هذا القطاع بما يتوافق مع رؤية المملكة 2030.`;

        // Show Modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    // Close Modal Function
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Add Event Listener via Delegation
    if (swiperWrapper) {
        swiperWrapper.addEventListener('click', openModal);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on click outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

});
