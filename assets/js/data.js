/**
 * WheelsShare - Dummy Data Store
 * Menyediakan data dummy realistis untuk Prototype UI
 */

const DATA = {
  users: [
    { id: 'USR001', name: 'Andi Kusuma', email: 'andi.kusuma@email.com', phone: '+62 812-3456-7890', role: 'customer', kyc: 'verified', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80', joinDate: '12 Okt 2023', status: 'active' },
    { id: 'USR002', name: 'Siti Nuraini', email: 'siti.nuraini@email.com', phone: '+62 856-7890-1234', role: 'customer', kyc: 'verified', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80', joinDate: '05 Nov 2023', status: 'active' },
    { id: 'USR003', name: 'Rizky Pratama', email: 'rizky.p@email.com', phone: '+62 811-2233-4455', role: 'customer', kyc: 'verified', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80', joinDate: '20 Des 2023', status: 'banned', reason: 'Melanggar ToS - Sering membatalkan pesanan sepihak' },
    { id: 'USR004', name: 'Dewi Lestari', email: 'dewilestari@email.com', phone: '+62 822-5566-7788', role: 'customer', kyc: 'pending', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80', joinDate: '25 Des 2023', status: 'active' },
    { id: 'USR005', name: 'Budi Santoso', email: 'budisantoso.rental@email.com', phone: '+62 813-9988-7766', role: 'mitra', kyc: 'verified', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80', joinDate: '10 Jan 2023', status: 'active', rating: 4.8, totalTrips: 45 },
    { id: 'USR006', name: 'Rina Susanti', email: 'rina.jaya@email.com', phone: '+62 851-5544-3322', role: 'mitra', kyc: 'verified', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80', joinDate: '15 Mar 2023', status: 'active', rating: 4.9, totalTrips: 112 }
  ],

  cars: [
    { 
      id: 'CAR001', hostId: 'USR005', 
      name: 'Toyota Avanza G', year: 2023, 
      category: 'MPV', seats: 7, transmission: 'Automatic', 
      price: 350000, rating: 4.8, reviews: 32, 
      location: 'Setiabudi, Jakarta Selatan',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800', 
      gallery: ['https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800'],
      status: 'available', licensePlate: 'B 1234 XYZ'
    },
    { 
      id: 'CAR002', hostId: 'USR006', 
      name: 'Honda Brio RS', year: 2022, 
      category: 'City Car', seats: 5, transmission: 'Automatic', 
      price: 280000, rating: 4.9, reviews: 85, 
      location: 'Kuta, Bali',
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800', 
      gallery: ['https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800'],
      status: 'available', licensePlate: 'DK 5678 ABC'
    },
    { 
      id: 'CAR003', hostId: 'USR005', 
      name: 'Mitsubishi Xpander Ultimate', year: 2023, 
      category: 'MPV', seats: 7, transmission: 'Automatic', 
      price: 450000, rating: 4.7, reviews: 18, 
      location: 'Dago, Bandung',
      image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&q=80&w=800', 
      gallery: ['https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&q=80&w=800'],
      status: 'rented', rentedUntil: '2024-01-05', licensePlate: 'D 9012 DEF'
    },
    { 
      id: 'CAR004', hostId: 'USR006', 
      name: 'Suzuki Ertiga Hybrid', year: 2023, 
      category: 'MPV', seats: 7, transmission: 'Automatic', 
      price: 380000, rating: 4.6, reviews: 42, 
      location: 'Kuta, Bali',
      image: 'https://images.unsplash.com/photo-1606149059549-b0ebc8163f5d?auto=format&fit=crop&q=80&w=800', 
      gallery: ['https://images.unsplash.com/photo-1606149059549-b0ebc8163f5d?auto=format&fit=crop&q=80&w=800'],
      status: 'available', licensePlate: 'DK 3456 GHI'
    },
    { 
      id: 'CAR005', hostId: 'USR006', 
      name: 'Toyota Innova Reborn', year: 2021, 
      category: 'MPV Premium', seats: 8, transmission: 'Automatic', 
      price: 550000, rating: 4.9, reviews: 105, 
      location: 'Seminyak, Bali',
      image: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=800', 
      gallery: ['https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=800'],
      status: 'available', licensePlate: 'DK 7890 JKL'
    }
  ],

  bookings: [
    { id: 'BK-2401-001', customerId: 'USR001', carId: 'CAR001', hostId: 'USR005', startDate: '2024-01-10', endDate: '2024-01-12', totalDays: 3, totalAmount: 1050000, status: 'completed' },
    { id: 'BK-2401-002', customerId: 'USR002', carId: 'CAR003', hostId: 'USR005', startDate: '2024-01-02', endDate: '2024-01-05', totalDays: 4, totalAmount: 1800000, status: 'active' },
    { id: 'BK-2401-003', customerId: 'USR004', carId: 'CAR002', hostId: 'USR006', startDate: '2024-01-15', endDate: '2024-01-16', totalDays: 2, totalAmount: 560000, status: 'pending' }
  ],

  disputes: [
    { id: 'DSP-001', bookingId: 'BK-2312-099', reporterId: 'USR001', reportedId: 'USR005', type: 'Kendaraan Rusak', status: 'investigating', date: '2023-12-28' },
    { id: 'DSP-002', bookingId: 'BK-2311-054', reporterId: 'USR006', reportedId: 'USR003', type: 'Keterlambatan Pengembalian', status: 'resolved', resolution: 'Denda Rp 200.000', date: '2023-11-15' }
  ],

  analytics: {
    gmv2023: [42000000, 48000000, 55000000, 51000000, 62000000, 75000000, 82000000, 78000000, 85000000, 92000000, 110000000, 150000000],
    dauMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'],
    carTypes: [
      { value: 45, name: 'MPV' },
      { value: 30, name: 'City Car' },
      { value: 15, name: 'SUV' },
      { value: 10, name: 'Premium' }
    ]
  }
};

// Utilities for formatting
const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

// Expose to window
window.WS_DATA = DATA;
window.formatRupiah = formatRupiah;
window.formatDate = formatDate;
