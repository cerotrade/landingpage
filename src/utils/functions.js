function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function redirectToContactUs() {
  this.$router.push('/contact-us');
  setTimeout(() => {
    const contactUs = document.getElementById('contact-box');
    contactUs.scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

export function redirectToCompanies() {
  this.$router.push('/companies');
  setTimeout(() => {
    const welcomeBox = document.getElementById('troubles-box');
    welcomeBox.scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

export function redirectToGenerators() {
  this.$router.push('/generators');
  setTimeout(() => {
    const welcomeBox = document.getElementById('clients');
    welcomeBox.scrollIntoView({ behavior: 'smooth' });
  }, 500);
}

export function redirectToAboutUs() {
  this.$router.push('/about-us');
  setTimeout(() => {
    const team = document.getElementById('team-title');
    if (team) {
      team.scrollIntoView({ behavior: 'smooth' });
    }
  }, 300);
}

export function redirectToFAQ() {
  this.$router.push('/faq');
  setTimeout(() => {
    const faqsBox = document.getElementById('faqs-box');
    faqsBox.scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

export function redirectToAchievements() {
  this.$router.push('/');
  setTimeout(() => {
    const team = document.getElementById('achievements-box');
    if (team) {
      team.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
}

export function redirectToMission() {
  this.$router.push('/about-us');
  setTimeout(() => {
    const team = document.getElementById('team-title');
    if (team) {
      team.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
}

export function redirectToLink(link) {
  window.open(link, '_blank');
}

export function redirectToHowItWorks() {
  this.$router.push('/');
  setTimeout(() => {
    const container = document.getElementById('how-it-works-box');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
}

export function redirectToHome() {
  this.$router.push('/');
  setTimeout(() => {
    scrollToTop();
  }, 100);
}
