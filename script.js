// Fitur Rotate Card (Flipendo)
function castFlipendo() {
  const card = document.getElementById('magic-card-inner');
  card.classList.toggle('flipped');
}

// Fitur Scroll Halus ke Bagian Work Experience
function scrollToJob() {
  const jobSection = document.getElementById('job-experience-section');
  if (jobSection) {
    jobSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Fitur Connect to Job
function connectToJob(roleTitle) {
  const subject = encodeURIComponent(`Inquiry Regarding: ${roleTitle}`);
  const body = encodeURIComponent(`Halo Nabila,\n\nSaya tertarik dengan pengalaman Anda sebagai ${roleTitle} di CV interaktif Anda. Mari terhubung!`);
  
  // Mengarahkan langsung ke email dengan template pesan
  window.location.href = `mailto:valenkenshi@gmail.com?subject=${subject}&body=${body}`;
}