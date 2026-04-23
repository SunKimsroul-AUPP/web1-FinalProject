const temples = [
  {
    id: 1,
    name: "Angkor Wat",
    khmerName: "អង្គរវត្ត",
    period: "Classical",
    year: "1113-1150",
    description:
      "The largest religious monument in the world, originally a Hindu temple dedicated to Vishnu, later transformed into a Buddhist temple.",
    religion: "Hindu / Buddhist",
    location: "Angkor",
  },
  {
    id: 2,
    name: "Bayon",
    khmerName: "បាយ័ន",
    period: "Classical",
    year: "Late 12th century",
    description:
      "Known for its massive stone faces, this state temple features 216 serene smiling faces carved into 54 towers.",
    religion: "Buddhist",
    location: "Angkor Thom",
  },
  {
    id: 3,
    name: "Ta Prohm",
    khmerName: "តាព្រហ្ម",
    period: "Classical",
    year: "1186",
    description:
      "Famous for the massive tree roots intertwined with ancient stonework, left largely in its natural state.",
    religion: "Buddhist",
    location: "Angkor",
  },
  {
    id: 4,
    name: "Banteay Srei",
    khmerName: "បន្ទាយស្រី",
    period: "Classical",
    year: "967",
    description:
      "The Citadel of Women renowned for its intricate pink sandstone carvings and miniature scale.",
    religion: "Hindu",
    location: "Angkor",
  },
  {
    id: 5,
    name: "Preah Vihear",
    khmerName: "ប្រាសាទព្រះវិហារ",
    period: "Classical",
    year: "9th-12th century",
    description:
      "A mountaintop temple perched on a cliff in the Dangrek Mountains with spectacular views of Cambodia.",
    religion: "Hindu",
    location: "Preah Vihear",
  },
  {
    id: 6,
    name: "Beng Mealea",
    khmerName: "បឹងមាលា",
    period: "Classical",
    year: "12th century",
    description:
      "A sprawling temple complex largely consumed by jungle, offering an Indiana Jones-like exploration experience.",
    religion: "Hindu",
    location: "Angkor",
  },
  {
    id: 7,
    name: "Banteay Chhmar",
    khmerName: "បន្ទាយឆ្មារ",
    period: "Classical",
    year: "Late 12th century",
    description:
      "One of the largest and most mysterious temples featuring multi-armed Avalokiteshvara bas-reliefs.",
    religion: "Buddhist",
    location: "Banteay Meanchey",
  },
  {
    id: 8,
    name: "Koh Ker",
    khmerName: "កោះកេរ្តិ៍",
    period: "Classical",
    year: "928-944",
    description:
      "A remote capital featuring the unique seven-tiered Prasat Thom pyramid rising 36 meters high.",
    religion: "Hindu",
    location: "Preah Vihear",
  },
  {
    id: 9,
    name: "Phnom Bakheng",
    khmerName: "ភ្នំបាខែង",
    period: "Classical",
    year: "Late 9th century",
    description:
      "A hilltop temple offering panoramic sunset views over Angkor Wat and the surrounding plains.",
    religion: "Hindu",
    location: "Angkor",
  },
  {
    id: 10,
    name: "Pre Rup",
    khmerName: "ប្រែរូប",
    period: "Classical",
    year: "961",
    description:
      "A massive temple mountain dedicated to Shiva, believed to have been used for royal cremation ceremonies.",
    religion: "Hindu",
    location: "Angkor",
  },
  {
    id: 11,
    name: "Neak Pean",
    khmerName: "នាគព័ន្ធ",
    period: "Classical",
    year: "Late 12th century",
    description:
      "A small Buddhist temple on an artificial island in the middle of the Jayatataka baray.",
    religion: "Buddhist",
    location: "Angkor",
  },
  {
    id: 12,
    name: "Banteay Prei",
    khmerName: "បន្ទាយព្រៃ",
    period: "Classical",
    year: "Late 12th – Early 13th century",
    description:
      "A small, quiet Buddhist temple from the late 12th to early 13th century, built during the reign of King Jayavarman VII and dedicated to Mahayana Buddhism",
    religion: "Buddhism",
    location: "Angkor",
  },
  {
    id: 13,
    name: "Chau Say Tevoda",
    khmerName: "ចៅសាយទេវតា",
    period: "Classical",
    year: "Mid 12th century",
    description:
      "A charming temple facing Thommanon, dedicated to Shiva and Vishnu with refined decorative lintels.",
    religion: "Hindu",
    location: "Angkor",
  },
  {
    id: 14,
    name: "Banteay Samre",
    khmerName: "ប្រាសាទបន្ទាយសំរែ",
    period: "Classical",
    year: "Early 12th century",
    description:
      "A well-preserved, single towered temple named after the ancient Samré people. It was restored in the 1930s and is considered a classic example of the Angkor Wat architectural style.",
    religion: "Hinduism",
    location: "Angkor",
  },
  {
    id: 15,
    name: "Banteay Kdei",
    khmerName: "បន្ទាយក្តី",
    period: "Classical",
    year: "Late 12th century",
    description:
      "A Buddhist monastery with elaborately decorated galleries and halls of dancing apsaras.",
    religion: "Buddhist",
    location: "Angkor",
  },
  {
    id: 16,
    name: "Preah Khan",
    khmerName: "ព្រះខ័ន",
    period: "Classical",
    year: "1191",
    description:
      "A vast temple complex serving as monastery and university, featuring a unique two-story structure.",
    religion: "Buddhist",
    location: "Angkor",
  },
  {
    id: 17,
    name: "Banteay Thom",
    khmerName: "បន្ទាយធំ",
    period: "Classical",
    year: "Late 12th century",
    description:
      "A late 12th-century Buddhist temple and a hidden gem in the jungle, built during the reign of King Jayavarman VII. Its name translates to 'The Great Citadel'",
    religion: "Buddhism",
    location: "Angkor Archaeological Park",
  },
  {
    id: 18,
    name: "Baphuon",
    khmerName: "ប្រាសាទបាពួន",
    period: "Classical",
    year: "11th century",
    description:
      "An 11th-century three-tiered temple mountain dedicated to the Hindu god Shiva. Known as the 'golden mountain', it was later converted to a Buddhist temple.",
    religion: "Buddhism",
    location: "Angkor Thom",
  },
  {
    id: 19,
    name: "Bat Chum",
    khmerName: "ប្រាសាទបាទជុំ",
    period: "Classical",
    year: "Mid 10th century AD",
    description:
      "A small 10th-century Buddhist temple built by a learned minister of King Rajendravarman. It consists of three brick towers in poor condition.",
    religion: "Buddhism",
    location: "Angkor Arcaeological Park",
  },
  {
    id: 20,
    name: "East Mebon",
    khmerName: "មេបុណ្យខាងកើត",
    period: "Classical",
    year: "953",
    description:
      "Built on an artificial island in the now-dry East Baray, guarded by stone elephant sculptures.",
    religion: "Hindu",
    location: "Angkor",
  },
  {
    id: 21,
    name: "Bakong",
    khmerName: "បាគង",
    period: "Classical",
    year: "881",
    description:
      "The first major temple mountain built of sandstone, representing Mount Meru in the Roluos group.",
    religion: "Hindu",
    location: "Roluos",
  },
  {
    id: 22,
    name: "Bei Prasat",
    khmerName: "	ប្រាសាទបី",
    period: "Classical",
    year: "10th century AD",
    description:
      "A set of three 10th-century brick towers, never completed, located near the South Gate of Angkor Thom. 'Prasat Bei' literally means 'three towers'.",
    religion: "Hinduism",
    location: "Angkor Archaeological Park",
  },
  {
    id: 23,
    name: "Phnom Da",
    khmerName: "ភ្នំដា",
    period: "Classical",
    year: "6th century AD",
    description:
      "One of Cambodia's oldest surviving temples, built in the 6th century on a small hill. It is a Brahman temple from the pre-Angkorian Funan era.",
    religion: "Hinduism",
    location: "Angkor Borei District, Takeo Province",
  },
  {
    id: 24,
    name: "Prasat Chrung",
    khmerName: "ប្រាសាទជ្រុង",
    period: "Classical",
    year: "Early 11th century",
    description:
      "Four small sandstone temples ('Shrine of the Angle') located at each corner of the Angkor Thom city walls. They were built in the late 12th century.",
    religion: "Hindu",
    location: "Angkor Thom",
  },
  {
    id: 25,
    name: "Sambor Prei Kuk",
    khmerName: "សំបូរព្រៃគុក",
    period: "Pre-Angkorian",
    year: "6th-7th century",
    description:
      "Cambodia's oldest temple complex and UNESCO World Heritage Site, capital of the Chenla kingdom.",
    religion: "Hindu",
    location: "Kampong Thom",
  },
  {
    id: 26,
    name: "Phnom Chisor",
    khmerName: "ភ្នំជីសូ",
    period: "Classical",
    year: "11th century",
    description:
      "A hilltop temple south of Phnom Penh with views stretching to Vietnam on clear days.",
    religion: "Hindu",
    location: "Takeo",
  },
  {
    id: 27,
    name: "Tonle Bati",
    khmerName: "ទន្លេបាទី",
    period: "Classical",
    year: "12th-13th century",
    description:
      "Two temples Ta Prohm of Tonle Bati and Yeay Peau set beside a peaceful lakeside.",
    religion: "Buddhist",
    location: "Takeo",
  },
  {
    id: 28,
    name: "Wat Nokor",
    khmerName: "វត្តនគរ",
    period: "Classical",
    year: "Late 12th century",
    description:
      "An ancient temple uniquely merged with a modern Buddhist pagoda built within its walls.",
    religion: "Buddhist",
    location: "Kampong Cham",
  },
  {
    id: 29,
    name: "Prasat Tor",
    khmerName: "ប្រាសាទទ",
    period: "Classical",
    year: "Late 9th century AD",
    description:
      "A small, rarely-visited structure built from laterite and brick, consisting of several towers. Its name, 'Tor', refers to an irrigation channel, and it is situated on a dike of the ancient East Baray.",
    religion: "Hinduism",
    location: "Siem Reap",
  },
  {
    id: 30,
    name: "Prasat Wat Athvea",
    khmerName: "ប្រាសាទវត្តអធ្វា",
    period: "Classical",
    year: "12th-13th century",
    description:
      "A 12th-century Hindu temple built during the reign of King Suryavarman II. It has an active Buddhist pagoda and cemetery adjacent to the ancient structure.",
    religion: "Hindu",
    location: "6 km south of Siem Reap, near Tonle Sap",
  },
  {
    id: 31,
    name: "Tonle Sngout",
    khmerName: "ប្រាសាទទន្លេស្ងួត",
    period: "Classical",
    year: "Mid 10th century",
    description:
      "A small, solitary ruin and one of the 102 'hospital chapels' built by King Jayavarman VII. Its modern name means 'Temple of the Dry River'.",
    religion: "Buddhist",
    location: "Angkor Archaeological Park",
  },
  {
    id: 32,
    name: "Baksei Chamkrong",
    khmerName: "ប្រាសាទបក្សីចាំក្រុង",
    period: "Classical",
    year: "Mid 10th century",
    description:
      "A small, elegant, tiered temple named 'The Bird Who Shelters Under Its Wings'. Begun by King Harshavarman I and completed by King Rajendravarman II, it holds an inscription on its doorway.",
    religion: "Hinduismt",
    location: "Angkor Archaeological Park",
  },
  {
    id: 33,
    name: "Prasat Suor Prat",
    khmerName: "ប្រាសាទសួរព្រ័ត",
    period: "Classical",
    year: "12th century",
    description:
      "Twelve towers lining the Royal Square of Angkor Thom, their purpose still debated by scholars.",
    religion: "Unknown",
    location: "Angkor Thom",
  },
  {
    id: 34,
    name: "West Mebon",
    khmerName: "មេបុណ្យខាងលិច",
    period: "Classical",
    year: "Mid 11th century",
    description:
      "An island temple in the West Baray, once home to a massive bronze Vishnu reclining on a serpent.",
    religion: "Hindu",
    location: "Angkor",
  },
  {
    id: 35,
    name: "Phnom Kulen",
    khmerName: "ភ្នំគូលែន",
    period: "Classical",
    year: "9th century",
    description:
      "The sacred mountain where Jayavarman II declared independence, featuring riverbed linga carvings and waterfalls.",
    religion: "Hindu / Buddhist",
    location: "Siem Reap",
  },
];

