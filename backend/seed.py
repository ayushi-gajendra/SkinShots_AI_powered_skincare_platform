from app import create_app
from models import db, Product

app = create_app()

with app.app_context():

    db.create_all()
    
    if Product.query.count() == 0:
        items = [
            # --- Cleansers ---
            Product(category="Cleanser", skin_concern="Acne", name="Salicylic Acid 2% Gel Cleanser", description="Gently exfoliates and unclogs pores to treat and prevent acne.", price=349, image="/images/acne-cleanser.png"),
            Product(category="Cleanser", skin_concern="Blackheads", name="AHA + BHA Foaming Cleanser", description="Removes oil, dead skin, and debris to minimize blackheads and breakouts.", price=299, image="/images/blackheads-cleanser.png"),
            Product(category="Cleanser", skin_concern="Dark Spots", name="Vitamin C Brightening Cleanser", description="Boosts radiance and helps fade pigmentation with antioxidant support.", price=249, image="/images/darkspots-cleanser.png"),
            Product(category="Cleanser", skin_concern="Pores", name="Niacinamide Pore-Refining Cleanser", description="Balances oil production and visibly minimizes enlarged pores.", price=279, image="/images/pores-cleanser.png"),
            Product(category="Cleanser", skin_concern="Wrinkles", name="Ceramide + Hyaluronic Hydrating Cleanser", description="Cleanses without stripping moisture, strengthens the skin barrier, and supports anti-aging care.", price=399, image="/images/wrinkles-cleanser.png"),

            # --- Serums ---
            Product(category="Serum", skin_concern="Acne", name="Niacinamide 10% + Zinc Serum", description="Reduces acne and inflammation while controlling oil production.", price=499, image="/images/acne-serum.png"),
            Product(category="Serum", skin_concern="Blackheads", name="Salicylic Acid 2% Exfoliating Serum", description="Unclogs pores and prevents the formation of blackheads and whiteheads.", price=449, image="/images/blackheads-serum.png"),
            Product(category="Serum", skin_concern="Dark Spots", name="Vitamin C 15% Brightening Serum", description="Fades dark spots, brightens skin tone, and promotes collagen synthesis.", price=549, image="/images/darkspots-serum.png"),
            Product(category="Serum", skin_concern="Pores", name="Niacinamide + Zinc Pore-Minimizing Serum", description="Tightens pores, controls excess oil, and refines overall skin texture.", price=499, image="/images/pores-serum.png"),
            Product(category="Serum", skin_concern="Wrinkles", name="Retinol 0.3% Anti-Aging Serum", description="Boosts collagen production and reduces fine lines and wrinkles over time.", price=599, image="/images/wrinkles-serum.png"),

            # --- Moisturisers ---
            Product(category="Moisturiser", skin_concern="Acne", name="Oil-Free Gel Moisturiser with Niacinamide", description="Lightweight hydration that controls excess sebum and soothes acne-prone skin.", price=499, image="/images/acne-moisturiser.png"),
            Product(category="Moisturiser", skin_concern="Blackheads", name="Water-Based Gel Cream with Green Tea", description="Non-comedogenic moisturizer that unclogs pores and balances oil production.", price=449, image="/images/blackheads-moisturiser.png"),
            Product(category="Moisturiser", skin_concern="Dark Spots", name="Vitamin C & Hyaluronic Acid Moisturiser", description="Brightens dull skin while deeply hydrating to improve overall tone.", price=549, image="/images/darkspots-moisturiser.png"),
            Product(category="Moisturiser", skin_concern="Pores", name="Niacinamide + Zinc Mattifying Moisturiser", description="Tightens pores and gives a smooth matte finish without clogging skin.", price=499, image="/images/pores-moisturiser.png"),
            Product(category="Moisturiser", skin_concern="Wrinkles", name="Peptide & Ceramide Rejuvenating Cream", description="Nourishes mature skin, boosts collagen, and restores elasticity.", price=599, image="/images/wrinkles-moisturiser.png"),

            # --- Sunscreens ---
            Product(category="Sunscreen", skin_concern="Acne", name="Mattifying Zinc Oxide Sunscreen", description="Oil-free mineral sunscreen that protects without clogging pores.", price=599, image="/images/acne-sunscreen.png"),
            Product(category="Sunscreen", skin_concern="Blackheads", name="Gel-Based SPF 50 Sunscreen with Green Tea", description="Lightweight and non-comedogenic formula ideal for oily, congested skin.", price=549, image="/images/blackheads-sunscreen.png"),
            Product(category="Sunscreen", skin_concern="Dark Spots", name="Niacinamide + Vitamin C Brightening Sunscreen", description="Prevents pigmentation and protects against UV-induced darkening.", price=649, image="/images/darkspots-sunscreen.png"),
            Product(category="Sunscreen", skin_concern="Pores", name="Pore-Blurring SPF 50 Sunscreen", description="Smooth, silicone-based texture that minimizes appearance of pores.", price=599, image="/images/pores-sunscreen.png"),
            Product(category="Sunscreen", skin_concern="Wrinkles", name="Anti-Aging SPF 50 Sunscreen with Peptides", description="Broad spectrum UV protection that prevents fine lines and supports collagen.", price=699, image="/images/wrinkles-sunscreen.png"),

        ]
        db.session.bulk_save_objects(items)
        db.session.commit()
        print("Seeded database with products.")
    else:
        print("Products already exist, no action taken.")