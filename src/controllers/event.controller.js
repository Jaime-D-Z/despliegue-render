const pool = require("../db");

exports.saveEvent = async (req, res) => {
  try {
    const { userId, anonymousId, eventName } = req.body;

    if (!eventName) {
      return res.status(400).json({ error: "eventName es requerido" });
    }

    if (!userId && !anonymousId) {
      return res
        .status(400)
        .json({ error: "Se requiere userId o anonymousId" });
    }

    await pool.query(
      "INSERT INTO events (user_id, anonymous_id, event_name) VALUES ($1,$2,$3)",
      [userId || null, anonymousId || null, eventName],
    );

    res.status(201).json({ message: "Evento guardado exitosamente" });
  } catch (error) {
    console.error("Error al guardar evento:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
