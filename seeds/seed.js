exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("elements").del();
  await knex("products").del();
  await knex("comments").del();
  await knex("users").insert([
    {
      id: 1,
      name: "Olivia Johnson",
      email: "olivia.johnson@example.com",
    },
    {
      id: 2,
      name: "Ethan Parker",
      email: "ethan.parker@example.com",
    },
    {
      id: 3,
      name: "Ava Williams",
      email: "ava.williams@example.com",
    },
    {
      id: 4,
      name: "Noah Davis",
      email: "noah.davis@example.com",
    },
    {
      id: 5,
      name: "Sophia Taylor",
      email: "sophia.taylor@example.com",
    },
  ]);
  await knex("elements").insert([
    {
      id: 1,
      name: "Grapeseed Oil",
      description:
        "Made from seeds of Vitis vinifera, this light oil absorbs quickly to moisturise without clogging pores. It also boosts circulation which can reduce the appearance of blemishes, wrinkles, sun damage, stretch marks, cellulite and varicose veins. Soothes eczema",
    },
    {
      id: 2,
      name: "Olive Oil",
      description:
        "Made from fruit of Olea europa, this helps maintain smooth, soft skin and protects against damaging UV rays. Anti-bacterial and anti-microbial phenols prevent inflammation and infection. Offers relief to joints and muscles affected by sprains or arthritis.",
    },
    {
      id: 3,
      name: "Jojoba Oil",
      description:
        "Made from seeds of Simmondsia chinensis, Jojoba oil is actually liquid wax ester, not an oil and has a chemical composition that is remarkably close to our skin’s natural sebum. It gently moisturises, soothes, and softens skin without leaving a greasy residue.",
    },
    {
      id: 4,
      name: "Sweet Almond Oil",
      description:
        "Made from Prunus dulcis, this oil can heal superficial skin burns, soothe dry and chapped skin, as well as skin affected by dermatosis, eczema, and psoriasis. Good for acne-prone or sensitive skin and can also help with varicose veins and spider veins.",
    },
    {
      id: 5,
      name: "Coconut Oil",
      description:
        "Made from Cocos nucifera, this oil hydrates and creates a protective barrier on the skin. Soothes sunburn, blisters, itchy skin, and promotes the growth of newer healthier skin.",
    },
    {
      id: 6,
      name: "Argan Oil",
      description:
        "Made from fruit of Argania spinosa, this oil hydrates, conditions, and softens hair and skin without leaving a greasy residue. Reduces appearance of wrinkles, soothes inflammation and irritation on acne-prone skin and can help reduce appearance of scarring.",
    },
    {
      id: 7,
      name: "Avacado Oil",
      description:
        "Made from fruit of Persea americana, this oil is ideal for those with rashes, eczema, psoriasis, and dry skin. It smooths the look of wrinkles, tightens skin, and diminishes the appearance of scars, age spots, and other unwanted blemishes.",
    },
    {
      id: 8,
      name: "Sunflower Oil",
      description:
        "Made from seeds of Helianthus annuus, this oil hydrates, softens, prevents against external damage, and aids in skin regeneration. It evens out skin tone while reducing the appearance of pores and eliminating acne-causing bacteria.",
    },
  ]);
  await knex("products").insert([
    {
      id: 1,
      name: "Cayenne & Ginger Muscle Salve",
      size: "30mL",
      price: 11,
      description:
        "Double-infused oil blend used to boost circulation, relieve pain, and reduce inflammation in joints and muscles.",
      instructions:
        "Rub a small amount onto affected areas twice daily. For best results use for at least two consecutive weeks.",
      ingredients:
        "Olive Oil, Sweet Almond Oil, Jojoba Oil, Vitamin E Oil, Cocoa Butter, Beeswax, Ginger, Black Pepper, Lavender, Eucalyptus, Cayenne, Turmeric, Dandelion, Peppermint.",
      image_path: "http://localhost:8080/images/01-muscle-salve.jpg",
    },
    {
      id: 2,
      name: "Coco² Lip Balm",
      size: "15mL",
      price: 5,
      description:
        "Used to help heal, hydrate, and repair. It protects while also moisturising and softening lips. A touch of anti-aging Vitamin E never hurts either. And it's glossy!",
      instructions: "Apply to lips as often as needed.",
      ingredients:
        "Cocoa Butter, Coconut Oil, Sweet Almond Oil, Sunflower Oil, Vitamin E Oil, Beeswax, Honey.",
      image_path: "http://localhost:8080/images/02-coco-lip-balm.jpg",
    },
    {
      id: 3,
      name: "Wildcraft Salve",
      size: "30mL",
      price: 11,
      description:
        "Hand-picked botanical blend can be used on eczema, psoriasis, burns, sunburns, bug bites, bruises, and cracked heels. Promotes healing and reduces itching.",
      instructions: "Gently apply a small amount as needed.",
      ingredients:
        "Olive Oil, Sweet Almond Oil, Jojoba Oil, Vitamin E Oil, Cocoa Butter, Beeswax, Lavender, Peppermint, Eucalyptus, Dandelion, Lemon Balm, Yarrow, Nettle, Horsetail, Plantain, Wild Strawberry, Lavender, Peppermint.",
      image_path: "http://localhost:8080/images/03-wildcraft-salve.jpg",
    },
    {
      id: 4,
      name: "Calendula Salve",
      size: "30mL",
      price: 10,
      description:
        "The healing power of homegrown calendula with just a touch of lavender make this a fantastic all-purpose first aid salve. Streamlined in both ingredients and scent, this one can even be used for cradle cap on babies over three months of age.",
      instructions: "Gently apply a small amount as needed.",
      ingredients:
        "Calendula-infused Olive Oil, Grapeseed Oil, Shea Butter, Beeswax, Lavender, Rosemary Antioxidant.",
      image_path: "http://localhost:8080/images/04-calendula-salve.jpg",
    },
    {
      id: 5,
      name: "Headache Relief Roller",
      size: "10mL",
      price: 15,
      description:
        "A refreshing blend of peppermint, eucalyptus, and lavender that can help relieve sinus, tension, congestion, and stress headaches.",
      instructions:
        "Shake well. Roll onto forehead, temples, and pressure points.",
      ingredients:
        "Jojoba Oil, Sweet Almond Oil, Grapeseed Oil, Vitamin E Oil, Lavender, Eucalyptus, Peppermint.",
      image_path: "http://localhost:8080/images/05-headache-relief-roller.jpg",
    },
    {
      id: 6,
      name: "Citrus Face Serum",
      size: "15mL",
      price: 20,
      description:
        "Reduces appearance of scars and dark spots, reduces the signs of ageing, tightens skin, prevents moisture loss, boosts circulation, moisturises, protects against damage, and calms acne-prone or irritated skin. Light citrus scent.",
      instructions:
        "Warm 3-4 drops on palm of hand and massage onto face and neck before bed.",
      ingredients:
        "Jojoba Oil, Sweet Almond Oil, Grapeseed Oil, Rosehip Oil, Vitamin E Oil, Bergamot, Sweet Orange, Coriander, Clary Sage.",
      image_path: "http://localhost:8080/images/06-citrus-face-serum.jpg",
    },
    {
      id: 7,
      name: "Lavender Face Serum",
      size: "15mL",
      price: 20,
      description:
        "Infused for six weeks with lavender flowers from my own garden, this oil features the same healing and hydrating oils as the Citrus Face Serum, but with a very light lavender scent. Both serums are designed for all skin types.",
      instructions:
        "Warm 3-4 drops on palm of hand and massage onto face and neck before bed.",
      ingredients:
        "Jojoba Oil, Sweet Almond Oil, Grapeseed Oil, Rosehip Oil, Vitamin E Oil, Lavender.",
      image_path: "http://localhost:8080/images/07-lavender-face-serum.jpg",
    },
    {
      id: 8,
      name: "It Got Me! Itch Remedy",
      size: "10mL",
      price: 10,
      description:
        "Reduces pain, inflammation, and itch from bug bites, poison ivy, and other skin irritations including acne. Helps prevent infection and speed up healing",
      instructions: "Shake well. Roll onto affected areas. Repeat as needed.",
      ingredients: " Jojoba Oil, Witch Hazel, Tea Tree, Lavender.",
      image_path: "http://localhost:8080/images/08-it-got-me-itch-remedy.jpg",
    },
    {
      id: 9,
      name: "The Original Beard Oil",
      size: "30mL",
      price: 20,
      description:
        "Suitable for long beards, short beards, stubble, or even as an after-shaving serum. Blended to protect, rejuvenate, and hydrate. Also helps to reduce itch, heal skin, soften hair, and smells great, too!",
      instructions:
        "Warm 2-3 drops on palms and massage onto beard. Longer beards may require 1-2 additional drops.",
      ingredients:
        "Jojoba Oil, Sweet Almond Oil, Grapeseed Oil, Vitamin E Oil, Atlas Cedar, Vanilla 10 Fold, Eucalyptus, Clove, Sandalwood.",
      image_path: "http://localhost:8080/images/09-beard-oil.jpg",
    },
    {
      id: 10,
      name: "The Original Beard Balm",
      size: "60mL",
      price: 20,
      description:
        "Same scent profile and benefits as The Original Beard Oil, but with added argan, grapeseed and coconut oil, shea butter and beeswax to soften and tame your beard. Used for light styling or as a deep conditioner.",
      instructions:
        "Warm 2-3 drops on palms and massage onto beard. Longer beards may require 1-2 additional drops.",
      ingredients:
        "Argan Oil, Jojoba Oil, Coconut Oil, Grapeseed Oil, Beeswax, Cocoa Butter, Shea Butter, Sandalwood, Atlas Cedar, Vanilla 10 Fold, Eucalyptus, Clove, Rosemary Antioxidant.",
      image_path: "http://localhost:8080/images/10-beard-balm.jpg",
    },
    {
      id: 11,
      name: "Bath Tea",
      size: "150g",
      price: 15,
      description:
        "Want to enjoy a calming, stress relieving herbal bath that doesn’t involve 30 minutes of post-bath tub clean up?",
      instructions:
        "Add this sachet to the bath water while filling then simply toss it in the compost or trash bin after use.",
      ingredients:
        "Lemon Balm, Wild Strawberry, Plantain, Nettle, Wild Blackberry, Chamomile, Yarrow, Peppermint, Dame’s Rocket, Pea Flower, Red Clover, White Clover, Lemon Verbena, Marigold, Honeysuckle.",
      image_path: "http://localhost:8080/images/11-bath-tea.jpg",
    },
    {
      id: 12,
      name: " Citrus Refresher Shower Steamers",
      size: "150g",
      price: 10,
      description:
        "A citrus blend to help brighten your mood and start the day off right. Each scent comes in packs of five steamers. Each steamer is at least 30g and will last for one very, very long shower, or two-three shorter ones.",
      instructions:
        "Set steamer on ledge in shower out of direct spray. Sprinkle a few dtops of water to activate. As steam is produced, the scent will be released. The amount of water that hits it will determine the strendth of scent and the rate at which it will dissolve. Reactivate with more water as needed. Remove from shower and let dry between uses.",
      ingredients:
        "Baking Soda, Citric Acid, Corn Starch, Epsom Salt, Castor Oil, Orange, Lemon, Grapefruit.",
      image_path: "http://localhost:8080/images/12-citrus-refresher-ss.jpg",
    },
    {
      id: 13,
      name: "Sniffle Spa Shower Steamers",
      size: "150g",
      price: 10,
      description:
        "Excellent decongestant for the cold and flu season. Each scent comes in packs of five steamers. ",
      instructions:
        "Set steamer on ledge in shower out of direct spray. Sprinkle a few dtops of water to activate. As steam is produced, the scent will be released. The amount of water that hits it will determine the strendth of scent and the rate at which it will dissolve. Reactivate with more water as needed. Remove from shower and let dry between uses.",
      ingredients: "",
      image_path: "http://localhost:8080/images/13-sniffle-spa-ss.jpg",
    },
    {
      id: 14,
      name: "Headache Relief Shower Steamers",
      size: "150g",
      price: 10,
      description:
        "The same blend as our Headache Relief Roller, but in steamer form! Good for sinus, tension, congestion, and stress headaches. Each scent comes in packs of five steamers. ",
      instructions:
        "Set steamer on ledge in shower out of direct spray. Sprinkle a few dtops of water to activate. As steam is produced, the scent will be released. The amount of water that hits it will determine the strendth of scent and the rate at which it will dissolve. Reactivate with more water as needed. Remove from shower and let dry between uses.",
      ingredients:
        "Baking Soda, Citric Acid, Corn Starch, Epsom Salt, Castor Oil, Peppermint, Lavender, Eucalyptus.",
      image_path: "http://localhost:8080/images/14-headache-relief-ss.jpg",
    },
    {
      id: 15,
      name: "Autumn Witch Perfume",
      size: "10mL",
      price: 15,
      description:
        "A blend of vanilla, bergamot, grapefruit, and sandalwood. Our perfumes are made with skin-friendly oils and essential oils with no added ingredients to dry or irritate       your skin. ",
      instructions:
        "They are more subtle than sprays, so perfect for those who want to wear a scent but not overwhelm those around them. In roller form for exact application.",
      ingredients:
        "Jojoba Oil, Grapeseed Oil, Vanilla 10 Fold, Bergamot, Grapefruit, Sandalwood.",
      image_path: "http://localhost:8080/images/15-autumn-witch-perfume.jpg",
    },
  ]);
  await knex("comments").insert([
    {
      id: 1,
      user_id: 2,
      product_id: 1,
      title: "Game-Changer Muscle Salve for Active Lifestyles",
      comment:
        "This muscle salve is a game-changer! I've been dealing with muscle soreness after workouts, and this salve provides quick relief. The cooling sensation is amazing, and it absorbs well into the skin. Highly recommend for anyone with an active lifestyle!",
    },
    {
      id: 2,
      user_id: 5,
      product_id: 1,
      title: "Go-To Solution for Occasional Muscle Tension",
      comment:
        "I suffer from occasional muscle tension, and this salve has become my go-to solution. The natural ingredients are soothing, and I love the pleasant herbal scent. It doesn't leave a greasy residue, and I've noticed a significant improvement in muscle flexibility. A must-have for anyone looking for effective muscle support!",
    },
    {
      id: 3,
      user_id: 4,
      product_id: 2,
      title: "Lifesaver Lip Balm for Dry Winter Months",
      comment:
        "This lip balm is a lifesaver during the dry winter months! It keeps my lips hydrated for hours without feeling sticky. The subtle hint of mint is refreshing, and I love that it's made with natural ingredients. My new favorite go-to for soft and moisturized lips!",
    },
    {
      id: 4,
      user_id: 1,
      product_id: 2,
      title: "Nourishing Lip Balm with Organic Goodness",
      comment:
        "I've tried many lip balms, but this one stands out. The formula is super nourishing, and I've noticed a significant improvement in the texture of my lips. It's not just a quick fix – it provides long-lasting moisture. The packaging is cute, and I appreciate the commitment to using organic ingredients. Will definitely be repurchasing!",
    },
    {
      id: 5,
      user_id: 2,
      product_id: 3,
      title: "Miracle Worker Skin Salve for Stubborn Dry Patches",
      comment:
        "This skin salve is a miracle worker! I had a stubborn dry patch on my skin, and after using this salve for just a few days, it's completely gone. The texture is luxurious, and it absorbs quickly. I'm so impressed with the results!",
    },
    {
      id: 6,
      user_id: 3,
      product_id: 3,
      title: "Game-Changer Salve for Irritated and Sensitive Skin",
      comment:
        "I've been dealing with irritated skin for weeks, and this salve has been a game-changer. It calms redness and provides instant relief. The natural ingredients make me feel good about what I'm putting on my skin. Highly recommend to anyone with sensitive skin!",
    },
    {
      id: 7,
      user_id: 3,
      product_id: 4,
      title: "Versatile Salve for All Skin Issues",
      comment:
        "My go-to salve for all skin issues! Whether it's dryness, minor cuts, or chapped lips, this salve does it all. I appreciate the versatility, and the healing properties are amazing. It's a staple in my skincare routine now.",
    },
    {
      id: 8,
      user_id: 5,
      product_id: 4,
      title: "Spa Treatment Skin Salve with Calming Scent",
      comment:
        "I purchased this skin salve on a whim, and I'm so glad I did. It's like a spa treatment for my skin! The scent is calming, and the moisturizing effect lasts all day. My skin feels nourished and rejuvenated. Will definitely be repurchasing.",
    },
    {
      id: 9,
      user_id: 3,
      product_id: 5,
      title: "Lifesaver Headache Relief Roller for On-the-Go",
      comment:
        "The Headache Relief Roller is a lifesaver! I keep it in my bag for a quick pick-me-up throughout the day. The cooling sensation is invigorating, and the peppermint aroma is so refreshing. It's like a spa treatment in a convenient roller form. Love it!",
    },
    {
      id: 10,
      user_id: 1,
      product_id: 5,
      title: "Must-Have Headache Relief Roller for Tension",
      comment:
        "This Headache Relief Roller is a must-have for anyone dealing with tension or headaches. The roll-on application is convenient, and the peppermint oil provides instant relief. I use it on my temples and wrists, and it's become my go-to for a natural and soothing remedy. Highly recommended!",
    },
    {
      id: 11,
      user_id: 4,
      product_id: 6,
      title: "Citrus Face Serum - Burst of Sunshine for Skin",
      comment:
        "I'm obsessed with this citrus face serum! It's like a burst of sunshine for my skin. The lightweight formula absorbs quickly, leaving my face feeling hydrated and radiant. The citrus scent is uplifting, making my skincare routine a delightful experience. A game-changer!",
    },
    {
      id: 12,
      user_id: 2,
      product_id: 6,
      title: "Standout Citrus Face Serum for Healthy Glow",
      comment:
        "I've tried many face serums, but this citrus one is a standout. The blend of citrus oils gives my skin a healthy glow, and the serum is so nourishing. It's perfect for brightening dull skin, and I've noticed an improvement in my complexion. Love the natural ingredients and the refreshing fragrance!",
    },
    {
      id: 13,
      user_id: 5,
      product_id: 7,
      title: "Nighttime Essential Lavender Face Serum",
      comment:
        "This lavender face serum is a nighttime ritual essential for me! The calming scent helps me unwind, and the serum itself is incredibly hydrating. I wake up with softer, more supple skin. The lavender aroma creates a spa-like experience, making it a must-have in my skincare routine.",
    },
    {
      id: 14,
      user_id: 1,
      product_id: 7,
      title: "Calming Lavender Face Serum - Skin Soothing",
      comment:
        "I'm in love with this lavender face serum! It's a skin-soothing powerhouse. The lightweight texture absorbs quickly, leaving my skin feeling nourished and refreshed. The calming effect of lavender is a game-changer, and it's become my go-to for a relaxing and pampering self-care routine.",
    },
    {
      id: 15,
      user_id: 4,
      product_id: 8,
      title: "Itch Remedy - Instant Relief for Bites and Irritations",
      comment:
        "I can't thank this itch remedy enough! It's my go-to solution for insect bites and skin irritations. The fast-acting formula provides instant relief, and the cooling sensation is so soothing. It's a staple in my medicine cabinet, especially during the summer months. Highly recommend!",
    },
    {
      id: 16,
      user_id: 2,
      product_id: 8,
      title: "Quick Itch Solution with Gentle Ingredients",
      comment:
        "This itch remedy is a lifesaver for anyone dealing with allergies or rashes. It calms itching on contact, and the natural ingredients make it gentle on the skin. I keep it in my bag for on-the-go relief. If you're looking for an effective and quick itch solution, look no further. Five stars!",
    },
    {
      id: 17,
      user_id: 5,
      product_id: 9,
      title: "Beard Oil - Keeping It Soft, Smooth, and Manageable",
      comment:
        "I'm loving this beard oil! It keeps my beard soft, smooth, and manageable. The subtle scent is fantastic, not overpowering. It absorbs quickly without leaving a greasy feeling. It's become an essential part of my grooming routine, and I've noticed a significant improvement in the overall health of my beard.",
    },
    {
      id: 18,
      user_id: 3,
      product_id: 9,
      title: "Game-Changer Beard Oil for Healthy and Well-Groomed Beard",
      comment:
        "This beard oil is a game-changer! It tames frizz, adds shine, and the moisturizing effect is top-notch. The blend of oils is perfect, and it doesn't irritate my skin. I've received compliments on how healthy and well-groomed my beard looks. If you want a beard that feels as good as it looks, give this oil a try!",
    },
    {
      id: 19,
      user_id: 5,
      product_id: 10,
      title: "Must-Have Beard Balm for a Neat and Styled Look",
      comment:
        "This beard balm is a must-have for any beardsman! It provides the perfect hold without feeling heavy or greasy. The subtle scent is refreshing, and it keeps my beard looking neat and styled throughout the day. It's become my go-to grooming product for a well-maintained beard.",
    },
    {
      id: 20,
      user_id: 2,
      product_id: 10,
      title: "Woodsy Beard Balm - Spa Treatment for Your Beard",
      comment:
        "I've tried several beard balms, and this one stands out! The consistency is just right – not too thick, not too thin. It conditions my beard, eliminates frizz, and adds a natural shine. The woodsy scent is delightful. It's like giving my beard a spa treatment. Highly recommend for a soft and well-groomed beard!",
    },
    {
      id: 21,
      user_id: 4,
      product_id: 11,
      title: "Herbal Bath Tea - Pure Bliss in Your Tub",
      comment:
        "This herbal bath tea is pure bliss! The aromatic blend of herbs creates a soothing and relaxing experience in the tub. It leaves my skin feeling soft, and the herbal fragrance lingers for hours. It's like bringing a spa into my own bathroom. I look forward to my bath time now!",
    },
    {
      id: 22,
      user_id: 1,
      product_id: 11,
      title: "Soothing Herbal Bath Tea for Rejuvenated Skin",
      comment:
        "I'm in love with this herbal bath tea! The infusion of herbs not only smells amazing but also leaves my skin feeling rejuvenated. The fizzing action adds a touch of excitement to my bath, and the herbal blend is perfect for unwinding after a long day. A definite favorite in my self-care routine!",
    },
    {
      id: 23,
      user_id: 3,
      product_id: 12,
      title: "Morning Ritual with Invigorating Citrus Steamers",
      comment:
        "These citrus shower steamers are a game-changer for my morning routine! The invigorating citrus scent wakes me up and adds a burst of energy to my day. The steamers dissolve quickly, releasing the refreshing fragrance. It's like having a spa in my shower. Highly recommend!",
    },
    {
      id: 24,
      user_id: 2,
      product_id: 12,
      title: "Obsessed with Zesty Citrus Shower Steamers",
      comment:
        "I'm obsessed with these citrus shower steamers! The zesty aroma is exactly what I need to start my day on a positive note. The steamers create a spa-like atmosphere, and the citrus scent lingers in the air. It's the perfect way to turn an ordinary shower into a revitalizing experience. Will definitely be repurchasing!",
    },
    {
      id: 25,
      user_id: 3,
      product_id: 13,
      title: "Decongestant Steamers for Cold and Flu Relief",
      comment:
        "These decongestant shower steamers are a game-changer during cold and flu season! The menthol vapors are incredibly soothing, and they help clear my sinuses instantly. I love how they transform my shower into a mini spa, providing relief and making it easier to breathe. A must-have for anyone dealing with congestion!",
    },
    {
      id: 26,
      user_id: 1,
      product_id: 13,
      title: "Refreshing Decongestant Steamers - Breathe Easy",
      comment:
        "I swear by these decongestant shower steamers! The eucalyptus and menthol blend works wonders for relieving nasal congestion. The steamers dissolve quickly, releasing the therapeutic vapors. I use them whenever I feel a bit under the weather, and they make a significant difference. Highly recommend for a refreshing and decongesting shower experience!",
    },
    {
      id: 27,
      user_id: 5,
      product_id: 14,
      title: "Headache Relief Steamers - Mini Retreat for Senses",
      comment:
        "I suffer from frequent headaches, and these shower steamers have been a game-changer. The combination of soothing aromas helps alleviate tension, and the steamers dissolve quickly, creating a spa-like atmosphere. It's like a mini retreat for my senses. Highly recommend for anyone looking for a natural and effective headache relief solution!",
    },
    {
      id: 28,
      user_id: 4,
      product_id: 14,
      title: "Lifesaver Headache Relief - Transforming Showers",
      comment:
        "These headache relief shower steamers are a lifesaver! The blend of essential oils instantly eases tension and provides quick relief. I use them whenever I feel a headache coming on, and the calming effect is incredible. Transforming my shower into a soothing escape, these steamers are now a staple in my wellness routine.",
    },
    {
      id: 29,
      user_id: 4,
      product_id: 15,
      title: "Enchanting Perfume - Capturing Crisp Fall Days",
      comment:
        "This perfume is pure magic! The warm and cozy notes evoke memories of crisp fall days. It's the perfect fragrance for the season, and I love how it lingers throughout the day. It captures the essence of autumn in a bottle. Absolutely enchanting!",
    },
    {
      id: 30,
      user_id: 5,
      product_id: 15,
      title: "Magic - Embracing the Spirit of Autumn",
      comment:
        "I'm in love with this perfume! The blend of spices, woods, and a hint of sweetness is perfection. It's like wearing the essence of fall. Every time I wear it, I get compliments on how inviting and unique it is. A must-have for anyone who wants to embrace the spirit of autumn!",
    },
  ]);
};
