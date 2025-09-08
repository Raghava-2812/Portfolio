const projects = [
  {
    title: "Online Quiz Application",
    desc: "Developed an interactive quiz platform with multiple-choice questions, score tracking, and responsive design using Python, HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    url: "https://Raghava-2812.github.io/Quiz_App"
  },
  {
    title: "Task Manager",
    desc: "A full-stack Task Manager web application that allows users to add, update, and delete tasks, with authentication and persistent storage using the MERN stack.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    url: "https://taskmanager-frontend-fefm.onrender.com"
  },
  {
    title: "Employee Salary Prediction",
    desc: "A machine learning model that predicts whether an employee’s income exceeds $50K based on demographic and employment data.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Gradient Boosting Regressor"],
    url: "https://github.com/Raghava-2812/Employee-Salary-Prediction"
  },
  {
    title: "House Price Prediction",
    desc: "Predicts house prices using Linear Regression based on features like bedrooms, bathrooms, and square footage.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    url: "https://github.com/Raghava-2812/House_Price_Prediction"
  },
];

const skills = ["HTML", "CSS", "JavaScript", "SQL", "React.js", "Node.js", "MongoDB", "Python", "Scikit-learn", "TensorFlow", "Java", "GitHub"];

function renderProjects() {
  const container = document.getElementById("project-list");
  projects.forEach(p => {
    const article = document.createElement("article");
    article.className = "card";
    article.innerHTML = `
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
      <div>${p.tech.map(t => `<span>${t}</span>`).join(" ")}</div>
      <a href="${p.url}" target="_blank">Live</a>
    `;
    container.appendChild(article);
  });
}

function renderSkills() {
  const container = document.getElementById("skills-list");
  skills.forEach(s => {
    const div = document.createElement("div");
    div.textContent = s;
    container.appendChild(div);
  });
}

function scrollToId(id) {
  const el = document.getElementById(id);
  const headerOffset = 70;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.querySelector(".theme-btn").textContent = isDark ? "☀️Light" : "🌙Dark";
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  document.querySelector(".theme-btn").textContent = "☀️Light";
}

function submitForm(e) {
  e.preventDefault();

  emailjs.send("service_vh0horl", "template_9la8hue", {
    from_name: document.getElementById("name").value,
    reply_to: document.getElementById("email").value,
    message: document.getElementById("message").value,
    time: new Date().toLocaleString()
  })
    .then(
      () => {
        alert("Thanks " + document.getElementById("name").value + "! Your message has been sent successfully.");
        document.querySelector(".contact-form").reset();

      },
      (error) => {
        console.error("EmailJS error:", error);
        alert("ailed to send message. Try again later.");
      }
    );
}

document.getElementById("year").textContent = new Date().getFullYear();

renderProjects();
renderSkills();
