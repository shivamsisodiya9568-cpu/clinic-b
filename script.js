/* =====================================================
   GS Clinic - Main Script
   ===================================================== */

/* ============ LOADER ============ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 800);
});

/* ============ FOOTER YEAR ============ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============ NAVBAR SCROLL ============ */
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 50);
  backToTop.classList.toggle('show', y > 400);
});

/* ============ MOBILE MENU ============ */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

/* ============ ACTIVE NAV LINK ============ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

/* ============ BACK TO TOP ============ */
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============ REVEAL ON SCROLL ============ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

/* ============ FAQ ACCORDION ============ */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});

/* ============ APPOINTMENT FORM ============ */
document.getElementById('appointmentForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get('name');
  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.innerHTML;

  btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Appointment Requested!';
    btn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
    alert(`Thank you ${name}! 🎉\n\nYour appointment request has been received.\nOur team will contact you shortly to confirm.\n\nFor urgent queries, call +91 98765 43210.`);
    setTimeout(() => {
      e.target.reset();
      btn.innerHTML = original;
      btn.disabled = false;
      btn.style.background = '';
    }, 2500);
  }, 1200);
});

/* ============ AI CHATBOT ============ */
const chatToggle = document.getElementById('chatToggle');
const chatClose = document.getElementById('chatClose');
const chatbot = document.getElementById('chatbot');
const chatBody = document.getElementById('chatBody');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatSuggestions = document.getElementById('chatSuggestions');

// Knowledge base
const knowledge = [
  {
    keywords: ['hi', 'hello', 'hey', 'namaste', 'hii', 'hlo', 'good morning', 'good evening'],
    reply: "Hello! 👋 Welcome to GS Clinic AI Assistant. I'm here to help you with clinic info, appointments, services, and more. How can I assist you today?"
  },
  {
    keywords: ['time', 'timing', 'hour', 'open', 'close', 'schedule', 'when'],
    reply: "⏰ <b>Clinic Timings:</b><br>• Monday to Saturday: 9:00 AM – 8:00 PM<br>• Sunday: Closed<br><br>We recommend booking an appointment for priority service."
  },
  {
    keywords: ['location', 'where', 'address', 'place', 'find', 'map', 'direction'],
    reply: "📍 <b>GS Clinic Location:</b><br>123 MG Road, Sadar Bazaar,<br>Agra, Uttar Pradesh 282001, India<br><br>Scroll down to the Contact section to see our Google Map!"
  },
  {
    keywords: ['service', 'treatment', 'offer', 'provide', 'speciality', 'specialist'],
    reply: "🏥 <b>Our Services:</b><br>• General Medicine<br>• Cardiology<br>• Diabetes Care<br>• Pediatrics<br>• Women's Health<br>• Respiratory Care<br>• Lab & Diagnostics<br>• Full Body Check-ups"
  },
  {
    keywords: ['appointment', 'book', 'booking', 'schedule appointment', 'slot'],
    reply: "📅 <b>Book an Appointment:</b><br>You can book via:<br>1. The Appointment form on this website<br>2. Call: +91 98765 43210<br>3. WhatsApp: +91 98765 43210<br><br>Scroll to the Book Appointment section to fill the form!"
  },
  {
    keywords: ['doctor', 'dr', 'physician', 'who', 'specialist'],
    reply: "👨‍⚕️ <b>Dr. Gaurav Sharma</b><br>MBBS, MD (Internal Medicine)<br>AIIMS, New Delhi<br>15+ Years Experience<br><br>Specialities: General Medicine, Diabetes, Cardiology, Respiratory Care."
  },
  {
    keywords: ['emergency', 'urgent', 'ambulance', 'accident', 'serious'],
    reply: "🚨 <b>For Medical Emergencies:</b><br>Please call <b>+91 98765 43210</b> immediately or visit the nearest hospital emergency room.<br><br>In India, dial <b>112</b> for national emergency services."
  },
  {
    keywords: ['fee', 'cost', 'price', 'charge', 'rate', 'pay', 'payment'],
    reply: "💰 <b>Consultation Fees:</b><br>• General Consultation: ₹300 – ₹500<br>• Specialist Visit: ₹500 – ₹800<br>• Lab tests start from ₹100<br><br>We accept cash, UPI, and cards. Insurance billing available."
  },
  {
    keywords: ['insurance', 'mediclaim', 'policy', 'coverage'],
    reply: "🛡️ <b>Insurance:</b><br>Yes, we accept most major insurance providers including Star Health, HDFC Ergo, ICICI Lombard, and more. Please bring your insurance card during your visit."
  },
  {
    keywords: ['contact', 'phone', 'call', 'whatsapp', 'number', 'mobile'],
    reply: "📞 <b>Contact GS Clinic:</b><br>• Phone/WhatsApp: +91 98765 43210<br>• Email: contact@gsclinic.in<br><br>Use the floating WhatsApp button on this page for quick chat!"
  },
  {
    keywords: ['home visit', 'house call', 'home consultation', 'visit home'],
    reply: "🏠 <b>Home Visits:</b><br>Yes, we offer home consultation services within Agra city on prior appointment. Call +91 98765 43210 to schedule."
  },
  {
    keywords: ['lab', 'test', 'blood', 'report', 'diagnostic', 'xray', 'x-ray'],
    reply: "🔬 <b>Lab & Diagnostics:</b><br>We have in-house diagnostic facilities including blood tests, X-ray, ECG, and more. Reports are usually ready within 24 hours."
  },
  {
    keywords: ['parking', 'park'],
    reply: "🚗 <b>Parking:</b><br>Free parking is available at the clinic premises for both two-wheelers and four-wheelers."
  },
  {
    keywords: ['thank', 'thanks', 'thx'],
    reply: "You're welcome! 😊 Feel free to ask anything else. Take care of your health! 💙"
  },
  {
    keywords: ['bye', 'goodbye', 'ok', 'okay'],
    reply: "Goodbye! 👋 Stay healthy and take care. Visit us anytime at GS Clinic, Agra!"
  }
];

