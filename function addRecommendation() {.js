function addRecommendation() {
    const recommendationInput = document.getElementById("new_recommendation");
    if (recommendationInput.value.trim() === "") {
        alert("请输入推荐内容！");
        return;
    }

    // 创建新的推荐卡片
    const newRecommendation = document.createElement("div");
    newRecommendation.classList.add("recommendation");
    
    const openQuote = document.createElement("span");
    openQuote.textContent = """;
    
    const closeQuote = document.createElement("span");
    closeQuote.textContent = """;
    
    const recommendationText = document.createTextNode(recommendationInput.value);
    
    newRecommendation.appendChild(openQuote);
    newRecommendation.appendChild(recommendationText);
    newRecommendation.appendChild(closeQuote);
    
    // 添加到推荐区域
    document.querySelector(".all_recommendations").appendChild(newRecommendation);
    
    // 清空输入框
    recommendationInput.value = "";
    
    // 显示成功提示
    showPopup(true);
}

function showPopup(show) {
    const popup = document.getElementById("popup");
    popup.style.display = show ? "block" : "none";
}

// 添加平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
