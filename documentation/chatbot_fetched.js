// ---- Backend call (simple demo) ----
console.debug("chatbot.js loaded");

/*async function sendMessageToBot(message) {
  /*  return "Echo1: " + message;

 Later, when you connect to a backend:  */
 /*
  try {
    const res = await fetch("http://localhost:8001/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.reply ?? "(No reply field returned)";
  } catch (err) {
    console.error("sendMessageToBot error:", err);
    return "Sorry, I couldn't reach the server.";
  }

}
*/
async function sendMessageToBot(message) {
  try {
    const res = await fetch("http://localhost:8001/health", {
      method: "GET",
      headers: {
        "Accept": "application/json",
      }
    });

    if (!res.ok) {
      return `Server error: ${res.status}`;
    }

    // If response is JSON
    let data;
    try {
      data = await res.json();
      return data.reply || JSON.stringify(data);
    } catch {
      // If response is plain text
      const text = await res.text();
      return text;
    }

  } catch (err) {
    console.error("Chatbot fetch failed:", err);
    return "Failed to reach backend at http://localhost:8001/health";
  }
}

// ---- Frontend wiring ----
function setupChat() {
  const input = document.getElementById("chat-input");
  const log = document.getElementById("chat-log");
  if (!input || !log) return;

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) return;

      log.innerHTML += `<div><b>You:</b> ${escapeHtml(value)}</div>`;
      input.value = "";

      const typingId = `t${Date.now()}`;
      log.innerHTML += `<div id="${typingId}"><i>Bot is typing…</i></div>`;
      log.scrollTop = log.scrollHeight;

      const reply = await sendMessageToBot(value);

      const typingEl = document.getElementById(typingId);
      if (typingEl) typingEl.remove();

      log.innerHTML += `<div><b>Bot:</b> ${escapeHtml(reply)}</div>`;
      log.scrollTop = log.scrollHeight;
    }
  });
}

// Delegated listener: handles Enter on dynamically inserted `#chat-input`
document.addEventListener("keydown", async (e) => {
  if (e.key !== "Enter") return;
  const target = e.target;
  if (!target || target.id !== "chat-input") return;
  e.preventDefault();

  const input = /** @type {HTMLInputElement} */ (target);
  const value = input.value.trim();
  if (!value) return;

  const log = document.getElementById("chat-log");
  if (log) log.innerHTML += `<div><b>You:</b> ${escapeHtml(value)}</div>`;
  input.value = "";

  const typingId = `t${Date.now()}`;
  if (log) {
    log.innerHTML += `<div id="${typingId}"><i>Bot is typing…</i></div>`;
    log.scrollTop = log.scrollHeight;
  }

  const reply = await sendMessageToBot(value);

  const typingEl = document.getElementById(typingId);
  if (typingEl) typingEl.remove();

  if (log) {
    log.innerHTML += `<div><b>Bot:</b> ${escapeHtml(reply)}</div>`;
    log.scrollTop = log.scrollHeight;
  }
});