const templeImages = {
  1: "./image/Photo for Prasat web/angkorwat.jpg",
  2: "./image/Photo for Prasat web/Bayon Temple/bayon-temple.jpg",
  3: "./image/Photo for Prasat web/ta Prohm Temple/ta prohm 2.jpg",
  4: "./image/Photo for Prasat web/Banteay Srei Temple/banteay-srei.jpg",
  5: "./image/Photo for Prasat web/Preah Vihear Temple/pv6.jpg",
  6: "./image/Photo for Prasat web/Boeung Melea Temple/Bengmealea.jpg",
  7: "./image/Photo for Prasat web/Banteay Chmar Temple/Banteay_Chhmar_Temple_Entrance.jpg",
  8: "./image/Photo for Prasat web/Koh Ker Temple/04-Koh_Ker-nX-18.jpg",
  9: "./image/Photo for Prasat web/Phnom Bakheng/Phnom_Bakheng_temple_at_Angkor,_Cambodia.jpg",
  10: "./image/Photo for Prasat web/Prasat Pre Rub Temple/pre-rup4.jpg",      
  11: "./image/Photo for Prasat web/Neak Pean Temple/Neak_pean_2009_1.jpg",
  12: "./image/Photo for Prasat web/Banteay Prei/bp1.jpg",
  13: "./image/Photo for Prasat web/Chau Say Temple/Angkor_Chau_Say_Tevoda_2009.jpg",
  14: "./image/Photo for Prasat web/Banteay Samre/Banteay_Samre,_Cambodia_(2211425643).jpg",
  15: "./image/Photo for Prasat web/Banteay Kdei/Banteay_Kdei_(12663914735).jpg",
  16: "./image/Photo for Prasat web/Preah Khan Temple/pk13.jpg",
  17: "./image/Photo for Prasat web/Banteay Thom Temple/bt.jpg",
  18: "./image/Photo for Prasat web/Bapoun Temple/Baphuon_(I).jpg",
  19: "./image/Photo for Prasat web/Bat Chum Temple/bc.jpg",
  20: "./image/Photo for Prasat web/East Meabon Temple/Mebon_Oriental,_Angkor,_Camboya,_2013-08-17,_DD_05.JPG",
  21: "./image/Photo for Prasat web/Bakong Temple/Roulos_Group_-_005_Bakong_(8587796725).jpg",
  22: "./image/Photo for Prasat web/Bei Prasat Temple/bp.jpg",
  23: "./image/Photo for Prasat web/East Meabon Temple/Mebon_Oriental,_Angkor,_Camboya,_2013-08-17,_DD_05.JPG",
  24: "./image/Photo for Prasat web/Prasat Chrung Temple/pc2.webp",
  25: "./image/Photo for Prasat web/Sombo Prey Kok Temple/sb1.jpg",
  26: "./image/Photo for Prasat web/Phnom Chisor Temple/pc.jpg",
  27: "./image/Photo for Prasat web/tonlebati.jpg",
  28: "./image/Photo for Prasat web/watnokor.JPG",
  29: "./image/Photo for Prasat web/Prasat Tor Temple/prasat-tor-02-600_orig.jpg",
  30: "./image/Photo for Prasat web/Prasat Wat Athvea/Wat_Athvea.JPG",
  31: "./image/Photo for Prasat web/Tonle Sngout Temple/ts4.webp",
  32: "./image/Photo for Prasat web/Baksei Chamkrong Temple/2016_Angkor,_Baksei_Chamkrong_(06).jpg",
  33: "./image/Photo for Prasat web/angkor-wat.jpg",
  34: "./image/Photo for Prasat web/angkor-wat.jpg",
  35: "./image/Photo for Prasat web/angkor-wat.jpg",
};

