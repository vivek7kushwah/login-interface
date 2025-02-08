document.querySelector("#loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const rawPassword = document.querySelector("#password").value; 
    const hashedPassword = md5(rawPassword); 
    document.querySelector("#password").value = hashedPassword; 
    this.submit(); 
    document.querySelector("#password").value = rawPassword; 

});

