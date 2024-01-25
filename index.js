// document.addEventListener('DOMContentLoaded', function () {
//     const buttons = document.querySelectorAll('.buttons button');
//     const imageContainers = document.querySelectorAll('.image-container');

//     buttons.forEach(button => {
//       button.addEventListener('click', function () {
//         const filterValue = this.getAttribute('data-btn');

//         // Toon alle afbeeldingen als 'All' is geselecteerd
//         if (filterValue === 'all') {
//           imageContainers.forEach(container => {
//             container.style.display = 'block';
//           });
//         } else {
//           // Verberg afbeeldingen die niet overeenkomen met het geselecteerde filter
//           imageContainers.forEach(container => {
//             const dataImg = container.querySelector('.img').getAttribute('data-img');
//             if (dataImg && dataImg.includes(filterValue)) {
//               container.style.display = 'block';
//             } else {
//               container.style.display = 'none';
//             }
//           });
//         }

//         // Markeer het geselecteerde filter
//         buttons.forEach(btn => {
//           btn.classList.remove('btn-clicked');
//         });
//         this.classList.add('btn-clicked');
//       });
//     });
//   });


  