function getReply(text) {
  const q = text.toLowerCase();
  for (const entry of knowledge) {
    if (entry.keywords.some(kw => q.includes(kw))) return entry.reply;
  }
  return "I'm not sure about that, but I can help with:<br>• Clinic timings<br>• Location<br>• Services<br>• Appointments<br>• Doctor info<br>• Emergency help<br><br>Try asking one of these, or call <b>+91 98765 43210</b> to speak with our staff.";
}

function addMessage(text, type) {
  const msg = document.createElement('div');
  msg.className = `msg ${type}`;
  msg.innerHTML = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function showTyping() {
  const typing = document.createElement('div');
  typing.className = 'msg bot';
  typing.id = 'typing';
  typing.innerHTML = '<i class="fa-solid fa-ellipsis" style="color:var(--primary)"></i>';
  chatBody.appendChild(typing);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing');
  if (t) t.remove();
}

function handleSend(text) {
  if (!text.trim()) return;
  addMessage(text, 'user');
  chatInput.value = '';
  showTyping();
  setTimeout(() => {
    removeTyping();
    addMessage(getReply(text), 'bot');
  }, 700 + Math.random() * 500);
}

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  handleSend(chatInput.value);
});

// Suggestions
const suggestions = ['Timings', 'Services', 'Appointment', 'Doctor', 'Location', 'Fees'];
suggestions.forEach(s => {
  const btn = document.createElement('button');
  btn.className = 'suggestion';
  btn.textContent = s;
  btn.addEventListener('click', () => handleSend(s));
  chatSuggestions.appendChild(btn);
});

// Open/close chat
function openChat() {
  chatbot.classList.add('open');
  chatbot.setAttribute('aria-hidden', 'false');
  if (!chatBody.children.length) {
    setTimeout(() => {
      addMessage("👋 Hi! I'm the <b>GS Clinic AI Assistant</b>. How can I help you today?", 'bot');
    }, 300);
  }
  setTimeout(() => chatInput.focus(), 400);
}

chatToggle.addEventListener('click', () => {
  if (chatbot.classList.contains('open')) {
    chatbot.classList.remove('open');
    chatbot.setAttribute('aria-hidden', 'true');
  } else {
    openChat();
  }
});

chatClose.addEventListener('click', () => {
  chatbot.classList.remove('open');
  chatbot.setAttribute('aria-hidden', 'true');
});

// Auto-open chat hint after 6 seconds
setTimeout(() => {
  if (!chatbot.classList.contains('open') && window.innerWidth > 768) {
    openChat();
    setTimeout(() => {
      if (chatBody.children.length === 1) {
        addMessage("💡 Quick tip: Ask me about our <b>clinic timings</b> or <b>book an appointment</b>!", 'bot');
      }
    }, 1200);
  }
}, 6000);

/* ============ SET MIN DATE FOR APPOINTMENT ============ */
const dateInput = document.querySelector('input[name="date"]');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}
