/**
 * A mapping of modulo'd angles to Zodiacs for the left wheel.
 * @type {Array<Array<number, string>>}
 */
const zodiacAngleMappingLeft = [
  [0, "Capricorn"],
  [360, "Capricorn"],

  [30, "Sagittarius"],
  [-330, "Sagittarius"],

  [60, "Scorpio"],
  [-300, "Scorpio"],

  [90, "Libra"],
  [-270, "Libra"],

  [120, "Virgo"],
  [-240, "Virgo"],

  [150, "Leo"],
  [-210, "Leo"],

  [180, "Cancer"],
  [-180, "Cancer"],

  [210, "Gemini"],
  [-150, "Gemini"],

  [240, "Taurus"],
  [-120, "Taurus"],

  [270, "Aries"],
  [-90, "Aries"],

  [300, "Pisces"],
  [-60, "Pisces"],

  [330, "Aquarius"],
  [-30, "Aquarius"],
];
/**
 * A mapping of modulo'd angles to Zodiacs for the right wheel.
 * @type {Array<Array<number, string>>}
 */
const zodiacAngleMappingRight = [
  [0, "Cancer"],
  [360, "Cancer"],

  [30, "Gemini"],
  [-330, "Gemini"],

  [60, "Taurus"],
  [-300, "Taurus"],

  [90, "Aries"],
  [-270, "Aries"],

  [120, "Pisces"],
  [-240, "Pisces"],

  [150, "Aquarius"],
  [-210, "Aquarius"],

  [180, "Capricorn"],
  [-180, "Capricorn"],

  [210, "Sagittarius"],
  [-150, "Sagittarius"],

  [240, "Scorpio"],
  [-120, "Scorpio"],

  [270, "Libra"],
  [-90, "Libra"],

  [300, "Virgo"],
  [-60, "Virgo"],

  [330, "Leo"],
  [-30, "Leo"],
];

/**
 * Mapping of zodiacs to their date range.
 * @type {Record<string, string>}
 */
const zodiacDateRanges = {
  Capricorn: "Dec 22 - Jan 19",
  Sagittarius: "Nov 22 - Dec 21",
  Scorpio: "Oct 23 - Nov 21",
  Libra: "Sep 23 - Oct 22",
  Virgo: "Aug 23 - Sep 22",
  Leo: "Jul 23 - Aug 22",
  Cancer: "Jun 21 - Jul 22",
  Gemini: "May 21 - Jun 20",
  Taurus: "Apr 20 - May 20",
  Aries: "Mar 21 - Apr 19",
  Pisces: "Feb 19 - Mar 20",
  Aquarius: "Jan 20 - Feb 18",
};
/**
 * Mapping of zodiac pairs to their college romance analysis.
 * @type {Map<string, string>}
 */
