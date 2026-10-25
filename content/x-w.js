/* Pista extra · Inglés de trabajo · vocabulario extra (v) y lectura (r). Formato en x-k.js */
Object.assign(window.EXTRA = window.EXTRA || {}, {
  w1: {
    v: [
      ["¿Con quién hablo?", "Who am I speaking with?", "ju am ai spíiking uíz", ""],
      ["Le llamo de parte de Grupo Delta.", "I'm calling from Grupo Delta.", "aim cóling from grúpo délta", ""],
      ["¿Tiene un minuto?", "Do you have a minute?", "du iú jav a mínit", ""],
      ["Perdón, no le escuché bien.", "Sorry, I didn't catch that.", "sóri, ai dídent cach dat", ""],
      ["¿Me lo puede deletrear?", "Could you spell that, please?", "cud iú spel dat, plís", ""],
      ["Le confirmo por correo.", "I'll confirm by email.", "ail confírm bai iméil", ""],
      ["Quedo atento.", "I look forward to hearing from you.", "ai luk fóruard tu jíring from iú", "Al final de un correo."],
      ["Adjunto el archivo.", "Please find the file attached.", "plís fáind de fáil atácht", ""],
      ["Con copia a mi jefe.", "I'm copying my manager.", "aim cópiing mai mánayer", "cc = copia."],
      ["¿Recibió mi correo?", "Did you get my email?", "did iú guet mai iméil", ""],
      ["Le reenvío el correo.", "I'll forward you the email.", "ail fóruard iú di iméil", ""],
      ["Disculpe la demora.", "Sorry for the delay.", "sóri for de diléi", ""],
      ["Gracias por su pronta respuesta.", "Thanks for your quick reply.", "zenks for iór kuík riplái", ""],
      ["Que tenga buen día.", "Have a great day.", "jav a gréit déi", ""],
      ["Saludos cordiales,", "Best regards,", "best rigárds", ""]
    ],
    r: {
      t: "A follow-up email",
      en: "Hi Mary,\nThanks for your call this morning. Sorry I didn't catch everything; the connection was bad.\nJust to confirm: you need the drawings and the datasheet for model V-20 by Friday. I'm copying my manager, Luis, on this email.\nPlease find the quote attached. I'll let you know about the lead time tomorrow.\nBest regards,\n{name|Carlos}",
      es: "Hola Mary:\nGracias por tu llamada de esta mañana. Perdón por no entender todo; la conexión estaba mala.\nSolo para confirmar: necesitas los planos y la ficha técnica del modelo V-20 para el viernes. Le pongo copia a mi jefe, Luis.\nAdjunto la cotización. Mañana te aviso sobre el tiempo de entrega.\nSaludos cordiales,\n{name|Carlos}",
      q: [
        ["Why didn't {name|Carlos} understand everything?", ["Mary spoke too fast", "The connection was bad", "He was busy"], 1],
        ["What does Mary need by Friday?", ["The drawings and the datasheet", "A new price", "A meeting"], 0],
        ["What will {name|Carlos} send tomorrow?", ["The quote", "The drawings", "Information about the lead time"], 2]
      ]
    }
  },
  w2: {
    v: [
      ["pedido mínimo", "minimum order", "mínimum órder", ""],
      ["precio por volumen", "volume pricing", "vólium práising", ""],
      ["condiciones de pago", "payment terms", "péiment terms", ""],
      ["a 30 días", "net 30", "net zérti", "Pago a 30 días."],
      ["factura", "invoice", "ínvois", ""],
      ["anticipo", "down payment", "dáun péiment", ""],
      ["envío incluido", "shipping included", "shíping inclúded", ""],
      ["¿La cotización incluye el envío?", "Does the quote include shipping?", "das de kuót inclúd shíping", ""],
      ["¿Cuánto tiempo es válida la cotización?", "How long is the quote valid?", "jáu long is de kuót válid", ""],
      ["Necesitamos 500 piezas.", "We need 500 pieces.", "ui niid fáiv jándred píises", ""],
      ["El pedido está confirmado.", "The order is confirmed.", "di órder is confírmd", ""],
      ["¿Hay inventario?", "Do you have it in stock?", "du iú jav it in stok", ""],
      ["Está agotado.", "It's out of stock.", "its áut of stok", ""],
      ["Le mando la orden de compra hoy.", "I'll send you the PO today.", "ail send iú de pi-óu tudéi", ""],
      ["¿Cuál es la fecha estimada de entrega?", "What's the estimated delivery date?", "uáts di éstimeited delívery déit", ""]
    ],
    r: {
      t: "Quote request",
      en: "Dear Atlas Supplies,\nWe would like a quote for 500 stainless steel valves, model V-20. Please include the unit price, the lead time and the payment terms.\nWe need the parts by November 15th. Is that possible? Also, please tell us if the price includes shipping to Monterrey.\nIf you have the parts in stock, we can send the purchase order this week.\nThank you,\n{name|Carlos} {last|Ruiz}, Project Engineer",
      es: "Estimados Atlas Supplies:\nNos gustaría una cotización de 500 válvulas de acero inoxidable, modelo V-20. Por favor incluyan el precio unitario, el tiempo de entrega y las condiciones de pago.\nNecesitamos las piezas para el 15 de noviembre. ¿Es posible? Además, por favor díganos si el precio incluye el envío a Monterrey.\nSi tienen las piezas en inventario, podemos mandar la orden de compra esta semana.\nGracias,\n{name|Carlos} {last|Ruiz}, ingeniero de proyectos",
      q: [
        ["How many valves does {name|Carlos} need?", ["50", "500", "5,000"], 1],
        ["What does he want to know about shipping?", ["If the price includes shipping to Monterrey", "How long shipping takes", "Which company ships"], 0],
        ["When can he send the purchase order?", ["On November 15th", "Next month", "This week, if the parts are in stock"], 2]
      ]
    }
  },
  w3: {
    v: [
      ["tolerancia", "tolerance", "tólerans", ""],
      ["fuera de especificación", "out of spec", "áut of spek", ""],
      ["inspección", "inspection", "inspékshon", ""],
      ["muestra", "sample", "sámpol", ""],
      ["lote", "batch", "bach", ""],
      ["rechazo", "rejection", "riyékshon", ""],
      ["reclamo de calidad", "quality claim", "kuáliti cléim", ""],
      ["Las medidas no coinciden.", "The dimensions don't match.", "de diménshons dóunt mach", ""],
      ["Rechazamos el lote.", "We rejected the batch.", "ui riyékted de bach", ""],
      ["Necesitamos un reporte 8D.", "We need an 8D report.", "ui niid an éit-di ripórt", ""],
      ["¿Cuándo pueden reemplazar las piezas?", "When can you replace the parts?", "uén can iú ripléis de parts", ""],
      ["Adjunto fotos del defecto.", "I'm attaching photos of the defect.", "aim atáching fóutous of de dífect", ""],
      ["Es un problema recurrente.", "It's a recurring issue.", "its a rikéring íshu", ""],
      ["Vamos a contener el material.", "We're going to quarantine the material.", "uír góuing tu kuórantin de matírial", ""],
      ["¿Qué van a hacer para que no vuelva a pasar?", "What will you do to prevent it from happening again?", "uát uíl iú du tu privént it from jápening aguén", ""]
    ],
    r: {
      t: "Quality claim",
      en: "Dear Mr. Brown,\nYesterday we received batch 4521. During the inspection, we found that 30 out of 200 parts are out of spec. The thread diameter is outside the tolerance, so the parts don't fit.\nWe rejected the batch and quarantined the material. I'm attaching photos of the defect and the inspection report.\nThis is the second time this month. Please send us an 8D report with the root cause and the corrective action, and tell us when you can replace the parts.\nBest regards,\n{name|Carlos} {last|Ruiz}",
      es: "Estimado Sr. Brown:\nAyer recibimos el lote 4521. Durante la inspección encontramos que 30 de 200 piezas están fuera de especificación. El diámetro de la cuerda está fuera de tolerancia, así que las piezas no encajan.\nRechazamos el lote y pusimos el material en cuarentena. Adjunto fotos del defecto y el reporte de inspección.\nEs la segunda vez este mes. Por favor envíenos un reporte 8D con la causa raíz y la acción correctiva, y díganos cuándo pueden reemplazar las piezas.\nSaludos cordiales,\n{name|Carlos} {last|Ruiz}",
      q: [
        ["How many parts were out of spec?", ["200", "30", "4521"], 1],
        ["What is the problem with the parts?", ["The thread diameter is outside the tolerance", "They are the wrong color", "They arrived late"], 0],
        ["What does {name|Carlos} ask for?", ["A discount", "A new supplier", "An 8D report and a replacement date"], 2]
      ]
    }
  },
  w4: {
    v: [
      ["agenda (de la junta)", "agenda", "ayénda", ""],
      ["minuta", "meeting minutes", "míting mínits", ""],
      ["acuerdos", "action items", "ákshon áitems", ""],
      ["responsable", "owner", "óuner", ""],
      ["¿Me escuchan bien?", "Can everyone hear me?", "can évriuan jir mi", ""],
      ["Estás en silencio.", "You're on mute.", "iór on miút", ""],
      ["Se congeló tu pantalla.", "Your screen froze.", "iór scriin fróus", ""],
      ["Démosle unos minutos a los demás.", "Let's give the others a few minutes.", "lets guiv di áders a fiú mínits", ""],
      ["Empecemos con el primer punto.", "Let's start with the first item.", "lets start uíz de ferst áitem", ""],
      ["¿Alguien tiene algo que agregar?", "Does anyone have anything to add?", "das éniuan jav énizing tu ad", ""],
      ["Lo vemos fuera de la junta.", "Let's discuss it offline.", "lets diskás it óflain", ""],
      ["Vamos atrasados.", "We're behind schedule.", "uír bijáind skéyul", ""],
      ["Vamos a tiempo.", "We're on track.", "uír on trak", ""],
      ["¿Quién se encarga de eso?", "Who's going to take care of that?", "jus góuing tu teik ker of dat", ""],
      ["Agendemos otra junta.", "Let's schedule a follow-up meeting.", "lets skéyul a fálou-ap míting", ""]
    ],
    r: {
      t: "Meeting minutes",
      en: "Project status meeting, Monday 9:00 a.m.\nAttendees: {name|Carlos} (project engineer), Mary (supplier), Luis (manager).\n1. Project status: we are two weeks behind schedule because of the supplier's quality problem.\n2. Next steps: the supplier will replace the parts by Friday. {name|Carlos} will inspect the new batch on Monday.\n3. Action items: Mary will send the 8D report by Wednesday. Luis will inform the client about the new delivery date.\nNext meeting: Monday at 9:00 a.m.",
      es: "Junta de estatus del proyecto, lunes 9:00 a. m.\nAsistentes: {name|Carlos} (ingeniero de proyectos), Mary (proveedora), Luis (gerente).\n1. Estatus del proyecto: vamos dos semanas atrasados por el problema de calidad del proveedor.\n2. Siguientes pasos: el proveedor reemplazará las piezas para el viernes. {name|Carlos} inspeccionará el nuevo lote el lunes.\n3. Acuerdos: Mary enviará el reporte 8D para el miércoles. Luis le informará al cliente la nueva fecha de entrega.\nPróxima junta: lunes a las 9:00 a. m.",
      q: [
        ["Why is the project behind schedule?", ["The client changed the design", "Because of the supplier's quality problem", "{name|Carlos} was sick"], 1],
        ["Who will inform the client?", ["Luis", "Mary", "{name|Carlos}"], 0],
        ["When will Mary send the 8D report?", ["On Monday", "On Friday", "By Wednesday"], 2]
      ]
    }
  },
  w5: {
    v: [
      ["presupuesto", "budget", "báyet", ""],
      ["cronograma", "schedule", "skéyul", ""],
      ["riesgo", "risk", "risk", ""],
      ["contrato", "contract", "cóntrakt", ""],
      ["proveedor", "supplier", "sapláier", ""],
      ["cliente", "client", "cláient", ""],
      ["arranque del proyecto", "kick-off", "kik-of", ""],
      ["entregar a tiempo", "deliver on time", "delíver on taim", ""],
      ["dentro del presupuesto", "within budget", "uidín báyet", ""],
      ["Necesitamos la aprobación del cliente.", "We need the client's approval.", "ui niid de cláients aprúval", ""],
      ["El alcance cambió.", "The scope changed.", "de scóup chéinchd", ""],
      ["¿Podemos llegar a un acuerdo?", "Can we reach an agreement?", "can ui riich an agríiment", ""],
      ["Es nuestra mejor oferta.", "That's our best offer.", "dats áuer best ófer", ""],
      ["Lo tengo que consultar.", "I need to check with my team.", "ai niid tu chek uíz mai tim", ""],
      ["Trato hecho.", "It's a deal.", "its a diil", ""]
    ],
    r: {
      t: "Project update",
      en: "The new production line project is going well. We reached the first milestone last week: the machines are installed.\nHowever, the client changed the scope. Now they want two more stations. This is out of the original budget, so we need their approval before we continue.\nThe supplier offered a ten percent discount for volume and they can deliver earlier, so the extra stations will not affect the deadline.\nNext step: present the new quote to the client on Thursday.",
      es: "El proyecto de la nueva línea de producción va bien. La semana pasada alcanzamos el primer hito: las máquinas están instaladas.\nSin embargo, el cliente cambió el alcance. Ahora quiere dos estaciones más. Esto está fuera del presupuesto original, así que necesitamos su aprobación antes de continuar.\nEl proveedor ofreció un diez por ciento de descuento por volumen y puede entregar antes, así que las estaciones extra no afectarán la fecha límite.\nSiguiente paso: presentar la nueva cotización al cliente el jueves.",
      q: [
        ["What was the first milestone?", ["The client's approval", "The machines are installed", "The new quote"], 1],
        ["Why do they need the client's approval?", ["The extra stations are out of the original budget", "The supplier is late", "The machines don't work"], 0],
        ["What did the supplier offer?", ["A longer lead time", "Free shipping", "A ten percent discount and earlier delivery"], 2]
      ]
    }
  }
});
