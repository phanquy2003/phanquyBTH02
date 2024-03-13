function bai1(){
    const form = document.getElementById("equation-form");
        const coefficientA = document.getElementById("coefficient-a");
        const coefficientB = document.getElementById("coefficient-b");
        const solution = document.getElementById("solution");
        
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const a = parseFloat(coefficientA.value);
          const b = parseFloat(coefficientB.value);
          if (isNaN(a) || isNaN(b)) {
            solution.textContent = "Vui lòng nhập số hợp lệ.";
            return;
          }
          if (a === 0) {
            if (b === 0) {
              solution.textContent = "Phương trình có vô số nghiệm.";
            } else {
              solution.textContent = "Phương trình vô nghiệm.";
            }
            return;
          }
          const x = -b / a;
          solution.textContent = `Nghiệm của phương trình là: ${x}`;
        });
    }