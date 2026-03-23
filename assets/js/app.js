/**
 * WheelsShare - App Global Script
 * Helper function untuk SweetAlert2, UI Interactivity, dll.
 * Fokus: DRY (Don't Repeat Yourself)
 */

const App = {
  // === SWEETALERT HELPERS ===
  
  // Custom SweetAlert Mixin untuk styling Bootstrap
  swal: Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-primary px-4 py-2 m-1',
      cancelButton: 'btn btn-outline-secondary px-4 py-2 m-1',
      popup: 'ws-card rounded-4'
    },
    buttonsStyling: false
  }),

  // Toast notification (kanan atas)
  toast: Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  }),

  // Modals Standar
  showSuccess: function(title, text, confirmCallback) {
    this.swal.fire({
      icon: 'success',
      title: title,
      text: text,
      confirmButtonText: 'Lanjutkan',
    }).then((result) => {
      if (result.isConfirmed && confirmCallback) confirmCallback();
    });
  },

  showError: function(title, text) {
    this.swal.fire({
      icon: 'error',
      title: title,
      text: text,
      confirmButtonText: 'Tutup'
    });
  },

  showConfirm: function(title, text, confirmText, confirmCallback) {
    this.swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmText || 'Ya, Lanjutkan',
      cancelButtonText: 'Batal',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed && confirmCallback) confirmCallback();
    });
  },

  // === BUSINESS LOGIC HELPERS (DUMMY) ===

  // Setup form validasi Bootstrap standar
  setupValidation: function(formId, successCallback) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        if (successCallback) successCallback(new FormData(form));
      } else {
        // Tampilkan pesan error umum jika tidak valid
        this.toast.fire({
          icon: 'warning',
          title: 'Mohon lengkapi semua data dengan benar.'
        });
      }
      form.classList.add('was-validated');
    }, false);
  },

  // Logout Global
  logout: function() {
    this.showConfirm(
      'Keluar dari Aplikasi?', 
      'Sesi Anda akan diakhiri dan harus login kembali.', 
      'Ya, Keluar', 
      () => {
        // Simulasi loading
        this.swal.fire({
          title: 'Memproses...',
          allowOutsideClick: false,
          didOpen: () => { Swal.showLoading(); }
        });
        setTimeout(() => {
          // Asumsi index.html / login ada di parent folder atau sejajar
          window.location.href = '../customer/login.html';
        }, 1000);
      }
    );
  }
};

// Make it global
window.App = App;
