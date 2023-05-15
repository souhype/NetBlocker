const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

chrome.action.onClicked.addListener((tab) => {
    chrome.declarativeNetRequest.getDynamicRules((rules) => {
        let rule = rules.find((r) => r.id === 1);
        if (rule) {
            let enabled = !rule.enabled;
            chrome.declarativeNetRequest.updateDynamicRules(
                { enable: enabled ? [1] : [], disable: enabled ? [] : [1] },
                () => {
                    chrome.tabs.reload(tab.id);
                }
            );
        }
    });
});

document.getElementById("regex-button").addEventListener("click", () => {
    const regex = document.getElementById("regex-input").value || "^$";
    chrome.declarativeNetRequest.updateDynamicRules(
        { addRules: [{ id: 1, priority: 1, action: { type: "block" }, condition: { regexFilter: regex } }], removeRuleIds: [1] },
        () => {
            chrome.tabs.reload();
            chrome.storage.local.set({ regex: regex });
        }
    );
});

chrome.storage.local.get("regex", (data) => {
    if (data.regex) {
        document.getElementById("regex-input").value = data.regex;
    }
});
