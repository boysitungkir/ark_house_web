function showImageSection(sectionNumber) {
  // Hide all image sections
  document.getElementById("img-sec-1").style.display = "none";
  document.getElementById("img-sec-2").style.display = "none";
  document.getElementById("img-sec-3").style.display = "none";
  document.getElementById("img-sec-4").style.display = "none";

  // Show the selected image section
  let selectedSection;
  if (sectionNumber === 1) {
    selectedSection = document.getElementById("img-sec-1");
    selectedSection.style.display = "block";
  } else if (sectionNumber === 2) {
    selectedSection = document.getElementById("img-sec-2");
    selectedSection.style.display = "block";
  } else if (sectionNumber === 3) {
    selectedSection = document.getElementById("img-sec-3");
    selectedSection.style.display = "block";
  } else if (sectionNumber === 4) {
    selectedSection = document.getElementById("img-sec-4");
    selectedSection.style.display = "block";
  }
}

// Optional: show img-sec-1 by default when the page loads
window.onload = function () {
  showImageSection(1);
};

// display tim
function showTeamSection(sectionNumber) {
  // Sembunyikan semua galeri tim
  const teams = document.querySelectorAll(".gallery-team");
  teams.forEach((team) => {
    team.style.display = "none";
  });

  // Tampilkan galeri tim yang sesuai
  const teamToShow = document.getElementById(`team-${sectionNumber - 4}`);
  if (teamToShow) {
    teamToShow.style.display = "grid";
  }

  // Hapus kelas aktif dari tautan dan tambahkan ke yang diklik
  const links = document.querySelectorAll(".anggota a");
  links.forEach((link) => {
    link.classList.remove("active");
  });

  const activeLink = document.querySelector(
    `.anggota a:nth-child(${sectionNumber - 4})`
  );
  if (activeLink) {
    activeLink.classList.add("active");
  }
}
