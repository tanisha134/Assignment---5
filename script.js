// ----------Login page------------------//

function login(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(username === "admin" && password === "admin123"){
        localStorage.setItem("loggedIn", true)
        window.location.href = "dashboard.html"
    }
    else{
        alert("Invalid Credentials:")
    }

}

//Global storage 

let allIssues = []

// LOAD ISSUES

async function loadIssues(type="all"){
    const container = document.getElementById("issuesContainer")


// spinner 
container.innerHTML = `
<div class= "col-span-4 flex justify-center py-10">
<span class="loading loading-spinner loading-lg"></span></div>
`

setActiveTab(type)

const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

const result = await res.json()

//take 50 issues
allIssues = (result.data || []).slice(0,50)

displayIssues(type)

document.getElementById("issueCount").innerText = allIssues.length

}