const romantic = new Map([
  [
    "Aries and Taurus",
    "Aries and Taurus can experience an intense and passionate romantic relationship. Aries brings excitement, spontaneity, and a sense of adventure, while Taurus offers stability, loyalty, and sensuality. However, conflicts may arise due to Aries' impulsive nature and Taurus' desire for security and routine. Open communication and compromise are key to maintaining a harmonious and fulfilling romance.",
  ],
  [
    "Aries and Gemini",
    "Aries and Gemini can ignite a dynamic and exciting romantic relationship. Both signs are naturally outgoing, enthusiastic, and enjoy intellectual stimulation. Aries brings passion, spontaneity, and a sense of adventure, while Gemini adds wit, charm, and versatility. Their shared love for communication and exploration can create a lively and intellectually stimulating bond. However, conflicts may arise due to Aries' need for constant excitement and Gemini's occasional fickleness. Building trust, maintaining open communication, and embracing each other's need for freedom can lead to a passionate and intellectually engaging romance.",
  ],
  [
    "Aries and Cancer",
    "Aries and Cancer have contrasting yet complementary qualities that can create a unique and fulfilling romantic relationship. Aries is bold, passionate, and adventurous, while Cancer is nurturing, sensitive, and deeply emotional. Initially, Aries may be attracted to Cancer's warmth and genuine care, while Cancer appreciates Aries' confidence and vitality. However, conflicts may arise due to Aries' need for independence and Cancer's desire for security and emotional stability. Building trust, practicing patience, and learning to navigate and respect each other's emotional needs can lead to a deep and loving romance between these two signs.",
  ],
  [
    "Aries and Leo",
    "Aries and Leo share a passionate and fiery connection in romance. Both signs are confident, charismatic, and love being in the spotlight. Aries brings excitement, enthusiasm, and a sense of adventure, while Leo adds generosity, warmth, and a strong presence. Their relationship is filled with passion, romance, and grand gestures. They inspire each other's creativity and enjoy taking on new adventures together. However, clashes of ego and a power struggle for dominance can arise at times. Both Aries and Leo need to learn to compromise and give each other space to maintain a healthy balance in their fiery romance.",
  ],
  [
    "Aries and Virgo",
    "The combination of an Aries and a Virgo in a romantic relationship can present both challenges and opportunities. Aries is a fire sign known for their passion, enthusiasm, and impulsiveness, while Virgo is an earth sign characterized by their practicality, attention to detail, and analytical nature. These two signs have contrasting qualities, which can create a unique dynamic in their romantic connection. In this relationship, Aries may be attracted to Virgo's intelligence, groundedness, and dedication. Virgo, on the other hand, may appreciate Aries' energy, spontaneity, and boldness. However, their differing approaches to life can lead to conflicts. Aries tends to be more impulsive and action-oriented, while Virgo is more methodical and cautious. Communication and understanding are crucial for this pairing. Aries needs to be mindful of Virgo's need for structure and precision, while Virgo should try to embrace Aries' adventurous spirit. Finding a balance between Aries' passion and Virgo's practicality is key to nurturing a healthy and harmonious romance.",
  ],
  [
    "Aries and Libra",
    "Aries and Libra in a romantic relationship can be a captivating combination. Aries brings their fiery energy and passion to the partnership, igniting the spark between them. Libra, with their diplomatic nature and charm, can effortlessly captivate Aries, creating a harmonious and balanced connection. They enjoy socializing together and indulging in shared experiences. However, conflicts may arise due to their contrasting approaches, with Aries being more direct and impulsive, while Libra prefers careful consideration and balance. Open communication and understanding are vital for navigating these differences and creating a thriving romantic bond.",
  ],
  [
    "Aries and Scorpio",
    "Aries and Scorpio in a romantic relationship can ignite a passionate and intense bond. Both signs possess a strong, assertive nature, and their chemistry is electric. Aries, a fire sign, brings their energy, enthusiasm, and boldness, while Scorpio, a water sign, adds depth, emotional intensity, and a mysterious allure. Their connection is fueled by a deep desire for transformative experiences in love. However, challenges may arise due to their possessive tendencies and strong personalities. Aries values independence, while Scorpio seeks emotional intimacy, which can lead to power struggles. Open communication, trust, and mutual understanding are crucial for navigating these complexities and nurturing a thriving and passionate romance.",
  ],
  [
    "Aries and Sagittarius",
    "When Aries and Sagittarius come together in a romantic relationship, their connection is full of adventure, enthusiasm, and passion. Aries, a fire sign, brings their energy, drive, and assertiveness to the partnership, while Sagittarius, a fellow fire sign, adds their optimistic outlook, love for exploration, and philosophical nature. Both signs share a zest for life and a desire for new experiences, making their relationship exciting and dynamic. They thrive on the thrill of taking risks and embarking on new adventures together. Their shared optimism and enthusiasm create a positive atmosphere, supporting each other's personal growth and aspirations. However, conflicts may arise due to their shared impulsive nature and stubbornness. Open communication and finding compromise are essential to maintain a healthy and balanced romantic bond.",
  ],
  [
    "Aries and Capricorn",
    "Aries and Capricorn in a romantic relationship create a unique combination of fire and earth elements. Aries, a fiery and passionate sign, brings their energy, enthusiasm, and a desire for adventure to the partnership. Capricorn, an earth sign, adds stability, practicality, and a grounded nature. Their differing approaches can create a dynamic and balanced relationship. Aries is drawn to Capricorn's ambition and determination, while Capricorn appreciates Aries' spontaneity and zest for life. However, conflicts may arise due to their contrasting temperaments. Aries tends to be impulsive and quick to act, while Capricorn is more cautious and calculated. Patience, understanding, and compromise are crucial for finding harmony and maintaining a strong romantic bond.",
  ],
  [
    "Aries and Aquarius",
    "In a romantic relationship between Aries and Aquarius, there is an exciting and intellectually stimulating connection. Aries, a fire sign, brings passion, energy, and a zest for adventure, while Aquarius, an air sign, adds innovation, intellectual depth, and a unique perspective. Their bond is based on mutual respect for each other's individuality and shared interests in progressive ideas. Both signs value freedom and independence, which adds excitement and spontaneity to their relationship. However, conflicts may arise due to their strong independent natures and occasional emotional detachment. Effective communication, compromise, and finding a balance between personal freedom and togetherness are essential for a fulfilling and long-lasting romantic bond.",
  ],
  [
    "Aries and Pisces",
    "Aries and Pisces can experience an intriguing and passionate romance, although they approach love in different ways. Aries is adventurous, energetic, and direct, while Pisces is sensitive, intuitive, and dreamy. Initially, Aries might be attracted to Pisces' mystique and depth, while Pisces is drawn to Aries' confidence and charisma. However, conflicts may arise due to Aries' impulsive nature and Pisces' need for emotional security. With patience and understanding, they can balance each other, with Aries providing excitement and motivation, and Pisces offering compassion and emotional support, creating a unique and transformative romantic connection.",
  ],
  [
    "Taurus and Gemini",
    "Taurus and Gemini have contrasting approaches to romance, which can lead to both challenges and excitement in their relationship. Taurus values stability, reliability, and commitment, seeking a deep and enduring connection. Gemini, on the other hand, is curious, adaptable, and often seeks variety and intellectual stimulation. Initially, Taurus may be drawn to Gemini's charm and wit, while Gemini appreciates Taurus' loyalty and grounded nature. However, conflicts may arise as Taurus craves security and consistency, while Gemini seeks freedom and novelty. With open communication and compromise, they can learn from each other, with Taurus providing stability and emotional grounding, and Gemini infusing the relationship with intellectual stimulation and spontaneity.",
  ],
  [
    "Taurus and Cancer",
    "Taurus and Cancer can form a deeply nurturing and harmonious romantic connection. Both signs value security, stability, and emotional bonding in relationships, creating a strong foundation for their love. Taurus appreciates Cancer's nurturing and caring nature, while Cancer is drawn to Taurus' loyalty and reliability. They share a love for creating a warm and comfortable home environment, and both enjoy expressing their affection through acts of kindness and support. However, conflicts may arise due to Taurus' occasional stubbornness and Cancer's moodiness. With patience, open communication, and a willingness to compromise, they can create a deeply loving and enduring partnership, where Taurus provides stability and Cancer offers emotional depth and intuition.",
  ],
  [
    "Taurus and Leo",
    "Taurus and Leo can ignite a passionate and vibrant romance. Both signs are known for their strong personalities and desire for love and attention. Taurus is attracted to Leo's confident and charismatic nature, while Leo admires Taurus' stability and loyalty. They share a love for luxury and indulgence, often enjoying extravagant dates and gifts. However, conflicts may arise due to Taurus' occasional possessiveness and Leo's need for constant admiration. With open communication and a willingness to compromise, they can find a balance where Taurus provides stability and security, while Leo adds excitement and passion, creating a relationship that is both grounded and fiery.",
  ],
  [
    "Taurus and Virgo",
    "Taurus and Virgo can form a grounded and harmonious romance. Both signs value stability, practicality, and loyalty in relationships. Taurus is drawn to Virgo's intelligence and analytical nature, while Virgo appreciates Taurus' reliability and sensuality. They share a love for order and organization, and their practical approach to life allows them to build a stable and secure foundation. However, conflicts may arise when Taurus becomes too stubborn or when Virgo's perfectionism causes them to be overly critical. With patience, open communication, and a willingness to compromise, they can create a loving and enduring partnership where Taurus provides stability and sensuality, and Virgo offers practicality and attention to detail.",
  ],
  [
    "Taurus and Libra",
    "Taurus and Libra can create a harmonious and balanced romance. Both signs appreciate beauty, harmony, and the finer things in life. Taurus is attracted to Libra's charm, diplomacy, and social grace, while Libra admires Taurus' stability and sensuality. They share a love for romance and often enjoy indulging in elegant dates and shared experiences. Taurus provides a grounded and nurturing presence, while Libra brings a sense of harmony and balance to the relationship. However, conflicts may arise when Taurus becomes too possessive or when Libra's indecisiveness affects the relationship's stability. With open communication, compromise, and a focus on finding common ground, Taurus and Libra can create a loving and beautiful partnership, where Taurus provides stability and sensuality, and Libra adds charm and a sense of balance.",
  ],
  [
    "Taurus and Scorpio",
    "Taurus and Scorpio can create a passionate and intense romantic connection. Both signs have a strong desire for emotional depth and loyalty in relationships. Taurus is drawn to Scorpio's magnetic and mysterious nature, while Scorpio appreciates Taurus' loyalty and sensuality. They share a deep connection and a mutual understanding of each other's needs for security and intimacy. Taurus provides a stable and nurturing presence, while Scorpio adds intensity and depth to the relationship. However, conflicts may arise when Taurus becomes too possessive or when Scorpio's intensity leads to power struggles. With open and honest communication, trust, and a willingness to navigate emotional complexities, Taurus and Scorpio can build a transformative and passionate partnership, where Taurus provides stability and sensuality, and Scorpio brings intensity and emotional depth.",
  ],
  [
    "Taurus and Sagittarius",
    "Taurus and Sagittarius can create a combination of stability and adventure in their romantic relationship. Taurus is drawn to Sagittarius' adventurous spirit, optimism, and intellectual stimulation, while Sagittarius is intrigued by Taurus' grounded nature, loyalty, and sensuality. They can enjoy exploring new experiences together, whether it's through travel, trying new activities, or engaging in lively conversations. Taurus provides stability and security, while Sagittarius adds excitement and a sense of freedom. However, conflicts may arise when Taurus becomes too possessive or when Sagittarius' need for independence clashes with Taurus' desire for commitment. Finding a balance between security and freedom, and embracing open-mindedness and compromise, can help Taurus and Sagittarius create a fulfilling and dynamic romantic partnership.",
  ],
  [
    "Taurus and Capricorn",
    "Taurus and Capricorn can create a strong and enduring romantic connection. Both signs value commitment, stability, and long-term goals in relationships. Taurus is drawn to Capricorn's ambition, determination, and practicality, while Capricorn appreciates Taurus' loyalty, sensuality, and grounded nature. They share a similar work ethic and a desire for security, creating a solid foundation for their love. Taurus provides a stable and nurturing presence, while Capricorn brings structure and ambition to the relationship. However, conflicts may arise when Taurus becomes too possessive or when Capricorn's focus on career and success overshadows emotional connection. By finding a balance between work and love, and cultivating open communication and mutual support, Taurus and Capricorn can build a loving and prosperous partnership, where Taurus offers stability and sensuality, and Capricorn brings ambition and practicality.",
  ],
  [
    "Taurus and Aquarius",
    "Taurus and Aquarius can have an intriguing and unconventional romantic relationship. Taurus, an earth sign, seeks stability, security, and a strong sense of tradition, while Aquarius, an air sign, values freedom, independence, and intellectual stimulation. Initially, their differences may create a sense of excitement and intrigue between them. Taurus is drawn to Aquarius' unique perspective and visionary ideas, while Aquarius appreciates Taurus' grounded and reliable nature. However, Taurus' need for consistency and routine may clash with Aquarius' desire for spontaneity and unconventional experiences. Taurus tends to be more focused on the physical aspects of love, while Aquarius values mental connection and intellectual stimulation. Building understanding, embracing each other's differences, and finding a balance between stability and freedom are crucial for the success of their romantic relationship.",
  ],
  [
    "Taurus and Pisces",
    "Taurus and Pisces can create a deeply romantic and harmonious connection. Both signs value love, romance, and emotional security, which forms a strong foundation for their relationship. Taurus, an earth sign, provides stability, reliability, and a grounded approach to romance, while Pisces, a water sign, brings sensitivity, compassion, and an intuitive understanding of emotions. Taurus appreciates Pisces' dreamy and imaginative nature, while Pisces admires Taurus' loyalty and practicality. Their shared appreciation for art, beauty, and the finer things in life can further enhance their romantic bond. However, Taurus' occasional stubbornness and Pisces' inclination towards escapism may lead to conflicts. Open communication, compromise, and understanding each other's needs are essential for maintaining a harmonious and fulfilling romantic relationship between Taurus and Pisces.",
  ],
  [
    "Gemini and Cancer",
    "Gemini and Cancer have contrasting yet complementary energies in romance. Gemini is an airy and intellectual sign, while Cancer is a sensitive and emotional water sign. Their relationship can be a blend of excitement and depth. Gemini brings intellectual stimulation, wit, and versatility to the partnership, while Cancer adds emotional depth, nurturing qualities, and a strong sense of home and family. They can learn from each other and find a balance between logic and intuition, spontaneity and stability. However, their different emotional needs and communication styles can lead to misunderstandings. Building trust, open communication, and understanding each other's emotional vulnerabilities are key to a harmonious and fulfilling romantic relationship between Gemini and Cancer.",
  ],
  [
    "Gemini and Leo",
    "Gemini and Leo bring a lively and dynamic energy to their romantic relationship. Gemini is curious, adaptable, and intellectually stimulating, while Leo is confident, passionate, and loves being in the spotlight. They share a strong attraction and enjoy engaging in playful banter and intellectual conversations. Gemini keeps Leo entertained with their wit and versatility, while Leo adds romance, warmth, and generosity to the relationship. However, conflicts may arise due to Gemini's need for independence and Leo's desire for admiration and attention. Both partners need to communicate openly and find a balance between freedom and commitment to sustain a harmonious romance.",
  ],
  [
    "Gemini and Virgo",
    "Gemini and Virgo can create a unique and intellectually stimulating romantic connection. Gemini is attracted to Virgo's intelligence, analytical nature, and attention to detail, while Virgo appreciates Gemini's versatility, wit, and ability to keep things exciting. They share a love for communication, mental stimulation, and learning. Gemini brings a sense of playfulness and adaptability to the relationship, while Virgo adds practicality and a grounded approach. However, conflicts may arise when Gemini's need for freedom clashes with Virgo's desire for stability and routine, or when Virgo's critical nature dampens Gemini's spontaneity. By embracing open and honest communication, finding a balance between structure and flexibility, and appreciating each other's unique qualities, Gemini and Virgo can create a dynamic and intellectually fulfilling partnership.",
  ],
  [
    "Gemini and Libra",
    "Gemini and Libra can create a harmonious and intellectually stimulating romantic connection. Both signs value communication, social interaction, and mental stimulation in relationships. Gemini is attracted to Libra's charm, diplomacy, and ability to create harmony, while Libra appreciates Gemini's wit, versatility, and ability to keep things interesting. They share a love for intellectual conversations, socializing, and exploring new experiences together. Gemini brings a sense of playfulness and adaptability to the relationship, while Libra adds balance and a focus on maintaining harmony. However, conflicts may arise when Gemini's restlessness challenges Libra's need for stability or when Libra's indecisiveness frustrates Gemini's need for spontaneity. By embracing open and honest communication, finding a balance between independence and togetherness, and appreciating each other's unique qualities, Gemini and Libra can build a dynamic and intellectually stimulating partnership,",
  ],
  [
    "Gemini and Scorpio",
    "Gemini and Scorpio have contrasting personalities, which can create both attraction and challenges in their romantic relationship. Gemini is outgoing, sociable, and adaptable, while Scorpio is intense, mysterious, and deeply emotional. Gemini is attracted to Scorpio's magnetism and depth, while Scorpio is intrigued by Gemini's intelligence and versatility. However, their differences can lead to misunderstandings and power struggles. Gemini's need for freedom and variety may clash with Scorpio's possessiveness and desire for emotional intensity. Trust and communication are crucial in this relationship, as Gemini's flirtatious nature can trigger Scorpio's jealousy. With understanding, compromise, and a willingness to explore each other's emotional depths, Gemini and Scorpio can create a dynamic and transformative romantic partnership,",
  ],
  [
    "Gemini and Sagittarius",
    "Gemini and Sagittarius share a love for adventure, intellectual stimulation, and independence, which can lead to an exciting and spontaneous romantic connection. Gemini is attracted to Sagittarius' optimism, enthusiasm, and philosophical nature, while Sagittarius appreciates Gemini's wit, versatility, and ability to keep things interesting. They enjoy exploring new experiences, engaging in stimulating conversations, and embarking on adventures together. Both signs value freedom and may be open to non-traditional relationship dynamics. However, conflicts may arise when Gemini's flirtatious nature triggers Sagittarius' jealousy or when Sagittarius' need for independence clashes with Gemini's desire for emotional connection. Finding a balance between freedom and commitment, embracing open communication, and allowing room for individual growth can help Gemini and Sagittarius create a vibrant and intellectually stimulating romantic partnership,",
  ],
  [
    "Gemini and Capricorn",
    "Gemini and Capricorn have contrasting personalities, which can create both attraction and challenges in their romantic relationship. Gemini is outgoing, adaptable, and enjoys social interactions, while Capricorn is more reserved, practical, and focused on long-term goals. Gemini is attracted to Capricorn's ambition, stability, and determination, while Capricorn admires Gemini's intelligence, wit, and ability to keep things interesting. However, their differences in communication styles and priorities can lead to misunderstandings and conflicts. Gemini's need for variety and freedom may clash with Capricorn's desire for structure and commitment. Building trust, practicing open and honest communication, and finding a balance between stability and flexibility are essential for Gemini and Capricorn to create a harmonious and fulfilling romantic partnership.",
  ],
  [
    "Gemini and Aquarius",
    "Gemini and Aquarius can form an intellectually stimulating and unique romantic connection. Both signs value intellectual pursuits, freedom, and individuality in relationships. Gemini is attracted to Aquarius' independence, originality, and open-mindedness, while Aquarius appreciates Gemini's intelligence, wit, and ability to keep things exciting. They share a love for stimulating conversations, innovative ideas, and exploring new experiences together. Both signs thrive on mental stimulation and may enjoy a non-traditional approach to romance. However, conflicts may arise when Gemini's flirtatious nature triggers Aquarius' detachment or when Aquarius' need for space clashes with Gemini's desire for emotional connection. Building trust, practicing open communication, and allowing room for individuality are important for Gemini and Aquarius to create a vibrant and intellectually fulfilling romantic partnership.",
  ],
  [
    "Gemini and Pisces",
    "Gemini and Pisces have contrasting personalities, which can create both attraction and challenges in their romantic relationship. Gemini is outgoing, intellectually driven, and adaptable, while Pisces is sensitive, intuitive, and emotionally attuned. Gemini is attracted to Pisces' depth, compassion, and creativity, while Pisces is intrigued by Gemini's intelligence, wit, and ability to bring excitement into their lives. They may have a strong mental connection and enjoy engaging in stimulating conversations. However, conflicts may arise when Gemini's need for freedom and variety clashes with Pisces' desire for emotional security and stability. Gemini's logical approach to problems may also clash with Pisces' emotional and intuitive nature. Building trust, practicing empathy, and finding a balance between intellectual stimulation and emotional connection are essential for Gemini and Pisces to create a harmonious and fulfilling romantic partnership.",
  ],
  [
    "Cancer and Leo",
    "Cancer and Leo can have a passionate and emotionally intense romantic relationship. Cancer is nurturing, sensitive, and values emotional security, while Leo is confident, outgoing, and seeks admiration and attention. Cancer is attracted to Leo's warmth, generosity, and leadership qualities, while Leo is drawn to Cancer's nurturing nature and ability to provide emotional support. Both signs value loyalty and commitment in relationships, and when they align their goals and communicate openly, they can create a loving and stable partnership. However, conflicts may arise when Cancer's moodiness clashes with Leo's desire for constant excitement and attention, or when Leo's need for independence conflicts with Cancer's need for emotional closeness. Building trust, practicing patience, and finding a balance between independence and emotional connection are essential for Cancer and Leo to sustain a harmonious and fulfilling romantic relationship.",
  ],
  [
    "Cancer and Virgo",
    "Cancer and Virgo can form a stable and nurturing romantic relationship. Both signs value loyalty, commitment, and creating a harmonious home environment. Cancer is sensitive, nurturing, and seeks emotional security, while Virgo is practical, reliable, and pays attention to detail. Cancer is attracted to Virgo's grounded nature, intelligence, and ability to offer practical support, while Virgo appreciates Cancer's emotional depth, care, and ability to create a warm and inviting atmosphere. They can share a deep emotional bond and support each other's personal growth. However, conflicts may arise when Cancer's moodiness feels overwhelming for Virgo or when Virgo's critical nature hurts Cancer's sensitive feelings. Building trust, practicing open communication, and embracing each other's strengths are essential for Cancer and Virgo to create a loving and fulfilling romantic partnership.",
  ],
  [
    "Cancer and Libra",
    "Cancer and Libra can have a harmonious and balanced romantic relationship. Cancer is sensitive, nurturing, and values emotional connections, while Libra is social, diplomatic, and seeks harmony in relationships. Cancer is attracted to Libra's charm, diplomacy, and ability to create a pleasant atmosphere, while Libra appreciates Cancer's emotional depth, care, and nurturing qualities. They can share a strong emotional bond and enjoy creating a beautiful and comfortable home together. However, conflicts may arise when Cancer's moodiness clashes with Libra's desire for balance and harmony, or when Libra's indecisiveness frustrates Cancer's need for stability. Building trust, practicing open communication, and finding a balance between emotional needs and harmony are important for Cancer and Libra to create a loving and fulfilling romantic partnership.",
  ],
  [
    "Cancer and Scorpio",
    "Cancer and Scorpio can have an intense and deeply emotional romantic relationship. Both signs value loyalty, intimacy, and emotional depth in relationships. Cancer is nurturing, sensitive, and seeks emotional security, while Scorpio is passionate, intuitive, and possesses strong emotional intensity. Cancer is attracted to Scorpio's depth, mystery, and unwavering loyalty, while Scorpio appreciates Cancer's nurturing nature, emotional support, and ability to create a safe space. They can share a profound emotional connection and create a strong bond. However, conflicts may arise when Cancer's mood swings clash with Scorpio's possessiveness or when Scorpio's intensity becomes overwhelming for Cancer. Building trust, practicing open communication, and allowing each other space for individual growth are crucial for Cancer and Scorpio to sustain a deep and fulfilling romantic partnership.",
  ],
  [
    "Cancer and Sagittarius",
    "Cancer and Sagittarius have contrasting personalities, which can create both attraction and challenges in their romantic relationship. Cancer is nurturing, sensitive, and seeks emotional security, while Sagittarius is adventurous, independent, and values freedom. Cancer is attracted to Sagittarius' optimistic nature, sense of adventure, and ability to bring excitement into their lives, while Sagittarius is intrigued by Cancer's emotional depth, care, and ability to provide a stable home environment. They may have a strong initial connection based on their differences. However, conflicts may arise when Cancer's need for emotional security clashes with Sagittarius' desire for independence and exploration or when Sagittarius' blunt honesty hurts Cancer's sensitive feelings. Building trust, practicing open communication, and finding a balance between emotional needs and personal freedom are essential for Cancer and Sagittarius to sustain a harmonious and fulfilling romantic relationship.",
  ],
  [
    "Cancer and Capricorn",
    "Cancer and Capricorn can form a complementary and stable romantic relationship. Cancer is nurturing and emotionally sensitive, while Capricorn is practical and grounded. This combination creates a dynamic where Cancer provides emotional support and a nurturing environment, while Capricorn offers stability and security. Cancer appreciates Capricorn's ambition and determination, while Capricorn admires Cancer's nurturing and caring nature. Both signs value loyalty and commitment, which forms a strong foundation for their relationship. However, Cancer's emotional nature and Capricorn's reserved demeanor can sometimes lead to misunderstandings or clashes. Cancer may perceive Capricorn as emotionally distant, while Capricorn may find Cancer's mood swings challenging. It's important for both partners to communicate openly, express their needs, and find a balance between emotional expression and practicality. When they work together, Cancer and Capricorn can build a loving and secure romantic bond.",
  ],
  [
    "Cancer and Aquarius",
    "Cancer and Aquarius have different approaches to romance, but their unique qualities can create an intriguing and dynamic relationship. Cancer is deeply emotional, nurturing, and seeks emotional security in relationships. Aquarius, on the other hand, is independent, intellectual, and values freedom and individuality. The contrasting nature of these signs can initially create challenges as Cancer seeks emotional closeness and Aquarius values personal space. However, if both partners are willing to understand and appreciate each other's differences, they can complement each other well. Cancer can provide the emotional support and care that Aquarius needs, while Aquarius can bring intellectual stimulation and innovative ideas to the relationship. Both signs are also loyal and committed, which can create a strong bond. Communication and compromise are crucial in this relationship to bridge the emotional and intellectual gaps. When Cancer and Aquarius find a balance between emotional connection and intellectual stimulation, they can form a unique and fulfilling romantic partnership.",
  ],
  [
    "Cancer and Pisces",
    "Cancer and Pisces can have a deeply emotional and nurturing romantic relationship. Both signs are highly sensitive, empathetic, and seek emotional connection. Cancer is nurturing, protective, and values family, while Pisces is compassionate, intuitive, and values emotional depth. They can create a safe and comforting space for each other, where they can freely express their emotions and provide support. Both signs are romantic and enjoy the simple pleasures of life. However, conflicts may arise due to their emotional sensitivity and occasional mood swings. Building trust, open communication, and understanding each other's emotional needs are important for a successful and fulfilling romantic relationship between Cancer and Pisces.",
  ],
  [
    "Leo and Virgo",
    "Leo and Virgo can have a challenging yet complementary romantic relationship. Leo is confident, passionate, and seeks admiration, while Virgo is practical, analytical, and values attention to detail. Their differences can create a dynamic and intriguing dynamic. Leo's warmth and charisma can attract Virgo, while Virgo's grounded nature can provide stability to Leo. Both signs value loyalty and have a desire for perfection. However, conflicts may arise due to Leo's need for attention and Virgo's critical nature. Building trust, open communication, and finding a balance between Leo's need for admiration and Virgo's need for practicality are important for a successful and fulfilling romantic relationship between Leo and Virgo.",
  ],
  [
    "Leo and Libra",
    "Leo and Libra can have a harmonious and passionate romantic relationship. Leo is confident, passionate, and seeks admiration, while Libra is charming, diplomatic, and values balance and harmony. Their shared love for beauty and social connections can create a vibrant and affectionate bond. Leo's warmth and charisma can captivate Libra, while Libra's grace and ability to compromise can create a harmonious atmosphere. Both signs appreciate romance and enjoy indulging in the finer things in life. However, conflicts may arise due to Leo's need for attention and Libra's occasional indecisiveness. Building trust, open communication, and finding a balance between Leo's need for excitement and Libra's desire for harmony are important for a successful and fulfilling romantic relationship between Leo and Libra.",
  ],
  [
    "Leo and Scorpio",
    "Leo and Scorpio can have a passionate and intense romantic relationship. Leo is confident, passionate, and seeks admiration, while Scorpio is mysterious, intense, and values deep connections. Their strong personalities can create a magnetic and transformative bond. Leo's warmth and charisma can attract Scorpio, while Scorpio's depth and intensity can intrigue Leo. Both signs value loyalty and have a desire for deep emotional connection. However, conflicts may arise due to Leo's need for attention and Scorpio's occasional possessiveness. Building trust, open communication, and embracing each other's emotional depths are important for a successful and fulfilling romantic relationship between Leo and Scorpio.",
  ],
  [
    "Leo and Sagittarius",
    "Leo and Sagittarius can have an exciting and adventurous romantic relationship. Leo is confident, passionate, and seeks admiration, while Sagittarius is adventurous, independent, and values freedom. Their shared love for adventure and zest for life can create a vibrant and passionate connection. Leo's warmth and charisma can captivate Sagittarius, while Sagittarius' optimistic and open-minded nature can inspire Leo. Both signs appreciate spontaneity and have a strong desire for personal growth. However, conflicts may arise due to Leo's need for attention and Sagittarius' occasional restlessness. Building trust, open communication, and embracing each other's need for freedom are important for a successful and fulfilling romantic relationship between Leo and Sagittarius.",
  ],
  [
    "Leo and Capricorn",
    "Leo and Capricorn can have a complementary yet challenging romantic relationship. Leo is confident, passionate, and seeks admiration, while Capricorn is disciplined, ambitious, and values stability. Their differences can create a dynamic and intriguing dynamic. Leo's warmth and charisma can attract Capricorn, while Capricorn's grounded nature can provide stability to Leo. Both signs value loyalty and have a strong desire for success. However, conflicts may arise due to Leo's need for attention and Capricorn's focus on practicality. Building mutual respect, open communication, and finding a balance between Leo's desire for excitement and Capricorn's need for stability are important for a successful and fulfilling romantic relationship between Leo and Capricorn.",
  ],
  [
    "Leo and Aquarius",
    "Leo and Aquarius can have an exciting and dynamic romantic relationship. Leo is confident, passionate, and seeks admiration, while Aquarius is independent, unconventional, and values intellectual stimulation. Their differences can create a unique and electrifying connection. Leo's warmth and charisma can captivate Aquarius, while Aquarius' intellectual depth and innovative thinking can intrigue Leo. Both signs appreciate individuality and have a desire to make a positive impact in the world. However, conflicts may arise due to Leo's need for attention and Aquarius' occasional detachment. Building trust, open communication, and embracing each other's independence are important for a successful and fulfilling romantic relationship between Leo and Aquarius.",
  ],
  [
    "Leo and Pisces",
    "Leo and Pisces can have a complex yet captivating romantic relationship. Leo is confident, charismatic, and seeks admiration, while Pisces is compassionate, imaginative, and seeks emotional connection. Their differences can create a dynamic and complementary bond. Leo's warmth and passion can ignite Pisces' creativity and inspire them, while Pisces' emotional depth and sensitivity can bring out Leo's softer side. Both signs value romance and can indulge in grand gestures of love. However, conflicts may arise due to Leo's need for attention and Pisces' occasional escapism. Building trust, open communication, and embracing each other's unique qualities are important for a successful and fulfilling romantic relationship between Leo and Pisces.",
  ],
  [
    "Virgo and Libra",
    "Virgo and Libra can form a harmonious and balanced romantic relationship. Virgo is practical, detail-oriented, and seeks stability, while Libra is diplomatic, sociable, and values harmony. They can complement each other well, with Virgo providing practicality and organization, and Libra bringing a sense of balance and fairness to the relationship. Both signs value communication and intellectual connection, and they can engage in stimulating conversations. Virgo's attention to detail can be appreciated by Libra, while Libra's social nature can help Virgo to be more outgoing. However, conflicts may arise due to Virgo's occasional critical nature and Libra's desire for harmony. Finding a balance between personal needs and compromise, along with open and honest communication, are important for a successful and fulfilling romantic relationship between Virgo and Libra.",
  ],
  [
    "Virgo and Scorpio",
    "Virgo and Scorpio can form a deep and passionate romantic relationship. Both signs share a desire for emotional intimacy and authenticity, which can create a strong connection between them. Virgo is practical, analytical, and seeks stability, while Scorpio is intense, intuitive, and seeks depth. They can understand and appreciate each other's complexities, forming a bond built on trust and loyalty. Virgo's attention to detail can complement Scorpio's investigative nature, while Scorpio's emotional depth can bring out Virgo's hidden passions. However, conflicts may arise due to Virgo's occasional critical nature and Scorpio's possessiveness. Open and honest communication, mutual understanding, and embracing each other's vulnerabilities are crucial for a successful and fulfilling romantic relationship between Virgo and Scorpio.",
  ],
  [
    "Virgo and Sagittarius",
    "Virgo and Sagittarius can have a challenging yet exciting romantic relationship. Virgo is practical, detail-oriented, and seeks stability, while Sagittarius is adventurous, free-spirited, and seeks new experiences. They have different approaches to life, with Virgo focusing on practicality and Sagittarius seeking exploration and freedom. However, their differences can also be a source of attraction. Virgo can provide grounding and stability to Sagittarius' life, while Sagittarius can inspire Virgo to embrace spontaneity and broaden their horizons. Both signs value honesty and authenticity, which can contribute to open and meaningful communication. However, conflicts may arise due to Virgo's occasional critical nature and Sagittarius' need for personal freedom. Building understanding, compromise, and finding a balance between stability and adventure are important for a successful romantic relationship between Virgo and Sagittarius.",
  ],
  [
    "Virgo and Capricorn",
    "Virgo and Capricorn can form a strong and harmonious romantic relationship. Both signs share similar traits such as practicality, ambition, and a focus on stability. Virgo is detail-oriented, analytical, and seeks perfection, while Capricorn is disciplined, responsible, and values hard work. They can understand and appreciate each other's drive for success and desire for a secure future. Their shared values and commitment to building a solid foundation can create a stable and enduring bond. However, conflicts may arise due to Virgo's occasional critical nature and Capricorn's occasional rigidity. Open communication, mutual support, and finding a balance between practicality and spontaneity are important for a successful romantic relationship between Virgo and Capricorn.",
  ],
  [
    "Virgo and Aquarius",
    "Virgo and Aquarius can form an intellectually stimulating and unconventional romantic relationship. Virgo is practical, detail-oriented, and seeks stability, while Aquarius is independent, forward-thinking, and values personal freedom. They can be drawn to each other's unique qualities and enjoy engaging in deep conversations and debates. Virgo's practicality can provide grounding to Aquarius' innovative ideas, while Aquarius can inspire Virgo to think outside the box and embrace new perspectives. However, conflicts may arise due to Virgo's occasional critical nature and Aquarius' need for independence. Building trust, open communication, and finding a balance between personal freedom and commitment are important for a successful romantic relationship between Virgo and Aquarius.",
  ],
  [
    "Virgo and Pisces",
    "Virgo and Pisces can create a beautiful and complementary romantic relationship. Virgo is practical, detail-oriented, and seeks stability, while Pisces is dreamy, intuitive, and deeply emotional. Their differences can attract them to each other, with Virgo providing structure and stability to Pisces' imaginative world, and Pisces bringing emotional depth and sensitivity to Virgo's life. They can create a nurturing and supportive environment for each other, with Virgo offering practical advice and Pisces providing emotional understanding. However, conflicts may arise due to Virgo's occasional critical nature and Pisces' tendency towards escapism. Open and honest communication, mutual respect, and embracing each other's strengths can lead to a harmonious and loving romantic relationship between Virgo and Pisces.",
  ],
  [
    "Libra and Scorpio",
    "Libra and Scorpio can create a passionate and intense romantic relationship. Libra, ruled by Venus, values harmony, beauty, and diplomacy, while Scorpio is deep, emotional, and seeks profound connections. They can experience a magnetic attraction and a deep emotional bond. Libra's charm and ability to see different perspectives can balance Scorpio's intensity, while Scorpio can bring depth and intensity to Libra's life. Both signs value loyalty and commitment, which can form a strong foundation for their relationship. However, conflicts may arise due to Libra's desire for harmony and Scorpio's occasional possessiveness. Building trust, open communication, and embracing each other's emotional needs are crucial for a successful romantic relationship between Libra and Scorpio.",
  ],
  [
    "Libra and Sagittarius",
    "Libra and Sagittarius can have an exciting and adventurous romantic relationship. Libra, ruled by Venus, values harmony, beauty, and diplomacy, while Sagittarius is independent, optimistic, and seeks freedom. They can enjoy a vibrant and intellectually stimulating connection, sharing a love for exploration, new experiences, and philosophical discussions. Libra's charm and ability to balance conflicting viewpoints can complement Sagittarius' openness and enthusiasm. However, conflicts may arise due to Libra's desire for commitment and Sagittarius' occasional need for personal space. Honoring each other's freedom, maintaining open communication, and finding a balance between togetherness and independence are important for a successful romantic relationship between Libra and Sagittarius.",
  ],
  [
    "Libra and Capricorn",
    "Libra and Capricorn can create a complementary and harmonious romantic relationship. Libra, ruled by Venus, values harmony, beauty, and diplomacy, while Capricorn is practical, ambitious, and seeks stability. They can bring balance to each other's lives, with Libra offering charm, grace, and a focus on emotional connection, while Capricorn adds stability, loyalty, and a sense of responsibility. Their shared desire for commitment and building a secure future can create a strong foundation for their relationship. However, conflicts may arise due to Libra's indecisiveness and Capricorn's occasional emotional reserve. Open and honest communication, mutual respect, and understanding each other's needs are essential for a successful romantic relationship between Libra and Capricorn.",
  ],
  [
    "Libra and Aquarius",
    "Libra and Aquarius can form a unique and intellectually stimulating romantic relationship. Libra, ruled by Venus, values harmony, beauty, and diplomacy, while Aquarius is independent, forward-thinking, and seeks intellectual connections. They can engage in thought-provoking conversations and share a deep mutual respect for each other's intellect. Libra's charm and ability to compromise can balance Aquarius' independent nature, while Aquarius can inspire Libra to think outside the box and embrace new ideas. However, conflicts may arise due to Libra's desire for harmony and Aquarius' occasional detachment. Building trust, open communication, and finding a balance between personal freedom and togetherness are essential for a successful romantic relationship between Libra and Aquarius.",
  ],
  [
    "Libra and Pisces",
    "Libra and Pisces can create a harmonious and deeply emotional romantic relationship. Libra, ruled by Venus, values balance, harmony, and beauty, while Pisces is a dreamy and compassionate sign, governed by Neptune. Their shared appreciation for art, romance, and emotional connection can create a strong bond between them. Libra's charm and diplomacy can help balance Pisces' emotional intensity, while Pisces' empathy and understanding can bring comfort and support to Libra. Both signs seek harmony and avoid conflict, making them compatible in navigating the ups and downs of a romantic partnership. However, conflicts may arise due to Libra's indecisiveness and Pisces' occasional escapism. Open communication, compromise, and nurturing the emotional needs of each other are key to a successful romantic relationship between Libra and Pisces.",
  ],
  [
    "Scorpio and Sagittarius",
    "Scorpio and Sagittarius can have a passionate and dynamic romantic relationship. Scorpio is intense, deeply emotional, and values loyalty and commitment, while Sagittarius is adventurous, optimistic, and seeks freedom. Their differences can create both excitement and challenges in the relationship. Scorpio's need for emotional depth may clash with Sagittarius' desire for independence and exploration. However, if both partners are willing to appreciate and respect each other's individuality, they can learn and grow together. Scorpio can teach Sagittarius about the power of emotional connection and depth, while Sagittarius can inspire Scorpio to embrace spontaneity and broaden their horizons. Building trust, open communication, and finding a balance between freedom and commitment are crucial for a successful romantic relationship between Scorpio and Sagittarius.",
  ],
  [
    "Scorpio and Capricorn",
    "Scorpio and Capricorn can form a deeply committed and powerful romantic relationship. Both signs are determined, ambitious, and value loyalty and stability. Scorpio brings intensity, passion, and emotional depth, while Capricorn adds practicality, reliability, and a strong sense of responsibility. Their shared focus on long-term goals and their ability to support and understand each other's ambitions can create a strong foundation for their relationship. However, conflicts may arise due to Scorpio's possessiveness and Capricorn's occasional emotional reserve. Building trust, open communication, and honoring each other's need for personal space are essential for a successful romantic relationship between Scorpio and Capricorn.",
  ],
  [
    "Scorpio and Aquarius",
    "Scorpio and Aquarius can have a complex and intriguing romantic relationship. Scorpio is intense, passionate, and values deep emotional connections, while Aquarius is independent, intellectual, and seeks freedom. Their differences can create both attraction and challenges in the relationship. Scorpio's need for emotional depth may clash with Aquarius' aloofness at times. However, if both partners are willing to understand and appreciate each other's unique qualities, they can create a dynamic and transformative bond. Scorpio can teach Aquarius about the power of vulnerability and emotional connection, while Aquarius can help Scorpio embrace new perspectives and intellectual stimulation. Building trust, open communication, and embracing each other's individuality are crucial for a successful romantic relationship between Scorpio and Aquarius.",
  ],
  [
    "Scorpio and Pisces",
    "Scorpio and Pisces can have an intensely passionate and emotionally deep romantic relationship. Both signs are highly sensitive, intuitive, and value emotional connection. Scorpio brings intensity, loyalty, and a desire for intimacy, while Pisces adds compassion, creativity, and a dreamy nature. They can create a profound bond based on mutual understanding and shared emotional depth. However, conflicts may arise due to Scorpio's possessiveness and Pisces' occasional escapism. Building trust, open communication, and respecting each other's boundaries are essential for a successful romantic relationship between Scorpio and Pisces.",
  ],
  [
    "Sagittarius and Capricorn",
    "Sagittarius and Capricorn can have a challenging yet potentially rewarding romantic relationship. Sagittarius is adventurous, optimistic, and values personal freedom, while Capricorn is practical, ambitious, and seeks stability. Their differing approaches to life may create conflicts, as Sagittarius may feel restrained by Capricorn's need for structure and security. However, if both partners are willing to understand and appreciate each other's strengths, Sagittarius can bring spontaneity and excitement to Capricorn's life, while Capricorn can provide stability and grounding to Sagittarius. Open communication, compromise, and finding a balance between freedom and commitment are crucial for a successful romantic relationship.",
  ],
  [
    "Sagittarius and Aquarius",
    "Sagittarius and Aquarius can have an exciting and intellectually stimulating romantic relationship. Sagittarius brings adventure, optimism, and a love for exploration, while Aquarius adds uniqueness, intellectual depth, and a strong sense of individuality. Both signs value independence and freedom, allowing them to support each other's personal growth. Their shared love for intellectual conversations and exploration can create a strong bond. However, conflicts may arise due to Sagittarius' need for spontaneity and Aquarius' occasional emotional detachment. Finding a balance between personal freedom and emotional connection is crucial for a successful romantic relationship between Sagittarius and Aquarius.",
  ],
  [
    "Sagittarius and Pisces",
    "Sagittarius and Pisces can have an intriguing and complementary romantic relationship. Sagittarius brings adventure, optimism, and a love for exploration, while Pisces adds sensitivity, intuition, and emotional depth. Sagittarius appreciates Pisces' compassion and dreamy nature, while Pisces is drawn to Sagittarius' enthusiasm and sense of freedom. However, conflicts may arise due to Sagittarius' need for independence and Pisces' desire for emotional security. Finding a balance between spontaneity and emotional connection is essential for a successful romantic relationship.",
  ],
  [
    "Capricorn and Aquarius",
    "Capricorn and Aquarius can have a unique and potentially challenging romantic relationship. Capricorn is practical, ambitious, and values stability, while Aquarius is independent, unconventional, and seeks intellectual stimulation. Capricorn may struggle with Aquarius' need for freedom and can find them emotionally detached at times. However, if both partners are willing to communicate openly and find a balance between personal space and emotional connection, their differences can be a source of growth and excitement in the relationship.",
  ],
  [
    "Capricorn and Pisces",
    "Capricorn and Pisces can have a contrasting yet potentially harmonious romantic relationship. Capricorn brings stability, ambition, and practicality, while Pisces adds emotional depth, sensitivity, and imagination. Capricorn's grounded nature can provide a sense of security that Pisces appreciates, while Pisces' ability to connect on an emotional level can draw Capricorn out of their shell. However, conflicts may arise due to Capricorn's focus on material success and Pisces' dreamy nature, requiring communication and compromise to find a balance between practicality and emotional connection.",
  ],
  [
    "Aquarius and Pisces",
    "Aquarius and Pisces can have an intriguing romantic relationship. Aquarius brings intellectual stimulation and independence, while Pisces adds emotional depth and compassion. However, Aquarius' detachment and Pisces' need for constant emotional support may create challenges. Open communication and finding a balance between emotional intimacy and personal space are essential for success.",
  ],
  [
    "Aries and Aries",
    "Aries and Aries can experience an exciting and passionate romance. Both individuals are energetic, assertive, and adventurous, which creates a fiery and dynamic connection. They share a strong drive for independence and individuality, which can lead to a healthy level of mutual respect. However, conflicts may arise due to their competitive nature and desire for dominance. It's crucial for both Aries partners to practice patience, compromise, and effective communication to maintain a harmonious romantic relationship.",
  ],
  [
    "Taurus and Taurus",
    "When two Taurus individuals come together in a romantic relationship, they create a stable and grounded connection. Both partners value security, loyalty, and commitment, which form the foundation of their relationship. They share similar tastes and appreciate the finer things in life, leading to a shared love for comfort and indulgence. However, both Taurus individuals may also exhibit stubbornness and a strong need for control, which can lead to occasional conflicts. Patience, compromise, and open communication are essential for maintaining harmony and balance in their romantic bond.",
  ],
  [
    "Gemini and Gemini",
    "When two Gemini individuals enter into a romantic relationship, it can be a lively and intellectually stimulating bond. Both partners are naturally curious, adaptable, and enjoy engaging in diverse conversations. They share a love for exploration, new experiences, and social interactions, which can make their relationship dynamic and exciting. However, the challenge arises when it comes to commitment and emotional depth. Geminis may struggle with consistency and can easily get distracted, leading to a lack of stability in the relationship. Both partners need to make a conscious effort to communicate openly, express their feelings, and work on building trust and emotional connection to maintain a fulfilling romantic relationship.",
  ],
  [
    "Cancer and Cancer",
    "When two Cancer individuals come together in a romantic relationship, they create a deep and nurturing connection. Both partners share a strong emotional bond and value security, stability, and home life. They understand each other's need for comfort, support, and a sense of belonging. Their relationship is likely to be filled with love, care, and understanding. However, the challenge arises when both partners become overly sensitive or moody, which can lead to emotional clashes or passive-aggressive behavior. It's crucial for Cancer partners to communicate openly, express their feelings, and provide reassurance and empathy to maintain a harmonious and loving romantic relationship.",
  ],
  [
    "Leo and Leo",
    "When two Leo individuals come together in a romantic relationship, sparks are bound to fly. They share a passionate and dynamic connection, fueled by their vibrant personalities and desire for attention and admiration. Both partners enjoy being in the spotlight and crave excitement and adventure in their relationship. Their love is often grand and theatrical, with grand gestures, extravagant dates, and an abundance of affection. However, conflicts may arise when both partners seek dominance and attention, leading to power struggles or clashes of ego. It's important for Leo partners to learn to share the spotlight, appreciate each other's accomplishments, and find a balance between asserting their individuality and nurturing the relationship.",
  ],
  [
    "Virgo and Virgo",
    "When two Virgo individuals come together in a romantic relationship, they create a bond based on shared values, practicality, and a mutual desire for stability. Both partners are detail-oriented, analytical, and seek perfection in their lives and relationships. They appreciate each other's intellect, reliability, and dedication. The relationship between two Virgos is likely to be well-organized, structured, and focused on personal growth. They excel in communication, problem-solving, and supporting each other's goals. However, their attention to detail and tendency to be critical can sometimes lead to over-analysis or nitpicking. It's important for Virgo partners to cultivate patience, understanding, and the ability to see the bigger picture in order to maintain harmony in their relationship.",
  ],
  [
    "Libra and Libra",
    "When two Libra individuals come together in a romantic relationship, they create a harmonious and balanced partnership. Both partners value peace, harmony, and aesthetics in their lives, which forms a strong foundation for their connection. They have a natural understanding of each other's need for fairness, compromise, and diplomacy. Libra partners enjoy intellectual conversations, socializing, and engaging in cultural activities together. They appreciate beauty, art, and elegance, and strive to create a harmonious and aesthetically pleasing environment. However, their desire for balance and indecisiveness can sometimes lead to challenges in decision-making and assertiveness. It's important for Libra partners to communicate openly, express their needs and desires, and find a healthy balance between giving and receiving in the relationship.",
  ],
  [
    "Scorpio and Scorpio",
    "When two Scorpio individuals come together in a romantic relationship, their connection is intense, passionate, and transformative. Both partners have a deep emotional depth and are drawn to the mysteries of life. They share a powerful bond built on trust, loyalty, and a desire for emotional intimacy. Scorpio partners are highly intuitive and perceptive, allowing them to understand each other's needs and desires on a profound level. They are both fiercely loyal and protective of their relationship, which creates a sense of security and stability. However, their intense personalities can sometimes lead to power struggles and possessiveness. It's crucial for Scorpio partners to communicate openly, express their emotions constructively, and practice empathy and understanding to navigate potential conflicts. When they embrace vulnerability and allow their relationship to evolve and grow, Scorpio partners can experience a deep and transformative love.",
  ],
  [
    "Sagittarius and Sagittarius",
    "When two Sagittarius individuals come together in a romantic relationship, they embark on an exciting and adventurous journey. Both partners share a love for freedom, exploration, and new experiences. They have a strong desire for personal growth and enjoy expanding their horizons together. Sagittarius partners have a positive and optimistic outlook on life, which creates a vibrant and enthusiastic relationship. They inspire each other to pursue their passions and embrace new opportunities. However, their independent nature can sometimes lead to a lack of commitment or a need for personal space. It's important for Sagittarius partners to communicate openly, establish trust, and find a balance between freedom and togetherness. When they embrace the spirit of adventure and maintain a sense of curiosity, Sagittarius partners can create a dynamic and fulfilling romantic bond.",
  ],
  [
    "Capricorn and Capricorn",
    "When two Capricorn individuals come together in a romantic relationship, they form a strong and stable bond. Both partners share a practical and ambitious nature, valuing hard work, discipline, and long-term goals. They have a deep respect for tradition, commitment, and responsibility, which forms the foundation of their relationship. Capricorn partners are dedicated and reliable, supporting each other's ambitions and striving for success together. They understand the importance of financial stability and create a secure and comfortable home environment. However, their focus on work and responsibilities can sometimes lead to a lack of spontaneity or emotional expression. It's important for Capricorn partners to make time for leisure, relaxation, and emotional connection to nurture their romantic bond. When they combine their determination, loyalty, and shared values, Capricorn partners can build a lasting and fulfilling romantic partnership.",
  ],
  [
    "Aquarius and Aquarius",
    "When two Aquarius individuals come together in a romantic relationship, they form a unique and intellectually stimulating bond. Both partners value their individuality, freedom, and intellectual pursuits. They are drawn to each other's innovative ideas, unconventional thinking, and progressive outlook on life. Aquarius partners have a deep desire to make a difference in the world and often share common interests in humanitarian causes or social justice. They enjoy engaging in deep conversations, exchanging ideas, and exploring new concepts together. However, their independent nature and need for personal freedom can sometimes create a sense of detachment or emotional distance in the relationship. It's important for Aquarius partners to establish open lines of communication, express their emotions, and make an effort to connect on an emotional level. When they combine their intellectual compatibility, shared values, and respect for individuality, Aquarius partners can create a unique and intellectually fulfilling romantic partnership.",
  ],
  [
    "Pisces and Pisces",
    "When two Pisces individuals come together in a romantic relationship, they create a deep and emotionally rich connection. Both partners have a sensitive and compassionate nature, making them highly attuned to each other's emotional needs. They understand and empathize with each other's emotions, creating a safe and nurturing space for love to flourish. Pisces partners share a strong spiritual and intuitive connection, often feeling like they can understand each other on a profound level without the need for words. They enjoy creating a romantic and dreamy atmosphere, filled with love, romance, and imaginative gestures. However, their deep emotional sensitivity can sometimes lead to emotional intensity or mood swings within the relationship. It's important for Pisces partners to practice effective communication, establish healthy boundaries, and support each other's emotional well-being. When they embrace their shared empathy, emotional depth, and spiritual connection, Pisces partners can create a truly magical and soulful romantic bond.",
  ],
]);
export {
  zodiacAngleMappingLeft,
  zodiacAngleMappingRight,
  zodiacDateRanges,
  romantic,
};
