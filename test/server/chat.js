// api/chat.js

export default async function handler(req, res) {
    const { message } = req.body;
  
    try {
      const geminiRes = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + process.env.GEMINI_API_KEY,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: message }]
              }
            ]
          })
        }
      );
  
      const data = await geminiRes.json();
  
      if (geminiRes.ok) {
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ Gemini gave no reply.";
        return res.status(200).json({ reply });
      } else {
        console.error("🔥 Gemini Error:", data);
        return res.status(500).json({ error: "Gemini failed." });
      }
  
    } catch (err) {
      console.error("🔥 Server Error:", err.message);
      return res.status(500).json({ error: "Server exploded 💥" });
    }
  }
  