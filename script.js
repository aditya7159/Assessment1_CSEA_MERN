document.getElementById('generateResumeButton').onclick = function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedIn = document.getElementById('LinkedInid').value;
    const github = document.getElementById('gitid"').value;
    const experience = document.getElementById('experience-section').value;
    const education = document.getElementById('education-section').value;
    const imageFile = document.getElementById('photo').files[0];

    if (!imageFile) {
        alert('Please upload a photo.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('resumePreview').innerHTML = `
            <h2>${name}</h2>
            <img src="${event.target.result}" alt="Profile Photo">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>LinkedIn:</strong> <a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
            <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
            <h3>Experience</h3><p>${experience}</p>
            <h3>Education</h3><p>${education}</p>
        `;
        document.getElementById('resumePreview').style.display = 'block';
    };
    reader.readAsDataURL(imageFile);
};