const state = {
  activeLocation: "All",
};

const filterRoot = document.getElementById("locationFilters");
const gridRoot = document.getElementById("templeGrid");
const yearEl = document.getElementById("copyrightYear");
const siteHeader = document.querySelector(".site-header");
const brandTopLink = document.querySelector('a.brand[href="#top"]');
const sectionNavLinks = Array.from(
  document.querySelectorAll('a.section-link[href^="#"]'),
);

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

const modal = document.getElementById("templeModal");
const modalCloseButton = document.getElementById("modalClose");
const modalImageWrap = document.getElementById("modalImageWrap");

const modalTitle = document.getElementById("modalTitle");
const modalReligion = document.getElementById("modalReligion");
const modalKhmer = document.getElementById("modalKhmer");
const modalDescription = document.getElementById("modalDescription");
const modalPeriod = document.getElementById("modalPeriod");
const modalYear = document.getElementById("modalYear");
const modalLocation = document.getElementById("modalLocation");

const visitForm = document.getElementById("visitForm");
const formMessage = document.getElementById("formMessage");

let lastFocusedElement = null;

function getTempleMarkup(temple) {
  const imageSrc = templeImages[temple.id];
  const imageBlock = imageSrc
    ? `<img src="${imageSrc}" alt="${temple.name}" loading="lazy" width="800" height="600" decoding="async" />`
    : `<div class="temple-fallback" aria-hidden="true">${temple.id}</div>`;

  return `<article class="temple-card" tabindex="0" role="button" data-temple-id="${temple.id}" aria-label="Open details for ${temple.name}">
    <div class="temple-image">${imageBlock}</div>
    <div class="temple-body">
      <div class="temple-head">
        <h3>${temple.name}</h3>
        <span class="badge">${temple.religion}</span>
      </div>
      <p class="temple-sub">${temple.khmerName} · ${temple.year}</p>
      <p class="temple-desc">${temple.description}</p>
      <p class="temple-loc">&#128205; ${temple.location}</p>
    </div>
  </article>`;
}

