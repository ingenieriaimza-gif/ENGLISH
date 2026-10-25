/* Kínder · vocabulario extra (v) y lectura (r) de cada unidad
   v: ["Español","English","pronunciación","nota"]  — se agregan DESPUÉS de las frases base de la unidad
   r: { t: título, en: texto (párrafos con \n), es: traducción, q: [[pregunta, [opciones], índice correcto]] }
   Para agregar frases nuevas, ponlas AL FINAL de v (así no se mueve el avance guardado). */
Object.assign(window.EXTRA = window.EXTRA || {}, {
  k1: {
    v: [
      ["¿Cómo se escribe?", "How do you spell it?", "jáu du iú spel it", ""],
      ["mayúscula", "capital letter", "cápital léter", ""],
      ["minúscula", "lowercase letter", "lóuerkeis léter", ""],
      ["punto (en un correo)", "dot", "dat", "gmail dot com"],
      ["guion bajo", "underscore", "ánderskor", "ana_lopez"],
      ["guion", "dash", "dash", ""],
      ["doble L", "double L", "dábol el", "Para letras repetidas: double."],
      ["B de «boy»", "B as in boy", "bi as in bói", "Para aclarar una letra: «as in» + una palabra en inglés con esa letra (B as in boy, V as in victory). «Burro» no se usa."],
      ["¿Con B o con V?", "With a B or a V?", "uíz a bi or a vi", ""],
      ["letra", "letter", "léter", "También significa carta."],
      ["palabra", "word", "uérd", ""],
      ["nombre", "first name", "ferst néim", ""],
      ["apellido", "last name", "last néim", ""],
      ["¿Me lo repite, por favor?", "Can you repeat that, please?", "can iú ripít dat, plís", ""],
      ["Es correcto.", "That's correct.", "dats corréct", ""]
    ],
    r: {
      t: "My name",
      en: "Hello! My name is {name|Ana}. {nameS|A-N-A}.\nMy last name is {last|Ruiz}. {lastS|R-U-I-Z}.\nMy email is {email|ana dot ruiz} at gmail dot com.",
      es: "¡Hola! Me llamo {name|Ana}. {nameS|A-N-A}.\nMi apellido es {last|Ruiz}. {lastS|R-U-I-Z}.\nMi correo es {email|ana punto ruiz} arroba gmail punto com.",
      q: [
        ["¿Cuál es su nombre?", ["{name|Ana}", "{last|Ruiz}", "Gmail"], 0],
        ["¿Cuál es su apellido?", ["{name|Ana}", "{last|Ruiz}", "Lopez"], 1],
        ["En un correo, 'dot' significa…", ["arroba", "guion", "punto"], 2]
      ]
    }
  },
  k2: {
    v: [
      ["este, esta", "this", "dis", "TH suave."],
      ["eso, esa", "that", "dat", ""],
      ["jueves", "Thursday", "zérsdei", ""],
      ["pulgar", "thumb", "zam", "La b no suena."],
      ["tienda", "shop", "shap", ""],
      ["pescado", "fish", "fish", "SH al final."],
      ["silla", "chair", "cher", "CH igual que en español."],
      ["queso", "cheese", "chiis", "i larga."],
      ["camioneta", "van", "van", "V con los dientes."],
      ["voz", "voice", "vóis", ""],
      ["sentarse", "sit", "sit", "i corta."],
      ["asiento", "seat", "siit", "i larga."],
      ["cama", "bed", "bed", ""],
      ["malo", "bad", "bad", "a abierta, casi 'ea'."],
      ["junio, julio", "June, July", "yun, yulái", "J suena 'y' fuerte."]
    ],
    r: {
      t: "Three things",
      en: "This is my shop. I sell fish and cheese.\nI think my shop is very nice.\nThank you for visiting!",
      es: "Esta es mi tienda. Vendo pescado y queso.\nCreo que mi tienda es muy bonita.\n¡Gracias por visitarla!",
      q: [
        ["¿Qué vende la tienda?", ["Zapatos y ropa", "Pescado y queso", "Pan y leche"], 1],
        ["'I think' significa…", ["Yo pienso / creo", "Yo tengo", "Yo vendo"], 0],
        ["¿Qué sonido tiene 'shop'?", ["SH (shhh)", "CH", "TH"], 0]
      ]
    }
  },
  k3: {
    v: [
      ["azul marino", "navy blue", "néivi blu", ""],
      ["azul claro", "light blue", "láit blu", ""],
      ["verde oscuro", "dark green", "dark griin", ""],
      ["dorado", "gold", "góuld", ""],
      ["plateado", "silver", "sílver", ""],
      ["beige", "beige", "béish", ""],
      ["colorido", "colorful", "cálorful", ""],
      ["El cielo es azul.", "The sky is blue.", "de skái is blu", ""],
      ["El pasto es verde.", "The grass is green.", "de gras is griin", ""],
      ["El sol es amarillo.", "The sun is yellow.", "de san is iélou", ""],
      ["un carro rojo", "a red car", "a red car", "El color va antes."],
      ["una casa blanca", "a white house", "a uáit jáus", ""],
      ["Mi color favorito es el verde.", "My favorite color is green.", "mai féivorit cálor is griin", ""],
      ["¿Te gusta el rosa?", "Do you like pink?", "du iú láik pink", ""],
      ["Es rojo y negro.", "It's red and black.", "its red and blak", ""]
    ],
    r: {
      t: "My favorite colors",
      en: "My name is Leo. My favorite color is green.\nMy car is red. My house is white.\nMy dog is black and brown.",
      es: "Me llamo Leo. Mi color favorito es el verde.\nMi carro es rojo. Mi casa es blanca.\nMi perro es negro con café.",
      q: [
        ["¿Cuál es el color favorito de Leo?", ["Rojo", "Verde", "Blanco"], 1],
        ["¿De qué color es su carro?", ["Rojo", "Negro", "Café"], 0],
        ["¿De qué color es su perro?", ["Blanco", "Verde", "Negro con café"], 2]
      ]
    }
  },
  k4: {
    v: [
      ["11 once", "eleven", "iléven", ""],
      ["12 doce", "twelve", "tuélv", ""],
      ["13 trece", "thirteen", "zertín", ""],
      ["14 catorce", "fourteen", "fortín", ""],
      ["15 quince", "fifteen", "fiftín", ""],
      ["16 dieciséis", "sixteen", "sikstín", ""],
      ["17 diecisiete", "seventeen", "seventín", ""],
      ["18 dieciocho", "eighteen", "eitín", ""],
      ["19 diecinueve", "nineteen", "naintín", ""],
      ["20 veinte", "twenty", "tuénti", ""],
      ["0 cero", "zero", "zírou", ""],
      ["tres libros", "three books", "zri buks", ""],
      ["Tengo dos hermanos.", "I have two brothers.", "ai jav tu bráders", ""],
      ["Hay cinco sillas.", "There are five chairs.", "der ar fáiv chers", ""],
      ["¿Cuántos años tienes?", "How old are you?", "jáu óuld ar iú", ""]
    ],
    r: {
      t: "My classroom",
      en: "In my classroom there are twenty chairs and one table.\nThere are ten books and five pens.\nThere are twelve students.",
      es: "En mi salón hay veinte sillas y una mesa.\nHay diez libros y cinco plumas.\nHay doce alumnos.",
      q: [
        ["¿Cuántas sillas hay?", ["Doce", "Veinte", "Diez"], 1],
        ["¿Cuántos libros hay?", ["Diez", "Cinco", "Uno"], 0],
        ["¿Cuántos alumnos hay?", ["Veinte", "Cinco", "Doce"], 2]
      ]
    }
  },
  k5: {
    v: [
      ["🐰 conejo", "rabbit", "rábit", ""],
      ["🐑 oveja", "sheep", "shiip", "Plural igual: sheep."],
      ["🐐 chivo", "goat", "góut", ""],
      ["🦆 pato", "duck", "dak", ""],
      ["🐻 oso", "bear", "ber", ""],
      ["🐯 tigre", "tiger", "táiguer", ""],
      ["🐒 mono", "monkey", "mánki", ""],
      ["🐍 serpiente", "snake", "snéik", ""],
      ["🐢 tortuga", "turtle", "tértol", ""],
      ["🦋 mariposa", "butterfly", "báterflai", ""],
      ["🐝 abeja", "bee", "bi", ""],
      ["🐜 hormiga", "ant", "ant", ""],
      ["🦒 jirafa", "giraffe", "yiráf", ""],
      ["mascota", "pet", "pet", ""],
      ["El perro es grande.", "The dog is big.", "de dog is big", ""]
    ],
    r: {
      t: "The farm",
      en: "This is a farm. There are many animals.\nThere is a horse, a cow and three pigs.\nThere are ten chickens and two ducks. The dog is happy.",
      es: "Esta es una granja. Hay muchos animales.\nHay un caballo, una vaca y tres cerdos.\nHay diez gallinas y dos patos. El perro está feliz.",
      q: [
        ["¿Cuántos cerdos hay?", ["Uno", "Tres", "Diez"], 1],
        ["¿Qué animal hay diez veces?", ["Patos", "Vacas", "Gallinas"], 2],
        ["¿Cómo está el perro?", ["Feliz", "Triste", "Cansado"], 0]
      ]
    }
  },
  k6: {
    v: [
      ["pelo", "hair", "jer", "Sin s: long hair."],
      ["cara", "face", "féis", ""],
      ["cuello", "neck", "nek", ""],
      ["hombro", "shoulder", "shóulder", ""],
      ["espalda", "back", "bak", ""],
      ["dedo", "finger", "fínguer", ""],
      ["rodilla", "knee", "nii", "La k no suena."],
      ["corazón", "heart", "jart", ""],
      ["garganta", "throat", "zróut", ""],
      ["labios", "lips", "lips", ""],
      ["lengua", "tongue", "tang", ""],
      ["uña", "nail", "néil", ""],
      ["Me duele la espalda.", "My back hurts.", "mai bak jerts", ""],
      ["Lávate las manos.", "Wash your hands.", "uásh iór jands", ""],
      ["Tengo los ojos cafés.", "I have brown eyes.", "ai jav bráun áis", ""]
    ],
    r: {
      t: "Tom is sick",
      en: "Tom is sick today. His head hurts.\nHis throat hurts too. He is very tired.\nHe drinks water and he sleeps.",
      es: "Tom está enfermo hoy. Le duele la cabeza.\nTambién le duele la garganta. Está muy cansado.\nToma agua y duerme.",
      q: [
        ["¿Qué le duele a Tom?", ["Los pies", "La cabeza y la garganta", "La espalda"], 1],
        ["¿Cómo está Tom?", ["Muy cansado", "Feliz", "Enojado"], 0],
        ["¿Qué hace Tom?", ["Corre", "Come pizza", "Toma agua y duerme"], 2]
      ]
    }
  },
  k7: {
    v: [
      ["hijo", "son", "san", ""],
      ["hija", "daughter", "dóter", ""],
      ["esposo", "husband", "jásband", ""],
      ["esposa", "wife", "uáif", ""],
      ["sobrino", "nephew", "néfiu", ""],
      ["sobrina", "niece", "niis", ""],
      ["nieto, nieta", "grandson, granddaughter", "gránsan, grándoter", ""],
      ["suegra", "mother-in-law", "máder-in-lo", ""],
      ["novio", "boyfriend", "bóifrend", ""],
      ["novia", "girlfriend", "guérlfrend", ""],
      ["amigo, amiga", "friend", "frend", ""],
      ["familia", "family", "fámili", ""],
      ["Él es mi hijo.", "He's my son.", "jis mai san", ""],
      ["Tengo una familia grande.", "I have a big family.", "ai jav a big fámili", ""],
      ["Quiero a mi familia.", "I love my family.", "ai lav mai fámili", ""]
    ],
    r: {
      t: "My family",
      en: "This is my family. My dad is Juan and my mom is Rosa.\nI have one brother and two sisters.\nMy grandma lives with us. We have a cat.",
      es: "Esta es mi familia. Mi papá es Juan y mi mamá es Rosa.\nTengo un hermano y dos hermanas.\nMi abuela vive con nosotros. Tenemos un gato.",
      q: [
        ["¿Cómo se llama la mamá?", ["Rosa", "Juan", "Ana"], 0],
        ["¿Cuántas hermanas tiene?", ["Una", "Dos", "Tres"], 1],
        ["¿Quién vive con ellos?", ["El abuelo", "El tío", "La abuela"], 2]
      ]
    }
  },
  k8: {
    v: [
      ["🍓 fresa", "strawberry", "stróberi", ""],
      ["🍇 uvas", "grapes", "gréips", ""],
      ["🍉 sandía", "watermelon", "uáter-mélon", ""],
      ["🍍 piña", "pineapple", "páinapol", ""],
      ["🥑 aguacate", "avocado", "avocádou", ""],
      ["🍅 jitomate", "tomato", "toméitou", ""],
      ["🥔 papa", "potato", "potéitou", ""],
      ["🥕 zanahoria", "carrot", "cárrot", ""],
      ["🥩 carne", "meat", "miit", ""],
      ["☕ café", "coffee", "káfi", ""],
      ["🧃 jugo", "juice", "yus", ""],
      ["sal y azúcar", "salt and sugar", "solt and shúgar", ""],
      ["desayuno, comida, cena", "breakfast, lunch, dinner", "brékfast, lanch, díner", ""],
      ["Tengo sed.", "I'm thirsty.", "aim zérsti", ""],
      ["Está rico.", "It's good.", "its gud", ""]
    ],
    r: {
      t: "Breakfast",
      en: "I eat breakfast at seven.\nI eat eggs, bread and fruit. I like bananas and strawberries.\nI drink coffee with milk. I don't drink juice.",
      es: "Desayuno a las siete.\nComo huevos, pan y fruta. Me gustan los plátanos y las fresas.\nTomo café con leche. No tomo jugo.",
      q: [
        ["¿A qué hora desayuna?", ["A las seis", "A las siete", "A las ocho"], 1],
        ["¿Qué fruta le gusta?", ["Plátanos y fresas", "Uvas y piña", "Sandía"], 0],
        ["¿Qué NO toma?", ["Café", "Leche", "Jugo"], 2]
      ]
    }
  },
  k9: {
    v: [
      ["👔 corbata", "tie", "tái", ""],
      ["traje", "suit", "sut", ""],
      ["suéter", "sweater", "suéter", ""],
      ["sudadera", "hoodie", "júdi", ""],
      ["shorts", "shorts", "shorts", ""],
      ["🩳 traje de baño", "swimsuit", "suímsut", ""],
      ["👢 botas", "boots", "buts", ""],
      ["🧣 bufanda", "scarf", "skarf", ""],
      ["🧤 guantes", "gloves", "glavs", ""],
      ["👜 bolsa", "bag", "bag", ""],
      ["cinturón", "belt", "belt", ""],
      ["⌚ reloj", "watch", "uách", ""],
      ["ponerse (ropa)", "put on", "put on", ""],
      ["quitarse (ropa)", "take off", "téik of", ""],
      ["Ponte la chamarra.", "Put on your jacket.", "put on iór yáket", ""]
    ],
    r: {
      t: "What are you wearing?",
      en: "It's cold today. I'm wearing a black sweater and blue jeans.\nI'm wearing boots and a scarf.\nMy sister is wearing a red jacket and white sneakers.",
      es: "Hoy hace frío. Traigo un suéter negro y jeans azules.\nTraigo botas y bufanda.\nMi hermana trae una chamarra roja y tenis blancos.",
      q: [
        ["¿De qué color es su suéter?", ["Negro", "Rojo", "Azul"], 0],
        ["¿Qué trae en los pies?", ["Tenis", "Botas", "Zapatos"], 1],
        ["¿Qué trae su hermana?", ["Una bufanda", "Un suéter negro", "Una chamarra roja"], 2]
      ]
    }
  },
  k10: {
    v: [
      ["sillón", "couch", "cáuch", ""],
      ["refrigerador", "fridge", "frich", ""],
      ["estufa", "stove", "stóuv", ""],
      ["regadera", "shower", "sháuer", ""],
      ["escusado", "toilet", "tóilet", ""],
      ["espejo", "mirror", "mírror", ""],
      ["lámpara", "lamp", "lamp", ""],
      ["escaleras", "stairs", "sters", ""],
      ["jardín", "yard", "iard", ""],
      ["cochera", "garage", "garách", ""],
      ["piso (suelo)", "floor", "flor", ""],
      ["techo", "roof", "ruf", ""],
      ["llaves", "keys", "kiis", ""],
      ["El gato está debajo de la cama.", "The cat is under the bed.", "de kat is ánder de bed", ""],
      ["Mi casa tiene tres recámaras.", "My house has three bedrooms.", "mai jáus jas zri bédrums", ""]
    ],
    r: {
      t: "My house",
      en: "My house is small. It has two bedrooms, a kitchen, a living room and one bathroom.\nThe kitchen is new. There is a big table in the living room.\nMy cat sleeps on the couch.",
      es: "Mi casa es pequeña. Tiene dos recámaras, una cocina, una sala y un baño.\nLa cocina es nueva. Hay una mesa grande en la sala.\nMi gato duerme en el sillón.",
      q: [
        ["¿Cuántas recámaras tiene la casa?", ["Una", "Dos", "Tres"], 1],
        ["¿Qué es nuevo?", ["La cocina", "El baño", "El sillón"], 0],
        ["¿Dónde duerme el gato?", ["En la cama", "En la mesa", "En el sillón"], 2]
      ]
    }
  },
  k11: {
    v: [
      ["abrir", "open", "óupen", ""],
      ["cerrar", "close", "clóus", ""],
      ["ver, mirar", "look", "luk", ""],
      ["cocinar", "cook", "kuk", ""],
      ["jugar", "play", "pléi", ""],
      ["comprar", "buy", "bái", ""],
      ["pagar", "pay", "péi", ""],
      ["ir", "go", "góu", ""],
      ["venir", "come", "cam", ""],
      ["tener", "have", "jav", ""],
      ["querer (desear)", "want", "uánt", ""],
      ["necesitar", "need", "niid", ""],
      ["ayudar", "help", "jelp", ""],
      ["Necesito ayuda.", "I need help.", "ai niid jelp", ""],
      ["Quiero agua.", "I want water.", "ai uánt uáter", ""]
    ],
    r: {
      t: "My day",
      en: "I wake up at six. I eat breakfast and I go to work.\nI work in an office. I read and write emails.\nAt night I cook dinner, I watch TV and I sleep.",
      es: "Me despierto a las seis. Desayuno y me voy al trabajo.\nTrabajo en una oficina. Leo y escribo correos.\nEn la noche hago la cena, veo la tele y duermo.",
      q: [
        ["¿A qué hora se despierta?", ["A las seis", "A las ocho", "A las siete"], 0],
        ["¿Dónde trabaja?", ["En una tienda", "En una oficina", "En su casa"], 1],
        ["¿Qué hace en la noche?", ["Corre", "Va al trabajo", "Cocina, ve la tele y duerme"], 2]
      ]
    }
  },
  k12: {
    v: [
      ["contento", "glad", "glad", ""],
      ["emocionado", "excited", "eksáited", ""],
      ["preocupado", "worried", "uérrid", ""],
      ["sorprendido", "surprised", "sorpráisd", ""],
      ["solo (sin compañía)", "lonely", "lóunli", "Se siente solo."],
      ["orgulloso", "proud", "práud", ""],
      ["relajado", "relaxed", "rilákst", ""],
      ["confundido", "confused", "confiúsd", ""],
      ["estresado", "stressed", "strest", ""],
      ["Estoy bien, gracias.", "I'm fine, thanks.", "aim fáin, zenks", ""],
      ["Estoy un poco cansado.", "I'm a little tired.", "aim a lítol táierd", ""],
      ["No estoy enojado.", "I'm not angry.", "aim nat ángri", ""],
      ["¿Por qué estás triste?", "Why are you sad?", "uái ar iú sad", ""],
      ["porque", "because", "bicós", ""],
      ["Estoy feliz porque es viernes.", "I'm happy because it's Friday.", "aim jápi bicós its fráidei", ""]
    ],
    r: {
      t: "How do you feel?",
      en: "Today is Friday. I'm very happy!\nMy friend Sara is sad because her cat is sick.\nMy brother is nervous because he has an exam.",
      es: "Hoy es viernes. ¡Estoy muy feliz!\nMi amiga Sara está triste porque su gato está enfermo.\nMi hermano está nervioso porque tiene un examen.",
      q: [
        ["¿Qué día es hoy?", ["Lunes", "Viernes", "Domingo"], 1],
        ["¿Por qué está triste Sara?", ["Su gato está enfermo", "Tiene un examen", "Es lunes"], 0],
        ["¿Cómo está el hermano?", ["Feliz", "Enojado", "Nervioso"], 2]
      ]
    }
  },
  k13: {
    v: [
      ["rico / pobre", "rich / poor", "rich / pur", ""],
      ["fuerte / débil", "strong / weak", "strong / uíik", ""],
      ["pesado / ligero", "heavy / light", "jévi / láit", ""],
      ["caro / barato", "expensive / cheap", "ekspénsiv / chiip", ""],
      ["temprano / tarde", "early / late", "érli / léit", ""],
      ["cerca / lejos", "near / far", "nir / far", ""],
      ["bonito / feo", "beautiful / ugly", "biútiful / ágli", ""],
      ["joven / viejo", "young / old", "iang / óuld", ""],
      ["ruidoso / silencioso", "loud / quiet", "láud / kuáiet", ""],
      ["mojado / seco", "wet / dry", "uét / drái", ""],
      ["correcto / incorrecto", "right / wrong", "ráit / rong", ""],
      ["El carro es caro.", "The car is expensive.", "de car is ekspénsiv", ""],
      ["La caja es muy pesada.", "The box is very heavy.", "de baks is véri jévi", ""],
      ["Mi abuelo es viejo, pero fuerte.", "My grandpa is old, but strong.", "mai grándpa is óuld, bat strong", ""],
      ["Llegué temprano.", "I'm early.", "aim érli", ""]
    ],
    r: {
      t: "Two cars",
      en: "I have two cars. The red car is new and fast, but it's expensive.\nThe white car is old and slow, but it's cheap.\nI like the white car. It's small and easy to park.",
      es: "Tengo dos carros. El rojo es nuevo y rápido, pero es caro.\nEl blanco es viejo y lento, pero es barato.\nMe gusta el blanco. Es pequeño y fácil de estacionar.",
      q: [
        ["¿Cómo es el carro rojo?", ["Viejo y lento", "Nuevo y rápido", "Pequeño y barato"], 1],
        ["¿Cómo es el carro blanco?", ["Viejo y barato", "Nuevo y caro", "Grande y rápido"], 0],
        ["¿Cuál le gusta?", ["El rojo", "Ninguno", "El blanco"], 2]
      ]
    }
  },
  k14: {
    v: [
      ["Repite, por favor.", "Repeat, please.", "ripít, plís", ""],
      ["Trabajen en parejas.", "Work in pairs.", "uérk in pers", ""],
      ["Escribe tu nombre.", "Write your name.", "ráit iór néim", ""],
      ["Lee en voz alta.", "Read out loud.", "riid áut láud", ""],
      ["Pon atención.", "Pay attention.", "péi aténshon", ""],
      ["tarea", "homework", "jóumuerk", ""],
      ["examen", "test", "test", ""],
      ["maestro, maestra", "teacher", "tíicher", ""],
      ["alumno", "student", "stúdent", ""],
      ["borrador / goma", "eraser", "iréiser", ""],
      ["mochila", "backpack", "bákpak", ""],
      ["¿Cómo se dice ... en inglés?", "How do you say ... in English?", "jáu du iú séi ... in ínglish", ""],
      ["¿Qué significa?", "What does it mean?", "uát das it miin", ""],
      ["No entiendo.", "I don't understand.", "ai dóunt anderstánd", ""],
      ["¿Puede hablar más despacio?", "Can you speak slowly?", "can iú spiik slóuli", ""]
    ],
    r: {
      t: "English class",
      en: "My English class is on Monday and Wednesday.\nMy teacher's name is Mr. Brown. He is very nice.\nWe read, we write and we speak. The homework is easy.",
      es: "Mi clase de inglés es lunes y miércoles.\nMi maestro se llama Mr. Brown. Es muy amable.\nLeemos, escribimos y hablamos. La tarea es fácil.",
      q: [
        ["¿Qué días es la clase?", ["Lunes y miércoles", "Martes y jueves", "Viernes"], 0],
        ["¿Cómo es el maestro?", ["Enojado", "Muy amable", "Serio"], 1],
        ["¿Cómo es la tarea?", ["Difícil", "Larga", "Fácil"], 2]
      ]
    }
  }
});
