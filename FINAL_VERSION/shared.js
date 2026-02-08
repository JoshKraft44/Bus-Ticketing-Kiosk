/* ===== Shared JS for Calgary Transit Kiosk ===== */

function openGuide() {
  document.getElementById('guidePopup').style.display = 'block';
  var overlay = document.getElementById('guideOverlay');
  if (overlay) overlay.style.display = 'block';
}

function closeGuide() {
  document.getElementById('guidePopup').style.display = 'none';
  var overlay = document.getElementById('guideOverlay');
  if (overlay) overlay.style.display = 'none';
}

function clearSession() {
  sessionStorage.clear();
  localStorage.removeItem('requiresStudentVerification');
}

// Attach clearSession to all cancel buttons on the page
function initCancelButtons() {
  var cancelBtns = document.querySelectorAll('#cancel-btn');
  cancelBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      clearSession();
    });
  });
}

// Call on every page load
document.addEventListener('DOMContentLoaded', function() {
  initCancelButtons();
});