function renderTempleGrid() {
  if (!gridRoot) {
    return;
  }

  const list =
    state.activeLocation === "All"
      ? temples
      : temples.filter((temple) => temple.location === state.activeLocation);

  if (list.length === 0) {
    gridRoot.innerHTML = "<p>No temples found for this location.</p>";
    return;
  }

  gridRoot.innerHTML = list.map(getTempleMarkup).join("");
}

function renderFilters() {
  if (!filterRoot) {
    return;
  }

  const locations = ["All", ...new Set(temples.map((temple) => temple.location))];

  filterRoot.innerHTML = locations
    .map((location) => {
      const isActive = location === state.activeLocation;
      return `<button type="button" class="filter-chip ${
        isActive ? "active" : ""
      }" data-location="${location}" aria-pressed="${isActive}">${location}</button>`;
    })
    .join("");
}

function updateFiltersAndGrid(location) {
  state.activeLocation = location;
  renderFilters();
  renderTempleGrid();
}

function openModal(temple) {
  if (!modal) {
    return;
  }

  lastFocusedElement = document.activeElement;

  modalTitle.textContent = temple.name;
  modalReligion.textContent = temple.religion;
  modalKhmer.textContent = temple.khmerName;
  modalDescription.textContent = temple.description;
  modalPeriod.textContent = temple.period;
  modalYear.textContent = temple.year;
  modalLocation.textContent = temple.location;

  const imageSrc = templeImages[temple.id];
  modalImageWrap.innerHTML = imageSrc
    ? `<img src="${imageSrc}" alt="${temple.name}" width="1280" height="720" decoding="async" />`
    : `<div class="temple-fallback" aria-hidden="true">${temple.id}</div>`;

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalCloseButton.focus();
}

