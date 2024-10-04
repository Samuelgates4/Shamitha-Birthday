var firstSection = document.getElementById('firstsection'),
      canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d"),
      fireworks = [];

  // Set the canvas dimensions to cover only the first section
  canvas.width = firstSection.offsetWidth;
  canvas.height = firstSection.offsetHeight;
  canvas.style.position = "absolute";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.zIndex = 0; // Behind the content
  firstSection.appendChild(canvas);  // Append the canvas to the first section

  // Create fireworks (bubbles)
  function createFirework() {
      var firework = {
          x: Math.random() * canvas.width,
          y: canvas.height,
          radius: Math.random() * 3 + 2,
          color: 'hsl(' + Math.random() * 360 + ', 100%, 50%)',
          dx: Math.random() * 4 - 2,
          dy: Math.random() * -7 - 3
      };
      fireworks.push(firework);
  }

  // Draw the fireworks (bubbles)
  function drawFirework() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fireworks.forEach(function(firework, index) {
          ctx.beginPath();
          ctx.arc(firework.x, firework.y, firework.radius, 0, Math.PI * 2);
          ctx.fillStyle = firework.color;
          ctx.fill();
          firework.x += firework.dx;
          firework.y += firework.dy;
          firework.dy += 0.1;

          if (firework.y > canvas.height || firework.radius < 0) {
              fireworks.splice(index, 1);
          }
      });
  }

  // Continuously create and draw fireworks
  setInterval(function() {
      createFirework();
      drawFirework();
  }, 50);

  // Resize canvas to fit first section when window resizes
  window.addEventListener('resize', function() {
      canvas.width = firstSection.offsetWidth;
      canvas.height = firstSection.offsetHeight;
  });