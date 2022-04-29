
// function sendMessage(e) {
// e.preventDefault();
//     let projectName = document.getElementById('project-name').value;
//     let projectDirection = document.getElementById('project-direction').value;
//     let ownerName = document.getElementById('owner-name').value;
//     let projectValue = document.getElementById('project-value').value;
//     let phoneNumber = document.getElementById('phone-number').value;
//     let aboutProject = document.getElementById('about-project').value;

//     let my_text = `
// Loyiha nomi:  ${projectName}%0A
// Loyiha yo'nalishi:  ${projectDirection}%0A
// Loyiha rahbarining F.I.Sh:  ${ownerName}%0A
// Loyihani qiymati:  ${projectValue}%0A
// Tel raqam:  ${phoneNumber}%0A
// Loyiha haqida:  ${aboutProject}`;

//     const token = '5138444280:AAETuQ9Pp-WZvgcRhTS11m5uuufK5ElwrTg';
//     const chat_id = -1001620023391
//     const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
//     let api = new XMLHttpRequest();
//     api.open('GET', url, true);
//     api.send();
// }

// sendMessage().then(()=>{
//     document.getElementById('project-name').value = '';
//     document.getElementById('project-direction').value = '';
//     document.getElementById('owner-name').value = '';
//     document.getElementById('project-value').value = '';
//     document.getElementById('phone-number').value = '';
//     document.getElementById('about-project').value = '';
// })


const form = document.getElementById('form1')

const cleanForm = ()=>{
    document.getElementById('project-name').value = '';
    document.getElementById('project-direction').value = '';
    document.getElementById('owner-name').value = '';
    document.getElementById('project-value').value = '';
    document.getElementById('phone-number').value = '';
    document.getElementById('about-project').value = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let projectName = document.getElementById('project-name').value;
    let projectDirection = document.getElementById('project-direction').value;
    let ownerName = document.getElementById('owner-name').value;
    let projectValue = document.getElementById('project-value').value;
    let phoneNumber = document.getElementById('phone-number').value;
    let aboutProject = document.getElementById('about-project').value;

    let my_text = `
Loyiha nomi:  ${projectName}%0A
Loyiha yo'nalishi:  ${projectDirection}%0A
Loyiha rahbarining F.I.Sh:  ${ownerName}%0A
Loyihani qiymati:  ${projectValue}%0A
Tel raqam:  ${phoneNumber}%0A
Loyiha haqida:  ${aboutProject}`;

    const token = '5138444280:AAETuQ9Pp-WZvgcRhTS11m5uuufK5ElwrTg';
    const chat_id = -1001620023391
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
    let api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    cleanForm();
})