function closeModal() {
  if (!modal) {
    return;
  }

  modal.hidden = true;
  document.body.classList.remove("modal-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function initTempleInteractions() {
  if (!filterRoot || !gridRoot) {
    return;
  }

  filterRoot.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest("button[data-location]");
    if (!button) {
      return;
    }

    updateFiltersAndGrid(button.dataset.location || "All");
  });

  gridRoot.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest("[data-temple-id]");
    if (!card) {
      return;
    }

    const templeId = Number(card.getAttribute("data-temple-id"));
    const temple = temples.find((item) => item.id === templeId);

    if (temple) {
      openModal(temple);
    }
  });

  gridRoot.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest("[data-temple-id]");
    if (!card) {
      return;
    }

    event.preventDefault();

    const templeId = Number(card.getAttribute("data-temple-id"));
    const temple = temples.find((item) => item.id === templeId);

    if (temple) {
      openModal(temple);
    }
  });
}

function initModalInteractions() {
  if (!modal || !modalCloseButton) {
    return;
  }

  modalCloseButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.hasAttribute("data-close-modal")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}

function initMobileMenu() {
  if (!menuToggle || !mobileMenu) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    mobileMenu.hidden = isExpanded;
    mobileMenu.classList.toggle("is-open", !isExpanded);
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
      mobileMenu.classList.remove("is-open");
    });
  });
}

