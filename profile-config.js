// --- CONFIGURABLE PROFILE DATA ---
const profileConfig = {
    bannerUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809", // Banner image link
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb", // Profile picture link
    name: "Ishi Anand",                                                       // Tera Naam
    bio: "✨ Capturing moments, memories, and milestones along the way.",       // Bio text
    extraInfo: ["📍 Bihar, India", "📁 Daily Event Feed"]                     // Extra info tags
};

function loadProfileHeader() {
    const card = document.getElementById('profileCard');
    const banner = document.getElementById('profileBanner');
    const avatar = document.getElementById('profileAvatar');
    const nameEl = document.getElementById('profileName');
    const bioEl = document.getElementById('profileBio');
    const extraEl = document.getElementById('profileExtra');

    if (!profileConfig.name && !profileConfig.bio && !profileConfig.bannerUrl) {
        card.style.display = 'none';
        return;
    }

    if (profileConfig.bannerUrl) {
        banner.style.backgroundImage = `url('${profileConfig.bannerUrl}')`;
    } else {
        banner.style.display = 'none';
    }

    if (profileConfig.avatarUrl) {
        avatar.src = profileConfig.avatarUrl;
    } else {
        avatar.style.display = 'none';
    }

    if (profileConfig.name) {
        nameEl.textContent = profileConfig.name;
    } else {
        nameEl.style.display = 'none';
    }

    if (profileConfig.bio) {
        bioEl.textContent = profileConfig.bio;
    } else {
        bioEl.style.display = 'none';
    }

    if (profileConfig.extraInfo && profileConfig.extraInfo.length > 0) {
        extraEl.innerHTML = profileConfig.extraInfo.map(info => `<span>${info}</span>`).join('');
    } else {
        extraEl.style.display = 'none';
    }
}

loadProfileHeader();