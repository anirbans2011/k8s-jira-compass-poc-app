function checkBackend() {
  fetch("http://localhost:5000/api/health")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText = data.status;
    });
}
