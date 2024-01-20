

let arr = [];

fetch("http://localhost:3000/Pulse")
  .then((res) => res.json())
  .then((data) => {

    arr = data;
    console.log(arr);
    printData();
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        margin: 10,
        dots: true,
        loop: true,
        autoPlay: true,
        autoplayTimeout: 1000,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });
    });
  });

  let carouselContainer = document.querySelector('.owl-carousel')

  const printData = () => {
    arr.forEach(element=>{
      carouselContainer.innerHTML+= `
      <div class="mycard">
      <div class="mycard-header">
        <img src="./offer_1.jpg" />
      </div>
      <div class="mycard-footer">
        <h2>${element.price}</h2>
        <h2>${element.name}</h2>
        <p>
          ${element.desc}
        </p>
        <button class="detail">Go to</button>
      </div>
    </div>
      `
    })
  }