function initBrandTopScroll() {
  if (!brandTopLink) {
    return;
  }

  brandTopLink.addEventListener("click", (event) => {
    event.preventDefault();

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

    window.scrollTo({
      top: 0,
      behavior,
    });

    if (window.location.hash) {
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  });
}

function initHeaderScrollState() {
  if (!siteHeader) {
    return;
  }

  const onScroll = () => {
    siteHeader.classList.toggle("scrolled", window.scrollY > 14);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initSectionSpyNav() {
  if (sectionNavLinks.length === 0) {
    return;
  }

  const linkGroups = new Map();

  sectionNavLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") {
      return;
    }

    if (!linkGroups.has(href)) {
      linkGroups.set(href, []);
    }

    linkGroups.get(href).push(link);
  });

  const sectionEntries = Array.from(linkGroups.keys())
    .map((href) => ({ href, section: document.querySelector(href) }))
    .filter((entry) => entry.section instanceof HTMLElement);

  if (sectionEntries.length === 0) {
    return;
  }

  const setCurrent = (href) => {
    linkGroups.forEach((links, key) => {
      links.forEach((link) => {
        link.classList.toggle("is-current", key === href);
      });
    });
  };

  setCurrent(sectionEntries[0].href);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      setCurrent(`#${visible.target.id}`);
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: [0.15, 0.45, 0.75],
    },
  );

  sectionEntries.forEach(({ section }) => {
    observer.observe(section);
  });

  sectionNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (href && linkGroups.has(href)) {
        setCurrent(href);
      }
    });
  });
}

function initForm() {
  if (!visitForm || !formMessage) {
    return;
  }

  visitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!visitForm.checkValidity()) {
      formMessage.textContent = "Please complete all required fields before submitting.";
      visitForm.reportValidity();
      return;
    }

    const data = new FormData(visitForm);
    const name = data.get("fullName");
    const date = data.get("visitDate");
    const pass = data.get("passType");
    const temple = data.get("focusTemple");

    formMessage.textContent = `Thank you ${name}. Your ${pass} plan for ${temple} on ${date} has been prepared.`;
    visitForm.reset();
  });
}

function initRevealAnimation() {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("in-view");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
    },
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min((index % 8) * 60, 360)}ms`;
    observer.observe(element);
  });
}

function initFooterYear() {
  if (!yearEl) {
    return;
  }

  yearEl.textContent = `© ${new Date().getFullYear()}`;
}

function init() {
  renderFilters();
  renderTempleGrid();
  initTempleInteractions();
  initModalInteractions();
  initMobileMenu();
  initBrandTopScroll();
  initHeaderScrollState();
  initSectionSpyNav();
  initForm();
  initRevealAnimation();
  initFooterYear();
}

init();
