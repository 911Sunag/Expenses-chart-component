fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const box = document.querySelector(".box");
    const maxAmount = Math.max(...data.map(d => d.amount));
    data.forEach(day => {
      const barContainer = document.createElement("div");
      barContainer.classList.add("bar-container");
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = (day.amount * 3) + "px";

      if (day.amount === maxAmount) {
        bar.classList.add("max");
      }
      const tooltip = document.createElement("span");
      tooltip.classList.add("tooltip");
      tooltip.textContent = `$${day.amount}`;

      const label = document.createElement("small");
      label.textContent = day.day;

      barContainer.appendChild(tooltip);
      barContainer.appendChild(bar);
      barContainer.appendChild(label);

      box.appendChild(barContainer);
    });
  });