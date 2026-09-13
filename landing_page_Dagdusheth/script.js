/* =====================================================
   PUJA TABS
===================================================== */

const pujaTabs = document.querySelectorAll(".puja-tab");
const pujaPanels = document.querySelectorAll(".puja-panel");


/* =====================================================
   FUNCTION: OPEN PUJA TAB
===================================================== */

function openPujaTab(tabName) {

    const selectedTab =
        document.querySelector(
            `.puja-tab[data-tab="${tabName}"]`
        );

    const selectedPanel =
        document.getElementById(
            tabName + "-panel"
        );


    /* If tab does not exist, stop */

    if (!selectedTab || !selectedPanel) {
        return;
    }


    /* Remove active from all tabs */

    pujaTabs.forEach(tab => {
        tab.classList.remove("active");
    });


    /* Activate selected tab */

    selectedTab.classList.add("active");


    /* Hide all panels */

    pujaPanels.forEach(panel => {
        panel.classList.remove("active");
    });


    /* Show selected panel */

    selectedPanel.classList.add("active");


    /* Scroll to PUJA DETAILS section */

    const pujaDetails =
        document.getElementById("puja-details");

    if (pujaDetails) {

        pujaDetails.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =====================================================
   DIRECT PUJA TAB BUTTONS
===================================================== */

pujaTabs.forEach(tab => {

    tab.addEventListener("click", function () {

        const selectedTab =
            this.getAttribute("data-tab");

        openPujaTab(selectedTab);

    });

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


/* Open / close mobile menu */

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}


/* =====================================================
   DESKTOP + MOBILE MENU LINKS
===================================================== */

const allMenuLinks =
    document.querySelectorAll(
        ".nav-links a, .mobile-menu a"
    );


allMenuLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();


        const menuTab =
            this.getAttribute("data-menu-tab");


        /* ================================================
           HOME
        ================================================ */

        if (menuTab === "home") {

            const homeSection =
                document.getElementById("home");

            if (homeSection) {

                homeSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }


            /* Close mobile menu */

            if (mobileMenu) {
                mobileMenu.classList.remove("active");
            }

            return;
        }


        /* ================================================
           GALLERY
        ================================================ */

        if (menuTab === "gallery") {

            const gallerySection =
                document.getElementById("gallery");

            if (gallerySection) {

                gallerySection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }


            /* Close mobile menu */

            if (mobileMenu) {
                mobileMenu.classList.remove("active");
            }

            return;
        }


        /* ================================================
           ABOUT / SERVICE
        ================================================ */

        if (menuTab) {

            openPujaTab(menuTab);

        }


        /* Close mobile menu */

        if (mobileMenu) {
            mobileMenu.classList.remove("active");
        }

    });

});


/* =====================================================
   SELECT PUJA PACKAGE BUTTON
===================================================== */

const selectPujaBtn =
    document.getElementById("selectPujaBtn");


if (selectPujaBtn) {

    selectPujaBtn.addEventListener("click", () => {

        /* Open Service / Packages tab */

        openPujaTab("packages");


        /* Scroll specifically to puja details */

        const pujaDetails =
            document.getElementById("puja-details");

        if (pujaDetails) {

            pujaDetails.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}