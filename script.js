fetch('app.json')
    .then(response => {
        // Check if the fetch was successful
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(allData => {
        const historyContainer = document.getElementById("data-list");
        const arabicContainer = document.getElementById("data-listA");
        const englishContainer = document.getElementById("data-listE");
        const pureContainer = document.getElementById("data-listP");
        const mechaContainer = document.getElementById("data-listM");
        const chemContainer = document.getElementById("data-listC");
         const physContainer = document.getElementById("data-listPH");
          const frContainer = document.getElementById("data-listF");
           const itlContainer = document.getElementById("data-listI");
            const gerContainer = document.getElementById("data-listG");
             const relContainer = document.getElementById("data-listR");
                         const PSContainer = document.getElementById("data-listPS");
const GEContainer=document.getElementById("data-listGE");

        // Clear containers safely
        if (historyContainer) historyContainer.innerHTML = "";
        if (arabicContainer) arabicContainer.innerHTML = "";
        if (englishContainer) englishContainer.innerHTML = "";
        if (pureContainer) pureContainer.innerHTML = "";
        if (mechaContainer) mechaContainer.innerHTML = "";
if(chemContainer) chemContainer.innerHTML="";
if(physContainer) physContainer.innerHTML="";
if(frContainer) frContainer.innerHTML="";
if(itlContainer) itlContainer.innerHTML="";
if(gerContainer) gerContainer.innerHTML="";
if(relContainer) relContainer.innerHTML="";
if(PSContainer) PSContainer.innerHTML="";
if(GEContainer) GEContainer.innerHTML="",
        // Reusable function to create and append cards
        function createCard(item, targetContainer) {
            if (!targetContainer) return; // Guard clause

            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `        
                <h3>${item.subj} - ${item.timing}</h3>
                <p>${item.stage}</p>
                <a target="_blank" style="text-decoration:none;" href="${item.link}"> 
                    <button class="btn">open here</button>
                </a>
            `;
            targetContainer.appendChild(card);
        }

        // Filter and Render
        allData.forEach(item => {
            if (item.subj === "History") {
                createCard(item, historyContainer);
            } else if (item.subj === "Arabic") {
                createCard(item, arabicContainer);
            } else if (item.subj === "English") {
                createCard(item, englishContainer);
            } else if (item.subj === "Pure Maths") {
                createCard(item, pureContainer);
            } else if (item.subj === "Mechanics") {
                createCard(item, mechaContainer);
            }else if (item.subj === "Physics") {
                createCard(item, physContainer);
            }else if (item.subj === "Chemistry") {
                createCard(item, chemContainer);
            }else if (item.subj === "French") {
                createCard(item, frContainer);
            }else if (item.subj === "Italy") {
                createCard(item, itlContainer);
            }else if (item.subj === "German") {
                createCard(item, gerContainer);
            }else if (item.subj === "Religon") {
                createCard(item, relContainer);
            }else if(item.subj==="Psychology and sociology"){
                 createCard(item, relContainer);
            }else if (item.subj === "Geography") {
                createCard(item, GEContainer);
            }
        });
    })
    .catch(error => console.error("Error fetching data:", error));
