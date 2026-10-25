/* Pista extra · Inglés para el trabajo (A2–B1)
   Son las 45 frases originales de la app. El 5.º elemento ("w0"…"w44") es su identificador fijo:
   así se conserva el avance que ya tenías. No lo cambies. */
(window.COURSE = window.COURSE || []).push({
  id: "w", name: "Pista extra · Inglés de trabajo", short: "Trabajo", cefr: "A2–B1",
  desc: "Las frases originales de la app: llamadas, cotizaciones, entregas, calidad, juntas y negociación.",
  units: [
    {
      id: "w1", t: "Llamadas y correos",
      goal: "Presentarte en una llamada, pedir que repitan y quedar de mandar información.",
      g: [
        "En el trabajo, Could you…? suena más profesional que Can you…?",
        ["Could you repeat that, please?", "¿Podría repetir, por favor?"],
        "I'll + verbo sirve para comprometerte a hacer algo:",
        ["I'll send you an email. · I'll let you know.", "Le mando un correo. · Yo le aviso."],
        "!Pedir que repitan no es mala educación. Es mucho peor fingir que entendiste."
      ],
      c: [
        ["Hola, soy {name|___}, ingeniero de proyectos en ___.", "Hi, I'm {name|___}, project engineer at ___.", "jai, aim {name|___}, próyect enyiníer at ___", "", "w0"],
        ["¿Puede repetir, por favor?", "Could you repeat that, please?", "cud iú ripít dat, plís", "", "w1"],
        ["¿Puede hablar más despacio, por favor?", "Could you speak more slowly, please?", "cud iú spik mor slóu-li, plís", "", "w2"],
        ["Déjeme revisar.", "Let me check.", "let mi chek", "", "w3"],
        ["Un momento, por favor.", "One moment, please.", "uán móument, plís", "", "w4"],
        ["¿Me lo puede mandar por correo?", "Can you send it to me by email?", "can iú send it tu mi bai iméil", "", "w5"],
        ["Le mando un correo.", "I'll send you an email.", "ail send iú an iméil", "", "w6"],
        ["Yo le aviso.", "I'll let you know.", "ail let iú nóu", "", "w7"]
      ],
      d: [
        ["A", "Good morning, Atlas Supplies.", "Buenos días, Atlas Supplies."],
        ["B", "Hi, I'm {name|Carlos}, project engineer at Grupo Delta.", "Hola, soy {name|Carlos}, ingeniero de proyectos en Grupo Delta."],
        ["A", "Hi {name|Carlos}. How can I help you?", "Hola {name|Carlos}. ¿En qué le ayudo?"],
        ["B", "Sorry, could you speak more slowly, please?", "Perdón, ¿podría hablar más despacio, por favor?"],
        ["A", "Of course. How can I help you?", "Claro. ¿En qué le puedo ayudar?"],
        ["B", "I need some information. Can you send it to me by email?", "Necesito información. ¿Me la puede mandar por correo?"]
      ]
    },
    {
      id: "w2", t: "Cotizaciones y pedidos",
      goal: "Pedir una cotización, preguntar precio y tiempo de entrega, y dar seguimiento.",
      g: [
        "Vocabulario clave: quote (cotización), unit price (precio unitario), lead time (tiempo de entrega), purchase order o PO (orden de compra).",
        "Para fechas límite se usa by:",
        ["We need it by November 15th.", "Lo necesitamos para el 15 de noviembre."],
        "Para dar seguimiento: I'm following up on…",
        "!quote suena 'kuót', parecido a 'cuota', pero significa cotización."
      ],
      c: [
        ["¿Nos puede mandar una cotización de...?", "Could you send us a quote for...?", "cud iú send as a kuót for", "quote = cotización (suena a 'cuota')", "w8"],
        ["¿Cuál es el precio unitario?", "What is the unit price?", "uát is de iúnit prais", "", "w9"],
        ["¿Cuál es el tiempo de entrega?", "What is the lead time?", "uát is de lid taim", "lead time = tiempo de entrega", "w10"],
        ["Lo necesitamos para el 15 de noviembre.", "We need it by November 15th.", "ui nid it bai novémber fiftínz", "", "w11"],
        ["¿Es posible?", "Is that possible?", "is dat pósibol", "", "w12"],
        ["Le doy seguimiento a la orden de compra.", "I'm following up on the purchase order.", "aim fálouing ap on de pérches órder", "PO = purchase order", "w13"],
        ["¿Cuándo se envía?", "When will it ship?", "uén uil it ship", "", "w14"],
        ["¿Me puede mandar el número de rastreo?", "Can you send me the tracking number?", "can iú send mi de tráking námber", "", "w15"]
      ],
      d: [
        ["A", "Atlas Supplies, this is Mary.", "Atlas Supplies, habla Mary."],
        ["B", "Hi Mary. Could you send us a quote for 500 valves?", "Hola Mary. ¿Nos puede mandar una cotización de 500 válvulas?"],
        ["A", "Sure. Which model?", "Claro. ¿Qué modelo?"],
        ["B", "Model V-20. What is the lead time?", "Modelo V-20. ¿Cuál es el tiempo de entrega?"],
        ["A", "About four weeks.", "Unas cuatro semanas."],
        ["B", "We need it by November 15th. Is that possible?", "Lo necesitamos para el 15 de noviembre. ¿Es posible?"]
      ]
    },
    {
      id: "w3", t: "Especificaciones y calidad",
      goal: "Pedir documentos técnicos y reportar problemas con el material.",
      g: [
        "There's a… / There's an… sirve para reportar un problema:",
        ["There's a delay with the shipment. · There's an issue with the part.", "Hay un retraso con el envío. · Hay un problema con la pieza."],
        "issue es más formal y suave que problem. En calidad se habla de root cause (causa raíz) y corrective action (acción correctiva).",
        "!fit = encajar, quedar. The part doesn't fit = la pieza no entra / no ajusta."
      ],
      c: [
        ["¿Cumple con las especificaciones?", "Does it meet the specifications?", "das it mit de spesifikéishons", "", "w16"],
        ["Por favor mande la ficha técnica.", "Please send the datasheet.", "plís send de déita-shit", "", "w17"],
        ["Por favor mande los planos.", "Please send the drawings.", "plís send de dróings", "", "w18"],
        ["Necesitamos el certificado.", "We need the certificate.", "ui nid de sertífiket", "", "w19"],
        ["Recibimos el material.", "We received the material.", "ui risívd de matírial", "", "w20"],
        ["Hay un retraso con el envío.", "There's a delay with the shipment.", "ders a diléi uiz de shípment", "", "w21"],
        ["Hay un problema con la pieza.", "There's an issue with the part.", "ders an íshu uiz de part", "", "w22"],
        ["La pieza no encaja.", "The part doesn't fit.", "de part dásent fit", "", "w23"],
        ["Encontramos un defecto.", "We found a defect.", "ui fáund a dífect", "", "w24"],
        ["¿Cuál es la causa raíz?", "What's the root cause?", "uáts de rut cos", "", "w25"],
        ["¿Cuál es la acción correctiva?", "What's the corrective action?", "uáts de coréctiv ákshon", "", "w26"]
      ],
      d: [
        ["A", "Hi {name|Carlos}, did you receive the parts?", "Hola {name|Carlos}, ¿recibiste las piezas?"],
        ["B", "Yes, we received the material, but there's an issue with the part.", "Sí, recibimos el material, pero hay un problema con la pieza."],
        ["A", "Oh no. What's the problem?", "¿Qué pasó?"],
        ["B", "The part doesn't fit. We found a defect in the thread.", "La pieza no encaja. Encontramos un defecto en la cuerda."],
        ["A", "I'm sorry. We'll check it today.", "Lo siento. Lo revisamos hoy."],
        ["B", "Thanks. What's the corrective action?", "Gracias. ¿Cuál es la acción correctiva?"]
      ]
    },
    {
      id: "w4", t: "Juntas",
      goal: "Confirmar lo que entendiste, dirigir puntos y cerrar una junta.",
      g: [
        "Let's + verbo = 'vamos a…' o 'hagamos…'. Muy útil para dirigir una junta.",
        ["Let's go over the project status.", "Revisemos el estatus del proyecto."],
        "Para confirmar sin pena: Just to confirm…",
        "!go over = revisar algo con detalle (un documento, un plan)."
      ],
      c: [
        ["Solo para confirmar, ¿dice que...?", "Just to confirm, you're saying that...?", "yast tu confírm, iúr séying dat", "", "w27"],
        ["¿Puede compartir su pantalla?", "Can you share your screen?", "can iú sher iór scrin", "", "w28"],
        ["Revisemos el estatus del proyecto.", "Let's go over the project status.", "lets góu óuver de próyect stéitus", "", "w29"],
        ["Siguiente punto.", "Next point.", "nekst póint", "", "w30"],
        ["Los siguientes pasos son...", "The next steps are...", "de nekst steps ar", "", "w31"],
        ["Le mando un resumen.", "I'll send you a summary.", "ail send iú a sámari", "", "w32"],
        ["Gracias por conectarse.", "Thanks for joining.", "zanks for yóining", "", "w33"]
      ],
      d: [
        ["A", "Okay, everyone is here.", "Bien, ya estamos todos."],
        ["B", "Great. Let's go over the project status. Can you share your screen?", "Perfecto. Revisemos el estatus del proyecto. ¿Puedes compartir tu pantalla?"],
        ["A", "Sure. We're two weeks behind schedule.", "Claro. Vamos dos semanas atrasados."],
        ["B", "Just to confirm, you're saying that the delivery is in December?", "Solo para confirmar, ¿dices que la entrega es en diciembre?"],
        ["A", "Yes, that's right.", "Sí, así es."],
        ["B", "Okay. I'll send you a summary. Thanks for joining.", "Bien. Les mando un resumen. Gracias por conectarse."]
      ]
    },
    {
      id: "w5", t: "Vocabulario de proyecto y negociación",
      goal: "Usar palabras clave de proyecto y pedir mejores condiciones.",
      g: [
        "Palabras que aparecen en todas las juntas: deadline (fecha límite), scope (alcance), deliverables (entregables), milestone (hito), approval (aprobación).",
        ["That's out of scope.", "Eso está fuera del alcance."],
        "Para negociar con amabilidad, usa Can you…? e Is there…?",
        ["Can you improve the price? · Is there a discount for volume?", "¿Puede mejorar el precio? · ¿Hay descuento por volumen?"]
      ],
      c: [
        ["fecha límite", "deadline", "dédlain", "The deadline is Friday.", "w34"],
        ["aprobación", "approval", "aprúval", "We're waiting for approval.", "w35"],
        ["alcance", "scope", "scóup", "That's out of scope.", "w36"],
        ["entregables", "deliverables", "delívarabols", "What are the deliverables?", "w37"],
        ["hito", "milestone", "máilstoun", "We reached the first milestone.", "w38"],
        ["envío", "shipment", "shípment", "'ship' = barco que trae tu pedido", "w39"],
        ["¿Hay descuento por volumen?", "Is there a discount for volume?", "is der a díscaunt for vólium", "", "w40"],
        ["¿Puede mejorar el precio?", "Can you improve the price?", "can iú imprúv de prais", "", "w41"],
        ["¿Puede entregar antes?", "Can you deliver earlier?", "can iú delíver érlier", "", "w42"],
        ["Eso nos funciona.", "That works for us.", "dat uórks for as", "", "w43"],
        ["No hay problema, yo me encargo.", "No problem, I'll take care of it.", "nóu próblem, ail teik ker of it", "", "w44"]
      ],
      d: [
        ["A", "Here's our quote. The unit price is twelve dollars.", "Aquí está nuestra cotización. El precio unitario es de doce dólares."],
        ["B", "Thanks. Is there a discount for volume?", "Gracias. ¿Hay descuento por volumen?"],
        ["A", "For more than a thousand pieces, it's eleven dollars.", "Para más de mil piezas, son once dólares."],
        ["B", "That works for us. Can you deliver earlier?", "Eso nos funciona. ¿Puede entregar antes?"],
        ["A", "I'll check with production. What's your deadline?", "Lo reviso con producción. ¿Cuál es su fecha límite?"],
        ["B", "The deadline is Friday the twentieth.", "La fecha límite es el viernes 20."]
      ]
    }
  ]
});
