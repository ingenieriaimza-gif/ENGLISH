/* «Haz lo que oyes» (Respuesta Física Total, TPR, de James Asher): órdenes en inglés que se hacen con el cuerpo.
   Van de lo más fácil a lo más difícil; la app enseña unas pocas nuevas cada vez (primero las muestra con su dibujo,
   luego solo las dice) y juega «Simón dice» con las que ya conoces.
   Cada una: id fijo (no lo cambies: ahí se guarda el avance), inglés, español, pronunciación, dibujo. */
window.TPR = [
  // 1 · el cuerpo y moverte
  { id: "t1", en: "Stand up.", es: "Ponte de pie.", pron: "stand ap", em: "🧍" },
  { id: "t2", en: "Sit down.", es: "Siéntate.", pron: "sit dáun", em: "🪑" },
  { id: "t3", en: "Clap your hands.", es: "Aplaude.", pron: "clap iór jands", em: "👏" },
  { id: "t4", en: "Raise your hand.", es: "Levanta la mano.", pron: "réis iór jand", em: "🙋" },
  { id: "t5", en: "Touch your nose.", es: "Tócate la nariz.", pron: "tach iór nóus", em: "👃" },
  { id: "t6", en: "Open your mouth.", es: "Abre la boca.", pron: "óupen iór máuz", em: "😮" },
  { id: "t7", en: "Close your eyes.", es: "Cierra los ojos.", pron: "clóus iór áis", em: "😌" },
  { id: "t8", en: "Open your eyes.", es: "Abre los ojos.", pron: "óupen iór áis", em: "👀" },
  { id: "t9", en: "Jump.", es: "Salta.", pron: "yamp", em: "🦘" },
  { id: "t10", en: "Walk.", es: "Camina.", pron: "uók", em: "🚶" },
  { id: "t11", en: "Stop.", es: "Detente.", pron: "stap", em: "🛑" },
  // 2 · más partes del cuerpo y direcciones
  { id: "t12", en: "Touch your head.", es: "Tócate la cabeza.", pron: "tach iór jed", em: "🙆" },
  { id: "t13", en: "Touch your ears.", es: "Tócate las orejas.", pron: "tach iór íers", em: "👂" },
  { id: "t14", en: "Touch your mouth.", es: "Tócate la boca.", pron: "tach iór máuz", em: "👄" },
  { id: "t15", en: "Touch your knees.", es: "Tócate las rodillas.", pron: "tach iór niis", em: "🦵" },
  { id: "t16", en: "Touch your feet.", es: "Tócate los pies.", pron: "tach iór fiit", em: "🦶" },
  { id: "t17", en: "Look up.", es: "Mira hacia arriba.", pron: "luk ap", em: "👀⬆️" },
  { id: "t18", en: "Look down.", es: "Mira hacia abajo.", pron: "luk dáun", em: "👀⬇️" },
  { id: "t19", en: "Turn around.", es: "Date la vuelta.", pron: "tern aráund", em: "🔄" },
  { id: "t20", en: "Wave goodbye.", es: "Di adiós con la mano.", pron: "uéiv gudbái", em: "👋" },
  { id: "t21", en: "Smile.", es: "Sonríe.", pron: "smáil", em: "😁" },
  { id: "t22", en: "Point to the door.", es: "Señala la puerta.", pron: "póint tu de dor", em: "👉🚪" },
  // 3 · con números, derecha e izquierda
  { id: "t23", en: "Clap three times.", es: "Aplaude tres veces.", pron: "clap zri táims", em: "👏👏👏" },
  { id: "t24", en: "Jump two times.", es: "Salta dos veces.", pron: "yamp tu táims", em: "🦘🦘" },
  { id: "t25", en: "Show me five fingers.", es: "Enséñame cinco dedos.", pron: "shou mi fáiv fíngers", em: "🖐️" },
  { id: "t26", en: "Raise your right hand.", es: "Levanta la mano derecha.", pron: "réis iór ráit jand", em: "🙋➡️" },
  { id: "t27", en: "Raise your left hand.", es: "Levanta la mano izquierda.", pron: "réis iór left jand", em: "⬅️🙋" },
  { id: "t28", en: "Raise both hands.", es: "Levanta las dos manos.", pron: "réis bouz jands", em: "🙌" },
  { id: "t29", en: "Cross your arms.", es: "Cruza los brazos.", pron: "cras iór arms", em: "🙅" },
  { id: "t30", en: "Give me a thumbs up.", es: "Pon el pulgar arriba.", pron: "guiv mi a zams ap", em: "👍" },
  { id: "t31", en: "Point up.", es: "Señala hacia arriba.", pron: "póint ap", em: "☝️" },
  { id: "t32", en: "Point down.", es: "Señala hacia abajo.", pron: "póint dáun", em: "👇" },
  // 4 · dos cosas seguidas
  { id: "t33", en: "Stand up and turn around.", es: "Ponte de pie y date la vuelta.", pron: "stand ap and tern aráund", em: "🧍🔄" },
  { id: "t34", en: "Touch your nose and close your eyes.", es: "Tócate la nariz y cierra los ojos.", pron: "tach iór nóus and clóus iór áis", em: "👃😌" },
  { id: "t35", en: "Clap two times, then sit down.", es: "Aplaude dos veces y luego siéntate.", pron: "clap tu táims, den sit dáun", em: "👏👏🪑" },
  { id: "t36", en: "Raise your right hand and smile.", es: "Levanta la mano derecha y sonríe.", pron: "réis iór ráit jand and smáil", em: "🙋😁" },
  { id: "t37", en: "Walk to the door and stop.", es: "Camina hasta la puerta y detente.", pron: "uók tu de dor and stap", em: "🚶🚪🛑" },
  { id: "t38", en: "Look up, then look down.", es: "Mira hacia arriba y luego hacia abajo.", pron: "luk ap, den luk dáun", em: "👀⬆️⬇️" }
];
