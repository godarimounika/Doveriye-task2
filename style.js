
document.addEventListener("DOMContentLoaded", function() {
    const cardsWrapper = document.querySelector(".cards-wrapper");

    // Function to create a card
    function createCard(cardClass, jobType, rate, jobTitle, company, skills, description) {
        const card = document.createElement("div");
        card.classList.add(cardClass);

        // Header
        const header = document.createElement("div");
        header.classList.add(`${cardClass}-header`);
        
        const jobTypeText = document.createElement("p");
        jobTypeText.textContent = jobType;
        header.appendChild(jobTypeText);
        
        const rateDiv = document.createElement("div");
        const rateText = document.createElement("h2");
        rateText.textContent = rate;
        rateDiv.appendChild(rateText);
        header.appendChild(rateDiv);
        
        card.appendChild(header);

        // Job Title
        const title = document.createElement("h2");
        title.textContent = jobTitle;
        card.appendChild(title);

        // Company Info
        const iconsDiv = document.createElement("div");
        iconsDiv.classList.add("icons");
        
        const buildingIcon = document.createElement("i");
        buildingIcon.classList.add("fa-solid", "fa-building");
        iconsDiv.appendChild(buildingIcon);
        
        const companyName = document.createElement("span");
        companyName.textContent = company;
        iconsDiv.appendChild(companyName);
        
        card.appendChild(iconsDiv);

        // Skills
        const skillsDiv = document.createElement("div");
        skillsDiv.classList.add("skills");
        
        skills.forEach(skill => {
            const skillSpan = document.createElement("span");
            skillSpan.textContent = skill;
            if (skill.startsWith("+")) skillSpan.id = "num"; // Add id="num" for the last skill
            skillsDiv.appendChild(skillSpan);
        });
        
        card.appendChild(skillsDiv);

        // Description
        const descriptionP = document.createElement("p");
        descriptionP.id = "text";
        descriptionP.textContent = description;
        card.appendChild(descriptionP);

        // Divider
        const hr = document.createElement("hr");
        card.appendChild(hr);

        // View Job Text
        const viewJob = document.createElement("h2");
        viewJob.textContent = "VIEW JOB";
        card.appendChild(viewJob);

        // Append the card to the wrapper
        cardsWrapper.appendChild(card);
    }

    // Create and append two cards
    createCard("card1", "hourly", "$55/hr", "UI/UX Designer", "Epic Coders", ["UI", "UX", "PhotoShop", "+4"], "We are looking for an experienced UI and UX Designer to work on our new projects...");
    createCard("card2", "partTime", "$32/hr", "Branding Experts", "Hub staff", ["Php", "Android", "iOS", "+2"], "Looking for an experienced person to help us with rebranding our business. We are interested in a...");
});
