document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
  }

//   // Tab Functionality
//   const tabBtns = document.querySelectorAll('.tab-btn');
//   const tabContents = document.querySelectorAll('.tab-content');

//   tabBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const tabId = btn.getAttribute('data-tab');
      
//       // Remove active class from all buttons and contents
//       tabBtns.forEach(btn => btn.classList.remove('active'));
//       tabContents.forEach(content => content.classList.remove('active'));
      
//       // Add active class to clicked button and corresponding content
//       btn.classList.add('active');
//       const tabContent = document.getElementById(tabId);
//       if (tabContent) tabContent.classList.add('active');
//     });
//   });

//   // Search Functionality
//   const searchBox = document.querySelector('.search-box');
//   const tradingTable = document.querySelector('.trading-table tbody');

//   if (searchBox && tradingTable) {
//     const rows = tradingTable.querySelectorAll('tr');
//     searchBox.addEventListener('input', (e) => {
//       const searchTerm = e.target.value.toLowerCase();
      
//       rows.forEach(row => {
//         const coinInfo = row.querySelector('.coin-info span');
//         if (coinInfo) {
//           const coinName = coinInfo.textContent.toLowerCase();
//           row.style.display = coinName.includes(searchTerm) ? '' : 'none';
//         }
//       });
//     });
//   }

        // // Filter Functionality
        // const filterSelect = document.querySelector('.filter-select');
        
        // filterSelect.addEventListener('change', (e) => {
        //     // In a real implementation, this would filter the table based on asset type
        //     // For this demo, we'll just log the selected value
        //     console.log('Filter by:', e.target.value);
        // });

        // // Animated Graph Points
        // const graphPoints = document.querySelectorAll('.graph-point');
        
        // function animatePoints() {
        //     graphPoints.forEach((point, index) => {
        //         setTimeout(() => {
        //             point.style.transform = 'translate(-50%, -50%) scale(1.2)';
        //             setTimeout(() => {
        //                 point.style.transform = 'translate(-50%, -50%) scale(1)';
        //             }, 300);
        //         }, index * 500);
        //     });
            
        //     setTimeout(animatePoints, 3000);
        // }
        
        // animatePoints();


        // // Market Category Filter
        // const marketCategories = document.querySelectorAll('.market-category');
        // const marketRows = document.querySelectorAll('.market-table tbody tr');
        
        // marketCategories.forEach(category => {
        //     category.addEventListener('click', () => {
        //         // Remove active class from all categories
        //         marketCategories.forEach(c => c.classList.remove('active'));
                
        //         // Add active class to clicked category
        //         category.classList.add('active');
                
        //         const categoryFilter = category.getAttribute('data-category');
                
        //         // Filter rows
        //         marketRows.forEach(row => {
        //             if (categoryFilter === 'all' || row.getAttribute('data-category') === categoryFilter) {
        //                 row.style.display = '';
        //             } else {
        //                 row.style.display = 'none';
        //             }
        //         });
        //     });
        // });
        
        // // Watchlist Actions
        // const watchlistRemoveBtns = document.querySelectorAll('.watchlist-btn .fa-times');
        
        // watchlistRemoveBtns.forEach(btn => {
        //     btn.addEventListener('click', function() {
        //         const row = this.closest('tr');
        //         row.style.opacity = '0';
        //         setTimeout(() => {
        //             row.remove();
        //         }, 300);
        //     });
        // });
        
        // // Simulate live price updates
        // function updatePrices() {
        //     const prices = document.querySelectorAll('.price');
        //     const changes = document.querySelectorAll('.price-change');
            
        //     prices.forEach(price => {
        //         const currentValue = parseFloat(price.textContent.replace(/[^0-9.-]/g, ''));
        //         const changePercent = (Math.random() * 2 - 1) * 0.5; // Random change between -0.5% and +0.5%
        //         const newValue = currentValue * (1 + changePercent / 100);
                
        //         // Update price display
        //         if (currentValue > 1) {
        //             price.textContent = '$' + newValue.toFixed(2);
        //         } else {
        //             price.textContent = '$' + newValue.toFixed(4);
        //         }
                
        //         // Find corresponding change element
        //         const row = price.closest('tr');
        //         const changeElement = row.querySelector('.price-change');
                
        //         // Update change display
        //         if (changeElement) {
        //             const isPositive = changePercent >= 0;
        //             changeElement.textContent = (isPositive ? '+' : '') + changePercent.toFixed(2) + '%';
        //             changeElement.className = 'price-change ' + (isPositive ? 'positive' : 'negative');
                    
        //             // Update mini chart
        //             const chart = row.querySelector('svg path');
        //             if (chart) {
        //                 chart.setAttribute('stroke', isPositive ? '#2ecc71' : '#e74c3c');
        //                 // Generate random chart data
        //                 let pathData = 'M0,15';
        //                 for (let i = 1; i <= 8; i++) {
        //                     const x = i * 10;
        //                     const y = 15 + (Math.random() * 10 - 5) * (isPositive ? 1 : -1);
        //                     pathData += ` L${x},${y}`;
        //                 }
        //                 chart.setAttribute('d', pathData);
        //             }
        //         }
        //     });
            
        //     setTimeout(updatePrices, 3000);
        // }
        
        // // Start price updates after a short delay
        // setTimeout(updatePrices, 1000);

        }); // First Line code is closing here!