//store value
document.getElementById('generateResumeButton').onclick = function() {
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const phone = document.getElementById('Phone').value;
    const linkedIn = document.getElementById('LinkedIn').value;
    const github = document.getElementById('Github').value;
    const experience = document.getElementById('Experience').value;
    const education = document.getElementById('Education').value;
    const imageFile = document.getElementById('Image').files[0];
    if (!imageFile) {
        alert('Please upload a photo.');
        return;
    }
//hide div and show preview
    const reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('Preview').innerHTML = `
            <h2>${name}</h2>
            <img src="${event.target.result}" alt="Profile Photo">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>LinkedIn:</strong> <a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
            <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
            <h3>Experience</h3><p>${experience}</p>
            <h3>Education</h3><p>${education}</p>
            <button type="button" id="download">download</button>
        `;
        document.getElementById('Preview').style.display = 'block';
    };
    reader.readAsDataURL(imageFile);
};