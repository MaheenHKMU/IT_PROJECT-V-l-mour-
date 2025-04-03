 // Toggle sidebar functionality
 const sidebarToggle = document.querySelector('.sidebar-toggle');
 const sidebar = document.querySelector('.sidebar');
 const closeSidebar = document.querySelector('.close-sidebar');
 const overlay = document.querySelector('.overlay');

 sidebarToggle.addEventListener('click', () => {
     sidebar.classList.add('active');
     overlay.classList.add('active');
 });

 closeSidebar.addEventListener('click', () => {
     sidebar.classList.remove('active');
     overlay.classList.remove('active');
 });

 overlay.addEventListener('click', () => {
     sidebar.classList.remove('active');
     overlay.classList.remove('active');
 });

 // image and Buy now buttons functionality
 const maleimage = document.getElementById('male-image');
 const femaleimage = document.getElementById('female-image');
 const buyMale = document.getElementById('buy-male');
 const buyFemale = document.getElementById('buy-female');

 function goToMaleSection() {
     alert('Navigating to male products section');
     // In a real implementation:
     window.location.href = '/male-products';
 }

 function goToFemaleSection() {
     alert('Navigating to female products section');
     // In a real implementation:
     window.location.href = '/female-products';
 }

 maleimage.addEventListener('click', goToMaleSection);
 buyMale.addEventListener('click', goToMaleSection);

 femaleimage.addEventListener('click', goToFemaleSection);
 buyFemale.addEventListener('click', goToFemaleSection);

 // Add some animation to the brand logo
 const brandLogo = document.querySelector('.brand-logo');

 